"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function BookIzakaya() {
  const [groupSize, setGroupSize] = useState("2");

  const calendlyLinks: Record<string, string> = {
    "2": "https://calendly.com/notasalaryman/izakaya?month=2025-09&hide_event_type_details=1&hide_gdpr_banner=1",
    "3": "https://calendly.com/notasalaryman/izakaya-3?month=2025-09&hide_event_type_details=1&hide_gdpr_banner=1",
    "4": "https://calendly.com/notasalaryman/izakaya-4?month=2025-09&hide_event_type_details=1&hide_gdpr_banner=1",
  };

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
      <Header />

      {/* Main Content */}
      <section className="relative z-10 flex-grow px-4 py-8 sm:px-6 lg:px-12">
        <div className="mx-auto w-full max-w-6xl flex flex-col lg:flex-row gap-10">
          {/* Calendar & Booking */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full lg:max-w-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
              Izakaya Night Tour
            </h2>

            {/* Group size selector */}
            <div className="mb-6 flex justify-center">
              <select
                value={groupSize}
                onChange={(e) => setGroupSize(e.target.value)}
                className="px-4 py-3 bg-white/90 text-gray-900 rounded-xl shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition text-base font-medium"
              >
                <option value="2">2 People — $175</option>
                <option value="3">3 People — $190</option>
                <option value="4">4 People — $210</option>
              </select>
            </div>

            {/* Calendly iframe */}
            <div className="w-full">
              <iframe
                key={groupSize}
                title="Calendly — Izakaya Night Tour"
                src={calendlyLinks[groupSize]}
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
          </motion.div>

          {/* About & Includes */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 w-full lg:w-[28rem]"
          >
            {/* About */}
            <div className="bg-white/85 text-gray-900 p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-3">About the Tour</h3>
              <p className="text-sm leading-relaxed mb-3">
                Come along on a stroll around my favorite neighborhoods and see how locals spend their evenings.
              </p>
              <p className="text-sm leading-relaxed mb-3">
                We’ll stop by my favorite spots while exploring hidden gems and backstreets.
              </p>
              <ul className="text-sm list-disc list-inside space-y-2 mb-3">
                <li>Duration: 3 hours</li>
                <li>Price: $175 for 2 people</li>
                <li>$15 per additional person</li>
                <li>Up to 4 people</li>
              </ul>
              <p className="text-xs text-gray-600">For guests 20+ (legal drinking age)</p>
              <p className="text-xs italic text-gray-700">* All prices are in USD</p>
            </div>

            {/* Includes / Does Not Include */}
            <div className="bg-white/85 text-gray-900 p-6 rounded-xl shadow-lg">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Includes</h4>
                  <ul className="text-sm list-disc list-inside space-y-1">
                    <li>Pick up at your hotel</li>
                    <li>A private experience you won’t forget</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Does Not Include</h4>
                  <ul className="text-sm list-disc list-inside space-y-1">
                    <li>Food & drinks</li>
                    <li>Transportation costs</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
