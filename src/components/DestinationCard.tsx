"use client";

import Link from "next/link";
import { destinationName, slugFromUrl } from "@/lib/data";
import type { Destination } from "@/types/scraped";

export function DestinationCard({ destination }: { destination: Destination }) {
  const slug = slugFromUrl(destination.url);
  const name = destinationName(destination);

  return (
    <article className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-glass transition hover:border-emerald-400/30 hover:bg-white/[0.06]">
      <h2 className="font-display text-xl font-semibold text-white">
        <Link href={`/destinations/${slug}`} className="hover:text-emerald-300 transition-colors">
          {name}
        </Link>
      </h2>
      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-400">
        {destination.destination_profile.context}
      </p>
      {destination.destination_profile.relevance.length > 0 && (
        <p className="mt-3 text-xs font-medium uppercase tracking-wide text-emerald-400/80">
          {destination.destination_profile.relevance.join(" · ")}
        </p>
      )}

      {/* Actions */}
      <div className="mt-auto flex items-center justify-between gap-3 border-t border-white/[0.06] pt-4">
        <Link
          href={`/destinations/${slug}`}
          className="text-sm font-semibold text-slate-300 transition hover:text-white"
        >
          Explore destination →
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
    </article>
  );
}
