---
title: "Folder Structures"
domain: "Maintainability"
category: "Organization"
complexity: "low"
dependencies:
  - "Domain Knowledge"
references:
  - "https://martinfowler.com/articles/modular-routing.html"
state: "published"
updatedAt: 2026-06-10
---

## Overview

A folder structure is a communication layer. It tells the next engineer what this system believes is important. Poor structure forces new team members to read every file before understanding the domain model.

## Principles

### Organize by Domain, Not Type

```
// Avoid: what kind of files?
src/components/
src/hooks/
src/utils/

// Prefer: what does the system do?
src/auth/
src/billing/
src/shared/
```

### Cohesion Over Reuse

Code that changes together lives together. A component used in three domains should exist in `shared/`, but most components belong in a specific domain.

### Flat Over Deep

```
// Avoid: burying files
departments/engineering/frontend/components/base/ui/button/

// Prefer: discoverability
departments/engineering/frontend/ui/button/
```

Depth beyond 3 levels indicates organizational confusion.

## This Project's Structure

```
src/
  components/
    layout/      # structural components (header, footer, main)
    navigation/  # nav components
    typography/  # text rendering components
  content/       # Astro content collections
    work/
    notes/
    systems/
  lib/           # pure logic (no UI)
    siteConfig.ts
    content.ts
    sortContent.ts
  pages/         # route entry points
    work/
    notes/
    systems/
    about.astro
    contact.astro
    index.astro
  styles/         # global stylesheets
  types/          # TypeScript definitions
```

## Rationale

- **`components/`** is split by function, not by page, because layout and navigation are shared concerns
- **`lib/`** contains logic independent of presentation
- **`pages/`** mirrors the URL structure exactly
- **`content/`** separates authored content from application code

## Trade-offs

- **Astro-specific:** Content collections require the `src/content/` directory
- **No `features/` or `modules/`:** This is a content site, not an application
- **Flat `types/`:** Type definitions are not domain-specific in this codebase

## Maintenance

- Review structure quarterly as the codebase grows
- Move files when they serve multiple domains
- Document exceptions in ADRs

## Lessons

Folder structure is not a solved problem. It is a solved-for-now problem. The discipline is accepting that reorganization is maintenance, not failure. A codebase that never restructures has stopped growing or has accepted permanent organizational debt.
