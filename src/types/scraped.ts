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

export interface Experience {
  url: string;
  experience_profile: {
    experience: string;
    description: string;
  };
}

export interface ScrapedData {
  tours: Tour[];
  destinations: Destination[];
  experiences: Experience[];
}
