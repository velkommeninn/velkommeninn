import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, localBusinessSchema } from "@/lib/schema";
import { HOTEL_NAME, HOTEL_PHONE, HOTEL_PHONE_HREF, BOOKING_URL, CHECK_IN, CHECK_OUT, BREAKFAST_HOURS, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact | Velkommen Inn | Hotel in Clifton TX | (254) 675-8999",
  description:
    "Contact Velkommen Inn in Clifton, TX. Front desk available 24 hours a day. Call (254) 675-8999 or book direct online. Serving Clifton, Bosque County, Lake Whitney, and Central Texas.",
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title: "Contact Velkommen Inn | Hotel in Clifton, TX | (254) 675-8999",
    description:
      "Call (254) 675-8999 — front desk available 24 hours. Velkommen Inn at 1215 N Avenue G, Clifton TX 76634. Book direct hotel Clifton TX.",
    url: `${SITE_URL}/contact`,
  },
};

export default function ContactPage() {
  const crumbs = [{ name: "Contact", href: "/contact" }];

  return (
    <>
      <JsonLd schema={[breadcrumbSchema(crumbs), localBusinessSchema()]} />

      {/* Header */}
      <section className="bg-[#1a2e4a] text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-sm text-gray-400 font-sans">
              <li><Link href="/" className="hover:text-[#c9a84c] transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-gray-200">Contact</li>
            </ol>
          </nav>
          <div className="text-center">
            <p className="text-[#c9a84c] text-sm tracking-[0.3em] uppercase mb-3 font-sans">
              Velkommen Inn · Clifton, Texas
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold font-serif mb-4">Contact Us</h1>
            <p className="text-gray-300 max-w-2xl mx-auto font-sans">
              Our front desk is available 24 hours a day. We&apos;re glad to answer questions
              and help you plan your stay at our hotel in Clifton, TX.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Left column */}
          <div className="lg:col-span-3 space-y-10">

            <div>
              <h2 className="text-xl font-bold font-serif text-[#1a2e4a] mb-6">Get in Touch</h2>
              <div className="space-y-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 font-sans mb-1">Hotel</p>
                  <p className="font-semibold text-[#1a2e4a]">{HOTEL_NAME}</p>
                  <p className="text-sm text-gray-500 font-sans mt-0.5">
                    Professionally managed, independently operated
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 font-sans mb-1">Address</p>
                  <address className="not-italic text-gray-700 font-sans text-sm leading-relaxed" itemScope itemType="https://schema.org/PostalAddress">
                    <span itemProp="streetAddress">1215 N Avenue G</span><br />
                    <span itemProp="addressLocality">Clifton</span>,{" "}
                    <span itemProp="addressRegion">TX</span>{" "}
                    <span itemProp="postalCode">76634</span>
                  </address>
                  <p className="text-xs text-gray-400 font-sans mt-1">
                    Norwegian Capital of Texas
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 font-sans mb-1">Phone</p>
                  <a
                    href={HOTEL_PHONE_HREF}
                    className="text-[#c9a84c] font-semibold hover:text-[#b8943d] transition-colors font-sans"
                    aria-label="Call Velkommen Inn front desk"
                    itemProp="telephone"
                  >
                    {HOTEL_PHONE}
                  </a>
                  <p className="text-xs text-gray-400 font-sans mt-0.5">Front desk available 24 hours a day</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 font-sans mb-1">Reservations</p>
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-[#1a2e4a] hover:text-[#c9a84c] transition-colors font-sans"
                  >
                    Book direct online — Velkommen Inn official website →
                  </a>
                </div>
              </div>
            </div>

            {/* Key info */}
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400 font-sans mb-4 border-b border-gray-200 pb-2">
                Helpful Info
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Check-In", value: CHECK_IN },
                  { label: "Check-Out", value: CHECK_OUT },
                  { label: "Breakfast", value: `Daily ${BREAKFAST_HOURS}` },
                  { label: "Front Desk", value: "24 Hours" },
                  { label: "Parking", value: "Free On-Site" },
                  { label: "Smoking", value: "Non-Smoking Property" },
                ].map((item) => (
                  <div key={item.label} className="bg-[#f9f5ef] rounded p-3 border border-gray-100">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 font-sans mb-0.5">{item.label}</p>
                    <p className="text-xs font-bold text-[#1a2e4a] font-sans">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Service area */}
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400 font-sans mb-3 border-b border-gray-200 pb-2">
                Guests We Serve
              </h2>
              <p className="text-sm text-gray-600 font-sans leading-relaxed">
                Velkommen Inn is a hotel in Clifton TX proudly serving travelers visiting Clifton,
                Bosque County, Lake Whitney, Meridian State Park, and the surrounding Central
                Texas area. Whether you need a hotel near the Bosque Museum, a dog friendly hotel
                in Clifton TX, a business hotel in Clifton TX, or group hotel rooms in Clifton TX
                — we&apos;re here to help.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  { label: "Rooms", href: "/rooms" },
                  { label: "Amenities", href: "/amenities" },
                  { label: "Pet Policy", href: "/pet-policy" },
                  { label: "Local Attractions", href: "/local-attractions" },
                  { label: "FAQ", href: "/faq" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-xs font-semibold text-[#1a2e4a] border border-[#1a2e4a]/20 rounded-full px-3 py-1 hover:bg-[#1a2e4a] hover:text-white transition-colors font-sans"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

          </div>

          {/* Right column — booking card */}
          <div className="lg:col-span-2">
            <div className="bg-[#1a2e4a] text-white rounded-lg p-7 sticky top-24">
              <h2 className="text-xl font-bold font-serif mb-3">Ready to Book?</h2>
              <p className="text-gray-300 text-sm font-sans leading-relaxed mb-6">
                Book directly for the best available direct rate, accurate hotel policies, and
                direct support from our team at Velkommen Inn.
              </p>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded bg-[#c9a84c] px-6 py-3 text-sm font-bold text-[#1a2e4a] hover:bg-[#b8943d] transition-colors"
              >
                Check Availability — Book Direct
              </a>
              <a
                href={HOTEL_PHONE_HREF}
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors font-sans"
                aria-label={`Call Velkommen Inn at ${HOTEL_PHONE}`}
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.01l-2.21 2.21z" />
                </svg>
                {HOTEL_PHONE}
              </a>
              <p className="mt-5 text-center text-xs text-gray-500 font-sans">
                Front desk available 24 hours a day
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
