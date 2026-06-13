import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { siteConfig } from "@lib/siteConfig.js";

export const GET: APIRoute = async () => {
  const notes = await getCollection("notes");
  const systems = await getCollection("systems");

  const items = [...notes, ...systems]
    .filter((entry: { data: { state: string } }) => entry.data.state === "published")
    .sort((a: { data: { publishedAt?: Date } }, b: { data: { publishedAt?: Date } }) => {
      const dateA = a.data.publishedAt?.getTime() ?? 0;
      const dateB = b.data.publishedAt?.getTime() ?? 0;
      return dateB - dateA;
    });

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${siteConfig.name}</title>
    <link>${siteConfig.url}</link>
    <description>${siteConfig.description}</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items
  .map(
    (entry: {
      slug: string;
      data: { title: string; excerpt: string; publishedAt?: Date; updatedAt?: Date };
    }) => {
      const date = entry.data.updatedAt ?? entry.data.publishedAt ?? new Date();
      const link = `${siteConfig.url}/notes/${entry.slug}`;
      return `    <item>
      <title>${escapeXml(entry.data.title)}</title>
      <link>${link}</link>
      <guid>${link}</guid>
      <pubDate>${date.toUTCString()}</pubDate>
      <description>${escapeXml(entry.data.excerpt)}</description>
    </item>`;
    },
  )
  .join("\n")}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml",
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
