import { defineCollection, z } from "astro:content";

export const LifecycleState = z.enum([
  "project",
  "published",
  "updated",
  "archived",
  "referenced",
  "deprecated",
]);

export const NoteCategory = z.enum([
  "Engineering",
  "Architecture",
  "Performance",
  "AI",
  "Systems",
  "Design",
  "Observations",
  "Decision Log",
]);

const work = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    year: z.number().int().min(2000).max(2100),
    status: z.string(),
    role: z.string().optional(),
    duration: z.string().optional(),
    technologies: z.array(z.string()),
    featured: z.boolean().default(false),
    order: z.number().int().default(0),
    repository: z.string().url().optional(),
    demo: z.string().url().optional(),
    problem: z.string().optional(),
    constraints: z.string().optional(),
    alternatives: z.string().optional(),
    architecture: z.string().optional(),
    implementation: z.string().optional(),
    tradeoffs: z.string().optional(),
    performance: z.string().optional(),
    lessons: z.string().optional(),
    future: z.string().optional(),
    state: LifecycleState,
    updatedDate: z.coerce.date().optional(),
  }),
});

const systems = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    domain: z.string().optional(),
    category: z.string(),
    complexity: z.enum(["low", "medium", "high"]),
    dependencies: z.array(z.string()).default([]),
    references: z.array(z.string().url()).default([]),
    state: LifecycleState,
    updatedAt: z.coerce.date().optional(),
  }),
});

const notes = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    category: NoteCategory,
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    readingTime: z.string().optional(),
    tags: z.array(z.string()).default([]),
    state: LifecycleState,
  }),
});

export const collections = { work, systems, notes };
