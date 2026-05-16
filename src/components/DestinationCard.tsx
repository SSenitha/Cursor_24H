import Link from "next/link";
import { destinationName, slugFromUrl } from "@/lib/data";
import type { Destination } from "@/types/scraped";

export function DestinationCard({ destination }: { destination: Destination }) {
  const slug = slugFromUrl(destination.url);
  const name = destinationName(destination);

  return (
    <article className="rounded-2xl border border-jungle-200 bg-white p-5 shadow-sm transition hover:border-ocean-300 hover:shadow-md">
      <h2 className="font-display text-xl font-semibold text-jungle-900">
        <Link href={`/destinations/${slug}`} className="hover:text-ocean-700">
          {name}
        </Link>
      </h2>
      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-jungle-600">
        {destination.destination_profile.context}
      </p>
      {destination.destination_profile.relevance.length > 0 && (
        <p className="mt-3 text-xs font-medium uppercase tracking-wide text-ocean-700">
          {destination.destination_profile.relevance.join(" · ")}
        </p>
      )}
      <Link
        href={`/destinations/${slug}`}
        className="mt-4 inline-block text-sm font-semibold text-jungle-700 hover:text-ocean-700"
      >
        Explore destination →
      </Link>
    </article>
  );
}
