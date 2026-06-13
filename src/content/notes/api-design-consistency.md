---
title: "API Design Consistency Through Explicit Contracts"
excerpt: "How enforcing API contracts at the type level reduced integration bugs and improved frontend-backend collaboration."
category: "Architecture"
publishedAt: 2026-01-20
tags:
  - "api"
  - "typescript"
  - "contracts"
  - "integration"
readingTime: "6 min"
state: "published"
---

## Question

How do you prevent API contract drift between frontend and backend teams?

## Context

A product team with 6 engineers experienced frequent integration bugs. Frontend expected fields that backend renamed. Backend added fields that frontend never used. API documentation was always slightly out of date.

## Alternatives

- **Manual documentation:** Swagger/OpenAPI maintained by hand
- **Code generation:** OpenAPI spec generates client libraries
- **Shared types:** TypeScript types shared between frontend and backend
- **Runtime validation:** Zod schemas on both sides

## Decision

Shared TypeScript types with Zod runtime validation on the backend.

## Reasoning

Manual documentation fails because humans forget to update it. Code generation works but creates coupling between teams' release cycles. Shared types provide compile-time safety. Runtime validation catches the cases types cannot.

The contract lives in a shared package imported by both frontend and backend. Backend Zod schemas validate at runtime what TypeScript checks at compile time. If the contract changes, both sides break at build time, not at runtime.

## Consequences

### Positive

- Integration bugs reduced from 8/month to 1/month
- Onboarding time reduced (new engineers read the shared types, not documentation)
- API changes are explicit (type changes require both teams' attention)

### Negative

- Monorepo required (or package publication overhead)
- Initial setup took 2 days of infrastructure work
- Some backend engineers resisted the constraint

## Implementation

```typescript
// shared/api.ts
export const UserResponse = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  createdAt: z.string().datetime(),
});

export type UserResponse = z.infer<typeof UserResponse>;
```

Backend validates incoming requests with `UserResponse.parse()`. Frontend uses `UserResponse` as the type for fetch responses. Drift is impossible without a build failure.

## Reflection

The best API documentation is the code that both sides compile against. Everything else is commentary.
