import type { Metadata } from "next";
import { HOTEL_NAME, HOTEL_PHONE, HOTEL_PHONE_HREF, BOOKING_URL, BOOK_DIRECT_MESSAGE } from "@/lib/constants";

export const metadata: Metadata = { title: "Official Booking Notice" };

export default function OfficialBookingNoticePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="bg-[#1a2e4a] text-white rounded-lg p-8 mb-10 text-center">
        <h1 className="text-3xl font-bold font-serif mb-3">Official Booking Notice</h1>
        <p className="text-gray-300 font-sans">
          {HOTEL_NAME} — Clifton, Texas
        </p>
      </div>

      <div className="prose prose-neutral max-w-none font-sans text-gray-700 space-y-6">
        <div className="bg-[#c9a84c]/10 border border-[#c9a84c] rounded-lg p-6">
          <h2 className="text-xl font-bold font-serif text-[#1a2e4a] mb-3">Book Direct</h2>
          <p className="leading-relaxed">{BOOK_DIRECT_MESSAGE}</p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded bg-[#1a2e4a] px-5 py-2 text-sm font-semibold text-white hover:bg-[#142340] transition-colors"
          >
            Book on Our Official Reservation System
          </a>
        </div>

        <div>
          <h2 className="text-xl font-bold font-serif text-[#1a2e4a] mb-3">Our Only Official Booking Channel</h2>
          <p className="leading-relaxed">
            The only official way to book a room at {HOTEL_NAME} is through this website or by calling
            us directly at{" "}
            <a href={HOTEL_PHONE_HREF} className="text-[#c9a84c] hover:underline font-semibold">
              {HOTEL_PHONE}
            </a>
            . Bookings made through third-party websites may be subject to different rates,
            cancellation terms, and policies that are set by those third parties, not by the hotel.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold font-serif text-[#1a2e4a] mb-3">Third-Party Booking Sites</h2>
          <p className="leading-relaxed">
            Many third-party travel websites and online travel agencies (OTAs) list hotels across the
            internet. While {HOTEL_NAME} may appear on some of these platforms, we cannot guarantee
            the accuracy of information, pricing, or availability shown on any third-party site.
            Policies displayed on third-party sites may differ from our current hotel policies.
          </p>
          <p className="leading-relaxed mt-3">
            For accurate information about our policies, amenities, and availability — book directly
            with us or call our front desk.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold font-serif text-[#1a2e4a] mb-3">Questions?</h2>
          <p className="leading-relaxed">
            If you have any questions about your reservation or our booking process, please contact
            us directly at{" "}
            <a href={HOTEL_PHONE_HREF} className="text-[#c9a84c] hover:underline font-semibold">
              {HOTEL_PHONE}
            </a>
            . We&apos;re here to help.
          </p>
        </div>
      </div>
    </div>
  );
}
