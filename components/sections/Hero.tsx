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
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-navy lg:h-screen"
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
            "linear-gradient(180deg, rgba(14,30,53,0.78) 0%, rgba(14,30,53,0.46) 38%, rgba(14,30,53,0.86) 74%, rgba(14,30,53,1) 100%), linear-gradient(90deg, rgba(14,30,53,0.92) 0%, rgba(14,30,53,0.55) 48%, rgba(14,30,53,0.28) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-1 flex-col justify-end">
        <div className="section-container pb-24 pt-28 sm:pb-28 lg:pb-32">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="max-w-[13ch] font-heading text-[2.45rem] font-black leading-[1.02] tracking-normal text-white sm:max-w-4xl sm:text-[4rem] lg:text-[5.25rem]"
          >
            {hero.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.43 }}
            className="mt-6 max-w-2xl text-[1.04rem] leading-[1.68] text-white/82 sm:text-xl"
          >
            {hero.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center"
          >
            <a
              href="#produto"
              className="btn-base btn-primary w-full sm:w-auto"
            >
              {hero.ctaPrimary}
            </a>
            <a
              href={contactHref}
              target={useWhatsApp ? "_blank" : undefined}
              rel={useWhatsApp ? "noopener noreferrer" : undefined}
              className="btn-base btn-secondary-dark w-full sm:w-auto"
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
