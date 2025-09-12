"use client";

import Link from "next/link";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

export default function Cancellation() {
  return (
    <main
      className="relative min-h-screen flex flex-col"
      style={{
        backgroundImage: "url('/disclosure.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Header */}
      <header className="relative z-10 w-full flex items-center justify-between px-6 py-4 bg-black/50 backdrop-blur-sm">
        <h1 className="text-xl md:text-2xl font-bold text-white tracking-wide">
          notasalaryman Japan Tours
        </h1>

        <nav className="flex gap-6 text-white/90 text-sm md:text-base">
          <Link href="/">Home</Link>
          <Link href="/book-tokyo">Tokyo</Link>
          <Link href="/book-kamakura">Kamakura</Link>
          <Link href="/book-izakaya">Izakaya</Link>
        </nav>
      </header>

      {/* Content */}
      <section className="relative z-10 flex-grow flex items-start justify-center px-4 py-16">
        <div className="w-full max-w-4xl bg-white/85 text-gray-900 p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">Cancellation & Refund Policy</h2>

          <div className="space-y-4 text-sm">
            <p>
              I understand that plans can change.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Cancellations more than 7 days before the tour: Full refund.</li>
              <li>Cancellations between 7 days and 48 hours: 50% refund.</li>
              <li>Cancellations within 48 hours: No refund.</li>
              <li>Refunds are processed within 7 business days.</li>
            </ul>
            <p className="text-sm text-gray-600 mt-4">
              For group bookings, please contact me directly for any special arrangements.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 w-full py-6 flex flex-col items-center text-white text-sm sm:text-base bg-black/50 backdrop-blur-sm">
        <p className="mb-2">© {new Date().getFullYear()} notasalaryman Japan Tours</p>

        <div className="flex gap-4 mb-3">
          <Link href="/disclosure" className="hover:underline">
            Commerce Disclosure
          </Link>
          <span className="text-white/60">|</span>
          <Link href="/cancellation" className="hover:underline">
            Cancellation &amp; Refund Policy
          </Link>
        </div>

        <div className="flex gap-6 mt-2">
          <a href="https://instagram.com/notasalaryman" target="_blank" rel="noreferrer" className="hover:opacity-70">
            <FaInstagram size={22} className="text-white" />
          </a>
          <a href="https://tiktok.com/@notasalaryman" target="_blank" rel="noreferrer" className="hover:opacity-70">
            <FaTiktok size={22} className="text-white" />
          </a>
          <a href="https://youtube.com/@notasalaryman" target="_blank" rel="noreferrer" className="hover:opacity-70">
            <FaYoutube size={22} className="text-white" />
          </a>
        </div>
      </footer>
    </main>
  );
}
