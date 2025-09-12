"use client";

import Link from "next/link";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

// Tour data
const tours = [
  {
    name: "Tokyo Private Tour",
    description: "Let me take you to Tokyo must-sees so you're sure not to miss anything.",
    price: "From ¥35,000 / 8 hours",
    link: "/book-tokyo",
    image: "/tokyo-tour.jpg",
  },
  {
    name: "Kamakura Private Tour",
    description: "Discover temples, shrines, and coastal scenery just an hour away from Tokyo.",
    price: "From ¥40,000 / 8 hours",
    link: "/book-kamakura",
    image: "/kamakura-tour.jpg",
  },
  {
    name: "Izakaya Private Experience",
    description: "Join me for an evening stroll through my favorite neighborhoods and enjoy nice food and drinks.",
    price: "From ¥18,000 / 3 hours",
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
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Header */}
      <header className="relative z-10 w-full flex items-center justify-between px-6 py-4 bg-black/50 backdrop-blur-sm">
        <h1 className="text-xl md:text-2xl font-bold text-white tracking-wide">
          notasalaryman Tokyo Tours
        </h1>
        <nav className="flex gap-6 text-white/90 text-sm md:text-base">
          <Link href="/" className="hover:text-white">Home</Link>
          <Link href="/book-tokyo" className="hover:text-white">Tokyo</Link>
          <Link href="/book-kamakura" className="hover:text-white">Kamakura</Link>
          <Link href="/book-izakaya" className="hover:text-white">Izakaya</Link>
        </nav>
      </header>

      {/* Tour Cards */}
      <div className="relative z-10 flex-grow flex items-center px-6 py-8">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid gap-8 md:grid-cols-3">
            {tours.map((tour) => (
              <div
                key={tour.name}
                className="relative rounded-2xl overflow-hidden shadow-xl group h-72 sm:h-80 md:h-96 lg:h-[28rem]"
              >
                <img
                  src={tour.image}
                  alt={tour.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>
                <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
                  <h2 className="text-2xl font-bold mb-2">{tour.name}</h2>
                  <p className="mb-3 text-sm">{tour.description}</p>
                  <p className="mb-4 font-semibold">{tour.price}</p>
                  <a
                    href={tour.link}
                    className="self-start px-4 py-2 bg-white text-black rounded-xl hover:bg-gray-200 transition"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 w-full py-6 flex flex-col items-center text-white text-sm sm:text-base bg-black/50 backdrop-blur-sm">
        <p className="mb-2">© {new Date().getFullYear()} notasalaryman Tokyo Tours</p>
        <div className="flex gap-4 mb-3">
          <a href="/disclosure" className="hover:underline">Commerce Disclosure</a>
          <span className="text-white/60">|</span>
          <a href="/cancellation" className="hover:underline">Cancellation & Refund Policy</a>
        </div>
        <div className="flex gap-6 mt-2">
          <a href="https://instagram.com/notasalaryman" target="_blank" className="hover:opacity-70 transition">
            <FaInstagram size={22} className="text-white" />
          </a>
          <a href="https://tiktok.com/@notasalaryman" target="_blank" className="hover:opacity-70 transition">
            <FaTiktok size={22} className="text-white" />
          </a>
          <a href="https://youtube.com/@notasalaryman" target="_blank" className="hover:opacity-70 transition">
            <FaYoutube size={22} className="text-white" />
          </a>
        </div>
      </footer>
    </main>
  );
}
