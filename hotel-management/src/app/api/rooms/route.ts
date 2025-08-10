import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  const rooms = await prisma.room.findMany({
    include: { hotel: true },
    orderBy: [{ hotel: { name: "asc" } }, { number: "asc" }],
  });
  return NextResponse.json({ rooms });
}