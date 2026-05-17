import type { Metadata } from "next";
import Link from "next/link";
import { HOTEL_PHONE, HOTEL_PHONE_HREF, CHECK_IN, CHECK_OUT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Policies",
  description:
    "Velkommen Inn hotel policies — check-in and check-out times, non-smoking policy, payment, cash deposit, and pet policy overview.",
};

export default function PoliciesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#1a2e4a] text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#c9a84c] text-sm tracking-[0.3em] uppercase mb-3 font-sans">
            Velkommen Inn · Clifton, Texas
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold font-serif mb-4">Hotel Policies</h1>
          <p className="text-gray-300 max-w-2xl mx-auto font-sans">
            Our policies are designed to ensure a comfortable, safe, and enjoyable stay for
            all guests.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 space-y-12">

        {/* Check-in / Check-out */}
        <section>
          <h2 className="text-2xl font-bold font-serif text-[#1a2e4a] mb-5">
            Check-In & Check-Out
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 font-sans mb-2">Check-In</p>
              <p className="text-2xl font-bold text-[#1a2e4a] font-serif">{CHECK_IN}</p>
              <p className="text-sm text-gray-500 font-sans mt-1">
                Early check-in is subject to availability. Please call ahead.
              </p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 font-sans mb-2">Check-Out</p>
              <p className="text-2xl font-bold text-[#1a2e4a] font-serif">{CHECK_OUT}</p>
              <p className="text-sm text-gray-500 font-sans mt-1">
                Late check-out is subject to availability. Please request at the front desk.
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-600 font-sans">
            Our front desk is available 24 hours a day to assist with check-in and check-out.
          </p>
        </section>

        {/* Smoking */}
        <section>
          <h2 className="text-2xl font-bold font-serif text-[#1a2e4a] mb-5">Smoking Policy</h2>
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm space-y-3">
            <div className="flex items-start gap-3">
              <svg className="h-5 w-5 shrink-0 text-[#c9a84c] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-sm text-gray-700 font-sans">
                <strong>Velkommen Inn is a 100% non-smoking hotel.</strong> Smoking is not permitted
                in any guest rooms, hallways, or interior common areas.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <svg className="h-5 w-5 shrink-0 text-[#c9a84c] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-sm text-gray-700 font-sans">
                Smoking is allowed outside only, at least 50 feet away from the building.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <svg className="h-5 w-5 shrink-0 text-red-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-sm text-gray-700 font-sans">
                Smoking violations — including smoking in guest rooms or within 50 feet of the
                building — may result in additional charges.
              </p>
            </div>
          </div>
        </section>

        {/* Payment */}
        <section>
          <h2 className="text-2xl font-bold font-serif text-[#1a2e4a] mb-5">
            Payment Policy
          </h2>
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm space-y-4">
            <div>
              <p className="text-sm font-semibold text-[#1a2e4a] mb-1">Room Charges</p>
              <p className="text-sm text-gray-700 font-sans leading-relaxed">
                Room charges are collected at check-in unless approved arrangements have been
                made in advance. If you require special billing arrangements, please contact us
                before your arrival.
              </p>
            </div>
            <div className="border-t border-gray-100 pt-4">
              <p className="text-sm font-semibold text-[#1a2e4a] mb-1">Cash Payment</p>
              <p className="text-sm text-gray-700 font-sans leading-relaxed">
                Cash guests may pay at check-in. A <strong>$100 refundable deposit</strong> is
                required for cash-paying guests.
              </p>
            </div>
            <div className="border-t border-gray-100 pt-4">
              <p className="text-sm font-semibold text-[#1a2e4a] mb-1">Deposit Refund</p>
              <p className="text-sm text-gray-700 font-sans leading-relaxed">
                The $100 deposit is refunded at checkout after room inspection, provided there
                are no damages, missing items, smoking violations, or additional charges.
              </p>
            </div>
          </div>
        </section>

        {/* Pet policy summary */}
        <section>
          <h2 className="text-2xl font-bold font-serif text-[#1a2e4a] mb-5">Pet Policy</h2>
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm space-y-3">
            {[
              "Dogs are allowed only in designated pet-friendly rooms.",
              "Guests must notify the hotel in advance if bringing a dog.",
              "Dogs only. Cats and other pets are not permitted.",
              "Maximum 2 dogs per room.",
              "Pet fees apply and are collected at check-in.",
              "Service animals as defined by the ADA are welcome at no additional charge.",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <svg className="h-5 w-5 shrink-0 text-[#c9a84c] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-sm text-gray-700 font-sans">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-3">
            <Link
              href="/pet-policy"
              className="text-sm font-semibold text-[#c9a84c] hover:underline font-sans"
            >
              View full pet policy and fee schedule →
            </Link>
          </div>
        </section>

        {/* Questions */}
        <div className="bg-[#f9f5ef] border border-gray-200 rounded-lg p-6 text-center">
          <p className="text-sm text-gray-700 font-sans mb-3">
            Questions about our policies? Our front desk is available 24 hours a day.
          </p>
          <a
            href={HOTEL_PHONE_HREF}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#c9a84c] hover:text-[#b8943d] transition-colors font-sans"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.01l-2.21 2.21z" />
            </svg>
            {HOTEL_PHONE}
          </a>
        </div>

      </div>
    </>
  );
}
