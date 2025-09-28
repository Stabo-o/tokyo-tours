"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
      <Header />

      {/* Main Content */}
      <section className="relative z-10 flex-grow flex justify-center px-4 py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full max-w-4xl bg-white/85 p-8 rounded-xl shadow-lg text-gray-900"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">
            Commerce Disclosure - 特定商取引法に基づく表記
          </h2>

          <section className="mb-4">
            <h3 className="font-semibold text-xl mb-2">Business Name / 事業者名</h3>
            <p>notasalaryman Tokyo Tours</p>
            <p>Operations Director - 代表者 : LMJ.BUBB</p>
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
            <h3 className="font-semibold text-xl mb-2">
              Payment Methods / 代金の支払方法・支払時期
            </h3>
            <p>Credit card payments via Stripe.</p>
            <p>Credit card payments are processed immediately upon booking.</p>
          </section>

          <section className="mb-4">
            <h3 className="font-semibold text-xl mb-2">Services / 提供するサービスの内容</h3>
            <p>Private tours in Tokyo, Kamakura, and Izakaya experiences in Tokyo neighborhoods.</p>
          </section>

          <section className="mt-4 text-sm text-gray-700">
            <p>
              * For cancellation and refund policies, please refer to our <strong>Cancellation & Refund Policy</strong> page.
            </p>
          </section>
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
