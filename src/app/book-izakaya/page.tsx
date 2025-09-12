"use client";

import Link from "next/link";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

export default function BookIzakaya() {
  return (
    <main
      className="relative min-h-screen flex flex-col"
      style={{
        backgroundImage: "url('/izakaya-tour.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
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

      {/* Main */}
      <section className="relative z-10 flex-grow flex items-start justify-center px-4 py-16">
        <div className="w-full max-w-6xl flex flex-col lg:flex-row items-start lg:items-center gap-8">

          {/* Calendar */}
          <div className="w-full flex justify-center">
            <div className="w-full max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
                Izakaya Night Tour
              </h2>

              <div className="w-full">
                <iframe
                  title="Calendly — Izakaya Night Tour"
                  src="https://calendly.com/notasalaryman/izakaya?hide_event_type_details=1&hide_gdpr_banner=1"
                  className="w-full h-[600px] rounded-xl shadow-xl bg-white"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>

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
                  Let me take you to my favorite neighborhoods where we&apos;ll find small Izakaya&apos;s to stop at 
                  for some drinks and food.
                </p>
               <ul className="text-sm list-disc list-inside space-y-2 mb-3">
                  <li>Duration: 3 hours</li>
                  <li>Price: ¥20,000 for 2 people</li>
                  <li>¥5000/person after that</li>
                  <li>Up to 4 people</li>
                </ul>
                <p className="text-xs text-gray-600">For guests 20+ (legal drinking age)</p>
              </div>
            </div>

            {/* Includes / Does Not Include */}
            <div className="bg-white/85 text-gray-900 p-6 rounded-xl shadow-lg w-full lg:w-[40rem]">
              <div className="grid grid-cols-2 gap-6">
                {/* Includes */}
                <div>
                  <h4 className="font-semibold text-lg mb-2">Includes</h4>
                  <ul className="text-sm list-disc list-inside space-y-1">
                    <li>Pick up at your hotel</li>
                    <li>A private experience you won&apos;t forget</li>
                  </ul>
                </div>

                {/* Does Not Include */}
                <div>
                  <h4 className="font-semibold text-lg mb-2">Does Not Include</h4>
                  <ul className="text-sm list-disc list-inside space-y-1">
                    <li>Food &amp; drinks</li>
                    <li>Transportation costs</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Mobile stacked */}
            <div className="lg:hidden mt-6 w-full">
              <div className="bg-white/85 text-gray-900 p-5 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-2">About the Tour</h3>
                <p className="text-sm leading-relaxed">
                  Discover Tokyo&apos;s backstreets and izakayas. Duration 3 hours.
                </p>
              </div>
            </div>
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
