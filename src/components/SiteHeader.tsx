"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const nav = [
  { href: "/tours", label: "Tours" },
  { href: "/destinations", label: "Destinations" },
  { href: "/experiences", label: "Experiences" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const currentPage = nav.find((item) => item.href === pathname);
  const otherPages = nav.filter((item) => item.href !== pathname);

  return (
    <header className="sticky top-0 z-50 border-b border-jungle-200/80 bg-jungle-50/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="group flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-jungle-700 text-sm font-bold text-white shadow-sm transition group-hover:bg-jungle-600">
            CE
          </span>
          <span className="font-display text-xl font-semibold tracking-tight text-jungle-900">
            Ceylon Explorer
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 sm:flex sm:gap-2">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition sm:px-4 ${
                  active
                    ? "bg-jungle-700 text-white shadow-sm"
                    : "text-jungle-700 hover:bg-jungle-100 hover:text-jungle-900"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Page picker button — mobile only */}
        <div className="relative sm:hidden">
          <button
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            className="flex items-center gap-1.5 rounded-full border border-jungle-200 bg-white px-4 py-2 text-sm font-medium text-jungle-800 shadow-sm transition hover:bg-jungle-50"
          >
            {currentPage ? currentPage.label : "Explore"}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-44 overflow-hidden rounded-2xl border border-jungle-200 bg-white shadow-lg">
              {otherPages.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-jungle-700 transition hover:bg-jungle-50 hover:text-jungle-900"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
