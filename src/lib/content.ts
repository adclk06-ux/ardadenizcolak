import { getCollection } from "astro:content";
import type { ProjectEntry, SystemEntry, NoteEntry } from "@types";
import { sortByDate } from "./sortContent";

export async function getPublishedWork(): Promise<ProjectEntry[]> {
  const entries = await getCollection("work");
  return sortByDate(entries.filter((e) => e.data.state !== "project"));
}

export async function getPublishedSystems(): Promise<SystemEntry[]> {
  const entries = await getCollection("systems");
  return sortByDate(entries.filter((e) => e.data.state !== "project"));
}

export async function getPublishedNotes(): Promise<NoteEntry[]> {
  const entries = await getCollection("notes");
  return sortByDate(entries.filter((e) => e.data.state !== "project"));
}
