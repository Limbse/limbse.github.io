"use client";

import { motion } from "framer-motion";
import type { Dictionary } from "@/lib/dictionaries";

interface Props {
  dict: Dictionary;
}

const cardIcons = [
  <svg
    key="plataforma"
    viewBox="0 0 48 48"
    fill="none"
    className="h-8 w-8"
    aria-hidden="true"
  >
    <rect x="4" y="8" width="40" height="28" rx="3" stroke="currentColor" strokeWidth="2" />
    <path d="M16 40H32M24 36V40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 20H24M12 26H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="34" cy="23" r="6" stroke="currentColor" strokeWidth="2" />
  </svg>,
  <svg
    key="ortese"
    viewBox="0 0 48 48"
    fill="none"
    className="h-8 w-8"
    aria-hidden="true"
  >
    <path
      d="M24 4L44 16V32L24 44L4 32V16L24 4Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M24 4V44M4 16L44 16M4 32L44 32"
      stroke="currentColor"
      strokeWidth="1"
      strokeDasharray="3 3"
    />
  </svg>,
  <svg
    key="app"
    viewBox="0 0 48 48"
    fill="none"
    className="h-8 w-8"
    aria-hidden="true"
  >
    <rect x="12" y="2" width="24" height="44" rx="4" stroke="currentColor" strokeWidth="2" />
    <circle cx="24" cy="40" r="2" fill="currentColor" />
    <path d="M18 12H30M18 18H26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>,
];

export function Neuroviva({ dict }: Props) {
  const { neuroviva } = dict;

  return (
    <section id="produto" className="section-pad bg-navy-deep">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-11 sm:mb-14"
        >
          <span className="section-eyebrow">
            {neuroviva.headline}
          </span>
          <h2 className="section-title-light mt-4 max-w-2xl">
            {neuroviva.subheadline}
          </h2>
          <p className="body-copy-light mt-5 max-w-3xl">
            {neuroviva.body}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-5">
          {neuroviva.cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="card-dark card-pad group relative flex flex-col gap-5 transition-all duration-300 hover:border-teal/35 hover:bg-white/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal/10 text-teal ring-1 ring-teal/20">
                {cardIcons[i]}
              </div>

              <div className="flex flex-1 flex-col gap-3">
                <h3 className="font-heading text-[1.25rem] font-bold leading-snug text-white">
                  {card.title}
                </h3>
                <p className="caption-copy-light">
                  {card.desc}
                </p>
              </div>

              <div className="inline-flex self-start items-center rounded-full border border-teal/30 bg-teal/10 px-3.5 py-1.5">
                <span className="text-sm font-medium text-teal-light">{card.badge}</span>
              </div>

              <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-teal/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
