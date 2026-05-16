export interface TourOverview {
  package_name: string;
  theme: string;
  duration: string;
}

export interface CoreInclusions {
  accommodation: string;
  meals: string;
  transport: string;
}

export interface ItineraryDay {
  day: string;
  route: string;
  description: string;
}

export interface Tour {
  url: string;
  id: string;
  tour_overview: TourOverview;
  core_inclusions: CoreInclusions;
  itinerary_breakdown: ItineraryDay[];
  featured_experiences_and_highlights: Record<string, string[]>;
}

export interface Destination {
  url: string;
  destination_profile: {
    context: string;
    relevance: string[];
  };
}

export interface ExperienceProfile {
  experience: string;
  description: string;
}

export interface Experience {
  id: string;
  experience_profile: ExperienceProfile;
}

export interface ExperiencePage {
  url: string;
  experiences: ExperienceProfile[];
}

export interface ScrapedData {
  tours: Tour[];
  destinations: Destination[];
  experiences: ExperiencePage[];
}
