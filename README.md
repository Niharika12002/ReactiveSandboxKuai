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

*Document prepared for AI 201: Creative Computing with AI — Project 2 submission.*
