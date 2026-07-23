"use client";

import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react";
import { useLang } from "@/components/providers/LanguageProvider";
import { EXPERIENCE } from "@/lib/content";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

export function Experience() {
  const { t } = useLang();

  return (
    <section id="experience" className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 grid-lines [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)]" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-80 w-[70rem] max-w-full -translate-x-1/2 rounded-full bg-copper/[0.10] blur-[130px]" />
      <div className="pointer-events-none absolute -right-24 top-1/4 h-96 w-96 rounded-full bg-gold/[0.07] blur-[120px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-copper/[0.08] blur-[130px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-gold/[0.085] blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-[60rem] max-w-full -translate-x-1/2 rounded-full bg-copper/[0.10] blur-[130px]" />

      <div className="relative mx-auto max-w-[1260px] px-5">
        <SectionHeader title={t(EXPERIENCE.label)} />

        <div className="mx-auto max-w-3xl">
          <ol className="relative ml-4 border-l border-line">
            {EXPERIENCE.entries.map((entry, i) => (
              <li key={entry.company} className="relative pb-12 pl-10 last:pb-0">
                {/* node with logo */}
                <span className="absolute -left-6 top-0 flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-copper/40 bg-bg-panel">
                  <Image
                    src={entry.logo}
                    alt={entry.company}
                    width={48}
                    height={48}
                    className="h-full w-full object-cover object-[42.5%_center]"
                  />
                </span>

                <Reveal delay={i * 0.1}>
                  <span className="inline-block rounded-full border border-line px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-copper">
                    {t(entry.period)}
                  </span>

                  <h3 className="mt-4 font-display text-2xl font-semibold text-txt-primary">
                    {t(entry.role)}
                  </h3>

                  {entry.companyUrl ? (
                    <a
                      href={entry.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-flex items-center gap-1 text-sm text-txt-muted transition-colors hover:text-gold"
                    >
                      {entry.company}
                      <ArrowUpRight size={14} />
                    </a>
                  ) : (
                    <p className="mt-1 text-sm text-txt-muted">{entry.company}</p>
                  )}

                  <ul className="mt-5 space-y-3">
                    {entry.bullets.map((b, bi) => (
                      <li key={bi} className="flex gap-3 leading-relaxed text-txt-muted">
                        <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-copper" />
                        <span>{t(b)}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
