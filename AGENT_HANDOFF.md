# Agent handoff — Ceylon Explorer (Next.js)

Use this file when continuing work in the **new repository** that contains the moved `web/` folder.

## What this app is

A **Next.js 15** (App Router) tourism browser for Sri Lanka, built from scraped Jetwing Travels JSON:

- **16** tour packages with itineraries, inclusions, highlights
- **27** destinations
- **10** experiences

Data is bundled at `src/data/scraped.json` (no live API). TypeScript + Tailwind.

## Folder structure

```
web/
├── package.json / package-lock.json
├── requirements.txt          # Node/npm versions + quick start
├── src/
│   ├── app/                  # Routes (/, /tours, /destinations, /experiences + [id]/[slug])
│   ├── components/           # UI (SearchFilters is client component)
│   ├── data/scraped.json     # Source of truth at runtime
│   ├── lib/data.ts           # Load, filter, slug helpers
│   └── types/scraped.ts
├── node_modules/             # May be copied with folder (network-saving move)
└── .next/                    # Build cache (optional to copy; regenerate with npm run build)
```

## Commands

```powershell
cd web
npm install    # if node_modules missing
npm run dev    # http://localhost:3000
npm run build  # verified working
```

## Known environment notes (Windows)

- User had `node` on PATH but `npm` not always recognized → use `& "C:\Program Files\nodejs\npm.cmd"` or fix PATH.
- `SearchFilters.tsx` uses `useRouter`, `useSearchParams`, `useTransition` from `next/navigation` — needs `Suspense` wrapper on list pages (already done).

## Data refresh

Copy updated scrape JSON over `src/data/scraped.json`. Original scrape lived in a separate Python repo (`Cursor_24H_Scarping`).

## Possible next tasks

- Auto-sync JSON from scraper output path or API route
- Images for tours/destinations (not in current scrape)
- Custom branding / deploy to Vercel
- Map view, booking UI, i18n
- Fix destination profiles (many share generic placeholder context from scraper)

## Origin

Built in repo `Cursor_24H_Scarping`; `web/` was moved out intentionally. Scraper remains Python (`scraper.py`, `output/`, `raw/`).
