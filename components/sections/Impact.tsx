"use client";

import { motion } from "framer-motion";
import type { Dictionary } from "@/lib/dictionaries";

interface Props {
  dict: Dictionary;
}

export function Impact({ dict }: Props) {
  const { impacto } = dict;

  return (
    <section className="section-pad relative overflow-hidden bg-navy">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,183,162,1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,183,162,1) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
        aria-hidden="true"
      />

      <div className="section-container relative z-10">
        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-2 lg:items-center lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-eyebrow">{impacto.eyebrow}</span>
            <h2 className="section-title-light mt-4">{impacto.headline}</h2>
            <p className="body-copy-light mt-6">{impacto.body}</p>
            <blockquote className="mt-8 border-l-2 border-teal pl-5 font-heading text-[1.55rem] font-bold leading-snug text-teal-light sm:text-3xl">
              {impacto.quote}
            </blockquote>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative overflow-hidden rounded-[24px] border border-teal/25 shadow-[0_24px_64px_rgba(0,0,0,0.45)]"
          >
            <img
              src="/assets/images/impacto_humano.JPG"
              alt="Paciente em sessão de reabilitação com órtese NeurovIvA"
              className="w-full h-auto"
            />
            <div
              className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-navy/85 to-transparent"
              aria-hidden="true"
            />
            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 px-5 pb-5">
              <span className="inline-flex w-fit items-center rounded-full border border-teal/35 bg-teal/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-teal-light backdrop-blur-sm">
                {impacto.imageSeal}
              </span>
              <p className="text-sm font-medium leading-snug text-white/80">
                {impacto.imageTagline}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
