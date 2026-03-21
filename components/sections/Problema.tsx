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
    <section id="problema" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
          variants={fadeUp}
          className="font-heading font-extrabold text-navy text-3xl sm:text-4xl lg:text-5xl leading-tight max-w-3xl"
        >
          {problema.headline}
        </motion.h2>

        {/* Metric cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-5">
          {problema.metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              custom={i + 1}
              variants={fadeUp}
              className="flex flex-col gap-4 rounded-2xl bg-white border border-light-gray shadow-sm p-8"
            >
              {/* Value */}
              <div
                className={`font-heading font-black leading-none text-5xl lg:text-6xl ${
                  metric.highlight ? "text-red-brand" : "text-navy"
                }`}
              >
                {metric.value}
              </div>

              {/* Divider */}
              <div className="h-0.5 w-10 rounded-full bg-teal" />

              {/* Label */}
              <p className="font-body text-dark-gray text-sm leading-relaxed">
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
          className="mt-10 max-w-2xl font-body text-dark-gray/70 text-base lg:text-lg leading-relaxed"
        >
          {problema.body}
        </motion.p>
      </div>
    </section>
  );
}
