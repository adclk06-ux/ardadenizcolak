/**
 * SEO metadata generation.
 * All meta tags are constructed at build time. No runtime SEO computation.
 */

import { siteConfig } from "./siteConfig.js";

export interface SeoMeta {
  title: string;
  description: string;
  canonical: string;
  ogTitle: string;
  ogDescription: string;
  ogUrl: string;
  ogType: "website" | "article";
}

/** Generate complete SEO metadata for any page. */
export function generateSeoMeta(
  pageTitle: string,
  pageDescription?: string,
  pagePath?: string,
): SeoMeta {
  const title =
    pageTitle === siteConfig.name ? siteConfig.name : `${pageTitle} — ${siteConfig.name}`;
  const description = pageDescription || siteConfig.description;
  const path = pagePath || "/";
  const canonical = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    canonical,
    ogTitle: title,
    ogDescription: description,
    ogUrl: canonical,
    ogType: path === "/" ? "website" : "article",
  };
}
