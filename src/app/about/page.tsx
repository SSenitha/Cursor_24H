import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Ceylon Explorer — the team, the mission, and our love for Sri Lanka.",
};

const values = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: "Authentic Discovery",
    description:
      "Every itinerary is shaped by real travel experiences — not generic templates. We surface hidden gems alongside iconic landmarks.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Community-Driven",
    description:
      "Built by travellers for travellers. Our curation draws on thousands of first-hand accounts, reviews, and local insights.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: "Quality Curation",
    description:
      "We don't list everything — we list the best. Each tour, destination, and experience is evaluated for quality and traveller satisfaction.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Responsible Tourism",
    description:
      "We champion eco-friendly operators and culturally respectful travel, ensuring Sri Lanka's beauty endures for future generations.",
  },
];

const team = [
  {
    name: "Ganindu Deshapriya",
    role: "AI & Automation Engineer",
    photo:
      "https://media.licdn.com/dms/image/v2/D5603AQFSa0pUsRsY9w/profile-displayphoto-shrink_800_800/B56Zdp8VcqHUAc-/0/1749829116803?e=1780531200&v=beta&t=cM-E6rVmLnuMBL3iHUx2ooN-1sQQ2LjJuWhhuLYkXA8",
    bio: "Ganindu breathes life into Serendib — engineering the AI avatar, designing natural conversation flows, and wiring the automation backbone that powers every intelligent interaction on the platform.",
  },
  {
    name: "Sandaru Senitha",
    role: "Data Engineer",
    photo:
      "https://media.licdn.com/dms/image/v2/D5603AQEf8ZR_oMKJdQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1721582953908?e=1780531200&v=beta&t=B8Tmv-gsuTBollHzcWu7cjRMoVyXlMoMR52cAqMEVnw",
    bio: "Sandaru architects the knowledge base that gives Serendib her depth — curating, structuring, and enriching Sri Lanka travel data so every answer the AI gives is grounded, accurate, and insightful.",
  },
  {
    name: "Dilini Sewwandi",
    role: "Frontend Developer",
    photo:
      "https://media.licdn.com/dms/image/v2/D5603AQH9e69B6ohkiQ/profile-displayphoto-shrink_800_800/B56ZYMGo9kH0Ac-/0/1743959789970?e=1780531200&v=beta&t=iEbC630lkk7hhuP6Y8ihmMk1qglD2w0FeQrd_sLe2dM",
    bio: "Dilini crafts the tourist-facing experience — translating design concepts into a polished, responsive interface that makes exploring Sri Lanka's tours, destinations, and experiences a genuine joy.",
  },
];

const stats = [
  { value: "2019", label: "Founded" },
  { value: "50+", label: "Tour partners" },
  { value: "25", label: "Destinations covered" },
  { value: "10k+", label: "Happy travellers" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/[0.06] bg-slate-950">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_-10%,rgba(16,185,129,0.12),transparent_55%),radial-gradient(ellipse_60%_50%_at_80%_110%,rgba(45,212,191,0.08),transparent_55%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:py-32 text-center">
          <p className="animate-fade-in-up text-sm font-medium uppercase tracking-widest text-emerald-400/80">
            Our Story
          </p>
          <h1 className="animate-fade-in-up mt-4 font-display text-balance text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl text-white" style={{ animationDelay: "80ms" }}>
            We live &amp; breathe{" "}
            <span className="bg-gradient-to-r from-emerald-300 via-emerald-400 to-emerald-500 bg-clip-text text-transparent">
              Sri Lanka
            </span>
          </h1>
          <p className="animate-fade-in-up mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg" style={{ animationDelay: "160ms" }}>
            Ceylon Explorer was born from a simple belief — that one of the world&#39;s most breathtaking islands deserves a travel guide as extraordinary as the destination itself.
          </p>
          <div className="animate-fade-in-up mt-8 flex flex-wrap justify-center gap-4" style={{ animationDelay: "240ms" }}>
            <Link
              href="/tours"
              className="rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-glow-emerald transition hover:shadow-glow-emerald-lg hover:scale-[1.03] active:scale-[0.98]"
            >
              Explore tours
            </Link>
            <Link
              href="/destinations"
              className="rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-slate-300 backdrop-blur-sm transition hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
            >
              View destinations
            </Link>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-y border-white/[0.05] bg-slate-950/80">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <dl className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="animate-fade-in-up flex flex-col items-center rounded-2xl border border-white/[0.08] bg-white/[0.04] px-6 py-6 text-center backdrop-blur-md transition hover:border-emerald-400/20 hover:bg-white/[0.06]"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <dt className="font-display text-3xl font-bold text-emerald-400 sm:text-4xl">{s.value}</dt>
                <dd className="mt-2 text-xs font-medium uppercase tracking-widest text-slate-500">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-slate-950 py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            <div className="animate-fade-in-up">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
                Our Mission
              </p>
              <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
                Making Sri Lanka easy to fall in love with
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-400">
                We started Ceylon Explorer because planning a Sri Lanka trip was harder than it needed to be. Hundreds of operators, dozens of regions, countless experiences — but no single trustworthy place to compare them all.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-400">
                Today our platform aggregates curated tour packages, pinpoints unmissable destinations, and showcases unique experiences — from ancient temple circuits and spice-garden walks to blue-whale encounters off the southern coast.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-400">
                Whether you have three days or three weeks, Ceylon Explorer helps you spend every hour of it well.
              </p>
            </div>

            {/* Decorative image placeholder */}
            <div
              className="animate-fade-in-up relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-slate-900 to-slate-950 shadow-glass-lg"
              style={{ animationDelay: "120ms" }}
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_30%_30%,rgba(16,185,129,0.1),transparent_55%),radial-gradient(ellipse_60%_50%_at_75%_75%,rgba(45,212,191,0.08),transparent_55%)]" />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-8 text-center">
                <span className="text-6xl">🌿</span>
                <p className="font-display text-2xl font-semibold text-white">Pearl of the Indian Ocean</p>
                <p className="text-sm text-slate-500">Tea hills · Ancient temples · Coral reefs · Wildlife</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-white/[0.04] bg-slate-950 py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="animate-fade-in-up text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
              What We Stand For
            </p>
            <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
              Our values
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-slate-500">
              Four principles guide every decision we make — from which tours we list to how we present each destination.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="animate-fade-in-up glass glass-hover rounded-2xl p-6"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/[0.08] text-emerald-400">
                  {v.icon}
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-white">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-slate-950 py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="animate-fade-in-up text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
              The People
            </p>
            <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
              Meet the team
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-slate-500">
              A small, passionate crew of travellers, technologists, and storytellers united by a love for Sri Lanka.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {team.map((member, i) => (
              <div
                key={member.name}
                className="animate-fade-in-up glass glass-hover rounded-2xl p-8 text-center"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="mx-auto h-24 w-24 overflow-hidden rounded-full border-2 border-emerald-400/30 shadow-lg shadow-emerald-400/10">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-white">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-emerald-400/80">{member.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/[0.04] bg-slate-950 py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <div className="relative rounded-3xl border border-white/[0.08] bg-gradient-to-br from-slate-900 to-slate-950 p-12 shadow-glass-lg overflow-hidden">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(16,185,129,0.12),transparent_70%)]" aria-hidden />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" aria-hidden />

            <div className="relative">
              <span className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-400/30 bg-emerald-400/[0.08]">
                <svg viewBox="0 0 24 24" className="h-8 w-8 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </span>
              <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
                Ready to explore Sri Lanka?
              </h2>
              <p className="mt-4 text-base text-slate-400 leading-relaxed">
                Browse our curated collection of tours, destinations, and experiences — and start planning the trip of a lifetime.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  href="/tours"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 px-8 py-3.5 text-sm font-semibold text-slate-950 shadow-glow-emerald transition hover:shadow-glow-emerald-lg hover:scale-[1.03] active:scale-[0.98]"
                >
                  Browse tours
                </Link>
                <Link
                  href="/experiences"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-8 py-3.5 text-sm font-semibold text-slate-300 backdrop-blur-sm transition hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
                >
                  Discover experiences
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
