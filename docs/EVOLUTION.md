# Evolution

**Role:** Platform evolution policy  
**Source of Truth:** Product DNA, Project Principles  
**Horizon:** Ten-year validity  

This document governs how the platform changes over time. It prevents drift, feature creep, and architectural erosion.

---

## Core Principle

The platform evolves through refinement, not expansion.

Every addition must justify itself. Every removal is assumed beneficial until proven otherwise.

The objective is coherence. Not feature count.

---

## What Evolves

### Content

Content grows naturally. New case studies, notes, and systems are added as they are authored. Content does not require architectural changes — it uses existing schemas and patterns.

- New work entries: add markdown files to `src/content/work/`
- New notes: add markdown files to `src/content/notes/`
- New systems: add markdown files to `src/content/systems/`

Content can also be deprecated or archived. Deprecated content remains at its URL with a label. No redirects. No deletion.

### Refinement

Existing pages are refined continuously:

- Copy is tightened for clarity
- Spacing is adjusted for rhythm
- Typography is tuned for readability
- Accessibility is improved
- Performance is optimized

Refinement is welcome. Refinement is expected. Refinement never changes structure.

### Patterns

New patterns emerge from repetition. A pattern is justified only after three concrete uses:

1. First use: inline implementation
2. Second use: copy and adjust
3. Third use: extract to a shared location

No patterns are invented speculatively. Patterns that serve only one or two uses remain inline.

---

## What Does Not Evolve

### Architecture

The six-destination structure is fixed. New top-level pages are not added.

If a new topic is needed, it becomes content within an existing destination:

- New project topic → `src/content/work/`
- New technical topic → `src/content/notes/`
- New system topic → `src/content/systems/`

### Navigation

Global navigation contains exactly five items plus the logo. This limit is structural, not visual.

If navigation feels insufficient, the solution is improved findability within destinations — not expansion of the global nav.

### Design Tokens

Tokens are immutable. New tokens are added only when a genuinely new need emerges. Tokens are never removed once in use (to preserve URL stability and design consistency).

If a token feels wrong, the solution is re-evaluation of the need, not replacement of the token.

### URLs

URLs are permanent. Content moves through lifecycle states. The URL never changes.

- Content is updated: URL remains, `updatedAt` changes
- Content is deprecated: URL remains, deprecation label is added
- Content is archived: URL remains, archive label is added
- Content is wrong: URL remains, correction is appended

---

## Decision Framework

For any proposed change, answer these questions in order:

1. **Does this reduce cognitive load?** If no, reject.
2. **Does this increase trust?** If no, reject.
3. **Would this still make sense in five years?** If no, reject.
4. **Would removing it make the product better?** If yes, reject the addition and consider removal of existing equivalents.
5. **Has this pattern emerged from three concrete uses?** If no and it is a new abstraction, reject.
6. **Does this contradict any immutable document?** If yes, reject.

All six must be satisfied. There are no exceptions.

---

## Content Lifecycle

Every piece of content exists in one of six states:

| State | Visibility | Navigation | Label |
|---|---|---|---|
| **Published** | Full | Normal | None |
| **Updated** | Full | Normal | "Updated" |
| **Archived** | Full | Contextual | "Archived" |
| **Referenced** | Full | Contextual | "Referenced" |
| **Deprecated** | Full | Contextual | "Deprecated" |
| **Project** | None | None | None |

Content moves forward through states (Published → Updated → Archived → Deprecated). It never moves backward.

---

## Maintenance Schedule

### Continuous

- Content accuracy (update outdated information)
- Broken links (internal and external)
- Accessibility issues (contrast, focus, keyboard)

### Quarterly

- Dependency updates (security patches only)
- Performance audit (Lighthouse, build times)
- Token usage audit (no hardcoded values introduced)

### Annually

- Architecture review (verify six-destination structure)
- Content audit (deprecate outdated material)
- Design consistency review (verify Product DNA compliance)

---

## Anti-Patterns

These are signals that the platform is drifting from its principles:

- Adding a new top-level destination
- Expanding navigation beyond five items
- Adding decorative elements (shadows, gradients, animations)
- Writing content that could appear on any portfolio
- Optimizing for metrics rather than clarity
- Adding features because competitors have them
- Generalizing a pattern before three concrete uses

When an anti-pattern is detected, the response is removal, not accommodation.

---

## Success Metric

The platform succeeds when a senior engineer, after thirty seconds, concludes:

"This person has exceptional judgment."

Not because of effects. Not because of aesthetics. Because every visible and invisible decision feels intentional.

That is the standard. It does not change.

---

*Document Status: Active Policy*  
*Validates Against: Product DNA, Information Architecture, Project Principles*  
*Revision Principle: This document changes only when the fundamental evolution philosophy changes. It is not a living document in the traditional sense — it is a contract.*
