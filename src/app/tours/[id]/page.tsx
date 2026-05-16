import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/Badge";
import { ExternalLink } from "@/components/ExternalLink";
import { getAllTours, getTourById, tourHighlights } from "@/lib/data";

interface TourDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return getAllTours().map((tour) => ({ id: tour.id }));
}

export async function generateMetadata({ params }: TourDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const tour = getTourById(id);
  if (!tour) return { title: "Tour not found" };
  return {
    title: tour.tour_overview.package_name,
    description: `${tour.tour_overview.theme} · ${tour.tour_overview.duration}`,
  };
}

export default async function TourDetailPage({ params }: TourDetailPageProps) {
  const { id } = await params;
  const tour = getTourById(id);
  if (!tour) notFound();

  const highlights = tourHighlights(tour);
  const highlightGroups = Object.entries(tour.featured_experiences_and_highlights);

  return (
    <article>
      <header className="border-b border-jungle-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <Link href="/tours" className="text-sm font-medium text-jungle-600 hover:text-jungle-900">
            ← All tours
          </Link>
          <div className="mt-4 flex flex-wrap gap-2">
            <Badge variant="theme">{tour.tour_overview.theme}</Badge>
            <Badge>{tour.tour_overview.duration}</Badge>
          </div>
          <h1 className="mt-4 font-display text-4xl font-semibold text-jungle-900">
            {tour.tour_overview.package_name}
          </h1>
          <p className="mt-4">
            <ExternalLink href={tour.url}>View on Jetwing Travels</ExternalLink>
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <section className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl font-semibold text-jungle-900">Itinerary</h2>
            <ol className="mt-6 space-y-4">
              {tour.itinerary_breakdown.map((day) => (
                <li
                  key={day.day}
                  className="flex gap-4 rounded-xl border border-jungle-200 bg-white p-4 shadow-sm"
                >
                  <span className="shrink-0 font-semibold text-saffron-700">{day.day}</span>
                  <p className="text-jungle-700">{day.description}</p>
                </li>
              ))}
            </ol>
          </div>
          <aside className="space-y-6">
            <div className="rounded-2xl border border-jungle-200 bg-jungle-50 p-5">
              <h2 className="font-display text-lg font-semibold text-jungle-900">
                Core inclusions
              </h2>
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="font-medium text-jungle-500">Accommodation</dt>
                  <dd className="text-jungle-800">{tour.core_inclusions.accommodation}</dd>
                </div>
                <div>
                  <dt className="font-medium text-jungle-500">Meals</dt>
                  <dd className="text-jungle-800">{tour.core_inclusions.meals}</dd>
                </div>
                <div>
                  <dt className="font-medium text-jungle-500">Transport</dt>
                  <dd className="text-jungle-800">{tour.core_inclusions.transport}</dd>
                </div>
              </dl>
            </div>
            {highlights.length > 0 && (
              <div className="rounded-2xl border border-jungle-200 bg-white p-5">
                <h2 className="font-display text-lg font-semibold text-jungle-900">Highlights</h2>
                <ul className="mt-4 space-y-3 text-sm text-jungle-700">
                  {highlights.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </section>

        {highlightGroups.length > 0 && (
          <section className="mt-12">
            <h2 className="font-display text-2xl font-semibold text-jungle-900">
              Featured experiences
            </h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {highlightGroups.map(([group, items]) => (
                <div key={group} className="rounded-2xl border border-jungle-200 bg-white p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-ocean-700">
                    {group.replace(/_/g, " ")}
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm text-jungle-700">
                    {items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
