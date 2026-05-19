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

export function Technology({ dict }: Props) {
  const { technology } = dict;

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
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-2xl"
        >
          <span className="section-eyebrow">{technology.eyebrow}</span>
          <h2 className="section-title-light mt-4">{technology.headline}</h2>
          <p className="body-copy-light mt-6">{technology.subheadline}</p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <ol className="grid grid-cols-2 gap-x-6 gap-y-5">
              {technology.steps.map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-teal/30 bg-teal/10 font-heading text-sm font-bold text-teal"
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <span className="pt-0.5 text-sm leading-snug text-white/80">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col items-center"
          >
            <div
              className="mx-auto h-72 w-full max-w-96 sm:h-96 lg:h-[30rem] lg:max-w-none"
              aria-label={technology.modelCaption}
            >
              <OrthosisModel />
            </div>
            <p className="mt-3 text-center text-xs text-white/40">
              {technology.modelCaption}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
