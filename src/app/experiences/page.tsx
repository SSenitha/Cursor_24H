import { Suspense } from "react";
import { ExperienceCard } from "@/components/ExperienceCard";
import { PageHero } from "@/components/PageHero";
import { SearchFilters } from "@/components/SearchFilters";
import { filterExperiences } from "@/lib/data";

interface ExperiencesPageProps {
  searchParams: Promise<{ q?: string }>;
}

export default async function ExperiencesPage({ searchParams }: ExperiencesPageProps) {
  const { q = "" } = await searchParams;
  const experiences = filterExperiences(q);

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
          Showing {experiences.length} {experiences.length === 1 ? "experience" : "experiences"}
          {q ? ` for “${q}”` : ""}
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {experiences.map((e) => (
            <ExperienceCard key={e.url} experience={e} />
          ))}
        </div>
      </section>
    </>
  );
}
