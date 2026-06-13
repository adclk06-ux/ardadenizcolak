---
title: "Folder Structure as Documentation"
excerpt: "Why organizing files by domain rather than type improves codebase discoverability and reduces onboarding friction."
category: "Architecture"
publishedAt: 2026-03-15
tags:
  - "organization"
  - "maintainability"
  - "project-structure"
readingTime: "5 min"
state: "published"
---

## Observation

Most codebases accumulate organizational debt faster than technical debt. Files are placed where they fit at the moment of creation, not where they belong in the system's conceptual model. Six months later, finding anything requires institutional knowledge.

## The Principle

Folder structure should communicate the system's architecture. A new engineer should understand the domain model by reading the directory tree.

## An Example

### Before (Organizational Debt)

```
src/
  components/
    Button.tsx
    Card.tsx
    Header.tsx
    Footer.tsx
  utils/
    helpers.ts
    format.ts
    api.ts
  pages/
    Home.tsx
    About.tsx
    Contact.tsx
```

This structure answers: "What types of files exist?" It does not answer: "What does this system do?"

### After (Domain-Driven)

```
src/
  auth/
    components/
    hooks/
    types.ts
  billing/
    components/
    hooks/
    types.ts
  shared/
    ui/
    lib/
    types.ts
```

This structure answers: "What domains does this system manage?" A new engineer knows immediately that authentication and billing are first-class concerns.

## Trade-offs

- **Refactoring cost:** Moving files breaks imports and PR history
- **Boundary ambiguity:** Some code serves multiple domains
- **Tooling:** Some IDEs prefer flat structures for search performance

## When to Apply

This approach is most valuable when:

- Multiple engineers collaborate on the same codebase
- The system has clear domain boundaries
- Onboarding new engineers is a recurring cost

For solo projects and prototypes, the overhead may not justify the benefit.

## Reflection

Code organization is a communication tool. The compiler does not care where files live. Humans do. The discipline is optimizing for the reader who has never seen this codebase before.
