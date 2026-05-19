import Image from "next/image";
import type { Dictionary } from "@/lib/dictionaries";
import { siteConfig } from "@/lib/site-config";

interface Props {
  dict: Dictionary;
}

function LinkedInIcon() {
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

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Footer({ dict }: Props) {
  const { footer } = dict;

  return (
    <footer className="border-t border-white/10 bg-navy">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-5 md:flex-row md:items-center md:justify-between">
          <Image
            src="/assets/logo_branco.svg"
            alt="Limbse"
            width={100}
            height={26}
            style={{ width: 100, height: "auto" }}
          />

          <nav
            className="flex flex-wrap justify-center gap-x-6 gap-y-2"
            aria-label={dict.lang === "pt" ? "Links do rodapé" : "Footer links"}
          >
            {footer.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/50 transition-colors hover:text-white/90"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col items-center gap-5 md:items-end">
            <div className="flex items-center gap-2">
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn da Limbse"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/6 text-white/62 transition-colors hover:border-teal/45 hover:bg-teal/12 hover:text-teal"
              >
                <LinkedInIcon />
              </a>
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Limbse"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/6 text-white/62 transition-colors hover:border-teal/45 hover:bg-teal/12 hover:text-teal"
              >
                <InstagramIcon />
              </a>
            </div>
            <div className="flex flex-col items-center gap-1 text-xs text-white/48 md:items-end">
              <span>
                {dict.lang === "pt" ? `CNPJ ${siteConfig.cnpj}` : footer.cnpj}
              </span>
              <span>{footer.city}</span>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-white/10 pt-5 text-center text-xs text-white/34">
          {footer.copyright}
        </div>
      </div>
    </footer>
  );
}
