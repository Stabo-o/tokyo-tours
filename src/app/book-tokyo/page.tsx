"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function BookTokyo() {
  const [groupSize, setGroupSize] = useState("2");

  const calendlyLinks: Record<string, string> = {
    "2": "https://calendly.com/notasalaryman/tokyo?hide_event_type_details=1&hide_gdpr_banner=1",
  
  };

  return (
    <main className="relative min-h-screen flex flex-col">
      {/* Background */}
      <div
        className="absolute inset-0 bg-black/40 z-0"
        style={{
          backgroundImage: "url('/tokyo-tour.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Header component */}
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
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
              Tokyo Private Tour
            </h2>
            

            {/* Calendly iframe */}
            <iframe
              key={groupSize}
              title="Calendly — Tokyo Private Tour"
              src={calendlyLinks[groupSize]}
              className="w-full h-[550px] rounded-xl shadow-xl bg-white"
              frameBorder="0"
              allowFullScreen
            />

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
                Private tour of Tokyo&apos;s must-sees to make sure you don&apos;t miss anything.
              </p>
              <p className="text-sm leading-relaxed mb-3">
                I&apos;ll take you around the city while teaching you about life here: customs, history, how locals live, what to do and not to do, how to navigate...
              </p>
              <p className="text-sm leading-relaxed mb-3">
                Any question you might have about Tokyo (or Japan in general), restaurants, neighborhoods, or where to go on your other days in town. 
                I&apos;ll give you all the best recommendations!
              </p>
              <ul className="text-sm list-disc list-inside space-y-2 mb-3">
                <li>Duration: 8 hours</li>
                <li>Price: $250 up to 5 people</li>
                <li>
                  For groups over 5 people, contact <span className="font-semibold">notasalaryman@gmail.com</span>
                </li>
              </ul>
              <p className="text-xs italic text-gray-700">* All prices are in USD</p>
            </div>

            {/* Includes / Excludes */}
            <div className="bg-white/85 text-gray-900 p-6 rounded-xl shadow-lg">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Includes</h4>
                  <ul className="text-sm list-disc list-inside space-y-1">
                    <li>Pick up at your hotel in the morning</li>
                    <li>Fully private experience around the city</li>
                    <li>Local recommendations for your trip</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Does Not Include</h4>
                  <ul className="text-sm list-disc list-inside space-y-1">
                    <li>Food & drinks</li>
                    <li>Transportation costs</li>
                    <li>Personal expenses</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer component */}
      <Footer />
    </main>
  );
}
