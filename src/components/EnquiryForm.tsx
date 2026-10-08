"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { whatsappLink } from "@/lib/site";

const rooms = ["Kitchen", "Wardrobes", "Living / TV Unit", "Bedroom", "False Ceiling", "Pooja Unit", "Full Home"];
const homeTypes = ["Apartment", "Villa", "Independent House", "Duplex", "Office / Other"];
const budgets = ["Under ₹3 Lakh", "₹3 – 6 Lakh", "₹6 – 10 Lakh", "₹10 – 20 Lakh", "₹20 Lakh +", "Not sure yet"];

const field =
  "w-full rounded-xl border border-charcoal/15 bg-ivory px-4 py-3.5 text-[0.95rem] text-charcoal outline-none transition-colors placeholder:text-muted/60 focus:border-brass";
const label = "mb-2 block text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-muted";

export function EnquiryForm() {
  const [selected, setSelected] = useState<string[]>([]);
  const [error, setError] = useState("");

  const toggle = (r: string) => setSelected((s) => (s.includes(r) ? s.filter((x) => x !== r) : [...s, r]));

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    if (!name || phone.replace(/\D/g, "").length < 10) {
      setError("Please enter your name and a valid 10-digit phone number.");
      return;
    }
    setError("");
    const lines = [
      "Hello BSR Elite, I'd like a consultation.",
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Home: ${data.get("home") || "-"}`,
      `Location: ${String(data.get("location") || "-").trim() || "-"}`,
      `Interested in: ${selected.length ? selected.join(", ") : "-"}`,
      `Budget: ${data.get("budget") || "-"}`,
      String(data.get("message") || "").trim() && `Notes: ${String(data.get("message")).trim()}`,
    ].filter(Boolean);
    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-6 sm:grid-cols-2">
      <div>
        <label htmlFor="name" className={label}>
          Your name *
        </label>
        <input id="name" name="name" autoComplete="name" required className={field} placeholder="Full name" />
      </div>
      <div>
        <label htmlFor="phone" className={label}>
          Phone *
        </label>
        <input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" required className={field} placeholder="10-digit mobile" />
      </div>
      <div>
        <label htmlFor="home" className={label}>
          Home type
        </label>
        <select id="home" name="home" className={field} defaultValue="">
          <option value="" disabled>
            Select
          </option>
          {homeTypes.map((h) => (
            <option key={h}>{h}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="location" className={label}>
          Location / Area
        </label>
        <input id="location" name="location" className={field} placeholder="Area, city" />
      </div>

      <fieldset className="sm:col-span-2">
        <legend className={label}>I&apos;m interested in</legend>
        <div className="flex flex-wrap gap-2">
          {rooms.map((r) => {
            const on = selected.includes(r);
            return (
              <button
                type="button"
                key={r}
                aria-pressed={on}
                onClick={() => toggle(r)}
                className={`rounded-full border px-4 py-2.5 text-sm transition-all ${
                  on ? "border-brass bg-brass text-ivory" : "border-charcoal/15 bg-ivory text-charcoal hover:border-brass"
                }`}
              >
                {r}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="sm:col-span-2">
        <label htmlFor="budget" className={label}>
          Approximate budget
        </label>
        <select id="budget" name="budget" className={field} defaultValue="">
          <option value="" disabled>
            Select a range
          </option>
          {budgets.map((b) => (
            <option key={b}>{b}</option>
          ))}
        </select>
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="message" className={label}>
          Tell us about your project
        </label>
        <textarea id="message" name="message" rows={4} className={`${field} resize-none`} placeholder="Possession date, style you like, anything else…" />
      </div>

      {error && (
        <p role="alert" className="text-sm font-medium text-red-700 sm:col-span-2">
          {error}
        </p>
      )}

      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-relaxed text-muted">Submitting opens WhatsApp with your details pre-filled — just hit send.</p>
        <button type="submit" className="btn-dark shrink-0">
          Send Enquiry <Send className="h-4 w-4" />
        </button>
      </div>
    </form>
  );
}
