/**
 * Date formatting utilities.
 * All dates are formatted server-side at build time. No locale negotiation at runtime.
 */

/** Format date as "Jan 15, 2026" — for human display */
export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

/** Format date as ISO 8601 (YYYY-MM-DD) — for <time datetime> attributes */
export function formatDateIso(date: Date): string {
  return date.toISOString().split("T")[0];
}

/** Format date as ISO 8601 with time — for sitemaps and RSS */
export function formatDateIsoFull(date: Date): string {
  return date.toISOString();
}
