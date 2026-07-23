"use client";

import { SiSpring, SiNextdotjs } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { useLang } from "@/components/providers/LanguageProvider";
import { ABOUT } from "@/lib/content";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { renderHighlighted } from "@/lib/highlight";

export function About() {
  const { t } = useLang();

  return (
    <section id="about" className="relative overflow-hidden py-24 md:py-32">
      {/* copper aura blob */}
      <div className="pointer-events-none absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-copper/10 blur-[120px]" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-gold/[0.06] blur-[100px]" />

      <div className="relative mx-auto max-w-[1260px] px-5">
        <SectionHeader title={t(ABOUT.label)} />

        <div className="grid items-stretch gap-10 md:grid-cols-[1.35fr_1fr] md:gap-14">
          {/* Text */}
          <Reveal>
            <div className="border-l-2 border-copper/40 pl-6">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-copper">
                {t(ABOUT.subtitle)}
              </p>
              <div className="mt-6 space-y-5">
                {ABOUT.paragraphs.map((p, i) => (
                  <p key={i} className="max-w-[58ch] text-lg leading-relaxed text-txt-muted">
                    {renderHighlighted(t(p))}
                  </p>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {ABOUT.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-line bg-white/[0.02] px-3 py-1 font-mono text-xs text-txt-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Visual panel */}
          <Reveal delay={0.12}>
            <div className="brackets relative flex h-full flex-col justify-center overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-bg-panel to-bg-deep p-8">
              {/* accent glow */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#6DB33F]/10 blur-3xl" />

              <div className="relative flex items-center gap-3">
                <span className="flex h-14 w-14 items-center justify-center rounded-xl border border-line bg-[#6DB33F]/10 text-[#6DB33F]">
                  <SiSpring size={30} />
                </span>
                <span className="flex h-14 w-14 items-center justify-center rounded-xl border border-line bg-white/[0.03] text-txt-primary">
                  <SiNextdotjs size={28} />
                </span>
                <span className="flex h-14 w-14 items-center justify-center rounded-xl border border-line bg-[#FF9900]/10 text-[#FF9900]">
                  <FaAws size={30} />
                </span>
              </div>

              <p className="relative mt-6 font-display text-2xl font-semibold text-txt-primary">
                Spring Boot &amp; Next.js
              </p>
              <p className="relative mt-2 max-w-xs text-sm leading-relaxed text-txt-muted">
                {t({
                  es: "Arquitecturas full stack end-to-end, del backend a la interfaz.",
                  en: "End-to-end full stack architectures, from backend to interface.",
                })}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
