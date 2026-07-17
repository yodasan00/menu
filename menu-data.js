/**
 * ============================================================================
 * SICHEY CENTRAL — MENU CONFIGURATION
 * ============================================================================
 * Use this file to customize the categories and add/remove food items.
 *
 * 💡 TIPS FOR EDITING:
 * - Every menu item must have a unique `id`.
 * - The `category` value must match one of the `key` values in `menuCategories`.
 * - The `isVeg` value is a boolean (true for Vegetarian items, false for Non-Veg).
 * - Set price as a number in Rupees (e.g., 150, 200).
 *
 * 🔀 VARIANTS:
 * - If a dish has options (e.g., Chicken / Pork / Buff), use the `variants` array
 *   INSTEAD of a `price` field.
 * - Each variant has: { key, label, price }
 *   Example:
 *     variants: [
 *       { key: "chicken", label: "Chicken", price: 150 },
 *       { key: "pork",    label: "Pork",    price: 180 },
 *     ]
 * - For non-variant items, just use `price: NUMBER` as usual.
 */

const menuCategories = [
  { key: 'all',     label: 'All Items' },
  { key: 'momo',    label: 'Momo 🥟' },
  { key: 'noodles', label: 'Noodles 🍝' },
  { key: 'rice',    label: 'Rice 🍚' },
  { key: 'special', label: 'Specials 🍳' },
  { key: 'drinks',  label: 'Drinks 🥤' },
  { key: 'addons',  label: 'Add-ons ➕' },
  { key: 'combo',   label: 'Combos 🍱' }
];

const menuItems = [

  // ── MOMO ──────────────────────────────────────────────────────
  {
    id: 1,
    name: "Steamed Momo",
    category: "momo",
    isVeg: false,
    desc: "Classic steamed dumplings served with spicy chutney.",
    variants: [
      { key: "chicken", label: "Chicken", price: 150 },
      { key: "pork",    label: "Pork",    price: 180 },
      { key: "buff",    label: "Buff",    price: 180 }
    ]
  },
  {
    id: 2,
    name: "Jhol Momo",
    category: "momo",
    isVeg: false,
    desc: "Momo served in flavorful spicy sesame jhol.",
    variants: [
      { key: "chicken", label: "Chicken", price: 200 },
      { key: "pork",    label: "Pork",    price: 210 },
      { key: "buff",    label: "Buff",    price: 220 }
    ]
  },
  {
    id: 3,
    name: "Chilli Momo",
    category: "momo",
    isVeg: false,
    desc: "Fried momo tossed in a bold spicy chilli sauce.",
    variants: [
      { key: "chicken", label: "Chicken", price: 210 },
      { key: "pork",    label: "Pork",    price: 220 },
      { key: "buff",    label: "Buff",    price: 230 }
    ]
  },
  {
    id: 4,
    name: "Fried Momo",
    category: "momo",
    isVeg: false,
    desc: "Golden crispy fried dumplings.",
    variants: [
      { key: "chicken", label: "Chicken", price: 200 },
      { key: "pork",    label: "Pork",    price: 210 },
      { key: "buff",    label: "Buff",    price: 220 }
    ]
  },

  // ── NOODLES ───────────────────────────────────────────────────
  {
    id: 5,
    name: "Chowmein",
    category: "noodles",
    isVeg: false,
    desc: "Stir-fried noodles with fresh vegetables.",
    variants: [
      { key: "veg",     label: "Veg",     price: 140 },
      { key: "egg",     label: "Egg",     price: 140 },
      { key: "chicken", label: "Chicken", price: 160 },
      { key: "pork",    label: "Pork",    price: 200 },
      { key: "buff",    label: "Buff",    price: 200 }
    ]
  },
  {
    id: 6,
    name: "Crunchy Noodles",
    category: "noodles",
    isVeg: false,
    desc: "Crispy fried noodles topped with vegetable or chicken sauce.",
    variants: [
      { key: "veg",     label: "Vegetable", price: 160 },
      { key: "chicken", label: "Chicken",   price: 180 }
    ]
  },
  {
    id: 7,
    name: "Ramen",
    category: "noodles",
    price: 210,
    isVeg: false,
    desc: "Hot flavorful ramen noodle bowl."
  },
  {
    id: 8,
    name: "Koka Noodles",
    category: "noodles",
    isVeg: false,
    desc: "Instant noodles prepared in choice of flavor.",
    variants: [
      { key: "veg",     label: "Veg",     price: 120 },
      { key: "chicken", label: "Chicken", price: 140 }
    ]
  },

  // ── RICE ──────────────────────────────────────────────────────
  {
    id: 9,
    name: "Fried Rice",
    category: "rice",
    isVeg: false,
    desc: "Wok-tossed fried rice with vegetables.",
    variants: [
      { key: "veg",     label: "Veg",     price: 140 },
      { key: "egg",     label: "Egg",     price: 150 },
      { key: "chicken", label: "Chicken", price: 160 },
      { key: "pork",    label: "Pork",    price: 180 },
      { key: "buff",    label: "Buff",    price: 190 }
    ]
  },

  // ── THUKPA ────────────────────────────────────────────────────
  {
    id: 10,
    name: "Thukpa",
    category: "noodles",
    isVeg: false,
    desc: "Traditional Himalayan noodle soup.",
    variants: [
      { key: "veg",     label: "Veg",     price: 140 },
      { key: "egg",     label: "Egg",     price: 140 },
      { key: "chicken", label: "Chicken", price: 160 },
      { key: "pork",    label: "Pork",    price: 200 },
      { key: "buff",    label: "Buff",    price: 200 }
    ]
  },

  // ── SPECIALS ──────────────────────────────────────────────────
  {
    id: 11,
    name: "Butter Pan Fried Toast (2p)",
    category: "special",
    price: 40,
    isVeg: true,
    desc: "Golden pan-fried bread toast with melted butter."
  },
  {
    id: 12,
    name: "Egg Omelette",
    category: "special",
    isVeg: false,
    desc: "Fluffy egg omelette seasoned with onions and spices.",
    variants: [
      { key: "single", label: "Single Egg", price: 30 },
      { key: "double", label: "Double Egg", price: 60 }
    ]
  },
  {
    id: 13,
    name: "Peri-Peri Fries",
    category: "special",
    price: 120,
    isVeg: true,
    desc: "Crispy fries tossed in spicy peri-peri seasoning."
  },
  {
    id: 14,
    name: "Salted Fries",
    category: "special",
    price: 100,
    isVeg: true,
    desc: "Golden crispy fries lightly seasoned with salt."
  },
  {
    id: 15,
    name: "Chicken Chilli",
    category: "special",
    price: 200,
    isVeg: false,
    desc: "Spicy stir-fried chicken with peppers and onions."
  },
  {
    id: 16,
    name: "DevilWing",
    category: "special",
    price: 250,
    isVeg: false,
    desc: "Hot and spicy crispy chicken wings."
  },
  {
    id: 17,
    name: "Chicken Manchurian",
    category: "special",
    price: 200,
    isVeg: false,
    desc: "Classic sweet and spicy chicken manchurian."
  },
  {
    id: 18,
    name: "Chicken Lollipop",
    category: "special",
    price: 220,
    isVeg: false,
    desc: "Crispy seasoned fried chicken lollipops."
  },
  {
    id: 19,
    name: "Salt & Pepper Crispy Corn",
    category: "special",
    price: 150,
    isVeg: true,
    desc: "Crunchy corn kernels tossed with spices, peppers and herbs."
  },
  {
    id: 20,
    name: "Pork Chilli",
    category: "special",
    price: 260,
    isVeg: false,
    desc: "Spicy stir-fried pork cooked with green chillies and onions."
  },

  // ── DRINKS ────────────────────────────────────────────────────
  {
    id: 21,
    name: "Milk Coffee",
    category: "drinks",
    price: 50,
    isVeg: true,
    desc: "Freshly brewed coffee blended with creamy milk."
  },
  {
    id: 22,
    name: "Americano",
    category: "drinks",
    price: 40,
    isVeg: true,
    desc: "Classic espresso diluted with hot water."
  },
  {
    id: 23,
    name: "Hot / Cold Chocolate",
    category: "drinks",
    price: 120,
    isVeg: true,
    desc: "Rich chocolate drink served hot or chilled."
  },
  {
    id: 24,
    name: "Ginger Honey Lemon Tea",
    category: "drinks",
    price: 120,
    isVeg: true,
    desc: "Warm comforting tea infused with ginger, honey, and lemon."
  },
  {
    id: 25,
    name: "Cold Coffee",
    category: "drinks",
    price: 120,
    isVeg: true,
    desc: "Creamy iced cold coffee."
  },
  {
    id: 26,
    name: "Iced Americano",
    category: "drinks",
    price: 120,
    isVeg: true,
    desc: "Refreshing chilled Americano served over ice."
  },
  {
    id: 27,
    name: "Fresh Lime Soda / Water",
    category: "drinks",
    isVeg: true,
    desc: "Chilled fresh lime prepared with soda or water.",
    variants: [
      { key: "water", label: "Lime Water", price: 60 },
      { key: "soda",  label: "Lime Soda",  price: 80 }
    ]
  },
  {
    id: 28,
    name: "Green Apple Soda",
    category: "drinks",
    price: 120,
    isVeg: true,
    desc: "Sweet and tangy green apple flavored soda."
  },
  {
    id: 29,
    name: "Watermelon Mojito",
    category: "drinks",
    price: 120,
    isVeg: true,
    desc: "Refreshing watermelon mojito with mint and lime."
  },
  {
    id: 30,
    name: "Virgin Mojito",
    category: "drinks",
    price: 120,
    isVeg: true,
    desc: "Classic non-alcoholic mojito with mint and lime."
  },
  {
    id: 31,
    name: "Iced Tea",
    category: "drinks",
    isVeg: true,
    desc: "Chilled iced tea in your choice of flavor.",
    variants: [
      { key: "peach",      label: "Peach",      price: 120 },
      { key: "watermelon", label: "Watermelon", price: 120 },
      { key: "lemon",      label: "Lemon",      price: 120 }
    ]
  },
  {
    id: 32,
    name: "Milkshake",
    category: "drinks",
    isVeg: true,
    desc: "Thick and creamy milkshake in your choice of flavor.",
    variants: [
      { key: "mango",       label: "Mango",       price: 160 },
      { key: "strawberry",  label: "Strawberry",  price: 168 },
      { key: "watermelon",  label: "Watermelon",  price: 168 }
    ]
  },
  {
    id: 33,
    name: "Coke",
    category: "drinks",
    isVeg: true,
    desc: "Chilled coca-cola served regular or masala style.",
    variants: [
      { key: "regular", label: "Regular Coke", price: 40 },
      { key: "masala",  label: "Masala Coke",  price: 50 }
    ]
  },
  {
    id: 34,
    name: "Kullad Chai",
    category: "drinks",
    price: 50,
    isVeg: true,
    desc: "Traditional hot tea served in an earthen clay pot."
  },

  // ── ADD-ONS ───────────────────────────────────────────────────
  {
    id: 35,
    name: "Poached Egg",
    category: "addons",
    price: 30,
    isVeg: false,
    desc: "Perfectly poached egg."
  },
  {
    id: 36,
    name: "Chicken Sausage",
    category: "addons",
    price: 30,
    isVeg: false,
    desc: "Grilled chicken sausage."
  },

  // ── COMBOS ────────────────────────────────────────────────────
  {
    id: 37,
    name: "Combo Rice",
    category: "combo",
    isVeg: false,
    desc: "Rice combo served with sides.",
    variants: [
      { key: "chicken", label: "Chicken", price: 240 },
      { key: "pork",    label: "Pork",    price: 260 }
    ]
  },
  {
    id: 38,
    name: "Combo Noodles",
    category: "combo",
    isVeg: false,
    desc: "Noodle combo served with sides.",
    variants: [
      { key: "chicken", label: "Chicken", price: 240 },
      { key: "pork",    label: "Pork",    price: 260 }
    ]
  }

];