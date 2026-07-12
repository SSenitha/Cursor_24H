"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const nav = [
  { href: "/",             label: "Home" },
  { href: "/tours",        label: "Tours" },
  { href: "/destinations", label: "Destinations" },
  { href: "/experiences",  label: "Experiences" },
  { href: "/about",        label: "About" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled]  = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollToSerendib() {
    const el = document.getElementById("serendib-panel");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
    setMenuOpen(false);
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/[0.06] bg-slate-950/90 shadow-[0_4px_32px_rgba(0,0,0,0.5)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">

        {/* ── Logo ── */}
        <Link href="/" className="group flex items-center gap-3">
          {/* Glow orb logo mark */}
          <span className="relative flex h-9 w-9 items-center justify-center">
            <span className="absolute inset-0 rounded-full bg-emerald-500/20 blur-md transition group-hover:bg-emerald-500/35" />
            <span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-emerald-400/30 bg-gradient-to-br from-emerald-400 to-emerald-600 text-xs font-bold text-slate-950 shadow-glow-emerald transition group-hover:shadow-glow-emerald-lg">
              S
            </span>
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-[1.05rem] font-semibold tracking-tight text-white">
              Serendib
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400">
              Ceylon Explorer
            </span>
          </span>
        </Link>

        {/* ── Desktop nav ── */}
        <nav className="hidden items-center gap-1 sm:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                  active
                    ? "bg-white/10 text-white"
                    : "text-slate-400 hover:bg-white/[0.06] hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* ── CTA + Mobile Toggle ── */}
        <div className="flex items-center gap-3">
          <button
            id="header-talk-cta"
            onClick={scrollToSerendib}
            className="relative hidden overflow-hidden rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 px-5 py-2 text-sm font-semibold text-slate-950 shadow-glow-emerald transition hover:shadow-glow-emerald-lg hover:scale-[1.03] active:scale-[0.98] sm:flex items-center gap-2"
          >
            <span className="relative z-10 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-slate-950 opacity-60 animate-status-pulse" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-slate-950" />
              </span>
              Talk to Serendib
            </span>
          </button>

          {/* Mobile hamburger */}
          <button
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-300 transition hover:bg-white/10 sm:hidden"
            onClick={() => setMenuOpen((p) => !p)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      {menuOpen && (
        <div className="border-t border-white/[0.06] bg-slate-950/95 backdrop-blur-xl sm:hidden animate-bubble-pop">
          <div className="mx-auto max-w-7xl space-y-1 px-5 py-4">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                    active
                      ? "bg-white/10 text-white"
                      : "text-slate-400 hover:bg-white/[0.06] hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <button
              onClick={scrollToSerendib}
              className="mt-2 w-full rounded-xl bg-gradient-to-r from-emerald-400 to-emerald-500 py-3 text-sm font-semibold text-slate-950"
            >
              Talk to Serendib
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
