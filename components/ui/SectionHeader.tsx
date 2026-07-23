import { Reveal } from "./Reveal";

type SectionHeaderProps = {
  title: string;
  /** Optional short context line shown under the title. */
  subtitle?: string;
  align?: "left" | "center";
};

/**
 * Editorial section header: a short copper rule + large display title.
 * Left-aligned by default for a modern, non-templated rhythm.
 */
export function SectionHeader({ title, subtitle, align = "left" }: SectionHeaderProps) {
  return (
    <Reveal
      className={`mb-12 md:mb-16 ${align === "center" ? "flex flex-col items-center text-center" : ""}`}
    >
      <div className={`flex items-center gap-4 ${align === "center" ? "justify-center" : ""}`}>
        <span className="h-px w-10 bg-gradient-to-r from-copper to-gold" />
        <h2 className="font-display text-3xl font-bold tracking-tight text-txt-primary sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className={`mt-4 max-w-xl text-txt-muted ${align === "center" ? "" : "pl-14"}`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
