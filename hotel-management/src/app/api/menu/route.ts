import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  const items = await prisma.menuItem.findMany({
    where: { isAvailable: true },
    orderBy: [{ category: "asc" }, { name: "asc" }],
  });
  return NextResponse.json({ items });
}