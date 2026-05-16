import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-jungle-200 bg-jungle-900 text-jungle-100">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <p className="font-display text-lg text-white">Ceylon Explorer</p>
        <p className="mt-2 max-w-xl text-sm text-jungle-300">
          A dynamic showcase of scraped Sri Lankan tourism data — tours, destinations,
          and experiences from Jetwing Travels.
        </p>
        <div className="mt-6 flex flex-wrap gap-4 text-sm">
          <Link href="/tours" className="text-saffron-300 hover:text-saffron-200">
            Tours
          </Link>
          <Link href="/destinations" className="text-saffron-300 hover:text-saffron-200">
            Destinations
          </Link>
          <Link href="/experiences" className="text-saffron-300 hover:text-saffron-200">
            Experiences
          </Link>
        </div>
        <p className="mt-8 text-xs text-jungle-500">
          Data sourced from scraped JSON · Built with Next.js
        </p>
      </div>
    </footer>
  );
}
