# Kuai

## Design Intent Document

## Project Overview
Kuai is a centralized shopping companion where users can collect, organize, compare, and manage products they want — all in one place. Instead of saving desired items across multiple tabs, screenshots, notes apps, shopping carts, and social media bookmarks, Kuai creates a single structured system for keeping track of what matters.

The product is built as a three-panel interface: a **Browser** for scanning and searching the saved collection, a **Detail View** for inspecting one selected item and making decisions about it, and a **Controller** for filtering, managing, and understanding the collection as a whole. This structure allows Kuai to behave like a real product system rather than a static page.

Kuai should feel purposeful, organized, and visually calm. It is not meant to behave like a shopping cart or checkout flow. Its role is to help users remember what they want, compare prices across retailers, prioritize what matters most, and make better buying decisions over time.

---

## Brand and Product Identity
Kuai is a shopping-planning companion designed to make saving, organizing, and comparing desired products feel calm, intentional, and visually refined.

The name **Kuai** references "sale" in Hawaiian, giving the product an immediate connection to shopping, discovery, and saved wants. Rather than feeling like a cart, a price tracker, or a cluttered shopping dashboard, Kuai should feel like a thoughtfully curated personal space for products the user wants to remember, revisit, and decide on.

### Brand Personality
- Stress-free
- Minimal
- Clutter-free
- Clean
- Chic

### Emotional Tone
- Minimal and chic
- Calm and stress-free
- Practical without feeling cold
- Elegant without feeling overly luxurious

### Brand Words
- Chic
- Minimal
- Classy
- Stress-free
- Practical and efficient

### Brand Principle
Kuai should feel like a quiet, curated shopping companion — not a loud retail interface.

### Tagline
**Save it. Compare it. Buy it right.**

---

## Domain and Reason for Choosing It
Kuai sits in a **consumer-productivity / shopping-organization** domain. It combines the emotional appeal of shopping and aspiration with the structural logic of an organizational tool.

This domain is a strong fit for the project because it naturally supports the required three-panel architecture:

- Users need a place to browse a collection of items
- They need a place to inspect one chosen item in detail
- They need a place to control how the collection is viewed and managed

That makes it an ideal system for demonstrating lifted state, single source of truth, and cross-panel interaction. It is also a smart design choice because it feels relevant and portfolio-worthy — it can be styled as a real product, but its structure remains clear enough to demonstrate the underlying architecture.

---

## Core Problem and User Need
The core problem is **fragmentation**.

People often save desired products in too many disconnected places: open tabs, Instagram saves, screenshots, browser bookmarks, shopping carts, text messages, and notes apps. These methods are messy, temporary, and hard to manage. As a result, users lose track of what they saved, forget why they wanted something, and have no clean way to sort, prioritize, compare prices, or revisit saved items intentionally.

The user need is not just "a place to save products." The deeper need is:

- One reliable location for saved wants
- A structured way to review and compare items later
- A way to prioritize, track, and act on saved products
- A calmer and more intentional experience than scattered digital clutter

Kuai answers that need by turning saved products into an organized visual system. It helps the user move from casual saving to active, informed decision-making.

---

## Target User
Kuai is designed primarily for people who shop online often and want a better way to keep track of what they are interested in.

### Primary Users
- Frequent online shoppers
- People managing household and personal shopping across multiple categories
- Users who save products often and want a cleaner, more organized way to act on them

### Primary Persona
**Lisa** — a 36-year-old mother of three who manages overlapping shopping lists across categories: household items, gifts, personal wants, and seasonal purchases. She experiences product overload and decision fatigue, shops under time pressure, and needs a calm, structured way to compare and organize saved items without mental clutter.

### Online Behavior
- Shops online frequently across multiple retailers
- Saves items across many disconnected places
- Revisits products before deciding what to purchase
- Values convenience, clarity, and visual order

Kuai is for users who want a stress-free system that makes saved products easier to browse, understand, prioritize, and buy at the right price.

---

## Core Design Goals

### Functional Goals
- Create one clear place where all saved items live
- Make saved items easy to browse, scan, and revisit
- Allow users to quickly inspect any selected item in detail
- Surface real price comparisons across retailers so users can find the best deal
- Give users simple controls to filter, prioritize, and manage items
- Make state changes visible across the entire system so the interface feels connected and trustworthy
- Persist the collection across sessions so the product behaves like a real tool

### Experience Goals
- Reduce the mental clutter of scattered saved items
- Make the product feel calm, intentional, and visually ordered
- Give users a feeling of control over their wants and priorities
- Make the experience feel like a thoughtful product, not a generic list manager
- Balance usefulness with a refined visual sensibility

### Design Principle
The product should feel like a curated decision space — not a chaotic storage bin.

---

## Visual Direction
The visual direction of Kuai supports the feeling of a calm, curated, and efficient product system. The interface is visually restrained, easy to scan, and elegant without becoming decorative.

### Visual Mood
Kuai should feel:
- Purposeful
- Organized
- Visually calm
- Minimal
- Chic
- Uncluttered

### Color Palette
The palette uses **warm muted neutrals** — cream, parchment, taupe, sage, and gold — applied through a full CSS custom property token system that supports both light and dark modes.

It avoids:
- Loud saturation
- Aggressive retail red or sale language
- Cold enterprise dashboard styling

Priority is communicated through a consistent three-color system: rust-red for High, gold for Medium, sage-green for Low. This color language runs through item cards, badges, priority buttons, the budget bar, and the Controller Panel — making urgency readable at a glance.

### Typography
Kuai uses a single-family type system: **Nunito Sans** at weights 800–900 for display and headings, 600–700 for UI labels, and 400 for body copy. Weight alone carries the entire typographic hierarchy — no mixed families. This keeps the interface fast to read and appropriate for a task-oriented shopping tool.

### Spacing and Composition
The layout uses:
- Clear text hierarchy
- Consistent spacing
- Calm composition
- Readable grouping of information
- Enough breathing room to reduce clutter

### Shape Language and UI Feel
- Soft card edges, not sharp enterprise UI
- Image-led Detail View layout
- Restrained utility controls in the Controller
- Polished but minimal component styling

### Visual Principle
Kuai should look like a curated product environment — not a generic shopping dashboard.

---

## Layout Specifications
Kuai uses a desktop-first three-panel layout that clearly reflects the architecture of the system, with full responsive support across TV/large, tablet, and mobile breakpoints.

### Panel Layout (Desktop)
- **Browser / Collection:** 25%
- **Detail View:** 55%
- **Controller:** 20%

The Detail View is the dominant panel because it is where users compare prices, set priority, add notes, and make purchasing decisions. The layout is designed to reflect that logic — not distribute space equally.

### Responsive Behavior

| Breakpoint | Layout |
|---|---|
| 1440px+ (TV / large) | All three panels scale up proportionally |
| 768–1199px (tablet) | Browser + Detail View visible; Controller slides in via FAB |
| Under 768px (mobile) | Single active panel with bottom tab navigation |

### Layout Hierarchy
- The Browser supports scanning, searching, and quick selection
- The Detail View acts as the main decision and action space
- The Controller remains compact and utility-driven, contextually revealing controls based on user state

### Layout Principle
The page should feel balanced, calm, and deliberate — with the Detail View carrying the most visual weight.

---

## System Architecture
Kuai follows a **Browser → Detail View → Controller** three-panel architecture built as a single standalone HTML file with vanilla JavaScript.

State lives in **one shared object** and all panels read from and write to that single source. No panel stores its own duplicate copy of the same data.

### Browser Panel
The Browser is the collection panel. Its role is to let the user search the catalog, scan saved items, and select one for detailed review.

It:
- Displays a real-time debounced catalog search with results the user can add to their collection
- Renders the saved collection, organized permanently by priority (High → Medium → Low) with color-coded cards
- Shows priority group dividers so urgency distribution is readable at a glance
- Visually indicates the currently selected item
- Displays search hint chips to guide new users

### Detail View Panel
The Detail View is the decision space. Its role is to show rich information about the selected item and let the user act on it.

It:
- Displays the product image, name, brand, and editable category
- Shows real price comparisons across retailers with the best price highlighted — cards with verified retailer URLs open directly to the product page in a new tab
- Displays a savings callout showing the delta between highest and lowest price
- Provides inline priority selection (Low / Medium / High)
- Supports Favorite and Mark Purchased toggles with state reflected across all panels
- Provides inline notes editing via a pencil icon affordance

### Controller Panel
The Controller is the management panel. Its role is to surface relevant controls based on what the user is currently doing — not all controls at all times.

It uses a three-state contextual model:
- **State 1 (no items):** Quiet empty prompt only
- **State 2 (items exist, nothing selected):** Stats strip + Filter and Sort accordions
- **State 3 (item selected):** Stats strip + selected item card + priority chips + remove button + Filter accordion

It also displays a **Budget Bar** — a segmented bar showing the total wishlist value broken down by priority, with purchased items tracked separately.

### Architectural Rule
There is one single source of truth. All state lives in one shared `state` object. Panels read from it and write to it through direct function calls. No duplicated state anywhere in the system.

---

## Shared State and Data Model
The shared state is the backbone of Kuai. The Browser, Detail View, and Controller stay synchronized through one single source of truth — a flat `state` object that owns the entire collection and all UI state.

### State Object
```javascript
let state = {
  items:         [],          // full saved collection
  selectedId:    null,        // currently selected item ID
  search:        '',          // active search query
  filterCat:     'All',       // active category filter
  favOnly:       false,       // favorites-only toggle
  showPurchased: false,       // show purchased items toggle
  notesEditing:  false,       // notes edit mode flag
};
```

### Item Schema
Each saved item in `state.items` follows this structure:

```javascript
{
  id:              'item-1745000000000',
  name:            'Sony WH-1000XM5 Headphones',
  brand:           'Sony',
  category:        'Tech',
  price:           248,
  image:           'https://...',
  priceComparison: [
    { retailer: 'Sony',     price: 399, url: 'https://...' },
    { retailer: 'Best Buy', price: 298, url: 'https://...' },
    { retailer: 'Amazon',   price: 248, url: 'https://...' },
  ],
  notes:       '',
  priority:    'medium',    // 'low' | 'medium' | 'high'
  favorite:    false,
  purchased:   false,
  dateAdded:   '2026-04-29T14:00:00.000Z',
}
```

### Persistence
State is persisted to `localStorage` under the key `kuai-v2` on every mutation. On page load, saved state is restored before the first render so the collection, selected item, filter settings, and preferences survive across sessions.

---

## Catalog
Kuai ships with a built-in catalog of 20 products across five categories — Tech, Beauty, Clothing, Home, and Toys — with real price comparison data verified against live retailer listings as of April 2026.

Products with verified retailer URLs allow users to click directly through to the product page from the Detail View's price comparison cards.

### Products with Live Retailer Links
- Sony WH-1000XM5 Headphones — Sony, Best Buy, Amazon
- Le Labo Santal 33 Perfume — Le Labo, Nordstrom
- Patagonia Nano Puff Jacket — Patagonia, REI, Backcountry
- LEGO Wildflower Bouquet — LEGO, Target, Amazon
- Kindle Paperwhite 16GB (2024) — Amazon, Best Buy, Target

---

## Live URL
[https://niharika12002.github.io/ReactiveSandboxKuai/kuai.html](https://niharika12002.github.io/ReactiveSandboxKuai/kuai.html)

---

# AI Direction Log

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

### Entry 22 — Typography Overhaul: Moving to a Shopping-Native Type System

**Prompt direction given:**
Remove the serif/sans pairing (Playfair Display + DM Sans) and replace with a typography system that better communicates a shopping context. Questioned whether a serif font was even needed for a functional tool.

**AI's assessment:**
Agreed that Playfair Display reads editorial/literary — not shopping. Recommended dropping the serif entirely and moving to full Nunito Sans at weight 800–900 for display and 600–700 for UI. Referenced Shopify, Depop, and ASOS as all-sans shopping UI precedents.

**What changed:**
Kuai moved to a single-family type system — Nunito Sans at multiple weights. Weight alone carries the entire typographic hierarchy. Product names at 900, section labels at 800, body at 400. The interface became more confident and less editorial.

---

### Entry 23 — UX Audit: Thinking Like a Kuai User

**Prompt direction given:**
Evaluate Kuai as a user would experience it, applying core UX principles — visibility of system status, recognition over recall, user control and freedom, error prevention.

**What AI identified and fixed:**
- Empty collection + no guidance = dead end for new users → added search hint chips (Sony, Apple, Beauty, Jacket, Home)
- Detail View showed "Nothing selected yet" while collection was also empty → updated copy to "Your wishlist is empty" with onboarding tips
- Controller showed filter/sort controls when collection was empty (noise with no signal) → controls now dim to 40% opacity with an explanatory message
- Notes had no cancel button → added Cancel alongside Save so users have a clear exit
- "Mark Purchased" gave no confirmation → toast now names the action explicitly ("Marked as purchased ✓") with reversibility implied

**Why this matters:**
This entry applied Nielsen's 10 Usability Heuristics and the C.R.A.P. design principles to the working interface. The changes were not cosmetic — they addressed real friction points discovered by walking through the product as a user.

---

### Entry 24 — Brand Reference Refinement: Elevating the Visual Direction

**Prompt direction given:**
Take inspiration from Apple, Glossier, Nike, Allbirds, Everlane, and McMaster-Carr without copying them. Use these references to elevate Kuai's existing visual direction — do not redesign from scratch.

**What each reference contributed:**
- **Apple** — spacious layout, premium product image framing, confident product naming
- **Glossier** — warm approachable empty states, friendly conversational copy
- **Nike** — priority buttons as full-width action tiles, stronger CTA hierarchy
- **Everlane** — price section header reads "Price at each retailer" — honest and specific; savings callout names the retailer
- **McMaster-Carr** — search clear button, catalog result count, labeled selects
- **Allbirds** — topbar pill shifts gold when items are saved, rewarding the user

**What changed:**
Detail image moved to 4:3 ratio with category badge as an overlay on the image. Product name increased to 26px weight 900. Price comparison uses a savings banner naming the exact retailer. Every interaction moment was tightened.

---

### Entry 25 — Real Product Images: Replacing Unsplash Placeholders

**Prompt direction given:**
Replace all 20 Unsplash placeholder images with real high-resolution product photography for each catalog item.

**Process:**
First set of images (3–5KB thumbnails) produced blurry results in the Detail View. AI diagnosed the issue — images were too small for the 4:3 display container which renders at ~790×593px on a standard laptop. Second set of images (32–189KB) at proper resolution were uploaded and embedded via raw GitHub URLs.

**What changed:**
Every product in the Kuai catalog now shows its actual product photo. Sony WH-1000XM5, Le Labo Santal 33, Patagonia jacket, Dyson V15, Polaroid camera, and all 16 others show professional brand photography.

**Technical decision:**
Images are served via `raw.githubusercontent.com` URLs rather than base64-embedded data URIs — this keeps the HTML file at 74KB instead of 107KB and preserves full image quality.

---

### Entry 26 — Responsive Design: TV, Desktop, Tablet, Mobile

**Prompt direction given:**
Make Kuai fully responsive so it works on any device — specifically for a classroom TV presentation as well as phones and tablets.

**What was built:**

| Breakpoint | Behaviour |
|---|---|
| 1440px+ (TV/large) | All sizes scale up proportionally — larger fonts, bigger touch targets, more padding |
| 1200–1439px (desktop) | Original three-panel layout unchanged |
| 768–1199px (tablet) | Two panels visible; Controls panel slides in via floating action button |
| Under 768px (mobile) | Single panel with bottom tab navigation — Collection · Detail · Controls |

**Mobile-specific interactions:**
- Tapping an item in the collection automatically switches to the Detail panel
- Bottom nav uses SVG icons with active state in gold
- Controls accessible via dedicated tab

---

### Entry 27 — GitHub Pages Deployment

**Prompt direction given:**
Deploy Kuai as a single live URL accessible from any device — no server, no backend, no localhost dependency.

**What was decided:**
Abandoned Railway (Express backend deployment) after persistent `502 Bad Gateway` errors caused by Railway's dynamic PORT requirements and the free plan expiring. The architecture was simplified back to a standalone `kuai.html` — no backend needed.

**Deployment method:**
GitHub Pages serving `kuai.html` directly from the main branch root.

**Live URL:**
`https://niharika12002.github.io/ReactiveSandboxKuai/kuai.html`

**Why this was the right call:**
The course requirement was always mock data + shared state — a backend was never required. Removing it eliminated all deployment complexity and made the URL permanent, free, and reliable.

---

### Entry 28 — Splash Screen and Micro-Interactions

**Prompt direction given:**
Add a splash screen to give Kuai a proper branded opening moment. Also add micro-interactions throughout the interface so users receive clear feedback for every action.

**What was built:**

**Splash screen:**
- `kuai` wordmark slides up on load
- Tagline fades in at 0.55s
- Gold line grows from left to right
- Holds for 2.6 seconds then fades out over 0.8s
- `position:fixed` at `z-index:99999` — covers the entire viewport

**Micro-interactions:**
- Favorite button: heart bounce animation on toggle
- Topbar pill: scales up when first item is saved
- Detail image: fades and scales in when switching between items
- Item cards: stagger-animate in from the left when list renders
- Notes box: flashes sage green to confirm a save
- Priority buttons: press-down effect on click

**Record of Resistance:**
An onboarding flow (3 slides between splash and app) was attempted multiple times but caused critical visual breakage — all screens rendered stacked in the DOM rather than as a proper overlay sequence. After three failed attempts, the onboarding was removed entirely. The splash-only flow was retained as it works correctly and gives Kuai a premium opening without adding technical risk.

---

### Entry 29 — Controller Panel Redesign: Contextual Progressive Disclosure

**Prompt direction given:**
The Controller Panel was identified as visually confusing — it showed all controls at all times regardless of context, making the panel feel like a static control dump. Directed AI to redesign it so it responds to what the user is actually doing.

**AI's design thinking:**
Diagnosed the panel as having no state awareness. Proposed a three-state model driven by user context rather than a static layout:

- **State 1 (no items):** Minimal centered prompt only. No controls, no clutter.
- **State 2 (items exist, nothing selected):** Stats strip + collapsed Filter and Sort accordions. Accordions closed by default — a gold dot indicator appears when a filter is active so the user knows without opening it.
- **State 3 (item selected):** Stats strip + selected item card in gold + priority chips + remove button. Filter/Sort still accessible below.

**What was built:**
- Stats strip moved to a compact 4-column row
- Filter and Sort rebuilt as accordion components with smooth max-height CSS transitions
- Priority control moved from a dropdown in Controller to inline chips — matching the Detail View's pill buttons for consistency
- Item name/brand displayed in a gold-bordered card to make context explicit
- Active filter dot indicator — shows without requiring the accordion to be open

**What I directed specifically:**
The category and priority dropdowns that existed in the old "Selected Item" section were removed. Priority is now the chips in the Controller. Category editing remains on the image badge in the Detail View. This eliminated duplication and simplified the panel.

**What changed:**
The Controller went from a panel that overwhelmed with options to one that surfaces only what is relevant to the user's current action. This was the most significant UX restructuring of Phase 2.

---

### Entry 30 — Topbar Redesign and Removal of the Saved Items Pill

**Prompt direction given:**
Three specific changes: remove the "1 saved" count pill from the topbar, redesign the topbar to feel like a real product, and replace "My Wishlist" with "Shopping Companion" in the center.

**AI's design rationale:**
The count pill was diagnosed as redundant — the same information already lived in the Controller's stats strip and the Browser's list header. Two sources of truth for the same number is one too many.

For the topbar redesign, the design was organized into three intentional zones:
- **Left** — "kuai" wordmark only, clean and undecorated
- **Center** — "Shopping Companion" as a quiet context label
- **Right** — Theme toggle redesigned as a text+icon pill ("☀ Light" / "☾ Dark") rather than an arbitrary circle button

**What was removed:**
The gold accent bar, the brand divider, the tagline below the logo, and the saved count pill. All were identified as decorative chrome adding noise without adding signal.

**What changed:**
The topbar became cleaner and more intentional. The brand presence is the wordmark alone. The center label tells users what product they're using without competing with the logo.

---

### Entry 31 — Priority-Coded Product Cards and Permanent Priority Sorting

**Prompt direction given:**
Two connected requests: change the entire product card color to reflect its priority so users can visually scan by urgency, and sort the My Collection panel with High priority always at the top and Low at the bottom.

**AI's initial approach (Record of Resistance #3):**
The first attempt used a 3px left border accent — a subtle signal. The designer rejected this immediately: the color was too hard to read and the cards looked bad. Directed AI to fill the entire card.

**What was rebuilt:**
- Full card tint using the existing `--rust-lt`, `--gold-lt`, `--sage-lt` light tokens — strong enough to scan immediately, never garish
- Price text color shifts to match priority: rust for High, gold-dark for Medium, sage-dark for Low — so nothing fights on the tinted background
- Selected state deepens to a solid colored border + ring shadow in the matching priority color
- Priority badge inside the card simplified — since the card already communicates priority, the badge was removed to reduce clutter; only purchased state (✓) is shown

**Priority sorting logic:**
High → Medium → Low is now the primary, permanent sort applied to `visibleItems()`. It is always on. The previous "By priority" sort option was removed from the Sort dropdown as it had become redundant.

**Priority group dividers added:**
Each priority group in the collection list gets a small colored dot + label header ("High Priority · 2") so the separation is explicit, not just implied by color.

**What changed:**
The Browser panel transformed from a flat list into a visually organized, urgency-coded collection. A user can scan 10 items and read the priority distribution without reading a single word.

---

### Entry 32 — Product Feature Audit: What Was Missing for a Published Website

**Prompt direction given:**
Asked AI to evaluate Kuai as an actual product that would be published — not just a course project — and identify what was fundamentally missing.

**What AI identified (in priority order):**

| Priority | Missing Feature | Reason |
|---|---|---|
| 🔴 Critical | Data persistence (localStorage) | Close the tab, lose everything |
| 🔴 Critical | Onboarding / first-run experience | New users land on an empty screen with no context |
| 🟠 Important | Budget tracking | No total cost visibility defeats the financial utility |
| 🟠 Important | Item sharing / export | Users can't share wishlists with partners or family |
| 🟠 Important | List-level organization | Users think in named lists, not one flat pile |
| 🟡 Expected | About / landing page | No explanation of what Kuai is for visitors |
| 🟡 Expected | Legal pages | Privacy policy + terms required for any published product |
| 🟡 Expected | Feedback / contact mechanism | No way to report bugs or reach the team |
| 🟡 Expected | Keyboard navigation & accessibility | Incomplete WCAG compliance |
| 🟢 Elevating | Price drop alerts | Fulfills the "Compare it" promise of the tagline |

**What was agreed:**
A build order was established: localStorage → budget tracking → onboarding → share/export. This entry formalized a product roadmap for Phase 2 completion.

---

### Entry 33 — localStorage Persistence

**Prompt direction given:**
Implement data persistence so the collection survives page refreshes and tab closes.

**What was built:**
- `saveState()` — serializes items, selectedId, filterCat, favOnly, showPurchased to `localStorage` under key `kuai-v1` (later bumped to `kuai-v2`)
- `loadState()` — safely deserializes on boot with a validity check (`Array.isArray(s.items)`) and silent failure if storage is unavailable or corrupted
- Every mutation (`addItem`, `updateItem`, `removeItem`) calls `saveState()` before `render()`
- Boot sync — filter dropdowns, sort select, and toggle switches are all synced to persisted values before first render so the UI never contradicts state

**Technical note on storage key versioning:**
The storage key was later bumped from `kuai-v1` to `kuai-v2` when a persistent bug was discovered — the old key had `showPurchased: true` saved from a previous session. Because `_p?.showPurchased ?? false` only falls back to `false` when the value is `null` or `undefined` (not when it's explicitly `true`), the stale value kept winning. Bumping the key clears all legacy stored state and forces a clean session.

**What changed:**
Kuai became a real product. Items, filters, selections, and preferences now survive across sessions. This was the single highest-impact change made in Phase 2.

---

### Entry 34 — Budget Bar

**Prompt direction given:**
Add a wishlist value tracker to make the financial dimension of the collection visible at a glance.

**What was built:**
A segmented budget bar in the Controller Panel, visible only when items exist:
- Total wishlist value displayed as a large number
- Segmented bar: rust for High priority unpurchased items, gold for Medium, sage for Low
- Purchased total shown separately as a secondary label ("$X bought")
- Color legend below the bar
- All segments animate width on update using CSS transitions

**Debug note — Record of Resistance #4:**
The budget bar CSS was accidentally stripped during a previous patch session when the modal removal and budget injection shared the same code block. The bar rendered as unstyled text in the bottom-right corner of the screen. The root cause was identified: `budget-bar-wrap` had no `display: none` rule in the stylesheet because the CSS never made it into the `<style>` block. Fixed by injecting the full CSS block before the closing `</style>` tag.

**What changed:**
Users can now see the total cost of their wishlist segmented by priority — giving immediate financial clarity and reinforcing the "decide when to buy" promise of Kuai's value proposition.

---

### Entry 35 — Removal of Custom Item Addition Feature

**Prompt direction given:**
After the custom item modal was built (allowing users to add items outside the catalog), the designer reviewed it and rejected it.

**Designer's reasoning:**
The catalog search already handles item addition cleanly — that is the designed interaction. A separate "Add item" button creates two paths to the same action and breaks the intentional flow Kuai was built around.

**What AI did:**
Accepted the direction immediately. Removed the modal HTML, CSS, JS event listeners, the button from the browser header, and all related utility functions. Verified zero remaining references in the file.

**Why this matters:**
This is a clean example of the designer holding the product vision against scope creep. The feature was technically complete and functional. It was removed not because it was broken but because it contradicted the product's interaction logic. AI executed the removal without pushback.

---

### Entry 36 — Interaction Polish: Six Targeted Fixes

**Prompt direction given:**
A set of six specific interaction problems identified through live testing:

1. All cards animate on any change — should only animate the card being changed
2. Purchased button shows two ticks when active
3. Price cards in Detail View look selected (visual confusion with active states)
4. Show Purchased toggle defaults to green/on — should default to off
5. Sort filter has no meaningful use — remove it entirely
6. Favorite button shows two overlapping hearts when active

**What was fixed:**

**Card animation:** `animateCards()` removed from the global `render()` wrapper entirely. Animation now only fires inside `updateItem()`, targeting the single card matching the changed item's `data-id`. All other cards remain still.

**Purchased double tick:** The label was `'✓ Purchased'` while the SVG checkmark was simultaneously rendering — two ticks. Label changed to `'Purchased'`, one SVG tick remains.

**Price cards:** Removed the sage green fill and box-shadow ring from `.price-card.best`. Best price is now indicated only by sage-colored amount text and the "✓ Best price" label. No selected-state confusion.

**Show Purchased toggle:** Default changed from `true` to `false` in state initialization. The `aria-checked="true"` hardcoded in HTML was also corrected to `false`. Storage key bumped to `kuai-v2` to clear any stale persisted `true` values.

**Sort removal:** `ctrlSort` select, `ctrl-sort-wrap` CSS, sort accordion HTML, `sortBy` state field, `saveState` reference, `visibleItems` sort logic, `initAccordion` call — all fully purged. Zero references remain.

**Heart fill:** `renderDetail` now sets `fill="currentColor"` on the heart SVG when favorited and `fill="none"` when not. The double-heart was caused by the SVG having both stroke and fill active simultaneously — toggling fill on/off resolved it.

**What changed:**
The interface became substantially more precise. Each interaction now produces exactly the feedback it should — no more, no less.

---

### Entry 37 — Retailer Links: Clickable Price Cards

**Prompt direction given:**
Users should be able to click any retailer card in the Detail View and go directly to that product on the retailer's website. Links provided for 5 products: Sony WH-1000XM5, Le Labo Santal 33, Patagonia Nano Puff, LEGO Wildflower Bouquet, Kindle Paperwhite 16GB.

**Prices were also verified and updated:**
Before wiring in links, current prices were checked against live search results. Several had changed since the catalog was originally built:

| Product | Change |
|---|---|
| Sony WH-1000XM5 | Amazon dropped from $369 → $248; Best Buy from $379 → $298 |
| Patagonia Nano Puff | Prices confirmed current |
| Kindle Paperwhite 16GB | Updated to 2024 model: Amazon $139, Best Buy $149; Target added as third retailer |
| Le Labo Santal 33 | Unchanged at $220 |
| LEGO Wildflower Bouquet | Unchanged |

**What was built:**
- A `url` field was added to the `priceComparison` array for each retailer entry
- `renderDetail` now conditionally renders price cards as `<a>` tags (when a URL exists) or `<div>` tags (when no URL) — no broken links for the 15 products without URLs
- Linked cards open in a new tab with `rel="noopener noreferrer"`
- CSS updated: linked cards lift subtly on hover (`translateY(-2px)` + shadow) to signal they're clickable; unlinked cards have no hover lift

**What changed:**
Kuai's price comparison became actionable. Users can now go directly from seeing the best price to buying it — fulfilling the core "Buy it right" promise of the product tagline.

---

## Updated Summary

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
| Typography | Claude | Font system evaluation and replacement | Final font decision, weight hierarchy |
| UX audit | Claude | Heuristic evaluation, empty state fixes, friction reduction | Which problems to fix, copy direction |
| Brand elevation | Claude | Visual refinement referencing Apple/Glossier/Nike/Everlane | Which references to apply, what to keep from original |
| Product images | Claude | Image embedding, URL management, quality diagnosis | Image sourcing, quality standards |
| Responsive design | Claude | Three-breakpoint layout system, mobile nav, tablet FAB | Breakpoint decisions, TV presentation requirement |
| Deployment | Claude | GitHub Pages setup, Railway debugging, architecture simplification | Platform choice, simplification decision |
| Splash + micro | Claude | Splash animation, micro-interaction system | Timing, which interactions to include, onboarding removal |
| Controller redesign | Claude | Three-state contextual panel, accordion filters, priority chips | State model, which controls to surface when |
| Topbar redesign | Claude | Three-zone layout, removal of pill, theme toggle redesign | Brand direction, copy, what to remove |
| Priority cards | Claude | Full card color fill, group dividers, sort logic | Color approach (rejected left border), fill decision |
| Product audit | Claude | Missing features analysis, build order recommendation | Which features to build, which to defer |
| localStorage | Claude | Persistence layer, boot sync, storage key versioning | Feature scope, key versioning decision |
| Budget bar | Claude | Segmented value bar, CSS animation, debug and fix | Feature design, what to display |
| Feature removal | Claude | Custom item modal — full removal | Decision to remove, rationale |
| Interaction polish | Claude | Six targeted fixes across animation, toggles, icons | Which bugs mattered, fix direction |
| Retailer links | Claude | Clickable price cards, URL field in catalog, conditional rendering | Link sourcing, price verification |
| Documentation | Claude | AI Direction Log updates | All content, framing, decisions about what to include |

---

*Document prepared for AI 201: Creative Computing with AI — Project 2 submission.*

---

# Record of Resistance

**Project:** Kuai — A Calm, Structured Shopping Planning Companion
**Course:** AI 201: Creative Computing with AI
**Role:** Lead Art Director & Creative Design Engineer (directing AI)
**AI Tools Used:** ChatGPT (concept and product framing), Claude (system design and implementation)

---

## Overview

This Record of Resistance documents the moments in Kuai's development where I rejected, questioned, or significantly revised AI output instead of accepting it at face value. These moments span both phases of the project — concept development in ChatGPT and the full build in Claude — and show how I used AI as a tool, not as an author. In each case, I evaluated the output against Kuai's product goals, user needs, and design quality bar, then redirected the work to better match my own intent for the project.

---

## Resistance Moment 1 — Rejecting Kuai as a Simple Wishlist App

**What AI produced:**
Early in the ChatGPT phase, AI supported Kuai as a centralized wishlist where users could collect and manage saved products. That direction gave the project an initial structure, but it still behaved conceptually like a saved-items list — a place to store things rather than a place to think through them.

**Why I rejected or questioned it:**
A basic wishlist framing was too weak and too generic. It did not fully reflect the kind of product I wanted Kuai to become, and it was not strong enough to communicate a deeper value beyond "store items in one place." I wanted Kuai to feel more intelligent, more intentional, and more useful in real shopping situations.

**What I changed or did instead:**
I pushed Kuai away from being a saved wishlist and toward being a shopping-planning and data-driven product intelligence tool. I reframed the product around reducing overwhelm, supporting better decisions, comparing products and prices, and helping users shop with less stress and more clarity. I later pushed this further by directing a structured product flow: user adds an item → Kuai fetches product data → messy data gets normalized into a product schema → the app filters and searches structured data.

**How the final decision improved Kuai:**
This made Kuai much more compelling as a product. It stopped feeling like a simple list manager and started feeling like a real shopping system with a stronger reason to exist. It also gave the product a clearer long-term direction and a defensible concept.

**What this shows about my role as designer:**
I was not passively accepting AI's first framing. I recognized that the concept needed to be stronger and deliberately pushed it toward a smarter, more defensible product vision.

---

## Resistance Moment 2 — Rejecting Passive Detail View Output in Favor of a Decision-Oriented Space

**What AI produced:**
The early Detail View direction mainly presented information about the selected item. It included useful content, but it was still too passive — more of a display panel than a working space.

**Why I rejected or questioned it:**
A passive detail panel was not enough for Kuai. Since the app is meant to reduce mental load and support real shopping decisions, the Detail View needed to do more than show information. It needed to support editing, organization, and comparison in a way that felt clear and intentional. A read-only panel undermined the product's core purpose.

**What I changed or did instead:**
I significantly revised the Detail View by directing AI to support: editable notes with a visible pencil icon as the edit affordance, editable category moved higher in the information hierarchy, favorite and purchased actions kept in place, date saved removed or demoted, a clearer content hierarchy overall, and a dedicated price comparison section. I explicitly established the Detail View as the main decision space of Kuai — not just the information space.

**How the final decision improved Kuai:**
This turned the Detail View into a working space rather than a passive display. It made the app more useful, more intuitive, and more aligned with the stress-reducing shopping goal. It also improved the product's overall sophistication and elevated it above a typical saved-items interface.

**What this shows about my role as designer:**
I actively shaped interaction design, not just visual style. I recognized when AI output was too static and pushed the product toward more meaningful, user-centered behavior.

---

## Resistance Moment 3 — Rejecting the Panel Balance and Establishing the Detail View as Dominant

**What AI produced:**
Earlier layout directions placed the Browser and Detail View at closer proportional weight. The Browser still carried too much visual presence relative to the role the Detail View needed to play.

**Why I rejected or questioned it:**
That balance no longer made sense once Kuai became more than a list app. If the Detail View is where users compare, edit, and make decisions, it needs to visually and functionally dominate the interface. An equalized layout would weaken the most important panel in the product.

**What I changed or did instead:**
I revised the layout proportions explicitly: Browser / Collection Panel at 25%, Detail View at 55%, Controller Panel at 20%. I also clarified that the Browser should mainly support scanning, searching, and selection, while the Detail View becomes the central decision-making space.

**How the final decision improved Kuai:**
The visual hierarchy now matches the product logic. The most important panel gets the most space, which improves clarity and makes the app feel more intentional. It also makes Kuai feel less like a dashboard and more like a focused product experience.

**What this shows about my role as designer:**
I was not accepting AI's layout suggestions by default. I thought critically about how the interface should behave and rebalanced the layout to better support the user's actual decision flow.

---

## Resistance Moment 4 — Rejecting a Fake Search Experience and Demanding Real Behavior

**What AI produced:**
At one point, Kuai had a search bar that accepted input, but nothing appeared when the user typed. The UI had the appearance of search, but not the actual behavior of search. It was a cosmetic element, not a functional one.

**Why I rejected or questioned it:**
A search bar that only updates text without returning results is misleading and incomplete. Since search is central to Kuai's value — the primary way a user adds products to their collection — this was a major product gap. The feature looked like it existed, but functionally it did not.

**What I changed or did instead:**
I pushed for the full search flow: user types in the search field → search term updates in shared state → matching results from a mock catalog appear in real time → user can add a result directly into the saved collection → Browser and Detail View update through shared state. I directed the build to use a mock product catalog instead of leaving the input as a dead field.

**How the final decision improved Kuai:**
This made the Browser panel active and useful. It turned search from a cosmetic element into a real part of the product experience and brought Kuai closer to behaving like a true shopping-planning tool rather than a static shell.

**What this shows about my role as designer:**
I was paying attention to whether the app actually worked, not just whether it looked plausible. I identified the gap between interface and functionality and redirected the build toward real interaction logic.

---

## Resistance Moment 5 — Rejecting the Alternate Codebase

**What AI produced:**
An alternate version of the Kuai codebase was submitted for integration. It used a tab-based layout with two views — "search" and "collection" — instead of the three-panel Browser → Detail View → Controller structure. State was split across async API calls via an external `kuaiApi` object rather than managed in one place. There was no Detail View and no Controller panel. The visual system used inline styles and generic sans-serif typography with no typographic hierarchy, no price comparison table, no notes editing, no priority system, and no filter or sort controls.

**Why I rejected or questioned it:**
This build violated the core architecture of Kuai on multiple levels. The three-panel structure at 25/55/20 was not a stylistic preference — it was the product's defining interaction model. A tab layout collapses that structure entirely. Splitting state across an external API object also created competing sources of truth, which is exactly the React anti-pattern the course brief is designed to teach students to avoid. The visual system failed every standard set by the Design Intent Document.

**What I changed or did instead:**
I refused integration of the alternate codebase and kept the original build intact. The three-panel layout, single-source-of-truth state model, and full visual system were preserved as specified.

**How the final decision improved Kuai:**
Kuai remained a coherent product. The Browser → Detail View → Controller structure is what makes Kuai feel like a planning tool rather than a generic shopping list. Allowing the alternate codebase to replace it would have undone every meaningful architectural and visual decision made up to that point. The rejection protected the product.

**What this shows about my role as designer:**
I knew exactly what I had built and why it mattered. I did not default to accepting what was handed to me simply because it was functional. A designer's job is to evaluate every proposed change against the product's vision and push back when something falls short — regardless of whether the output "works" on a technical level.

---

## Resistance Moment 6 — Redirecting the Live API Integration Refusal

**What AI produced:**
When I asked to integrate a live Express backend at `localhost:3001`, the AI initially refused. It cited two reasons: the course brief appeared to prohibit live API integrations at the P2 stage, and the async fetch pattern using a `kuaiApi` module would create competing sources of truth against React state.

**Why I rejected or questioned it:**
I knew the course brief's constraints but I also knew my own project scope and what I had directly confirmed with Professor Lindsey. The AI was applying a blanket interpretation of the brief that did not account for the specific context of my project. I pushed back: the integration had been approved.

**What I changed or did instead:**
After confirming the professor's permission, AI proceeded with the integration — wiring the React SPA to the Express backend using a clean fetch pattern with debounced search, optimistic updates, and skeleton loaders. A status indicator was also added so users could see when the API was unavailable.

**How the final decision improved Kuai:**
The live backend transformed Kuai from a static mock-data demo into a functioning shopping-planning tool. Items could actually be saved, edited, removed, and retrieved. The product could demonstrate real data persistence, which is central to what Kuai is supposed to do.

**What this shows about my role as designer:**
I did not accept the AI's refusal as final. I understood the difference between a rule applied correctly and a rule misapplied to my context. The designer is responsible for knowing the project's actual scope — and for holding that ground when an AI tool gets it wrong.

---

## Resistance Moment 7 — Catching the `<form>` Element in the Controller Panel

**What AI produced:**
When building the Controller panel, the AI implemented the category editing feature using an HTML `<form>` element with a submit handler. The form was styled to look like an inline editor — but underneath it was a native HTML form that would trigger page reload on Enter and introduce unintended submit behavior.

**Why I rejected or questioned it:**
The course brief is explicit: never use HTML `<form>` tags in React artifacts. A form inside a React component introduces browser-native behavior — submit events, default page reload — that conflicts with React's controlled state model. The AI had produced something that looked correct visually but was architecturally wrong and a direct course brief violation.

**What I changed or did instead:**
I directed the AI to replace the form with an `onChange` and `onBlur` event pattern on a plain input element — the correct React approach. The input reads from state on every keystroke via `onChange` and commits the edit on blur via `onBlur`. No form, no submit handler.

**How the final decision improved Kuai:**
The category editor behaved as intended — smooth inline editing without unexpected browser behavior. The React state model stayed clean, and the interaction pattern felt natural for an inline editor.

**What this shows about my role as designer:**
A strong design lead reviews not just what something looks like but how it's built. I caught a technical violation that was invisible in the rendered UI but would have caused problems in use and risked the course rubric. Knowing the rules well enough to enforce them is part of the job.

---

## Resistance Moment 8 — Specifying the Palette as Anti-Retail

**What AI produced:**
In the initial build, the AI defaulted to a palette that felt closer to a premium retail interface: cooler neutrals, sharper contrast, crisp whites and dark navies. It looked polished but it felt like a store, not a calm personal companion.

**Why I rejected or questioned it:**
Kuai's brand identity was explicitly defined as stress-free, minimal, chic, and editorial — not commercial. The difference matters. Retail interfaces are designed to drive urgency and conversion. Kuai is designed to slow the decision down and help users think. A retail palette directly contradicts the product's purpose.

**What I changed or did instead:**
I directed the palette explicitly: warm muted cream for the background, taupe for panels, soft sage for active states, rust for accents, and an espresso-toned dark mode. No cool neutrals, no crisp whites, no sharp high-contrast. The CSS token system was rewritten around this direction.

**How the final decision improved Kuai:**
The final palette made Kuai feel like an editorial object rather than a shopping interface. The warmth of the cream and taupe, combined with the muted sage and gold accents, gave the product a visual identity that supported the calm planning tone. Users could sit with the product without feeling pushed.

**What this shows about my role as designer:**
I could articulate not just what the palette should look like but what it should feel like and why that feeling mattered for the product's purpose. Connecting visual decisions to product logic is what separates design leadership from aesthetic preference.

---

## Resistance Moment 9 — Rejecting the Serif Font for a Shopping-First Type System

**What AI produced:**
The initial typography system paired Playfair Display (an italic editorial serif) with DM Sans for body copy. The combination was elegant and visually refined but read as literary rather than transactional.

**Why I rejected or questioned it:**
Kuai is a task-oriented shopping tool. Users are scanning prices, comparing items, and making decisions quickly. Serif fonts slow reading in functional UI contexts. When I evaluated the interface against real shopping apps — ASOS, Farfetch, Shopbop, Allbirds — every one of them used an all-sans type system. Playfair Display was making Kuai feel like a magazine, not a product.

**What I changed or did instead:**
I directed the AI to drop the serif entirely and move to a single-family system: Nunito Sans at weight 800–900 for display and 600–700 for UI labels. I also directed that prices, stats, and figures use weight 800 so they read as data, not decoration. Typography hierarchy is now carried entirely by weight — not by mixing families.

**How the final decision improved Kuai:**
The interface became faster to read, more consistent, and more appropriate for a tool. The type system now supports the product's function rather than working against it.

**What this shows about my role as designer:**
I evaluated the typography against user behavior, not just visual taste. Knowing when a design choice is beautiful but wrong for the context is a core design skill.

---

## Resistance Moment 10 — Rejecting the Onboarding Overlay Approach

**What AI produced:**
After directing AI to add a splash screen and onboarding flow, multiple implementations were attempted where the onboarding slides appeared as overlays on top of the rendered app — using `position: fixed` containers with `backdrop-filter` blur, floating cards, and stacked absolutely-positioned screens.

**Why I rejected or questioned it:**
Every implementation produced the same critical visual failure: when "Get Started" was clicked, the app rendered incorrectly with all panels stacked vertically instead of in the three-column layout. The onboarding was actively breaking the product's core UI. After three separate attempts using different technical approaches — CSS class toggling, inline style overrides, and a full DOM rebuild — the same failure recurred each time.

**What I changed or did instead:**
I made the call to remove the onboarding entirely rather than continue iterating on a component that was destabilizing the interface. The splash screen was retained because it works correctly and gives Kuai a premium opening moment without any layout risk. The onboarding content — search, save, compare — is communicated through the empty state design and the search hint chips already built into the Browser panel.

**How the final decision improved Kuai:**
The interface remained stable. A broken onboarding is worse than no onboarding — it damages first impressions instead of improving them. The decision to cut it protected the product's quality.

**What this shows about my role as designer:**
Knowing when to cut a feature is as important as knowing how to build one. I held the quality bar and made a clear product decision rather than continuing to iterate on something that was causing more harm than good.

---

## Resistance Moment 11 — Rejecting Over-Engineered Deployment for a Simpler Live URL

**What AI produced:**
The first deployment approach used Railway to host the Express backend, with GitHub Pages serving the HTML frontend. This required maintaining two separate services, two URLs, environment variables, and a live server that could go offline, run out of credits, or fail to redeploy.

**Why I rejected or questioned it:**
The Railway deployment introduced persistent `502 Bad Gateway` errors, dynamic PORT configuration issues, and eventually became unavailable when the free plan expired. More fundamentally, the backend was serving mock data — there was no real database, no authentication, no user-specific persistence. Running a server to serve hardcoded JSON was architectural overengineering with no product benefit.

**What I changed or did instead:**
I directed the removal of the Express backend entirely. All product logic — catalog search, saved items management, filtering, sorting — was moved into the standalone `kuai.html` file. The single file was deployed to GitHub Pages, giving Kuai a permanent, free, always-on URL with no dependencies.

**How the final decision improved Kuai:**
The live link works reliably from any device. There is nothing to start, nothing to maintain, and nothing that can go offline. The product is more accessible and easier to demonstrate — which matters for a classroom presentation.

**What this shows about my role as designer:**
I evaluated the deployment against the actual requirements of the product and made a pragmatic call. Complexity that serves no user need is a design problem, not just a technical one.

---

## Resistance Moment 12 — Rejecting the Controller Panel as a Static Control Dump

**What AI produced:**
The original Controller Panel displayed all controls at all times regardless of what the user was doing — stats, filter dropdowns, sort dropdown, toggles, and item management controls were all permanently visible in a flat vertical stack.

**Why I rejected or questioned it:**
A panel that shows everything always is not a panel — it's a settings menu. Kuai's Controller is supposed to respond to the user's context. Showing filter controls when nothing is saved, or showing priority chips when no item is selected, creates noise with no signal. The panel was visually overwhelming and its cognitive load was working against Kuai's calm, stress-reducing identity.

**What I changed or did instead:**
I directed a full redesign around a three-state contextual model: State 1 (no items) shows only a quiet empty prompt. State 2 (items exist, nothing selected) shows the stats strip and collapsed filter and sort accordions. State 3 (item selected) surfaces the selected item card, priority chips, and remove button. Filter and sort remain accessible beneath but don't compete for attention. I also directed that the priority chips replace the old priority dropdown — matching the Detail View's interaction pattern and eliminating duplication.

**How the final decision improved Kuai:**
The Controller Panel became responsive and intelligent rather than static. It surfaces only what is relevant to what the user is currently doing, which directly supports the product's stress-reducing purpose. The three-state model is now one of the most intentional UX decisions in the product.

**What this shows about my role as designer:**
I evaluated the panel not by whether it contained the right controls but by whether it showed those controls at the right moment. Contextual UI is a higher standard than completeness, and I held that standard.

---

## Resistance Moment 13 — Rejecting the Left-Border Priority Signal in Favor of Full Card Color

**What AI produced:**
When asked to make item cards visually communicate priority, the AI implemented a 3px colored left border accent — a subtle design pattern where a thin rail of color runs down the left edge of each card. High priority got a rust-red rail, medium got gold, low got sage.

**Why I rejected or questioned it:**
The cards looked bad. The left border was too thin and too easy to miss — the color was difficult to read at a glance, especially for items further down the list. The whole point of priority coding is to let the user scan the collection and immediately understand urgency distribution without reading individual labels. A 3px line does not achieve that. It was a timid solution to a problem that needed a confident one.

**What I changed or did instead:**
I directed full card color fill: each card takes on the full tinted background of its priority color using the existing light tokens — `--rust-lt` for High, `--gold-lt` for Medium, `--sage-lt` for Low. The price text also shifts to match the priority color so nothing fights on the tinted background. Selected state deepens to a solid border with a ring shadow in the matching priority color. I also directed the removal of the priority badge from inside the card — since the card itself already communicates priority, the badge became redundant clutter.

**How the final decision improved Kuai:**
The Browser panel became a color-coded, urgency-readable list that communicates priority at a glance without requiring the user to read a single word. A user can scan ten items and understand the priority distribution immediately — which is exactly what a shopping-planning tool should do.

**What this shows about my role as designer:**
I evaluated the solution against the actual user behavior it was supposed to support, not just whether it was technically correct. When it failed that test, I pushed for a more committed execution of the idea.

---

## Resistance Moment 14 — Removing the Custom Item Addition Feature

**What AI produced:**
As part of a product completeness audit, AI identified the inability to add items outside the fixed catalog as a critical gap and built a solution: a modal triggered by an "＋ Add item" button in the Browser panel header. The modal let users enter a name, brand, price, category, priority, and optional URL to create a custom item.

**Why I rejected or questioned it:**
The catalog search is the designed entry point for adding items to Kuai. It is intentional — users discover products through search, which is the natural shopping behavior Kuai is built around. A separate "Add item" button creates two parallel paths to the same action, which fragments the interaction model and contradicts the product's logic. The modal was technically complete and functional. I rejected it not because it was broken but because it was wrong for the product.

**What I changed or did instead:**
I directed the complete removal of the feature: the modal HTML, CSS, JavaScript event listeners, and the button in the browser header were all stripped. I verified zero remaining references in the file before closing the session.

**How the final decision improved Kuai:**
The Browser panel stayed clean and the interaction model stayed coherent. There is one way to add items — search — and it is the right way. Removing the feature protected Kuai's intentional design rather than layering complexity on top of it.

**What this shows about my role as designer:**
The hardest resistance is rejecting something that works. Cutting a completed, functional feature requires confidence in the product vision and the willingness to prioritize coherence over completeness. That is a design decision, not a technical one.

---

## Resistance Moment 15 — Correcting Six Interaction Quality Failures After Live Testing

**What AI produced:**
After a round of live testing, six specific interaction problems were identified in the built interface: all item cards animated simultaneously whenever any single card changed; the purchased button displayed two ticks when active; the price comparison cards in the Detail View looked visually selected due to the best-price styling; the Show Purchased toggle defaulted to green/on when it should default to grey/off; the sort filter existed in the Controller but served no meaningful purpose; and the favorite button showed two overlapping hearts when toggled on.

**Why I rejected or questioned it:**
None of these were acceptable in a product intended to feel polished and intentional. The double tick and double heart were visual bugs that undermined the UI's credibility. The card animation firing on all cards for a change to one card was distracting and disproportionate — a user changing a priority should not trigger a cascade of motion across the entire list. The price card styling confusion was a direct readability failure. The toggle default contradicted the intended behavior. The sort filter was dead weight.

**What I changed or did instead:**
I directed six separate targeted fixes: the card animation was moved from the global `render()` wrapper into `updateItem()` specifically, targeting only the card with the matching `data-id`; the purchased label was changed from `'✓ Purchased'` to `'Purchased'` to eliminate the duplicate tick; the best-price card was restyled to remove green fill and ring shadow, leaving only the colored amount text and label as signals; the Show Purchased default was hardcoded to `false` and the storage key was bumped to clear stale persisted state; the sort accordion, select, event listener, state field, and `visibleItems` logic were fully purged; and the favorite heart SVG was updated to set `fill="currentColor"` when favorited and `fill="none"` when not, resolving the overlap.

**How the final decision improved Kuai:**
Each interaction became precise. The interface now responds exactly as expected — no more, no less — which is the standard a finished product should meet.

**What this shows about my role as designer:**
Interaction quality requires live testing, not just code review. I caught these failures by using the product, not by reading the implementation. Design leadership includes the responsibility to test, identify, and hold a quality bar — and to enumerate problems specifically enough that they can be fixed correctly.

---

## Resistance Moment 16 — Deferring Named Shopping Lists to Protect Submission Stability

**What AI produced:**
When named shopping lists were proposed as a feature — allowing users to organize items into separate lists such as Wishlist, Gifts, Home, and For Me — AI assessed it as a strong product direction and outlined a minimal implementation: a list switcher in the Browser panel header, preset list names, and a list assignment field on each item.

**Why I rejected or questioned it:**
The feature was architecturally significant. Adding named lists would require restructuring the core `items` array into a nested `lists` structure, which would touch `visibleItems()`, `renderBrowser()`, `renderController()`, `renderStats()`, the budget bar, localStorage, and every system that reads from state. The risk of introducing bugs across the entire product — hours before the submission deadline — was not acceptable. The product was already complete, stable, and well-documented.

**What I changed or did instead:**
I made the call to defer the feature entirely. The product was submitted as-is. Named lists were acknowledged as the right next feature for a real product roadmap but the wrong feature to introduce under deadline pressure.

**How the final decision improved Kuai:**
The product remained stable and submission-ready. A broken or half-implemented feature introduced at the last moment would have been worse than the absence of the feature entirely.

**What this shows about my role as designer:**
Scope discipline is a design skill. Knowing when a product is done — and holding that line against the temptation to keep adding — is as important as knowing what to build. I evaluated the risk against the benefit and made a clear, defensible call.

---

*Document prepared for AI 201: Creative Computing with AI — Project 2 submission.*

---

*Document prepared for AI 201: Creative Computing with AI — Project 2 submission.*
