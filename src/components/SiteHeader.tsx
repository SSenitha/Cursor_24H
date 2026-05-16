import Link from "next/link";

const nav = [
  { href: "/tours", label: "Tours" },
  { href: "/destinations", label: "Destinations" },
  { href: "/experiences", label: "Experiences" },
];

export function SiteHeader() {
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
        <nav className="flex items-center gap-1 sm:gap-2">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-jungle-700 transition hover:bg-jungle-100 hover:text-jungle-900 sm:px-4"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
