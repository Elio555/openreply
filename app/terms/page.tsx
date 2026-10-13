import LegalPage, {
  legalMetadata,
  type LegalSearchParams,
} from "@/components/legal-page";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: LegalSearchParams;
}) {
  return legalMetadata("terms", searchParams);
}

export default function TermsPage({
  searchParams,
}: {
  searchParams: LegalSearchParams;
}) {
  return <LegalPage id="terms" searchParams={searchParams} />;
}
