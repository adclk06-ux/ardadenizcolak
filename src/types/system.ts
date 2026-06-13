import type { CollectionEntry } from "astro:content";

/**
 * System (Architecture) content types.
 * See src/content/config.ts for the Zod schema that validates this at build time.
 */

/** Full system entry — front matter + rendered content + Astro metadata. */
export type SystemEntry = CollectionEntry<"systems">;
