---
title: "Why Gradients Were Removed"
excerpt: "A decision log on removing all gradients from the design system and accepting the visual consequence of that choice."
category: "Decision Log"
publishedAt: 2026-06-01
tags:
  - "design-system"
  - "product-dna"
  - "gradients"
readingTime: "4 min"
state: "published"
---

## Decision

Remove all gradients from the platform.

## Context

The initial design exploration included subtle background gradients to add visual depth. They were technically well-executed: low contrast, smooth transitions, accessible color combinations.

## Problem

Gradients, even subtle ones, introduce several liabilities:

1. **Visual noise:** The eye processes gradients as additional information. On a platform optimized for reading, any non-informational visual element is distraction.
2. **Aging:** Gradients are a design trend. They anchor the platform to a specific period. The goal is timelessness.
3. **Performance:** CSS gradients require rendering computation. On low-end devices, this is measurable.
4. **Inconsistency:** Gradients create implicit depth hierarchy. Elements "on top" of gradients behave differently than elements on flat surfaces.

## Alternatives Considered

- **Subtle gradients only:** Limit to 5% opacity transitions. Rejected: still introduces aging risk and visual noise.
- **Gradient borders only:** Use gradients for dividers. Rejected: borders should signal separation, not decoration.
- **User preference:** Allow users to toggle gradients. Rejected: increases complexity for a feature with zero functional value.

## Consequences

### Positive

- Visual longevity increased. Flat design ages better than gradient design.
- Performance improved marginally (one less CSS property per affected element).
- Cognitive load reduced. No visual elements compete with content.

### Negative

- First impression may feel "plain" to visitors expecting visual stimulation.
- Some pages feel visually identical to each other (addressed through typography hierarchy, not decoration).

## Reflection

The decision to remove gradients was easy. The discipline was accepting the consequence: the platform must communicate quality through typography, spacing, and content rather than decoration.

This is a permanent decision. Gradients will not return.
