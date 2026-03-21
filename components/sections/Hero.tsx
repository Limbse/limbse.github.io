"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import type { Dictionary } from "@/lib/dictionaries";

interface Props {
  dict: Dictionary;
}

const WHATSAPP_NUMBER = "5512999999999"; // TODO: substituir pelo número real

export function Hero({ dict }: Props) {
  const { hero } = dict;
  const [videoSrc, setVideoSrc] = useState<string | null>(null);

  useEffect(() => {
    const src =
      window.innerWidth < 768
        ? "/assets/videos/clinica-fitting-vertical.mov"
        : "/assets/videos/clinica-fitting.mov";
    setVideoSrc(src);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen lg:h-screen flex flex-col overflow-hidden bg-navy"
    >
      {/* Vídeo: src definido via JS após hidratação para garantir suporte em iOS Safari */}
      <video
        key={videoSrc}
        src={videoSrc ?? undefined}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />

      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59,183,162,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,183,162,1) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      {/* Overlay: transparente no topo, sólido na base */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(14,30,53,0.3) 0%, rgba(14,30,53,0.7) 60%, rgba(14,30,53,1) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Conteúdo ancorado na base */}
      <div className="relative z-10 flex flex-col flex-1 justify-end">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 pb-20 sm:pb-24">
          {/* Headline — 2 linhas forçadas, tamanho reduzido no mobile para não quebrar em 3 */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="font-heading font-black text-white leading-tight tracking-tight text-2xl sm:text-4xl lg:text-5xl"
          >
            {hero.headline1}
            <br />
            <span className="text-teal">{hero.headline2}</span>
          </motion.h1>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
          >
            <a
              href="#produto"
              className="flex h-13 sm:h-12 items-center justify-center rounded-full bg-teal px-8 text-base font-heading font-bold text-navy hover:bg-teal-light active:scale-95 transition-all duration-200"
            >
              {hero.ctaPrimary}
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-13 sm:h-12 items-center justify-center rounded-full border border-white/25 px-8 text-base font-heading font-bold text-white hover:border-white/60 hover:bg-white/5 active:scale-95 transition-all duration-200"
            >
              {hero.ctaSecondary}
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="h-9 w-5 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
        >
          <div className="h-1.5 w-1 rounded-full bg-teal" />
        </motion.div>
      </motion.div>
    </section>
  );
}
