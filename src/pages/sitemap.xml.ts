import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { siteConfig } from "@lib/siteConfig.js";

export const GET: APIRoute = async () => {
  const work = await getCollection("work");
  const notes = await getCollection("notes");
  const systems = await getCollection("systems");

  const pages = ["", "/work", "/notes", "/systems", "/about", "/contact"];

  const urls = [
    ...pages.map((path) => ({
      loc: `${siteConfig.url}${path}`,
      lastmod: new Date().toISOString(),
    })),
    ...work.map((entry: { slug: string; data: { updatedDate?: Date } }) => ({
      loc: `${siteConfig.url}/work/${entry.slug}`,
      lastmod: entry.data.updatedDate?.toISOString() ?? new Date().toISOString(),
    })),
    ...notes.map((entry: { slug: string; data: { updatedAt?: Date; publishedAt: Date } }) => ({
      loc: `${siteConfig.url}/notes/${entry.slug}`,
      lastmod: entry.data.updatedAt?.toISOString() ?? entry.data.publishedAt.toISOString(),
    })),
    ...systems.map((entry: { slug: string; data: { updatedAt?: Date } }) => ({
      loc: `${siteConfig.url}/systems/${entry.slug}`,
      lastmod: entry.data.updatedAt?.toISOString() ?? new Date().toISOString(),
    })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${escapeXml(url.loc)}</loc>
    <lastmod>${url.lastmod.split("T")[0]}</lastmod>
  </url>`,
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
