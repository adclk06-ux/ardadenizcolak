# Quality Gate

**Role:** Pre-commit checklist  
**Source of Truth:** Product DNA, Information Architecture, Project Principles  
**Horizon:** Ten-year validity  

Every change must pass this gate before commit.

---

## Checklist

### Implementation Integrity

- [ ] **No hardcoded values.** Every color, font size, spacing, and timing value uses a design token from `src/styles/tokens.css`.
- [ ] **No dead code.** No unused functions, types, variables, or components. No commented-out code.
- [ ] **No unused exports.** Every exported function, type, and component is imported by at least one consumer.
- [ ] **No duplicate abstractions.** No competing solutions for the same problem. Single source of truth per concern.
- [ ] **Uses design tokens only.** No magic numbers. No arbitrary values. No inline styles.

### Structural Integrity

- [ ] **Semantic HTML.** Correct heading hierarchy (one `<h1>` per page). Lists use `<ul>`/`<li>`. Navigations use `<nav>`.
- [ ] **Keyboard accessible.** All interactive elements reachable by Tab. No `tabindex` abuse. Focus states visible.
- [ ] **Reduced motion respected.** Animations respect `prefers-reduced-motion`. No ambient or decorative motion.
- [ ] **Meaning not color-dependent.** Information is never conveyed by color alone. Typography and structure carry hierarchy.

### Product DNA Compliance

- [ ] **No decorative elements.** No gradients, shadows, glassmorphism, neumorphism, illustrations, stock imagery, hero artwork, fake metrics, testimonials, animated backgrounds, marketing counters, or conversion optimization tricks.
- [ ] **Typography creates authority.** Hierarchy emerges from scale, weight, and spacing. No ornamental styling.
- [ ] **Whitespace carries meaning.** Absence is deliberate. Every element earns its place.
- [ ] **Motion communicates state only.** No entertainment. No ambient animation. Transitions are nearly invisible.

### Information Architecture Compliance

- [ ] **Homepage fits without scroll.** No anchor links. No content previews. Identity, positioning, philosophy, navigation.
- [ ] **Six destinations only.** No new top-level pages. No nested hierarchies in global navigation.
- [ ] **Flat URL structure.** No deep nesting. Guessable, memorable, permanent URLs.
- [ ] **Progressive disclosure.** Index pages show summaries. Detail pages show full content. No forced linear progression.

### Content Quality

- [ ] **Never exaggerate.** No superlatives without evidence. No self-promotion. No inflated achievements.
- [ ] **Explain trade-offs.** Every decision shows what was given up, not just what was gained.
- [ ] **Show evidence.** Claims are supported by data, outcomes, or explicit reasoning.
- [ ] **Document reasoning.** Content answers "why," not just "what."
- [ ] **Precision over confidence.** Specific, bounded statements preferred to broad claims.

### Performance

- [ ] **Minimal JavaScript.** Only state-dependent interactivity is hydrated. Everything else is static HTML.
- [ ] **No layout shift.** All containers have explicit dimensions. Images have width and height.
- [ ] **Optimized delivery.** Fonts, images, and assets load efficiently. No unused resources shipped.
- [ ] **Build passes.** `astro check` returns zero errors. `biome check` returns zero violations.

### Maintainability

- [ ] **Five-year clarity.** Every implementation decision would still make sense to the original author in five years.
- [ ] **Component justification.** Every component reduces complexity or encapsulates reusable behavior. Prefer HTML.
- [ ] **No premature abstraction.** Solve the problem at hand. Generalize only after three concrete uses.
- [ ] **Content independent of presentation.** No hardcoded strings in components. All copy lives in content files or siteConfig.

---

## Enforcement

This checklist is not optional. It is a commit prerequisite.

Run before every commit:

```bash
npx astro check && npm run check
```

Both must pass. If they do not pass, the commit does not happen.

---

*Document Status: Active Contract*  
*Validates Against: Product DNA, Information Architecture, Project Principles*  
*Revision Principle: This checklist changes only when the Product DNA changes. It does not accumulate items.*
