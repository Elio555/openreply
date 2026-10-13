import { NextRequest, NextResponse } from "next/server";
import { getCurrentWorkspaceId } from "@/lib/auth";
import { getMetaGraphApiVersion } from "@/lib/env";
import { getWorkspaceInstagramAccount } from "@/lib/instagram-accounts";
import { createInstagramContext } from "@/lib/instagram/provider";

// Campaign previews look media up by id, so a campaign on a post older than
// the most recent page still gets its thumbnail.
const MAX_IDS = 50;
const FIELDS = "id,media_type,media_url,thumbnail_url,permalink";

type MediaPreview = {
  id: string;
  media_type?: string;
  media_url?: string;
  thumbnail_url?: string;
  permalink?: string;
};

export async function GET(request: NextRequest) {
  const workspaceId = await getCurrentWorkspaceId();
  if (!workspaceId) {
    return NextResponse.json(
      { success: false, error: "Unauthorized" },
      { status: 401 }
    );
  }

  const account = await getWorkspaceInstagramAccount(
    workspaceId,
    request.nextUrl.searchParams.get("instagramAccountId")
  );
  if (!account) {
    return NextResponse.json(
      { success: false, error: "Instagram account not connected." },
      { status: 400 }
    );
  }

  const ids = Array.from(
    new Set(
      (request.nextUrl.searchParams.get("ids") ?? "")
        .split(",")
        .map((id) => id.trim())
        .filter((id) => /^\d+$/.test(id))
    )
  ).slice(0, MAX_IDS);

  // Zernio accounts have no per-media lookup; callers keep their placeholder.
  if (ids.length === 0 || account.provider === "ZERNIO") {
    return NextResponse.json({ success: true, data: [] });
  }

  const context = await createInstagramContext(account);
  if (context.provider !== "META") {
    return NextResponse.json({ success: true, data: [] });
  }

  const base = `https://graph.instagram.com/${getMetaGraphApiVersion()}`;
  const results = await Promise.all(
    ids.map(async (id): Promise<MediaPreview | null> => {
      const url = new URL(`${base}/${id}`);
      url.searchParams.set("fields", FIELDS);
      url.searchParams.set("access_token", context.accessToken);
      try {
        const response = await fetch(url.toString());
        if (!response.ok) return null;
        return (await response.json()) as MediaPreview;
      } catch {
        return null;
      }
    })
  );

  return NextResponse.json({
    success: true,
    data: results.filter((media): media is MediaPreview => media !== null),
  });
}
