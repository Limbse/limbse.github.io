"use client";

import { motion } from "framer-motion";
import type { Dictionary } from "@/lib/dictionaries";
import { getWhatsAppUrl, hasWhatsAppNumber, siteConfig } from "@/lib/site-config";

interface Props {
  dict: Dictionary;
}

export function CTAFinal({ dict }: Props) {
  const { cta } = dict;
  const useWhatsAppPrimary = dict.lang === "pt" && hasWhatsAppNumber();
  const primaryHref = useWhatsAppPrimary
    ? getWhatsAppUrl(cta.whatsappMessage)
    : `mailto:${siteConfig.email}`;
  const secondaryHref = useWhatsAppPrimary || dict.lang === "pt"
    ? `mailto:${siteConfig.email}`
    : getWhatsAppUrl(cta.whatsappMessage);
  const primaryLabel = cta.primaryLabel;
  const showSecondary = useWhatsAppPrimary || (dict.lang === "en" && hasWhatsAppNumber());

  return (
    <section
      id="contato"
      className="section-pad-lg relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0E1E35 0%, #10315A 100%)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.055]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(111,207,192,1) 1px, transparent 1px), linear-gradient(90deg, rgba(111,207,192,1) 1px, transparent 1px)",
          backgroundSize: "46px 46px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="font-heading text-[2.2rem] font-black leading-[1.08] text-white sm:text-5xl lg:text-[3.75rem]"
        >
          {cta.headline}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-6 max-w-2xl text-[1.05rem] leading-relaxed text-teal-light sm:text-xl"
        >
          {cta.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row"
        >
          <a
            href={primaryHref}
            target={useWhatsAppPrimary ? "_blank" : undefined}
            rel={useWhatsAppPrimary ? "noopener noreferrer" : undefined}
            className="btn-base btn-primary w-full gap-3 sm:w-auto"
          >
            {useWhatsAppPrimary && <WhatsAppIcon />}
            {primaryLabel}
          </a>

          {showSecondary && (
            <a
              href={secondaryHref}
              target={dict.lang === "en" ? "_blank" : undefined}
              rel={dict.lang === "en" ? "noopener noreferrer" : undefined}
              className="btn-base btn-secondary-dark w-full sm:w-auto"
            >
              {cta.secondaryLabel}
            </a>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path
        d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.845L0 24l6.335-1.562A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.64-.503-5.153-1.383l-.37-.22-3.825.943.978-3.734-.241-.386A9.945 9.945 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}
