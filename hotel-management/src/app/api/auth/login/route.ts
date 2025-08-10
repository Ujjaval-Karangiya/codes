import { prisma } from "@/lib/db";
import { verifyPassword } from "@/lib/hash";
import { z } from "zod";
import { NextRequest, NextResponse } from "next/server";
import { sessionOptions, SessionUser } from "@/lib/session";
import { IronSession } from "iron-session";
import { getIronSession } from "iron-session";

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export async function POST(req: NextRequest) {
  const body = await req.json();
  const parsed = LoginSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 400 });
  }

  const { email, password } = parsed.data;
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });

  const ok = await verifyPassword(password, user.passwordHash);
  if (!ok) return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });

  const res = NextResponse.json({ success: true });
  const session = await getIronSession<SessionUser>(req, res, sessionOptions as unknown as import("iron-session").SessionOptions);
  session.id = user.id;
  session.email = user.email;
  session.name = user.name;
  session.role = user.role as SessionUser["role"];
  // @ts-expect-error save exists at runtime
  await (session as IronSession).save();

  return res;
}