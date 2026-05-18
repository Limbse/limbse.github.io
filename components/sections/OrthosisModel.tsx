"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Center, useGLTF } from "@react-three/drei";
import { Suspense, useMemo, useRef, useState } from "react";
import type { Group, Mesh } from "three";
import { EdgesGeometry, LineBasicMaterial, LineSegments } from "three";

function WireframeOrthosis() {
  const groupRef = useRef<Group>(null);
  const { scene } = useGLTF("/assets/3d/orthosis.glb");

  const wireScene = useMemo(() => {
    const clone = scene.clone(true);

    clone.traverse((object) => {
      const mesh = object as Mesh;
      if (!mesh.isMesh || !mesh.geometry) return;

      mesh.visible = false;
      const edges = new EdgesGeometry(mesh.geometry, 18);
      const material = new LineBasicMaterial({
        color: "#3BB7A2",
        transparent: true,
        opacity: 0.9,
      });
      mesh.add(new LineSegments(edges, material));
    });

    return clone;
  }, [scene]);

  useFrame((_, delta) => {
    if (!groupRef.current) return;

    groupRef.current.rotation.y += delta * 0.28;
    groupRef.current.rotation.x = -0.18 + Math.sin(Date.now() * 0.001) * 0.03;
  });

  return (
    <group ref={groupRef}>
      <Center>
        <primitive object={wireScene} scale={2.7} />
      </Center>
    </group>
  );
}

function ModelFallback() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-full border border-teal/30 bg-teal/10">
      <div className="absolute inset-8 rounded-full border border-teal/30" />
      <div className="absolute left-1/2 top-6 h-[80%] w-px -translate-x-1/2 bg-teal/30" />
      <div className="absolute left-8 right-8 top-1/2 h-px -translate-y-1/2 bg-teal/30" />
      <div className="absolute inset-1/4 rounded-[40%] border-2 border-teal/80" />
    </div>
  );
}

export function OrthosisModel() {
  const [canAnimate] = useState(() => {
    if (typeof window === "undefined") return false;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const capableDevice = navigator.hardwareConcurrency >= 4;
    return !reduceMotion && capableDevice;
  });

  if (!canAnimate) return <ModelFallback />;

  return (
    <Canvas camera={{ position: [0, 0.15, 4], fov: 36 }} dpr={[1, 1.5]}>
      <ambientLight intensity={1.2} />
      <directionalLight position={[2, 3, 4]} intensity={1.4} />
      <Suspense fallback={null}>
        <WireframeOrthosis />
      </Suspense>
    </Canvas>
  );
}

useGLTF.preload("/assets/3d/orthosis.glb");
