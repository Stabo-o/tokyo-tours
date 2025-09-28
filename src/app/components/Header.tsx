// /components/Header.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-20 w-full px-4 py-5 bg-black/50 backdrop-blur-sm">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-lg md:text-xl font-bold tracking-wide hover:opacity-80 transition">
        not a salaryman Tokyo Tours
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex gap-6 text-white/90 text-sm md:text-base">
          <Link href="/about-me">About Me</Link>
          <Link href="/book-tokyo">Tokyo</Link>
          <Link href="/book-kamakura">Kamakura</Link>
          <Link href="/book-izakaya">Izakaya</Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden text-white text-2xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-3 flex flex-col gap-3 sm:hidden text-white/90 text-base"
        >
          <Link href="/about-me" onClick={() => setMenuOpen(false)}>
            About Me
          </Link>
          <Link href="/book-tokyo" onClick={() => setMenuOpen(false)}>
            Tokyo
          </Link>
          <Link href="/book-kamakura" onClick={() => setMenuOpen(false)}>
            Kamakura
          </Link>
          <Link href="/book-izakaya" onClick={() => setMenuOpen(false)}>
            Izakaya
          </Link>
        </motion.div>
      )}
    </header>
  );
}
