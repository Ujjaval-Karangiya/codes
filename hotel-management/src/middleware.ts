import { NextRequest, NextResponse } from "next/server";

const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "connect-src 'self' ws: http: https:",
  "font-src 'self' data:",
].join("; ");

const rateLimitWindowMs = 15 * 60 * 1000;
const maxRequests = 300;
const ipRequestMap = new Map<string, { count: number; resetAt: number }>();

export function middleware(req: NextRequest) {
  const res = NextResponse.next();

  res.headers.set("X-Frame-Options", "SAMEORIGIN");
  res.headers.set("X-Content-Type-Options", "nosniff");
  res.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  res.headers.set("Content-Security-Policy", csp);

  try {
    const ip = req.ip ?? req.headers.get("x-forwarded-for") ?? "anonymous";
    const now = Date.now();
    const bucket = ipRequestMap.get(ip);
    if (!bucket || now > bucket.resetAt) {
      ipRequestMap.set(ip, { count: 1, resetAt: now + rateLimitWindowMs });
    } else {
      bucket.count += 1;
      if (bucket.count > maxRequests) {
        return new NextResponse("Too Many Requests", { status: 429 });
      }
    }
  } catch {}

  return res;
}

export const config = {
  matcher: "/:path*",
};