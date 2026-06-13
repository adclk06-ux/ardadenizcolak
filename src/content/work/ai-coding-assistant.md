---
title: "AI Coding Assistant"
summary: "Internal developer tool that uses language models to explain, refactor, and generate code within existing codebases."
year: 2025
status: "Shipped"
role: "Lead Engineer"
duration: "3 months"
technologies:
  - "TypeScript"
  - "OpenAI"
  - "VS Code Extension API"
  - "Tree-sitter"
featured: true
order: 3
state: "published"
updatedDate: 2025-12-20
---

## Overview

A VS Code extension that gives engineers context-aware code assistance without leaving their editor. Unlike generic AI tools, it understands the project's architecture, conventions, and dependencies.

## Context

The engineering team was spending 15-20% of their time reading unfamiliar code. New features required understanding legacy modules. Onboarding engineers needed 3-4 weeks to become productive. Existing AI tools lacked project-specific context.

## Problem

Generic AI coding assistants treat every codebase as a blank slate. They suggest patterns that contradict existing conventions. They generate code that ignores established abstractions. They cannot answer "how do we do X in this project?"

## Constraints

- Must not send proprietary code to external APIs without explicit opt-in
- Must work offline for sensitive codebases
- Must integrate with existing code review workflows
- Must respect project-specific linting and formatting rules
- Response time under 2 seconds for inline suggestions

## Alternatives Considered

- **GitHub Copilot:** Excellent for general coding, but lacks project-specific context. Cannot answer architectural questions.
- **Sourcegraph Cody:** Good codebase search, but requires indexing infrastructure that we did not want to maintain.
- **Building from scratch:** Full control but 6-month timeline vs. 3-month target.

**Decision:** Build a VS Code extension using the OpenAI API with a custom context layer that reads the project's AST and documentation.

## Architecture

- **Extension Host:** VS Code extension with TypeScript
- **Context Builder:** Tree-sitter parser extracts function signatures, imports, and type definitions
- **Prompt Engine:** Assembles context-rich prompts with project conventions
- **LLM Layer:** OpenAI API with function calling for structured responses
- **Cache:** Local SQLite cache for repeated queries
- **Privacy Gate:** Explicit user confirmation before sending code snippets

## Implementation

The extension adds three commands:

1. **Explain:** Select code → receive architectural explanation with references to related files
2. **Refactor:** Select code → receive refactored version following project conventions
3. **Generate:** Describe intent → receive implementation using existing utilities and patterns

Each command builds a context window containing:
- Selected code
- Import graph (3 levels deep)
- Relevant type definitions
- Project conventions (from `.cursorrules` equivalent)

## Trade-offs

- **Context depth vs. token cost:** Including 3 levels of imports increases token usage by 60% but improves suggestion quality significantly
- **Privacy vs. utility:** Opt-in requirement reduces adoption by 30% but maintains security compliance
- **Specificity vs. generality:** Project-specific training makes the tool less useful for greenfield projects

## Performance

- Inline suggestion latency: 1.2s average (target: <2s)
- Cache hit rate: 45% for repeated queries
- Token usage per request: ~2,500 tokens (with context window)
- Extension bundle size: 1.8MB

## Lessons Learned

Context quality matters more than model capability. A GPT-4 with poor context underperforms a GPT-3.5 with excellent context. The most impactful feature was not generation but explanation — helping engineers understand why existing code works the way it does.

Privacy by default is a feature, not a limitation. Engineers trust the tool more when they control what leaves their machine.

## Future Improvements

- Support for remote repository context (GitHub integration)
- Multi-file refactor capability
- Custom model fine-tuning on project-specific patterns
- Team-wide convention sharing across repositories
