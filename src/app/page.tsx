import Link from "next/link";
import { ExperienceCard } from "@/components/ExperienceCard";
import { TourCard } from "@/components/TourCard";
import { getAllExperiences, getAllTours, getStats } from "@/lib/data";

export default function HomePage() {
  const stats = getStats();
  const featuredTours = getAllTours().slice(0, 3);
  const featuredExperiences = getAllExperiences().slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-jungle-900 via-jungle-800 to-ocean-900 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,168,46,0.2),transparent_50%)]" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <p className="text-sm font-medium uppercase tracking-widest text-saffron-300">
            Sri Lankan Tourism
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-balance text-4xl font-semibold leading-tight sm:text-6xl">
            Discover Ceylon through curated tours &amp; experiences
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-jungle-100/90">
            Explore {stats.tours} tour packages, {stats.destinations} destinations, and{" "}
            {stats.experiences} unique experiences from our curated Sri Lanka dataset.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/tours"
              className="rounded-full bg-saffron-500 px-6 py-3 text-sm font-semibold text-jungle-950 shadow-lg transition hover:bg-saffron-400"
            >
              Browse tours
            </Link>
            <Link
              href="/destinations"
              className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold backdrop-blur transition hover:bg-white/20"
            >
              View destinations
            </Link>
          </div>
          <dl className="mt-14 grid grid-cols-3 gap-6 border-t border-white/15 pt-10 sm:max-w-lg">
            <div>
              <dt className="text-3xl font-semibold text-saffron-300">{stats.tours}</dt>
              <dd className="mt-1 text-sm text-jungle-200">Tour packages</dd>
            </div>
            <div>
              <dt className="text-3xl font-semibold text-saffron-300">{stats.destinations}</dt>
              <dd className="mt-1 text-sm text-jungle-200">Destinations</dd>
            </div>
            <div>
              <dt className="text-3xl font-semibold text-saffron-300">{stats.experiences}</dt>
              <dd className="mt-1 text-sm text-jungle-200">Experiences</dd>
            </div>
          </dl>
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
