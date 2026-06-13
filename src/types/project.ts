import type { CollectionEntry } from "astro:content";

/**
 * Project (Work) content types.
 * See src/content/config.ts for the Zod schema that validates this at build time.
 */

/** Full project entry — front matter + rendered content + Astro metadata. */
export type ProjectEntry = CollectionEntry<"work">;
