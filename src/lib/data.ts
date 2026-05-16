import scraped from "@/data/scraped.json";
import type {
  Destination,
  Experience,
  ExperiencePage,
  ScrapedData,
  Tour,
} from "@/types/scraped";

const data = scraped as ScrapedData;

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function flattenExperiences(pages: ExperiencePage[]): Experience[] {
  const idCounts = new Map<string, number>();
  const result: Experience[] = [];

  for (const page of pages) {
    for (const profile of page.experiences) {
      const base = slugify(profile.experience);
      const count = idCounts.get(base) ?? 0;
      idCounts.set(base, count + 1);
      const id = count === 0 ? base : `${base}-${count + 1}`;
      result.push({ id, experience_profile: profile });
    }
  }

  return result;
}

const experiences = flattenExperiences(data.experiences);

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
  return experiences;
}

export function getExperienceBySlug(slug: string): Experience | undefined {
  return experiences.find((e) => experienceSlug(e) === slug);
}

export function slugFromUrl(url: string): string {
  return url.replace(/\/$/, "").split("/").pop() ?? "";
}

export function experienceSlug(experience: Experience): string {
  return experience.id;
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
    experiences: experiences.length,
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
      ...tour.itinerary_breakdown.map((d) => `${d.route} ${d.description}`),
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
  if (!q) return experiences;
  return experiences.filter((e) => {
    const { experience, description } = e.experience_profile;
    return `${experience} ${description}`.toLowerCase().includes(q);
  });
}

export function getTourThemes(): string[] {
  return Array.from(new Set(data.tours.map((t) => t.tour_overview.theme))).sort();
}
