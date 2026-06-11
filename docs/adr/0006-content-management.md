# ADR-0006: Content Management

## Status
Accepted

## Context
The Product DNA defines a strict Content Strategy (Section 12) and Content Lifecycle (Section 13):
- Content is authored in Markdown, version-controlled, and compiled at build time.
- No CMS. No real-time status. No "under construction."
- Every piece of content exists in one of six lifecycle states: Project, Published, Updated, Archived, Referenced, Deprecated.
- The platform does not rewrite history. Edits are additive.
- Date-agnostic strategy: no temporal anchoring on the surface.

This ADR defines the technical implementation of content authoring, versioning, state management, and publishing workflow.

## Decision
Content is **Markdown files in a Git repository**, organized by destination, with YAML front matter for metadata and state.

**Directory Structure:**
```
src/content/
├── work/
│   ├── project-name.md
│   └── another-project.md
├── systems/
│   ├── ci-cd-pipeline.md
│   └── monitoring-strategy.md
├── notes/
│   ├── article-name.md
│   └── another-essay.md
├── about.md
└── contact.md
```

**Front Matter Schema:**
```yaml
---
title: "Project Name"
category: "AI Systems"
state: "published"  # project | published | updated | archived | referenced | deprecated
updated_date: "2026-06-01"  # ISO 8601, not prominent on surface
summary: "One-sentence problem statement"
outcome: "One-sentence outcome"
---
```

**State Management:**
- State is declared in front matter, not inferred from file location or date.
- The build system reads `state` and renders the appropriate label (Published, Updated, Archived, Deprecated) on the surface.
- Deprecated content is always rendered. It is never hidden, removed from search, or redirected.
- Content in `project` state is excluded from the build (not public).

**Editing Workflow:**
1. Author creates or edits a `.md` file in `src/content/`.
2. Author commits the change with a descriptive message.
3. CI builds the site and deploys. The commit history is the content audit trail.

**No Drafts:**
- Files in `src/content/` are either public or excluded (state: `project`). There is no `_drafts` folder. Content is either ready or it is not in the repository.

**Historical Preservation:**
- When assumptions change or content is updated, the original file is not overwritten. An addendum is appended to the Markdown body with a heading like `## Update (2026-06-01)`.
- The front matter `updated_date` is modified. The original `date` remains.
- This preserves the historical record without Git archaeology.

## Consequences

### Positive
- **Transparency:** The entire content history is visible in Git. Anyone can see what changed, when, and why.
- **Simplicity:** No CMS to log into, no WYSIWYG editor to fight, no database to backup.
- **Portability:** Markdown is universal. If the platform migrates to a different build tool, the content moves unchanged.
- **Enforced discipline:** The front matter schema requires every piece of content to declare its state, category, and summary. There is no way to publish content without metadata.

### Negative
- **Authoring friction:** Writing in Markdown with front matter is less convenient than a CMS with a GUI. This is acceptable for a single-author platform.
- **No scheduled publishing:** Content goes live when it is committed and built. There is no "publish on Tuesday at 9am" feature. This aligns with the Product DNA's rejection of real-time status and temporal anchoring.
- **No collaborative editing:** Only one person can reasonably edit a Git-managed Markdown file at a time. This is acceptable — the platform has one author.

### Alternatives Considered
- **Headless CMS (Sanity, Strapi, Contentful):** Rejected. Adds a dependency, a subscription, an API, and an admin UI for a single author. The Product DNA (Content That Does Not Exist) explicitly rejects CMS-driven content.
- **Notion as CMS:** Rejected. Notion is a proprietary platform with export limitations. The content would not be truly owned.
- **Git-based CMS (Decap CMS, TinaCMS):** Rejected. These add a layer of abstraction over Git that introduces dependencies and UI complexity without solving a real problem for a technical author comfortable with Markdown.
- **JSON/YAML data files for structured content:** Used only for genuinely structured data (navigation order, site metadata). Prose content is always Markdown.
