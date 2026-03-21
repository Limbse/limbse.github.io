"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { Dictionary } from "@/lib/dictionaries";

interface Props {
  dict: Dictionary;
}

const WHATSAPP_NUMBER = "5512999999999"; // TODO: substituir pelo número real

export function Header({ dict }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { nav } = dict;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navLinks = [
    { label: nav.produto, href: "#produto" },
    { label: nav.validacao, href: "#validacao" },
    { label: nav.equipe, href: "#equipe" },
    { label: nav.contato, href: "#contato" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? "bg-navy/95 backdrop-blur-sm shadow-lg"
            : "bg-gradient-to-b from-black/40 to-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between lg:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex-shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal rounded"
            >
              <Image
                src="/assets/logo_branco.svg"
                alt="Limbse"
                width={120}
                height={32}
                priority
              />
            </Link>

            {/* Desktop nav */}
            <nav
              className="hidden lg:flex items-center gap-8"
              aria-label="Navegação principal"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-body text-white/80 hover:text-teal transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop right */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href={nav.toggleHref}
                className="text-sm font-body text-white/60 hover:text-white transition-colors duration-200"
              >
                {nav.toggle}
              </Link>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={nav.cta}
                className="inline-flex items-center gap-2 rounded-full bg-teal px-5 py-2 text-sm font-heading text-navy hover:bg-teal-light transition-colors duration-200"
              >
                {nav.cta}
              </a>
            </div>

            {/* Mobile right */}
            <div className="flex lg:hidden items-center gap-3">
              <Link
                href={nav.toggleHref}
                className="text-sm text-white/70 hover:text-white transition-colors px-1"
              >
                {nav.toggle}
              </Link>
              <button
                onClick={() => setMenuOpen((v) => !v)}
                aria-label={menuOpen ? nav.closeLabel : nav.menuLabel}
                aria-expanded={menuOpen}
                className="flex h-11 w-11 items-center justify-center rounded-lg text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal"
              >
                <span className="sr-only">
                  {menuOpen ? nav.closeLabel : nav.menuLabel}
                </span>
                <div className="relative w-5 h-[14px] flex flex-col justify-between">
                  <span
                    className={`block h-0.5 w-5 bg-white rounded transition-all duration-250 origin-center ${
                      menuOpen ? "rotate-45 translate-y-[6px]" : ""
                    }`}
                  />
                  <span
                    className={`block h-0.5 w-5 bg-white rounded transition-all duration-250 ${
                      menuOpen ? "opacity-0 scale-x-0" : ""
                    }`}
                  />
                  <span
                    className={`block h-0.5 w-5 bg-white rounded transition-all duration-250 origin-center ${
                      menuOpen ? "-rotate-45 -translate-y-[8px]" : ""
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay — fora do <header> para evitar conflito de stacking context */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-navy flex flex-col lg:hidden"
            style={{ paddingTop: "64px" }} // altura do header
          >
            <div className="flex flex-col flex-1 overflow-y-auto px-6 pt-10 pb-12">
              <nav className="flex flex-col gap-2" aria-label="Menu mobile">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.07 }}
                    className="text-2xl font-heading font-bold text-white hover:text-teal active:text-teal transition-colors min-h-[56px] flex items-center border-b border-white/8"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="mt-auto pt-8"
              >
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="flex h-14 w-full items-center justify-center rounded-full bg-teal text-navy font-heading font-bold text-base hover:bg-teal-light transition-colors"
                >
                  {nav.cta}
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
