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
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl"
        >
          <span className="section-eyebrow">{impacto.eyebrow}</span>
          <h2 className="section-title-light mt-4">{impacto.headline}</h2>
          <p className="body-copy-light mt-6">{impacto.body}</p>
          <blockquote className="mt-8 border-l-2 border-teal pl-5 font-heading text-[1.55rem] font-bold leading-snug text-teal-light sm:text-3xl">
            {impacto.quote}
          </blockquote>
          <p className="caption-copy-light mt-6">{impacto.note}</p>
        </motion.div>
      </div>
    </section>
  );
}
