import LegalPage, {
  legalMetadata,
  type LegalSearchParams,
} from "@/components/legal-page";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: LegalSearchParams;
}) {
  return legalMetadata("deletion", searchParams);
}

export default function DataDeletionPage({
  searchParams,
}: {
  searchParams: LegalSearchParams;
}) {
  return <LegalPage id="deletion" searchParams={searchParams} />;
}
