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
    { label: nav.tecnologia, href: "#tecnologia" },
    { label: nav.validacao, href: "#validacao" },
    { label: nav.equipe, href: "#equipe" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? "border-b border-white/10 bg-navy/94 shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur-md"
            : "bg-gradient-to-b from-navy/78 via-navy/38 to-transparent"
        }`}
      >
        <div className="section-container">
          <div className="flex h-16 items-center justify-between lg:h-[4.75rem]">
            <a
              href="#inicio"
              className="flex min-h-11 flex-shrink-0 items-center rounded"
            >
              <Image
                src="/assets/logo_branco.svg"
                alt="Limbse"
                width={112}
                height={32}
                style={{ width: 112, height: "auto" }}
                priority
              />
            </a>

            <nav
              className="hidden items-center gap-8 lg:flex"
              aria-label={nav.ariaLabel}
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-sm text-sm font-medium text-white/78 transition-colors duration-200 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <Link
                href={nav.toggleHref}
                className="rounded-sm px-2 py-2 text-sm font-medium text-white/62 transition-colors duration-200 hover:text-white"
              >
                {nav.toggle}
              </Link>
              <a
                href={primaryContactHref}
                target={useWhatsApp ? "_blank" : undefined}
                rel={useWhatsApp ? "noopener noreferrer" : undefined}
                aria-label={primaryContactLabel}
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-teal/35 bg-teal/92 px-5 text-sm font-heading font-bold text-navy shadow-[0_10px_28px_rgba(59,183,162,0.18)] transition-colors duration-200 hover:bg-teal-light"
              >
                {primaryContactLabel}
              </a>
            </div>

            <div className="flex items-center gap-3 lg:hidden">
              <Link
                href={nav.toggleHref}
                className="flex min-h-11 items-center rounded px-2 text-sm font-medium text-white/72 transition-colors hover:text-white"
              >
                {nav.toggle}
              </Link>
              <button
                onClick={() => setMenuOpen((v) => !v)}
                aria-label={menuOpen ? nav.closeLabel : nav.menuLabel}
                aria-expanded={menuOpen}
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white backdrop-blur-sm"
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
            <div className="flex flex-1 flex-col overflow-y-auto px-6 pb-12 pt-8">
              <nav className="flex flex-col gap-2" aria-label={nav.mobileAriaLabel}>
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.07 }}
                    className="flex min-h-14 items-center border-b border-white/10 text-[1.45rem] font-heading font-bold leading-tight text-white transition-colors hover:text-teal active:text-teal"
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
                  className="btn-base btn-primary w-full"
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
