"use client";

import Link from "next/link";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

export default function Disclosure() {
  return (
    <main
      className="relative min-h-screen flex flex-col"
      style={{
        backgroundImage: "url('/disclosure.jpg')",
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

      {/* Content */}
      <section className="relative z-10 flex-grow flex justify-center px-4 py-16">
        <div className="w-full max-w-4xl bg-white/90 p-8 rounded-xl shadow-lg text-gray-900">
          <h2 className="text-3xl font-bold mb-6 text-center">Commerce Disclosure - 特定商取引法に基づく表記</h2>

          <section className="mb-4">
            <h3 className="font-semibold text-xl mb-2">Business Name / 事業者名</h3>
            <p>notasalaryman Tokyo Tours</p>
            <p>Operations Director - 代表者 : Louis Michel Jean Bourgogne usage Bourgogne Biancardini</p>
          </section>

          <section className="mb-4">
            <h3 className="font-semibold text-xl mb-2">Address / 所在地</h3>
            <p>We will disclose without delay if necessary.</p>
          </section>

          <section className="mb-4">
            <h3 className="font-semibold text-xl mb-2">Email / メールアドレス</h3>
            <p>notasalaryman@gmail.com</p>
          </section>

          <section className="mb-4">
            <h3 className="font-semibold text-xl mb-2">Phone Number / 電話番号</h3>
            <p>We will disclose without delay if necessary.</p>
          </section>

          <section className="mb-4">
            <h3 className="font-semibold text-xl mb-2">Payment Methods - Payment Period / 代金の支払方法・支払時期</h3>
            <p>Credit card payments via Stripe.</p>
            <p>Credit card payments are processed immediately upon booking.</p>
          </section>

          <section className="mb-4">
            <h3 className="font-semibold text-xl mb-2">Payment Period / 支払時期</h3>
            <p>Credit card payments are processed immediately upon booking.</p>
          </section>

          <section className="mb-4">
            <h3 className="font-semibold text-xl mb-2">Services / 提供するサービスの内容</h3>
            <p>Private tours in Tokyo, Kamakura, and Izakaya experiences in Tokyo neighborhoods.</p>
          </section>

        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 w-full py-6 flex flex-col items-center text-white text-sm sm:text-base bg-black/50 backdrop-blur-sm">
        <p className="mb-2">© {new Date().getFullYear()} notasalaryman Tokyo Tours</p>

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
