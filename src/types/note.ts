import type { CollectionEntry } from "astro:content";

/**
 * Note (Technical Writing) content types.
 * See src/content/config.ts for the Zod schema that validates this at build time.
 */

/** Full note entry — front matter + rendered content + Astro metadata. */
export type NoteEntry = CollectionEntry<"notes">;
