import type { Metadata } from "next";
import { cookies } from "next/headers";
import Link from "next/link";
import LegalShell from "@/components/legal-shell";
import { BRAND_NAME } from "@/lib/brand";
import { LOCALE_COOKIE } from "@/lib/i18n";
import {
  LEGAL_DOCS,
  LEGAL_LABELS,
  LEGAL_UPDATED,
  type LegalDocId,
  type LegalLang,
} from "@/lib/legal/content";

const PATHS: Record<LegalDocId, string> = {
  privacy: "/privacy",
  terms: "/terms",
  deletion: "/data-deletion",
};

export type LegalSearchParams = Promise<
  Record<string, string | string[] | undefined>
>;

/** `?lang=` wins; otherwise the interface language cookie; Italian by default. */
export async function resolveLegalLang(
  searchParams: LegalSearchParams
): Promise<LegalLang> {
  const lang = (await searchParams).lang;
  if (lang === "it" || lang === "en") return lang;
  const cookie = (await cookies()).get(LOCALE_COOKIE)?.value;
  if (cookie && cookie !== "it") return "en";
  return "it";
}

export async function legalMetadata(
  id: LegalDocId,
  searchParams: LegalSearchParams
): Promise<Metadata> {
  const doc = LEGAL_DOCS[id][await resolveLegalLang(searchParams)];
  return { title: `${doc.title} - ${BRAND_NAME}`, description: doc.description };
}

export default async function LegalPage({
  id,
  searchParams,
}: {
  id: LegalDocId;
  searchParams: LegalSearchParams;
}) {
  const lang = await resolveLegalLang(searchParams);
  const doc = LEGAL_DOCS[id][lang];
  const labels = LEGAL_LABELS[lang];

  return (
    <LegalShell
      title={doc.title}
      description={doc.description}
      updatedAt={LEGAL_UPDATED[lang]}
      updatedLabel={labels.updated}
      signInLabel={labels.signIn}
      lang={lang}
    >
      <p>
        <Link
          href={`${PATHS[id]}?lang=${labels.otherLang}`}
          hrefLang={labels.otherLang}
          className="font-semibold text-accent hover:underline"
        >
          {labels.other}
        </Link>
      </p>
      {doc.sections.map((section) => (
        <section key={section.heading}>
          <h2 className="text-xl font-bold text-foreground">{section.heading}</h2>
          {section.paragraphs?.map((text) => (
            <p key={text} className="mt-3">
              {text}
            </p>
          ))}
          {section.list && (
            <ul className="mt-3 list-disc space-y-2 pl-5">
              {section.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
          {section.after?.map((text) => (
            <p key={text} className="mt-3">
              {text}
            </p>
          ))}
        </section>
      ))}
    </LegalShell>
  );
}
