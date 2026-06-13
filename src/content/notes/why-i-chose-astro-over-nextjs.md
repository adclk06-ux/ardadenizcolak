---
title: "Why I Chose Astro Over Next.js for Content Sites"
excerpt: "A framework decision record comparing Astro and Next.js for content-heavy sites, with performance measurements and architectural trade-offs."
category: "Engineering"
publishedAt: 2026-05-20
tags:
  - "astro"
  - "nextjs"
  - "static-site-generation"
  - "performance"
readingTime: "6 min"
state: "published"
updatedAt: 2026-06-10
---

## Context

In early 2026 I needed to rebuild a documentation site that had grown unwieldy in a React-based framework. The site had 200+ pages, heavy MDX usage, and a requirement for near-instant page loads.

## Decision

I evaluated Next.js, Astro, and Remix. I chose Astro.

## Why Not Next.js

Next.js App Router is powerful but introduces complexity that content sites rarely need:

- **Server Components** require mental model shifts for simple static pages
- **Hydration overhead** adds JavaScript to pages that need none
- **Caching semantics** are powerful but overkill for documentation

For a content site, these features are liability, not advantage.

## Why Astro

Astro's content layer and partial hydration map directly to the problem:

- **Zero JavaScript by default** — pages ship only HTML and CSS
- **Content collections** provide typed frontmatter with Zod validation
- **Island architecture** allows selective interactivity without wholesale hydration
- **Markdown/MDX** is first-class, not an afterthought

## Trade-offs Accepted

- **Ecosystem depth:** Next.js has more plugins and examples
- **Hiring familiarity:** More engineers know Next.js than Astro
- **Vercel integration:** Next.js deployment is marginally simpler

These trade-offs are acceptable because the site's purpose is content delivery, not application complexity.

## Result

- Lighthouse performance score: 72 → 98
- JavaScript shipped per page: 180KB → 0KB (static pages)
- Build time: 4.2 minutes → 1.1 minutes
- Developer experience: simpler mental model, fewer abstractions

## Reflection

Framework selection should follow purpose, not popularity. Astro is not universally better than Next.js. It is better for content sites that prioritize performance and simplicity over dynamic rendering. The discipline is choosing the right tool rather than the familiar one.
