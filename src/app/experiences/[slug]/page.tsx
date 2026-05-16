import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  experienceSlug,
  getAllExperiences,
  getExperienceBySlug,
} from "@/lib/data";

interface ExperienceDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllExperiences().map((e) => ({ slug: experienceSlug(e) }));
}

export async function generateMetadata({
  params,
}: ExperienceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const experience = getExperienceBySlug(slug);
  if (!experience) return { title: "Experience not found" };
  return { title: experience.experience_profile.experience };
}

export default async function ExperienceDetailPage({ params }: ExperienceDetailPageProps) {
  const { slug } = await params;
  const experience = getExperienceBySlug(slug);
  if (!experience) notFound();

  const { experience: title, description } = experience.experience_profile;

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <Link
        href="/experiences"
        className="text-sm font-medium text-jungle-600 hover:text-jungle-900"
      >
        ← All experiences
      </Link>
      <p className="mt-6 text-sm font-medium uppercase tracking-widest text-saffron-700">
        Experience
      </p>
      <h1 className="mt-2 font-display text-4xl font-semibold text-jungle-900">{title}</h1>
      <p className="mt-6 text-lg leading-relaxed text-jungle-700">{description}</p>
    </article>
  );
}
