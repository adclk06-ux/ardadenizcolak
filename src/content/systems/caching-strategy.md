---
title: "Caching Strategy"
domain: "Performance"
category: "Infrastructure"
complexity: "high"
dependencies:
  - "Redis"
  - "CDN"
  - "ETags"
references:
  - "https://datatracker.ietf.org/doc/html/rfc7234"
state: "published"
updatedAt: 2026-05-20
---

## Overview

Caching is not optimization. It is a statement about data lifetime and consistency requirements. Every cache represents a bet that the data will not change before the cache expires. The discipline is making that bet explicit.

## Strategy

### Browser Cache (Static Assets)

- Immutable assets: cache for 1 year with hash in filename
- HTML: no cache or short cache (revalidated with ETag)
- API responses: Cache-Control with explicit max-age

### CDN Cache (Edge)

- Static assets: same as browser, CDN caches at edge
- HTML pages: cache for 60 seconds (stale-while-revalidate)
- API responses: vary by authentication status

### Application Cache (Redis)

- Session data: TTL matches session lifetime
- Computed aggregations: TTL based on data freshness requirements
- Rate limiting: short TTL (1-minute windows)

## Invalidation

Three primary strategies:

1. **Time-based:** Simple, predictable, but may serve stale data
2. **Event-based:** Precise, but requires event infrastructure
3. **Version-based:** Immutable data with versioned keys

This project uses time-based for most data and event-based for user-generated content.

## Trade-offs

- **Hit rate vs. freshness:** Longer TTLs improve performance but increase stale data risk
- **Memory vs. latency:** More cache layers reduce latency but increase complexity
- **Consistency vs. availability:** Strict consistency requires cache invalidation on every write

## Implementation

```
Request → Edge CDN → (miss) → Origin → Redis → Database
                                    (hit)
```

Cache keys include version identifier to enable instant invalidation on deployment.

## Monitoring

- Cache hit rate by layer (target: CDN > 90%, Redis > 80%)
- Cache stampede detection (sudden spike in origin requests)
- Memory usage trends (Redis eviction events)

## Lessons

The hardest caching problem is not choosing a strategy. It is knowing when the cache is wrong. Every cached response should carry metadata about its age and source. A cache without observability is a cache with hidden bugs.
