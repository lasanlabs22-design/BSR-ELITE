"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { Logo } from "./Logo";
import { nav, site, whatsappLink } from "@/lib/site";
import { InstagramIcon, WhatsAppIcon } from "./Icons";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const solid = scrolled && !open;
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href.replace(/\/$/, "")));

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out-soft ${
          solid ? "bg-ivory/92 py-3 shadow-[0_1px_0_rgba(28,26,23,0.08)] backdrop-blur-md" : "bg-transparent py-5"
        }`}
      >
        <div className="container-x flex items-center justify-between gap-6">
          <Link href="/" aria-label="BSR Elite — home" className="relative z-10">
            <Logo tone={solid ? "dark" : "light"} compact={scrolled} />
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-9 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`link-underline pb-1 text-[0.78rem] font-semibold uppercase tracking-[0.2em] transition-colors ${
                  solid ? "text-charcoal" : "text-ivory"
                } ${isActive(item.href) ? "bg-[length:100%_1px]" : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={site.phoneHref}
              className={`hidden items-center gap-2 text-[0.8rem] font-semibold tracking-wider md:flex ${solid ? "text-charcoal" : "text-ivory"}`}
            >
              <Phone className="h-4 w-4 text-brass" strokeWidth={1.8} />
              {site.phone}
            </a>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-brass hidden !px-5 !py-2.5 sm:inline-flex">
              Free Consultation
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="relative z-10 flex h-11 w-11 items-center justify-center lg:hidden"
            >
              <span className="sr-only">Menu</span>
              <span className="relative block h-3 w-7">
                <span
                  className={`absolute left-0 top-0 h-[1.5px] w-full transition-all duration-300 ${
                    solid ? "bg-charcoal" : "bg-ivory"
                  } ${open ? "top-1.5 rotate-45" : ""}`}
                />
                <span
                  className={`absolute bottom-0 left-0 h-[1.5px] transition-all duration-300 ${solid ? "bg-charcoal" : "bg-ivory"} ${
                    open ? "bottom-1.5 w-full -rotate-45" : "w-4"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-[45] flex flex-col bg-charcoal text-ivory transition-[opacity,visibility] duration-500 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="container-x flex flex-1 flex-col justify-center gap-2 pt-24">
          {nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              style={{ transitionDelay: open ? `${120 + i * 60}ms` : "0ms" }}
              className={`flex items-baseline gap-4 border-b border-ivory/10 py-4 font-display text-4xl transition-all duration-500 ease-out-soft ${
                open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              } ${isActive(item.href) ? "text-brass-light" : ""}`}
            >
              <span className="font-sans text-xs tracking-widest text-brass">0{i + 1}</span>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="container-x flex flex-col gap-4 pb-10 pt-6">
          <a href={site.phoneHref} className="btn-ghost-light w-full">
            <Phone className="h-4 w-4" /> {site.phone}
          </a>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-brass w-full">
            <WhatsAppIcon className="h-4 w-4" /> WhatsApp Us
          </a>
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center justify-center gap-2 text-xs tracking-widest text-ivory/60"
          >
            <InstagramIcon className="h-4 w-4" /> {site.instagramHandle}
          </a>
        </div>
      </div>
    </>
  );
}
