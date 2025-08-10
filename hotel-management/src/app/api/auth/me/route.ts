import { NextRequest, NextResponse } from "next/server";
import { getIronSession } from "iron-session";
import { sessionOptions, SessionUser } from "@/lib/session";

export async function GET(req: NextRequest) {
  const res = NextResponse.next();
  const session = await getIronSession<SessionUser>(req, res, sessionOptions as unknown as import("iron-session").SessionOptions);
  if (!session.id) return NextResponse.json({ user: null });
  return NextResponse.json({ user: { id: session.id, email: session.email, name: session.name, role: session.role } });
}