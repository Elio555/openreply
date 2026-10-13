import LegalPage, {
  legalMetadata,
  type LegalSearchParams,
} from "@/components/legal-page";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: LegalSearchParams;
}) {
  return legalMetadata("privacy", searchParams);
}

export default function PrivacyPage({
  searchParams,
}: {
  searchParams: LegalSearchParams;
}) {
  return <LegalPage id="privacy" searchParams={searchParams} />;
}
