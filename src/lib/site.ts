export const site = {
  name: "BSR Elite",
  legalName: "BSR Elite Home Interior Manufacturing Company",
  tagline: "Home Interiors · Design & Manufacturing",
  description:
    "BSR Elite designs, manufactures and installs bespoke interiors for every kind of home — modular kitchens, wardrobes, living rooms, bedrooms and complete home makeovers, built in our own workshop.",
  founder: "Ramesh",
  phone: "+91 79892 84955",
  phoneHref: "tel:+917989284955",
  whatsapp: "917989284955",
  instagram: "https://www.instagram.com/bsr_elite_home_interior_design/",
  instagramHandle: "@bsr_elite_home_interior_design",
  hours: "Mon – Sat · 9:30 AM – 7:30 PM",
  // TODO: replace with the studio / workshop address once confirmed by the client.
  serviceArea: "Studio & workshop visits by appointment",
};

export function whatsappLink(message = "Hello BSR Elite, I'd like to discuss interiors for my home.") {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "Studio" },
  { href: "/services/", label: "Services" },
  { href: "/portfolio/", label: "Portfolio" },
  { href: "/contact/", label: "Contact" },
];
