"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Cancellation() {
  return (
    <main
      className="relative min-h-screen flex flex-col"
      style={{
        backgroundImage: "url('/cancellation-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <section className="relative z-10 flex-grow px-4 py-12 sm:px-6 lg:px-12">
        <div className="mx-auto w-full max-w-4xl bg-white/90 p-8 rounded-xl shadow-lg text-gray-900">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Cancellation & Refund Policy
          </h2>

          <p className="mb-4">
            I understand that plans can change. Below are my guidelines for cancellations and refunds:
          </p>

          <section className="mb-4">
            <h3 className="font-semibold text-xl mb-2">Cancellation by Guests</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>More than 7 days before the tour: full refund.</li>
              <li>7 days to 48 hours before the tour: 50% refund.</li>
              <li>Less than 48 hours: no refund.</li>
            </ul>
          </section>

          <section className="mb-4">
            <h3 className="font-semibold text-xl mb-2">Cancellation by the Guide</h3>
            <p>
              In the unlikely event that I need to cancel a tour, you will receive a full refund or the option to reschedule at no additional cost.
            </p>
          </section>

          <section className="mb-4">
            <h3 className="font-semibold text-xl mb-2">Refund Process</h3>
            <p>
              Refunds will be processed to the original payment method within 5–7 business days after cancellation confirmation.
            </p>
          </section>

          <section className="mb-4">
            <h3 className="font-semibold text-xl mb-2">Contact</h3>
            <p>
              For cancellations or questions regarding refunds, please contact: <span className="font-semibold">notasalaryman@gmail.com</span>
            </p>
          </section>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
