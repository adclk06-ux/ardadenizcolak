import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";
import { siteConfig } from "@lib/siteConfig.js";

export const GET: APIRoute = async () => {
  const notes = await getCollection("notes");

  const items = notes
    .filter((entry: CollectionEntry<"notes">) => entry.data.state === "published")
    .sort((a: CollectionEntry<"notes">, b: CollectionEntry<"notes">) => {
      const dateA = a.data.publishedAt?.getTime() ?? 0;
      const dateB = b.data.publishedAt?.getTime() ?? 0;
      return dateB - dateA;
    });

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(siteConfig.name)}</title>
    <link>${siteConfig.url}</link>
    <description>${escapeXml(siteConfig.description)}</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items
  .map((entry: CollectionEntry<"notes">) => {
    const date = entry.data.updatedAt ?? entry.data.publishedAt;
    const dateStr = date ? date.toUTCString() : new Date().toUTCString();
    const link = `${siteConfig.url}/notes/${entry.slug}`;
    return `    <item>
      <title>${escapeXml(entry.data.title)}</title>
      <link>${link}</link>
      <guid>${link}</guid>
      <pubDate>${dateStr}</pubDate>
      <description>${escapeXml(entry.data.excerpt)}</description>
    </item>`;
  })
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
