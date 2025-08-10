import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-12 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Hotel Management</h1>
      <p className="text-gray-600 mb-8">Manage rooms, bookings, and order delicious food.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Bookings</h2>
          <p className="text-gray-600 mb-4">Browse rooms and create/manage bookings.</p>
          <Link className="inline-block bg-black text-white px-4 py-2 rounded" href="/bookings">Open bookings</Link>
        </div>
        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Order Food</h2>
          <p className="text-gray-600 mb-4">Explore menu and place orders to your room.</p>
          <Link className="inline-block bg-black text-white px-4 py-2 rounded" href="/food">Order now</Link>
        </div>
        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Admin</h2>
          <p className="text-gray-600 mb-4">Manage hotels, rooms, menu, and orders.</p>
          <Link className="inline-block bg-black text-white px-4 py-2 rounded" href="/admin">Admin dashboard</Link>
        </div>
      </div>
    </main>
  );
}
