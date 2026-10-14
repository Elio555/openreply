import type { Metadata } from "next";
import Link from "next/link";
import "./superdm.css";
import BrandLogo from "@/components/brand-logo";
import LanguageSwitcher from "@/components/language-switcher";
import { BRAND_NAME } from "@/lib/brand";
import type { Locale } from "@/lib/i18n";
import { I18nProvider } from "@/lib/i18n/provider";
import { getI18n } from "@/lib/i18n/server";
import {
  LANDING_COPY,
  LANDING_CTA_URL,
  landingLang,
  type LandingCopy,
} from "@/lib/landing/copy";
import { LEGAL_ENTITY } from "@/lib/legal/content";
import Reveal from "./reveal";

async function copy(): Promise<{ c: LandingCopy; locale: Locale }> {
  const { locale } = await getI18n();
  return { c: LANDING_COPY[landingLang(locale)], locale };
}

export async function generateMetadata(): Promise<Metadata> {
  const { c } = await copy();
  return {
    title: c.meta.title,
    description: c.meta.description,
    alternates: { canonical: "/" },
    openGraph: { title: c.meta.title, description: c.meta.description, siteName: BRAND_NAME },
  };
}

function PrimaryCta({ label, large = false }: { label: string; large?: boolean }) {
  return (
    <Link
      href={LANDING_CTA_URL}
      className={`sd-press inline-flex items-center justify-center gap-2 rounded-full bg-accent font-semibold text-white hover:bg-accent-hover ${
        large ? "px-8 py-4 text-base" : "px-6 py-3 text-sm"
      }`}
    >
      {label}
      <span aria-hidden="true">→</span>
    </Link>
  );
}

function PhoneDemo({ d }: { d: LandingCopy["demo"] }) {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto w-full max-w-[340px] rounded-[2.5rem] border border-border bg-surface p-3 shadow-2xl shadow-black/60"
    >
      <div className="rounded-[2rem] bg-background px-4 pb-6 pt-8">
        <div className="mx-auto mb-6 h-1.5 w-20 rounded-full bg-border" />

        <div className="sd-step sd-step-1 flex gap-3">
          <div className="h-8 w-8 shrink-0 rounded-full bg-surface-hover" />
          <div className="text-sm">
            <span className="font-semibold">{d.commenter}</span>{" "}
            <span className="font-semibold text-accent">{d.comment}</span>
            <p className="mt-0.5 text-xs text-muted">1 min</p>
          </div>
        </div>

        <div className="sd-step sd-step-2 ml-11 mt-3 flex gap-2">
          <div className="h-6 w-6 shrink-0 rounded-full bg-accent/20" />
          <p className="text-sm text-muted">{d.publicReply}</p>
        </div>

        <div className="my-6 h-px bg-border" />

        <div className="sd-step sd-step-3 ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-accent px-4 py-3 text-sm text-white">
          {d.dm}
        </div>
        <div className="sd-step sd-step-4 ml-auto mt-2 max-w-[85%] space-y-2">
          <div className="rounded-xl border border-border bg-surface py-2.5 text-center text-sm font-semibold text-accent">
            {d.button}
          </div>
          <p className="text-right text-[11px] text-muted">{d.link}</p>
        </div>
      </div>
    </div>
  );
}

export default async function SuperDmLanding() {
  const { c, locale } = await copy();
  const year = new Date().getFullYear();

  return (
    <I18nProvider locale={locale}>
      <div className="sd min-h-screen">
        <Reveal />

        {/* Navigation */}
        <header className="sd-nav sticky top-0 z-50">
          <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
            <Link href="/" aria-label={BRAND_NAME}>
              <BrandLogo size={28} className="text-lg" />
            </Link>
            <nav className="hidden items-center gap-8 text-sm text-muted md:flex">
              <a href="#funzioni" className="transition hover:text-foreground">{c.nav.features}</a>
              <a href="#come-funziona" className="transition hover:text-foreground">{c.nav.how}</a>
              <a href="#faq" className="transition hover:text-foreground">{c.nav.faq}</a>
            </nav>
            <div className="flex items-center gap-3">
              <div className="sd-lang">
                <LanguageSwitcher />
              </div>
              <Link
                href="/login"
                className="sd-press rounded-full border border-border px-4 py-2 text-sm font-semibold hover:border-border-hover"
              >
                {c.nav.login}
              </Link>
            </div>
          </div>
        </header>

        <main>
          {/* Hero */}
          <section className="relative overflow-hidden">
            <div className="sd-glow pointer-events-none absolute inset-0" />
            <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:pb-28 lg:pt-24">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-accent">
                  {c.hero.eyebrow}
                </p>
                <h1 className="sd-display mt-5">
                  {c.hero.title}
                  <br />
                  <span className="text-accent">{c.hero.titleAccent}</span>
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
                  {c.hero.subtitle}
                </p>
                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <PrimaryCta label={c.hero.cta} large />
                  <a
                    href="#come-funziona"
                    className="sd-press inline-flex items-center rounded-full border border-border px-6 py-4 text-base font-semibold hover:border-border-hover"
                  >
                    {c.hero.secondary}
                  </a>
                </div>
                <p className="mt-5 text-sm text-muted">{c.hero.note}</p>
              </div>
              <PhoneDemo d={c.demo} />
            </div>
          </section>

          {/* Trust strip */}
          <section className="border-y border-border bg-surface/50">
            <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 py-6 text-center text-sm text-muted sm:px-6 md:grid-cols-4">
              {c.trust.map((item) => (
                <li key={item} className="flex items-center justify-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* How it works */}
          <section id="come-funziona" className="sd-reveal mx-auto max-w-6xl scroll-mt-20 px-4 py-24 sm:px-6">
            <div className="max-w-2xl">
              <h2 className="sd-h2">{c.how.title}</h2>
              <p className="mt-4 text-lg text-muted">{c.how.subtitle}</p>
            </div>
            <ol className="mt-12 grid gap-5 md:grid-cols-3">
              {c.how.steps.map((step, index) => (
                <li key={step.title} className="rounded-3xl border border-border bg-surface p-7">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-accent/15 text-sm font-bold text-accent">
                    {index + 1}
                  </span>
                  <h3 className="mt-6 text-xl font-semibold tracking-tight">{step.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{step.body}</p>
                </li>
              ))}
            </ol>
          </section>

          {/* Features */}
          <section id="funzioni" className="sd-reveal scroll-mt-20 border-t border-border bg-surface/40">
            <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
              <div className="max-w-2xl">
                <h2 className="sd-h2">{c.features.title}</h2>
                <p className="mt-4 text-lg text-muted">{c.features.subtitle}</p>
              </div>
              <ul className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
                {c.features.items.map((feature, index) => (
                  <li key={feature.title} className="bg-background p-7">
                    <span className="font-mono text-xs text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-3 text-lg font-semibold tracking-tight">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{feature.body}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Stats */}
          <section className="sd-reveal mx-auto max-w-6xl px-4 py-20 sm:px-6">
            <dl className="grid gap-10 text-center md:grid-cols-3">
              {c.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-5xl font-bold tracking-tight text-accent">{stat.value}</dd>
                  <dd className="mt-2 text-sm text-muted">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </section>

          {/* Use cases */}
          <section className="sd-reveal border-t border-border">
            <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
              <h2 className="sd-h2 max-w-2xl">{c.useCases.title}</h2>
              <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {c.useCases.items.map((item) => (
                  <li key={item.title} className="rounded-3xl border border-border bg-surface p-7">
                    <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="sd-reveal scroll-mt-20 border-t border-border bg-surface/40">
            <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
              <h2 className="sd-h2 text-center">{c.faq.title}</h2>
              <div className="mt-12 divide-y divide-border rounded-3xl border border-border bg-background">
                {c.faq.items.map((item) => (
                  <details key={item.title} className="group px-6 py-5">
                    <summary className="flex items-center justify-between gap-4 text-base font-semibold">
                      {item.title}
                      <span className="sd-chevron text-xl font-light text-muted" aria-hidden="true">+</span>
                    </summary>
                    <p className="mt-3 leading-relaxed text-muted">{item.body}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="sd-reveal relative overflow-hidden border-t border-border">
            <div className="sd-glow pointer-events-none absolute inset-0" />
            <div className="relative mx-auto max-w-3xl px-4 py-28 text-center sm:px-6">
              <h2 className="sd-h2">{c.final.title}</h2>
              <p className="mt-5 text-lg text-muted">{c.final.subtitle}</p>
              <div className="mt-10">
                <PrimaryCta label={c.final.cta} large />
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-border">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 text-sm text-muted sm:px-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <BrandLogo size={22} />
              <span>
                © {year} {LEGAL_ENTITY.name}. {c.footer.rights}
              </span>
            </div>
            <nav className="flex flex-wrap gap-6">
              <Link href="/privacy" className="hover:text-foreground">{c.footer.privacy}</Link>
              <Link href="/terms" className="hover:text-foreground">{c.footer.terms}</Link>
              <Link href="/data-deletion" className="hover:text-foreground">{c.footer.deletion}</Link>
            </nav>
          </div>
        </footer>
      </div>
    </I18nProvider>
  );
}
