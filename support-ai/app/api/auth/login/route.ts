export const runtime = "nodejs";

import { Scalekit } from "@scalekit-sdk/node";
import { NextRequest, NextResponse } from "next/server";

const scalekit = new Scalekit(
  process.env.SCALEKIT_ENVIRONMENT_URL!,
  process.env.SCALEKIT_CLIENT_ID!,
  process.env.SCALEKIT_CLIENT_SECRET!
);

export async function GET(req: NextRequest) {
  try {
    const redirectUri = `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/callback`;

    const url = await scalekit.getAuthorizationUrl(redirectUri);

    return NextResponse.redirect(url);
  } catch (error) {
    console.error("Scalekit Error:", error);
    return NextResponse.json({ error: "Auth failed" }, { status: 500 });
  }
}