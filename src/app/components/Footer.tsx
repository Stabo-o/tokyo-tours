// /components/Footer.tsx
"use client";

import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-10 w-full py-6 flex flex-col items-center text-white text-sm sm:text-base bg-black/50 backdrop-blur-sm px-4">
      <p className="mb-2">© {new Date().getFullYear()} notasalaryman Tokyo Tours</p>

      <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 mb-3 text-center">
        <Link href="/disclosure" className="hover:underline">
          Commerce Disclosure
        </Link>
        <span className="hidden sm:inline text-white/60">|</span>
        <Link href="/cancellation" className="hover:underline">
          Cancellation & Refund Policy
        </Link>
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
  );
}
