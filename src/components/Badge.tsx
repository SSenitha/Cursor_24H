interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "theme" | "ocean" | "emerald";
}

const variants = {
  default: "border-white/15 bg-white/[0.06] text-slate-300",
  theme: "border-emerald-400/25 bg-emerald-400/10 text-emerald-300",
  ocean: "border-teal-400/25 bg-teal-400/10 text-teal-300",
  emerald: "border-emerald-400/25 bg-emerald-400/10 text-emerald-300",
};

export function Badge({ children, variant = "default" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
