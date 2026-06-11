/**
 * Content sorting utilities.
 * Single source of truth for how content is ordered across all destinations.
 */

import type { CollectionEntry } from "astro:content";

/** Extract a timestamp from an entry, checking multiple possible date fields. */
function getTimestamp(entry: CollectionEntry<string>): number {
  const data = entry.data as Record<string, unknown>;
  const rawDate =
    data.updatedAt ||
    data.updatedDate ||
    data.publishedAt ||
    data.date ||
    0;

  if (!rawDate) return 0;
  return new Date(rawDate as string | Date).getTime();
}

/** Sort by date descending (newest first). Falls back to entry slug for stability. */
export function sortByDate<T extends CollectionEntry<string>>(
  entries: T[],
  direction: "desc" | "asc" = "desc",
): T[] {
  return [...entries].sort((a, b) => {
    const aDate = getTimestamp(a);
    const bDate = getTimestamp(b);

    if (aDate !== bDate) {
      return direction === "desc" ? bDate - aDate : aDate - bDate;
    }

    // Stable fallback: alphabetical by slug
    return a.slug.localeCompare(b.slug);
  });
}
