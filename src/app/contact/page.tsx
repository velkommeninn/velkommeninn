import type { Metadata } from "next";
import { HOTEL_NAME, HOTEL_ADDRESS, HOTEL_PHONE, HOTEL_PHONE_HREF, BOOKING_URL } from "@/lib/constants";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold font-serif text-[#1a2e4a] mb-3">Contact Us</h1>
      <p className="text-gray-600 font-sans mb-12">
        We&apos;re happy to answer questions and help plan your stay.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-xl font-bold font-serif text-[#1a2e4a] mb-6">Get in Touch</h2>
          <div className="space-y-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 font-sans mb-1">Hotel</p>
              <p className="font-semibold text-[#1a2e4a]">{HOTEL_NAME}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 font-sans mb-1">Address</p>
              <address className="not-italic text-gray-700 font-sans">{HOTEL_ADDRESS}</address>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 font-sans mb-1">Phone</p>
              <a href={HOTEL_PHONE_HREF} className="text-[#c9a84c] font-semibold hover:text-[#b8943d] transition-colors font-sans">
                {HOTEL_PHONE}
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 font-sans mb-1">Reservations</p>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-semibold text-[#1a2e4a] hover:text-[#c9a84c] transition-colors font-sans"
              >
                Book direct online →
              </a>
            </div>
          </div>
        </div>

        <div className="bg-[#1a2e4a] text-white rounded-lg p-8">
          <h2 className="text-xl font-bold font-serif mb-4">Ready to Book?</h2>
          <p className="text-gray-300 text-sm font-sans leading-relaxed mb-6">
            Book directly with us for the best available direct rate and direct hotel support.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded bg-[#c9a84c] px-6 py-3 text-sm font-bold text-[#1a2e4a] hover:bg-[#b8943d] transition-colors"
          >
            Check Availability
          </a>
          <a
            href={HOTEL_PHONE_HREF}
            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors font-sans"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.01l-2.21 2.21z" />
            </svg>
            {HOTEL_PHONE}
          </a>
        </div>
      </div>
    </div>
  );
}
