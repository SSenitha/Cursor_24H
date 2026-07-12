import Link from "next/link";

const NAV = [
  { href: "/tours", label: "Tours", hint: "Curated itineraries" },
  { href: "/destinations", label: "Destinations", hint: "Where to wander" },
  { href: "/experiences", label: "Experiences", hint: "Things to feel" },
  { href: "/about", label: "About", hint: "Our story & team" },
] as const;

export function SiteFooter() {
  return (
    <footer className="relative mt-auto border-t border-white/[0.06] bg-slate-950">
      {/* Top emerald glow line */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px w-full max-w-3xl bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent"
        aria-hidden
      />

      {/* Ambient aurora wash */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(16,185,129,0.07),transparent_60%)]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 pt-16 pb-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">

          {/* ── Brand + Serendib column ── */}
          <div className="lg:col-span-5">
            <Link href="/" className="group inline-flex items-center gap-3">
              {/* Glowing logo mark */}
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-emerald-400/30 bg-gradient-to-br from-emerald-400 to-emerald-600 text-sm font-bold text-slate-950 shadow-glow-emerald transition group-hover:shadow-glow-emerald-lg">
                CE
              </span>
              <span>
                <span className="block font-display text-2xl font-semibold tracking-tight text-white">
                  Ceylon Explorer
                </span>
                <span className="mt-0.5 block text-xs font-medium uppercase tracking-[0.2em] text-emerald-400/70">
                  Powered by Serendib AI
                </span>
              </span>
            </Link>

            <p className="mt-6 max-w-sm text-[0.9375rem] leading-relaxed text-slate-400">
              Your AI travel concierge for Sri Lanka. Let{" "}
              <span className="font-semibold text-emerald-400">Serendib</span>{" "}
              craft your perfect journey — from misty tea hills to sunlit
              coastlines, ancient temples to vibrant wildlife.
            </p>

            {/* Serendib CTA glass card */}
            <div className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3.5 backdrop-blur-sm">
              <div className="relative flex h-8 w-8 items-center justify-center rounded-full border border-emerald-400/30 bg-gradient-to-br from-emerald-400 to-emerald-600 text-slate-950">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 14.2a7.2 7.2 0 0 1-6-3.22c.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08a7.2 7.2 0 0 1-6 3.22z"/>
                </svg>
                <span className="absolute -right-0.5 -bottom-0.5 h-2.5 w-2.5 rounded-full border-2 border-slate-950 bg-emerald-400" />
              </div>
              <div className="text-sm">
                <p className="font-semibold text-white">Serendib is online</p>
                <p className="text-[11px] text-slate-500">Ready to plan your trip</p>
              </div>
            </div>
          </div>

          {/* ── Navigation ── */}
          <div className="lg:col-span-4">
            <h2 className="font-display text-lg font-semibold text-white">
              Explore
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Browse or let Serendib guide you.
            </p>
            <nav className="mt-8 flex flex-col gap-1">
              {NAV.map((item, i) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center gap-4 rounded-xl border border-transparent px-3 py-3 transition hover:border-white/10 hover:bg-white/[0.04]"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-xs font-bold text-slate-400 ring-1 ring-white/[0.04]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center justify-between gap-2">
                      <span className="font-medium text-white group-hover:text-emerald-300 transition-colors">
                        {item.label}
                      </span>
                      <span className="text-slate-600 transition group-hover:translate-x-0.5 group-hover:text-emerald-400">
                        →
                      </span>
                    </span>
                    <span className="block text-xs text-slate-500">{item.hint}</span>
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          {/* ── Meta / Stack ── */}
          <div className="flex flex-col justify-between lg:col-span-3">
            <div>
              <h2 className="font-display text-lg font-semibold text-white">
                Built at Cursor Colombo
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                Made with ❤ by{" "}
                <span className="font-semibold text-white">Codingers</span> at
                the Cursor Colombo 24Hrs Buildathon 2026. Serendib is powered by
                cutting-edge AI infrastructure.
              </p>
            </div>
            <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.15em] text-emerald-400/80">
                Stack
              </p>
              <p className="mt-2 text-sm font-medium text-slate-300">
                Cursor AI · Beyond Presence · ElevenLabs · LiveKit · n8n Cloud ·
                Google Gemini 1.5 Flash · Next.js · Gmail API · Google Sheets ·
                Vercel · React · Tailwind
              </p>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="relative mt-14 border-t border-white/[0.06] pt-10 text-center">
          <div
            className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px w-full max-w-md bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent"
            aria-hidden
          />
          <p className="text-[11px] text-slate-600">
            <span className="text-slate-500">Pearl of the Indian Ocean</span>
            {" · "}
            <span className="text-emerald-400/60">Serendib AI</span>
            {" · "}
            <span suppressHydrationWarning>{new Date().getFullYear()}</span>
            {" Ceylon Explorer"}
          </p>
        </div>
      </div>
    </footer>
  );
}
