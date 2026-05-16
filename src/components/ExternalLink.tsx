export function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 font-medium text-ocean-700 hover:text-ocean-900 hover:underline"
    >
      {children}
      <span aria-hidden>↗</span>
    </a>
  );
}
