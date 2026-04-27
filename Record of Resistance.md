# Record of Resistance — Kuai
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

*Document prepared for AI 201: Creative Computing with AI — Project 2 submission.*
