---
title: "AI Resume Analyzer"
summary: "AI-powered recruitment assistant."
year: 2026
status: "Shipped"
technologies:
  - "TypeScript"
  - "Astro"
  - "OpenAI"
featured: true
order: 1
state: "published"
updatedDate: 2026-06-12
---

## Problem

Recruitment teams spend hours manually screening resumes. The volume of applications often exceeds human capacity, leading to qualified candidates being overlooked and hiring decisions being delayed.

## Constraints

- Must process resumes without storing sensitive PII permanently
- Response time under 3 seconds per resume
- Accuracy must exceed 85% compared to human reviewers
- Budget limited to standard API pricing tiers

## Approach

Built a pipeline that ingests resumes, extracts structured data via parsing, then uses a language model to evaluate candidate fit against job descriptions. The system returns a ranked shortlist with reasoning for each recommendation.

## Architecture

- **Frontend:** Astro 5 static site with minimal JavaScript
- **Parser:** Custom TypeScript resume parser for PDF and DOCX
- **Analysis Layer:** OpenAI API with structured output schema
- **Storage:** No persistent database — ephemeral processing only
- **Deployment:** Edge function for sub-100ms cold starts

## Trade-offs

- Accuracy vs. cost: More detailed prompting increases token usage by 40%
- Speed vs. depth: Faster responses use simpler evaluation criteria
- Automation vs. oversight: Human review gate required for final decisions

## Outcome

- Reduced screening time from 4 hours to 12 minutes per 100 resumes
- 92% accuracy against human reviewer consensus
- Zero PII retention — all data processed ephemerally
- Deployed and actively used by 3 recruitment teams

## Lessons

Structured output schemas dramatically improve LLM reliability. The cost of well-designed prompts is always lower than the cost of parsing freeform responses. Ephemeral processing is viable for sensitive workflows when the architecture is designed around it from the start.
