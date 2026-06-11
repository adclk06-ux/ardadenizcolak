# Information Architecture

**Role:** Principal UX Architect / Information Architect  
**Source of Truth:** Product DNA (immutable)  
**Horizon:** Ten-year validity  
**Output:** Structural definition, no layouts or visual design  

---

## Section-by-Section Architecture

Each of the six destinations defined in the Product DNA is analyzed below with ten dimensions. These are not page designs. They are structural contracts that dictate what information exists, in what order, and at what depth.

---

### 1. Homepage (nav label: `main`)

**Purpose:**  
Orient the visitor and establish identity simultaneously. Communicate who this engineer is and what they build in under four seconds. The homepage is not a summary of the platform — it is a checkpoint that confirms the visitor has arrived at the right place, understands the engineer's positioning, and knows where to go next.

**Psychological Objective:**  
Relief and calibration. The visitor should feel "this is the right kind of place" and understand "what kind of engineer this is" before they feel anything else. The platform does not demand attention — it earns it through restraint.

**Visitor Mindset Entering:**  
Uncertain and scanning. The visitor may have arrived from a referral, a search result, or a link. They do not yet know if this platform is relevant to their purpose. They are willing to give three to five seconds before deciding to stay or leave.

**Visitor Mindset Leaving:**  
Oriented, calibrated, and intentional. The visitor knows who this engineer is at a category level and has a sense of their engineering philosophy. They have chosen a next destination based on their own purpose. They leave with both direction and context.

**Information Priority:**
1. Who (name / monogram)
2. What (one-line positioning statement)
3. How (condensed engineering philosophy — 3–5 declarative sentences)
4. Where (primary navigation to all other destinations)
5. Nothing else.

Priority 5 is critical. The homepage must orient and calibrate without becoming a reading assignment. Identity content is condensed to its absolute essence.

**Expected Reading Time:**  
5–10 seconds. The homepage is recognized, not read. If a visitor spends more than fifteen seconds here, the information hierarchy has failed.

**Visual Density:**  
Minimum. The lowest density on the platform. The homepage should feel like entering a well-designed building lobby: clean, intentional, immediately comprehensible. Density increases as the visitor moves deeper.

**Transition Logic:**  
Every link on the homepage leads to a different destination. There are no anchor links, no "scroll to learn more," no modal previews. The visitor chooses a door and walks through it.

**Why This Section Exists:**  
Without a dedicated orientation surface, visitors enter the platform at random depths and must infer the whole from the part. The homepage guarantees that anyone who arrives at the root will understand the whole before entering any part. By merging identity into the homepage, the platform respects the visitor's time — they receive orientation and calibration in a single glance.

**Why It Exists in This Exact Position:**  
It is the root. It must be first because it is the only destination with no prerequisites. Every other destination assumes the visitor has already decided this platform is relevant and understands what kind of engineer they are evaluating.

---

### 2. Projects (nav label: `Work`)

**Purpose:**  
Present curated evidence of product-building capability. Each entry is a case study, not a showcase. The visitor evaluates whether this person can solve problems similar to their own. Case studies now carry the full technical depth — application decisions, architecture patterns, performance characteristics, and trade-offs — within each project.

**Psychological Objective:**  
Competence verification. The visitor should finish this page believing "this person has solved problems I recognize, in contexts I understand, with outcomes I respect."

**Visitor Mindset Entering:**  
Evidence-seeking and skeptical. They have been oriented and calibrated by the homepage. Now they want proof. They are scanning for relevance: "Has this person worked on something like my problem?"

**Visitor Mindset Leaving:**  
Either convinced or respectfully uncertain. The convinced visitor has identified one or more case studies that map to their needs and has clicked into at least one for deeper reading. The uncertain visitor understands the categories of work but recognizes their specific need is not represented.

**Information Priority:**
1. Project title and category
2. One-sentence problem statement
3. One-sentence outcome
4. Lifecycle state (Published, Archived, etc.)
5. Link to full case study

The index view shows only these five items per project. The full structure (Problem → Constraints → Approach → Architecture → Trade-offs → Outcome → Lessons) lives at the individual case study URL.

**Expected Reading Time:**  
Index: 60–120 seconds (scanning). Individual case study: 3–8 minutes (reading).

**Visual Density:**  
Index: Medium. Scanning must be enabled — the visitor compares projects, looks for relevance, makes quick judgments. Individual case study: High. The visitor has committed to depth; density rewards that commitment.

**Transition Logic:**  
Projects is a hub. From the index, visitors enter individual case studies. From case studies, they may move to Architectures (for infrastructure context beyond the project) or return to the index. No forced linear progression through case studies.

**Why This Section Exists:**  
It is the evidentiary core. Without Projects, the platform is a philosophy document. The engineer builds products; the platform must present the products. Case studies carry the full technical depth — both application and infrastructure — that the visitor needs to evaluate competence.

**Why It Exists in This Exact Position:**  
Second, immediately after the homepage, because the homepage has already established the framework. The visitor is calibrated and ready for evidence. Evidence follows calibration.

---

### 3. Architectures (nav label: `Systems`)

**Purpose:**  
Document infrastructure, automation, and operational decisions at the platform level. Where case studies describe what was built within a specific project, Architectures describes the systems that enable all projects: deployment, monitoring, scaling, reliability, automation pipelines, and infrastructure design.

**Psychological Objective:**  
Systems-thinking validation. The visitor evaluates whether this engineer understands the full stack — not just the code that runs, but the infrastructure that supports it, the automation that maintains it, and the reliability that sustains it.

**Visitor Mindset Entering:**  
Infrastructure-aware and evaluating scope. They may be a DevOps engineer, a platform architect, a hiring manager who understands that application code without operational maturity is incomplete. They want to see evidence of production-grade thinking.

**Visitor Mindset Leaving:**  
Convinced of operational maturity or respectfully out of depth. The convinced visitor has seen specific infrastructure decisions, scaling events, and reliability metrics. The out-of-depth visitor recognizes that this layer exists and is documented, even if they cannot fully evaluate it.

**Information Priority:**
1. Infrastructure architecture overview
2. Operational practices (deployment, monitoring, incident response)
3. Reliability metrics (uptime, latency distribution, error rates)
4. Automation architecture (what is automated, why, how it behaves)
5. Scaling events (what happened, what was learned)

**Expected Reading Time:**  
3–8 minutes per entry. Dense by design. The visitor who arrives here has signaled willingness to invest time.

**Visual Density:**  
High. Diagrams are especially valuable here — system architecture, data flow, deployment pipelines. These are native content, not decoration.

**Transition Logic:**  
Architectures connects bidirectionally to Projects (projects that required significant infrastructure) and Technical Writing (essays on system design). It is a parallel destination to Projects, not a sequel.

**Why This Section Exists:**  
Because modern product building is inseparable from infrastructure. An engineer who builds scalable products and AI applications must demonstrate operational maturity. Architectures is where that maturity is documented. By elevating Systems to Architectures, the platform signals that infrastructure is design work, not maintenance work.

**Why It Exists in This Exact Position:**  
Third, parallel to Projects in importance. The visitor evaluating this engineer needs both evidence of what was built and evidence of the systems that sustain it. The two are siblings, not parent and child.

---

### 4. Technical Writing (nav label: `Notes`)

**Purpose:**  
Host longer-form technical writing and engineering essays. Thoughts that extend beyond any single project or system. This is where the engineer's mind is visible independent of their output.

**Psychological Objective:**  
Intellectual credibility. The visitor should understand how this person thinks about problems they have not yet been hired to solve. Technical Writing demonstrates pattern recognition, abstraction capability, and communication skill.

**Visitor Mindset Entering:**  
Intellectually curious. They may have arrived directly from a search result, a social referral, or from another destination on the platform. They are looking for ideas, not evidence of a specific capability.

**Visitor Mindset Leaving:**  
Either intellectually engaged or respectfully disagreed. Both outcomes are positive. The engaged visitor bookmarks an article, returns to it, or shares it. The disagreed visitor understands the engineer's position clearly enough to disagree — which means the writing succeeded at communication.

**Information Priority:**
1. Article title and thesis (one declarative sentence)
2. Publication / update date (available but not prominent)
3. Category
4. Abstract or opening paragraph
5. Link to full article

**Category Taxonomy**

Every article belongs to exactly one category. These are not tags — they are mutually exclusive intellectual domains.

- **Engineering:** Application-level decisions, code architecture, patterns, trade-offs in implementation. The craft of building software.
- **Architecture:** System-level structure, component relationships, data flow, abstraction design. How the pieces fit together.
- **Performance:** Measurement, optimization, latency, throughput, resource efficiency. What fast means and how to achieve it.
- **AI:** Machine learning systems, model decisions, data pipelines, automation logic, ethical constraints. Building with intelligence, not building intelligence as theater.
- **Systems:** Infrastructure, deployment, monitoring, reliability, operational practices. The ground on which applications run.
- **Design:** Interface decisions, information architecture, visual systems, interaction patterns. Design as engineering, not decoration.
- **Observations:** Notes on industry patterns, emerging technologies, historical parallels, reading reflections. Not trend commentary — pattern recognition across time.

Articles without a clear category do not exist. An article that could fit two categories is either two articles or has not been thought through enough.

Individual articles follow editorial structure: thesis, argument, evidence, conclusion, reflection.

**Expected Reading Time:**  
Index: 30–60 seconds (scanning). Individual article: 5–15 minutes (reading).

**Visual Density:**  
Index: Low to medium. Articles are text-forward; the index should enable quick scanning of topics. Individual article: Medium. Comfortable reading measure, adequate line height, minimal interruption.

**Transition Logic:**  
Technical Writing connects to the homepage (philosophy alignment) and About (who wrote this). Articles may also reference Projects or Architectures — and those destinations may reference articles in return.

**Why This Section Exists:**  
Because capability is demonstrated not only by what has been built, but by how problems are understood. Technical Writing proves the engineer can abstract from specific experience to general principle. It also attracts the right audience (peers, evaluators) and repels the wrong one (commodity seekers).

**Why It Exists in This Exact Position:**  
Fourth, after the evidence destinations (Projects, Architectures), because writing is commentary on experience, not a substitute for it. The visitor should encounter the work before encountering the thoughts about the work.

---

### 5. About

**Purpose:**  
Provide factual professional context. The minimal necessary information to understand the person's background without narrative packaging. It is a data sheet, not a story.

**Psychological Objective:**  
Verification and context. The visitor needs to confirm factual details: current focus, relevant experience, specific technologies, availability. They are not looking for inspiration.

**Visitor Mindset Entering:**  
Practical and information-seeking. They want to know: Is this person available? Do they work in my domain? What is their relevant experience? They may be a recruiter, a hiring manager, a potential collaborator, or a peer doing due diligence.

**Visitor Mindset Leaving:**  
Informed and unburdened. They have the facts they need. No narrative was forced upon them. No "journey" was described. They leave with data, not emotion.

**Information Priority:**

The About page is divided into six sections. Each has a single purpose and a clear boundary.

**1. Principles**
The engineer's operating principles — not philosophy, not mission. These are the rules that govern how they work: what they optimize for, what they refuse to optimize for, what they believe about trade-offs. Factual, not aspirational.

- **Contains:** Decision-making heuristics, constraints the engineer works well within, what they consider non-negotiable.
- **Does not contain:** Inspirational quotes, value statements about "excellence" or "impact," origin stories about how these principles were discovered.

**2. Timeline**
Past roles with dates and brief context. A chronological data table, not a narrative.

- **Contains:** Company, title, duration, one-sentence description of what was built or the problem solved.
- **Does not contain:** Job responsibilities copied from a résumé, achievements framed as personal victories, explanations of why each role was left.

**3. Current Focus**
What the engineer is building now, at a high level. The answer to "what are you working on?"

- **Contains:** Active projects, current domain focus, technologies currently in use. Framed as activity, not identity.
- **Does not contain:** "Passion" language, future ambitions, "always learning" claims.

**4. Working Style**
How this engineer collaborates. The practical reality of working with them.

- **Contains:** Preferred team size, communication patterns, async vs. sync preference, how they handle ambiguity, how they make decisions under time pressure.
- **Does not contain:** Personality type labels, management philosophy, claims about being "easy to work with."

**5. Tooling**
Technologies used with specificity. Named, not categorized.

- **Contains:** Languages, frameworks, infrastructure tools, and the contexts in which each is used. What the engineer reaches for and why.
- **Does not contain:** Skill percentages, progress bars, "proficiency" ratings, exhaustive lists of every technology ever touched.

**6. Outside of Work**
Minimal context about how the engineer spends time outside of professional activity. Not hobbies, not lifestyle content.

- **Contains:** Activities that inform the engineer's perspective or approach (e.g., reading in adjacent fields, side projects with clear technical relevance, languages spoken if relevant to collaboration).
- **Does not contain:** Travel photos, fitness routines, favorite foods, entertainment preferences, "fun facts," pets, family details.

**Expected Reading Time:**  
60–120 seconds. About is reference material, not reading material. The visitor scans for the section relevant to their question.

**Visual Density:**  
Medium. Structured data: lists, dates, brief descriptions. The visitor scans for specific facts. Density supports scanning.

**Transition Logic:**  
About naturally leads to Contact (reaching out). It may also lead to Projects (verifying claims in the experience list) or Technical Writing (understanding the thinking behind the facts).

**Why This Section Exists:**  
Because some visitors need facts before they need philosophy or evidence. Recruiters need dates. Hiring managers need role context. Potential collaborators need domain alignment. About provides this efficiently without forcing everyone through narrative content.

**Why It Exists in This Exact Position:**  
Fifth, near the end, because it is supplementary. The visitor who needs it knows to look for it. The visitor who does not need it is not forced to encounter it on their way to the primary destinations.

---

### 6. Contact

**Purpose:**  
Enable the right kinds of reach-out with minimal friction. Define what contact is welcome, what the expected response pattern is, and what the visitor should include. Remove ambiguity and anxiety from the act of reaching out.

**Psychological Objective:**  
Permission and clarity. The visitor should feel confident that their inquiry is appropriate and will be handled respectfully. They should not fear that their email will disappear into a void, nor that they are violating some unwritten rule.

**Visitor Mindset Entering:**  
Intentional and slightly uncertain. They have decided to reach out but do not know the protocol. They want to do it right. They may be nervous about cold-contacting someone whose work they respect.

**Visitor Mindset Leaving:**  
Empowered and informed. They know the preferred contact method, what to include in their message, what kind of response to expect, and whether their inquiry type is welcome. They either send a message or decide not to — but the decision is informed.

**Information Priority:**
1. Preferred contact method (email, with address)
2. Types of inquiry welcome (collaboration, consulting, speaking, hiring, etc.)
3. What to include in an initial message (specificity helps both parties)
4. Expected response time (set and honor it)
5. What is not welcome (spam, vague "let's connect" requests, unpaid speculative work)

**Expected Reading Time:**  
15–30 seconds. Contact is not read; it is used.

**Visual Density:**  
Minimum. The lowest density after the homepage. The page should feel like a clean form on a desk: one task, no distraction.

**Transition Logic:**  
Contact is a terminal destination. There are no further navigational paths from Contact. The visitor either completes the action (sends a message) or navigates back via the global navigation.

**Why This Section Exists:**  
Because every platform that communicates competence will eventually be tested by someone who wants to hire or collaborate with that competence. Contact exists to make that test passable — to convert respect into communication.

**Why It Exists in This Exact Position:**  
Last, because it is a destination of intent. The visitor does not stumble into Contact. They arrive there deliberately, after having consumed enough of the platform to form a judgment. Placing it earlier would suggest the platform prioritizes conversion over evidence — a direct violation of the Product DNA.

---

## Structural Systems

### Navigation Structure

**Global Navigation (Persistent)**
The primary navigation contains exactly six items, matching the six destinations:

```
main | Work | Notes | Systems | About | Contact
```

- **No dropdowns.** Every item navigates directly to its destination.
- **No nested hierarchies.** If a hierarchy is necessary, it lives within the destination.
- **No "hamburger menu" on desktop.** All six items are visible. The discipline of limiting to six enables visibility.
- **Active state is always visible.** The current destination is indicated through persistent, subtle means.
- **Mobile:** Collapsed to a minimal toggle. The same six items, no simplification, no hidden destinations.

**Breadcrumb System**  
Not used. Breadcrumbs imply depth that does not exist. The platform is flat: six destinations, each with internal structure. Navigation back to a destination is achieved through the global nav, not through hierarchical breadcrumbs.

**Footer Navigation**  
Minimal. A repeated link to main, and a quiet link to the platform's system documentation (meta-content about how the platform is built). No sitemap. No exhaustive link lists. The footer is structural, not promotional.

---

### URL Philosophy

**Principles:**
1. **Guessable:** A visitor who knows the structure should be able to construct the URL.
2. **Memorable:** URLs should be short enough to type from memory.
3. **Permanent:** URLs never change. Content moves through lifecycle states; the URL remains.
4. **Human-readable:** No IDs, no hashes, no query parameters for primary content.

**URL Mapping:**

| Destination | URL |
|---|---|
| Homepage | `/` |
| Projects (index) | `/work` |
| Individual case study | `/work/project-name` |
| Architectures (index) | `/systems` |
| Individual architecture entry | `/systems/entry-name` |
| Technical Writing (index) | `/notes` |
| Individual article | `/notes/article` |
| About | `/about` |
| Contact | `/contact` |

**Rules:**
- Slugs use hyphens, not underscores or camelCase.
- Slugs are permanent. If content is deprecated, the URL remains with a deprecated label.
- No trailing slashes enforced inconsistently. Pick one and apply universally.
- No `.html` extensions in visible URLs.

---

### Future Scalability

**Content Growth:**  
The architecture scales by depth, not by breadth. New projects are added to Selected Work; new technical entries to Engineering or Systems; new essays to Writing. The number of destinations remains fixed at six. If a new category is genuinely needed, it is a sub-destination within an existing one, not a new top-level item.

**Navigation Growth:**  
The six-item navigation limit is structural, not visual. If content volume genuinely requires more navigational support, the solution is improved findability within destinations (search, taxonomy, filtering) — not expansion of the global navigation.

**URL Scalability:**  
The URL pattern supports infinite entries within each destination without structural change. `/work/project-twenty` works exactly like `/work/project-one`.

**Future Destinations:**  
Any proposal for a new top-level destination must pass an extreme test: does it serve a purpose that none of the existing six can accommodate? In ten years of platform evolution, new top-level destinations should be rare — zero to two.

---

### Archive Strategy

**Content States:**  
Every piece of content exists in one of six states (see Product DNA, Section 13: Content Lifecycle). The architecture must support all six states transparently:

- **Published:** Full visibility, normal navigation.
- **Updated:** Full visibility, update noted.
- **Archived:** Visible, labeled, linked from relevant contexts.
- **Referenced:** Visible, referenced flag, linked to citations.
- **Deprecated:** Visible, deprecated banner, explanation appended.
- **Project:** Not public. Internal documentation only.

**Navigation Behavior:**  
Archived and deprecated content remains in navigation where logically relevant. A deprecated case study on infrastructure decisions may still be the best entry point to a specific topic — the deprecation label informs the visitor, it does not hide the content.

**Search Behavior:**  
If search is implemented, archived and deprecated content is included. The visitor searching for a specific technology or pattern should find all relevant content, including content that is no longer current. The state label provides context.

**No Redirects for Deprecation:**  
Deprecated content lives at its original URL. No 301 redirects to "current versions." The visitor should see the historical record, not be shunted to a replacement they did not request.

---

### Internal Linking Philosophy

**Principles:**
1. **Links are context, not decoration.** Every internal link connects two pieces of information that genuinely illuminate each other.
2. **No orphaned content.** Every piece of content should be reachable through at least one path other than direct URL entry.
3. **No circular traps.** Links should expand the visitor's understanding, not bounce them between the same three pages.
4. **Bidirectional linking where relevant.** If Selected Work references an essay, the essay references the project. This creates a web, not a tree.

**Link Patterns:**
- Case studies link to relevant Architectures entries for infrastructure context.
- Architectures entries link to the projects they support.
- Articles link to projects or architecture entries that exemplify the ideas.
- About links to Projects for claim verification.

**What Is Not Linked:**
- Contact is never linked from within content. It is reached through navigation or footer only.
- Homepage is never linked from within content. It is the root.
- No "related posts" algorithms. Related content is curated, not generated.

---

### Progressive Disclosure Strategy

**Layer 1: Surface (All Visitors)**  
The index pages of each destination show summaries only. For Projects: title, problem, outcome, lifecycle state. For Technical Writing: title, thesis, category. This layer requires no commitment.

**Layer 2: Depth (Interested Visitors)**  
Individual entries (case studies, articles, architecture entries) show full content. This layer requires a click — a deliberate act of commitment. The content rewards that commitment with density and specificity.

**Layer 3: Reference (Deeply Invested Visitors)**  
Within individual entries, linked technical documentation, source references, and extended reading are available. This layer is for visitors who need to verify claims or extend their understanding.

**No Layer 4:**  
If a visitor needs more than three layers, the content should be split into multiple entries or the entry should be restructured. Infinite depth is an information architecture failure.

**No Forced Disclosure:**  
The visitor chooses their depth. No "read more" buttons that hide content for no reason. No accordion sections that force interaction. If content belongs on the page, it is on the page. If it does not belong, it is removed or linked.

---

### Reading Rhythm

**Principle:**  
The platform alternates between low-density calibration pages and high-density evidence pages. This creates a rhythm of orientation and immersion, preventing the fatigue of constant density or the emptiness of constant minimalism.

**Rhythm Pattern:**
```
Homepage (low) → Projects index (medium) → Case study (high)
                                    ↓
Homepage (low) → Architectures index (medium) → Architecture entry (high)
                                    ↓
Homepage (low) → Technical Writing index (medium) → Article (medium-high)
```

**Pauses:**  
Transitions between destinations are pauses. The visitor navigates, the page loads, the new information architecture is established. These pauses are not friction — they are cognitive reset points.

---

### Scroll Pacing

**Principle:**  
Scroll is for reading, not for journeying. The platform does not use scroll as a narrative device. Every page is complete without scrolling. Scrolling reveals more content, not more meaning.

**Rules:**
- No full-screen sections that require scroll to advance.
- No scroll-triggered animations that gate content.
- No "scroll to learn more" prompts.
- Long pages (essays, case studies) scroll naturally and continuously.
- The fold is irrelevant. Content is structured for comprehension, not for above-the-fold impact.

**Page Lengths:**
- Homepage: No scroll on any viewport.
- Projects index: Scrollable, but scannable in under two minutes.
- Case studies: Scrollable, 3–8 minute read.
- Architectures entries: Scrollable, 3–8 minute read.
- Technical Writing index: Scrollable, scannable.
- Articles: Scrollable, 5–15 minute read.
- About: Minimal scroll.
- Contact: No scroll on any viewport.

---

### Cognitive Load Management

**Chunking:**  
Information is presented in chunks that respect working memory limits. A case study has five sections (Problem, Context, Decision, Outcome, Reflection) — not because five is a magic number, but because it maps to how people store structured information.

**Familiar Patterns:**  
Every destination uses consistent structural patterns. The visitor learns the pattern once and applies it everywhere. Case studies and Architectures entries share the same underlying information architecture (context, decision, outcome, reflection) even though their content differs.

**Progressive Complexity:**  
Information complexity increases with visitor depth. Homepage is simplest (orientation + calibration). Projects adds evidence. Architectures adds technical depth. Technical Writing adds abstraction. The visitor is never hit with complexity they have not chosen.

**No Simultaneous Demands:**  
The interface never asks the visitor to read, watch, and interact at the same time. Each page has one primary mode: reading, scanning, or acting. Contact is for acting. Homepage is for orienting. Case studies are for reading.

**State Visibility:**  
The visitor always knows where they are (destination, page title, URL), what they can do (navigation), and what state the content is in (lifecycle label). Uncertainty is a form of cognitive load. The architecture eliminates it.

---

## Alignment with Product DNA

This architecture supports the Product DNA without contradiction through the following mechanisms:

**Quiet over Loud:**  
The architecture limits destinations to six, navigation to one persistent bar, and URLs to simple patterns. There is no noise of excessive choice, no shouting of multiple navigation systems.

**Confident over Arrogant:**  
The visitor chooses their own path. There are no forced funnels, no "optimized" conversion paths. The architecture trusts the visitor to find what they need.

**Premium over Luxurious:**  
Premium is expressed through structural quality: permanent URLs, consistent patterns, progressive disclosure, lifecycle transparency. Luxurious would mean more destinations, more navigation options, more visual flair.

**Minimal over Empty:**  
Every destination has a clear, defensible reason for existence. None are placeholders. None are "nice to have." The minimalism is structural, not superficial.

**Technical over Flashy:**  
The architecture prioritizes evidence (Projects, Architectures) over presentation. Technical Writing and the homepage's identity layer exist to frame that evidence, not to replace it.

**Editorial over Corporate:**  
The sequence (homepage identity before Projects, Technical Writing after evidence) follows editorial logic: establish the frame, present the evidence, then offer the commentary. The architecture tells a story without being a story.

**Long-lasting over Trendy:**  
Six destinations, simple URLs, progressive disclosure, and lifecycle states are not trends. They are structural patterns that will remain valid in ten years. The architecture does not depend on current web design fashions.

**Competence Communication:**  
Every architectural decision can be traced to the axiom that the platform exists to communicate competence. The order of destinations, the depth of content, the linking patterns, and the URL permanence all serve that single purpose.

**Decision Framework Alignment:**  
The architecture itself passes all six framework questions:
1. **Reduces cognitive load?** Yes — consistent patterns, limited navigation, clear destination purposes.
2. **Increases trust?** Yes — permanent URLs, transparent lifecycle, no dark patterns.
3. **Maintainable after five years?** Yes — simple structure, no dependencies on trend-specific patterns.
4. **Would removing it make the product worse?** Yes — every destination has a unique, non-overlapping purpose.
5. **Communicates substance?** Yes — evidence-first architecture, technical depth destinations.
6. **Solving a real problem?** Yes — the problem is "how does a visitor evaluate this engineer's competence?"

**Platform Axioms Alignment:**  
- **Competence communication:** Evidence destinations dominate. Homepage identity frames but does not replace.
- **Every element earns its place:** Six destinations, each with a veto-proof justification.
- **Performance:** Flat architecture, no deep nesting, minimal navigation computation.
- **Clarity:** Consistent patterns, guessable URLs, predictable structure.
- **Silence:** Low-density calibration pages create silence around high-density evidence.
- **Think, not scroll:** Depth is navigated, not scrolled into. Pages are complete without scrolling.
- **Age gracefully:** Structural minimalism does not date. No trend-dependent patterns.
- **Scale without redesign:** New content fits existing destinations. No structural change required.
- **Typography carries hierarchy:** Architectural structure enables typographic hierarchy to do its work.
- **Motion supports understanding:** No scroll-jacking, no ambient motion. The architecture does not depend on motion.

---

*Document Status: Architecture Definition*
*Validates Against: Product DNA (all sections)*
*Revision Principle: Architecture changes are structural changes. They require higher justification than content changes.*
