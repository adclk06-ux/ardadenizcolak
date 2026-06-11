# ADR-0001: Platform Choice

## Status
Accepted

## Context
The platform must be built on technology that:
- Requires no backend infrastructure beyond static hosting
- Supports the Information Architecture's six destinations without server-side logic
- Enables long-term maintainability (5+ years without dependency rot)
- Allows technical depth in case studies through code syntax highlighting, diagrams, and embedded data
- Guarantees sub-second initial load times globally

The Product DNA (Axiom 3) states: *Performance is part of the experience.* A slow platform contradicts every claim about engineering quality. This ADR must choose a technology stack that makes performance the default, not an optimization.

## Decision
Build the platform as a **static site** compiled at build time, served from a CDN.

**Build Tool:** Astro 5 (see ADR-0007 for specific tool justification). Chosen for:
- Zero client-side JavaScript by default (content ships as static HTML)
- Partial hydration available only where interactivity is genuinely required
- Permanent URL generation matching the Information Architecture (`/work`, `/systems`, `/notes`, etc.)
- Native MDX support for content with inline components

**Hosting:** Static CDN (e.g., Cloudflare Pages, Vercel, Netlify, or equivalent).

**Content Format:** Markdown with front matter for metadata (title, category, lifecycle state, publication date).

**No CMS.** Content is authored in Markdown, version-controlled, and compiled at build time. This removes database dependencies, CMS subscription costs, and third-party uptime risks.

## Consequences

### Positive
- **Performance by default:** Static HTML requires no server computation per request. First Contentful Paint is measured in milliseconds, not seconds.
- **Maintainability:** The build tool is a single dev dependency. If it becomes unmaintained in five years, the content (Markdown) migrates to a new tool trivially.
- **Security:** No database, no admin panel, no authentication surface. The attack surface is a CDN serving read-only files.
- **Version control:** Every content change, structural decision, and typo fix is tracked in Git. The platform's evolution is auditable.
- **Simplicity:** No API keys, no environment variables for content, no build-time secrets. The repository is the platform.

### Negative
- **No dynamic features:** Search, if implemented, must be client-side (e.g., pre-built index). Comments, analytics, and real-time features are excluded by design.
- **Build step required:** Content updates require a build and deploy. This is intentional friction that enforces the Content Maintenance principle: *nothing is under construction.*
- **Authoring barrier:** Non-technical stakeholders cannot edit content through a GUI. This is acceptable — the platform has one author.

### Alternatives Considered
- **Next.js / Nuxt with SSR:** Rejected. Server-side rendering introduces infrastructure complexity, cold starts, and cache invalidation problems. The platform has no dynamic data.
- **Headless CMS + Static Build:** Rejected. A CMS adds a dependency, a subscription, and an authentication layer for a single-author site. Markdown in Git is simpler and more durable.
- **Hand-coded HTML:** Rejected. Maintainable at small scale, but repetitive for six destinations, shared components (navigation, footer), and dozens of content entries. A static generator provides composition without runtime cost.
- **Single-page application (React/Vue SPA):** Rejected. SPAs ship JavaScript to render content that could be static HTML. This violates the Performance axiom and creates accessibility and SEO work that HTML already solves.
