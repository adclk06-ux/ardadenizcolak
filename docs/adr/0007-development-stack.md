# ADR-0007: Development Stack

## Status
Accepted

## Context
The Product DNA requires the platform to be maintainable after five years (Axiom 3, Decision Framework Question 3). ADR-0001 established the platform as a static site compiled at build time and served from a CDN. This ADR selects the specific tools that implement that architecture.

The decision prioritizes tools that are:
- **Standards-aligned** (built on web standards, not proprietary abstractions)
- **Mature** (sufficient ecosystem, documentation, and community to survive the 5-year horizon)
- **Minimal** (each tool earns its place; no redundancy)
- **Type-safe** (errors caught at build time, not in production)

## Decision

### Astro 5
**Role:** Static site generator, build orchestrator, component framework.

**Why Astro:**
- **Zero-JS-by-default content pages:** Content ships as static HTML. JavaScript is included only for explicitly interactive islands.
- **File-system routing:** Maps directly to ADR-0002's routing strategy (`src/pages/` → URLs).
- **Content collections:** Type-safe Markdown/MDX querying with Zod schema validation for front matter.
- **Partial hydration:** Interactive components hydrate only when needed. The majority of the platform is pure static HTML.
- **MDX native support:** Content can include components (diagrams, data visualizations) without leaving the Markdown authoring flow.

**ADR-0001 Alignment:** Astro is the concrete implementation of the "minimal, well-established static site generator" referenced in ADR-0001.

### TypeScript
**Role:** Type safety across the entire codebase — components, utilities, content schemas, and build configuration.

**Why TypeScript:**
- Content schemas (front matter) are validated at build time. A missing `state` field fails the build, not the page.
- Component props are typed. A `LifecycleBadge` cannot receive an invalid state string.
- Refactoring is safe. Renaming a content field updates all references or fails the build.
- No runtime cost. TypeScript compiles to JavaScript; types are erased.

**Scope:** Strict mode enabled. No `any` without explicit comment. Types are not optional documentation — they are enforced contracts.

### MDX
**Role:** Content authoring format for case studies, architecture entries, and technical essays.

**Why MDX over plain Markdown:**
- Diagrams and data visualizations can be authored as React/Astro components inline with prose.
- Code blocks with syntax highlighting are first-class, not plugin-dependent.
- Consistent component usage across content: a `LifecycleBadge` in an article is the same component used in the project index.
- Content remains readable as text. MDX is Markdown with optional JSX — the Markdown is never lost.

**Constraint:** MDX components are for content enrichment (diagrams, code blocks, data tables), not for layout or navigation. Layout remains the responsibility of Astro layouts.

### CSS Variables
**Role:** Design token system for colors, typography, and spacing.

**ADR-0003 Alignment:** CSS Variables are the concrete implementation of the "CSS custom property system" decided in ADR-0003. No preprocessor. No utility framework.

### CSS Modules
**Role:** Component-scoped styling.

**Why CSS Modules alongside CSS Variables:**
- Global tokens in `tokens.css` (CSS Variables) define the design system.
- Component-specific styles in `*.module.css` files scope rules to their component without class name collision.
- The combination enforces discipline: tokens are global and shared; component styles are local and scoped.
- No runtime CSS-in-JS cost. Modules are compiled to static class names at build time.

**Constraint:** Component modules reference only global tokens. No hardcoded values. No `!important`.

### Biome
**Role:** Linting, formatting, and import sorting.

**Why Biome over ESLint + Prettier:**
- **Single tool:** One dependency, one configuration file, one execution path.
- **Speed:** Rust-based. Formatting and linting complete in milliseconds, not seconds.
- **Minimal configuration:** Sensible defaults with minimal overrides. The platform does not need a custom rule ecosystem.
- **No plugin ecosystem:** Biome's opinionated rule set enforces consistency. There is no temptation to add bespoke lint rules.

**Scope:** Formatting on save (IDE integration) and in CI. Linting blocks merge on failure.

### pnpm
**Role:** Package manager.

**Why pnpm over npm or Yarn:**
- **Disk efficiency:** Content-addressable store. Multiple projects share dependencies without duplication.
- **Strict node_modules:** Packages can only access explicitly declared dependencies. Accidental transitive dependency usage is impossible.
- **Lockfile reliability:** `pnpm-lock.yaml` is deterministic and readable.
- **Mature:** pnpm is the standard in modern development. Its survival is not a risk.

## Consequences

### Positive
- **Type safety end-to-end:** Content, components, and utilities share a single type system. A change to a content schema propagates to all consumers at build time.
- **Fast builds:** Astro's static generation + Biome's speed + pnpm's efficiency means the entire platform builds in seconds, not minutes.
- **Minimal runtime:** The deployed output is mostly static HTML with minimal JavaScript. This is the performance the Product DNA requires.
- **Single language:** TypeScript for logic, CSS for styling, MDX for content, Astro for structure. No context switching between languages or paradigms.

### Negative
- **Astro 5 dependency:** If Astro is abandoned or radically changes, migration is required. The risk is mitigated by Astro's alignment with web standards (output is static HTML) and the Content as Markdown principle (content is portable).
- **TypeScript learning curve:** For a single-author platform, the author must know TypeScript. This is acceptable — the platform represents a senior engineer.
- **Biome limitations:** Biome does not have the plugin ecosystem of ESLint. Rules that are not built-in cannot be added. This is an acceptable cost for the simplicity gained.

### Alternatives Considered
- **Next.js instead of Astro:** Rejected. Next.js optimizes for dynamic, server-rendered applications. Its static export mode is secondary. Astro is purpose-built for content-heavy static sites.
- **Eleventy instead of Astro:** Rejected. Eleventy is excellent for simple static sites but lacks first-class component support and type-safe content collections. The platform's need for MDX and component islands favors Astro.
- **Plain Markdown instead of MDX:** Rejected. MDX enables inline components (diagrams, data tables) without leaving the content authoring flow. The cost of MDX compilation is paid at build time, not runtime.
- **ESLint + Prettier instead of Biome:** Rejected. Two tools with separate configurations and plugin ecosystems create more maintenance surface than a single integrated tool.
- **npm instead of pnpm:** Rejected. npm's flat `node_modules` allows accidental transitive dependency usage. pnpm's strictness prevents this class of error.

## Stack Summary

| Layer | Tool | Purpose |
|---|---|---|
| Framework | Astro 5 | Static site generation, routing, component composition |
| Language | TypeScript | Type safety across code and content |
| Content | MDX | Authoring with inline component support |
| Styling | CSS Variables + CSS Modules | Design tokens + scoped component styles |
| Quality | Biome | Linting, formatting, import sorting |
| Packages | pnpm | Dependency management |

---

*Depends On: ADR-0001 (Platform Choice), ADR-0003 (Styling System)*
