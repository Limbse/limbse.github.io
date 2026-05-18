"use client";

import { motion } from "framer-motion";
import type { Dictionary } from "@/lib/dictionaries";

interface Props {
  dict: Dictionary;
}

export function Team({ dict }: Props) {
  const { equipe } = dict;

  return (
    <section id="equipe" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="font-body text-sm uppercase tracking-widest text-teal">
            {equipe.eyebrow}
          </span>
          <h2 className="mt-3 font-heading text-3xl font-black leading-tight text-navy sm:text-4xl lg:text-5xl">
            {equipe.headline}
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {equipe.members.map((member, index) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              className="rounded-lg border border-light-gray bg-white p-7 shadow-sm"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-bg font-heading text-xl font-black text-navy">
                {member.name
                  .split(" ")
                  .slice(0, 2)
                  .map((part) => part[0])
                  .join("")}
              </div>
              <h3 className="mt-6 font-heading text-xl font-bold text-navy">
                {member.name}
              </h3>
              <p className="mt-1 text-sm font-bold uppercase tracking-wide text-teal">
                {member.role}
              </p>
              <p className="mt-5 text-sm leading-relaxed text-dark-gray/75">
                {member.bio}
              </p>
              <p className="mt-5 border-t border-light-gray pt-4 text-sm font-medium text-navy">
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
          className="mt-8 rounded-lg border border-teal/25 bg-teal-bg p-6"
        >
          <h3 className="font-heading text-lg font-bold text-navy">
            {equipe.councilTitle}
          </h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {equipe.council.map((member) => (
              <span
                key={member}
                className="rounded-full bg-white px-4 py-2 text-sm text-dark-gray shadow-sm"
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
