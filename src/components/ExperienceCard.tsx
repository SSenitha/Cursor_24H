import Link from "next/link";
import { experienceSlug } from "@/lib/data";
import type { Experience } from "@/types/scraped";
import { Badge } from "./Badge";

export function ExperienceCard({ experience }: { experience: Experience }) {
  const slug = experienceSlug(experience);
  const { experience: title, description } = experience.experience_profile;

  return (
    <article className="flex flex-col rounded-2xl border border-jungle-200 bg-white p-5 shadow-sm transition hover:border-saffron-300 hover:shadow-md">
      <Badge variant="ocean">Experience</Badge>
      <h2 className="mt-3 font-display text-xl font-semibold text-jungle-900">
        <Link href={`/experiences/${slug}`} className="hover:text-saffron-700">
          {title}
        </Link>
      </h2>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-jungle-600 line-clamp-4">
        {description}
      </p>
      <Link
        href={`/experiences/${slug}`}
        className="mt-4 text-sm font-semibold text-jungle-700 hover:text-saffron-600"
      >
        Read more →
      </Link>
    </article>
  );
}
