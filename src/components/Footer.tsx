import Link from "next/link";
import { ArrowUpRight, Clock, MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { nav, site, whatsappLink } from "@/lib/site";
import { services } from "@/lib/content";
import { InstagramIcon, WhatsAppIcon } from "./Icons";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-ivory">
      <div className="container-x relative pb-10 pt-20 sm:pt-24">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo tone="light" />
            <p className="mt-7 max-w-sm text-[0.95rem] leading-relaxed text-ivory/65">
              Designed by us. Made in our workshop. Installed by our own team. Bespoke interiors for every kind of home.
            </p>
            <div className="mt-8 flex gap-3">
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory/20 transition-colors hover:border-brass hover:bg-brass"
              >
                <InstagramIcon className="h-[18px] w-[18px]" />
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory/20 transition-colors hover:border-brass hover:bg-brass"
              >
                <WhatsAppIcon className="h-[18px] w-[18px]" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-8">
            <div>
              <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-brass">Explore</h3>
              <ul className="mt-6 space-y-3.5 text-[0.95rem] text-ivory/75">
                {nav.map((n) => (
                  <li key={n.href}>
                    <Link href={n.href} className="link-underline hover:text-ivory">
                      {n.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/brand/" className="link-underline hover:text-ivory">
                    Brand Identity
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-brass">Services</h3>
              <ul className="mt-6 space-y-3.5 text-[0.95rem] text-ivory/75">
                {services.slice(0, 6).map((s) => (
                  <li key={s.id}>
                    <Link href={`/services/#${s.id}`} className="link-underline hover:text-ivory">
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-brass">Get in touch</h3>
              <ul className="mt-6 space-y-4 text-[0.95rem] text-ivory/75">
                <li>
                  <a href={site.phoneHref} className="flex items-start gap-3 hover:text-ivory">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brass" strokeWidth={1.6} />
                    {site.phone}
                    <span className="sr-only">— {site.founder}</span>
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brass" strokeWidth={1.6} />
                  {site.hours}
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brass" strokeWidth={1.6} />
                  {site.serviceArea}
                </li>
                <li>
                  <Link href="/contact/" className="inline-flex items-center gap-1.5 text-brass-light hover:text-ivory">
                    Book a consultation <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p
          aria-hidden="true"
          className="pointer-events-none mt-20 select-none whitespace-nowrap text-center font-display text-[16.5vw] font-semibold leading-[0.8] tracking-[0.06em] text-ivory/[0.04] lg:text-[15rem]"
        >
          BSR ELITE
        </p>

        <div className="mt-6 flex flex-col gap-3 border-t border-ivory/10 pt-8 text-xs text-ivory/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <p className="tracking-[0.2em] uppercase">Design · Manufacture · Install</p>
        </div>
      </div>
    </footer>
  );
}
