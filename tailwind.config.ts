import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── Legacy brand palette (still used in content cards & footer) ──
        jungle: {
          50:  "#f4f9f4",
          100: "#e3f0e5",
          200: "#c6e1cb",
          300: "#9ac9a4",
          400: "#67a876",
          500: "#438a54",
          600: "#326f41",
          700: "#295935",
          800: "#23472d",
          900: "#1d3b26",
          950: "#0f2115",
        },
        saffron: {
          50:  "#fff9ed",
          100: "#fff1d4",
          200: "#ffe0a8",
          300: "#ffc86a",
          400: "#ffa52e",
          500: "#f9860a",
          600: "#dd6905",
          700: "#b74f08",
          800: "#943d0e",
          900: "#7a340f",
          950: "#461904",
        },
        ocean: {
          50:  "#f0f9fa",
          100: "#d9f0f2",
          200: "#b7e1e6",
          300: "#86cad3",
          400: "#4daab8",
          500: "#328e9e",
          600: "#2c7385",
          700: "#295e6d",
          800: "#284f5a",
          900: "#25434d",
          950: "#132b33",
        },
        // ── V2.0 dark UI palette ──────────────────────────────────────
        slate: {
          850: "#18212f",
          900: "#0f1724",
          925: "#0b1120",
          950: "#070d18",
        },
        emerald: {
          50:  "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          450: "#fbb03b",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
          950: "#451a03",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans:    ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-aurora": `
          radial-gradient(ellipse 80% 60% at 20% -10%, rgba(16,185,129,0.18) 0%, transparent 55%),
          radial-gradient(ellipse 60% 50% at 80% 110%, rgba(45,212,191,0.12) 0%, transparent 55%),
          radial-gradient(ellipse 50% 80% at 50% 50%, rgba(99,102,241,0.07) 0%, transparent 70%)
        `,
        "card-shine": "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 60%)",
      },
      boxShadow: {
        "glow-emerald": "0 0 0 1px rgba(16,185,129,0.3), 0 8px 32px rgba(16,185,129,0.15)",
        "glow-emerald-lg": "0 0 0 1px rgba(16,185,129,0.4), 0 16px 64px rgba(16,185,129,0.25)",
        "glass": "0 1px 0 rgba(255,255,255,0.06) inset, 0 8px 32px rgba(0,0,0,0.4)",
        "glass-lg": "0 1px 0 rgba(255,255,255,0.06) inset, 0 24px 64px rgba(0,0,0,0.5)",
      },
      animation: {
        "aurora":        "aurora-shift 12s ease infinite",
        "float":         "float-up 4s ease-in-out infinite",
        "glow-pulse":    "glow-pulse 2.5s ease-in-out infinite",
        "fade-in-up":    "fade-in-up 0.55s ease-out both",
        "status-pulse":  "status-pulse 1.8s ease-in-out infinite",
        "bubble-pop":    "bubble-pop 0.45s ease-out both",
        "ring-orbit":    "ring-orbit 8s linear infinite",
        "spin-cw":       "spin-cw 0.8s linear infinite",
        "shimmer-slide": "shimmer-slide 1.8s linear infinite",
        // Legacy
        "chat-bounce":   "chat-icon-bounce 1.2s ease-in-out infinite",
        "chat-glow":     "chat-glow-pulse 2s ease-in-out infinite",
        "chat-ring-spin":"chat-ring-spin 8s linear infinite",
        "jw-spin":       "jw-spin 0.8s linear infinite",
        "chat-bubble-pop":"chat-bubble-pop 0.55s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
