"use client";

import { useEffect, useState } from "react";
import { GithubLogo, LinkedinLogo, List, X } from "@phosphor-icons/react";
import { useLang } from "@/components/providers/LanguageProvider";
import { NAV, PROFILE } from "@/lib/content";

export function Navbar() {
  const { lang, toggle, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-line bg-bg-deep/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-[72px] max-w-[1260px] items-center justify-between gap-4 px-5">
        {/* Logo */}
        <a
          href="#hero"
          className="font-display text-sm font-bold uppercase tracking-[0.2em] text-txt-primary transition-colors hover:text-gold"
        >
          Roque<span className="text-copper"> Othacehe</span>
        </a>

        {/* Center links (desktop) */}
        <ul className="hidden items-center gap-8 lg:flex">
          {NAV.links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className="font-mono text-xs uppercase tracking-widest text-txt-muted transition-colors hover:text-gold"
              >
                {t(l.label)}
              </a>
            </li>
          ))}
        </ul>

        {/* Right cluster */}
        <div className="flex items-center gap-3">
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-txt-muted transition-colors hover:text-gold"
          >
            <GithubLogo size={20} />
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-txt-muted transition-colors hover:text-gold"
          >
            <LinkedinLogo size={20} />
          </a>

          {/* Language toggle */}
          <button
            onClick={toggle}
            aria-label="Toggle language"
            className="flex items-center rounded-full border border-line p-0.5 font-mono text-[11px] font-semibold"
          >
            <span
              className={`rounded-full px-2 py-1 transition-colors ${
                lang === "es" ? "bg-gold text-bg-deep" : "text-txt-muted"
              }`}
            >
              ESP
            </span>
            <span
              className={`rounded-full px-2 py-1 transition-colors ${
                lang === "en" ? "bg-gold text-bg-deep" : "text-txt-muted"
              }`}
            >
              ENG
            </span>
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            className="text-txt-primary lg:hidden"
          >
            {open ? <X size={22} /> : <List size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="border-t border-line bg-bg-deep/95 backdrop-blur-xl lg:hidden">
          <ul className="mx-auto flex max-w-[1260px] flex-col px-5 py-2">
            {NAV.links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-mono text-sm uppercase tracking-widest text-txt-muted transition-colors hover:text-gold"
                >
                  {t(l.label)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
