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
    "I design scalable systems, AI-powered applications, and modern web experiences with long-term thinking.",
  philosophy: [
    "I build systems that outlast their builder.",
    "I prefer explicit trade-offs over hidden complexity.",
    "I measure decisions by what remains true in five years.",
    "I write code for the engineer who inherits it.",
    "I ship early, document always, and iterate with evidence.",
  ],

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
  inquiryTypes: ["Collaboration", "Consulting", "Speaking", "Hiring"] as const,

  /** What is not welcome */
  notWelcome: [
    "Spam",
    'Vague "let\'s connect" requests without context',
    "Unpaid speculative work",
    "Recruiter pitches for roles outside stated domains",
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
