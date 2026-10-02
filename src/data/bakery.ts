/**
 * Sweet Retreat — single source of truth for brand data, products and copy.
 *
 * Everything the bakery owner may want to change later lives here:
 * phone number, address, maps link, product names, images, WhatsApp scripts.
 * Presentation components read from this file; nothing is hard-coded in JSX.
 */

export const bakery = {
  name: "Sweet Retreat",
  tagline: "Homemade with Love",
  // WhatsApp click-to-chat needs digits only, no "+" or spaces.
  whatsappNumber: "918305813888",
  phoneDisplay: "+91 83058 13888",
  phoneDial: "+918305813888",
  addressLines: ["Mahalaxmi Nagar", "Indore, Madhya Pradesh"],
  mapsUrl: "https://maps.app.goo.gl/eDA8SxvrHWz6k48Z7",
} as const;

/**
 * WhatsApp pre-filled messages. Kept here (not in the link builder) so the
 * exact wording shown to the owner can be edited in one place.
 */
export const whatsappMessages = {
  general:
    "Hello Sweet Retreat! I'd like to place an order. Please share today's availability, sizes and pricing.",
  customCake:
    "Hello Sweet Retreat! I'd like to enquire about a custom cake.\n\nOccasion:\nCake type:\nPreferred size:\nDate:\nAny design/details:\n\nPlease let me know the options and pricing.",
  product: (productName: string) =>
    `Hello Sweet Retreat! I'd like to order:\nProduct: ${productName}\n\nPlease share the available sizes, pricing and availability.`,
} as const;

/* ------------------------------------------------------------------ */
/* Menu                                                               */
/* ------------------------------------------------------------------ */

export interface MenuCategory {
  id: string;
  number: string;
  name: string;
  blurb: string;
  products: string[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: "cakes",
    number: "01",
    name: "Cakes",
    blurb:
      "Celebration cakes layered with care, from fruit-filled classics to deep chocolate truffle.",
    products: [
      "Blueberry Cake",
      "Rasp Berry Cake",
      "Brownie Creme Cake",
      "Oreo Creme Cake",
      "Gulab Jamun Pudding",
      "Kiwi Cake",
      "Pineapple Cake",
      "Mix Fruit Cake",
      "Truffle Cake",
      "Chocolate Cake",
      "Traditional Cake",
      "Butter Scotch",
    ],
  },
  {
    id: "chocolates",
    number: "02",
    name: "Chocolates",
    blurb:
      "Handmade bars, pralines and centre-filled bites for gifting and everyday indulgence.",
    products: [
      "Roasted Almond Chocolate",
      "Fruit & Nut Bar",
      "Ferrerocher",
      "Marzipan",
      "Rock Chocolates",
      "Mango Almond",
      "Strawberry Bar",
      "Blueberry Bar",
      "Mango Bar",
      "Dates Chocolates",
      "Oreo Pops",
      "Butter Scotch",
      "Chocolate Truffle",
      "Center Filled Chocolate",
      "Kaju Pista",
    ],
  },
  {
    id: "muffins",
    number: "03",
    name: "Muffins",
    blurb:
      "Soft, domed muffins in classic and homely flavours — lovely with chai or coffee.",
    products: [
      "Classic Vanilla",
      "Dates & Walnut",
      "Honey Almond",
      "Super Soft Muffins with Varieties",
      "Semolina Muffins",
      "Royal Fudge",
      "Mixed Cherry",
      "Oreo",
    ],
  },
  {
    id: "cookies",
    number: "04",
    name: "Cookies",
    blurb:
      "Crisp edges, soft centres and bakery-style biscuits for the cookie tin.",
    products: [
      "Brownie Cookies",
      "Cappuccino Cookies",
      "Orange Drop Cookies",
      "Butter Cookies",
      "Viennese Biscuits",
      "Oats Cookies",
      "Green Tea & Masala Chai Cookies",
      "Wheat Flour Cookies",
    ],
  },
  {
    id: "brownies",
    number: "05",
    name: "Brownies",
    blurb:
      "Fudgy, nutty squares in walnut, hazelnut and rose-blondie variations.",
    products: [
      "Fudgy Walnut Brownie",
      "Hazelnut Brownie",
      "Wheat Brownie",
      "Almond Rose Blondie",
      "Mango Rose Blondie",
      "Date & Walnut Brownie",
      "Honey Almond Brownie",
    ],
  },
  {
    id: "tea-time-cakes",
    number: "06",
    name: "Tea Time Cakes",
    blurb:
      "Simple loaves and bars meant for slow evenings and second helpings.",
    products: [
      "Eggless Pond Cake",
      "Walnut Date Banana Cake",
      "Chocolate Mud Cake",
      "Whole Wheat Choco-Chip Cake",
      "Choco Banana Coffee Cake",
      "Dot Cake",
      "Zebra Cake",
      "Fruit Bars",
      "Vanilla Cake",
    ],
  },
  {
    id: "healthy-cakes",
    number: "07",
    name: "Healthy Cakes",
    blurb:
      "Gentler bakes with whole wheat, fruit and less sugar — comfort without the guilt.",
    products: [
      "Whole Wheat Marvel Cake",
      "Banana Walnut Loaf",
      "Santolinal Mowa Cake",
      "Almond Cake",
      "Sugar Free Poppy Seeds Cake",
      "Banana Choco-Chip Cakes",
      "Low Sugar Cake",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Featured products (shown on the landing page)                      */
/* ------------------------------------------------------------------ */

/**
 * Placeholder imagery: swap `image` for a real photo URL per product later.
 * `image` is undefined on purpose — the ProductCard renders a tasteful
 * branded placeholder until the bakery supplies photography.
 */
export interface FeaturedProduct {
  name: string;
  category: string;
  categoryId: string;
  image?: string;
}

export const featuredProducts: FeaturedProduct[] = [
  { name: "Blueberry Cake", category: "Cakes", categoryId: "cakes" },
  { name: "Chocolate Cake", category: "Cakes", categoryId: "cakes" },
  { name: "Truffle Cake", category: "Cakes", categoryId: "cakes" },
  { name: "Fudgy Walnut Brownie", category: "Brownies", categoryId: "brownies" },
  { name: "Oreo Creme Cake", category: "Cakes", categoryId: "cakes" },
  { name: "Classic Vanilla", category: "Muffins", categoryId: "muffins" },
];
