export function slugToPath(slug: string): string {
  return `/${slug}`;
}

export function workPath(slug: string): string {
  return `/work/${slug}`;
}

export function systemsPath(slug: string): string {
  return `/systems/${slug}`;
}

export function notesPath(slug: string): string {
  return `/notes/${slug}`;
}
