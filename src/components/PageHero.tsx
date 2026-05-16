interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description: string;
  children?: React.ReactNode;
}

export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-jungle-200 bg-gradient-to-br from-jungle-800 via-jungle-700 to-ocean-800 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,168,46,0.15),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(77,170,184,0.2),transparent_40%)]" />
      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        {eyebrow && (
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-saffron-300">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-jungle-100/90">{description}</p>
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
