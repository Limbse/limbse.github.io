"use client";

import { motion } from "framer-motion";
import type { Dictionary } from "@/lib/dictionaries";

interface Props {
  dict: Dictionary;
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08 },
  }),
};

export function Validation({ dict }: Props) {
  const { validacao } = dict;

  return (
    <section id="validacao" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
          variants={fadeUp}
          className="max-w-3xl"
        >
          <span className="font-body text-sm uppercase tracking-widest text-teal">
            {validacao.eyebrow}
          </span>
          <h2 className="mt-3 font-heading text-3xl font-black leading-tight text-navy sm:text-4xl lg:text-5xl">
            {validacao.headline}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-dark-gray/75 lg:text-lg">
            {validacao.body}
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <ValidationList
            title={validacao.evidenceTitle}
            items={validacao.evidence}
            index={1}
          />
          <ValidationList
            title={validacao.recognitionTitle}
            items={validacao.recognition}
            index={2}
          />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={3}
          variants={fadeUp}
          className="mt-14"
        >
          <h3 className="font-heading text-xl font-bold text-navy">
            {validacao.partnersTitle}
          </h3>
          <div className="mt-5 flex gap-3 overflow-x-auto pb-3 sm:grid sm:grid-cols-4 sm:overflow-visible lg:grid-cols-8">
            {validacao.partners.map((partner) => (
              <div
                key={partner}
                className="flex min-h-20 min-w-36 shrink-0 items-center justify-center rounded-lg border border-light-gray bg-white px-4 text-center text-sm font-medium text-dark-gray shadow-sm sm:min-w-0"
              >
                {partner}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ValidationList({
  title,
  items,
  index,
}: {
  title: string;
  items: string[];
  index: number;
}) {
  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      custom={index}
      variants={fadeUp}
      className="rounded-lg border border-light-gray bg-white p-7 shadow-sm"
    >
      <h3 className="font-heading text-xl font-bold text-navy">{title}</h3>
      <ul className="mt-5 space-y-4">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-dark-gray/75">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-teal" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
