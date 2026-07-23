"use client";

import { useLang } from "@/components/providers/LanguageProvider";
import { STACK_INTRO } from "@/lib/content";
import { STACK } from "@/lib/tech";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { TechLogo } from "@/components/ui/TechLogo";

export function Stack() {
  const { t } = useLang();

  return (
    <section id="stack" className="dot-grid relative overflow-hidden py-24 md:py-32">
      {/* colorful copper/gold glows */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-80 w-[70rem] max-w-full -translate-x-1/2 rounded-full bg-copper/[0.12] blur-[130px]" />
      <div className="pointer-events-none absolute -right-24 top-1/3 h-96 w-96 rounded-full bg-gold/[0.09] blur-[120px]" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-copper/[0.09] blur-[120px]" />

      <div className="relative mx-auto max-w-[1260px] px-5">
        <SectionHeader title={t(STACK_INTRO.label)} />

        <div className="flex flex-col gap-12 md:gap-16">
          {STACK.map((cat, i) => (
            <Reveal key={cat.label} delay={i * 0.05}>
              <div className="grid gap-5 md:grid-cols-[240px_1fr] md:gap-12">
                {/* Category label */}
                <div className="flex items-start gap-3">
                  <span className="mt-2 hidden h-px w-6 bg-copper md:block" />
                  <h3 className="font-mono text-base font-semibold uppercase tracking-[0.15em] text-copper">
                    {cat.label}
                  </h3>
                </div>

                {/* Logos */}
                <div className="flex flex-wrap items-center gap-3">
                  {cat.items.map((slug) => (
                    <TechLogo key={slug} slug={slug} variant="pill" />
                  ))}

                  {/* Nested AWS group */}
                  {cat.group && (
                    <div className="mt-3 flex w-full flex-wrap items-center gap-3 border-t border-line/50 pt-4">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-txt-muted/70">
                        {cat.group.label}
                      </span>
                      <span className="h-4 w-px bg-line" />
                      {cat.group.items.map((slug) => (
                        <TechLogo key={slug} slug={slug} variant="pill" />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
