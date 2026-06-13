---
title: "Naming Conventions"
domain: "Maintainability"
category: "Organization"
complexity: "low"
dependencies:
  - "Team Agreement"
  - "Code Review"
references:
  - "https://martinfowler.com/bliki/TwoHardThings.html"
state: "published"
updatedAt: 2026-06-08
---

## Overview

Naming is the most frequent decision a programmer makes. Bad names create cognitive load. Good names reduce it. The discipline is treating naming as design, not decoration.

## Principles

### Names Reveal Intent

A name should answer why something exists, not just what it is.

```typescript
// Bad: what is this?
const d = new Date();

// Better: what is this for?
const paymentDueDate = new Date();
```

### Names Are Consistent

The same concept uses the same word everywhere. If a user is a `User` in one file, they are not a `Person`, `Account`, or `Customer` in another.

### Names Are Searchable

Unique names are grep-able. Generic names (`data`, `result`, `value`) make debugging harder because they appear everywhere.

## Conventions

### Functions

- Verbs for actions: `parseResume`, `calculateTotal`, `sendNotification`
- Boolean helpers prefixed with `is`, `has`, `can`: `isValid`, `hasPermission`, `canEdit`
- Event handlers prefixed with `handle`: `handleSubmit`, `handleClick`

### Variables

- Collections are plural: `users`, not `userList`
- Booleans are affirmative: `isActive`, not `isNotActive`
- Constants are screaming snake case only at module level: `MAX_RETRY_COUNT`

### Files

- Components: PascalCase matching export name (`UserCard.tsx`)
- Utilities: camelCase describing function (`formatDate.ts`)
- Pages: kebab-case matching URL (`user-profile.astro`)
- Tests: same name as file under test with `.test` suffix (`formatDate.test.ts`)

## Anti-Patterns

- **Abbreviations:** `usr` instead of `user` saves 2 characters, costs readability forever
- **Hungarian notation:** `strName` is noise in a typed language
- **Pattern duplication:** `getUserData`, `fetchUserData`, `loadUserData` — pick one verb

## Enforcement

- Code review is the primary enforcement mechanism
- Linting catches style violations (case, length)
- No automated tool can catch semantic naming errors

## Reflection

There are only two hard problems in computer science: cache invalidation and naming things. The off-by-one error is a symptom of poor naming.

Good naming is not a style preference. It is a communication contract. The compiler does not care. The next engineer does.
