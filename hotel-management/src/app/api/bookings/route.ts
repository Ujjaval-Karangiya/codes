import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { getIronSession } from "iron-session";
import { sessionOptions, SessionUser } from "@/lib/session";
import { z } from "zod";

const CreateBookingSchema = z.object({
  roomId: z.string().cuid(),
  checkIn: z.string().transform((v) => new Date(v)),
  checkOut: z.string().transform((v) => new Date(v)),
});

export async function GET(req: NextRequest) {
  const res = NextResponse.next();
  const session = await getIronSession<SessionUser>(req, res, sessionOptions as unknown as import("iron-session").SessionOptions);
  if (!session.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const bookings = await prisma.booking.findMany({
    where: { userId: session.id },
    include: { room: { include: { hotel: true } } },
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json({ bookings });
}

export async function POST(req: NextRequest) {
  try {
    const res = NextResponse.next();
    const session = await getIronSession<SessionUser>(req, res, sessionOptions as unknown as import("iron-session").SessionOptions);
    if (!session.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const body = await req.json();
    const parsed = CreateBookingSchema.safeParse(body);
    if (!parsed.success) return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    const { roomId, checkIn, checkOut } = parsed.data;

    if (!(checkIn instanceof Date) || !(checkOut instanceof Date) || checkOut <= checkIn) {
      return NextResponse.json({ error: "Invalid dates" }, { status: 400 });
    }

    const room = await prisma.room.findUnique({ where: { id: roomId } });
    if (!room || !room.isAvailable) {
      return NextResponse.json({ error: "Room not available" }, { status: 400 });
    }

    const nights = Math.ceil((+checkOut - +checkIn) / (1000 * 60 * 60 * 24));
    const totalPrice = nights * room.pricePerNight;

    const booking = await prisma.booking.create({
      data: { userId: session.id, roomId, checkIn, checkOut, totalPrice },
    });

    await prisma.room.update({ where: { id: roomId }, data: { isAvailable: false } });

    return NextResponse.json({ booking });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}