"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function BookKamakura() {
  const [groupSize, setGroupSize] = useState("2");

  const calendlyLinks: Record<string, string> = {
    "2": "https://calendly.com/notasalaryman/kamakura?hide_event_type_details=1&hide_gdpr_banner=1",
    
  };

  return (
    <main className="relative min-h-screen flex flex-col">
      {/* Background */}
      <div
        className="absolute inset-0 bg-black/40 z-0"
        style={{
          backgroundImage: "url('/kamakura-tour.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Header component */}
      <Header />

      {/* Main Content */}
      <section className="relative z-10 flex-grow pt-20 px-4 py-8 sm:px-6 lg:px-12">
        <div className="mx-auto w-full max-w-6xl flex flex-col gap-6 lg:flex-row lg:gap-10">
          {/* Booking & Calendar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full lg:max-w-2xl flex flex-col gap-6"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white text-center">
              Kamakura Private Tour
            </h2>

            {/* Calendly iframe */}
            <iframe
              key={groupSize}
              title="Calendly — Kamakura Private Tour"
              src={calendlyLinks[groupSize]}
              className="w-full h-[500px] sm:h-[550px] rounded-xl shadow-xl bg-white overflow-auto"
              frameBorder="0"
              allowFullScreen
            />

            {/* Back button */}
            <div className="flex justify-center">
              <Link
                href="/"
                className="w-full sm:w-auto px-6 py-3 bg-white text-black font-semibold rounded-xl shadow-md hover:bg-gray-200 transition text-center"
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
              <h3 className="text-xl sm:text-2xl font-bold mb-3">About the Tour</h3>
              <p className="text-base mb-2">
                Kamakura is my favorite daytrip from Tokyo, all year round.
              </p>
              <p className="text-base mb-2">
                It has everything, from nature to temples, peaceful and quiet streets, and even the sea, it&apos;s the perfect way to escape the city for a day.
              </p>
              <ul className="text-base list-disc list-inside space-y-2">
                <li>Duration: 8 hours</li>
                <li>Price: $275 up to 5 people</li>
                <li>For groups over 5 people, contact <span className="font-semibold">notasalaryman@gmail.com</span></li>
              </ul>
              <p className="text-xs italic text-gray-700">* All prices are in USD</p>
            </div>

            {/* Includes / Excludes */}
            <div className="bg-white/85 text-gray-900 p-6 rounded-xl shadow-lg">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Includes</h4>
                  <ul className="text-base list-disc list-inside space-y-1">
                    <li>Pick up at your hotel</li>
                    <li>Fully private tour around Kamakura</li>
                    <li>Local recommendations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Does Not Include</h4>
                  <ul className="text-base list-disc list-inside space-y-1">
                    <li>Food & drinks</li>
                    <li>Transportation costs</li>
                    <li>Temple & shrine entry fees</li>
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
