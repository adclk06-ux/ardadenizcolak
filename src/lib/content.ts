import { getCollection } from "astro:content";
import type { NoteEntry, ProjectEntry, SystemEntry } from "../types/index.js";
import { sortByDate } from "./sortContent.js";

export async function getPublishedWork(): Promise<ProjectEntry[]> {
  const entries = await getCollection("work");
  return sortByDate(entries.filter((e: ProjectEntry) => e.data.state !== "project"));
}

export async function getPublishedSystems(): Promise<SystemEntry[]> {
  const entries = await getCollection("systems");
  return sortByDate(entries.filter((e: SystemEntry) => e.data.state !== "project"));
}

export async function getPublishedNotes(): Promise<NoteEntry[]> {
  const entries = await getCollection("notes");
  return sortByDate(entries.filter((e: NoteEntry) => e.data.state !== "project"));
}
