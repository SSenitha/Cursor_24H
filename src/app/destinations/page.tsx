import { Suspense } from "react";
import { DestinationCard } from "@/components/DestinationCard";
import { PageHero } from "@/components/PageHero";
import { SearchFilters } from "@/components/SearchFilters";
import { filterDestinations } from "@/lib/data";

interface DestinationsPageProps {
  searchParams: Promise<{ q?: string }>;
}

export default async function DestinationsPage({ searchParams }: DestinationsPageProps) {
  const { q = "" } = await searchParams;
  const destinations = filterDestinations(q);

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
          Showing {destinations.length}{" "}
          {destinations.length === 1 ? "destination" : "destinations"}
          {q ? ` for “${q}”` : ""}
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((d) => (
            <DestinationCard key={d.url} destination={d} />
          ))}
        </div>
      </section>
    </>
  );
}
