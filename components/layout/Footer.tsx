import Image from "next/image";
import type { Dictionary } from "@/lib/dictionaries";

interface Props {
  dict: Dictionary;
}

export function Footer({ dict }: Props) {
  const { footer } = dict;

  return (
    <footer className="bg-navy border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between md:items-center">
          {/* Logo */}
          <Image
            src="/assets/logo_branco.svg"
            alt="Limbse"
            width={100}
            height={26}
          />

          {/* Nav links */}
          <nav
            className="flex flex-wrap justify-center gap-x-6 gap-y-2"
            aria-label="Links do rodapé"
          >
            {footer.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/50 hover:text-white/90 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Legal */}
          <div className="flex flex-col items-center md:items-end gap-1 text-xs text-white/40">
            <span>{footer.cnpj}</span>
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
