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
    <section id="validacao" className="section-pad bg-cream">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
          variants={fadeUp}
          className="max-w-3xl"
        >
          <span className="section-eyebrow">
            {validacao.eyebrow}
          </span>
          <h2 className="section-title-dark mt-4">
            {validacao.headline}
          </h2>
          <p className="body-copy-dark mt-5">
            {validacao.body}
          </p>
        </motion.div>

        <div className="mt-10 grid gap-5 lg:mt-12 lg:grid-cols-2">
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
          className="mt-12 lg:mt-14"
        >
          <h3 className="font-heading text-[1.35rem] font-bold leading-tight text-navy">
            {validacao.partnersTitle}
          </h3>
          <div className="mt-5 flex gap-3 overflow-x-auto pb-3 sm:grid sm:grid-cols-4 sm:overflow-visible sm:pb-0 lg:grid-cols-8">
            {validacao.partners.map((partner) => (
              <div
                key={partner}
                className="card-light flex min-h-20 min-w-36 shrink-0 items-center justify-center px-4 text-center text-sm font-semibold leading-snug text-dark-gray sm:min-w-0"
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
      className="card-light card-pad"
    >
      <h3 className="font-heading text-[1.35rem] font-bold leading-tight text-navy">{title}</h3>
      <ul className="mt-5 space-y-4">
        {items.map((item) => (
          <li key={item} className="flex gap-3 caption-copy-dark">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-teal" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
