"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCallback, useTransition } from "react";

interface SearchFiltersProps {
  placeholder?: string;
  themes?: string[];
  showThemeFilter?: boolean;
}

export function SearchFilters({
  placeholder = "Search…",
  themes = [],
  showThemeFilter = false,
}: SearchFiltersProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const q = searchParams.get("q") ?? "";
  const theme = searchParams.get("theme") ?? "";

  const updateParams = useCallback(
    (updates: Record<string, string>) => {
      const params = new URLSearchParams(searchParams.toString());
      for (const [key, value] of Object.entries(updates)) {
        if (value) params.set(key, value);
        else params.delete(key);
      }
      // Reset to page 1 whenever filters change
      params.delete("page");
      startTransition(() => {
        const query = params.toString();
        router.push(query ? `${pathname}?${query}` : pathname);
      });
    },
    [pathname, router, searchParams],
  );

  return (
    <div
      className={`flex flex-col gap-3 sm:flex-row sm:items-center ${isPending ? "opacity-70" : ""}`}
    >
      <input
        type="search"
        defaultValue={q}
        placeholder={placeholder}
        onChange={(e) => updateParams({ q: e.target.value })}
        className="w-full rounded-xl border border-jungle-200 bg-white px-4 py-2.5 text-sm text-jungle-900 shadow-sm outline-none placeholder:text-jungle-400 focus:border-jungle-400 focus:ring-2 focus:ring-jungle-500/30 sm:max-w-md"
        aria-label="Search"
      />
      {showThemeFilter && themes.length > 0 && (
        <select
          value={theme}
          onChange={(e) => updateParams({ theme: e.target.value })}
          className="rounded-xl border border-jungle-200 bg-white px-4 py-2.5 text-sm text-jungle-900 shadow-sm outline-none focus:border-jungle-400 focus:ring-2"
          aria-label="Filter by theme"
        >
          <option value="">All themes</option>
          {themes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}
