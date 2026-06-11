# ADR-0003: Styling System

## Status
Accepted

## Context
The Product DNA defines strict visual constraints:
- 90% monochrome, 10% accent maximum (Section 16)
- No gradients, no duotone effects, no color overlays (Section 16)
- Maximum 4 type sizes, following a mathematical ratio (Section 16)
- Material honesty: no faux textures, no shadows pretending dimensionality (Section 7)
- Typography as the primary structural material (Section 7)
- Interfaces must age gracefully (Platform Axiom 7)

The styling system must enforce these constraints at the code level, not rely on manual discipline. It must also be maintainable after five years without framework churn.

## Decision
Use **a CSS custom property system** built on foundational CSS — no CSS-in-JS library, no utility-first framework, no preprocessor dependency.

**Architecture:**
- **Custom properties (CSS variables)** for the design token layer: colors, type scale, spacing, and breakpoints.
- **CSS Modules** for component-scoped styles, referencing global CSS Variables for all values. No hardcoded colors, sizes, or spacing in component styles.
- **No preprocessor (Sass/Less):** Native CSS now supports variables, nesting, and container queries. Adding a preprocessor is an unnecessary build dependency.
- **No utility-first framework (Tailwind):** Utility frameworks encourage arbitrary value usage and make the style system invisible in the markup. This platform requires an explicit, auditable style system.
- **No CSS-in-JS:** Runtime CSS generation adds JavaScript cost and complicates server-side rendering. Static CSS is precompiled and cacheable.

**Design Token Structure:**
```css
:root {
  --color-primary: #1a1a1a;
  --color-secondary: #fafafa;
  --color-accent: #4a5568;
  --type-display: 2.5rem;
  --type-body: 1rem;
  --type-caption: 0.875rem;
  --type-mono: 0.875rem;
  --space-unit: 1rem;
  --space-xs: calc(var(--space-unit) * 0.25);
  --space-sm: calc(var(--space-unit) * 0.5);
  --space-md: var(--space-unit);
  --space-lg: calc(var(--space-unit) * 2);
  --space-xl: calc(var(--space-unit) * 4);
}
```

**Constraints enforced:**
- Only these 4 type sizes are used. Adding a new size requires modifying `:root` — an intentional bottleneck.
- Accent color usage is limited to states (hover, active, focus) and links. No decorative accent backgrounds or borders.
- Spacing follows the 4-base-unit scale. Arbitrary pixel values are forbidden.

## Consequences

### Positive
- **Longevity:** CSS custom properties are a web standard. They will work in every browser for the foreseeable future. No framework to update, no migration to fear.
- **Auditability:** The entire visual system is readable in one CSS file. There is no hidden configuration in a build pipeline.
- **Performance:** Static CSS is parsed once by the browser and cached. No runtime style computation.
- **Discipline:** The token system forces intentionality. Adding a color requires defining it in `:root` first.

### Negative
- **More verbose than utilities:** Writing `class="project-card"` with a CSS block is longer than `class="p-4 bg-white rounded"`. This verbosity is the cost of an explicit system.
- **No autocomplete for tokens:** Unlike Tailwind's IntelliSense, custom properties require the author to know the token names. This is mitigated by a small, memorable token set.

### Alternatives Considered
- **Tailwind CSS:** Rejected. Excellent for rapid development, but its utility model obscures the design system and encourages one-off values. The Product DNA requires visible restraint, not hidden configuration.
- **Sass/SCSS:** Rejected. CSS nesting is now native. CSS variables replace Sass variables. The preprocessor adds a build dependency with no remaining unique benefits.
- **Styled Components / Emotion:** Rejected. CSS-in-JS couples styling to JavaScript runtime, increases bundle size, and complicates static extraction.
- **CSS Modules:** Considered and acceptable, but plain CSS with consistent naming conventions achieves the same scoping without additional tooling.
