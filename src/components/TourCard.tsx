"use client";

import Link from "next/link";
import { tourHighlights } from "@/lib/data";
import type { Tour } from "@/types/scraped";
import { Badge } from "./Badge";

export function TourCard({ tour }: { tour: Tour }) {
  const highlights = tourHighlights(tour).slice(0, 2);
  const days = tour.itinerary_breakdown.length;

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-glass transition hover:border-emerald-400/30 hover:bg-white/[0.06]">
      {/* Header gradient band */}
      <div className="border-b border-white/[0.06] bg-gradient-to-r from-slate-900 to-slate-800/80 px-5 py-6">
        <Badge variant="theme">{tour.tour_overview.theme}</Badge>
        <h2 className="mt-3 font-display text-xl font-semibold leading-snug text-white">
          <Link href={`/tours/${tour.id}`} className="hover:text-emerald-300 transition-colors">
            {tour.tour_overview.package_name}
          </Link>
        </h2>
        <p className="mt-2 text-sm text-slate-400">{tour.tour_overview.duration}</p>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <dl className="grid grid-cols-1 gap-2 text-sm text-slate-300 sm:grid-cols-3">
          <div>
            <dt className="font-medium text-slate-500">Stay</dt>
            <dd>{tour.core_inclusions.accommodation}</dd>
          </div>
          <div>
            <dt className="font-medium text-slate-500">Meals</dt>
            <dd className="line-clamp-2">{tour.core_inclusions.meals}</dd>
          </div>
          <div>
            <dt className="font-medium text-slate-500">Transport</dt>
            <dd className="line-clamp-2">{tour.core_inclusions.transport}</dd>
          </div>
        </dl>

        <p className="mt-4 text-sm text-slate-400">
          {days} itinerary {days === 1 ? "day" : "days"}
        </p>

        {highlights.length > 0 && (
          <ul className="mt-3 space-y-1 text-sm text-slate-400">
            {highlights.map((item, i) => (
              <li key={i} className="line-clamp-2">
                · {item}
              </li>
            ))}
          </ul>
        )}

        {/* Actions */}
        <div className="mt-auto flex items-center justify-between gap-3 border-t border-white/[0.06] pt-5">
          <Link
            href={`/tours/${tour.id}`}
            className="text-sm font-semibold text-slate-300 transition hover:text-white"
          >
            View itinerary →
          </Link>
          <button
            type="button"
            className="inline-flex items-center gap-1.5 rounded-xl border border-emerald-400/25 bg-emerald-400/10 px-3.5 py-2 text-xs font-semibold text-emerald-300 transition hover:bg-emerald-400/20 hover:border-emerald-400/40 hover:shadow-glow-emerald"
            onClick={() => {
              const fab = document.getElementById("chat-widget-fab");
              if (fab) {
                fab.click();
              } else {
                const panel = document.getElementById("serendib-panel");
                if (panel) panel.scrollIntoView({ behavior: "smooth", block: "center" });
              }
            }}
          >
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden>
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 14.2a7.2 7.2 0 0 1-6-3.22c.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08a7.2 7.2 0 0 1-6 3.22z"/>
            </svg>
            Plan with Serendib
          </button>
        </div>
      </div>
    </article>
  );
}
