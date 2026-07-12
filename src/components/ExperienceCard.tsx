"use client";

import Link from "next/link";
import { experienceSlug } from "@/lib/data";
import type { Experience } from "@/types/scraped";
import { Badge } from "./Badge";

export function ExperienceCard({ experience }: { experience: Experience }) {
  const slug = experienceSlug(experience);
  const { experience: title, description } = experience.experience_profile;

  return (
    <article className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-glass transition hover:border-emerald-400/30 hover:bg-white/[0.06]">
      <Badge variant="ocean">Experience</Badge>
      <h2 className="mt-3 font-display text-xl font-semibold text-white">
        <Link href={`/experiences/${slug}`} className="hover:text-emerald-300 transition-colors">
          {title}
        </Link>
      </h2>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400 line-clamp-4">
        {description}
      </p>

      {/* Actions */}
      <div className="mt-4 flex items-center justify-between gap-3 border-t border-white/[0.06] pt-4">
        <Link
          href={`/experiences/${slug}`}
          className="text-sm font-semibold text-slate-300 transition hover:text-white"
        >
          Read more →
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
          Ask Serendib
        </button>
      </div>
    </article>
  );
}
