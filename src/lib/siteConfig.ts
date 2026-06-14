/**
 * Site Configuration — Single source of truth for all site-wide constants.
 * See PROJECT_PRINCIPLES.md: "Logic is independent of presentation."
 * No component should hardcode strings that belong here.
 */

export const siteConfig = {
  /** Identity */
  name: "Arda Deniz Çolak",
  title: "Software Engineer",
  tagline: "Building software that earns trust over time.",
  description:
    "I design scalable systems, AI-powered applications, and thoughtful digital products with long-term maintainability in mind.",

  /** Domain */
  url: "https://ardadenizcolak.dev",

  /** Contact */
  email: "hello@ardadenizcolak.dev",

  /** Navigation — five destinations (homepage via logo), one source of truth */
  navigation: [
    { label: "Work", href: "/work" },
    { label: "Notes", href: "/notes" },
    { label: "Systems", href: "/systems" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ] as const,

  /** Content categories — seven mutually exclusive intellectual domains */
  categories: [
    "Engineering",
    "Architecture",
    "Performance",
    "AI",
    "Systems",
    "Design",
    "Observations",
    "Decision Log",
  ] as const,

  /** Lifecycle states — six states, exhaustive */
  lifecycleStates: [
    "project",
    "published",
    "updated",
    "archived",
    "referenced",
    "deprecated",
  ] as const,
} as const;

/** Helper: construct full URL from path */
export function fullUrl(path: string): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${cleanPath}`;
}

/** Helper: construct page title */
export function pageTitle(title: string): string {
  if (title === siteConfig.name) return siteConfig.name;
  return `${title} — ${siteConfig.name}`;
}
