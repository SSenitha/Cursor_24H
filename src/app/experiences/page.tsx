import { Suspense } from "react";
import { ExperienceCard } from "@/components/ExperienceCard";
import { PageHero } from "@/components/PageHero";
import { Pagination } from "@/components/Pagination";
import { SearchFilters } from "@/components/SearchFilters";
import { filterExperiences } from "@/lib/data";

const PAGE_SIZE = 9;

interface ExperiencesPageProps {
  searchParams: Promise<{ q?: string; page?: string }>;
}

export default async function ExperiencesPage({ searchParams }: ExperiencesPageProps) {
  const { q = "", page: pageParam } = await searchParams;
  const currentPage = Math.max(1, parseInt(pageParam ?? "1", 10) || 1);

  const allExperiences = filterExperiences(q);
  const totalPages = Math.max(1, Math.ceil(allExperiences.length / PAGE_SIZE));
  const safePage = Math.min(currentPage, totalPages);
  const experiences = allExperiences.slice(
    (safePage - 1) * PAGE_SIZE,
    safePage * PAGE_SIZE,
  );

  return (
    <>
      <PageHero
        eyebrow="Experiences"
        title="Things to do in Sri Lanka"
        description="Temples, wildlife, culture, surfing, and village walks from your scraped experience pages."
      >
        <Suspense fallback={null}>
          <SearchFilters placeholder="Search experiences…" />
        </Suspense>
      </PageHero>
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <p className="mb-8 text-sm text-jungle-600">
          Showing {(safePage - 1) * PAGE_SIZE + 1}–
          {Math.min(safePage * PAGE_SIZE, allExperiences.length)} of{" "}
          {allExperiences.length}{" "}
          {allExperiences.length === 1 ? "experience" : "experiences"}
          {q ? ` for "${q}"` : ""}
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {experiences.map((e) => (
            <ExperienceCard key={e.id} experience={e} />
          ))}
        </div>
        <Pagination
          currentPage={safePage}
          totalPages={totalPages}
          basePath="/experiences"
          params={{ q: q || undefined }}
        />
      </section>
    </>
  );
}
