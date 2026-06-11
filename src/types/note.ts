import type { CollectionEntry } from "astro:content";
import type { LifecycleState, NoteCategory } from "./metadata.js";

/**
 * Note (Technical Writing) content types.
 * See src/content/config.ts for the Zod schema that validates this at build time.
 */

/** Front matter for a technical essay or article. */
export interface NoteFrontMatter {
  title: string;
  excerpt: string;
  category: NoteCategory;
  publishedAt: Date;
  updatedAt?: Date;
  readingTime?: string;
  tags: string[];
  state: LifecycleState;
}

/** Full note entry — front matter + rendered content + Astro metadata. */
export type NoteEntry = CollectionEntry<"notes">;

/** Note rendered with Astro's MDX render output. */
export interface NoteRendered {
  entry: NoteEntry;
  Content: NoteEntry extends { render(): Promise<{ Content: infer C }> } ? C : never;
}
