# ADR-0002: Routing Strategy

## Status
Accepted

## Context
The Information Architecture defines six destinations with permanent, guessable URLs:
- `/` (Homepage)
- `/work` (Projects index)
- `/work/project-name` (Individual case study)
- `/systems` (Architectures index)
- `/systems/entry-name` (Individual architecture entry)
- `/notes` (Technical Writing index)
- `/notes/article` (Individual article)
- `/about`
- `/contact`

The Product DNA (Section 11) states: *URLs Are Content.* URLs should be guessable, memorable, and permanent. A changed URL is a broken promise.

This ADR must define how the routing system guarantees these properties without server-side configuration, URL rewriting, or dynamic routing logic.

## Decision
Use **file-system based routing** where the directory structure of the source project maps directly to the URL structure of the built site.

**Mapping:**
```
src/pages/index.md          →  /
src/pages/work/index.md     →  /work
src/pages/work/[slug].md    →  /work/project-name
src/pages/systems/index.md  →  /systems
src/pages/systems/[slug].md →  /systems/entry-name
src/pages/notes/index.md    →  /notes
src/pages/notes/[slug].md   →  /notes/article-name
src/pages/about.md          →  /about
src/pages/contact.md        →  /contact
```

**Trailing Slashes:** Disabled. URLs are clean paths without trailing slashes. The build tool and hosting are configured to redirect trailing-slash requests to the canonical non-slash version (301).

**404 Page:** A single, well-designed 404 page exists at the root. It orients the visitor and provides navigation back to the six destinations. No automatic redirect to the homepage.

**No Query Parameters for Content:** Content is never accessed via `?id=123`. Every piece of content has a dedicated, permanent URL.

## Consequences

### Positive
- **Guessability:** A visitor who knows the structure can construct any URL. `/work` contains projects. `/systems` contains architecture entries. No surprises.
- **Permanence:** File-based routing means the URL is tied to the file path. If the file exists at build time, the URL exists. If the file is moved, the URL changes — which is visible and intentional.
- **No Server Configuration:** No `.htaccess`, no `nginx.conf`, no edge function rewrites. The routing is deterministic and self-documenting.
- **Build-Time Validation:** Broken internal links are detectable at build time. If a case study references `/work/project-name` and that file does not exist, the build fails.

### Negative
- **URL changes require file moves:** Renaming a project means moving a file and updating all internal links. This is intentional — URL changes are consequential and should be rare.
- **No dynamic routes:** Cannot create `/work?category=ai` filters. Filtering, if needed, is implemented client-side on the index page or not at all.

### Alternatives Considered
- **Hash-based routing (`/#/work/project-name`):** Rejected. Hash URLs are not indexable, not shareable, and violate the URL philosophy.
- **Server-side routing with path rewrites:** Rejected. Introduces server dependency. File-system routing achieves the same result at build time.
- **Client-side routing (SPA history API):** Rejected. Requires JavaScript to function. The platform works without JavaScript.
