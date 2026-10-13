/** App mark: a chat bubble with a lightning bolt, plus the wordmark. */
export function BrandMark({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      aria-hidden="true"
      className="shrink-0"
    >
      <rect width="32" height="32" rx="8" fill="var(--or-accent)" />
      <path
        d="M10 8h12a4 4 0 0 1 4 4v7a4 4 0 0 1-4 4h-6l-5 4.5V23h-1a4 4 0 0 1-4-4v-7a4 4 0 0 1 4-4z"
        fill="#fff"
      />
      <path
        d="M17.6 10.2 12.4 16.6h3.7l-1.2 5.2 5.6-7h-3.8l.9-4.6z"
        fill="var(--or-accent)"
      />
    </svg>
  );
}

export default function BrandLogo({
  size = 24,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <BrandMark size={size} />
      <span className="font-semibold tracking-tight text-foreground">
        Super<span className="text-accent">DM</span>
      </span>
    </span>
  );
}
