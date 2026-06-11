/**
 * Site Configuration — Single source of truth for all site-wide constants.
 * See PROJECT_PRINCIPLES.md: "Logic is independent of presentation."
 * No component should hardcode strings that belong here.
 */

export const siteConfig = {
  /** Identity */
  name: "Arda Deniz Çolak",
  title: "Software Engineer",
  description:
    "Software Engineer — Scalable Products, AI Applications, Automation Systems, Long-term Infrastructure",

  /** Domain */
  url: "https://ardadenizcolak.dev",

  /** Contact */
  email: "hello@ardadenizcolak.dev",

  /** Social — only links that are professionally relevant */
  social: {
    github: "https://github.com/ardadenizcolak",
    linkedin: "https://linkedin.com/in/ardadenizcolak",
  },

  /** Navigation — six destinations, one source of truth */
  navigation: [
    { label: "main", href: "/", destination: "Homepage" },
    { label: "Work", href: "/work", destination: "Projects" },
    { label: "Notes", href: "/notes", destination: "Technical Writing" },
    { label: "Systems", href: "/systems", destination: "Architectures" },
    { label: "About", href: "/about", destination: "About" },
    { label: "Contact", href: "/contact", destination: "Contact" },
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

  /** Response expectations — set and honored */
  responseTime: "48 hours for meaningful inquiries. 72 hours for complex requests.",

  /** Inquiry types — what contact is welcome */
  inquiryTypes: [
    "Collaboration",
    "Consulting",
    "Speaking",
    "Hiring",
  ] as const,

  /** What is not welcome */
  notWelcome: [
    "Spam",
    'Vague "let\'s connect" requests without context',
    "Unpaid speculative work",
    "Recruiter pitches for roles outside stated domains",
  ] as const,
} as const;

/** Type-safe navigation item */
export type NavItem = (typeof siteConfig.navigation)[number];

/** Type-safe category */
export type Category = (typeof siteConfig.categories)[number];

/** Type-safe lifecycle state */
export type LifecycleState = (typeof siteConfig.lifecycleStates)[number];

/** Type-safe inquiry type */
export type InquiryType = (typeof siteConfig.inquiryTypes)[number];

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

/** Helper: construct meta description */
export function metaDescription(description?: string): string {
  return description || siteConfig.description;
}
