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

// --- Inline SVG icons ---

function IconFlask({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M9 3h6v5l3.5 7a2 2 0 0 1-1.8 3H7.3a2 2 0 0 1-1.8-3L9 8Z" />
      <path d="M7.5 14h9" />
    </svg>
  );
}

function IconPulse({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}

function IconNetwork({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="5" r="2" />
      <circle cx="5" cy="19" r="2" />
      <circle cx="19" cy="19" r="2" />
      <line x1="12" y1="7" x2="5" y2="17" />
      <line x1="12" y1="7" x2="19" y2="17" />
      <line x1="5" y1="19" x2="19" y2="19" />
    </svg>
  );
}

const researchIcons = [IconFlask, IconPulse, IconNetwork];

// ---------------------------------------------------------------------------
// Per-logo scale corrections.
// All source PNGs are 800×800px — logos occupy a fraction of that canvas.
// scale-[x] compensates for internal whitespace without distorting the mark.
// Adjust these values after visual inspection on a real device.
// ---------------------------------------------------------------------------

const partnerScale: Record<string, string> = {
  UNIFESP:                   "scale-[1.35]",
  UniVap:                    "scale-[1.4]",
  "AWS Startups":            "scale-[1.55]",
  Mão3D:                     "scale-[1.45]",
  "SUS Digital":             "scale-[1.35]",
  "in.cube / InovaHC USP":  "scale-[1.45]",
  UpLab:                     "scale-[1.5]",
};

const innovationScale: Record<string, string> = {
  "in.cube, InovaHC / USP": "scale-[1.45]",
  "UpLab, SENAI-SP":        "scale-[1.5]",
};

const awardScale: Record<string, string> = {
  "Acelera Startup FIESP 2025":
    "scale-[1.35]",
  "Prêmio Inovação em Engenharia Biomédica para o SUS, SBEB 2025":
    "scale-[1.3]",
  "Biomedical Engineering Innovation Award for SUS, SBEB 2025":
    "scale-[1.3]",
};

// --- Component ---

export function Validation({ dict }: Props) {
  const { validacao } = dict;

  return (
    <section id="validacao" className="section-pad bg-cream">
      <div className="section-container">

        {/* Cabeçalho */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
          variants={fadeUp}
          className="max-w-3xl"
        >
          <span className="section-eyebrow">{validacao.eyebrow}</span>
          <h2 className="section-title-dark mt-4">{validacao.headline}</h2>
          <p className="body-copy-dark mt-4">{validacao.subheadline}</p>
        </motion.div>

        {/* Pesquisa aplicada */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={1}
          variants={fadeUp}
          className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3"
        >
          {validacao.researchCards.map((card, i) => {
            const Icon = researchIcons[i];
            return (
              <article key={card.title} className="card-light p-4 sm:p-5">
                <Icon className="text-teal" />
                <h3 className="mt-3 font-heading text-[1.05rem] font-bold leading-tight text-navy">
                  {card.title}
                </h3>
                <p className="caption-copy-dark mt-2">{card.text}</p>
              </article>
            );
          })}
        </motion.div>

        {/* Ambientes de inovação — cards verticais */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={2}
          variants={fadeUp}
          className="mt-10 lg:mt-12"
        >
          <h3 className="font-heading text-[1.1rem] font-bold leading-tight text-navy">
            {validacao.innovationTitle}
          </h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {validacao.innovationItems.map((item) => (
              <div
                key={item.title}
                className="card-light flex flex-col items-center p-6 text-center"
              >
                {/* Logo container — overflow-visible so scale doesn't clip */}
                <div className="flex h-28 w-full items-center justify-center overflow-visible sm:h-32">
                  {item.logo ? (
                    <img
                      src={item.logo}
                      alt={item.title}
                      className={[
                        "h-full w-auto object-contain",
                        innovationScale[item.title] ?? "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                    />
                  ) : null}
                </div>
                <h4 className="mt-4 text-base font-bold text-navy">{item.title}</h4>
                <p className="mt-1 text-sm leading-snug text-dark-gray/80">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Reconhecimentos */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={3}
          variants={fadeUp}
          className="mt-10 lg:mt-12"
        >
          <h3 className="font-heading text-[1.1rem] font-bold leading-tight text-navy">
            {validacao.awardsTitle}
          </h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {validacao.awards.map((award) => (
              <div
                key={award.name}
                className="card-light flex flex-col items-center p-5 text-center"
              >
                {/* Logo grande — h-20 mobile, h-24 sm+ */}
                <div className="flex h-32 w-full items-center justify-center overflow-visible sm:h-36">
                  <img
                    src={award.logo}
                    alt={award.name}
                    className={[
                      "h-full w-auto max-w-[80%] object-contain",
                      awardScale[award.name] ?? "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  />
                </div>
                <span className="mt-3 font-heading text-xl font-black text-teal">
                  {award.rank}
                </span>
                <p className="mt-1 text-sm leading-snug text-dark-gray/70">
                  {award.name}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Parceiros — grade de logos */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={4}
          variants={fadeUp}
          className="mt-10 lg:mt-12"
        >
          <h3 className="font-heading text-[1.1rem] font-bold leading-tight text-navy">
            {validacao.partnersTitle}
          </h3>
          <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {validacao.partners.map((partner) => (
              <div
                key={partner.name}
                className="card-light flex h-[120px] items-center justify-center overflow-visible p-3 sm:h-[136px]"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className={[
                    "max-h-20 w-auto max-w-full object-contain sm:max-h-24",
                    partnerScale[partner.name] ?? "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                />
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
