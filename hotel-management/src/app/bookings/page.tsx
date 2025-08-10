"use client";
import { useEffect, useState } from "react";

type Hotel = { id: string; name: string };
type Room = { id: string; number: string; type: string; pricePerNight: number; hotel: Hotel };
type Booking = { id: string; checkIn: string; checkOut: string; totalPrice: number; status: string; room: Room };

export default function BookingsPage() {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [roomId, setRoomId] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/rooms").then((r) => r.json()).then((d) => setRooms((d.rooms ?? []) as Room[]));
    fetch("/api/bookings").then((r) => r.json()).then((d) => setBookings((d.bookings ?? []) as Booking[]));
  }, []);

  async function createBooking(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ roomId, checkIn, checkOut }),
      });
      const data = (await res.json()) as { booking: Booking; error?: string };
      if (!res.ok) throw new Error(data.error || "Failed");
      setBookings((b) => [data.booking, ...b]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-8">
      <h1 className="text-2xl font-semibold mb-4">Bookings</h1>

      <form onSubmit={createBooking} className="border rounded p-4 mb-8 grid gap-3">
        <h2 className="font-medium">Create booking</h2>
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <label className="grid gap-1">
          <span className="text-sm text-gray-600">Room</span>
          <select value={roomId} onChange={(e) => setRoomId(e.target.value)} className="border rounded p-2">
            <option value="">Select a room</option>
            {rooms.map((r) => (
              <option key={r.id} value={r.id}>
                {r.hotel.name} · #{r.number} · {r.type} · ${r.pricePerNight / 100}
              </option>
            ))}
          </select>
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <label className="grid gap-1">
            <span className="text-sm text-gray-600">Check-in</span>
            <input value={checkIn} onChange={(e) => setCheckIn(e.target.value)} className="border rounded p-2" type="date" required />
          </label>
          <label className="grid gap-1">
            <span className="text-sm text-gray-600">Check-out</span>
            <input value={checkOut} onChange={(e) => setCheckOut(e.target.value)} className="border rounded p-2" type="date" required />
          </label>
        </div>
        <button disabled={loading} className="bg-black text-white px-4 py-2 rounded disabled:opacity-50">{loading ? "Creating..." : "Create booking"}</button>
      </form>

      <div className="grid gap-4">
        <h2 className="font-medium">Your bookings</h2>
        {bookings.length === 0 && <p className="text-gray-600">No bookings yet.</p>}
        {bookings.map((b) => (
          <div key={b.id} className="border rounded p-4">
            <div className="font-medium">{b.room.hotel.name} · #{b.room.number}</div>
            <div className="text-sm text-gray-600">{new Date(b.checkIn).toDateString()} → {new Date(b.checkOut).toDateString()}</div>
            <div className="text-sm">Total: ${b.totalPrice / 100}</div>
            <div className="text-xs text-gray-500">Status: {b.status}</div>
          </div>
        ))}
      </div>
    </main>
  );
}