import Image from "next/image";
import Link from "next/link";

const JUNGLE_FOOTER_IMAGE =
  "https://www.junglejourney.co.uk/wp-content/uploads/2019/03/jungle-footer.png";

export function SiteFooter() {
  return (
    <footer className="mt-auto">
      <div className="w-full overflow-hidden leading-[0]">
        <Image
          src={JUNGLE_FOOTER_IMAGE}
          alt=""
          width={2560}
          height={160}
          sizes="100vw"
          className="block h-auto w-full"
        />
      </div>
      <div className="bg-jungle-900 text-jungle-100">
        <div className="mx-auto max-w-6xl px-4 pb-10 pt-6 sm:px-6">
          <p className="font-display text-lg text-white">Ceylon Explorer</p>
          <p className="mt-2 max-w-xl text-sm text-jungle-300">
            A dynamic showcase of Sri Lankan tourism — tours, destinations, and experiences.
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
      </div>
    </footer>
  );
}
