# ADR-0005: Image Strategy

## Status
Accepted

## Context
The Product DNA defines a strict Imagery System (Section 16):
- Photography: None, or used extremely sparingly. Documentary, not promotional.
- Screenshots presented cleanly, not in device frames.
- Diagrams encouraged: system architecture, data flow, decision trees.
- Abstract marks permitted only if geometric, monochrome, and functionally necessary.
- No stock photography. No illustrative representations of "cloud," "AI," or "automation."

The platform must be lightweight. Images are the primary source of page bloat. This ADR defines how images are authored, stored, optimized, and served.

## Decision
Use **SVG for all diagrams and icons. Raster images (WebP) only for screenshots that cannot be reasonably represented otherwise.**

**Diagrams:**
- Authored as SVG in the source repository.
- Inline SVG (`<svg>` in HTML) for diagrams that need CSS styling (dark mode support, hover states) or accessibility attributes.
- External SVG files only for diagrams that are reused across multiple pages.
- No third-party diagram embedding (Miro, Lucidchart, Draw.io iframes). Diagrams are native content.

**Screenshots:**
- Captured at 2x resolution, saved as WebP.
- Max width: 1200px (sufficient for retina display at 600 CSS pixels).
- No device frames, no browser chrome, no drop shadows added in post-processing. Screenshots are presented as flat images on a neutral background.
- Alt text is mandatory and describes the information, not the appearance (e.g., "API response time distribution showing p50 at 45ms and p99 at 180ms" not "Screenshot of dashboard").

**Icons:**
- No icon font (Font Awesome, Material Icons). Icon fonts fail to load unpredictably and are not accessible.
- No icon library dependency. Icons are inline SVG (copied once, used where needed) or simple Unicode characters where semantically appropriate.
- Maximum icon count: the six navigation items may have no icons. Icons are used only for functional indicators (external link arrow, download) if absolutely necessary.

**No Video:**
- No embedded video content. No screen recordings. Motion is restricted to CSS transitions per ADR-0004.

## Consequences

### Positive
- **Performance:** SVG is resolution-independent and typically smaller than raster equivalents for diagrams. WebP screenshots are 30–50% smaller than PNG.
- **Maintainability:** SVG diagrams can be edited in code. Architecture changes require a text edit, not a return to a design tool.
- **Accessibility:** Inline SVG supports `aria-label`, `role`, and CSS `currentColor` for high-contrast states.
- **No External Dependencies:** No third-party image hosting, no CDN for icons, no license concerns.

### Negative
- **Screenshot quality:** WebP has broader support but is not universally supported in all contexts (e.g., some image viewers). The build tool generates a fallback JPEG for critical screenshots if needed.
- **SVG complexity:** Highly detailed diagrams may become unwieldy as inline SVG. If a diagram exceeds ~50KB as SVG, it is split into multiple simpler diagrams or converted to an optimized WebP with a text alternative.

### Alternatives Considered
- **PNG for screenshots:** Rejected. WebP provides equivalent visual quality at significantly smaller file sizes.
- **Lazy loading all images:** Accepted as browser-native behavior (`loading="lazy"`), but the platform's low image count makes this a minor optimization.
- **CDN-hosted images (Cloudinary, Imgix):** Rejected. Adds a third-party dependency and ongoing cost for a platform with minimal image content.
- **Animated GIFs / WebP:** Rejected per ADR-0004. No animated content.
