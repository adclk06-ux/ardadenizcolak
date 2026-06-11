import type { CollectionEntry } from "astro:content";
import type { LifecycleState } from "./metadata.js";

/**
 * System (Architecture) content types.
 * See src/content/config.ts for the Zod schema that validates this at build time.
 */

/** Front matter for a system architecture entry. */
export interface SystemFrontMatter {
  title: string;
  category: string;
  complexity: "low" | "medium" | "high";
  state: LifecycleState;
  updatedAt?: Date;
}

/** Full system entry — front matter + rendered content + Astro metadata. */
export type SystemEntry = CollectionEntry<"systems">;

/** System rendered with Astro's MDX render output. */
export interface SystemRendered {
  entry: SystemEntry;
  Content: SystemEntry extends { render(): Promise<{ Content: infer C }> } ? C : never;
}
