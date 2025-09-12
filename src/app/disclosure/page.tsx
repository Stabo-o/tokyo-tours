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
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Header */}
      <header className="relative z-10 w-full flex items-center justify-between px-6 py-4 bg-black/50 backdrop-blur-sm">
        <h1 className="text-xl md:text-2xl font-bold text-white tracking-wide">
          notasalaryman Japan Tours
        </h1>

        <nav className="flex gap-6 text-white/90 text-sm md:text-base">
          <Link href="/">Home</Link>
          <Link href="/book-tokyo">Tokyo</Link>
          <Link href="/book-kamakura">Kamakura</Link>
          <Link href="/book-izakaya">Izakaya</Link>
        </nav>
      </header>

      {/* Content */}
      <section className="relative z-10 flex-grow flex items-start justify-center px-4 py-16">
        <div className="w-full max-w-4xl bg-white/85 text-gray-900 p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Commerce Disclosure / 特定商取引法に基づく表記
          </h2>

          <div className="space-y-4 text-sm">
            <p><strong>Seller / 販売者:</strong> Your Name or Company</p>
            <p><strong>Address / 住所:</strong> Your Address in Japan</p>
            <p><strong>Phone / 電話番号:</strong> +81-XX-XXXX-XXXX</p>
            <p><strong>Email / メールアドレス:</strong> info@yourdomain.com</p>
            <p><strong>Product / 商品:</strong> Private Tours in Tokyo and Kamakura</p>
            <p><strong>Price / 価格:</strong> As listed on the booking page</p>
            <p><strong>Payment Method / 支払い方法:</strong> Stripe (Credit Card)</p>
            <p><strong>Delivery / 引渡し時期:</strong> Service is delivered on booked date</p>
            <p><strong>Cancellation / キャンセルについて:</strong> See our <Link href="/cancellation" className="underline">cancellation policy</Link></p>
            <p><strong>Refund / 返金について:</strong> Refunds only as per policy</p>
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
