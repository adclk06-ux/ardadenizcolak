---
title: "Why Motion Only Communicates State"
excerpt: "A decision log establishing the animation policy: motion exists only to communicate state changes, never for entertainment or decoration."
category: "Decision Log"
publishedAt: 2026-06-05
tags:
  - "animation"
  - "accessibility"
  - "motion"
  - "product-dna"
readingTime: "5 min"
state: "published"
---

## Decision

All animation on the platform exists solely to communicate state changes. No ambient motion. No decorative transitions. No scroll-triggered effects.

## Context

Modern web design treats motion as decoration. Loading animations entertain during waits. Scroll-triggered reveals create "engagement." Hover effects add "delight."

## Problem

Motion has costs:

1. **Accessibility:** `prefers-reduced-motion` users receive degraded or broken experiences when motion is required for functionality.
2. **Performance:** Animations consume GPU and battery. On low-end devices, this is noticeable.
3. **Cognitive load:** Motion draws attention. On a reading platform, attention should be on content, not interface.
4. **Professional tone:** Entertainment signals a different relationship than utility. This platform signals competence, not performance.

## Policy

### Allowed Motion

- Color transitions on hover/focus (150ms, ease-out)
- Opacity transitions on state changes (150ms, ease-out)
- Mobile nav menu toggle (no slide, instant visibility change)

### Forbidden Motion

- Loading spinners (use text state instead)
- Scroll-triggered reveals (all content visible immediately)
- Hover animations beyond opacity/color change
- Page transitions
- Ambient background effects
- Parallax scrolling

## Implementation

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

All transitions use the same duration and easing. No variation. Variation in motion signals variation in importance. Motion here has no importance.

## Consequences

### Positive

- Platform feels calmer and more focused
- Accessibility compliance without additional effort
- Reduced CSS complexity (one transition pattern)
- Longer battery life on mobile devices

### Negative

- Some visitors may perceive the platform as "static" or "unmodern"
- No loading feedback during slow network conditions (addressed by server-side rendering and fast static pages)

## Reflection

Motion is information. If the motion does not communicate something the user needs to know, it is noise. The discipline is asking "what state changed?" before adding any transition.

This policy is permanent. Motion will not expand beyond state communication.
