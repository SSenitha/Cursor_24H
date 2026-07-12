interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description: string;
  children?: React.ReactNode;
}

export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.06] bg-slate-950">
      {/* Aurora ambient glow */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_-10%,rgba(16,185,129,0.12),transparent_55%),radial-gradient(ellipse_60%_50%_at_80%_110%,rgba(45,212,191,0.08),transparent_55%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        {eyebrow && (
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-emerald-400/80">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-400">{description}</p>
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
