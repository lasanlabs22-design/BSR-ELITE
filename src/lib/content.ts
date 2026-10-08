// NOTE: Photography is curated stock used for the proof-of-concept.
// Swap in BSR Elite's own project photos (from their Instagram reels / site visits) before launch.

export type Service = {
  id: string;
  title: string;
  short: string;
  description: string;
  image: string;
  features: string[];
};

export const services: Service[] = [
  {
    id: "modular-kitchens",
    title: "Modular Kitchens",
    short: "Ergonomic layouts, soft-close everything, finishes that last.",
    description:
      "L-shaped, U-shaped, parallel, island or straight — we plan your kitchen around how you actually cook, then manufacture every carcass, shutter and drawer in our own workshop.",
    image: "/images/kitchen-charcoal.jpg",
    features: ["Moisture-resistant BWP ply carcass", "Acrylic, PU, laminate & veneer shutters", "Tall units, tandem drawers & corner solutions", "Chimney, hob & appliance integration"],
  },
  {
    id: "wardrobes",
    title: "Wardrobes & Storage",
    short: "Sliding, hinged and walk-in wardrobes built to the millimetre.",
    description:
      "Floor-to-ceiling wardrobes, walk-in closets and loft storage engineered for every inch of your room — with internal layouts designed around your clothes, not a catalogue.",
    image: "/images/storage-wood.jpg",
    features: ["Sliding & hinged shutter systems", "Profile-handle, glass & mirror finishes", "Custom internal organisers & lofts", "Integrated lighting on request"],
  },
  {
    id: "living-rooms",
    title: "Living Rooms & TV Units",
    short: "Statement walls, entertainment units and display storage.",
    description:
      "From fluted panelling and backlit TV walls to bookshelves and crockery displays, we craft living spaces that feel calm, considered and unmistakably yours.",
    image: "/images/living-wood-panel.jpg",
    features: ["Custom TV & media walls", "Fluted, veneer & stone-finish panelling", "Display units & bookshelves", "Concealed wiring & storage"],
  },
  {
    id: "bedrooms",
    title: "Bedrooms",
    short: "Upholstered beds, side units, dressers and quiet luxury.",
    description:
      "Restful bedrooms with custom beds and headboards, bedside units, dressing tables and study corners — designed as one cohesive suite.",
    image: "/images/bedroom-luxe.jpg",
    features: ["Hydraulic storage beds", "Upholstered & panelled headboards", "Dressers & vanity units", "Master, guest & kids' rooms"],
  },
  {
    id: "false-ceilings",
    title: "False Ceilings & Lighting",
    short: "Gypsum and POP ceilings with layered, warm lighting.",
    description:
      "Coffered, cove, floating and wooden-rafter ceilings paired with profile lights and spotlights, planned so every room has the right mood at every hour.",
    image: "/images/living-coffered.jpg",
    features: ["Gypsum & POP ceilings", "Cove & profile lighting", "Wooden ceiling accents", "Lighting layout planning"],
  },
  {
    id: "sliding-doors",
    title: "Sliding Doors & Partitions",
    short: "Space-saving doors and elegant room dividers.",
    description:
      "Aluminium-profile glass partitions, sliding doors, fluted-glass screens and wooden jaali dividers that open up your floor plan without losing privacy.",
    image: "/images/dining-emerald.jpg",
    features: ["Aluminium & glass profiles", "Fluted & frosted glass", "Wooden jaali & CNC screens", "Soft-close sliding systems"],
  },
  {
    id: "pooja-units",
    title: "Pooja & Display Units",
    short: "Serene mandirs, floating shelves and feature walls.",
    description:
      "Wall-mounted or floor-standing pooja units with intricate CNC-cut jaali and backlit panels, plus floating shelves and display walls that give your favourite things a place of pride.",
    image: "/images/wall-shelves.jpg",
    features: ["CNC-cut jaali & motifs", "Backlit Corian & veneer panels", "Floating shelves & niches", "Drawer & shutter storage"],
  },
  {
    id: "study-kids",
    title: "Study & Kids' Rooms",
    short: "Playful, practical rooms that grow with your family.",
    description:
      "Study desks, bunk beds, play storage and home offices — durable, safe-edged and designed to adapt as children grow.",
    image: "/images/study-green.jpg",
    features: ["Study desks & bookshelves", "Bunk & loft beds", "Rounded, safe edges", "Work-from-home setups"],
  },
  {
    id: "full-home",
    title: "Full Home Interiors",
    short: "Turnkey interiors for apartments, villas and independent houses.",
    description:
      "One team, one timeline, one point of contact. We design, manufacture and install every room of your home — from the main door to the balcony.",
    image: "/images/villa-night.jpg",
    features: ["1, 2, 3 & 4 BHK apartments", "Villas & independent houses", "Renovation & makeovers", "Design-to-handover project management"],
  },
];

export type Category = "Living" | "Kitchen" | "Bedroom" | "Dining & Study" | "Bath" | "Storage";

export type Project = {
  title: string;
  category: Category;
  type: string;
  image: string;
  tall?: boolean;
};

export const projects: Project[] = [
  { title: "Warm Earth Living", category: "Living", type: "3 BHK Apartment", image: "/images/hero-living.jpg" },
  { title: "Charcoal Handleless Kitchen", category: "Kitchen", type: "Villa", image: "/images/kitchen-charcoal.jpg" },
  { title: "Quiet Luxury Master Suite", category: "Bedroom", type: "Penthouse", image: "/images/bedroom-luxe.jpg", tall: true },
  { title: "Walnut Panel Lounge", category: "Living", type: "Independent House", image: "/images/living-wood-panel.jpg" },
  { title: "Grey Shaker Kitchen", category: "Kitchen", type: "2 BHK Apartment", image: "/images/kitchen-grey-shaker.jpg", tall: true },
  { title: "Emerald Dining", category: "Dining & Study", type: "Duplex", image: "/images/dining-emerald.jpg" },
  { title: "Stone & Oak Bath", category: "Bath", type: "Villa", image: "/images/bath-stone.jpg" },
  { title: "Oak Storage Wall", category: "Storage", type: "3 BHK Apartment", image: "/images/storage-wood.jpg", tall: true },
  { title: "Coffered Formal Living", category: "Living", type: "Villa", image: "/images/living-coffered.jpg" },
  { title: "Moody Guest Bedroom", category: "Bedroom", type: "Independent House", image: "/images/bedroom-dark.jpg" },
  { title: "Marble Island Kitchen", category: "Kitchen", type: "Villa", image: "/images/kitchen-marble.jpg" },
  { title: "Sage Retreat", category: "Bedroom", type: "2 BHK Apartment", image: "/images/bedroom-sage.jpg", tall: true },
  { title: "Monochrome TV Lounge", category: "Living", type: "3 BHK Apartment", image: "/images/living-tv-unit.jpg" },
  { title: "Forest Green Study", category: "Dining & Study", type: "Home Office", image: "/images/study-green.jpg" },
  { title: "Floating Display Wall", category: "Storage", type: "2 BHK Apartment", image: "/images/wall-shelves.jpg" },
  { title: "Sunlit Family Living", category: "Living", type: "Duplex", image: "/images/living-warm.jpg" },
  { title: "Spa-White Bath", category: "Bath", type: "3 BHK Apartment", image: "/images/bath-white.jpg" },
  { title: "Classic Upholstered Bedroom", category: "Bedroom", type: "Villa", image: "/images/bedroom-classic.jpg" },
  { title: "Ivory & Rattan Living", category: "Living", type: "2 BHK Apartment", image: "/images/living-ivory.jpg" },
  { title: "Bright Breakfast Kitchen", category: "Kitchen", type: "Independent House", image: "/images/kitchen-white.jpg" },
  { title: "Sage & Cane Lounge", category: "Living", type: "3 BHK Apartment", image: "/images/living-sage.jpg", tall: true },
  { title: "Soft Neutral Bedroom", category: "Bedroom", type: "2 BHK Apartment", image: "/images/bedroom-light.jpg" },
];

export const categories: ("All" | Category)[] = ["All", "Living", "Kitchen", "Bedroom", "Dining & Study", "Storage", "Bath"];

export const processSteps = [
  {
    title: "Consultation",
    text: "We visit your home, take precise measurements and understand how your family lives, your style and your budget.",
  },
  {
    title: "Design & 3D",
    text: "Our designers prepare layouts, material palettes and realistic 3D views so you see your home before a single panel is cut.",
  },
  {
    title: "Quotation & Approval",
    text: "A clear, itemised quotation — materials, finishes, hardware and timelines — with no surprises later.",
  },
  {
    title: "Manufacturing",
    text: "Every unit is cut, edge-banded and finished in our own workshop with precision machinery and strict quality checks.",
  },
  {
    title: "Installation & Handover",
    text: "Our in-house installers fit everything on site, clean up, and walk you through your new home.",
  },
];

export const differentiators = [
  {
    title: "Factory-direct",
    text: "We manufacture in-house — no middlemen, no outsourcing, better control over price and quality.",
  },
  {
    title: "Precision-made",
    text: "Machine-cut panels, clean edge-banding and tight joinery for interiors that look sharp and last for years.",
  },
  {
    title: "Honest materials",
    text: "BWP plywood, quality laminates, acrylic, PU and veneer finishes with branded soft-close hardware.",
  },
  {
    title: "One team, start to finish",
    text: "The same team designs, builds and installs — one point of contact and one clear timeline.",
  },
];

export const materials = [
  { name: "BWP & MR Plywood", note: "Water-resistant cores for kitchens & baths" },
  { name: "HDHMR & MDF", note: "Smooth, stable boards for shutters & CNC work" },
  { name: "Laminates", note: "Matte, gloss, textured & anti-fingerprint" },
  { name: "Acrylic & PU", note: "Mirror-gloss and soft-matte lacquered finishes" },
  { name: "Natural Veneers", note: "Oak, walnut & teak for warmth and grain" },
  { name: "Glass & Profiles", note: "Fluted, frosted & tinted with aluminium frames" },
  { name: "Quartz & Stone", note: "Countertops, vanities & feature walls" },
  { name: "Soft-close Hardware", note: "Hinges, channels, lift-ups & tandem boxes" },
];

export const faqs = [
  {
    q: "Do you handle complete home interiors or individual rooms?",
    a: "Both. We regularly take on full-home turnkey projects and single-room work such as a modular kitchen, wardrobes, a TV unit or a pooja unit.",
  },
  {
    q: "What makes BSR Elite different from other interior designers?",
    a: "We are a manufacturing company. Your furniture is made in our own workshop and installed by our own team, which gives you better quality control, cleaner finishes and more honest pricing.",
  },
  {
    q: "Will I see the design before work begins?",
    a: "Yes. After measurement we share layouts and 3D views, plus material and finish samples. Manufacturing starts only after you approve the design and quotation.",
  },
  {
    q: "How long does a typical project take?",
    a: "It depends on scope. A modular kitchen or wardrobe set usually takes a few weeks from approval to installation; full-home projects are scheduled with a clear timeline in your quotation.",
  },
  {
    q: "Do you work with apartments, villas and independent houses?",
    a: "Yes — we design for every kind of home, from compact 1 BHK apartments to large villas and independent houses, including renovations of existing homes.",
  },
  {
    q: "How do I get started?",
    a: "Call or WhatsApp us, or fill in the enquiry form. We'll schedule a consultation and site visit at a time that suits you.",
  },
];
