/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { Download, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { LogoMark } from "@/components/Logo";
import { InstagramIcon } from "@/components/Icons";
import { SectionHeading } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Brand Identity",
  description: "The BSR Elite brand identity — logo, monogram, colour palette, typography and applications.",
};

const d = (ms: number) => ({ "--reveal-delay": `${ms}ms` }) as React.CSSProperties;

const colors = [
  { name: "Elite Charcoal", hex: "#1C1A17", role: "Primary · backgrounds & text", dark: true },
  { name: "Deep Ink", hex: "#141311", role: "Footers & overlays", dark: true },
  { name: "Heritage Brass", hex: "#A8834B", role: "Accent · logo & CTAs", dark: true },
  { name: "Soft Brass", hex: "#C9A96E", role: "Accent on dark", dark: false },
  { name: "Walnut", hex: "#5A3E2B", role: "Material accent", dark: true },
  { name: "Ivory", hex: "#F6F1E9", role: "Primary light background", dark: false },
  { name: "Sand", hex: "#ECE4D7", role: "Section backgrounds", dark: false },
  { name: "Stone", hex: "#D9CFBF", role: "Borders & dividers", dark: false },
];

const variants = [
  { file: "bsr-elite-horizontal-on-light", label: "Primary — Horizontal", bg: "bg-ivory", pad: "p-10 sm:p-14" },
  { file: "bsr-elite-horizontal-on-dark", label: "Primary — Horizontal (reversed)", bg: "bg-charcoal", pad: "p-10 sm:p-14" },
  { file: "bsr-elite-stacked-on-light", label: "Stacked", bg: "bg-sand", pad: "p-10 sm:p-12" },
  { file: "bsr-elite-stacked-on-dark", label: "Stacked (reversed)", bg: "bg-ink", pad: "p-10 sm:p-12" },
  { file: "bsr-elite-monogram-on-light", label: "Monogram", bg: "bg-ivory", pad: "p-14 sm:p-20" },
  { file: "bsr-elite-monogram-on-dark", label: "Monogram (reversed)", bg: "bg-walnut", pad: "p-14 sm:p-20" },
];

const anatomy = [
  { k: "The Arch", v: "The threshold of every home — the first thing you pass through and the last thing you remember." },
  { k: "The Keystone", v: "The stone that holds an arch together. It stands for precision and craftsmanship." },
  { k: "The Fanlight", v: "A window of light above the door — the designer's touch that makes a space feel alive." },
  { k: "The Foundation", v: "A single solid base line — our workshop, where everything is made." },
];

export default function BrandPage() {
  return (
    <>
      {/* Hero */}
      <section className="grain relative overflow-hidden bg-ink pb-20 pt-36 text-ivory sm:pb-28 sm:pt-44">
        <div className="container-x grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="eyebrow !text-brass-light" data-reveal>
              Brand Identity · v1.0
            </p>
            <h1 className="h-display mt-6 text-[2.9rem] sm:text-6xl lg:text-7xl" data-reveal style={d(80)}>
              A doorway into <em className="text-brass-light">elite living.</em>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-ivory/70 sm:text-lg" data-reveal style={d(160)}>
              The identity for {site.legalName} — built around the arched doorway, a timeless architectural form that speaks of
              home, craft and quiet luxury.
            </p>
            <a href="/brand/bsr-elite-stacked-on-dark.svg" download className="btn-brass mt-10" data-reveal style={d(220)}>
              <Download className="h-4 w-4" /> Download primary logo
            </a>
          </div>
          <div className="flex justify-center lg:col-span-6" data-reveal style={d(120)}>
            <div className="relative flex aspect-square w-full max-w-md items-center justify-center rounded-[2.5rem] border border-ivory/10 bg-charcoal p-12">
              <img src="/brand/bsr-elite-stacked-on-dark.svg" alt="BSR Elite stacked logo" className="w-full" />
              <span className="absolute left-6 top-6 text-[0.6rem] uppercase tracking-[0.3em] text-ivory/35">Primary lockup</span>
            </div>
          </div>
        </div>
      </section>

      {/* Concept */}
      <section className="py-24 sm:py-32">
        <div className="container-x grid gap-16 lg:grid-cols-12 lg:items-center">
          <div className="flex justify-center lg:col-span-5" data-reveal>
            <div className="relative w-full max-w-sm">
              <LogoMark tone="dark" className="w-full" />
              <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[0.62rem] font-semibold uppercase tracking-[0.25em] text-brass">Keystone</span>
              <span className="absolute -right-2 top-[38%] text-[0.62rem] font-semibold uppercase tracking-[0.25em] text-brass sm:-right-6">Fanlight</span>
              <span className="absolute -left-2 top-[60%] text-[0.62rem] font-semibold uppercase tracking-[0.25em] text-brass sm:-left-6">Arch</span>
              <span className="absolute bottom-[2%] right-0 text-[0.62rem] font-semibold uppercase tracking-[0.25em] text-brass">Foundation</span>
            </div>
          </div>
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="The concept"
              title={
                <>
                  Every great room begins <em className="text-brass">at the door.</em>
                </>
              }
              intro="The monogram frames the BSR initials inside an arched doorway — a symbol of welcome, permanence and craftsmanship."
            />
            <dl className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {anatomy.map((a, i) => (
                <div key={a.k} className="border-t border-charcoal/12 pt-5" data-reveal style={d(i * 70)}>
                  <dt className="font-display text-2xl">{a.k}</dt>
                  <dd className="mt-2 text-[0.95rem] leading-relaxed text-muted">{a.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Logo variants */}
      <section className="bg-sand py-24 sm:py-32">
        <div className="container-x">
          <SectionHeading eyebrow="Logo suite" title="Lockups & monogram." intro="Vector SVG for print and signage, high-resolution PNG for digital. Use the reversed versions on dark or photographic backgrounds." />
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {variants.map((v, i) => (
              <figure key={v.file} className="overflow-hidden rounded-[1.75rem] border border-charcoal/10 bg-ivory" data-reveal style={d((i % 2) * 80)}>
                <div className={`flex aspect-[16/10] items-center justify-center ${v.bg} ${v.pad}`}>
                  <img src={`/brand/${v.file}.svg`} alt={v.label} className="max-h-full max-w-full" />
                </div>
                <figcaption className="flex flex-wrap items-center justify-between gap-3 px-6 py-4">
                  <span className="text-sm font-semibold">{v.label}</span>
                  <span className="flex gap-2">
                    {["svg", "png"].map((ext) => (
                      <a
                        key={ext}
                        href={`/brand/${v.file}.${ext}`}
                        download
                        className="inline-flex items-center gap-1.5 rounded-full border border-charcoal/15 px-3.5 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.15em] hover:border-brass hover:text-brass"
                      >
                        <Download className="h-3 w-3" /> {ext}
                      </a>
                    ))}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Colour */}
      <section className="py-24 sm:py-32">
        <div className="container-x">
          <SectionHeading eyebrow="Colour" title={<>Charcoal, brass <em className="text-brass">& ivory.</em></>} intro="A warm, material-led palette inspired by walnut, aged brass and natural stone." />
          <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
            {colors.map((c, i) => (
              <div key={c.hex} className="overflow-hidden rounded-[1.5rem] border border-charcoal/10" data-reveal style={d((i % 4) * 60)}>
                <div className="flex aspect-[4/3] items-end p-4" style={{ background: c.hex }}>
                  <span className={`font-mono text-xs ${c.dark ? "text-ivory/80" : "text-charcoal/70"}`}>{c.hex}</span>
                </div>
                <div className="bg-ivory p-4">
                  <p className="font-display text-xl leading-tight">{c.name}</p>
                  <p className="mt-1 text-xs text-muted">{c.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="bg-charcoal py-24 text-ivory sm:py-32">
        <div className="container-x">
          <SectionHeading tone="light" eyebrow="Typography" title="Classic serif, modern sans." />
          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            <div className="rounded-[1.75rem] border border-ivory/10 p-8 sm:p-10" data-reveal>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-brass-light">Display · Cormorant Garamond</p>
              <p className="mt-6 font-display text-7xl leading-none sm:text-8xl">Aa</p>
              <p className="mt-6 font-display text-3xl leading-snug sm:text-4xl">
                Interiors crafted <em className="text-brass-light">in-house.</em>
              </p>
              <p className="mt-6 break-all font-display text-lg tracking-wide text-ivory/60">ABCDEFGHIJKLMNOPQRSTUVWXYZ · abcdefghijklmnopqrstuvwxyz · 0123456789</p>
            </div>
            <div className="rounded-[1.75rem] border border-ivory/10 p-8 sm:p-10" data-reveal style={d(100)}>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-brass-light">Text & UI · Manrope</p>
              <p className="mt-6 text-7xl font-semibold leading-none sm:text-8xl">Aa</p>
              <p className="mt-6 text-lg leading-relaxed text-ivory/80">
                Designed by us. Made in our workshop. Installed by our own team. Clear, contemporary and easy to read at every size.
              </p>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.35em] text-ivory/60">Labels · Eyebrows · Buttons</p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-24 sm:py-32">
        <div className="container-x">
          <SectionHeading eyebrow="Applications" title={<>The brand, <em className="text-brass">in the world.</em></>} />
          <div className="mt-14 grid gap-6 lg:grid-cols-12">
            {/* Business cards */}
            <div className="flex flex-col items-center justify-center gap-6 rounded-[2rem] bg-stone/60 p-6 sm:flex-row sm:p-12 lg:col-span-8" data-reveal>
              <div className="flex aspect-[1.75] w-full max-w-[320px] items-center justify-center rounded-xl bg-charcoal p-6 shadow-[0_25px_50px_-20px_rgba(0,0,0,0.5)] sm:-rotate-3">
                <img src="/brand/bsr-elite-stacked-on-dark.svg" alt="" className="h-full" />
              </div>
              <div className="flex aspect-[1.75] w-full max-w-[320px] flex-col justify-between rounded-xl bg-ivory p-6 text-charcoal shadow-[0_25px_50px_-20px_rgba(0,0,0,0.4)] sm:rotate-2">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-display text-2xl font-semibold leading-none">{site.founder}</p>
                    <p className="mt-1.5 text-[0.55rem] font-semibold uppercase tracking-[0.3em] text-brass">Founder</p>
                  </div>
                  <LogoMark tone="dark" className="h-12 w-12" />
                </div>
                <div className="space-y-1.5 text-[0.7rem]">
                  <p className="flex items-center gap-2">
                    <Phone className="h-3 w-3 text-brass" /> {site.phone}
                  </p>
                  <p className="flex items-center gap-2">
                    <InstagramIcon className="h-3 w-3 text-brass" /> {site.instagramHandle}
                  </p>
                  <div className="!mt-3 h-px bg-brass/40" />
                  <p className="text-[0.5rem] uppercase tracking-[0.25em] text-muted">Home Interiors · Design & Manufacturing</p>
                </div>
              </div>
            </div>

            {/* Social avatar */}
            <div className="flex flex-col items-center justify-center rounded-[2rem] bg-sand p-10 lg:col-span-4" data-reveal style={d(100)}>
              <div className="flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-[3px]">
                <div className="flex h-full w-full items-center justify-center rounded-full border-4 border-sand bg-charcoal">
                  <LogoMark tone="light" className="h-20 w-20" />
                </div>
              </div>
              <p className="mt-5 text-sm font-semibold">{site.instagramHandle.replace("@", "")}</p>
              <p className="mt-1 text-xs text-muted">Instagram & WhatsApp profile picture</p>
              <a href="/brand/bsr-elite-app-icon-512.png" download className="btn-ghost-dark mt-6 !px-5 !py-2.5">
                <Download className="h-3.5 w-3.5" /> Avatar PNG
              </a>
            </div>

            {/* Signage */}
            <div className="relative isolate overflow-hidden rounded-[2rem] lg:col-span-12" data-reveal>
              <img src="/images/villa-day.jpg" alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
              <div className="absolute inset-0 -z-10 bg-ink/55" />
              <div className="flex min-h-[340px] flex-col items-center justify-center gap-6 p-10 text-center sm:min-h-[420px]">
                <div className="rounded-sm border border-brass-light/60 bg-ink/80 px-10 py-8 shadow-2xl backdrop-blur sm:px-16">
                  <img src="/brand/bsr-elite-horizontal-on-dark.svg" alt="BSR Elite signage" className="h-16 sm:h-24" />
                </div>
                <p className="text-xs uppercase tracking-[0.35em] text-ivory/70">Studio & workshop signage</p>
              </div>
            </div>
          </div>

          {/* Usage */}
          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {[
              ["Clear space", "Keep space equal to the keystone's height × 2 on every side of the logo."],
              ["Minimum size", "Horizontal lockup: 120 px / 30 mm wide. Monogram: 24 px / 8 mm."],
              ["Don't", "Stretch, rotate, recolour outside the palette, or place on busy images without the reversed version."],
            ].map(([t, x], i) => (
              <div key={t} className="rounded-[1.5rem] border border-charcoal/10 p-7" data-reveal style={d(i * 70)}>
                <h3 className="font-display text-2xl">{t}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{x}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
