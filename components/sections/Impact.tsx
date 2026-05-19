"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import type { Dictionary } from "@/lib/dictionaries";

const OrthosisModel = dynamic(
  () => import("./OrthosisModel").then((mod) => mod.OrthosisModel),
  {
    ssr: false,
    loading: () => (
      <div className="h-full w-full rounded-lg bg-teal/5 opacity-70" />
    ),
  },
);

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

      <div className="section-container relative z-10 grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">
            {impacto.eyebrow}
          </span>
          <h2 className="section-title-light mt-4">
            {impacto.headline}
          </h2>
          <p className="body-copy-light mt-6 max-w-2xl">
            {impacto.body}
          </p>
          <blockquote className="mt-8 max-w-2xl border-l-2 border-teal pl-5 font-heading text-[1.55rem] font-bold leading-snug text-teal-light sm:text-3xl">
            {impacto.quote}
          </blockquote>
          <p className="caption-copy-light mt-6 max-w-xl">
            {impacto.note}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto h-72 w-full max-w-96 sm:h-96 lg:h-[30rem] lg:max-w-none"
          aria-hidden="true"
        >
          <OrthosisModel />
        </motion.div>
      </div>
    </section>
  );
}
