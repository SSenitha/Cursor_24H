"use client";

import { usePathname } from "next/navigation";
import { ChatWidget } from "./ChatWidget";

/**
 * Renders the floating ChatWidget FAB on every page EXCEPT the homepage,
 * where the full SerendibPanel hero already provides the chat experience.
 */
export function ChatWidgetGate() {
  const pathname = usePathname();
  if (pathname === "/") return null;
  return <ChatWidget />;
}
