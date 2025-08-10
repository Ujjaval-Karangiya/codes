"use client";
import { useEffect, useMemo, useState } from "react";

type MenuItem = { id: string; name: string; category: string; price: number };
type CartItem = { menuItemId: string; name: string; price: number; quantity: number };

export default function FoodPage() {
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [roomId, setRoomId] = useState<string>("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/menu").then((r) => r.json()).then((d) => setMenu((d.items ?? []) as MenuItem[]));
  }, []);

  const total = useMemo(() => cart.reduce((sum, c) => sum + c.price * c.quantity, 0), [cart]);

  function addToCart(item: MenuItem) {
    setCart((c) => {
      const idx = c.findIndex((ci) => ci.menuItemId === item.id);
      if (idx >= 0) {
        const copy = [...c];
        copy[idx] = { ...copy[idx], quantity: copy[idx].quantity + 1 };
        return copy;
      }
      return [...c, { menuItemId: item.id, name: item.name, price: item.price, quantity: 1 }];
    });
  }

  function updateQuantity(id: string, qty: number) {
    setCart((c) => c.map((ci) => (ci.menuItemId === id ? { ...ci, quantity: qty } : ci)));
  }

  function removeFromCart(id: string) {
    setCart((c) => c.filter((ci) => ci.menuItemId !== id));
  }

  async function submitOrder() {
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ roomId: roomId || undefined, items: cart.map((c) => ({ menuItemId: c.menuItemId, quantity: c.quantity })) }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error((data as { error?: string }).error || "Failed");
      setCart([]);
      alert("Order placed!");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="max-w-5xl mx-auto px-6 py-8 grid gap-8">
      <h1 className="text-2xl font-semibold">Order Food</h1>

      {error && <p className="text-red-600 text-sm">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 grid gap-4">
          <h2 className="font-medium">Menu</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {menu.map((m) => (
              <div key={m.id} className="border rounded p-4">
                <div className="font-medium">{m.name}</div>
                <div className="text-sm text-gray-600">{m.category}</div>
                <div className="text-sm">${m.price / 100}</div>
                <button onClick={() => addToCart(m)} className="mt-2 bg-black text-white px-3 py-1 rounded">Add</button>
              </div>
            ))}
          </div>
        </div>
        <div className="border rounded p-4 grid gap-3 h-fit">
          <h2 className="font-medium">Your order</h2>
          <label className="grid gap-1">
            <span className="text-sm text-gray-600">Room (optional)</span>
            <input value={roomId} onChange={(e) => setRoomId(e.target.value)} placeholder="Room ID" className="border rounded p-2" />
          </label>
          {cart.length === 0 && <p className="text-gray-600 text-sm">No items in cart.</p>}
          {cart.map((c) => (
            <div key={c.menuItemId} className="flex items-center justify-between gap-2">
              <div>
                <div className="text-sm font-medium">{c.name}</div>
                <div className="text-xs text-gray-500">${c.price / 100} each</div>
              </div>
              <div className="flex items-center gap-2">
                <input type="number" min={1} value={c.quantity} onChange={(e) => updateQuantity(c.menuItemId, Number(e.target.value))} className="w-16 border rounded p-1 text-right" />
                <button onClick={() => removeFromCart(c.menuItemId)} className="text-sm text-red-600">Remove</button>
              </div>
            </div>
          ))}
          <div className="flex items-center justify-between border-t pt-2 mt-2">
            <span className="text-sm">Total</span>
            <span className="font-semibold">${total / 100}</span>
          </div>
          <button disabled={submitting || cart.length === 0} onClick={submitOrder} className="bg-black text-white px-4 py-2 rounded disabled:opacity-50">{submitting ? "Submitting..." : "Place order"}</button>
        </div>
      </div>
    </main>
  );
}