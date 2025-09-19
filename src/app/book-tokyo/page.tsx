"use client";

import { useState } from "react";
import Link from "next/link";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

export default function BookTokyo() {
  const [selectedEvent, setSelectedEvent] = useState("2");

  // Replace with your real Calendly event links
  const calendlyLinks: Record<string, string> = {
    "2": "https://calendly.com/notasalaryman/tokyo?hide_event_type_details=1&hide_gdpr_banner=1",
    "3": "https://calendly.com/notasalaryman/tokyo-3?hide_event_type_details=1&hide_gdpr_banner=1",
    "4": "https://calendly.com/notasalaryman/tokyo-4?hide_event_type_details=1&hide_gdpr_banner=1",
    "5": "https://calendly.com/notasalaryman/tokyo-5?hide_event_type_details=1&hide_gdpr_banner=1",
    "6": "https://calendly.com/notasalaryman/tokyo-6?hide_event_type_details=1&hide_gdpr_banner=1",
  };

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

      {/* Header */}
      <header className="relative z-10 w-full flex items-center justify-between px-6 py-4 bg-black/50 backdrop-blur-sm">
        <h1 className="text-xl md:text-2xl font-bold text-white tracking-wide">
          notasalaryman Tokyo Tours
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
        <div className="w-full max-w-6xl flex flex-col lg:flex-row items-start lg:items-start gap-8">
          {/* Center column: calendar */}
          <div className="w-full flex justify-center">
            <div className="w-full max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
                Tokyo Private Tour
              </h2>

              {/* Group size selector */}
              <div className="mb-6 flex justify-center">
                <select
                  value={selectedEvent}
                  onChange={(e) => setSelectedEvent(e.target.value)}
                  className="bg-black/70 text-white px-5 py-3 rounded-xl shadow-lg border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 transition"
                >
                  <option value="2">2 People — $250 (base price)</option>
                  <option value="3">3 People — $280</option>
                  <option value="4">4 People — $310</option>
                  <option value="5">5 People — $340</option>
                  <option value="6">6 People — $370</option>
                </select>
              </div>

              {/* Calendly iframe */}
              <div className="w-full">
                <iframe
                  title="Calendly — Tokyo Private Tour"
                  src={calendlyLinks[selectedEvent]}
                  className="w-full h-[600px] rounded-xl shadow-xl bg-white"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>

              {/* Back button */}
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

          {/* Right column: About + Includes/Does Not Include */}
          <div className="lg:relative w-full lg:w-96 flex flex-col space-y-6">
            {/* About This Tour */}
            <div className="hidden lg:block lg:top-[15vh]">
              <div className="bg-white/85 text-gray-900 p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-3">About the Tour</h3>
                <p className="text-sm leading-relaxed mb-3">
                  Private tour of Tokyo&apos;s must sees to make sure you
                  don&apos;t miss anything. 
                </p>

                <p className="text-sm leading-relaxed mb-3">
                  I&apos;ll take you around the city while teaching you about life here, 
                  customs, history, how locals live, what to do and not to do, how to navigate...
                </p>
                <p className="text-sm leading-relaxed mb-3">
                  Any question you might have about Tokyo (or Japan in general), the bests restaurants, 
                  neighborhoods, where to go on your other days in town, I&apos;ll give you all
                  the best recommendations !
                </p>
                <ul className="text-sm list-disc list-inside space-y-2 mb-3">
                  <li>Duration: 8 hours</li>
                  <li>Price: $250 for 2 people.</li>
                  <li>$30 per extra person.</li>
                  <li>
                    For groups over 6 people, contact me at
                       notasalaryman@gmail.com
                  </li>
                </ul>
                <p className="text-xs italic text-gray-700">
                  * All prices are in USD
                </p>
              </div>
            </div>

            {/* Includes / Does Not Include */}
            <div className="bg-white/85 text-gray-900 p-6 rounded-xl shadow-lg w-full lg:w-[40rem]">
              <div className="grid grid-cols-2 gap-6">
                {/* Includes */}
                <div>
                  <h4 className="font-semibold text-lg mb-2">Includes</h4>
                  <ul className="text-sm list-disc list-inside space-y-1">
                    <li>Pick up at your hotel in the morning</li>
                    <li>Fully private experience around the city</li>
                    <li>Local recommendations for your trip</li>
                  </ul>
                </div>

                {/* Does Not Include */}
                <div>
                  <h4 className="font-semibold text-lg mb-2">Does Not Include</h4>
                  <ul className="text-sm list-disc list-inside space-y-1">
                    <li>Food &amp; drinks</li>
                    <li>Transportation costs</li>
                    <li>Personal expenses</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Mobile stacked About card */}
            <div className="lg:hidden mt-6 w-full">
              <div className="bg-white/85 text-gray-900 p-5 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-2">About the Tour</h3>
                <p className="text-sm leading-relaxed">
                  Private tours of Tokyo&apos;s must sees to make sure you
                  don&apos;t miss anything. This way you can spend your other
                  days in town discovering lesser known neighborhoods. Duration
                  8 hours.
                </p>
                <p className="text-xs italic text-gray-700 mt-2">
                  * All prices are in USD
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 w-full py-6 flex flex-col items-center text-white text-sm sm:text-base bg-black/50 backdrop-blur-sm">
        <p className="mb-2">
          © {new Date().getFullYear()} notasalaryman Tokyo Tours
        </p>

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
          <a
            href="https://instagram.com/notasalaryman"
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-70"
          >
            <FaInstagram size={22} className="text-white" />
          </a>
          <a
            href="https://tiktok.com/@notasalaryman"
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-70"
          >
            <FaTiktok size={22} className="text-white" />
          </a>
          <a
            href="https://youtube.com/@notasalaryman"
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-70"
          >
            <FaYoutube size={22} className="text-white" />
          </a>
        </div>
      </footer>
    </main>
  );
}
