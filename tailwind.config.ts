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
        jungle: {
          50: "#f4f9f4",
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
          50: "#fff9ed",
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
          50: "#f0f9fa",
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
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
