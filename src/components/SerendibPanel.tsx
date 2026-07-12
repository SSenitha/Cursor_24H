"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import beyondPresenceLogo from "../resources/dark.svg";

const PRECALL_URL = "https://gdeshocean.dev/webhook/jetwing-precall";

type Step = "form" | "loading" | "chat";

interface SerendibPanelProps {
  /** If true, renders in compact hero-embedded mode (no outer padding) */
  embedded?: boolean;
}

export function SerendibPanel({ embedded = false }: SerendibPanelProps) {
  const [step, setStep] = useState<Step>("form");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [agentUrl, setAgentUrl] = useState("");
  const [error, setError] = useState("");

  const nameId  = useId();
  const emailId = useId();
  const panelRef = useRef<HTMLDivElement>(null);

  // Lock page scroll for the entire chat step.
  // Uses the "position: fixed" body-lock technique (same as every modal
  // library) which makes it physically impossible for the browser to scroll
  // the page — no race conditions, no timers, no jank.
  useEffect(() => {
    if (step !== "chat") return;

    const body = document.body;
    const html = document.documentElement;

    // Save current scroll position
    const scrollY = window.scrollY;

    // Compensate for scrollbar width to prevent layout shift
    const scrollbarWidth = window.innerWidth - html.clientWidth;

    // Lock: fix the body in place at the current scroll offset
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    body.style.paddingRight = `${scrollbarWidth}px`;
    html.style.overflow = "hidden";

    return () => {
      // Unlock: restore body positioning and scroll position
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.width = "";
      body.style.paddingRight = "";
      html.style.overflow = "";
      window.scrollTo(0, scrollY);
    };
  }, [step]);

  const reset = useCallback(() => {
    setStep("form");
    setName("");
    setEmail("");
    setAgentUrl("");
    setError("");
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    const trimmedName  = name.trim();
    const trimmedEmail = email.trim();
    if (!trimmedName)                             { setError("Please enter your name."); return; }
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
      ref={panelRef}
      id="serendib-panel"
      aria-label="Serendib AI agent panel"
      className={`relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 shadow-glass-lg backdrop-blur-xl ${
        embedded ? "h-full min-h-[600px]" : ""
      }`}
    >
      {/* Inner top glow line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" aria-hidden />

      {/* ── Panel Header ── */}
      <div className="relative flex shrink-0 items-center gap-4 border-b border-white/[0.07] px-6 py-5">
        {/* Avatar glow orb */}
        <div className="relative shrink-0">
          <div className="absolute inset-0 rounded-full bg-emerald-400/25 blur-md animate-glow-pulse" aria-hidden />
          <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-emerald-400/40 bg-gradient-to-br from-emerald-300 via-emerald-500 to-emerald-700 text-slate-950 shadow-glow-emerald">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 14.2a7.2 7.2 0 0 1-6-3.22c.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08a7.2 7.2 0 0 1-6 3.22z"/>
            </svg>
          </div>
          {/* Online ring */}
          <span className="absolute -right-0.5 -bottom-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-slate-900 bg-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 animate-status-pulse" />
          </span>
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-base font-semibold text-white leading-none">Serendib</p>
          <p className="mt-1 text-xs text-slate-400">Your Sri Lanka AI Travel Companion</p>
          <p className="mt-1.5 flex items-center gap-1.5 text-[11px] font-medium text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-status-pulse" aria-hidden />
            Online · Ready to plan your trip
          </p>
        </div>

        {step !== "form" && (
          <button
            type="button"
            onClick={reset}
            title="Start over"
            aria-label="Start a new conversation"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.05] text-slate-400 transition hover:bg-white/10 hover:text-white"
          >
            <ResetIcon />
          </button>
        )}
      </div>

      {/* ── Form Step ── */}
      {step === "form" && (
        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5 p-6 animate-fade-in-up">
          <p className="text-sm leading-relaxed text-slate-400">
            Introduce yourself and Serendib will craft a personalised Sri Lanka experience — just for you.
          </p>

          <div className="flex flex-col gap-1.5">
            <label htmlFor={nameId} className="text-[11px] font-semibold uppercase tracking-widest text-slate-500">
              Your name
            </label>
            <input
              id={nameId}
              type="text"
              autoComplete="name"
              placeholder="e.g. Kavya Perera"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-slate-600 outline-none ring-0 transition focus:border-emerald-400/50 focus:bg-white/[0.07] focus:ring-2 focus:ring-emerald-400/20"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor={emailId} className="text-[11px] font-semibold uppercase tracking-widest text-slate-500">
              Email address
            </label>
            <input
              id={emailId}
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition focus:border-emerald-400/50 focus:bg-white/[0.07] focus:ring-2 focus:ring-emerald-400/20"
            />
          </div>

          {error && (
            <p className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-xs text-red-400">
              {error}
            </p>
          )}

          <button
            type="submit"
            id="serendib-start-btn"
            className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-emerald-400 to-emerald-500 py-3.5 text-sm font-semibold text-slate-950 shadow-glow-emerald transition hover:shadow-glow-emerald-lg hover:scale-[1.02] active:scale-[0.98]"
          >
            <span className="relative z-10">Start conversation with Serendib →</span>
            <span className="absolute inset-0 bg-gradient-to-r from-emerald-300 to-emerald-400 opacity-0 transition group-hover:opacity-100" />
          </button>

          <div className="flex items-center justify-center gap-2 text-center text-[11px] text-slate-600">
            <span>Powered by</span>
            <Image src={beyondPresenceLogo} alt="Beyond Presence" className="h-3 w-auto opacity-50 invert" priority />
          </div>
        </form>
      )}

      {/* ── Loading Step ── */}
      {step === "loading" && (
        <div className="flex flex-1 flex-col items-center justify-center gap-5 px-6 py-16 animate-fade-in-up">
          <div className="relative">
            <div className="h-14 w-14 rounded-full border-2 border-slate-700" />
            <div className="absolute inset-0 h-14 w-14 rounded-full border-2 border-transparent border-t-emerald-400 animate-spin-cw" />
            <div className="absolute inset-2 rounded-full bg-emerald-400/10 animate-glow-pulse" />
          </div>
          <div className="space-y-1 text-center">
            <p className="text-sm font-medium text-white">Connecting to Serendib…</p>
            <p className="text-xs text-slate-500">Preparing your personal travel session</p>
          </div>
        </div>
      )}

      {/* ── Chat Step ── */}
      {step === "chat" && agentUrl && (
        <iframe
          src={agentUrl}
          title="Serendib — Your Sri Lanka AI travel companion"
          className="min-h-0 flex-1 w-full border-0 bg-slate-950"
          allow="camera; microphone; fullscreen"
          allowFullScreen
        />
      )}

      {/* Bottom shimmer edge */}
      {step !== "chat" && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent" aria-hidden />
      )}
    </div>
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
