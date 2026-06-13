---
title: "Authentication Architecture"
domain: "Security"
category: "Identity"
complexity: "medium"
dependencies:
  - "OAuth 2.0"
  - "JWT"
  - "Session Management"
references:
  - "https://datatracker.ietf.org/doc/html/rfc6749"
  - "https://datatracker.ietf.org/doc/html/rfc7519"
state: "published"
updatedAt: 2026-06-01
---

## Overview

Authentication answers: "Who is this user?" It does not answer: "What can this user do?" That is authorization. Keeping these distinct prevents security debt.

## Constraints

- Stateless where possible (simplifies horizontal scaling)
- Token-based for API access, session-based for browser access
- Refresh token rotation to prevent long-lived credential theft
- Explicit logout invalidation (do not rely solely on token expiry)

## Architecture

### Session-Based (Browser)

```
User → Login → Server validates → Session ID cookie
User → Request → Server validates session → Response
User → Logout → Server invalidates session → Cookie cleared
```

Session store: Redis with TTL matching cookie expiry.

### Token-Based (API)

```
Client → Login → Access token + Refresh token
Client → Request → Access token in Authorization header
Client → Token expires → Refresh token → New access token
```

Access token lifetime: 15 minutes.
Refresh token lifetime: 7 days with rotation on use.

## Trade-offs

- **Session vs. token:** Sessions are simpler but require shared state. Tokens are stateless but harder to revoke.
- **JWT vs. opaque tokens:** JWTs are self-contained but large and non-revocable. Opaque tokens require lookup but enable instant revocation.
- **Stateless vs. stateful:** Stateless scales horizontally but cannot track active sessions.

## Implementation

This project uses a hybrid approach:

- **Browser:** Session cookies with Redis backing
- **API:** Short-lived JWTs with refresh token rotation
- **Logout:** Session destruction + JWT blacklist (Redis) for 15-minute window

## Maintenance

- Monitor Redis memory for session store growth
- Rotate signing keys quarterly
- Audit active sessions monthly
- Log authentication failures for anomaly detection

## Lessons

Authentication is one of the few areas where over-engineering is preferable to under-engineering. The cost of a breach always exceeds the cost of robust authentication. The discipline is choosing appropriate complexity for the threat model — not implementing the most secure system possible, but implementing the least insecure system acceptable.
