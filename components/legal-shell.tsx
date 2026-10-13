import Link from "next/link";
import BrandLogo from "@/components/brand-logo";

interface LegalShellProps {
  title: string;
  description: string;
  updatedAt: string;
  updatedLabel?: string;
  signInLabel?: string;
  lang?: string;
  children: React.ReactNode;
}

export default function LegalShell({
  title,
  description,
  updatedAt,
  updatedLabel = "Last updated",
  signInLabel = "Sign in",
  lang,
  children,
}: LegalShellProps) {
  return (
    <main lang={lang} className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5">
          <Link href="/" className="flex items-center gap-3">
            <BrandLogo size={28} className="text-lg" />
          </Link>
          <Link
            href="/login"
            className="text-sm font-semibold text-muted transition hover:text-foreground"
          >
            {signInLabel}
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-5 py-14">
        <p className="text-sm font-semibold uppercase text-accent">
          {updatedLabel} {updatedAt}
        </p>
        <h1 className="mt-4 text-4xl font-black text-foreground sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 text-base leading-8 text-muted">{description}</p>
        <div className="mt-10 space-y-8 text-sm leading-7 text-foreground">
          {children}
        </div>
      </article>
    </main>
  );
}
