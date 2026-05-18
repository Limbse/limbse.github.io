"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import type { Dictionary } from "@/lib/dictionaries";

const OrthosisModel = dynamic(
  () => import("./OrthosisModel").then((mod) => mod.OrthosisModel),
  {
    ssr: false,
    loading: () => (
      <div className="h-full w-full rounded-full border border-teal/30 bg-teal/10" />
    ),
  },
);

interface Props {
  dict: Dictionary;
}

export function Impact({ dict }: Props) {
  const { impacto } = dict;

  return (
    <section className="relative overflow-hidden bg-navy py-24 lg:py-32">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,183,162,1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,183,162,1) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-body text-sm uppercase tracking-widest text-teal">
            {impacto.eyebrow}
          </span>
          <h2 className="mt-3 font-heading text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
            {impacto.headline}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 lg:text-lg">
            {impacto.body}
          </p>
          <blockquote className="mt-8 border-l-2 border-teal pl-5 font-heading text-2xl font-bold leading-snug text-teal-light">
            {impacto.quote}
          </blockquote>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/45">
            {impacto.note}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto h-72 w-72 sm:h-96 sm:w-96 lg:h-[30rem] lg:w-full"
          aria-hidden="true"
        >
          <OrthosisModel />
        </motion.div>
      </div>
    </section>
  );
}
