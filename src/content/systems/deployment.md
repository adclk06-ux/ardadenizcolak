---
title: "Deployment"
domain: "Infrastructure"
category: "Operations"
complexity: "medium"
dependencies:
  - "CI/CD Pipeline"
  - "Container Registry"
  - "Infrastructure as Code"
references:
  - "https://martinfowler.com/articles/cd4ml.html"
state: "published"
updatedAt: 2026-05-15
---

## Overview

Deployment is the boundary between development and operation. A good deployment system makes this boundary transparent. A bad one creates fear, delay, and error.

## Principles

### Reproducibility

Every deployment should be reproducible from source. No manual steps. No "works on my machine." The deployment artifact must be identical regardless of who triggers it.

### Observability

Deployment is not complete when the command finishes. It is complete when the system is healthy. Health checks must verify functionality, not just process existence.

### Rollback Safety

Every deployment must be reversible within 5 minutes. This constraint shapes every deployment design decision.

## Strategies

### Blue/Green

Two identical environments. Traffic switches from blue to green. Zero downtime, instant rollback. Cost: double compute during deployment.

### Rolling

Replace instances gradually. No duplicate infrastructure. Risk: mixed-state during deployment. Rollback is slower.

### Canary

Deploy to 5% of traffic first. Monitor metrics. Gradually increase. Best for high-traffic services. Requires metric-driven decision making.

## This Project's Approach

Static sites use rolling deployment (no state, instant propagation). API services use blue/green (stateful connections require clean cutover).

## Trade-offs

- **Speed vs. safety:** Faster deployments reduce lead time but increase blast radius
- **Cost vs. resilience:** Blue/green costs more but eliminates deployment downtime
- **Automation vs. control:** Fully automated deployments require high confidence in test coverage

## Implementation Checklist

- [ ] Build artifact is immutable and tagged
- [ ] Database migrations are backward-compatible
- [ ] Health checks verify application functionality
- [ ] Rollback is automated and tested
- [ ] Deployment events are logged and alerted
- [ ] Secrets are injected at runtime, not baked into images

## Lessons

The most common deployment failure is not technical. It is procedural: deploying on Friday afternoon, skipping health checks, or deploying without rollback capability.

Technical debt in deployment is more expensive than technical debt in code. Bad code can be refactored. Bad deployment can take the system offline.

## Maintenance

- Review deployment frequency monthly (target: daily minimum)
- Audit rollback procedures quarterly (test in staging)
- Review failed deployments within 24 hours
- Update runbooks when procedures change
