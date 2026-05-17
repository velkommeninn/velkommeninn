import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { HOTEL_NAME, HOTEL_PHONE, HOTEL_PHONE_HREF, BOOKING_URL, BOOK_DIRECT_MESSAGE } from "@/lib/constants";
import { pageSeo } from "@/data/seo";

export const metadata: Metadata = {
  title: pageSeo.officialBookingNotice.title,
  description: pageSeo.officialBookingNotice.description,
  alternates: { canonical: pageSeo.officialBookingNotice.canonical },
  openGraph: pageSeo.officialBookingNotice.openGraph,
};

export default function OfficialBookingNoticePage() {
  const crumbs = [{ name: "Official Booking Notice", href: "/official-booking-notice" }];

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
              <li className="text-gray-200">Official Booking Notice</li>
            </ol>
          </nav>
          <div className="text-center">
            <p className="text-[#c9a84c] text-sm tracking-[0.3em] uppercase mb-3 font-sans">
              Velkommen Inn · Clifton, Texas
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold font-serif mb-4">
              Official Booking Notice
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto font-sans">
              Important information about booking your stay at {HOTEL_NAME} in Clifton, TX.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 space-y-10">

        {/* Book Direct highlight */}
        <div className="bg-[#c9a84c]/10 border border-[#c9a84c] rounded-lg p-7">
          <h2 className="text-xl font-bold font-serif text-[#1a2e4a] mb-3">
            Book Direct at Velkommen Inn
          </h2>
          <p className="text-sm text-gray-700 font-sans leading-relaxed mb-5">
            {BOOK_DIRECT_MESSAGE}
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded bg-[#1a2e4a] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#142340] transition-colors"
            >
              Book on Our Official Reservation System
            </a>
            <a
              href={HOTEL_PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 rounded border border-[#1a2e4a] px-5 py-2.5 text-sm font-semibold text-[#1a2e4a] hover:bg-[#1a2e4a] hover:text-white transition-colors font-sans"
              aria-label={`Call Velkommen Inn at ${HOTEL_PHONE}`}
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.01l-2.21 2.21z" />
              </svg>
              Call {HOTEL_PHONE}
            </a>
          </div>
        </div>

        {/* Notice body */}
        <div className="space-y-8 text-sm text-gray-700 font-sans leading-relaxed">

          <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
            <h2 className="text-lg font-bold font-serif text-[#1a2e4a] mb-3">
              Notice Regarding Third-Party Booking Websites
            </h2>
            <p>
              Some third-party travel websites, sponsored ads, and online reservation services
              may display our hotel name, photos, address, or room information. These websites
              are not operated by {HOTEL_NAME}.
            </p>
            <p className="mt-3">
              To avoid extra service fees, inaccurate hotel policies, reservation confusion,
              or difficulty making changes, we recommend booking directly through our official
              website or calling the hotel directly at{" "}
              <a href={HOTEL_PHONE_HREF} className="text-[#c9a84c] font-semibold hover:underline">
                {HOTEL_PHONE}
              </a>
              .
            </p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
            <h2 className="text-lg font-bold font-serif text-[#1a2e4a] mb-3">
              Our Official Booking Channels
            </h2>
            <p>The only official ways to book a room at {HOTEL_NAME} in Clifton, TX are:</p>
            <ul className="mt-3 space-y-3">
              <li className="flex items-start gap-3">
                <svg className="h-5 w-5 shrink-0 text-[#c9a84c] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>
                  Through our official online reservation system — accessible via this website
                  (velkommeninncliftontx.com)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="h-5 w-5 shrink-0 text-[#c9a84c] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>
                  By calling us directly at{" "}
                  <a href={HOTEL_PHONE_HREF} className="text-[#c9a84c] font-semibold hover:underline">
                    {HOTEL_PHONE}
                  </a>
                  {" "}— our front desk is available 24 hours a day
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
            <h2 className="text-lg font-bold font-serif text-[#1a2e4a] mb-3">
              Why Book Direct with Velkommen Inn?
            </h2>
            <ul className="space-y-3" aria-label="Reasons to book direct">
              {[
                "Best available direct rate — no third-party service fees added",
                "Accurate, up-to-date hotel policies directly from the hotel",
                "Direct support from our team — not a third-party call center",
                "No confusion about inclusions or room details",
                "Easier to make changes or communicate special requests",
              ].map((reason) => (
                <li key={reason} className="flex items-start gap-3">
                  <svg className="h-5 w-5 shrink-0 text-[#c9a84c] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Internal links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm font-sans">
          <Link href="/faq" className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow text-center">
            <p className="font-bold text-[#1a2e4a] font-serif mb-1">FAQ</p>
            <p className="text-xs text-gray-500">Common questions answered</p>
          </Link>
          <Link href="/policies" className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow text-center">
            <p className="font-bold text-[#1a2e4a] font-serif mb-1">Hotel Policies</p>
            <p className="text-xs text-gray-500">Check-in, payment & more</p>
          </Link>
          <Link href="/contact" className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow text-center">
            <p className="font-bold text-[#1a2e4a] font-serif mb-1">Contact Us</p>
            <p className="text-xs text-gray-500">24-hour front desk</p>
          </Link>
        </div>

        {/* Final CTA */}
        <div className="bg-[#1a2e4a] text-white rounded-lg p-8 text-center">
          <h2 className="text-xl font-bold font-serif mb-3">
            Reserve Directly with Velkommen Inn
          </h2>
          <p className="text-gray-300 text-sm font-sans mb-6">
            Book at the official Velkommen Inn website or call our front desk — available 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded bg-[#c9a84c] px-6 py-2.5 text-sm font-semibold text-[#1a2e4a] hover:bg-[#b8943d] transition-colors"
            >
              Book Direct Now
            </a>
            <a
              href={HOTEL_PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 rounded border border-white/30 px-6 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors font-sans"
              aria-label={`Call Velkommen Inn at ${HOTEL_PHONE}`}
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.01l-2.21 2.21z" />
              </svg>
              {HOTEL_PHONE}
            </a>
          </div>
        </div>

      </div>
    </>
  );
}
