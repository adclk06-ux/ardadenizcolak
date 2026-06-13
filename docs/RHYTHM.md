# Visual Rhythm

**Role:** Design Systems Contract  
**Source of Truth:** Product DNA, Information Architecture  
**Horizon:** Ten-year validity  

This document defines the spacing relationships between every structural element on the platform. No component should guess at spacing. Every value derives from the token system in `src/styles/tokens.css`.

---

## Spacing Scale

| Token | Value | Usage |
|---|---|---|
| `--space-1` | 4px | Inline padding, tight internal gaps |
| `--space-2` | 8px | List item gaps, tech tag gaps |
| `--space-3` | 16px | Paragraph spacing, heading-to-text, mobile padding |
| `--space-4` | 24px | Section internal padding, card gaps |
| `--space-5` | 32px | Container padding (desktop), section padding |
| `--space-6` | 48px | Hero internal gap, major section breaks |
| `--space-7` | 64px | Header bottom margin, page top padding |
| `--space-8` | 96px | Section-to-section rhythm |
| `--space-9` | 128px | Manifesto breathing room, major section breaks |

---

## Page-Level Rhythm

### Homepage

```
Hero → (none, page ends)
```

The homepage contains a single hero section. It fits the viewport without scroll. No section follows it.

| Relationship | Token |
|---|---|
| Hero internal gap | `--space-6` |
| Hero padding-block | `--space-7` |
| Hero padding-inline | `--space-5` |

### Index Pages (Work, Notes, Systems)

```
Page Header → Content → Page Footer
```

| Relationship | Token |
|---|---|
| Header → Content | `--space-7` (padding-top on content) |
| Content → Footer | `--space-5` (padding-bottom on content) |
| Header bottom margin | `--space-7` |
| Footer top border | 1px solid `--color-border` |

### Detail Pages (Case Studies, Articles, Systems)

```
Page Header → Article Header → Article Body → Page Footer
```

| Relationship | Token |
|---|---|
| Header → Article | `--space-7` (padding-top) |
| Article header → Article body | `--space-7` (margin-bottom + padding-bottom + border-bottom) |
| Article body → Footer | `--space-7` (padding-bottom) |

---

## Element-Level Rhythm

### Headings

| Relationship | Token |
|---|---|
| H1 → subtitle | `--space-3` |
| H2 → paragraph | `--space-3` |
| H2 → H3 | `--space-5` |
| H3 → paragraph | `--space-2` |

### Paragraphs

| Relationship | Token |
|---|---|
| Paragraph → paragraph | `--space-3` |
| Paragraph → list | `--space-3` |
| List → list | `--space-2` |
| List item → list item | `--space-1` |

### Navigation

| Relationship | Token |
|---|---|
| Nav item gap | `--space-3` |
| Nav item padding | `--space-1` 0 |
| Logo → nav items | container `justify-content: space-between` |

### Lists (Work, Systems, Notes)

| Relationship | Token |
|---|---|
| List item gap | `--space-5` |
| Item internal gap | `--space-2` to `--space-3` |
| Item border | 1px solid `--color-border` (top only) |
| Item padding-top | `--space-5` |

### Cards / Entries

| Relationship | Token |
|---|---|
| Meta → title | `--space-2` |
| Title → summary | `--space-2` |
| Summary → tags | `--space-3` |
| Tag gap | `--space-2` |
| Tag padding | `--space-1` `--space-2` |

---

## Content Width

| Content Type | Measure | Token |
|---|---|---|
| Reading content (body text) | 68ch | `--measure-body` |
| Documentation / prose | 72ch | `--measure-prose` |
| Hero headline | Natural wrap (max ~16 words) | `--measure-prose` |
| Code blocks | Full available width | None (no max-width) |
| Page container | 1200px | `--max-width` |

---

## Responsive Behavior

### Mobile (< 640px)

| Change | From → To |
|---|---|
| Container padding | `--space-5` → `--space-3` |
| Hero headline | `--type-display` → `--type-section` |
| Hero position text | `--type-hero` → `--type-section` |
| Section padding | `--space-7` → `--space-5` |
| Notes grid | multi-column → single column |

---

## Motion Rhythm

| Trigger | Property | Duration | Easing |
|---|---|---|---|
| Hover (nav, links) | opacity | `--duration-fast` (150ms) | ease-out |
| Color transition | color | `--duration-fast` (150ms) | ease-out |
| Scroll background | background-color, backdrop-filter | `--duration-fast` (150ms) | ease-out |
| Reduced motion | all | 0.01ms | instant |

---

## Principles

1. **Spacing creates hierarchy.** Larger gaps separate distinct sections. Smaller gaps group related elements.
2. **Consistency creates trust.** The same relationship always uses the same token.
3. **Mobile is not an afterthought.** Every token has a mobile equivalent or reduction.
4. **No magic numbers.** Every spacing value must be a token. If a new spacing need emerges, add it to the token system, don't hardcode.
5. **When in doubt, increase.** More space signals confidence. Less space signals anxiety.

---

*Document Status: Active Contract*  
*Validates Against: Product DNA (all sections), Information Architecture*  
*Revision Principle: Spacing changes are visual changes. They require the same justification as any other design decision.*
