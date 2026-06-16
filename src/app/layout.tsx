import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { ChatWidgetGate } from "@/components/ChatWidgetGate";
import "./globals.css";

const sans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" });
const display = Fraunces({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: {
    default: "Ceylon Explorer | AI-Powered Sri Lankan Travel",
    template: "%s | Ceylon Explorer",
  },
  description:
    "Meet Serendib — your AI travel concierge for Sri Lanka. Browse curated tours, destinations, and experiences, or let Serendib plan your perfect trip.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${display.variable}`}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col bg-slate-950 font-sans text-slate-100" suppressHydrationWarning>
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <ChatWidgetGate />
      </body>
    </html>
  );
}
