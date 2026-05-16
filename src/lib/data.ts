import scraped from "@/data/scraped.json";
import type { Destination, Experience, ScrapedData, Tour } from "@/types/scraped";

const data = scraped as ScrapedData;

export function getAllTours(): Tour[] {
  return data.tours;
}

export function getTourById(id: string): Tour | undefined {
  return data.tours.find((t) => t.id === id);
}

export function getAllDestinations(): Destination[] {
  return data.destinations;
}

export function getDestinationBySlug(slug: string): Destination | undefined {
  return data.destinations.find((d) => slugFromUrl(d.url) === slug);
}

export function getAllExperiences(): Experience[] {
  return data.experiences;
}

export function getExperienceBySlug(slug: string): Experience | undefined {
  return data.experiences.find((e) => experienceSlug(e) === slug);
}

export function slugFromUrl(url: string): string {
  return url.replace(/\/$/, "").split("/").pop() ?? "";
}

export function experienceSlug(experience: Experience): string {
  const fromUrl = slugFromUrl(experience.url);
  if (fromUrl && fromUrl !== "experiences") return fromUrl;
  return experience.experience_profile.experience
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function destinationName(destination: Destination): string {
  const slug = slugFromUrl(destination.url);
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export function tourHighlights(tour: Tour): string[] {
  return Object.values(tour.featured_experiences_and_highlights).flat();
}

export function getStats() {
  return {
    tours: data.tours.length,
    destinations: data.destinations.length,
    experiences: data.experiences.length,
  };
}

export function filterTours(query: string, theme?: string): Tour[] {
  const q = query.trim().toLowerCase();
  return data.tours.filter((tour) => {
    const matchesTheme = !theme || tour.tour_overview.theme === theme;
    if (!q) return matchesTheme;
    const haystack = [
      tour.tour_overview.package_name,
      tour.tour_overview.theme,
      tour.tour_overview.duration,
      ...tour.itinerary_breakdown.map((d) => d.description),
      ...tourHighlights(tour),
    ]
      .join(" ")
      .toLowerCase();
    return matchesTheme && haystack.includes(q);
  });
}

export function filterDestinations(query: string): Destination[] {
  const q = query.trim().toLowerCase();
  if (!q) return data.destinations;
  return data.destinations.filter((d) => {
    const name = destinationName(d).toLowerCase();
    const text = [name, d.destination_profile.context, ...d.destination_profile.relevance]
      .join(" ")
      .toLowerCase();
    return text.includes(q);
  });
}

export function filterExperiences(query: string): Experience[] {
  const q = query.trim().toLowerCase();
  if (!q) return data.experiences;
  return data.experiences.filter((e) => {
    const { experience, description } = e.experience_profile;
    return `${experience} ${description}`.toLowerCase().includes(q);
  });
}

export function getTourThemes(): string[] {
  return Array.from(new Set(data.tours.map((t) => t.tour_overview.theme))).sort();
}
