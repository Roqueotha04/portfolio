import type { CSSProperties } from "react";
import { TECH } from "@/lib/tech";

type TechLogoProps = {
  slug: string;
  /** "pill" = icon + label chip (stack). "icon" = glyph only (hero / project cards). */
  variant?: "pill" | "icon";
  /** Icon size in px for the "icon" variant. */
  size?: number;
};

/**
 * Renders a stack technology as a monochrome mark that reveals its brand
 * color on hover. Technologies without an official icon fall back to an
 * elegant typographic chip. Pure CSS hover, no client JS.
 */
export function TechLogo({ slug, variant = "pill", size = 30 }: TechLogoProps) {
  const tech = TECH[slug];
  if (!tech) return null;

  const Icon = tech.icon;
  const style = { "--brand": tech.color } as CSSProperties;

  // Icon-only (hero floating row / project tech row)
  if (variant === "icon") {
    if (!Icon) {
      return (
        <span
          style={style}
          className="rounded-md border border-line px-2.5 py-1 font-mono text-xs uppercase tracking-wider text-txt-muted transition-colors duration-300 hover:text-[var(--brand)]"
        >
          {tech.label}
        </span>
      );
    }
    return (
      <span
        style={style}
        title={tech.label}
        aria-label={tech.label}
        className="text-txt-muted transition-colors duration-300 hover:text-[var(--brand)]"
      >
        <Icon size={size} />
      </span>
    );
  }

  // Pill (stack grid) — chips and icons share the same shape
  return (
    <span
      style={style}
      className="group/tech inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.02] px-3.5 py-2 text-sm text-txt-muted transition-all duration-300 hover:border-[var(--brand)]/40 hover:text-[var(--brand)]"
    >
      {Icon ? (
        <Icon size={18} className="shrink-0" />
      ) : (
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-copper/70 transition-colors duration-300 group-hover/tech:bg-[var(--brand)]" />
      )}
      <span className="whitespace-nowrap font-mono text-[13px]">{tech.label}</span>
    </span>
  );
}
