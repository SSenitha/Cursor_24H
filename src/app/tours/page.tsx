import { Suspense } from "react";
import { PageHero } from "@/components/PageHero";
import { SearchFilters } from "@/components/SearchFilters";
import { TourCard } from "@/components/TourCard";
import { filterTours, getTourThemes } from "@/lib/data";

interface ToursPageProps {
  searchParams: Promise<{ q?: string; theme?: string }>;
}

export default async function ToursPage({ searchParams }: ToursPageProps) {
  const { q = "", theme } = await searchParams;
  const tours = filterTours(q, theme || undefined);
  const themes = getTourThemes();

  return (
    <>
      <PageHero
        eyebrow="Tour packages"
        title="Sri Lankan tour itineraries"
        description="Browse full packages with themes, inclusions, day-by-day routes, and highlights."
      >
        <Suspense fallback={null}>
          <SearchFilters
            placeholder="Search tours, themes, routes…"
            themes={themes}
            showThemeFilter
          />
        </Suspense>
      </PageHero>
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <p className="mb-8 text-sm text-jungle-600">
          Showing {tours.length} {tours.length === 1 ? "tour" : "tours"}
          {q ? ` for “${q}”` : ""}
          {theme ? ` · ${theme}` : ""}
        </p>
        {tours.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-jungle-300 bg-white p-10 text-center text-jungle-600">
            No tours match your search. Try a different keyword or theme.
          </p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {tours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
