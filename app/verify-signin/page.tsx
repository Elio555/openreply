import { getI18n } from "@/lib/i18n/server";
import Link from "next/link";

export async function generateMetadata() {
  const { t } = await getI18n();
  return { title: t("Sign in - OpenReply") };
}

const PROVIDERS = new Set(["nodemailer", "resend"]);

/**
 * Landing page for the emailed sign-in link (see withConfirmPage in
 * lib/auth.ts). Rendering it does not consume the one-time token, so link
 * prefetching is harmless; submitting the form performs the real callback.
 */
export default async function VerifySignInPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { t } = await getI18n();
  const params = await searchParams;
  const pick = (key: string) =>
    typeof params[key] === "string" ? (params[key] as string) : "";
  const provider = pick("provider");
  const token = pick("token");
  const email = pick("email");
  const callbackUrl = pick("callbackUrl");
  const valid = PROVIDERS.has(provider) && token && email;

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-foreground">OpenReply</h1>
        </div>

        <div className="panel rounded p-8 text-center">
          {valid ? (
            <form method="get" action={`/api/auth/callback/${provider}`}>
              <h2 className="text-lg font-semibold mb-2">{t("Sign in")}</h2>
              <p className="text-sm text-muted mb-6">{email}</p>
              <input type="hidden" name="token" value={token} />
              <input type="hidden" name="email" value={email} />
              {callbackUrl && (
                <input type="hidden" name="callbackUrl" value={callbackUrl} />
              )}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center rounded bg-accent px-6 py-3.5 text-sm font-semibold text-white"
              >
                {t("Sign in")}
              </button>
            </form>
          ) : (
            <p className="text-sm">
              <Link href="/login" className="text-accent hover:underline">
                {t("Back to sign in")}
              </Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
