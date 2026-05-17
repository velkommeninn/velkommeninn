import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import ContactForm from "@/components/ContactForm";
import CTASection from "@/components/CTASection";
import { breadcrumbSchema } from "@/lib/schema";
import { HOTEL_NAME, HOTEL_PHONE, HOTEL_PHONE_HREF, HOTEL_EMAIL, BOOKING_URL, CHECK_IN, CHECK_OUT } from "@/lib/constants";
import { pageSeo } from "@/data/seo";

export const metadata: Metadata = {
  title: pageSeo.contact.title,
  description: pageSeo.contact.description,
  alternates: { canonical: pageSeo.contact.canonical },
  openGraph: pageSeo.contact.openGraph,
};

export default function ContactPage() {
  const crumbs = [{ name: "Contact Us", href: "/contact" }];

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
              <li className="text-gray-200">Contact Us</li>
            </ol>
          </nav>
          <div className="text-center">
            <p className="text-[#c9a84c] text-sm tracking-[0.3em] uppercase mb-3 font-sans">
              Velkommen Inn · Clifton, Texas
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold font-serif mb-4">Contact Us</h1>
            <p className="text-gray-300 max-w-2xl mx-auto font-sans">
              Our front desk is available 24 hours a day. Call us directly for the fastest
              response, or send us a message using the form below.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Left: Form */}
          <div className="lg:col-span-2 space-y-10">

            {/* Quick contact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={HOTEL_PHONE_HREF}
                className="flex items-center gap-4 bg-[#1a2e4a] text-white rounded-lg p-5 hover:bg-[#142340] transition-colors"
                aria-label={`Call ${HOTEL_NAME} at ${HOTEL_PHONE}`}
              >
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#c9a84c]/20">
                  <svg className="h-5 w-5 text-[#c9a84c]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.01l-2.21 2.21z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 font-sans mb-0.5">Phone</p>
                  <p className="text-base font-bold font-sans">{HOTEL_PHONE}</p>
                  <p className="text-xs text-gray-400 font-sans">Front desk — 24 hours</p>
                </div>
              </a>

              <a
                href={`mailto:${HOTEL_EMAIL}`}
                className="flex items-center gap-4 bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#c9a84c]/10">
                  <svg className="h-5 w-5 text-[#c9a84c]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 font-sans mb-0.5">Email</p>
                  <p className="text-sm font-bold text-[#1a2e4a] font-sans break-all">{HOTEL_EMAIL}</p>
                </div>
              </a>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold font-serif text-[#1a2e4a] mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>

          </div>

          {/* Right: Info sidebar */}
          <div className="space-y-6">

            {/* Hotel details */}
            <div className="bg-[#f9f5ef] border border-gray-200 rounded-lg p-6 space-y-5">
              <h2 className="text-lg font-bold font-serif text-[#1a2e4a]">Hotel Information</h2>

              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 font-sans mb-1">Address</p>
                <p className="text-sm text-gray-700 font-sans">1215 N Avenue G</p>
                <p className="text-sm text-gray-700 font-sans">Clifton, TX 76634</p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 font-sans mb-1">Check-In / Check-Out</p>
                <p className="text-sm text-gray-700 font-sans">Check-in: {CHECK_IN}</p>
                <p className="text-sm text-gray-700 font-sans">Check-out: {CHECK_OUT}</p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 font-sans mb-1">Front Desk</p>
                <p className="text-sm text-gray-700 font-sans">Available 24 hours a day</p>
              </div>
            </div>

            {/* When to contact */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h2 className="text-base font-bold font-serif text-[#1a2e4a] mb-4">When to Contact Us</h2>
              <ul className="space-y-3 text-sm text-gray-700 font-sans">
                {[
                  "Reservations and availability questions",
                  "Group bookings and room blocks",
                  "Early check-in or late check-out requests",
                  "Pet stay arrangements",
                  "Special billing or payment arrangements",
                  "Directions or parking information",
                  "ADA room requests",
                  "Extended stay inquiries",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#c9a84c] shrink-0 mt-1.5" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Book direct card */}
            <div className="bg-[#1a2e4a] text-white rounded-lg p-6 text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 font-sans mb-2">Best Available Rate</p>
              <p className="text-sm text-gray-300 font-sans mb-4 leading-relaxed">
                Book directly for the best available direct rate, accurate hotel policies, and
                direct support from the hotel.
              </p>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full rounded bg-[#c9a84c] px-4 py-2.5 text-sm font-semibold text-[#1a2e4a] hover:bg-[#b8943d] transition-colors font-sans text-center"
              >
                Book Direct →
              </a>
            </div>

          </div>
        </div>

        {/* Map placeholder */}
        <div className="mt-14">
          <h2 className="text-xl font-bold font-serif text-[#1a2e4a] mb-4">Find Us in Clifton, Texas</h2>
          <div className="bg-[#f9f5ef] border border-gray-200 rounded-lg overflow-hidden">
            <div className="aspect-video flex flex-col items-center justify-center gap-4 p-8 text-center">
              <svg className="h-10 w-10 text-[#c9a84c]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <p className="text-base font-bold text-[#1a2e4a] font-serif mb-1">Velkommen Inn</p>
                <p className="text-sm text-gray-600 font-sans">1215 N Avenue G, Clifton, TX 76634</p>
              </div>
              <a
                href="https://maps.google.com/?q=Velkommen+Inn+1215+N+Avenue+G+Clifton+TX+76634"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded border border-[#1a2e4a] px-4 py-2 text-sm font-semibold text-[#1a2e4a] hover:bg-[#1a2e4a] hover:text-white transition-colors font-sans"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>

        {/* Internal links */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm font-sans">
          <Link href="/faq" className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow text-center">
            <p className="font-bold text-[#1a2e4a] font-serif mb-1">FAQ</p>
            <p className="text-xs text-gray-500">Common questions answered</p>
          </Link>
          <Link href="/group-stays" className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow text-center">
            <p className="font-bold text-[#1a2e4a] font-serif mb-1">Group Stays</p>
            <p className="text-xs text-gray-500">Group hotel rooms in Clifton TX</p>
          </Link>
          <Link href="/policies" className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow text-center">
            <p className="font-bold text-[#1a2e4a] font-serif mb-1">Hotel Policies</p>
            <p className="text-xs text-gray-500">Check-in, payment & pet policies</p>
          </Link>
        </div>

        <div className="mt-10">
          <CTASection
            heading="Ready to Book Your Stay?"
            subtext="Book directly for the best available direct rate, accurate hotel policies, and direct support from the hotel."
            bookLabel="Book Direct"
            phoneLabel={`Call ${HOTEL_PHONE}`}
          />
        </div>
      </div>
    </>
  );
}
