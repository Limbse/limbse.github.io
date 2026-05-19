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
    <section id="tecnologia" className="section-pad relative overflow-hidden bg-navy">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,183,162,1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,183,162,1) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
        aria-hidden="true"
      />

      <div className="section-container relative z-10 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12">
        <div>
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

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <ol className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-5">
              {technology.steps.map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-teal/30 bg-teal/10 font-heading text-base font-bold text-teal"
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <span className="pt-0.5 text-base leading-snug text-white/84 sm:text-[1.05rem]">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-20 flex items-center justify-center lg:mt-0"
        >
          <div
            className="h-72 w-full sm:h-96 lg:h-[480px]"
            aria-label={technology.modelCaption}
          >
            <OrthosisModel />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
