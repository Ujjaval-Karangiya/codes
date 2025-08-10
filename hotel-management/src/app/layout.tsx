import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Hotel Management",
  description: "Hotel management and food ordering",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="border-b">
          <nav className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="font-semibold">Hotel</Link>
              <Link href="/bookings" className="text-sm text-gray-700">Bookings</Link>
              <Link href="/food" className="text-sm text-gray-700">Food</Link>
              <Link href="/admin" className="text-sm text-gray-700">Admin</Link>
            </div>
            <div className="flex items-center gap-3">
              <Link href="/login" className="text-sm text-gray-700">Login</Link>
              <Link href="/register" className="text-sm text-gray-700">Register</Link>
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
