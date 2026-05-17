import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { hotelSchema, localBusinessSchema } from "@/lib/schema";
import {
  BOOKING_URL,
  HOTEL_PHONE,
  HOTEL_PHONE_HREF,
  BOOK_DIRECT_MESSAGE,
  SITE_URL,
  CHECK_IN,
  CHECK_OUT,
  BREAKFAST_HOURS,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Velkommen Inn | Official Website | Hotel in Clifton, TX",
  description:
    "Welcome to Velkommen Inn — the official website for this hotel in Clifton, TX. Norwegian Capital of Texas. Complimentary breakfast, free parking, pet-friendly, book direct hotel Clifton TX.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "Velkommen Inn | Official Website | Hotel in Clifton, TX",
    description:
      "Velkommen Inn Clifton TX — complimentary breakfast, free Wi-Fi, free parking, outdoor pool, dog-friendly rooms. Book direct at the Norwegian Capital of Texas.",
    url: SITE_URL,
  },
};

const quickFacts = [
  { label: "Check-In", value: CHECK_IN },
  { label: "Check-Out", value: CHECK_OUT },
  { label: "Breakfast", value: `Daily ${BREAKFAST_HOURS}` },
  { label: "Parking", value: "Free On-Site" },
  { label: "Wi-Fi", value: "Complimentary" },
  { label: "Front Desk", value: "24 Hours" },
];

const features = [
  {
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "Comfortable Rooms",
    description:
      "Choose from Queen or King rooms, including ADA accessible options. Every room includes a mini fridge, microwave, coffee maker, Smart DirecTV, and free Wi-Fi.",
    href: "/rooms",
    linkLabel: "View room types",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: "On-Site Amenities",
    description:
      "Complimentary breakfast daily, outdoor seasonal pool, fitness center, business center, guest laundry, free parking, and Level 2 EV charging.",
    href: "/amenities",
    linkLabel: "See all amenities",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Prime Location",
    description:
      "Located in Clifton — the Norwegian Capital of Texas — with easy access to Lake Whitney, Meridian State Park, the Bosque Museum, and downtown Clifton.",
    href: "/local-attractions",
    linkLabel: "Explore local attractions",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Dog Friendly Hotel",
    description:
      "Dogs are welcome in designated pet-friendly rooms. Please notify us in advance. Maximum 2 dogs per room. Pet fees apply. ADA service animals at no charge.",
    href: "/pet-policy",
    linkLabel: "View pet policy",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Group Hotel Rooms",
    description:
      "Planning a group trip to Bosque County or Lake Whitney? We can accommodate groups with multiple room configurations. Contact us to discuss your needs.",
    href: "/group-stays",
    linkLabel: "Plan a group stay",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Business Travel",
    description:
      "Free Wi-Fi, on-site business center, free parking, indoor corridor access, and a 24-hour front desk — everything a business traveler in Clifton, TX needs.",
    href: "/business-travel",
    linkLabel: "Business travel info",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd schema={[hotelSchema(), localBusinessSchema()]} />

      {/* Hero */}
      <section className="relative bg-[#1a2e4a] text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          aria-hidden="true"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #c9a84c 0, #c9a84c 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-36 text-center">
          <p className="text-[#c9a84c] text-sm tracking-[0.3em] uppercase mb-4 font-sans">
            Norwegian Capital of Texas · Clifton, TX
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif leading-tight mb-6">
            Velkommen Inn<br />
            <span className="text-[#c9a84c] text-3xl sm:text-4xl md:text-5xl">Official Hotel Website</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-10 leading-relaxed font-sans">
            A professionally managed, independently operated hotel in Clifton, Texas.
            Complimentary breakfast, free parking, free Wi-Fi, and a warm Texas welcome.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded bg-[#c9a84c] px-8 py-3 text-base font-semibold text-[#1a2e4a] hover:bg-[#b8943d] transition-colors"
            >
              Book Direct — Check Availability
            </a>
            <a
              href={HOTEL_PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 rounded border border-white/30 px-8 py-3 text-base font-semibold text-white hover:bg-white/10 transition-colors font-sans"
              aria-label="Call Velkommen Inn at (254) 675-8999"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.01l-2.21 2.21z" />
              </svg>
              {HOTEL_PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* Quick facts bar */}
      <section className="bg-white border-b border-gray-200" aria-label="Hotel at a glance">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-x divide-gray-100">
            {quickFacts.map((fact) => (
              <div key={fact.label} className="py-4 px-4 text-center">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 font-sans mb-0.5">
                  {fact.label}
                </p>
                <p className="text-sm font-bold text-[#1a2e4a] font-sans">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Direct Banner */}
      <section className="bg-[#c9a84c] text-[#1a2e4a]" aria-label="Book direct notice">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-sm font-semibold">{BOOK_DIRECT_MESSAGE}</p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded bg-[#1a2e4a] px-5 py-2 text-sm font-bold text-white hover:bg-[#142340] transition-colors"
          >
            Book Direct →
          </a>
        </div>
      </section>

      {/* Features grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-serif text-[#1a2e4a] mb-3">
            Everything You Need in Clifton, TX
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-sans">
            Velkommen Inn proudly serves travelers visiting Clifton, Bosque County, Lake Whitney,
            Meridian State Park, and the surrounding Central Texas area. Whether you need a hotel
            near the Bosque Museum, a dog friendly hotel in Clifton TX, or a business hotel in
            Clifton TX — we have you covered.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Link
              key={feature.href}
              href={feature.href}
              className="group bg-white rounded-lg p-6 shadow hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="text-[#c9a84c] mb-4 group-hover:scale-110 transition-transform inline-block">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold font-serif text-[#1a2e4a] mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed font-sans">
                {feature.description}
              </p>
              <span className="mt-4 inline-block text-sm font-semibold text-[#c9a84c] group-hover:underline font-sans" aria-label={feature.linkLabel}>
                {feature.linkLabel} →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Location strip */}
      <section className="bg-white border-t border-b border-gray-200" aria-label="Location information">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-bold font-serif text-[#1a2e4a] mb-4">
              Find Velkommen Inn in Clifton, Texas
            </h2>
            <p className="text-gray-600 font-sans leading-relaxed mb-4">
              Clifton is proudly known as the Norwegian Capital of Texas — a charming Central
              Texas town with deep Scandinavian heritage. Velkommen Inn is conveniently located
              here, making it an ideal base for exploring Bosque County, visiting the Bosque Museum
              and Bosque Arts Center, or heading out to Lake Whitney and Meridian State Park.
            </p>
            <address className="not-italic text-sm text-gray-700 mb-2 font-sans">
              <strong>Velkommen Inn</strong><br />
              1215 N Avenue G<br />
              Clifton, TX 76634
            </address>
            <a
              href={HOTEL_PHONE_HREF}
              className="text-[#c9a84c] hover:text-[#b8943d] font-semibold transition-colors font-sans"
              aria-label="Call Velkommen Inn"
            >
              {HOTEL_PHONE}
            </a>
            <div className="mt-6 flex flex-col gap-2">
              <Link
                href="/local-attractions"
                className="inline-flex items-center gap-1 text-sm font-semibold text-[#1a2e4a] hover:text-[#c9a84c] transition-colors font-sans"
              >
                Explore local attractions near Clifton, TX →
              </Link>
              <Link
                href="/policies"
                className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-[#c9a84c] transition-colors font-sans"
              >
                Check-in {CHECK_IN} · Check-out {CHECK_OUT} · 100% non-smoking property
              </Link>
            </div>
          </div>
          <div
            className="bg-gray-100 rounded-lg overflow-hidden h-64 flex items-center justify-center"
            role="img"
            aria-label="Map showing Velkommen Inn location at 1215 N Avenue G, Clifton, TX 76634"
          >
            <div className="text-center px-6">
              <svg className="h-10 w-10 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-sm text-gray-500 font-sans">1215 N Avenue G<br />Clifton, TX 76634</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="bg-[#1a2e4a] text-white" aria-label="Booking call to action">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold font-serif mb-4">
            Book Direct at Velkommen Inn – Clifton, TX
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto mb-8 font-sans">
            {BOOK_DIRECT_MESSAGE}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded bg-[#c9a84c] px-8 py-3 text-base font-semibold text-[#1a2e4a] hover:bg-[#b8943d] transition-colors"
            >
              Check Availability
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded border border-white/30 px-8 py-3 text-base font-semibold text-white hover:bg-white/10 transition-colors font-sans"
            >
              Contact Us
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-400 font-sans">
            Questions? Call our 24-hour front desk at{" "}
            <a href={HOTEL_PHONE_HREF} className="text-[#c9a84c] hover:underline">{HOTEL_PHONE}</a>
          </p>
        </div>
      </section>
    </>
  );
}
