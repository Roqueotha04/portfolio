import { Fragment, type ReactNode } from "react";

/** Interesting terms to emphasize in body copy (ES + EN). Longest first. */
const KEYWORDS = [
  "arquitecturas escalables",
  "scalable architectures",
  "Spring Security",
  "Spring Boot",
  "Mercado Pago",
  "Claude Code",
  "Tienda Nube",
  "tiempo real",
  "Clean Code",
  "end-to-end",
  "real-time",
  "Next.js",
  "backend",
  "Prisma",
  "SaaS",
  "SOLID",
  "AWS",
  "UTN",
].sort((a, b) => b.length - a.length);

const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const RE = new RegExp(`(${KEYWORDS.map(escape).join("|")})`, "gi");

/**
 * Returns the text with any interesting keywords wrapped in a subtle copper
 * emphasis span. Purely presentational — no change to the underlying copy.
 */
export function renderHighlighted(text: string): ReactNode {
  const parts = text.split(RE);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="font-medium text-copper/90">
        {part}
      </span>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    )
  );
}
