"use client";

import { motion } from "framer-motion";
import type { Dictionary } from "@/lib/dictionaries";

interface Props {
  dict: Dictionary;
}

export function Team({ dict }: Props) {
  const { equipe } = dict;

  return (
    <section id="equipe" className="section-pad bg-cream">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="section-eyebrow">
            {equipe.eyebrow}
          </span>
          <h2 className="section-title-dark mt-4">
            {equipe.headline}
          </h2>
        </motion.div>

        <div className="mt-10 grid gap-5 lg:mt-12 lg:grid-cols-3">
          {equipe.members.map((member, index) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              className="card-light card-pad flex flex-col"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-teal/20 bg-teal-bg font-heading text-xl font-black text-navy">
                {member.name
                  .split(" ")
                  .slice(0, 2)
                  .map((part) => part[0])
                  .join("")}
              </div>
              <h3 className="mt-6 font-heading text-[1.28rem] font-bold leading-tight text-navy">
                {member.name}
              </h3>
              <p className="mt-2 text-sm font-bold uppercase leading-snug tracking-[0.08em] text-teal">
                {member.role}
              </p>
              <p className="caption-copy-dark mt-5">
                {member.bio}
              </p>
              <p className="mt-5 border-t border-navy/10 pt-4 text-[0.95rem] font-semibold leading-relaxed text-navy">
                {member.specialty}
              </p>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mt-6 rounded-lg border border-teal/25 bg-teal-bg p-5 sm:mt-8 sm:p-6"
        >
          <h3 className="font-heading text-[1.2rem] font-bold leading-tight text-navy">
            {equipe.councilTitle}
          </h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {equipe.council.map((member) => (
              <span
                key={member}
                className="rounded-full bg-white px-4 py-2 text-sm font-medium leading-snug text-dark-gray shadow-sm"
              >
                {member}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
