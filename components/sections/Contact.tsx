"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { WhatsappLogo, EnvelopeSimple, Copy, Check } from "@phosphor-icons/react";
import { useLang } from "@/components/providers/LanguageProvider";
import { CONTACT, PROFILE } from "@/lib/content";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

export function Contact() {
  const { t } = useLang();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(168,122,66,0.10),transparent_70%)]" />
      {/* left-side glows near the top (bridge from Skills) */}
      <div className="pointer-events-none absolute -left-28 -top-16 h-96 w-96 rounded-full bg-copper/[0.10] blur-[130px]" />
      <div className="pointer-events-none absolute -left-16 top-1/3 h-72 w-72 rounded-full bg-gold/[0.07] blur-[120px]" />

      <div className="relative mx-auto max-w-[1260px] px-5">
        <SectionHeader title={t(CONTACT.label)} align="center" />

        <Reveal className="mx-auto max-w-2xl text-center">
          <h3 className="font-display text-3xl font-bold text-txt-primary sm:text-4xl">
            {t(CONTACT.title)}
          </h3>
          <p className="mx-auto mt-4 max-w-xl text-txt-muted">{t(CONTACT.lead)}</p>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
          {/* WhatsApp */}
          <a
            href={PROFILE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-2xl border border-line bg-bg-panel/50 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/40"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold">
              <WhatsappLogo size={24} weight="fill" />
            </span>
            <span className="min-w-0">
              <span className="block font-semibold text-txt-primary">{t(CONTACT.whatsappBtn)}</span>
              <span className="block truncate font-mono text-sm text-txt-muted">
                {PROFILE.whatsappLabel}
              </span>
            </span>
          </a>

          {/* Email (copy) */}
          <button
            onClick={copyEmail}
            className="group flex items-center gap-4 rounded-2xl border border-line bg-bg-panel/50 p-5 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/40"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold">
              {copied ? <Check size={24} weight="bold" /> : <EnvelopeSimple size={24} weight="fill" />}
            </span>
            <span className="min-w-0">
              <span className="flex items-center gap-1.5 font-semibold text-txt-primary">
                {t(CONTACT.emailBtn)}
                <Copy size={14} className="text-txt-muted" />
              </span>
              <span className="block truncate font-mono text-sm text-txt-muted">{PROFILE.email}</span>
            </span>
          </button>
        </Reveal>
      </div>

      {/* Copied toast */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full border border-gold/40 bg-bg-panel px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-gold shadow-lg"
          >
            {t(CONTACT.copiedToast)}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
