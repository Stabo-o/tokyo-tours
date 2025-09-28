"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutMe() {
  return (
    <main
      className="relative min-h-screen flex flex-col"
      style={{
        backgroundImage: "url('/about-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <section className="relative z-10 flex-grow px-4 py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto w-full max-w-4xl bg-white/85 p-8 rounded-xl shadow-lg text-gray-900 flex flex-col gap-8"
        >
          {/* Hero / Intro */}
          <div className="flex flex-col items-center text-center gap-4">
            <img
              src="/profile-pic.jpg"
              alt="Louis - Your Guide"
              className="w-36 h-36 rounded-full object-cover shadow-md"
            />
            <h1 className="text-3xl md:text-4xl font-bold">Hi,</h1>
            <p className="text-sm md:text-base text-gray-700 max-w-2xl">
              I guide travelers through Tokyo and it&apos;s surroundings. My goal is to help
              you experience Japan the way locals spend their days off.
            </p>
          </div>

          {/* Story / Background */}
          <div>
            <h2 className="text-2xl font-bold mb-3">My Story</h2>
            <p className="text-sm md:text-base leading-relaxed mb-2">
              Before settling down in Tokyo, I spent most of my (short) life travelling the world.
              North, Central and South America, Australia and most of Asia. And after all that I realized that
              Japan is where I felt I would fit the best.
            </p>
            <p className="text-sm md:text-base leading-relaxed mb-2">
              I&apos;ve been living in Tokyo on and off since 2019 and fell in love with its culture, food, neighborhoods
              and peacefulness (and my wife). I started guiding tours because I wanted to share my knowledge and
              passion with travelers, helping them experience the country beyond the usual tourist
              spots.
            </p>
        
          </div>

          {/* Philosophy / Approach */}
          <div>
            <h2 className="text-2xl font-bold mb-3">My Approach</h2>
            <p className="text-sm md:text-base leading-relaxed mb-2">
              My tours are fully private, small-group experiences designed for you and your needs.
            </p>
            <p className="text-sm md:text-base leading-relaxed">
              Whether it&apos;s your first visit or your fifth, I tailor every tour to your interests and
              pace, sharing insights about culture, history, and everyday life.
              
            </p>
          </div>

          {/* Credentials / Expertise */}
          <div>
            <h2 className="text-2xl font-bold mb-3">Credentials & Expertise</h2>
            <ul className="text-sm md:text-base list-disc list-inside space-y-1">
              <li>Years of living in Tokyo</li>
              <li>Professional private tour guide</li>
              <li>Multilingual</li>
              <li>Deep knowledge of local neighborhoods, culture, and cuisine</li>
            </ul>
          </div>

          {/* Call to Action */}
          <div className="flex justify-center mt-4">
            <a
              href="/book-tokyo"
              className="px-6 py-3 bg-black text-white font-semibold rounded-xl shadow-md hover:bg-gray-800 transition"
            >
              Book a Tour
            </a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
