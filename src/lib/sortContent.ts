/**
 * Content sorting utilities.
 * Single source of truth for how content is ordered across all destinations.
 */

/** Entry with a slug and data containing possible date fields. */
interface SluggableEntry {
  slug: string;
  data: Record<string, unknown>;
}

/** Extract a timestamp from an entry, checking multiple possible date fields. */
function getTimestamp(entry: SluggableEntry): number {
  const data = entry.data;
  const rawDate = data.updatedAt || data.updatedDate || data.publishedAt || data.date || 0;

  if (!rawDate) return 0;
  return new Date(rawDate as string | Date).getTime();
}

/** Sort by date descending (newest first). Falls back to entry slug for stability. */
export function sortByDate<T extends SluggableEntry>(
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
