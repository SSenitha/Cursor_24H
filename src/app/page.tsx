import Link from "next/link";
import { ExperienceCard } from "@/components/ExperienceCard";
import { TourCard } from "@/components/TourCard";
import { getAllExperiences, getAllTours, getStats } from "@/lib/data";

type HeroStatCounts = {
  tours: number;
  destinations: number;
  experiences: number;
};

function StatBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-white/15 bg-white/[0.08] px-4 py-8 text-center shadow-xl shadow-black/20 backdrop-blur-md">
      <dt className="font-display text-4xl font-bold tabular-nums leading-none tracking-tight text-saffron-300 sm:text-5xl">
        {value}
      </dt>
      <dd className="mt-3 text-sm font-medium leading-snug text-white/80 sm:text-base">
        {label}
      </dd>
    </div>
  );
}

export default function HomePage() {
  const stats = getStats();
  const featuredTours = getAllTours().slice(0, 3);
  const featuredExperiences = getAllExperiences().slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-jungle-900 via-jungle-800 to-ocean-900 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,168,46,0.16),transparent_45%),radial-gradient(circle_at_85%_10%,rgba(77,170,184,0.22),transparent_42%),radial-gradient(ellipse_at_bottom,rgba(15,33,21,0.55),transparent_55%)]" />
        <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:py-16">
          {/* 2-col 50/50 grid at lg+: left = copy, right = stat boxes */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center lg:gap-10 xl:gap-14">
            {/* Left column — copy */}
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-saffron-300">
                Sri Lankan Tourism
              </p>
              <h1 className="mt-3 font-display text-balance text-4xl font-semibold leading-tight sm:mt-4 sm:text-5xl lg:text-4xl xl:text-5xl">
                Discover{" "}
                <span className="bg-gradient-to-r from-saffron-200 via-saffron-400 to-saffron-500 bg-clip-text text-transparent">
                  Sri Lanka
                </span>{" "}
                through curated tours &amp;{" "}
                <span className="bg-gradient-to-r from-ocean-200 via-ocean-300 to-white/95 bg-clip-text text-transparent">
                  experiences
                </span>
              </h1>
              <p className="mt-3 text-sm leading-relaxed text-white/80 sm:mt-4 sm:text-base">
                Explore {stats.tours} tour packages, {stats.destinations} destinations, and{" "}
                {stats.experiences} unique experiences from our curated Sri Lanka dataset.
              </p>
              <div className="mt-4 flex flex-wrap gap-3 sm:mt-5 sm:gap-4">
                <Link
                  href="/tours"
                  className="rounded-full bg-saffron-500 px-5 py-2.5 text-sm font-semibold text-jungle-950 shadow-lg transition hover:bg-saffron-400 sm:px-6 sm:py-3"
                >
                  Browse tours
                </Link>
                <Link
                  href="/destinations"
                  className="rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold backdrop-blur transition hover:bg-white/20 sm:px-6 sm:py-3"
                >
                  View destinations
                </Link>
              </div>
            </div>

            {/* Right column — stat boxes (3-col internal grid) */}
            <dl className="grid grid-cols-3 gap-4 sm:gap-5 lg:gap-4 xl:gap-5">
              <StatBox value={stats.tours} label="Tour packages" />
              <StatBox value={stats.destinations} label="Destinations" />
              <StatBox value={stats.experiences} label="Experiences" />
            </dl>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl font-semibold text-jungle-900">Featured tours</h2>
            <p className="mt-2 text-jungle-600">Hand-picked packages from your scraped data.</p>
          </div>
          <Link href="/tours" className="text-sm font-semibold text-jungle-700 hover:text-saffron-600">
            See all →
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredTours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </section>

      <section className="border-t border-jungle-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl font-semibold text-jungle-900">
                Top experiences
              </h2>
              <p className="mt-2 text-jungle-600">Temples, wildlife, culture, and adventure.</p>
            </div>
            <Link
              href="/experiences"
              className="text-sm font-semibold text-jungle-700 hover:text-saffron-600"
            >
              See all →
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredExperiences.map((exp) => (
              <ExperienceCard key={exp.id} experience={exp} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
