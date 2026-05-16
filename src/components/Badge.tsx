interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "theme" | "ocean";
}

const variants = {
  default: "bg-jungle-100 text-jungle-800",
  theme: "bg-saffron-100 text-saffron-900",
  ocean: "bg-ocean-100 text-ocean-900",
};

export function Badge({ children, variant = "default" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
