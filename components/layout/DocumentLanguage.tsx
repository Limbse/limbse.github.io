"use client";

import { useEffect } from "react";
import type { Locale } from "@/lib/dictionaries";

interface Props {
  lang: Locale;
}

export function DocumentLanguage({ lang }: Props) {
  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  }, [lang]);

  return null;
}
