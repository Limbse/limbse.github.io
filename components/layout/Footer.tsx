import Image from "next/image";
import type { Dictionary } from "@/lib/dictionaries";
import { siteConfig } from "@/lib/site-config";

interface Props {
  dict: Dictionary;
}

export function Footer({ dict }: Props) {
  const { footer } = dict;

  return (
    <footer className="border-t border-white/10 bg-navy">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-center md:justify-between">
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

          <div className="flex flex-col items-center gap-1 text-xs text-white/40 md:items-end">
            <span>
              {dict.lang === "pt" ? `CNPJ ${siteConfig.cnpj}` : footer.cnpj}
            </span>
            <span>{footer.city}</span>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-white/30">
          {footer.copyright}
        </div>
      </div>
    </footer>
  );
}
