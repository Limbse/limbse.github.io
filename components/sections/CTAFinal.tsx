"use client";

import { motion } from "framer-motion";
import type { Dictionary } from "@/lib/dictionaries";

interface Props {
  dict: Dictionary;
}

const WHATSAPP_NUMBER = "5512999999999"; // TODO: substituir pelo número real

export function CTAFinal({ dict }: Props) {
  const { cta } = dict;

  return (
    <section
      id="contato"
      className="relative py-28 lg:py-40 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0E1E35 0%, #10315A 100%)",
      }}
    >
      {/* Decorative glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "#3BB7A2" }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="font-heading font-black text-white text-4xl sm:text-5xl lg:text-6xl leading-tight"
        >
          {cta.headline}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 font-body text-teal-light text-lg leading-relaxed"
        >
          {cta.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* WhatsApp button */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-14 w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-[#25D366] px-8 text-base font-heading font-700 text-white hover:bg-[#1ebe5d] active:scale-95 transition-all duration-200"
          >
            <WhatsAppIcon />
            {cta.whatsapp}
          </a>

          {/* Email */}
          <a
            href={`mailto:${cta.email}`}
            className="flex h-14 w-full sm:w-auto items-center justify-center rounded-full border border-white/20 px-8 text-base font-heading font-700 text-white hover:border-white/50 hover:bg-white/5 active:scale-95 transition-all duration-200"
          >
            {cta.email}
          </a>
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
      className="w-5 h-5"
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
