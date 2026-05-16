import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink } from "@/components/ExternalLink";
import {
  destinationName,
  getAllDestinations,
  getDestinationBySlug,
  slugFromUrl,
} from "@/lib/data";

interface DestinationDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllDestinations().map((d) => ({ slug: slugFromUrl(d.url) }));
}

export async function generateMetadata({
  params,
}: DestinationDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);
  if (!destination) return { title: "Destination not found" };
  return { title: destinationName(destination) };
}

export default async function DestinationDetailPage({ params }: DestinationDetailPageProps) {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);
  if (!destination) notFound();

  const name = destinationName(destination);

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <Link
        href="/destinations"
        className="text-sm font-medium text-jungle-600 hover:text-jungle-900"
      >
        ← All destinations
      </Link>
      <h1 className="mt-6 font-display text-4xl font-semibold text-jungle-900">{name}</h1>
      <p className="mt-6 text-lg leading-relaxed text-jungle-700">
        {destination.destination_profile.context}
      </p>
      {destination.destination_profile.relevance.length > 0 && (
        <ul className="mt-6 flex flex-wrap gap-2">
          {destination.destination_profile.relevance.map((item) => (
            <li
              key={item}
              className="rounded-full bg-ocean-100 px-3 py-1 text-sm font-medium text-ocean-900"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
      <p className="mt-8">
        <ExternalLink href={destination.url}>View on Jetwing Travels</ExternalLink>
      </p>
    </article>
  );
}
