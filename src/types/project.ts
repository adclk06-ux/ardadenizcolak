import type { CollectionEntry } from "astro:content";
import type { LifecycleState } from "./metadata.js";

/**
 * Project (Work) content types.
 * See src/content/config.ts for the Zod schema that validates this at build time.
 */

/** Front matter for a project case study. */
export interface ProjectFrontMatter {
  title: string;
  summary: string;
  year: number;
  status: string;
  technologies: string[];
  featured: boolean;
  order: number;
  repository?: string;
  demo?: string;
  state: LifecycleState;
  updatedDate?: Date;
}

/** Full project entry — front matter + rendered content + Astro metadata. */
export type ProjectEntry = CollectionEntry<"work">;

/** Project rendered with Astro's MDX render output. */
export interface ProjectRendered {
  entry: ProjectEntry;
  Content: ProjectEntry extends { render(): Promise<{ Content: infer C }> } ? C : never;
}
