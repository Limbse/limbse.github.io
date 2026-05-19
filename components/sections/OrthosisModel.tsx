"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Suspense, useMemo, useRef, useState } from "react";
import type { Group, Mesh } from "three";
import { Box3, MeshBasicMaterial, Vector3 } from "three";

const MODEL_URL = "/assets/3d/orthosis.glb";
const BASE_ROTATION: [number, number, number] = [-0.08, -0.62, -0.04];

function WireframeOrthosis({ shouldAnimate }: { shouldAnimate: boolean }) {
  const groupRef = useRef<Group>(null);
  const rotationYRef = useRef(BASE_ROTATION[1]);
  const { scene } = useGLTF(MODEL_URL);

  const normalizedScene = useMemo(() => {
    const clone = scene.clone(true);

    clone.traverse((object) => {
      const mesh = object as Mesh;
      if (!mesh.isMesh || !mesh.geometry) return;

      mesh.material = new MeshBasicMaterial({
        color: "#3BB7A2",
        transparent: true,
        opacity: 0.98,
        wireframe: true,
      });
    });

    const box = new Box3().setFromObject(clone);
    const center = new Vector3();
    const size = new Vector3();
    box.getCenter(center);
    box.getSize(size);

    const maxAxis = Math.max(size.x, size.y, size.z);
    const scale = maxAxis > 0 ? 3.75 / maxAxis : 1;

    clone.scale.setScalar(scale);
    clone.position.set(
      -center.x * scale,
      -center.y * scale,
      -center.z * scale,
    );

    return clone;
  }, [scene]);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    rotationYRef.current += delta * 0.4;

    const breathe = shouldAnimate ? Math.sin(state.clock.elapsedTime * 0.9) * 0.025 : 0;

    groupRef.current.rotation.set(
      BASE_ROTATION[0] + breathe,
      rotationYRef.current,
      BASE_ROTATION[2],
    );
  });

  return (
    <group ref={groupRef}>
      <primitive object={normalizedScene} />
    </group>
  );
}

export function ModelLoading() {
  return <div className="h-full w-full rounded-lg bg-teal/5 opacity-70" />;
}

export function OrthosisModel() {
  const [shouldAnimate] = useState(() => {
    if (typeof window === "undefined") return false;

    return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  return (
    <Canvas camera={{ position: [0, 0, 7.4], fov: 32 }} dpr={[1, 1.5]}>
      <ambientLight intensity={1.6} />
      <Suspense fallback={null}>
        <WireframeOrthosis shouldAnimate={shouldAnimate} />
      </Suspense>
    </Canvas>
  );
}

useGLTF.preload(MODEL_URL);
