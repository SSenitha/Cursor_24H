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
    accent: "border-jungle-400",
  },
  {
    name: "Sandaru Senitha",
    role: "Data Engineer",
    photo:
      "https://media.licdn.com/dms/image/v2/D5603AQEf8ZR_oMKJdQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1721582953908?e=1780531200&v=beta&t=B8Tmv-gsuTBollHzcWu7cjRMoVyXlMoMR52cAqMEVnw",
    bio: "Sandaru architects the knowledge base that gives Serendib her depth — curating, structuring, and enriching Sri Lanka travel data so every answer the AI gives is grounded, accurate, and insightful.",
    accent: "border-ocean-400",
  },
  {
    name: "Dilini Sewwandi",
    role: "Frontend Developer",
    photo:
      "https://media.licdn.com/dms/image/v2/D5603AQH9e69B6ohkiQ/profile-displayphoto-shrink_800_800/B56ZYMGo9kH0Ac-/0/1743959789970?e=1780531200&v=beta&t=iEbC630lkk7hhuP6Y8ihmMk1qglD2w0FeQrd_sLe2dM",
    bio: "Dilini crafts the tourist-facing experience — translating design concepts into a polished, responsive interface that makes exploring Sri Lanka's tours, destinations, and experiences a genuine joy.",
    accent: "border-saffron-400",
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
      <section className="relative overflow-hidden bg-gradient-to-br from-jungle-900 via-jungle-800 to-ocean-900 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,168,46,0.16),transparent_45%),radial-gradient(circle_at_85%_10%,rgba(77,170,184,0.22),transparent_42%),radial-gradient(ellipse_at_bottom,rgba(15,33,21,0.55),transparent_55%)]" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:py-32 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-saffron-300">
            Our Story
          </p>
          <h1 className="mt-4 font-display text-balance text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            We live &amp; breathe{" "}
            <span className="bg-gradient-to-r from-saffron-200 via-saffron-400 to-saffron-500 bg-clip-text text-transparent">
              Sri Lanka
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            Ceylon Explorer was born from a simple belief — that one of the world's most breathtaking islands deserves a travel guide as extraordinary as the destination itself.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/tours"
              className="rounded-full bg-saffron-500 px-6 py-3 text-sm font-semibold text-jungle-950 shadow-lg transition hover:bg-saffron-400"
            >
              Explore tours
            </Link>
            <Link
              href="/destinations"
              className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold backdrop-blur transition hover:bg-white/20"
            >
              View destinations
            </Link>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-b border-jungle-200 bg-jungle-50">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <dt className="font-display text-4xl font-bold text-jungle-800">{s.value}</dt>
                <dd className="mt-1 text-sm font-medium text-jungle-500">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Mission */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          {/* Text */}
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-saffron-600">
              Our Mission
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-jungle-900 sm:text-4xl">
              Making Sri Lanka easy to fall in love with
            </h2>
            <p className="mt-5 text-base leading-relaxed text-jungle-700">
              We started Ceylon Explorer because planning a Sri Lanka trip was harder than it needed to be. Hundreds of operators, dozens of regions, countless experiences — but no single trustworthy place to compare them all.
            </p>
            <p className="mt-4 text-base leading-relaxed text-jungle-700">
              Today our platform aggregates curated tour packages, pinpoints unmissable destinations, and showcases unique experiences — from ancient temple circuits and spice-garden walks to blue-whale encounters off the southern coast.
            </p>
            <p className="mt-4 text-base leading-relaxed text-jungle-700">
              Whether you have three days or three weeks, Ceylon Explorer helps you spend every hour of it well.
            </p>
          </div>

          {/* Decorative image placeholder */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-jungle-700 via-jungle-800 to-ocean-900 shadow-2xl">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,168,46,0.2),transparent_50%),radial-gradient(circle_at_75%_75%,rgba(77,170,184,0.2),transparent_50%)]" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center px-8">
              <span className="text-6xl">🌿</span>
              <p className="font-display text-2xl font-semibold text-white">Pearl of the Indian Ocean</p>
              <p className="text-sm text-white/60">Tea hills · Ancient temples · Coral reefs · Wildlife</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-jungle-200 bg-jungle-50">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-saffron-600">
              What We Stand For
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-jungle-900 sm:text-4xl">
              Our values
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-jungle-600">
              Four principles guide every decision we make — from which tours we list to how we present each destination.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-jungle-200 bg-white p-6 shadow-sm transition hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-jungle-100 text-jungle-700">
                  {v.icon}
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-jungle-900">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-jungle-600">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-saffron-600">
            The People
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-jungle-900 sm:text-4xl">
            Meet the team
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-jungle-600">
            A small, passionate crew of travellers, technologists, and storytellers united by a love for Sri Lanka.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {team.map((member) => (
            <div
              key={member.name}
              className="rounded-2xl border border-jungle-200 bg-white p-8 text-center shadow-sm transition hover:shadow-md hover:-translate-y-0.5"
            >
              <div className={`mx-auto h-24 w-24 overflow-hidden rounded-full border-4 ${member.accent} shadow-lg`}>
                <Image
                  src={member.photo}
                  alt={member.name}
                  width={96}
                  height={96}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-jungle-900">
                {member.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-saffron-600">{member.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-jungle-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-jungle-200 bg-gradient-to-br from-jungle-900 via-jungle-800 to-ocean-900">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(249,134,10,0.12),transparent_60%)]" />
        <div className="relative mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            Ready to explore Sri Lanka?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/70">
            Browse our curated collection of tours, destinations, and experiences — and start planning the trip of a lifetime.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/tours"
              className="rounded-full bg-saffron-500 px-7 py-3 text-sm font-semibold text-jungle-950 shadow-lg transition hover:bg-saffron-400"
            >
              Browse tours
            </Link>
            <Link
              href="/experiences"
              className="rounded-full border border-white/30 bg-white/10 px-7 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              Discover experiences
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
