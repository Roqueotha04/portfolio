"use client";

import { useLang } from "@/components/providers/LanguageProvider";
import { FOOTER, PROFILE } from "@/lib/content";

export function Footer() {
  const { t } = useLang();

  return (
    <footer className="border-t border-line bg-bg-deep">
      <div className="mx-auto grid max-w-[1260px] gap-8 px-5 py-12 sm:grid-cols-2 lg:grid-cols-3">
        {/* Copyright + tagline */}
        <div>
          <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-txt-primary">
            {FOOTER.copyright}
          </p>
          <p className="mt-2 text-sm text-txt-muted">{t(FOOTER.tagline)}</p>
        </div>

        {/* Site stack */}
        <div className="lg:justify-self-center">
          <p className="font-mono text-[11px] uppercase tracking-widest text-copper">
            {t(FOOTER.stackLabel)}
          </p>
          <p className="mt-2 text-sm text-txt-muted">{FOOTER.siteTech}</p>
        </div>

        {/* Status + location */}
        <div className="lg:justify-self-end">
          <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-txt-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
            </span>
            {t(FOOTER.status)}
          </p>
          <p className="mt-2 text-sm text-txt-muted">{t(PROFILE.location)}</p>
        </div>
      </div>
    </footer>
  );
}
