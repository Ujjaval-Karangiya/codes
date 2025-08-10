import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { getIronSession } from "iron-session";
import { sessionOptions, SessionUser } from "@/lib/session";
import { z } from "zod";

const CreateOrderSchema = z.object({
  roomId: z.string().cuid().optional(),
  items: z.array(z.object({ menuItemId: z.string().cuid(), quantity: z.number().int().positive() })).min(1),
});

export async function GET(req: NextRequest) {
  const res = NextResponse.next();
  const session = await getIronSession<SessionUser>(req, res, sessionOptions as unknown as import("iron-session").SessionOptions);
  if (!session.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const orders = await prisma.order.findMany({
    where: { userId: session.id },
    include: { items: { include: { menuItem: true } }, room: true },
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json({ orders });
}

export async function POST(req: NextRequest) {
  try {
    const res = NextResponse.next();
    const session = await getIronSession<SessionUser>(req, res, sessionOptions as unknown as import("iron-session").SessionOptions);
    if (!session.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const body = await req.json();
    const parsed = CreateOrderSchema.safeParse(body);
    if (!parsed.success) return NextResponse.json({ error: "Invalid input" }, { status: 400 });

    const { roomId, items } = parsed.data;

    const dbItems = await prisma.menuItem.findMany({ where: { id: { in: items.map((i) => i.menuItemId) }, isAvailable: true } });
    const itemMap = new Map(dbItems.map((i) => [i.id, i] as const));

    let totalPrice = 0;
    const orderItemsData = items.map((i) => {
      const menu = itemMap.get(i.menuItemId);
      if (!menu) throw new Error("Unavailable item");
      const unitPrice = menu.price;
      totalPrice += unitPrice * i.quantity;
      return { menuItemId: i.menuItemId, quantity: i.quantity, unitPrice };
    });

    const order = await prisma.order.create({
      data: {
        userId: session.id,
        roomId: roomId ?? null,
        totalPrice,
        items: { create: orderItemsData },
      },
      include: { items: { include: { menuItem: true } } },
    });

    return NextResponse.json({ order });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}