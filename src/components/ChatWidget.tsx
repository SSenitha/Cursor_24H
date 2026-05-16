"use client";

import { useCallback, useEffect, useId, useState } from "react";

const CHAT_URL = "https://bey.chat/35caf28b-c3f8-42a2-84fa-30e4404ed0f7";

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const labelId = useId();

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, close]);

  return (
    <div
      className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6"
      aria-live="polite"
    >
      {open && (
        <div
          id={panelId}
          role="dialog"
          aria-modal="true"
          aria-labelledby={labelId}
          className="flex w-[min(100vw-2rem,400px)] flex-col overflow-hidden rounded-2xl border border-jungle-200 bg-white shadow-2xl shadow-jungle-900/20 ring-1 ring-black/5"
          style={{ height: "min(560px, calc(100vh - 7rem))" }}
        >
          <header className="flex shrink-0 items-center justify-between gap-3 border-b border-jungle-100 bg-gradient-to-r from-jungle-800 to-jungle-900 px-4 py-3 text-white">
            <div className="min-w-0">
              <p id={labelId} className="truncate font-display text-sm font-semibold">
                Chat with us
              </p>
              <p className="truncate text-xs text-jungle-200">Ask about tours &amp; travel</p>
            </div>
            <button
              type="button"
              onClick={close}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-saffron-400"
              aria-label="Close chat"
            >
              <CloseIcon />
            </button>
          </header>
          <iframe
            src={CHAT_URL}
            title="Ceylon Explorer travel assistant"
            className="min-h-0 flex-1 w-full border-0 bg-white"
            allow="camera; microphone; fullscreen"
            allowFullScreen
            loading="lazy"
          />
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls={open ? panelId : undefined}
        aria-label={open ? "Close chat assistant" : "Open chat assistant"}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-saffron-500 text-jungle-950 shadow-lg shadow-jungle-900/25 transition hover:bg-saffron-400 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-saffron-600 active:scale-95"
      >
        {open ? <CloseIcon className="h-6 w-6" /> : <ChatIcon className="h-6 w-6" />}
        {!open && (
          <span className="pointer-events-none absolute -right-0.5 -top-0.5 flex h-3.5 w-3.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-saffron-300 opacity-75" />
            <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-saffron-200 ring-2 ring-white" />
          </span>
        )}
      </button>
    </div>
  );
}

function ChatIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}
