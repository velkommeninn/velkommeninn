import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { BOOKING_URL, HOTEL_PHONE, HOTEL_PHONE_HREF, BREAKFAST_HOURS, CHECK_IN, CHECK_OUT, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Business Travel | Business Hotel in Clifton TX | Velkommen Inn",
  description:
    "Velkommen Inn is a business hotel in Clifton TX with free Wi-Fi, business center, free parking, Level 2 EV charging, and 24-hour front desk. Book direct hotel Clifton TX.",
  alternates: { canonical: `${SITE_URL}/business-travel` },
  openGraph: {
    title: "Business Hotel in Clifton TX | Velkommen Inn",
    description:
      "Reliable Wi-Fi, business center, free parking, indoor corridor access, and 24-hour front desk at Velkommen Inn — the business hotel in Clifton, TX.",
    url: `${SITE_URL}/business-travel`,
  },
};

const bizFeatures = [
  {
    title: "Free High-Speed Wi-Fi",
    detail: "Complimentary Wi-Fi throughout the property — in your room and all common areas — so you stay connected.",
  },
  {
    title: "Business Center",
    detail: "On-site business center available for printing, copying, and other work tasks.",
  },
  {
    title: "Free On-Site Parking",
    detail: "Ample free parking for all guests. No daily parking fees.",
  },
  {
    title: "Level 2 EV Charging",
    detail: "Electric vehicle charging available on-site for an additional fee.",
  },
  {
    title: "24-Hour Front Desk",
    detail: "Our front desk is staffed around the clock, accommodating early arrivals, late departures, and any requests during your stay.",
  },
  {
    title: "Indoor Corridor Access",
    detail: "All rooms accessible via secure, climate-controlled interior hallways — no outdoor walkways to navigate.",
  },
  {
    title: "Complimentary Breakfast",
    detail: `Start your workday with a complimentary breakfast served daily from ${BREAKFAST_HOURS}.`,
  },
  {
    title: "In-Room Work Amenities",
    detail: "Every room includes climate control, flat-screen TV, mini fridge, microwave, and coffee maker.",
  },
];

export default function BusinessTravelPage() {
  const crumbs = [{ name: "Business Travel", href: "/business-travel" }];

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
              <li className="text-gray-200">Business Travel</li>
            </ol>
          </nav>
          <div className="text-center">
            <p className="text-[#c9a84c] text-sm tracking-[0.3em] uppercase mb-3 font-sans">
              Business Hotel · Clifton, Texas
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold font-serif mb-4">Business Travel</h1>
            <p className="text-gray-300 max-w-2xl mx-auto font-sans">
              A comfortable, reliable business hotel in Clifton TX for professionals working in
              Clifton, Bosque County, and the surrounding Central Texas area.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 space-y-14">

        {/* Intro */}
        <p className="text-gray-700 font-sans leading-relaxed text-base">
          Velkommen Inn is a professionally managed, independently operated hotel in Clifton,
          Texas. Whether you&apos;re in the area for a project, a client visit, or an extended
          work stay, we offer the amenities and consistency that business travelers need at a
          book direct hotel Clifton TX.
        </p>

        {/* Features */}
        <div>
          <h2 className="text-2xl font-bold font-serif text-[#1a2e4a] mb-6">
            Built for Business Travelers in Clifton, TX
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {bizFeatures.map((item) => (
              <div key={item.title} className="flex items-start gap-4 bg-white rounded-lg border border-gray-100 p-5 shadow-sm">
                <svg className="h-5 w-5 shrink-0 text-[#c9a84c] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 className="text-sm font-semibold text-[#1a2e4a] mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-600 font-sans leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key info strip */}
        <div>
          <h2 className="text-xl font-bold font-serif text-[#1a2e4a] mb-4">Quick Reference</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Check-In", value: CHECK_IN },
              { label: "Check-Out", value: CHECK_OUT },
              { label: "Front Desk", value: "24 Hours" },
              { label: "Parking", value: "Free" },
            ].map((item) => (
              <div key={item.label} className="bg-[#f9f5ef] rounded-lg p-4 text-center border border-gray-100">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 font-sans mb-1">{item.label}</p>
                <p className="text-sm font-bold text-[#1a2e4a] font-sans">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Payment note */}
        <div className="bg-[#f9f5ef] border border-gray-200 rounded-lg p-6">
          <h2 className="text-lg font-bold font-serif text-[#1a2e4a] mb-3">Payment & Check-In</h2>
          <p className="text-sm text-gray-700 font-sans leading-relaxed">
            Room charges are collected at check-in. If your company or project requires advance
            payment arrangements, please contact us before your arrival so we can make the
            appropriate arrangements. Our front desk is available 24 hours a day.
          </p>
        </div>

        {/* Internal links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm font-sans">
          <Link href="/rooms" className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow text-center">
            <p className="font-bold text-[#1a2e4a] font-serif mb-1">Guest Rooms</p>
            <p className="text-xs text-gray-500">Queen, King & ADA accessible</p>
          </Link>
          <Link href="/amenities" className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow text-center">
            <p className="font-bold text-[#1a2e4a] font-serif mb-1">All Amenities</p>
            <p className="text-xs text-gray-500">Pool, laundry, EV charging & more</p>
          </Link>
          <Link href="/policies" className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow text-center">
            <p className="font-bold text-[#1a2e4a] font-serif mb-1">Hotel Policies</p>
            <p className="text-xs text-gray-500">Check-in, payment & smoking policies</p>
          </Link>
        </div>

        {/* CTA */}
        <div className="bg-[#1a2e4a] text-white rounded-lg p-8 text-center">
          <h2 className="text-xl font-bold font-serif mb-3">Book Your Business Stay in Clifton, TX</h2>
          <p className="text-gray-300 text-sm font-sans mb-6">
            Book direct for the best available direct rate and direct support from the hotel.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded bg-[#c9a84c] px-6 py-2.5 text-sm font-semibold text-[#1a2e4a] hover:bg-[#b8943d] transition-colors"
            >
              Book Direct
            </a>
            <a
              href={HOTEL_PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 rounded border border-white/30 px-6 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors font-sans"
              aria-label={`Call Velkommen Inn at ${HOTEL_PHONE}`}
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.01l-2.21 2.21z" />
              </svg>
              Call {HOTEL_PHONE}
            </a>
          </div>
        </div>

      </div>
    </>
  );
}
