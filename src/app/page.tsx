"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const tours = [
  {
    name: "Tokyo Private Tour",
    description: "Let me take you to Tokyo must-sees so you're sure not to miss anything.",
    price: "From $250 / 8 hours",
    link: "/book-tokyo",
    image: "/tokyo-tour.jpg",
  },
  {
    name: "Kamakura Private Tour",
    description: "Discover temples, shrines, and coastal scenery just an hour away from Tokyo.",
    price: "From $275 / 8 hours",
    link: "/book-kamakura",
    image: "/kamakura-tour.jpg",
  },
  {
    name: "Izakaya Private Experience",
    description: "Join me for an evening stroll through my favorite neighborhoods and enjoy nice food and drinks.",
    price: "From $175 / 3 hours",
    link: "/book-izakaya",
    image: "/izakaya-tour.jpg",
  },
];

export default function Home() {
  return (
    <main
      className="relative min-h-screen flex flex-col justify-between overflow-hidden"
      style={{
        backgroundImage: "url('/default-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Header */}
      <Header />

      {/* Tour Cards */}
      <div className="relative z-10 flex-grow px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {tours.map((tour, i) => (
              <motion.div
                key={tour.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="relative rounded-2xl overflow-hidden shadow-xl group h-64 sm:h-80 md:h-96 lg:h-[28rem]"
              >
                <img
                  src={tour.image}
                  alt={tour.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>
                <div className="relative z-10 h-full flex flex-col justify-end p-4 sm:p-6 text-white">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">{tour.name}</h2>
                  <p className="mb-2 text-sm sm:text-base leading-relaxed">{tour.description}</p>
                  <p className="mb-3 font-semibold text-sm sm:text-base">{tour.price}</p>
                  <Link
                    href={tour.link}
                    className="self-start px-3 py-2 sm:px-4 sm:py-2 bg-white text-black rounded-xl hover:bg-gray-200 transition"
                  >
                    Book Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
