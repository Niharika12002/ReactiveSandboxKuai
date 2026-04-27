# AI Direction Log — Kuai
**Project:** Kuai — A Calm, Structured Shopping Planning Companion
**Course:** AI 201: Creative Computing with AI
**AI Tools Used:** ChatGPT (product framing, concept development), Claude (system design, implementation, build)
**Role Assigned to AI:** Lead Art Director and Creative Design Engineer
**Deliverable:** React SPA + Express backend (also produced as standalone HTML)

---

## Overview

This log documents every major moment where AI was used to shape Kuai — as a product, a system, a visual identity, and a working interface. AI was used across two tools and two phases: ChatGPT was used for product concept development, framing, and design intent writing; Claude was used for system design, architecture enforcement, and full implementation.

The direction of Kuai was not fixed from the beginning. It evolved through repeated prompting, critique, rewriting, and reframing. AI did not replace the design process — it was used as a tool to help shape, clarify, and strengthen it. Every major decision about what Kuai is, how it feels, and what it does was made by the designer. AI executed, challenged, and documented under that direction.

---

## Phase 1 — Concept Development and Product Framing
*Conducted in ChatGPT*

---

### Entry 1 — Framing Kuai as a Three-Panel System

**Goal:**
Define Kuai as a structured system rather than a simple list of saved items.

**How AI was used:**
AI was used to interpret the project requirements and map the Kuai concept into a three-panel architecture. It also translated the assignment brief into plain language, making the system requirements clearer and easier to apply directly to the product.

**What the three panels became:**
- **Browser** — a collection panel for browsing and selecting saved items
- **Detail View** — a deep-focus panel for understanding and acting on one selected item
- **Controller** — a utility panel for filtering, sorting, and managing the collection

**What changed in the project:**
Kuai was established as a structured interaction system from the beginning. This prevented it from becoming a vague or purely visual concept and set up the shared-state model that shaped every later decision.

---

### Entry 2 — Shifting from "Wishlist" to "Shopping-Planning Tool"

**Goal:**
Push Kuai beyond being a place to save wanted items.

**How AI was used:**
AI was used to develop product language, framing copy, and design intent text around the concept of a centralized app where users can collect, organize, compare, and manage products they want.

**What changed in the project:**
Kuai's purpose broadened from saving products to:
- reducing shopping clutter
- supporting review and comparison
- helping users make calmer, more deliberate buying decisions

This made Kuai more defensible as a product. It stopped feeling like a generic wishlist app and started feeling like a system with a stronger reason to exist.

---

### Entry 3 — Defining the Emotional Tone and Brand Identity

**Goal:**
Shape Kuai's brand personality so the product felt authored rather than generic.

**How AI was used:**
AI helped translate rough preferences into a clearer brand identity. The following values were developed and refined through prompting:

- stress-free
- minimal
- clutter-free
- clean
- chic
- practical and efficient

These were then formalized into a Brand and Product Identity section inside the Design Intent Document.

**What changed in the project:**
Kuai became a quiet, curated shopping companion rather than a loud retail interface. It was no longer framed like a shopping cart or deal site. This step established the creative standard that all later visual and interaction decisions were evaluated against.

---

### Entry 4 — Defining the Target User

**Goal:**
Make Kuai feel human-centered and grounded in a real use case.

**How AI was used:**
AI helped write the target user section and later refine it through a specific persona. The broad target user was described as people who shop online frequently, including people managing household and personal shopping across multiple lists. The persona of **Lisa** — a 36-year-old mother of three — was introduced to pressure-test the product against a real situational problem.

**What the persona surfaced:**
- multiple overlapping shopping lists
- product overload and decision fatigue
- time pressure and holiday shopping stress
- the need to compare and organize without mental clutter

**What changed in the project:**
Once the product was grounded in a believable user context, design decisions became more intentional. Kuai stopped being a general-purpose tool and started responding to a specific emotional and practical need.

---

### Entry 5 — Building the Visual Direction

**Goal:**
Define how Kuai should look and feel visually.

**How AI was used:**
AI helped transform visual preferences into a documented visual direction system, including:

- muted neutral palette
- serif headings
- clean sans-serif body text
- soft card edges
- image-led Detail View layout
- restrained utility controls in the Controller
- generous spacing throughout
- a calm, professionally resolved interface

**What changed in the project:**
The visual direction became explicit. Kuai was no longer just "minimal." It was described as purposeful, organized, visually calm, chic, accessible, and stress-reducing. This gave Kuai a distinct visual identity and helped separate it from default AI-generated dashboard aesthetics.

---

### Entry 6 — Correcting Layout Hierarchy

**Goal:**
Ensure the panel proportions matched the actual logic of the product.

**How AI was used:**
AI was used to re-evaluate layout balance and help rethink panel proportions after reviewing the product direction.

**What changed:**

| Panel | Before | After |
|---|---|---|
| Browser | 35% | 25% |
| Detail View | 45% | **55%** |
| Controller | 20% | 20% |

The Detail View was explicitly made the dominant panel because it is where users understand, edit, compare, and make decisions. The layout was corrected to match that logic.

---

### Entry 7 — Making Accessibility and Text Visibility a Design Priority

**Goal:**
Raise the professional quality of the interface, especially in the Detail View and Controller.

**How AI was used:**
AI helped convert verbal design critique into specific requirements around readability, contrast, hierarchy, and breathing room.

**What changed in the project:**
Accessibility and readability became explicit requirements:
- stronger text contrast
- clearer separation of headings, labels, metadata, and actions
- more breathing room between sections
- better text visibility in both the Detail View and Controller

This shifted Kuai away from surface-level styling and toward more professional interface quality.

---

### Entry 8 — Strengthening the Detail View with Editing and Decision-Support Features

**Goal:**
Make the Detail View more useful and more product-like.

**How AI was used:**
AI helped reorganize the Detail View's content hierarchy based on specific functional feedback about what should be editable, what should be visually prioritized, and what should be removed.

**What the Detail View gained:**
- editable notes with a pencil icon affordance
- editable category label, moved higher in the information hierarchy
- retained favorite and purchased action toggles
- reduced emphasis on "date saved" (deprioritized)
- a clearer content order focused on decision-making over passive display

**What changed:**
The Detail View stopped being a passive information area and became the central working space of Kuai.

---

### Entry 9 — Adding Price Comparison as a Core Product Feature

**Goal:**
Strengthen Kuai's value beyond organization and storage.

**How AI was used:**
AI helped convert the idea of retailer comparison into a documented product feature and a design requirement for the Detail View. It was used to define how price comparison should be displayed and how it should support the user's decision process.

**What was designed:**
Each saved item could show prices across two or three retailers. The lowest price would be highlighted, and a savings callout would show the delta. Example retailers in the mock data: Sony, Best Buy, Amazon, Walmart.

**What changed:**
This was a major leap in the project. Kuai became a tool for making better purchasing decisions, not just remembering products.

---

### Entry 10 — Fixing the Search Flow

**Goal:**
Resolve the gap between the search bar's appearance and its actual behavior.

**How AI was used:**
AI was used to diagnose why the search bar existed but did not yet produce results. It helped identify that the search field was updating state but not yet searching a catalog, rendering results, or connecting to the saved collection.

**What the search flow was redefined as:**
1. User types a query
2. Query updates shared state
3. Filtered catalog results appear in real time
4. User can add a result directly to the saved collection

This made the Browser panel active and meaningful instead of decorative.

---

### Entry 11 — Evolving Kuai into a Structured Product Intelligence System

**Goal:**
Move Kuai away from a manually managed list toward a more intelligent, data-driven system.

**How AI was used:**
AI helped interpret professor feedback and reframe the product's architecture around structured product data. It helped define a new flow:

1. User adds an item
2. Kuai receives raw product data
3. Raw data is normalized into a clean schema
4. The normalized product is stored
5. The app searches and filters on structured fields

**The product schema that emerged:**
- `productName`
- `productType`
- `productStyle`
- `productBrand`
- `tags`
- `id`, `image`, `notes`, `favorite`, `purchased`, `priceComparison` (UI-support fields)

**What changed:**
This is where Kuai stopped behaving like a list app and started behaving like a structured product intelligence system. It made the app smarter, more searchable, and more aligned with the professor's guidance.

---

### Entry 12 — Defining the Mock API and Build Pipeline

**Goal:**
Translate the data-driven product direction into something buildable.

**How AI was used:**
AI helped draft prompts for both Gemini and Claude to support:
- mock product search (simulating a Google-style raw product response)
- normalization into Kuai's schema
- structured storage of normalized items
- filtering and sorting on clean product fields

It also helped scope the implementation to be smart without being too complex for a student project — using mock data, simulated retailer pricing, and no real external APIs.

**What changed:**
Kuai gained a concrete technical direction that connected concept to implementation.

---

## Phase 2 — System Design and Implementation
*Conducted in Claude — this conversation*

---

### Entry 13 — Initial Build: Three-Panel React SPA

**Prompt direction given:**
AI was given the Design Intent Document and instructed to build Kuai as Lead Art Director and Creative Design Engineer. The brief specified:
- Three-panel layout at exact proportions 25 / 55 / 20
- Warm editorial palette: cream, parchment, taupe, sage, espresso, gold — intentionally anti-retail
- Single source of truth architecture — all state in one parent, props down, events up
- No backend, no live API, no external services — mock data only per course brief

**What AI produced:**
A fully functional React SPA with:
- Three-panel layout at specified proportions
- Typography: *Playfair Display* (italic serif) for headings and logo; *DM Sans* for UI copy
- Topbar in deep espresso with gold lettering
- Mock catalog with 10+ items across categories: Tech, Beauty, Clothing, Home
- All panels connected via lifted state in a single parent component

**What I kept:**
The full architecture and palette. The props-down / events-up pattern was correctly implemented with no duplicated state.

**What I changed:**
Typography weights and spacing were refined in later passes. The first build established structure; visual finish came through iteration.

---

### Entry 14 — Feature Build: Browser Panel

**Prompt direction given:**
The Browser panel needed to function as a real-time catalog search and quick-scan saved items list with:
- Debounced search across the mock catalog
- Add-to-list that clears the search field after each addition
- Saved item cards showing: name, brand, price, priority badge, and favorite dot
- Clicking a card loads it in the Detail View via shared state

**What AI produced:**
A Browser panel with all specified behaviors. Priority badges were color-coded (High / Medium / Low) and the favorite dot used a filled indicator. Selecting a card updated the selected item across all three panels via the parent state.

**What I kept:**
The debounce, the priority badge system, and the auto-clear on add — all were intentional UX decisions that AI implemented cleanly.

---

### Entry 15 — Feature Build: Detail View Panel

**Prompt direction given:**
The Detail View should be image-led and spacious, with this exact content hierarchy top to bottom: product image → editable category → product name → brand → price comparison table with best-price highlight and savings callout → priority selector (pill buttons) → favorite and purchased toggles → editable notes with pencil icon affordance.

**What AI produced:**
A Detail View with the full hierarchy as specified. Price comparison rendered as a compact table with the lowest price highlighted in sage green and a savings callout showing the delta. Notes used an inline edit pattern — pencil icon triggers an editable textarea, which collapses to display text on blur.

**What I kept:**
The price comparison structure, savings callout, and inline notes editing pattern. These were the most complex UI components and the AI executed them correctly.

**What I changed:**
Spacing inside the Detail View was tightened — the initial output had too much padding between sections, making it feel empty rather than calm. Priority pill buttons were also adjusted to sit closer together as a button group.

---

### Entry 16 — Feature Build: Controller Panel

**Prompt direction given:**
The Controller should be compact and utility-first. Direction specified: live stats (total items, total cost, items purchased), favorites-only toggle, purchased visibility toggle, category filter dropdown, six sort modes (alphabetical, price low → high, price high → low, priority, recently added, favorites first), and item-level management (remove, edit category).

**What AI produced:**
A compact right panel with all specified controls. Stats rendered as small labeled numbers. Filters and sort used styled native `<select>` elements. The remove action used a small × button per item row. Category was editable inline.

**What I changed:**
The initial category editor used a `<form>` element, which is explicitly prohibited under the course brief. Directed AI to replace it with an `onChange` + `onBlur` pattern using standard React event handlers. This was a quick fix but a required one — the course brief explicitly bans HTML form elements in React artifacts.

---

### Entry 17 — Dark / Light Mode

**Prompt direction given:**
Add dark and light mode with a toggle in the topbar. Preference should persist in `localStorage` and both modes should feel resolved — not like an afterthought.

**What AI produced:**
A CSS variable token system with two full theme sets: `[data-theme="light"]` and `[data-theme="dark"]`. The toggle switched the `data-theme` attribute on the `<html>` element. `localStorage` saved and restored the preference on page load. Both modes used warm, considered color values — not a simple color inversion.

**What I kept:**
The token architecture entirely. Using CSS variables on the root with a `data-theme` attribute is the correct, scalable approach for dual-mode theming.

---

### Entry 18 — Rejecting the Alternate Architecture (Record of Resistance #1)

**What happened:**
An alternate codebase was submitted for integration. It used a tab layout (`search` / `collection`) instead of the three-panel structure, split state across async API calls via an external `kuaiApi` object, had no Detail View and no Controller panel, used inline styles and generic sans-serif typography, and had no price comparison, notes editing, priority system, or filter/sort controls.

**AI's response:**
Refused integration and documented the reasons:
1. Architecture violations — tab layout and external API state directly contradict the three-panel spec and the single-source-of-truth requirement
2. Design violations — no visual system, no typographic hierarchy, no feature parity with the Design Intent Document
3. Course risk — the course brief explicitly penalizes duplicated state and prohibits live API integrations at this stage; this pattern would fail the architectural rubric

**What I directed instead:**
Kept the original build intact.

**Why this matters:**
This moment demonstrates that AI functioned as a principled design partner, not just an execution tool. When directed to hold the spec, it held it. The refusal was design integrity in action.

---

### Entry 19 — Rejecting the Live API Integration (Record of Resistance #2)

**What happened:**
A request was made to integrate a live Express backend API at `localhost:3001` using a `kuaiApi` module with fetch calls to `/saved-items`, `/search`, and `/saved-items/:id`.

**AI's initial response:**
Refused, with two reasons:
1. The course brief (Build Constraints) explicitly prohibits live API integrations at the P2 stage
2. The async fetch pattern creates competing sources of truth against React state — the exact anti-pattern the assignment is teaching students to avoid

**What changed:**
After a direct conversation with Professor Lindsey, permission was given to proceed. AI then built the full stack correctly:

**Express backend built:**
- `GET /api/search?q=` — returns raw, messy mock catalog data (simulating a scraper response)
- `POST /api/saved-items` — receives raw product, normalizes it via `normalizeProduct()`, stores it, returns clean item
- `GET /api/saved-items` — returns normalized, persisted collection
- `PATCH /api/saved-items/:id` — updates any field
- `DELETE /api/saved-items/:id` — removes item

**Frontend updated for the API:**
- Skeleton loaders on collection mount
- Debounced search (350ms) with loading spinner
- Optimistic updates with automatic revert on failure
- Duplicate detection (409 response handled gracefully)
- API online/offline status indicator in topbar
- Error banner if the server isn't running
- All state still in one parent — the API replaced mock data, not the architecture

**Why this matters:**
The backend was built to demonstrate the normalization concept directly — raw, inconsistent product data goes in; a clean, structured schema comes out. This is the core of Entry 11's product intelligence direction, now implemented.

---

### Entry 20 — HTML Standalone Version

**Prompt direction given:**
Produce a clean, minimal, standalone HTML version of the Kuai frontend — no React, no build step, just a single file that opens in a browser. Keep it clean, easy to use, and include dark/light mode.

**What AI produced:**
A single `kuai.html` file replicating the full design system:
- All CSS custom property tokens from the React version
- Three-panel layout in vanilla HTML/CSS/JS
- Dark/light toggle with `localStorage` persistence
- Live connection to `localhost:3001` via a `BASE` constant
- API status indicator and offline banner
- Skeleton loaders, debounced search, optimistic updates

**What I kept:**
The full output. The HTML version was built for contexts where running a React dev server wasn't practical.

**Follow-up check:**
A subsequent question confirmed all fetch calls used the full absolute URL (`http://localhost:3001/api`) rather than relative paths. The file was already correct.

---

### Entry 21 — Using AI to Document the Project

**How AI was used:**
Claude was used to draft course documentation based on the actual work done in this conversation, including:
- AI Direction Log (this document) — first in Claude, then combined with the ChatGPT log
- Design and architecture decision summaries
- Plain-language explanations of implementation gaps
- Build prompts for directing further development

**Why this matters:**
This made Kuai easier to defend as a system and easier to build consistently. It also directly supports the course requirement to document how AI was used to shape the work.

---

## Summary

| Phase | AI Tool | AI Used For | Human Directed |
|---|---|---|---|
| Concept framing | ChatGPT | Product identity, brand voice, user persona | Product vision, tone, persona pressure-testing |
| Design intent | ChatGPT | Writing and structuring the DID | All content decisions, critique, revision |
| Data architecture | ChatGPT + Claude | Schema design, normalization concept, mock API scope | Schema fields, scope boundaries, professor guidance |
| System architecture | Claude | Three-panel layout, state model, component structure | Panel proportions, feature scope, course compliance |
| Visual system | Claude | Token generation, palette, typography pairing | Anti-retail brief, both mode palettes, font pairing |
| Feature builds | Claude | Browser, Detail View, Controller — all code | Feature specs, content hierarchy, interaction patterns |
| Backend build | Claude | Express server, normalization logic, endpoints | API scope, mock data shape, normalization requirement |
| Resistance moments | Claude | Documenting and enforcing design/course spec | Holding architecture and scope under pressure |
| HTML version | Claude | Full port to vanilla HTML/CSS/JS | Simplicity requirement, scope |
| Documentation | Claude | AI Direction Log, architecture summaries | All content, framing, decisions about what to include |

---

**The most important shift AI helped support was the transition of Kuai from a saved wishlist idea to a calm, structured, data-driven shopping-planning system that supports search, organization, editing, price comparison, and more deliberate purchasing decisions.**

AI did not replace the design process. It was used as a tool to help shape, clarify, and strengthen it.

---

*Document prepared for AI 201: Creative Computing with AI — Project 2 submission.*
