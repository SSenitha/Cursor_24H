"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useState } from "react";
import beyondPresenceLogo from "../resources/dark.svg";

const PRECALL_URL = "https://gdeshocean.dev/webhook/jetwing-precall";
const PROMPT = "Chat with Serendib!";

type Step = "form" | "loading" | "chat";

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("form");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [agentUrl, setAgentUrl] = useState("");
  const [error, setError] = useState("");

  const panelId = useId();
  const labelId = useId();

  const reset = useCallback(() => {
    setStep("form");
    setName("");
    setEmail("");
    setAgentUrl("");
    setError("");
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    reset();
  }, [reset]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, close]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();

    if (!trimmedName) { setError("Please enter your name."); return; }
    if (!trimmedEmail || !trimmedEmail.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    setStep("loading");

    try {
      const res = await fetch(PRECALL_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: trimmedName, email: trimmedEmail }),
      });

      if (!res.ok) throw new Error(`Status ${res.status}`);
      const data = await res.json();
      if (!data.agent_url) throw new Error("No agent URL in response");

      setAgentUrl(data.agent_url);
      setStep("chat");
    } catch {
      setStep("form");
      setError("Something went wrong connecting to Serendib. Please try again.");
    }
  }

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
          className="flex w-[min(100vw-2rem,480px)] flex-col overflow-hidden rounded-2xl border border-jungle-200 bg-white shadow-2xl shadow-jungle-900/20 ring-1 ring-black/5"
          style={{ height: step === "chat" ? "min(560px, calc(100vh - 7rem))" : "auto" }}
        >
          {/* Header */}
          <header className="flex shrink-0 items-center justify-between gap-3 border-b border-jungle-100 bg-jungle-900 px-5 py-4 text-white">
            <div className="min-w-0">
              <p id={labelId} className="truncate font-display text-sm font-semibold tracking-wide text-saffron-300">
                Ceylon Explorer
              </p>
              <p className="truncate text-xs text-jungle-300">AI Agent Portal</p>
            </div>
            <div className="flex items-center gap-2">
              {step !== "form" && (
                <button
                  type="button"
                  onClick={reset}
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-saffron-400"
                  aria-label="Start over"
                  title="Start over"
                >
                  <ResetIcon />
                </button>
              )}
              <button
                type="button"
                onClick={close}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-saffron-400"
                aria-label="Close chat"
              >
                <CloseIcon />
              </button>
            </div>
          </header>

          {/* Form step */}
          {step === "form" && (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4 p-6">
              <p className="text-sm text-jungle-700 leading-relaxed">
                Before we connect you with <strong>Serendib</strong>, please enter your details below.
                This ensures we have your information correctly — no need to spell anything out during the call.
              </p>

              <div className="flex flex-col gap-1">
                <label htmlFor="jw-name" className="text-xs font-bold uppercase tracking-wide text-jungle-600">
                  Your name
                </label>
                <input
                  id="jw-name"
                  type="text"
                  autoComplete="name"
                  placeholder="e.g. Aarav Fernando"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="rounded-lg border border-jungle-200 px-4 py-2.5 text-sm font-sans text-jungle-900 outline-none transition focus:border-saffron-400 focus:ring-2 focus:ring-saffron-400/20"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="jw-email" className="text-xs font-bold uppercase tracking-wide text-jungle-600">
                  Email address
                </label>
                <input
                  id="jw-email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-lg border border-jungle-200 px-4 py-2.5 text-sm font-sans text-jungle-900 outline-none transition focus:border-saffron-400 focus:ring-2 focus:ring-saffron-400/20"
                />
              </div>

              {error && (
                <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-2.5 text-xs text-red-700">
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="mt-1 w-full rounded-lg bg-jungle-900 py-3 text-sm font-bold tracking-wide text-saffron-300 transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-saffron-400 active:scale-[0.98]"
              >
                Start conversation with Serendib →
              </button>

              <p className="text-center text-[11px] text-jungle-400 leading-relaxed">
                Your details are shared only with Ceylon Explorer and used solely to personalise your consultation.
              </p>
            </form>
          )}

          {/* Loading step */}
          {step === "loading" && (
            <div className="flex flex-col items-center justify-center gap-4 px-6 py-14 text-jungle-600">
              <Spinner />
              <p className="text-sm font-sans">Connecting you to Serendib…</p>
            </div>
          )}

          {/* Chat step */}
          {step === "chat" && agentUrl && (
            <iframe
              src={agentUrl}
              title="Serendib — Ceylon Explorer assistant"
              className="min-h-0 flex-1 w-full border-0 bg-white"
              allow="camera; microphone; fullscreen"
              allowFullScreen
            />
          )}
        </div>
      )}

      {/* Floating trigger */}
      <div className="flex items-center gap-3 sm:gap-4">
        {!open && (
          <p
            className="relative max-w-[13rem] rounded-2xl border-2 border-saffron-200 bg-white px-4 py-3 text-base font-bold leading-snug shadow-xl shadow-saffron-500/20 [animation:chat-bubble-pop_0.55s_ease-out_both] sm:max-w-none"
            role="status"
          >
            <span className="text-jungle-900">Chat with </span>
            <span className="text-saffron-600">Serendib!</span>
            <span className="mt-1.5 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wide text-jungle-500">
              <span>Powered by</span>
              <Image
                src={beyondPresenceLogo}
                alt="Beyond Presence"
                className="h-3 w-auto"
                priority
              />
            </span>
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
            onClick={() => open ? close() : setOpen(true)}
            aria-expanded={open}
            aria-controls={open ? panelId : undefined}
            aria-label={open ? "Close Serendib chat" : `${PROMPT} — open chat assistant`}
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

function Spinner() {
  return (
    <span
      className="h-7 w-7 rounded-full border-2 border-jungle-100 border-t-saffron-400 [animation:jw-spin_0.8s_linear_infinite]"
      aria-hidden
    />
  );
}

function ChatIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
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

function ResetIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
    </svg>
  );
}
