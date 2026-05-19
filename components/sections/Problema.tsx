"use client";

import { motion } from "framer-motion";
import type { Dictionary } from "@/lib/dictionaries";

interface Props {
  dict: Dictionary;
}

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12 },
  }),
};

export function Problema({ dict }: Props) {
  const { problema } = dict;

  return (
    <section id="problema" className="section-pad bg-cream">
      <div className="section-container">
        {/* Headline */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
          variants={fadeUp}
          className="section-title-dark max-w-3xl"
        >
          {problema.headline}
        </motion.h2>

        {/* Metric cards */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-3 lg:gap-5">
          {problema.metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              custom={i + 1}
              variants={fadeUp}
              className="card-light card-pad flex min-h-56 flex-col gap-5"
            >
              {/* Value */}
              <div
                className={`font-heading text-[3.35rem] font-black leading-none sm:text-[3.65rem] lg:text-[4.4rem] ${
                  metric.highlight ? "text-red-brand" : "text-navy"
                }`}
              >
                {metric.value}
              </div>

              {/* Divider */}
              <div className="h-0.5 w-10 rounded-full bg-teal" />

              {/* Label */}
              <p className="caption-copy-dark font-medium">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Body */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={4}
          variants={fadeUp}
          className="body-copy-dark mt-10 max-w-2xl"
        >
          {problema.body}
        </motion.p>
      </div>
    </section>
  );
}
