/**
 * Slug generation utilities.
 * See ADR-0002: Routing Strategy — slugs use hyphens, not underscores or camelCase.
 */

/** Convert a title to a URL-safe slug. */
export function titleToSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") // remove special characters
    .replace(/\s+/g, "-") // spaces → hyphens
    .replace(/-+/g, "-"); // collapse multiple hyphens
}

/** Validate that a slug conforms to platform rules. */
export function isValidSlug(slug: string): boolean {
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug);
}

/** Construct a full path from a collection and slug. */
export function buildPath(collection: "work" | "notes" | "systems", slug: string): string {
  return `/${collection}/${slug}`;
}
