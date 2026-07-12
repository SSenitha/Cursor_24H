"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useState } from "react";
import beyondPresenceLogo from "../resources/dark.svg";

const PRECALL_URL = "https://gdeshocean.dev/webhook/jetwing-precall";
const PROMPT = "Chat with Serendib!";

type Step = "form" | "loading" | "chat";

export function ChatWidget() {
  const [open, setOpen]     = useState(false);
  const [step, setStep]     = useState<Step>("form");
  const [name, setName]     = useState("");
  const [email, setEmail]   = useState("");
  const [agentUrl, setAgentUrl] = useState("");
  const [error, setError]   = useState("");

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
    const onKeyDown = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, close]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    const trimmedName  = name.trim();
    const trimmedEmail = email.trim();
    if (!trimmedName)                                { setError("Please enter your name."); return; }
    if (!trimmedEmail || !trimmedEmail.includes("@")) { setError("Please enter a valid email."); return; }
    setStep("loading");
    try {
      const res  = await fetch(PRECALL_URL, {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({ name: trimmedName, email: trimmedEmail }),
      });
      if (!res.ok) throw new Error(`Status ${res.status}`);
      const data = await res.json();
      if (!data.agent_url) throw new Error("No agent URL in response");
      setAgentUrl(data.agent_url);
      setStep("chat");
    } catch {
      setStep("form");
      setError("Could not connect to Serendib. Please try again.");
    }
  }

  return (
    <div
      className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-7 sm:right-7"
      aria-live="polite"
    >
      {/* ── Expanded panel ── */}
      {open && (
        <div
          id={panelId}
          role="dialog"
          aria-modal="true"
          aria-labelledby={labelId}
          className="flex w-[min(100vw-2.5rem,420px)] flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-glass-lg animate-bubble-pop"
          style={{ height: step === "chat" ? "min(540px, calc(100vh - 7rem))" : "auto" }}
        >
          {/* Header */}
          <header className="flex shrink-0 items-center justify-between gap-3 border-b border-white/[0.07] bg-slate-900/80 px-5 py-4 backdrop-blur-sm">
            <div className="flex items-center gap-3 min-w-0">
              <div className="relative shrink-0 flex h-9 w-9 items-center justify-center rounded-full border border-emerald-400/30 bg-gradient-to-br from-emerald-400 to-emerald-600 text-slate-950">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 14.2a7.2 7.2 0 0 1-6-3.22c.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08a7.2 7.2 0 0 1-6 3.22z"/>
                </svg>
                <span className="absolute -right-0.5 -bottom-0.5 h-3 w-3 rounded-full border-2 border-slate-900 bg-emerald-400" />
              </div>
              <div id={labelId} className="min-w-0">
                <p className="text-sm font-semibold text-white leading-none">Serendib</p>
                <p className="mt-0.5 text-[11px] text-slate-500">AI Travel Companion</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              {step !== "form" && (
                <button
                  type="button"
                  onClick={reset}
                  aria-label="Start over"
                  className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-400 transition hover:bg-white/10 hover:text-white"
                >
                  <ResetIcon />
                </button>
              )}
              <button
                type="button"
                onClick={close}
                aria-label="Close chat"
                className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-400 transition hover:bg-white/10 hover:text-white"
              >
                <CloseIcon />
              </button>
            </div>
          </header>

          {/* Form */}
          {step === "form" && (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4 p-5">
              <p className="text-sm text-slate-400 leading-relaxed">
                Introduce yourself and <strong className="text-white">Serendib</strong> will plan your perfect Sri Lanka trip.
              </p>
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">Your name</label>
                <input
                  type="text"
                  autoComplete="name"
                  placeholder="e.g. Kavya Perera"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder-slate-600 outline-none transition focus:border-emerald-400/50 focus:ring-2 focus:ring-emerald-400/20"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">Email</label>
                <input
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder-slate-600 outline-none transition focus:border-emerald-400/50 focus:ring-2 focus:ring-emerald-400/20"
                />
              </div>
              {error && (
                <p className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-2.5 text-xs text-red-400">{error}</p>
              )}
              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-emerald-400 to-emerald-500 py-3 text-sm font-semibold text-slate-950 shadow-glow-emerald transition hover:shadow-glow-emerald-lg hover:scale-[1.01] active:scale-[0.98]"
              >
                Start conversation →
              </button>
              <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-600">
                <span>Powered by</span>
                <Image src={beyondPresenceLogo} alt="Beyond Presence" className="h-2.5 w-auto opacity-40 invert" priority />
              </div>
            </form>
          )}

          {/* Loading */}
          {step === "loading" && (
            <div className="flex flex-col items-center justify-center gap-4 px-5 py-14">
              <div className="relative h-12 w-12">
                <div className="absolute inset-0 rounded-full border-2 border-slate-800" />
                <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-emerald-400 animate-spin-cw" />
              </div>
              <p className="text-sm text-slate-400">Connecting to Serendib…</p>
            </div>
          )}

          {/* Chat iframe */}
          {step === "chat" && agentUrl && (
            <iframe
              src={agentUrl}
              title="Serendib AI travel companion"
              className="min-h-0 flex-1 w-full border-0 bg-slate-950"
              allow="camera; microphone; fullscreen"
              allowFullScreen
            />
          )}
        </div>
      )}

      {/* ── Floating trigger ── */}
      <div className="flex items-center gap-3">
        {!open && (
          <p
            className="relative max-w-[14rem] rounded-2xl border border-white/10 bg-slate-900/90 px-4 py-3 text-sm font-semibold leading-snug shadow-glass backdrop-blur-md animate-chat-bubble-pop"
            role="status"
          >
            <span className="text-white">Chat with </span>
            <span className="text-emerald-400">Serendib!</span>
            <span className="mt-1 flex items-center gap-1.5 text-[10px] font-medium text-slate-500">
              <span>Powered by</span>
              <Image src={beyondPresenceLogo} alt="Beyond Presence" className="h-2.5 w-auto opacity-40 invert" />
            </span>
            {/* Speech bubble arrow */}
            <span
              className="absolute -right-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 rotate-45 border-r border-b border-white/10 bg-slate-900/90"
              aria-hidden
            />
          </p>
        )}

        {/* FAB button */}
        <div className="relative shrink-0">
          {!open && (
            <>
              <span className="pointer-events-none absolute inset-0 rounded-full bg-emerald-400/20 animate-glow-pulse" aria-hidden />
              <span className="pointer-events-none absolute -inset-1.5 rounded-full border border-dashed border-emerald-400/30 animate-ring-orbit" aria-hidden />
            </>
          )}
          <button
            type="button"
            onClick={() => (open ? close() : setOpen(true))}
            aria-expanded={open}
            aria-controls={open ? panelId : undefined}
            aria-label={open ? "Close Serendib chat" : `${PROMPT} — open chat assistant`}
            id="chat-widget-fab"
            className={`relative z-10 flex items-center justify-center rounded-full border border-emerald-400/30 bg-gradient-to-br from-emerald-300 via-emerald-500 to-emerald-700 text-slate-950 shadow-glow-emerald transition hover:scale-105 hover:shadow-glow-emerald-lg active:scale-95 ${
              open
                ? "h-12 w-12"
                : "h-[4rem] w-[4rem] animate-chat-bounce"
            }`}
          >
            {open
              ? <CloseIcon className="h-5 w-5" />
              : <ChatIcon  className="h-7 w-7" />
            }
          </button>
        </div>
      </div>
    </div>
  );
}

function ChatIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path fillOpacity="0.15" d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <circle cx="9"  cy="11" r="1" fill="currentColor" stroke="none" />
      <circle cx="12" cy="11" r="1" fill="currentColor" stroke="none" />
      <circle cx="15" cy="11" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

function ResetIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5" aria-hidden>
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
    </svg>
  );
}
