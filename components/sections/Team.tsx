"use client";

import { motion } from "framer-motion";
import type { Dictionary } from "@/lib/dictionaries";

interface Props {
  dict: Dictionary;
}

function IconLinkedIn() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.32 8.02h4.35V23H.32V8.02Zm7.15 0h4.17v2.05h.06c.58-1.1 2-2.26 4.12-2.26 4.4 0 5.21 2.9 5.21 6.67V23h-4.35v-7.55c0-1.8-.03-4.12-2.51-4.12-2.52 0-2.9 1.97-2.9 4V23h-4.35V8.02h.55Z" />
    </svg>
  );
}

function IconLattes() {
  return (
    <img
      src="/assets/images/Logo-lattess-1.svg"
      alt=""
      aria-hidden="true"
      className="h-7 w-7 object-contain"
    />
  );
}

function TeamLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  const className =
    "inline-flex h-10 w-10 items-center justify-center rounded-full border border-teal/20 bg-teal-bg text-teal transition-colors duration-200 hover:border-teal/45 hover:bg-teal hover:text-navy";

  if (!href) {
    return (
      <span
        aria-label={`${label} em breve`}
        className={`${className} cursor-not-allowed opacity-40 hover:border-teal/20 hover:bg-teal-bg hover:text-teal`}
        title={`${label} em breve`}
      >
        {children}
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={className}
      title={label}
    >
      {children}
    </a>
  );
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
          <span className="section-eyebrow">{equipe.eyebrow}</span>
          <h2 className="section-title-dark mt-4">{equipe.headline}</h2>
        </motion.div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 xl:grid-cols-4">
          {equipe.members.map((member, index) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              className="card-light card-pad flex flex-col"
            >
              <div className="relative h-[100px] w-[100px] self-center overflow-hidden rounded-full border border-teal/20 bg-teal-bg sm:self-start">
                {member.photo ? (
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center font-heading text-xl font-black text-navy">
                    {member.name
                      .split(" ")
                      .slice(0, 2)
                      .map((part) => part[0])
                      .join("")}
                  </div>
                )}
              </div>
              <h3 className="mt-6 font-heading text-[1.28rem] font-bold leading-tight text-navy">
                {member.name}
              </h3>
              <p className="mt-2 text-sm font-bold uppercase leading-snug tracking-[0.08em] text-teal">
                {member.role}
              </p>
              <p className="caption-copy-dark mt-5">{member.bio}</p>
              <div className="mt-5 flex gap-2">
                <TeamLink
                  href={member.socials.linkedin}
                  label={`LinkedIn - ${member.name}`}
                >
                  <IconLinkedIn />
                </TeamLink>
                <TeamLink
                  href={member.socials.lattes}
                  label={`Currículo Lattes - ${member.name}`}
                >
                  <IconLattes />
                </TeamLink>
              </div>
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
