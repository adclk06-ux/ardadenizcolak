# Project Constitution

**Status:** Active  
**Authority:** Immutable by default, amendable only through documented revision  
**Scope:** Governs all files, decisions, and contributions to this repository  

---

## 1. Hierarchy of Documents

This project is governed by a hierarchy of documents. A lower document cannot contradict a higher one. If a conflict is discovered, the higher document prevails, and the lower document must be corrected.

```
PRODUCT_DNA.md              (immutable identity)
    ↓
INFORMATION_ARCHITECTURE.md  (structural contract)
    ↓
PROJECT_PRINCIPLES.md        (implementation rules)
    ↓
adr/                          (decision records)
    ↓
src/                          (code and content)
```

**PRODUCT_DNA.md** defines what this platform is, what it believes, and what it will never become. It is the source of truth for identity, tone, philosophy, and constraint.

**INFORMATION_ARCHITECTURE.md** defines how information is organized across six destinations. It is the structural contract between strategy and implementation.

**PROJECT_PRINCIPLES.md** defines how files are organized, where code lives, and what each directory contains. It is the contract between architecture and codebase.

**adr/** contains Architecture Decision Records. Each ADR is a permanent record of a significant technical decision. ADRs cannot be deleted; they can be superseded by a newer ADR.

**src/** contains the actual implementation. Every file in `src/` must be justifiable by reference to one or more governing documents.

---

## 2. Document Lifecycle

### Creation
New governing documents are created only when:
- A new category of decision needs permanent recording (new ADR)
- The project structure changes in a way that cannot be explained by existing documents
- A new constraint is discovered that affects multiple files

### Amendment
Governing documents are amended, not rewritten. When a document changes:
- The change is recorded in the document's revision history (Git commit)
- The reason for the change is explained in the commit message
- Dependent documents are reviewed for necessary updates
- The Decision Framework (Product DNA Section 18) is re-applied

### Deprecation
A governing document is never deleted. If superseded, it is marked as deprecated with a reference to its replacement. This preserves the decision history.

---

## 3. Decision Authority

### Single Author
This project has a single author. Decisions about content, structure, and identity are made by the author alone. There is no committee, no voting, and no consensus-seeking for design decisions.

### The Decision Framework
Every proposed change to any file must pass the six questions defined in Product DNA Section 18:
1. Does it reduce cognitive load?
2. Does it increase trust?
3. Is it maintainable after five years?
4. Would removing it make the product worse?
5. Does it communicate substance instead of appearance?
6. Is it solving a real problem or decorating the interface?

A single failure is a veto. There is no override.

### Technical Decisions
Technical decisions (framework choice, tool selection, build configuration) are recorded as ADRs. Once an ADR is accepted, the decision is binding until superseded by another ADR.

### Content Decisions
Content decisions (what to publish, what to archive, what to write about) are governed by the Product DNA's Content Strategy (Section 12) and Content Lifecycle (Section 13). Content does not exist outside these rules.

---

## 4. Repository Hygiene

### No Build Artifacts in Source
`dist/`, `.astro/`, `node_modules/`, and any generated files are excluded from version control via `.gitignore`. Only authored files belong in the repository.

### No Placeholder Content
Nothing is "under construction." Nothing is "coming soon." The platform is always complete at its current state. This rule applies to content, pages, and documentation.

### Commit Discipline
- Commits are atomic: one concern per commit
- Commit messages describe what changed and why
- "WIP" commits are not merged
- Breaking changes to structure or behavior are noted explicitly

### Dependency Discipline
- Dependencies are added only when no reasonable alternative exists
- Every dependency must pass the Decision Framework Question 3 (maintainable after five years)
- `devDependencies` are preferred over `dependencies` where possible
- No dependency is added for a single feature

---

## 5. Quality Standards

### Automated Checks
- **Biome** enforces code formatting, linting, and import organization
- **TypeScript** enforces type safety at build time
- **Astro** validates content schemas and routing at build time
- CI blocks merge on any check failure

### Manual Review
- Governing documents are reviewed when any dependent file changes
- Content is reviewed for alignment with Product DNA before publication
- Architecture changes require ADR documentation

### No "Good Enough"
There are no "good enough" files. Every file in the repository operates at the same standard. A single broken link, a single typo, or a single outdated reference undermines the entire platform.

---

## 6. External Constraints

### No External Dependencies for Content
Content is authored in Markdown and stored in the repository. No CMS, no API, no third-party content source.

### No Analytics or Tracking
The platform does not track visitors. No Google Analytics, no Plausible, no server logs for behavioral analysis. Performance is measured by build-time metrics, not by user engagement.

### No Monetization
No ads, no sponsored content, no affiliate links, no paywalls. The platform is not a business. It is evidence.

### No Social Integration
No social media embeds, no share buttons, no comment sections, no "follow me" prompts. The platform does not borrow credibility from networks.

---

## 7. Evolution

### Time Horizon
All decisions are evaluated against a five-year horizon. Will this choice still be correct in 2031? If the answer is uncertain, the simpler, more standard choice is preferred.

### Trend Immunity
The platform does not respond to trends. New frameworks, new design patterns, and new technologies are evaluated against the Product DNA, not against market popularity.

### Continuous Curation
The platform is actively curated. Content is reviewed, updated, and archived. Stale content is labeled, not hidden. The difference between a museum and a mausoleum is the presence of a curator.

---

## 8. Violations

A violation of this Constitution is any file, commit, or decision that:
- Contradicts a higher governing document
- Fails the Decision Framework
- Introduces an unmaintainable dependency
- Adds content that does not pass the Content Lifecycle rules
- Violates repository hygiene standards

When a violation is discovered:
1. It is corrected immediately
2. The correction is documented
3. The root cause is analyzed to prevent recurrence
4. If the governing document enabled the violation, the document is amended

---

*Document Status: Active*
*Supersedes: Nothing*
*Amendment Rule: Requires explicit revision section and justification for every change*
