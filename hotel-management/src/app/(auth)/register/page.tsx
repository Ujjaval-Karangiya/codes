"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await res.json();
    if (!res.ok) {
      setError(data.error || "Registration failed");
      setLoading(false);
      return;
    }
    router.push("/login");
  }

  return (
    <main className="max-w-md mx-auto px-6 py-8">
      <h1 className="text-2xl font-semibold mb-4">Create account</h1>
      <form className="grid gap-3" onSubmit={onSubmit}>
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <label className="grid gap-1">
          <span className="text-sm text-gray-600">Name</span>
          <input value={name} onChange={(e) => setName(e.target.value)} className="border rounded p-2" required />
        </label>
        <label className="grid gap-1">
          <span className="text-sm text-gray-600">Email</span>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="border rounded p-2" required />
        </label>
        <label className="grid gap-1">
          <span className="text-sm text-gray-600">Password</span>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="border rounded p-2" required />
        </label>
        <button disabled={loading} className="bg-black text-white px-4 py-2 rounded disabled:opacity-50">{loading ? "Creating..." : "Create account"}</button>
      </form>
    </main>
  );
}