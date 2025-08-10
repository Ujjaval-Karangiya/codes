import Link from "next/link";

export default function AdminPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-8 grid gap-6">
      <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
      <p className="text-gray-600">Manage hotels, rooms, and menu items (stub).</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link className="border rounded p-4" href="#">Hotels</Link>
        <Link className="border rounded p-4" href="#">Rooms</Link>
        <Link className="border rounded p-4" href="#">Menu Items</Link>
        <Link className="border rounded p-4" href="#">Orders</Link>
      </div>
    </main>
  );
}