import Link from "next/link";
import { tourHighlights } from "@/lib/data";
import type { Tour } from "@/types/scraped";
import { Badge } from "./Badge";

export function TourCard({ tour }: { tour: Tour }) {
  const highlights = tourHighlights(tour).slice(0, 2);
  const days = tour.itinerary_breakdown.length;

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-jungle-200 bg-white shadow-sm transition hover:border-jungle-300 hover:shadow-md">
      <div className="border-b border-jungle-100 bg-gradient-to-r from-jungle-700 to-ocean-700 px-5 py-6 text-white">
        <Badge variant="theme">{tour.tour_overview.theme}</Badge>
        <h2 className="mt-3 font-display text-xl font-semibold leading-snug">
          <Link href={`/tours/${tour.id}`} className="hover:underline">
            {tour.tour_overview.package_name}
          </Link>
        </h2>
        <p className="mt-2 text-sm text-jungle-100">{tour.tour_overview.duration}</p>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <dl className="grid grid-cols-1 gap-2 text-sm text-jungle-700 sm:grid-cols-3">
          <div>
            <dt className="font-medium text-jungle-500">Stay</dt>
            <dd>{tour.core_inclusions.accommodation}</dd>
          </div>
          <div>
            <dt className="font-medium text-jungle-500">Meals</dt>
            <dd className="line-clamp-2">{tour.core_inclusions.meals}</dd>
          </div>
          <div>
            <dt className="font-medium text-jungle-500">Transport</dt>
            <dd className="line-clamp-2">{tour.core_inclusions.transport}</dd>
          </div>
        </dl>
        <p className="mt-4 text-sm text-jungle-600">
          {days} itinerary {days === 1 ? "day" : "days"}
        </p>
        {highlights.length > 0 && (
          <ul className="mt-3 space-y-1 text-sm text-jungle-600">
            {highlights.map((item, i) => (
              <li key={i} className="line-clamp-2">
                · {item}
              </li>
            ))}
          </ul>
        )}
        <Link
          href={`/tours/${tour.id}`}
          className="mt-auto pt-5 text-sm font-semibold text-jungle-700 group-hover:text-saffron-600"
        >
          View full itinerary →
        </Link>
      </div>
    </article>
  );
}
