import { Suspense } from "react";
import { PageHero } from "@/components/PageHero";
import { Pagination } from "@/components/Pagination";
import { SearchFilters } from "@/components/SearchFilters";
import { TourCard } from "@/components/TourCard";
import { filterTours, getTourThemes } from "@/lib/data";

const PAGE_SIZE = 9;

interface ToursPageProps {
  searchParams: Promise<{ q?: string; theme?: string; page?: string }>;
}

export default async function ToursPage({ searchParams }: ToursPageProps) {
  const { q = "", theme, page: pageParam } = await searchParams;
  const currentPage = Math.max(1, parseInt(pageParam ?? "1", 10) || 1);

  const allTours = filterTours(q, theme || undefined);
  const themes = getTourThemes();
  const totalPages = Math.max(1, Math.ceil(allTours.length / PAGE_SIZE));
  const safePage = Math.min(currentPage, totalPages);
  const tours = allTours.slice(
    (safePage - 1) * PAGE_SIZE,
    safePage * PAGE_SIZE,
  );

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
          {allTours.length === 0 ? (
            <>0 tours{q ? ` for "${q}"` : ""}{theme ? ` · ${theme}` : ""}</>
          ) : (
            <>
              Showing {(safePage - 1) * PAGE_SIZE + 1}–
              {Math.min(safePage * PAGE_SIZE, allTours.length)} of {allTours.length}{" "}
              {allTours.length === 1 ? "tour" : "tours"}
              {q ? ` for "${q}"` : ""}
              {theme ? ` · ${theme}` : ""}
            </>
          )}
        </p>
        {allTours.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-jungle-300 bg-white p-10 text-center text-jungle-600">
            No tours match your search. Try a different keyword or theme.
          </p>
        ) : (
          <>
            <div className="grid gap-6 md:grid-cols-2">
              {tours.map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>
            <Pagination
              currentPage={safePage}
              totalPages={totalPages}
              basePath="/tours"
              params={{ q: q || undefined, theme: theme || undefined }}
            />
          </>
        )}
      </section>
    </>
  );
}
