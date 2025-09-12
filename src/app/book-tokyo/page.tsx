"use client";

import Link from "next/link";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

export default function BookTokyo() {
  return (
    <main
      className="relative min-h-screen flex flex-col"
      style={{
        backgroundImage: "url('/tokyo-tour.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* dark overlay behind everything (z-0) */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Header (same look as homepage) */}
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

      {/* Main content area */}
      <section className="relative z-10 flex-grow flex items-start justify-center px-4 py-16">
        <div className="w-full max-w-6xl flex flex-col lg:flex-row items-start lg:items-center gap-8">

          {/* Center column: calendar (always centered horizontally) */}
          <div className="w-full flex justify-center">
            <div className="w-full max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
                Tokyo Private Tour
              </h2>

              {/* Calendly iframe (on top) */}
              <div className="w-full">
                <iframe
                  title="Calendly — Tokyo Private Tour"
                  src="https://calendly.com/notasalaryman/tokyo?hide_event_type_details=1&hide_gdpr_banner=1"
                  className="w-full h-[600px] rounded-xl shadow-xl bg-white"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>

              {/* Small Back button under calendar */}
              <div className="mt-6 flex justify-center">
                <Link
                  href="/"
                  className="px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>

          {/* Right column: About card (absolute on large screens so it doesn't push the calendar) */}
          {/* Large screens: absolute floating card; Mobile: show below calendar (stacked) */}
          <div className="lg:relative w-full lg:w-80">
            {/* floating card for large screens */}
            <div className="hidden lg:block lg:sticky lg:top-[20vh]">
              <div className="bg-white/85 text-gray-900 p-6 rounded-xl shadow-lg w-72">
                <h3 className="text-2xl font-bold mb-3">About the Tour</h3>
                <p className="text-sm leading-relaxed mb-3">
                  ---
                </p>
                <ul className="text-sm list-disc list-inside space-y-2 mb-3">
                  <li>Duration: 8 hours</li>
                  <li>Price: ¥35,000 for 2 people.</li>
                  <li>¥5,000/person after that.</li>
                  <li>For groups over 6 people, contact me at notasalaryman@gmail.com</li>
                </ul>
                <p className="text-xs text-gray-600">Bring comfortable shoes!</p>
              </div>
            </div>

            {/* stacked card for mobile */}
            <div className="lg:hidden mt-6 w-full">
              <div className="bg-white/85 text-gray-900 p-5 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-2">About the Tour</h3>
                <p className="text-sm leading-relaxed">
                  Private, flexible Tokyo tours, tailored to your interests. Duration 8 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer (same as homepage) */}
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
