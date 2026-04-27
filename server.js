const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// Serve the frontend from the same server so the app is opened via http://localhost:3001
app.use(express.static(__dirname));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "kuai.html"));
});

// ─── MOCK CATALOG ─────────────────────────────────────────────────────────────
// Raw, messy data as it might come from a scraper or external source.
// Inconsistent fields, mixed naming — normalization happens on save.

const MOCK_CATALOG = [
  {
    title: "Sony WH-1000XM5 Wireless Headphones",
    description: "Industry-leading noise canceling with Auto NC Optimizer. Up to 30hrs battery.",
    img_url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",
    brand_name: "Sony",
    product_type: "Tech",
    raw_price: "$399.99",
    retailers: [
      { store: "Sony", amt: 399, link: "https://sony.com" },
      { store: "Best Buy", amt: 379, link: "https://bestbuy.com" },
      { store: "Amazon", amt: 369, link: "https://amazon.com" },
    ]
  },
  {
    title: "Le Labo Santal 33 Eau de Parfum 50ml",
    description: "Cedarwood, cardamom, iris and violet accord. A cult classic.",
    img_url: "https://images.unsplash.com/photo-1541643600914-78b084683702?w=600&q=80",
    brand_name: "Le Labo",
    product_type: "Beauty",
    raw_price: "$220",
    retailers: [
      { store: "Le Labo", amt: 220, link: "https://lelabofragrances.com" },
      { store: "Nordstrom", amt: 220, link: "https://nordstrom.com" },
    ]
  },
  {
    title: "Patagonia Nano Puff Jacket - Women's",
    description: "PrimaLoft Gold insulation. Packable, windproof, and weather-resistant.",
    img_url: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=600&q=80",
    brand_name: "Patagonia",
    product_type: "Clothing",
    raw_price: "229.00",
    retailers: [
      { store: "Patagonia", amt: 229, link: "https://patagonia.com" },
      { store: "REI", amt: 215, link: "https://rei.com" },
      { store: "Backcountry", amt: 199, link: "https://backcountry.com" },
    ]
  },
  {
    title: "LEGO Icons Wildflower Bouquet 10313",
    description: "Build a beautiful wildflower bouquet with 939 pieces. Perfect display piece.",
    img_url: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&q=80",
    brand_name: "LEGO",
    product_type: "Toys",
    raw_price: "$59.99",
    retailers: [
      { store: "LEGO", amt: 59, link: "https://lego.com" },
      { store: "Target", amt: 55, link: "https://target.com" },
      { store: "Amazon", amt: 52, link: "https://amazon.com" },
    ]
  },
  {
    title: "Kindle Paperwhite 16GB Waterproof",
    description: "300 ppi glare-free display. Weeks of battery. IPX8 waterproof.",
    img_url: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&q=80",
    brand_name: "Amazon",
    product_type: "Tech",
    raw_price: "159.99",
    retailers: [
      { store: "Amazon", amt: 159, link: "https://amazon.com" },
      { store: "Best Buy", amt: 169, link: "https://bestbuy.com" },
    ]
  },
  {
    title: "Aesop Resurrection Aromatique Hand Rinse",
    description: "Gentle hand rinse with Mandarin Rind, Rosemary Leaf, and Cedar Atlas.",
    img_url: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&q=80",
    brand_name: "Aesop",
    product_type: "Beauty",
    raw_price: "$38",
    retailers: [
      { store: "Aesop", amt: 38, link: "https://aesop.com" },
      { store: "Nordstrom", amt: 38, link: "https://nordstrom.com" },
    ]
  },
  {
    title: "Allbirds Men's Tree Runners",
    description: "Lightweight eucalyptus tree fiber upper. Machine washable.",
    img_url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
    brand_name: "Allbirds",
    product_type: "Clothing",
    raw_price: "$110.00",
    retailers: [
      { store: "Allbirds", amt: 110, link: "https://allbirds.com" },
      { store: "Amazon", amt: 99, link: "https://amazon.com" },
    ]
  },
  {
    title: "Dyson V15 Detect Absolute Vacuum",
    description: "Laser reveals hidden dust. Automatically optimizes suction.",
    img_url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    brand_name: "Dyson",
    product_type: "Home",
    raw_price: "$749",
    retailers: [
      { store: "Dyson", amt: 749, link: "https://dyson.com" },
      { store: "Best Buy", amt: 699, link: "https://bestbuy.com" },
      { store: "Target", amt: 719, link: "https://target.com" },
    ]
  },
  {
    title: "Polaroid Now Analog Instant Camera",
    description: "Autofocus i-Type camera with double exposure mode and self-timer.",
    img_url: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&q=80",
    brand_name: "Polaroid",
    product_type: "Tech",
    raw_price: "$139.99",
    retailers: [
      { store: "Polaroid", amt: 139, link: "https://polaroid.com" },
      { store: "Urban Outfitters", amt: 129, link: "https://urbanoutfitters.com" },
      { store: "Amazon", amt: 119, link: "https://amazon.com" },
    ]
  },
  {
    title: "Fjällräven Kånken Classic Backpack",
    description: "Vinylon F fabric, ergonomic shoulder straps. Swedish design since 1978.",
    img_url: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80",
    brand_name: "Fjällräven",
    product_type: "Clothing",
    raw_price: "90.00",
    retailers: [
      { store: "Fjällräven", amt: 90, link: "https://fjallraven.com" },
      { store: "REI", amt: 85, link: "https://rei.com" },
      { store: "Amazon", amt: 80, link: "https://amazon.com" },
    ]
  },
  {
    title: "Nespresso Vertuo Pop Coffee Machine",
    description: "Centrifusion technology. 5 cup sizes. Compact and colorful.",
    img_url: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80",
    brand_name: "Nespresso",
    product_type: "Home",
    raw_price: "$99",
    retailers: [
      { store: "Nespresso", amt: 99, link: "https://nespresso.com" },
      { store: "Williams-Sonoma", amt: 99, link: "https://williams-sonoma.com" },
      { store: "Amazon", amt: 89, link: "https://amazon.com" },
    ]
  },
  {
    title: "Glossier You Eau de Parfum",
    description: "A warm, skin-scent fragrance with ambrette, ambrofix, and iris.",
    img_url: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600&q=80",
    brand_name: "Glossier",
    product_type: "Beauty",
    raw_price: "$65",
    retailers: [
      { store: "Glossier", amt: 65, link: "https://glossier.com" },
      { store: "Sephora", amt: 65, link: "https://sephora.com" },
    ]
  },
];

// ─── NORMALIZATION ────────────────────────────────────────────────────────────
// Backend responsibility: accept raw/messy product data, return a clean,
// predictable shape the frontend can trust unconditionally.

function normalizeProduct(raw, id) {
  const rawPrice = String(raw.raw_price || raw.price || "0");
  const parsedPrice = parseFloat(rawPrice.replace(/[^0-9.]/g, "")) || 0;

  const priceComparison = (raw.retailers || []).map(r => ({
    retailer: r.store || r.retailer || "Unknown",
    price: parseFloat(r.amt || r.price || 0),
    url: r.link || r.url || "#",
  }));

  return {
    id: id || `item-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    name: raw.title || raw.name || "Unknown Product",
    brand: raw.brand_name || raw.brand || "Unknown Brand",
    category: raw.product_type || raw.category || "Other",
    price: parsedPrice,
    image: raw.img_url || raw.image || "",
    priceComparison,
    notes: raw.notes || "",
    priority: raw.priority || "medium",
    favorite: raw.favorite || false,
    purchased: raw.purchased || false,
    dateAdded: raw.dateAdded || new Date().toISOString(),
  };
}

// ─── SEED DATA ────────────────────────────────────────────────────────────────

// Start with an empty collection so users add their own items.
let savedItems = [];

// ─── ROUTES ───────────────────────────────────────────────────────────────────

app.get('/api/search', (req, res) => {
  const q = (req.query.q || "").toLowerCase().trim();
  if (!q || q.length < 2) return res.json([]);

  const savedNames = new Set(savedItems.map(i => i.name.toLowerCase()));

  const results = MOCK_CATALOG.filter(p =>
    !savedNames.has(p.title.toLowerCase()) &&
    (
      p.title.toLowerCase().includes(q) ||
      p.brand_name.toLowerCase().includes(q) ||
      p.product_type.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    )
  ).slice(0, 5);

  res.json(results);
});

// GET /api/saved-items — returns normalized, sorted, filtered collection
app.get('/api/saved-items', (req, res) => {
  let items = [...savedItems];
  const { category, favorites, purchased, sortBy } = req.query;

  if (category && category !== "All") items = items.filter(i => i.category === category);
  if (favorites === "true") items = items.filter(i => i.favorite);
  if (purchased === "false") items = items.filter(i => !i.purchased);

  const priorityOrder = { high: 0, medium: 1, low: 2 };
  if (sortBy === "priceLow") items.sort((a, b) => a.price - b.price);
  else if (sortBy === "priceHigh") items.sort((a, b) => b.price - a.price);
  else if (sortBy === "nameAZ") items.sort((a, b) => a.name.localeCompare(b.name));
  else if (sortBy === "priority") items.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
  else items.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));

  res.json(items);
});

// POST /api/saved-items — receive raw product, normalize, persist, return clean
app.post('/api/saved-items', (req, res) => {
  const raw = req.body;
  if (!raw || !raw.title) return res.status(400).json({ error: "Invalid product data" });

  const exists = savedItems.find(i => i.name.toLowerCase() === raw.title.toLowerCase());
  if (exists) return res.status(409).json({ error: "Already in collection", item: exists });

  const normalized = normalizeProduct(raw);
  savedItems.unshift(normalized);
  res.status(201).json(normalized);
});

// PATCH /api/saved-items/:id — update any field on a saved item
app.patch('/api/saved-items/:id', (req, res) => {
  const idx = savedItems.findIndex(i => i.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: "Item not found" });

  savedItems[idx] = { ...savedItems[idx], ...req.body };
  res.json(savedItems[idx]);
});

// DELETE /api/saved-items/:id
app.delete('/api/saved-items/:id', (req, res) => {
  const idx = savedItems.findIndex(i => i.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: "Item not found" });

  savedItems.splice(idx, 1);
  res.json({ success: true });
});

// ─── START ────────────────────────────────────────────────────────────────────
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`\n✦ Kuai API running at http://localhost:${PORT}\n`);
  console.log(`  GET    /api/search?q=query`);
  console.log(`  GET    /api/saved-items?category=&favorites=&purchased=&sortBy=`);
  console.log(`  POST   /api/saved-items`);
  console.log(`  PATCH  /api/saved-items/:id`);
  console.log(`  DELETE /api/saved-items/:id\n`);
});
