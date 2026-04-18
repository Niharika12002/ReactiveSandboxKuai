# Kuai

## Design Intent Document

## Project Overview
Kuai is a centralized website where users can collect, organize, and manage products they want in one place. Instead of saving desired items across multiple tabs, screenshots, notes apps, shopping carts, and social media bookmarks, the website creates a single structured system for keeping track of what matters.

The project is designed as a three-part interface: a **Browser** for exploring saved items, a **Detail View** for inspecting one selected item more deeply, and a **Controller** for filtering, sorting, and updating the collection. This structure allows the website to behave like a real product system rather than a static page.

Kuai should feel purposeful, organized, and visually calm. It is not meant to behave like a shopping cart or checkout flow. Its role is to help users remember what they want, understand why they saved it, and make better decisions over time.

---

## Brand and Product Identity
Kuai is a centralized wishlist website designed to make saving and organizing desired products feel calm, intentional, and visually refined.

The name **Kuai** is intended to reference “sale” in Hawaiian, giving the product an immediate connection to shopping, discovery, and saved wants. Rather than feeling like a cart, a price tracker, or a cluttered shopping dashboard, Kuai should feel like a thoughtfully curated personal space for products the user wants to remember, revisit, and organize.

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
Kuai should feel like a quiet, curated shopping companion, not a loud retail interface.

---

## Domain and Reason for Choosing It
Kuai sits in a **consumer-productivity / shopping-organization** domain. It combines the emotional appeal of shopping and aspiration with the structural logic of an organizational tool.

This domain is a strong fit for the project because it naturally supports the required three-panel architecture:

- Users need a place to browse a collection of items
- They need a place to inspect one chosen item in detail
- They need a place to control how the collection is viewed and managed

That makes it an ideal system for demonstrating lifted state, single source of truth, and cross-panel interaction.

It is also a smart design choice because it feels relevant and portfolio-worthy. It can be styled as a real product, but its structure remains simple enough to keep the architecture clear.

---

## Core Problem and User Need
The core problem is **fragmentation**.

People often save desired products in too many disconnected places: open tabs, Instagram saves, screenshots, browser bookmarks, shopping carts, text messages, or notes apps. These methods are messy, temporary, and hard to manage. As a result, users lose track of what they saved, forget why they wanted something, and have no clean way to sort, prioritize, or revisit saved items intentionally.

The user need is not just “a place to save products.” The deeper need is:

- One reliable location for saved wants
- A structured way to review items later
- A way to prioritize or compare saved products
- A calmer and more intentional experience than scattered digital clutter

Kuai answers that need by turning saved products into an organized visual system. It helps the user move from casual saving to active decision-making.

---

## Target User
Kuai is designed primarily for people who shop online often and want a better way to keep track of what they are interested in.

### Primary Users
- Frequent online shoppers
- Moms managing personal wants, household items, or shopping lists
- People who save products often and want a cleaner way to organize them

### Online Behavior
- They shop online often
- They save items across multiple places
- They revisit products later before deciding what to purchase
- They need a calmer and more structured way to manage saved items

Kuai is for users who value convenience, clarity, and visual order. They do not want a complicated productivity tool or a shopping cart clone. They want a stress-free system that makes saved products easier to browse, understand, and prioritize.

---

## Core Design Goals

### Functional Goals
- Create one clear place where all saved items live
- Make saved items easy to browse and revisit
- Allow users to quickly inspect any selected item
- Give users simple controls to filter, sort, prioritize, and update items
- Make state changes visible across the system so the interface feels connected and trustworthy

### Experience Goals
- Reduce the mental clutter of scattered saved items
- Make the website feel calm, intentional, and visually ordered
- Give users a feeling of control over their wants and preferences
- Make the experience feel like a thoughtful product, not a generic list manager
- Balance usefulness with a refined visual sensibility

### Design Principle
The website should feel like a curated decision space, not a chaotic storage bin.

---

## Visual Direction
The visual direction of Kuai should support the feeling of a calm, curated, and efficient product system. The interface should be visually restrained, easy to scan, and elegant without becoming decorative.

### Visual Mood
Kuai should feel:
- Purposeful
- Organized
- Visually calm
- Minimal
- Chic
- Uncluttered

### Color Palette
The palette should use **muted neutrals**.

It should avoid:
- Loud saturation
- Aggressive retail red sale language
- Dark enterprise dashboard styling

It should support:
- Readability
- Calm visual hierarchy
- An elegant product-focused experience

### Typography
Kuai should use:
- **Serif headings**
- **Clean sans serif body text**

This contrast should help create a refined and classy tone while keeping the UI readable and functional.

### Spacing and Composition
The layout should use:
- Clear text hierarchy
- Consistent spacing
- Calm composition
- Readable grouping of information
- Enough white space to reduce clutter

### Shape Language and UI Feel
- Soft card edges, not sharp enterprise UI
- Image-led layout
- Restrained utility controls
- Polished but minimal component styling

### Visual Principle
Kuai should look like a curated product environment, not a generic shopping dashboard.

---

## Layout Specifications
Kuai should use a desktop-first three-panel layout that clearly reflects the architecture of the system.

### Panel Layout
- **Browser:** 35%
- **Detail View:** 45%
- **Controller:** 20%

### Layout Hierarchy
- The Browser should support scanning and quick comparison
- The Detail View should act as the main visual and informational focus
- The Controller should remain compact, clear, and utility-driven

### Spatial Intention
- The Browser should feel structured and easy to scan
- The Detail View should feel spacious and image-led
- The Controller should feel tidy and functional, without competing visually with the Detail View

### Layout Principle
The page should feel balanced, calm, and deliberate, with the Detail View carrying the most visual weight.

---

## System Architecture
Kuai follows the required **Browser → Detail → Controller** architecture.

State lives in **one parent component** and is passed to child components through props. Child components report actions upward through callback functions. No child component should manage its own duplicate version of the same data.

### Browser
The Browser is the collection panel.

Its role is to let the user scan and select saved items.

It should:
- Display the available saved items
- Reflect filters and sorting from shared state
- Visually indicate which item is currently selected
- Send the selected item’s ID back to the parent state when clicked

The Browser reads from shared state and initiates selection, but it does not own its own copy of the selected item.

### Detail View
The Detail View is the information panel.

Its role is to show rich information about the currently selected item.

It should:
- Display the selected item’s image, title, brand, category, price, notes, status, and priority
- Update automatically when the selected item changes
- Reflect any changes made through the Controller

The Detail View only reads from shared state. It reacts to change; it does not create separate state for the selected item.

### Controller
The Controller is the management panel.

Its role is to let the user change the system and update the selected item.

It should include controls such as:
- Search
- Category filter
- Sort dropdown
- Favorites-only toggle
- Purchased filter
- Priority selector
- Purchased toggle
- Remove item action

The Controller both reads and writes state. Its changes affect what appears in the Browser and what is reflected in the Detail View.

### Architectural Rule
There is one single source of truth. The selected item, filters, sorting, and saved-item collection should not be duplicated across components. The architecture must stay simple, using `useState` and props rather than Context, Redux, or unnecessary complexity.

---

## Shared State and Data Model
The shared state is the backbone of Kuai. It should be defined before visual polish because the system depends on all three panels staying synchronized through one single source of truth.

The Browser, Detail View, and Controller should not each store their own separate copies of the same data. Instead, the parent component should own the state and pass the necessary data downward through props, while child components send actions upward through callback functions.

Kuai’s shared state should manage:
- Which item is currently selected
- The full collection of saved items
- Search and filtering rules
- Sorting behavior
- Item-level metadata such as favorite status, purchased status, priority, and notes

### Proposed Parent State
```json
{
  "selectedItemId": "item-001",
  "savedItems": [
    {
      "id": "item-001",
      "name": "Sony WH-1000XM5 Headphones",
      "brand": "Sony",
      "category": "Tech",
      "price": 399,
      "currency": "USD",
      "image": "/images/sony-headphones.jpg",
      "productUrl": "https://example.com/item-001",
      "notes": "Good for travel and work",
      "priority": "high",
      "favorite": true,
      "purchased": false,
      "dateAdded": "2026-04-18"
    },
    {
      "id": "item-002",
      "name": "Leather Tote Bag",
      "brand": "Polène",
      "category": "Fashion",
      "price": 520,
      "currency": "USD",
      "image": "/images/leather-tote.jpg",
      "productUrl": "https://example.com/item-002",
      "notes": "Clean everyday work bag",
      "priority": "medium",
      "favorite": false,
      "purchased": false,
      "dateAdded": "2026-04-10"
    }
  ],
  "searchTerm": "",
  "filterCategory": "all",
  "showFavoritesOnly": false,
  "showPurchased": true,
  "sortBy": "dateAddedNewest"
}
