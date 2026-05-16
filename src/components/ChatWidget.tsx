"use client";

import { useCallback, useEffect, useId, useState } from "react";

const CHAT_URL = "https://bey.chat/75a2f315-05c2-43e7-8cf3-bc65c1bfb335";
const PROMPT = "Need a help? Ask me!";

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

      <div className="flex items-center gap-3 sm:gap-4">
        {!open && (
          <p
            className="relative max-w-[13rem] rounded-2xl border-2 border-saffron-200 bg-white px-4 py-3 text-base font-bold leading-snug shadow-xl shadow-saffron-500/20 [animation:chat-bubble-pop_0.55s_ease-out_both] sm:max-w-none sm:whitespace-nowrap"
            role="status"
          >
            <span className="text-jungle-900">Need a help? </span>
            <span className="text-saffron-600">Ask me!</span>
            <span
              className="absolute -right-1.5 top-1/2 h-3 w-3 -translate-y-1/2 rotate-45 border-r-2 border-b-2 border-saffron-200 bg-white"
              aria-hidden
            />
          </p>
        )}

        <div className="relative shrink-0">
          {!open && (
            <>
              <span
                className="pointer-events-none absolute inset-0 rounded-full bg-saffron-400/40 [animation:chat-glow-pulse_2s_ease-in-out_infinite]"
                aria-hidden
              />
              <span
                className="pointer-events-none absolute -inset-1 rounded-full border-2 border-dashed border-saffron-400/50 [animation:chat-ring-spin_8s_linear_infinite]"
                aria-hidden
              />
            </>
          )}

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-controls={open ? panelId : undefined}
            aria-label={open ? "Close chat assistant" : `${PROMPT} — open chat assistant`}
            className={`relative z-10 flex items-center justify-center rounded-full border-[3px] border-white/90 bg-gradient-to-br from-saffron-300 via-saffron-500 to-saffron-700 text-jungle-950 transition hover:scale-105 hover:from-saffron-200 hover:via-saffron-400 hover:to-saffron-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-saffron-500 active:scale-95 ${
              open
                ? "h-14 w-14 shadow-lg"
                : "h-[4.25rem] w-[4.25rem] sm:h-[4.75rem] sm:w-[4.75rem] [animation:chat-icon-bounce_1.2s_ease-in-out_infinite,chat-glow-pulse_2s_ease-in-out_infinite]"
            }`}
          >
            {open ? (
              <CloseIcon className="h-7 w-7" />
            ) : (
              <ChatIcon className="h-9 w-9 drop-shadow-sm sm:h-10 sm:w-10" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

function ChatIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path
        fillOpacity="0.15"
        d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
      />
      <circle cx="9" cy="11" r="1" fill="currentColor" stroke="none" />
      <circle cx="12" cy="11" r="1" fill="currentColor" stroke="none" />
      <circle cx="15" cy="11" r="1" fill="currentColor" stroke="none" />
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
      strokeWidth="2.5"
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}
