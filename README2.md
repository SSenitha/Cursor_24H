# Ceylon Explorer — Next.js Web App

Dynamic tourism browser built from scraped Jetwing Travels JSON.

**Moved to its own repo?** See `requirements.txt` and `AGENT_HANDOFF.md` in this folder.

## Data

Records live in `src/data/scraped.json`. To refresh after re-scraping (adjust the source path):

```powershell
Copy-Item "<path-to-scraper-output>\scraped_combined_output copy.json" "src\data\scraped.json" -Force
```

## Run locally

Requires [Node.js](https://nodejs.org/) (LTS).

If `npm` is not recognized, use the full path (Windows):

```powershell
cd web
& "C:\Program Files\nodejs\npm.cmd" install
& "C:\Program Files\nodejs\npm.cmd" run dev
```

Or add `C:\Program Files\nodejs` to your system PATH, restart the terminal, then:

```powershell
cd web
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Routes

| Route | Description |
|-------|-------------|
| `/` | Home with stats and featured items |
| `/tours` | All tours with search and theme filter |
| `/tours/[id]` | Tour detail with full itinerary |
| `/destinations` | Destination grid with search |
| `/destinations/[slug]` | Destination detail |
| `/experiences` | Experience grid with search |
| `/experiences/[slug]` | Experience detail |

## Build for production

```powershell
npm run build
npm start
```
