import { Suspense } from "react";
import { DestinationCard } from "@/components/DestinationCard";
import { PageHero } from "@/components/PageHero";
import { Pagination } from "@/components/Pagination";
import { SearchFilters } from "@/components/SearchFilters";
import { filterDestinations } from "@/lib/data";

const PAGE_SIZE = 9;

interface DestinationsPageProps {
  searchParams: Promise<{ q?: string; page?: string }>;
}

export default async function DestinationsPage({ searchParams }: DestinationsPageProps) {
  const { q = "", page: pageParam } = await searchParams;
  const currentPage = Math.max(1, parseInt(pageParam ?? "1", 10) || 1);

  const allDestinations = filterDestinations(q);
  const totalPages = Math.max(1, Math.ceil(allDestinations.length / PAGE_SIZE));
  const safePage = Math.min(currentPage, totalPages);
  const destinations = allDestinations.slice(
    (safePage - 1) * PAGE_SIZE,
    safePage * PAGE_SIZE,
  );

  return (
    <>
      <PageHero
        eyebrow="Destinations"
        title="Explore Sri Lanka"
        description="Discover historic sites, coastal towns, and wildlife regions across the island."
      >
        <Suspense fallback={null}>
          <SearchFilters placeholder="Search destinations…" />
        </Suspense>
      </PageHero>
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <p className="mb-8 text-sm text-jungle-600">
          Showing {(safePage - 1) * PAGE_SIZE + 1}–
          {Math.min(safePage * PAGE_SIZE, allDestinations.length)} of{" "}
          {allDestinations.length}{" "}
          {allDestinations.length === 1 ? "destination" : "destinations"}
          {q ? ` for "${q}"` : ""}
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((d) => (
            <DestinationCard key={d.url} destination={d} />
          ))}
        </div>
        <Pagination
          currentPage={safePage}
          totalPages={totalPages}
          basePath="/destinations"
          params={{ q: q || undefined }}
        />
      </section>
    </>
  );
}
