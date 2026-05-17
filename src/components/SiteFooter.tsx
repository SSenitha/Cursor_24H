import Link from "next/link";

const NAV = [
  { href: "/tours", label: "Tours", hint: "Itineraries & packages" },
  { href: "/destinations", label: "Destinations", hint: "Where to wander" },
  { href: "/experiences", label: "Experiences", hint: "Things to feel" },
  { href: "/about", label: "About", hint: "Our story & team" },
] as const;

function FooterWaveDivider() {
  return (
    <div
      className="relative h-14 w-full text-jungle-800 sm:h-16"
      aria-hidden
    >
      <svg
        className="absolute bottom-0 h-full w-full"
        viewBox="0 0 1440 48"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Back ridge */}
        <path
          fill="currentColor"
          fillOpacity={0.45}
          d="M0,34 C240,52 420,18 720,26 C980,34 1170,8 1440,26 L1440,48 L0,48 Z"
        />
        {/* Front hill line */}
        <path
          fill="currentColor"
          d="M0,42 C280,26 460,42 680,38 C940,34 1180,20 1440,36 L1440,48 L0,48 Z"
        />
      </svg>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-auto">
      {/* Bridge from light page bg into deep canopy */}
      <div className="bg-jungle-50">
        <FooterWaveDivider />
      </div>

      <div className="relative overflow-hidden bg-gradient-to-b from-jungle-800 via-jungle-950 to-[#050a06] pb-12 pt-[2px] text-jungle-100">
        {/* Warm horizon glow — mirrors homepage hero saffron wash */}
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_60%_at_50%_-20%,rgba(249,134,10,0.14),transparent_55%)]"
          aria-hidden
        />
        {/* Cool ocean undertone */}
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_100%_100%,rgba(50,138,158,0.08),transparent_50%)]"
          aria-hidden
        />
        {/* Leaf-grid texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Ccircle cx='4' cy='4' r='1' fill='%23ffffff'/%3E%3C/svg%3E")`,
          }}
          aria-hidden
        />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 pt-[25px]">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            {/* Brand column */}
            <div className="lg:col-span-5">
              <Link href="/" className="group inline-flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-jungle-500 to-jungle-700 text-sm font-bold text-white shadow-[0_12px_32px_-8px_rgba(15,33,21,0.75)] ring-2 ring-white/10 transition ring-offset-2 ring-offset-jungle-950 group-hover:from-jungle-400 group-hover:to-jungle-600">
                  CE
                </span>
                <span>
                  <span className="block font-display text-2xl font-semibold tracking-tight text-white">
                    Ceylon Explorer
                  </span>
                  <span className="mt-1 block max-w-[16rem] text-sm font-medium uppercase tracking-[0.2em] text-jungle-300/95">
                    Island itineraries
                  </span>
                </span>
              </Link>
              <p className="mt-6 max-w-sm text-[0.9375rem] leading-relaxed text-jungle-200">
                Wander tea hills, reefs, temples, and national parks — a visual window into curated
                Sri Lankan journeys, distilled from scraped travel listings.
              </p>
            </div>

            {/* Navigate */}
            <div className="lg:col-span-4">
              <h2 className="font-display text-lg font-semibold text-white">
                Explore
              </h2>
              <p className="mt-1 text-sm text-jungle-400">
                Jump back into lists you were browsing.
              </p>
              <nav className="mt-8 flex flex-col gap-1">
                {NAV.map((item, i) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex items-center gap-4 rounded-xl border border-transparent px-3 py-3 transition hover:border-white/10 hover:bg-white/[0.04]"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ocean-900/55 text-xs font-bold text-ocean-200 ring-1 ring-white/10">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex items-center justify-between gap-2">
                        <span className="font-medium text-white group-hover:text-saffron-200">
                          {item.label}
                        </span>
                        <span className="text-ocean-300/90 transition group-hover:translate-x-0.5 group-hover:text-saffron-300">
                          →
                        </span>
                      </span>
                      <span className="block text-xs text-jungle-400">{item.hint}</span>
                    </span>
                  </Link>
                ))}
              </nav>
            </div>

            {/* Meta */}
            <div className="flex flex-col justify-between lg:col-span-3">
              <div>
                <h2 className="font-display text-lg font-semibold text-white">
                  Developer note
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-jungle-300">
                  Made by Codingers ❤ at Cursor Colombo 24Hrs Buildathon 2026. Made with Cursor AI and Cursor IDE.
                </p>
              </div>
              <div className="mt-10 rounded-2xl border border-white/10 bg-black/25 p-4 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.15em] text-saffron-400/95">
                  Stack
                </p>
                <p className="mt-2 text-sm font-medium text-jungle-100">Cursor AI · Beyond Presence · ElevenLabs · LiveKit · n8n Cloud · Google Gemini 1.5 Flash · Next.js · Gmail API · Google Sheets · Vercel · React · Tailwind</p>
              </div>
            </div>
          </div>

          <div className="relative mt-14 border-t border-white/[0.08] pt-10 text-center">
            <div
              className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px w-full max-w-md bg-gradient-to-r from-transparent via-saffron-500/45 via-ocean-500/30 to-transparent"
              aria-hidden
            />
            <p className="text-[11px] text-jungle-500">
              <span className="text-jungle-400">Pearl of the Indian Ocean</span>
              {" · "}
              <span suppressHydrationWarning>{new Date().getFullYear()}</span>
              {" Ceylon Explorer"}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
