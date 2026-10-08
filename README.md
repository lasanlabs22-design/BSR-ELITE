# BSR Elite — Website & Brand Identity (POC)

Premium static website and new brand identity for **BSR Elite Home Interior Manufacturing Company** (founder: Ramesh, +91 79892 84955, Instagram [@bsr_elite_home_interior_design](https://www.instagram.com/bsr_elite_home_interior_design/)).

Built with Next.js 16 (App Router, static export), React 19, Tailwind CSS v4. No backend: the site exports to plain HTML/CSS/JS in `out/`.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site -> out/
npm start        # preview the built site locally
```

Deploy `out/` to any static host (Vercel, Netlify, Cloudflare Pages, GitHub Pages, cPanel). Set `NEXT_PUBLIC_SITE_URL=https://<domain>` at build time so social-share previews use absolute URLs.

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Hero, studio intro, services, "Elite difference", featured work, process, FAQ, CTA |
| `/about/` | Studio story, values, workshop & materials, process |
| `/services/` | 9 services with features and per-service WhatsApp enquiry |
| `/portfolio/` | Filterable masonry gallery with swipe/keyboard lightbox |
| `/contact/` | Call / WhatsApp / Instagram cards and enquiry form (opens WhatsApp pre-filled) |
| `/brand/` | Brand identity: logo concept, downloads, palette, typography, applications |

## Brand assets

`public/brand/` holds the logo suite as outlined SVG (no font dependency) plus PNG: horizontal, stacked and monogram, each on light and on dark, and a 512 px app/avatar icon. The favicon is `src/app/icon.svg`, the Apple touch icon `src/app/apple-icon.png`, and the social preview `public/og.jpg`.

- **Concept:** the BSR initials inside an arched doorway, made of the arch (home), keystone (craft), fanlight (design) and foundation line (workshop).
- **Palette:** Charcoal `#1C1A17`, Brass `#A8834B` / `#C9A96E`, Ivory `#F6F1E9`, Sand `#ECE4D7`, Walnut `#5A3E2B`.
- **Type:** Cormorant Garamond (display) + Manrope (text/UI).

## Editing content

- Business details (phone, WhatsApp, hours, address): `src/lib/site.ts`
- Services, portfolio projects, process, materials, FAQ: `src/lib/content.ts`
- Photos: `public/images/`

## Before going live

1. **Replace the stock photography.** `public/images/` holds curated Unsplash photos used for the POC. Swap in BSR Elite's own project photos and update `projects` in `src/lib/content.ts`. This matters most for the Pooja & Display Units service.
2. **Add the studio/workshop address** (`serviceArea` in `src/lib/site.ts`) and confirm working hours.
3. **Have the client confirm the copy,** especially the materials and process claims.

`scripts/flatten-rsc.mjs` runs after `next build`. It works around a Next 16 static-export quirk so link prefetching doesn't 404 on static hosts.
