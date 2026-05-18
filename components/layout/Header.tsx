"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { Dictionary } from "@/lib/dictionaries";
import { getWhatsAppUrl, hasWhatsAppNumber, siteConfig } from "@/lib/site-config";

interface Props {
  dict: Dictionary;
}

export function Header({ dict }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { nav } = dict;
  const useWhatsApp = dict.lang === "pt" && hasWhatsAppNumber();
  const primaryContactHref =
    useWhatsApp ? getWhatsAppUrl(nav.whatsappMessage) : `mailto:${siteConfig.email}`;
  const primaryContactLabel = useWhatsApp ? nav.cta : siteConfig.email;

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
            <Link
              href={`/${dict.lang}`}
              className="flex-shrink-0 rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal"
            >
              <Image
                src="/assets/logo_branco.svg"
                alt="Limbse"
                width={120}
                height={32}
                style={{ width: 120, height: "auto" }}
                priority
              />
            </Link>

            <nav
              className="hidden items-center gap-8 lg:flex"
              aria-label={nav.ariaLabel}
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-body text-white/80 transition-colors duration-200 hover:text-teal"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-4 lg:flex">
              <Link
                href={nav.toggleHref}
                className="text-sm font-body text-white/60 transition-colors duration-200 hover:text-white"
              >
                {nav.toggle}
              </Link>
              <a
                href={primaryContactHref}
                target={useWhatsApp ? "_blank" : undefined}
                rel={useWhatsApp ? "noopener noreferrer" : undefined}
                aria-label={primaryContactLabel}
                className="inline-flex items-center gap-2 rounded-full bg-teal px-5 py-2 text-sm font-heading text-navy transition-colors duration-200 hover:bg-teal-light"
              >
                {primaryContactLabel}
              </a>
            </div>

            <div className="flex items-center gap-3 lg:hidden">
              <Link
                href={nav.toggleHref}
                className="px-1 text-sm text-white/70 transition-colors hover:text-white"
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
                <div className="relative flex h-[14px] w-5 flex-col justify-between">
                  <span
                    className={`block h-0.5 w-5 origin-center rounded bg-white transition-all duration-250 ${
                      menuOpen ? "translate-y-[6px] rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`block h-0.5 w-5 rounded bg-white transition-all duration-250 ${
                      menuOpen ? "scale-x-0 opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`block h-0.5 w-5 origin-center rounded bg-white transition-all duration-250 ${
                      menuOpen ? "-translate-y-[8px] -rotate-45" : ""
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 flex flex-col bg-navy lg:hidden"
            style={{ paddingTop: "64px" }}
          >
            <div className="flex flex-1 flex-col overflow-y-auto px-6 pb-12 pt-10">
              <nav className="flex flex-col gap-2" aria-label={nav.mobileAriaLabel}>
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.07 }}
                    className="flex min-h-[56px] items-center border-b border-white/8 text-2xl font-heading font-bold text-white transition-colors hover:text-teal active:text-teal"
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
                  href={primaryContactHref}
                  target={useWhatsApp ? "_blank" : undefined}
                  rel={useWhatsApp ? "noopener noreferrer" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className="flex h-14 w-full items-center justify-center rounded-full bg-teal text-base font-heading font-bold text-navy transition-colors hover:bg-teal-light"
                >
                  {primaryContactLabel}
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
