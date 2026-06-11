# ADR-0004: Animation Policy

## Status
Accepted

## Context
The Product DNA defines a strict Motion Philosophy (Section 8):
- Motion is information, not entertainment.
- No ambient motion. Nothing moves without being triggered.
- Duration: 300–500ms with physical easing curves.
- Directional consistency (enter and exit from the same spatial direction).
- No scroll hijacking, no snap-to-section, no parallax for visual interest.
- All motion respects `prefers-reduced-motion`.
- The platform must be complete at rest — no motion dependency for comprehension.

This ADR defines the technical implementation of these constraints.

## Decision
Use **CSS transitions and CSS animations** exclusively. No JavaScript animation libraries (GSAP, Framer Motion, Lottie, etc.). No WebGL. No canvas-based animation.

**Allowed Motion:**
| Trigger | Motion Type | Duration | Easing |
|---|---|---|---|
| Page load (content entrance) | Opacity + subtle translateY | 400ms | `cubic-bezier(0.25, 0.1, 0.25, 1.0)` |
| Hover (interactive elements) | Background-color, border-color, or underline | 200ms | ease-out |
| Focus (keyboard navigation) | Outline or border shift | 150ms | ease |
| State change (e.g., lifecycle label toggle) | Opacity | 300ms | ease-in-out |

**Forbidden Motion:**
- Custom cursors
- Scroll-triggered animations on every element
- Page transitions that delay content access
- Loading spinners that loop indefinitely (use skeleton states or inline text: "Loading...")
- Particle systems, wave effects, or ambient background motion
- Scroll-jacking or scroll-snapping

**Reduced Motion Implementation:**
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

**JavaScript Animation Policy:**
JavaScript may trigger CSS classes that start transitions, but it does not compute animation frames. No `requestAnimationFrame` loops for UI effects.

## Consequences

### Positive
- **Performance:** CSS animations run on the compositor thread. They do not block JavaScript execution or layout.
- **Accessibility:** `prefers-reduced-motion` is a single media query. No library abstraction to trust.
- **Maintainability:** No animation library to update or migrate. The motion vocabulary is small and documented.
- **Predictability:** Every animation is inspectable in DevTools. There is no hidden timeline or easing curve in a library's source code.

### Negative
- **Limited expressiveness:** Complex orchestrated sequences (staggered entrances, choreographed page transitions) are impractical in pure CSS. This is an acceptable cost — the Product DNA forbids such theatrical motion.
- **No spring physics:** CSS easing is mathematical, not physical. The platform uses standard easing curves that feel natural without simulating physics.

### Alternatives Considered
- **GSAP:** Rejected. The most capable animation library, but its capabilities far exceed the platform's needs. Including it would be like installing a CNC machine to hammer a nail.
- **Framer Motion:** Rejected. React-specific, adds runtime cost, and encourages declarative animation patterns that hide the actual motion from inspection.
- **View Transitions API:** Monitored. A promising native standard for page transitions. May be adopted when browser support is universal and the API is stable. Until then, no page transitions — content loads instantly as static HTML.
