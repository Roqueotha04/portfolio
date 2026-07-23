export type Lang = "es" | "en";

/** A field that has a Spanish and English variant. */
export type Localized<T = string> = { es: T; en: T };

/** Resolve a Localized value (or plain value) for the active language. */
export function pick<T>(value: Localized<T> | T, lang: Lang): T {
  if (value && typeof value === "object" && "es" in (value as object) && "en" in (value as object)) {
    return (value as Localized<T>)[lang];
  }
  return value as T;
}
