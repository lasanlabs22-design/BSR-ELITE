"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { categories, projects, type Category } from "@/lib/content";

export function PortfolioGrid() {
  const [filter, setFilter] = useState<"All" | Category>("All");
  const [active, setActive] = useState<number | null>(null);
  const touchX = useRef<number | null>(null);

  const list = useMemo(() => (filter === "All" ? projects : projects.filter((p) => p.category === filter)), [filter]);

  const close = useCallback(() => setActive(null), []);
  const step = useCallback((dir: 1 | -1) => setActive((i) => (i === null ? i : (i + dir + list.length) % list.length)), [list.length]);

  useEffect(() => {
    if (active === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close, step]);

  const current = active !== null ? list[active] : null;

  return (
    <>
      <div className="-mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
        <div role="tablist" aria-label="Filter projects" className="flex w-max gap-2 sm:w-auto sm:flex-wrap">
          {categories.map((c) => {
            const count = c === "All" ? projects.length : projects.filter((p) => p.category === c).length;
            const on = filter === c;
            return (
              <button
                key={c}
                role="tab"
                aria-selected={on}
                onClick={() => setFilter(c)}
                className={`flex items-center gap-2 rounded-full border px-5 py-2.5 text-[0.75rem] font-semibold uppercase tracking-[0.16em] transition-all duration-300 ${
                  on ? "border-charcoal bg-charcoal text-ivory" : "border-charcoal/15 text-charcoal hover:border-charcoal"
                }`}
              >
                {c}
                <span className={`text-[0.65rem] ${on ? "text-brass-light" : "text-muted"}`}>{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      <ul className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3">
        {list.map((p, i) => (
          <li key={p.title} className="mb-5 break-inside-avoid">
            <button
              type="button"
              onClick={() => setActive(i)}
              className="img-zoom group relative block w-full overflow-hidden rounded-[1.5rem] text-left"
              aria-label={`Open ${p.title}`}
            >
              <div className={`relative w-full ${p.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
                <Image src={p.image} alt={p.title} fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-ivory/90 text-charcoal opacity-0 transition-all duration-500 group-hover:opacity-100">
                <Expand className="h-4 w-4" />
              </span>
              <div className="absolute inset-x-0 bottom-0 p-6 text-ivory">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-brass-light">
                  {p.category} · {p.type}
                </p>
                <h3 className="mt-1.5 font-display text-2xl">{p.title}</h3>
              </div>
            </button>
          </li>
        ))}
      </ul>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          className="fixed inset-0 z-[60] flex flex-col bg-ink/95 text-ivory backdrop-blur-sm"
          onClick={close}
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
            touchX.current = null;
          }}
        >
          <div className="container-x flex items-center justify-between py-5" onClick={(e) => e.stopPropagation()}>
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-brass-light">
                {current.category} · {current.type}
              </p>
              <h3 className="font-display text-2xl sm:text-3xl">{current.title}</h3>
            </div>
            <button onClick={close} aria-label="Close" className="flex h-12 w-12 items-center justify-center rounded-full border border-ivory/20 hover:bg-ivory hover:text-ink">
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="relative mx-auto w-full max-w-6xl flex-1 px-4 pb-4">
            <Image key={current.image} src={current.image} alt={current.title} fill sizes="100vw" className="object-contain px-4" />
          </div>
          <div className="container-x flex items-center justify-between pb-8 pt-2" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => step(-1)} aria-label="Previous" className="flex h-12 w-12 items-center justify-center rounded-full border border-ivory/20 hover:bg-ivory hover:text-ink">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <span className="text-xs tracking-[0.3em] text-ivory/60">
              {String((active ?? 0) + 1).padStart(2, "0")} / {String(list.length).padStart(2, "0")}
            </span>
            <button onClick={() => step(1)} aria-label="Next" className="flex h-12 w-12 items-center justify-center rounded-full border border-ivory/20 hover:bg-ivory hover:text-ink">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
