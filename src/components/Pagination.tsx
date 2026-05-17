import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
  params?: Record<string, string | undefined>;
}

function buildUrl(
  basePath: string,
  params: Record<string, string | undefined>,
  page: number,
) {
  const p = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value) p.set(key, value);
  }
  if (page > 1) p.set("page", String(page));
  else p.delete("page");
  const qs = p.toString();
  return qs ? `${basePath}?${qs}` : basePath;
}

export function Pagination({
  currentPage,
  totalPages,
  basePath,
  params = {},
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const pageWindow = getPageWindow(currentPage, totalPages);

  return (
    <nav
      aria-label="Pagination"
      className="mt-12 flex items-center justify-center gap-1"
    >
      <Link
        href={buildUrl(basePath, params, currentPage - 1)}
        aria-disabled={currentPage === 1}
        className={`inline-flex h-9 w-9 items-center justify-center rounded-lg border text-sm font-medium transition-colors ${
          currentPage === 1
            ? "pointer-events-none border-jungle-100 text-jungle-300"
            : "border-jungle-200 text-jungle-700 hover:bg-jungle-50"
        }`}
        aria-label="Previous page"
      >
        ‹
      </Link>

      {pageWindow.map((p, i) =>
        p === "…" ? (
          <span
            key={`ellipsis-${i}`}
            className="inline-flex h-9 w-9 items-center justify-center text-sm text-jungle-400"
          >
            …
          </span>
        ) : (
          <Link
            key={p}
            href={buildUrl(basePath, params, p as number)}
            aria-current={p === currentPage ? "page" : undefined}
            className={`inline-flex h-9 w-9 items-center justify-center rounded-lg border text-sm font-medium transition-colors ${
              p === currentPage
                ? "border-jungle-600 bg-jungle-600 text-white"
                : "border-jungle-200 text-jungle-700 hover:bg-jungle-50"
            }`}
          >
            {p}
          </Link>
        ),
      )}

      <Link
        href={buildUrl(basePath, params, currentPage + 1)}
        aria-disabled={currentPage === totalPages}
        className={`inline-flex h-9 w-9 items-center justify-center rounded-lg border text-sm font-medium transition-colors ${
          currentPage === totalPages
            ? "pointer-events-none border-jungle-100 text-jungle-300"
            : "border-jungle-200 text-jungle-700 hover:bg-jungle-50"
        }`}
        aria-label="Next page"
      >
        ›
      </Link>
    </nav>
  );
}

function getPageWindow(current: number, total: number): (number | "…")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

  const pages: (number | "…")[] = [1];

  if (current > 3) pages.push("…");

  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);
  for (let i = start; i <= end; i++) pages.push(i);

  if (current < total - 2) pages.push("…");

  pages.push(total);
  return pages;
}
