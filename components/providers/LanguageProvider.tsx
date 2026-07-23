"use client";

import { createContext, useContext, useMemo, useState, useCallback } from "react";
import type { Lang, Localized } from "@/lib/i18n";
import { pick } from "@/lib/i18n";

type LanguageContextValue = {
  lang: Lang;
  toggle: () => void;
  setLang: (l: Lang) => void;
  /** Resolve a Localized value (or plain value) for the current language. */
  t: <T>(value: Localized<T> | T) => T;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("es"); // default: Spanish

  const toggle = useCallback(() => setLang((l) => (l === "es" ? "en" : "es")), []);

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, toggle, setLang, t: (v) => pick(v, lang) }),
    [lang, toggle]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
