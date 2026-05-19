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

        {/* Evidence panel */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={1}
          variants={fadeUp}
          className="card-light mt-8 overflow-hidden sm:mt-10"
        >
          <div className="divide-y divide-[rgb(14_30_53/0.07)] sm:grid sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {problema.metrics.map((metric, i) => (
              <div
                key={i}
                className="flex items-start gap-4 border-l-2 border-teal p-5 sm:flex-col sm:gap-0 sm:border-l-0 sm:p-6 lg:p-7"
              >
                <div
                  className={`shrink-0 font-heading text-[2.625rem] font-black leading-none sm:text-[2.875rem] lg:text-[3.1rem] ${
                    metric.highlight ? "text-red-brand" : "text-navy"
                  }`}
                >
                  {metric.value}
                </div>
                <div className="mb-3 mt-4 hidden h-0.5 w-8 rounded-full bg-teal sm:block" />
                <p className="caption-copy-dark pt-0.5 font-medium sm:pt-0">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

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
