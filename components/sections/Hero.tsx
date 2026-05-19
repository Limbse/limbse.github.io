"use client";

import { motion } from "framer-motion";
import type { Dictionary } from "@/lib/dictionaries";
import { getWhatsAppUrl, hasWhatsAppNumber, siteConfig } from "@/lib/site-config";

interface Props {
  dict: Dictionary;
}

export function Hero({ dict }: Props) {
  const { hero } = dict;
  const useWhatsApp = dict.lang === "pt" && hasWhatsAppNumber();
  const contactHref =
    useWhatsApp
      ? getWhatsAppUrl(dict.nav.whatsappMessage)
      : `mailto:${siteConfig.email}`;

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen flex-col overflow-hidden bg-navy lg:h-screen"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source
          src="/assets/videos/clinica-fitting-vertical.mp4"
          type="video/mp4"
          media="(max-width: 767px)"
        />
        <source src="/assets/videos/clinica-fitting.mp4" type="video/mp4" />
      </video>

      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,183,162,1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,183,162,1) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(14,30,53,0.3) 0%, rgba(14,30,53,0.7) 60%, rgba(14,30,53,1) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-1 flex-col justify-end">
        <div className="mx-auto w-full max-w-5xl px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="font-heading text-2xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            {hero.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.43 }}
            className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg"
          >
            {hero.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center"
          >
            <a
              href="#produto"
              className="flex h-13 items-center justify-center rounded-full bg-teal px-8 text-base font-heading font-bold text-navy transition-all duration-200 hover:bg-teal-light active:scale-95 sm:h-12"
            >
              {hero.ctaPrimary}
            </a>
            <a
              href={contactHref}
              target={useWhatsApp ? "_blank" : undefined}
              rel={useWhatsApp ? "noopener noreferrer" : undefined}
              className="flex h-13 items-center justify-center rounded-full border border-white/25 px-8 text-base font-heading font-bold text-white transition-all duration-200 hover:border-white/60 hover:bg-white/5 active:scale-95 sm:h-12"
            >
              {hero.ctaSecondary}
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex h-9 w-5 items-start justify-center rounded-full border border-white/20 pt-1.5"
        >
          <div className="h-1.5 w-1 rounded-full bg-teal" />
        </motion.div>
      </motion.div>
    </section>
  );
}
