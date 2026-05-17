import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { HOTEL_PHONE, HOTEL_PHONE_HREF, CHECK_IN, CHECK_OUT, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Hotel Policies | Velkommen Inn Clifton TX",
  description:
    "Velkommen Inn hotel policies — check-in at 2:00 PM, check-out at 11:00 AM, 100% non-smoking property, payment collected at check-in, $100 refundable cash deposit. Clifton, TX.",
  alternates: { canonical: `${SITE_URL}/policies` },
  openGraph: {
    title: "Hotel Policies | Velkommen Inn – Clifton, TX",
    description:
      "Check-in 2 PM, check-out 11 AM, 100% non-smoking, payment at check-in, $100 refundable cash deposit — full policies for Velkommen Inn in Clifton, TX.",
    url: `${SITE_URL}/policies`,
  },
};

export default function PoliciesPage() {
  const crumbs = [{ name: "Policies", href: "/policies" }];

  return (
    <>
      <JsonLd schema={breadcrumbSchema(crumbs)} />

      {/* Header */}
      <section className="bg-[#1a2e4a] text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-sm text-gray-400 font-sans">
              <li><Link href="/" className="hover:text-[#c9a84c] transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-gray-200">Policies</li>
            </ol>
          </nav>
          <div className="text-center">
            <p className="text-[#c9a84c] text-sm tracking-[0.3em] uppercase mb-3 font-sans">
              Velkommen Inn · Clifton, Texas
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold font-serif mb-4">Hotel Policies</h1>
            <p className="text-gray-300 max-w-2xl mx-auto font-sans">
              Our policies are designed to ensure a comfortable, safe, and enjoyable stay for
              all guests at Velkommen Inn in Clifton, TX.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 space-y-12">

        {/* Check-in / Check-out */}
        <section aria-labelledby="checkin-heading">
          <h2 id="checkin-heading" className="text-2xl font-bold font-serif text-[#1a2e4a] mb-5">
            Check-In &amp; Check-Out
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
        <section aria-labelledby="smoking-heading">
          <h2 id="smoking-heading" className="text-2xl font-bold font-serif text-[#1a2e4a] mb-5">
            Smoking Policy
          </h2>
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm space-y-4">
            <div className="flex items-start gap-3">
              <svg className="h-5 w-5 shrink-0 text-[#c9a84c] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-sm text-gray-700 font-sans">
                <strong>Velkommen Inn is a 100% non-smoking hotel.</strong> Smoking is not
                permitted in any guest rooms, hallways, or interior common areas.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <svg className="h-5 w-5 shrink-0 text-[#c9a84c] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-sm text-gray-700 font-sans">
                Smoking is allowed outside only, at least 50 feet away from the building.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <svg className="h-5 w-5 shrink-0 text-red-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-sm text-gray-700 font-sans">
                Smoking violations — including smoking in rooms or within 50 feet of the
                building — may result in additional charges.
              </p>
            </div>
          </div>
        </section>

        {/* Payment */}
        <section aria-labelledby="payment-heading">
          <h2 id="payment-heading" className="text-2xl font-bold font-serif text-[#1a2e4a] mb-5">
            Payment Policy
          </h2>
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm space-y-5">
            <div>
              <h3 className="text-sm font-semibold text-[#1a2e4a] mb-2">Room Charges</h3>
              <p className="text-sm text-gray-700 font-sans leading-relaxed">
                Room charges are collected at check-in unless approved arrangements have been
                made in advance. If you require special billing arrangements, please contact us
                before your arrival.
              </p>
            </div>
            <div className="border-t border-gray-100 pt-4">
              <h3 className="text-sm font-semibold text-[#1a2e4a] mb-2">Cash Payment</h3>
              <p className="text-sm text-gray-700 font-sans leading-relaxed">
                Cash guests may pay at check-in. A <strong>$100 refundable deposit</strong> is
                required for cash-paying guests.
              </p>
            </div>
            <div className="border-t border-gray-100 pt-4">
              <h3 className="text-sm font-semibold text-[#1a2e4a] mb-2">Deposit Refund</h3>
              <p className="text-sm text-gray-700 font-sans leading-relaxed">
                The $100 deposit is refunded at checkout after room inspection, provided there
                are no damages, missing items, smoking violations, or additional charges.
              </p>
            </div>
          </div>
        </section>

        {/* Pet policy summary */}
        <section aria-labelledby="pet-heading">
          <h2 id="pet-heading" className="text-2xl font-bold font-serif text-[#1a2e4a] mb-5">
            Pet Policy Summary
          </h2>
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
                <svg className="h-5 w-5 shrink-0 text-[#c9a84c] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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

        {/* Internal links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm font-sans">
          <Link href="/faq" className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow text-center">
            <p className="font-bold text-[#1a2e4a] font-serif mb-1">FAQ</p>
            <p className="text-xs text-gray-500">Common questions answered</p>
          </Link>
          <Link href="/pet-policy" className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow text-center">
            <p className="font-bold text-[#1a2e4a] font-serif mb-1">Pet Policy</p>
            <p className="text-xs text-gray-500">Dog friendly hotel Clifton TX</p>
          </Link>
          <Link href="/contact" className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow text-center">
            <p className="font-bold text-[#1a2e4a] font-serif mb-1">Contact Us</p>
            <p className="text-xs text-gray-500">Front desk available 24 hours</p>
          </Link>
        </div>

        {/* Questions */}
        <div className="bg-[#1a2e4a] text-white rounded-lg p-8 text-center">
          <h2 className="text-xl font-bold font-serif mb-3">Questions About Our Policies?</h2>
          <p className="text-gray-300 text-sm font-sans mb-6">
            Our front desk is available 24 hours a day to answer any questions about your stay.
          </p>
          <a
            href={HOTEL_PHONE_HREF}
            className="inline-flex items-center gap-2 rounded bg-[#c9a84c] px-6 py-2.5 text-sm font-semibold text-[#1a2e4a] hover:bg-[#b8943d] transition-colors font-sans"
            aria-label={`Call Velkommen Inn at ${HOTEL_PHONE}`}
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.01l-2.21 2.21z" />
            </svg>
            Call {HOTEL_PHONE}
          </a>
        </div>

      </div>
    </>
  );
}
