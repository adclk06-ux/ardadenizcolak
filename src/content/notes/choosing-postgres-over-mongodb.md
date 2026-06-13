---
title: "Choosing PostgreSQL Over MongoDB for a Document-Heavy Application"
excerpt: "A decision record on why a document-oriented application moved from MongoDB to PostgreSQL, with performance measurements and maintenance observations."
category: "Engineering"
publishedAt: 2026-02-10
tags:
  - "database"
  - "postgresql"
  - "mongodb"
  - "decision-record"
readingTime: "7 min"
state: "published"
---

## Question

Should a document-heavy application use MongoDB (native document store) or PostgreSQL (relational with JSON support)?

## Context

The application managed product configurations with deeply nested JSON structures. The team assumed MongoDB was the natural choice. After 18 months, maintenance issues emerged.

## Alternatives

- **MongoDB:** Native document storage, flexible schema, horizontal scaling
- **PostgreSQL:** Relational with JSONB, ACID compliance, mature ecosystem
- **Hybrid:** MongoDB for documents, PostgreSQL for relational data

## Decision

Migrate to PostgreSQL with JSONB columns.

## Reasoning

### Why Not MongoDB

- **Query complexity:** Aggregations across nested documents required `$unwind` pipelines that were difficult to debug and optimize
- **Schema drift:** Documents accumulated inconsistent fields over time, making application code defensive and brittle
- **Operational overhead:** Backup, monitoring, and replication required specialized knowledge the team did not have
- **Lock-in:** Migration tooling was limited; changing databases later would be expensive

### Why PostgreSQL

- **JSONB queries:** Native operators (`->`, `->>`, `@>`, `?`) handled document traversal without pipeline complexity
- **Schema constraints:** JSONB schemas with CHECK constraints prevented drift while preserving flexibility
- **Ecosystem:** Standard tooling (pg_dump, pg_stat_statements, pgbouncer) the team already understood
- **Migration path:** JSONB documents could evolve into normalized tables incrementally

## Consequences

### Positive

- Query performance improved 40% for document lookups (JSONB indexes vs. compound MongoDB indexes)
- Operational cost reduced (one database instead of two)
- Team confidence increased (familiar tooling, better debugging)

### Negative

- Initial migration took 3 weeks of engineering time
- Some document mutations required client-side JSON manipulation before storage
- Horizontal scaling became vertical scaling (acceptable for this workload)

## Reflection

The initial choice of MongoDB was correct for the prototype phase. The mistake was not revisiting that choice when the application matured. The discipline is re-evaluating architectural decisions quarterly, not just at the start.
