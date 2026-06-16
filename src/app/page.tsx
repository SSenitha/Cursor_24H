"use client";

import Link from "next/link";
import { getAllExperiences, getAllTours, getAllDestinations, getStats } from "@/lib/data";
import { SerendibPanel } from "@/components/SerendibPanel";
import { TourCard }       from "@/components/TourCard";
import { ExperienceCard } from "@/components/ExperienceCard";
import { DestinationCard } from "@/components/DestinationCard";

/* ── Feature cards data ─────────────────────────────────────────── */
const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M9 20l-5.447-2.724A1 1 0 0 1 3 16.382V5.618a1 1 0 0 1 1.447-.894L9 7m0 13 6-3m-6 3V7m6 10 4.553 2.276A1 1 0 0 0 21 18.382V7.618a1 1 0 0 0-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    title: "Plan Your Trip",
    desc:  "Tell Serendib your dates, interests, and budget — she'll craft a full itinerary in seconds.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
    ),
    title: "Discover Hidden Gems",
    desc:  "From misty Knuckles trails to lagoon sunsets in Kalpitiya — local secrets, unlocked.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    title: "Curated Recommendations",
    desc:  "Handpicked tours, stays, and experiences — all verified from our Sri Lanka dataset.",
  },
];

/* ── Stat strip ─────────────────────────────────────────────────── */
function StatPill({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-white/[0.08] bg-white/[0.04] px-8 py-6 text-center backdrop-blur-md transition hover:border-emerald-400/20 hover:bg-white/[0.06]">
      <dt className="font-display text-3xl font-bold text-emerald-400 sm:text-4xl">{value}+</dt>
      <dd className="mt-2 text-xs font-medium uppercase tracking-widest text-slate-500">{label}</dd>
    </div>
  );
}

/* ── Section heading ────────────────────────────────────────────── */
function SectionHeading({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="mb-10 text-center">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">{eyebrow}</p>
      <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
      {sub && <p className="mt-3 text-sm text-slate-500">{sub}</p>}
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════ */
export default function HomePage() {
  const stats              = getStats();
  const featuredTours      = getAllTours().slice(0, 3);
  const featuredExperiences = getAllExperiences().slice(0, 3);
  const featuredDestinations = getAllDestinations().slice(0, 3);

  return (
    <>
      {/* ═══════════════════════════════════════════════════════════
          HERO — Serendib center stage
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[calc(100vh-64px)] overflow-hidden bg-slate-950">
        {/* Aurora mesh background */}
        <div
          className="pointer-events-none absolute inset-0 animate-aurora bg-hero-aurora"
          aria-hidden
        />
        {/* Noise overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='256' height='256'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='256' height='256' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
          aria-hidden
        />
        {/* Grid pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
          aria-hidden
        />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-20">

          {/* ── Left: Copy ── */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0ms" }}>
            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.08] px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-status-pulse" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                AI-Powered Sri Lanka Travel
              </span>
            </div>

            <h1 className="font-display text-5xl font-semibold leading-[1.12] tracking-tight text-white sm:text-6xl lg:text-5xl xl:text-6xl">
              Meet{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-emerald-300 via-emerald-400 to-emerald-500 bg-clip-text text-transparent">
                  Serendib
                </span>
                {/* Underline glow */}
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent" aria-hidden />
              </span>
              <br />
              <span className="text-slate-300">Your Personal</span>
              <br />
              <span className="text-slate-400">Ceylon Concierge</span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-400 sm:text-lg">
              An AI travel companion who knows every beach, temple, safari, and tea trail in Sri Lanka.
              Ask anything. Plan everything. Start in seconds.
            </p>

            {/* Capability chips */}
            <div className="mt-8 flex flex-wrap gap-2">
              {["Plan itineraries", "Find experiences", "Discover destinations", "Local tips"].map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-1.5 text-sm text-slate-400 backdrop-blur-sm transition hover:border-emerald-400/25 hover:text-slate-200"
                >
                  {chip}
                </span>
              ))}
            </div>

            {/* Secondary CTA row */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/tours"
                id="hero-browse-tours"
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-slate-300 backdrop-blur-sm transition hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
              >
                Browse tours
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/destinations"
                id="hero-browse-destinations"
                className="text-sm font-medium text-slate-500 underline-offset-4 transition hover:text-slate-300 hover:underline"
              >
                View destinations →
              </Link>
            </div>
          </div>

          {/* ── Right: Serendib Agent Panel ── */}
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "120ms" }}
          >
            {/* Outer glow halo */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-emerald-400/5 blur-2xl animate-glow-pulse pointer-events-none" aria-hidden />
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-emerald-400/20 via-transparent to-transparent pointer-events-none" aria-hidden />
              <SerendibPanel embedded />
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950 to-transparent" aria-hidden />
      </section>

      {/* ═══════════════════════════════════════════════════════════
          STATS STRIP
      ═══════════════════════════════════════════════════════════ */}
      <section className="border-y border-white/[0.05] bg-slate-950/80">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
          <dl className="grid grid-cols-3 gap-4 sm:gap-6">
            <StatPill value={stats.tours}        label="Tour packages" />
            <StatPill value={stats.destinations} label="Destinations"  />
            <StatPill value={stats.experiences}  label="Experiences"   />
          </dl>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          WHAT SERENDIB CAN DO
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-slate-950 py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Capabilities"
            title="What Serendib can do for you"
            sub="From first question to full itinerary — Serendib handles it all."
          />
          <div className="grid gap-5 sm:grid-cols-3">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="glass glass-hover rounded-2xl p-6 transition animate-fade-in-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/[0.08] text-emerald-400">
                  {f.icon}
                </div>
                <h3 className="text-base font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FEATURED TOURS
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-slate-950 py-24 border-t border-white/[0.04]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">Featured</p>
              <h2 className="font-display text-3xl font-semibold text-white">Tour packages</h2>
              <p className="mt-2 text-sm text-slate-500">Handpicked from our curated Sri Lanka dataset.</p>
            </div>
            <Link href="/tours" className="shrink-0 text-sm font-medium text-slate-400 transition hover:text-emerald-400">
              See all →
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FEATURED EXPERIENCES
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-slate-950 py-24 border-t border-white/[0.04]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">Explore</p>
              <h2 className="font-display text-3xl font-semibold text-white">Top experiences</h2>
              <p className="mt-2 text-sm text-slate-500">Temples, wildlife, culture, and adventure.</p>
            </div>
            <Link href="/experiences" className="shrink-0 text-sm font-medium text-slate-400 transition hover:text-emerald-400">
              See all →
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredExperiences.map((exp) => (
              <ExperienceCard key={exp.id} experience={exp} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FEATURED DESTINATIONS
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-slate-950 py-24 border-t border-white/[0.04]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">Destinations</p>
              <h2 className="font-display text-3xl font-semibold text-white">Where to wander</h2>
              <p className="mt-2 text-sm text-slate-500">From highlands to coastlines — Sri Lanka awaits.</p>
            </div>
            <Link href="/destinations" className="shrink-0 text-sm font-medium text-slate-400 transition hover:text-emerald-400">
              See all →
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredDestinations.map((dest) => (
              <DestinationCard key={dest.url} destination={dest} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          ASK SERENDIB CTA BANNER
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-slate-950 py-24 border-t border-white/[0.04]">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <div className="relative rounded-3xl border border-white/[0.08] bg-gradient-to-br from-slate-900 to-slate-950 p-12 shadow-glass-lg overflow-hidden">
            {/* Glow */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(16,185,129,0.12),transparent_70%)]" aria-hidden />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" aria-hidden />

            <div className="relative">
              <span className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-400/30 bg-emerald-400/[0.08]">
                <svg viewBox="0 0 24 24" className="h-8 w-8 text-emerald-400" fill="currentColor" aria-hidden>
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 14.2a7.2 7.2 0 0 1-6-3.22c.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08a7.2 7.2 0 0 1-6 3.22z"/>
                </svg>
              </span>
              <h2 className="mt-2 font-display text-3xl font-semibold text-white sm:text-4xl">
                Ready to plan your trip?
              </h2>
              <p className="mt-4 text-base text-slate-400 leading-relaxed">
                Serendib is online and ready. Tell her where you want to go — she&apos;ll handle the rest.
              </p>
              <button
                id="bottom-cta-serendib"
                onClick={() => {
                  const el = document.getElementById("serendib-panel");
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
                }}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 px-8 py-3.5 text-sm font-semibold text-slate-950 shadow-glow-emerald transition hover:shadow-glow-emerald-lg hover:scale-[1.03] active:scale-[0.98]"
              >
                <span className="h-2 w-2 rounded-full bg-slate-950/50 animate-status-pulse" />
                Talk to Serendib now
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
