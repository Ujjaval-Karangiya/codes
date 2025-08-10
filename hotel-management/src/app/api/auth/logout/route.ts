import { NextRequest, NextResponse } from "next/server";
import { getIronSession } from "iron-session";
import { sessionOptions, SessionUser } from "@/lib/session";

export async function POST(req: NextRequest) {
  const res = NextResponse.json({ success: true });
  const session = await getIronSession<SessionUser>(req, res, sessionOptions as unknown as import("iron-session").SessionOptions);
  await session.destroy();
  return res;
}