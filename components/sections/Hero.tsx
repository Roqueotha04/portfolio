"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import { DownloadSimple, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import { useLang } from "@/components/providers/LanguageProvider";
import { HERO, PROFILE } from "@/lib/content";
import { TechLogo } from "@/components/ui/TechLogo";
import { EASE } from "@/lib/motion";

export function Hero() {
  const { t } = useLang();
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
  };
  const item: Variants = {
    hidden: reduce ? {} : { opacity: 0, y: 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
  };

  return (
    <section id="hero" className="aura relative flex min-h-[100dvh] flex-col overflow-hidden">
      {/* faint grid backdrop */}
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1260px] flex-1 items-center px-5 pt-28 pb-10">
        <div className="grid w-full items-center gap-12 md:grid-cols-12 md:gap-8">
          {/* Text column */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="md:col-span-7"
          >
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.02] px-3.5 py-1.5 font-mono text-xs text-txt-muted">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold/70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
                </span>
                {t(HERO.status)}
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-7 font-display font-bold leading-[0.92] tracking-tight"
            >
              <span className="gradient-copper block text-6xl sm:text-7xl lg:text-8xl">Roque</span>
              <span className="mt-1 block text-6xl text-transparent sm:text-7xl lg:text-8xl [-webkit-text-stroke:1.5px_var(--copper)]">
                OTHACEHE
              </span>
            </motion.h1>

            <motion.div variants={item} className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className="font-display text-xl font-medium text-txt-primary sm:text-2xl">
                {t(PROFILE.role)}
              </span>
              <span className="hidden text-copper sm:inline">/</span>
              <span className="font-mono text-sm text-txt-muted sm:text-base">
                {PROFILE.specialization}
              </span>
            </motion.div>

            <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href={t(PROFILE.cv)}
                download
                className="glow-pulse inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-bg-deep transition-transform duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <DownloadSimple size={18} weight="bold" />
                {t(HERO.downloadCv)}
              </a>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-txt-primary transition-all duration-200 hover:-translate-y-0.5 hover:border-gold/40 active:scale-[0.98]"
              >
                <GithubLogo size={18} weight="fill" />
                {HERO.githubBtn}
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-txt-primary transition-all duration-200 hover:-translate-y-0.5 hover:border-gold/40 active:scale-[0.98]"
              >
                <LinkedinLogo size={18} weight="fill" />
                {HERO.linkedinBtn}
              </a>
            </motion.div>
          </motion.div>

          {/* Photo column */}
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.2, ease: EASE }}
            className="md:col-span-5"
          >
            <div className="relative mx-auto w-fit">
              {/* offset copper frame */}
              <div className="absolute inset-0 translate-x-3.5 translate-y-3.5 rounded-2xl border border-copper/50" />
              <div className="brackets relative overflow-hidden rounded-2xl border border-line bg-bg-panel">
                <Image
                  src={PROFILE.photo}
                  alt={PROFILE.name}
                  width={340}
                  height={320}
                  priority
                  className="h-[280px] w-[280px] object-cover object-center sm:h-[320px] sm:w-[320px]"
                />
                {/* caption bar */}
                <div className="absolute inset-x-0 bottom-0 flex items-center gap-2 border-t border-line/60 bg-bg-deep/80 px-4 py-1.5 backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-copper" />
                  <span className="font-mono text-[11px] uppercase tracking-widest text-copper">
                    Roque Othacehe
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stack strip */}
      <motion.div
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="relative z-10 border-y border-line bg-bg-deep/60 backdrop-blur-sm"
      >
        <div className="mx-auto flex max-w-[1260px] flex-wrap items-center justify-center gap-x-3 gap-y-3 px-5 py-5">
          {HERO.marqueeTech.map((slug) => (
            <TechLogo key={slug} slug={slug} variant="pill" />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
