import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST() {
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.booking.deleteMany();
  await prisma.room.deleteMany();
  await prisma.menuItem.deleteMany();
  await prisma.hotel.deleteMany();

  const hotel = await prisma.hotel.create({
    data: { name: "Sunset Resort", address: "123 Beach Ave", city: "Miami", country: "USA" },
  });

  const rooms = await prisma.$transaction([
    prisma.room.create({ data: { hotelId: hotel.id, number: "101", type: "SINGLE", pricePerNight: 12000 } }),
    prisma.room.create({ data: { hotelId: hotel.id, number: "102", type: "DOUBLE", pricePerNight: 18000 } }),
    prisma.room.create({ data: { hotelId: hotel.id, number: "201", type: "SUITE", pricePerNight: 35000 } }),
  ]);

  await prisma.menuItem.createMany({
    data: [
      { name: "Caesar Salad", description: "Fresh romaine with dressing", price: 1200, category: "STARTER" },
      { name: "Margherita Pizza", description: "Tomato, mozzarella, basil", price: 1800, category: "MAIN" },
      { name: "Cheesecake", description: "Classic New York", price: 900, category: "DESSERT" },
      { name: "Iced Tea", description: "Refreshing", price: 400, category: "DRINK" },
    ],
  });

  return NextResponse.json({ hotel, roomsCount: rooms.length });
}