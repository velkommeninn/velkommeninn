import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { BOOKING_URL, HOTEL_PHONE, HOTEL_PHONE_HREF, BREAKFAST_HOURS, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Group Stays | Group Hotel Rooms in Clifton TX | Velkommen Inn",
  description:
    "Planning a group trip to Clifton, Lake Whitney, or Bosque County? Velkommen Inn offers group hotel rooms in Clifton TX. Call (254) 675-8999 to discuss room blocks.",
  alternates: { canonical: `${SITE_URL}/group-stays` },
  openGraph: {
    title: "Group Hotel Rooms in Clifton TX | Velkommen Inn",
    description:
      "Velkommen Inn accommodates groups visiting Clifton TX, Lake Whitney, Meridian State Park, and Bosque County. Multiple room types, free breakfast, free parking. Call us to plan.",
    url: `${SITE_URL}/group-stays`,
  },
};

const groupAmenities = [
  { label: "Complimentary Breakfast", detail: `Daily ${BREAKFAST_HOURS}` },
  { label: "Free On-Site Parking", detail: "Ample parking for vehicles and trailers" },
  { label: "Level 2 EV Charging", detail: "Available for an additional fee" },
  { label: "Free Wi-Fi", detail: "Throughout the property" },
  { label: "Business Center", detail: "For group planning and printing needs" },
  { label: "Guest Laundry", detail: "On-site laundry facilities" },
  { label: "24-Hour Front Desk", detail: "Always available to assist your group" },
  { label: "Indoor Corridor Access", detail: "Secure, climate-controlled hallways" },
];

export default function GroupStaysPage() {
  const crumbs = [{ name: "Group Stays", href: "/group-stays" }];

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
              <li className="text-gray-200">Group Stays</li>
            </ol>
          </nav>
          <div className="text-center">
            <p className="text-[#c9a84c] text-sm tracking-[0.3em] uppercase mb-3 font-sans">
              Group Hotel Rooms · Clifton, Texas
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold font-serif mb-4">Group Stays</h1>
            <p className="text-gray-300 max-w-2xl mx-auto font-sans">
              Bringing a group to Clifton, Lake Whitney, or Bosque County? Velkommen Inn offers
              group hotel rooms in Clifton TX and is glad to help make your group stay smooth
              and comfortable.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 space-y-14">

        {/* Intro */}
        <div>
          <p className="text-gray-700 font-sans leading-relaxed text-base">
            Velkommen Inn is a professionally managed, independently operated hotel in Clifton,
            Texas — the Norwegian Capital of Texas. We proudly serve travelers visiting Clifton,
            Bosque County, Lake Whitney, Meridian State Park, and the surrounding Central Texas
            area. Whether you&apos;re organizing a family reunion, a work crew stay, a sports
            team trip, or any other group travel, we&apos;re here to help coordinate your visit.
          </p>
          <p className="text-gray-700 font-sans leading-relaxed text-base mt-4">
            For group reservations and room block arrangements, please contact us directly by
            phone. Our front desk is available 24 hours a day.
          </p>
        </div>

        {/* What groups get */}
        <div>
          <h2 className="text-2xl font-bold font-serif text-[#1a2e4a] mb-6">
            What Your Group Can Expect
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {groupAmenities.map((item) => (
              <div key={item.label} className="flex items-start gap-3 bg-white rounded-lg border border-gray-100 p-4 shadow-sm">
                <svg className="h-5 w-5 shrink-0 text-[#c9a84c] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="text-sm font-semibold text-[#1a2e4a]">{item.label}</p>
                  <p className="text-xs text-gray-500 font-sans mt-0.5">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Room types */}
        <div className="bg-[#f9f5ef] border border-gray-200 rounded-lg p-6">
          <h2 className="text-xl font-bold font-serif text-[#1a2e4a] mb-3">Available Room Types</h2>
          <p className="text-sm text-gray-700 font-sans leading-relaxed mb-4">
            We offer multiple room configurations to accommodate different group needs:
          </p>
          <ul className="space-y-2 text-sm text-gray-700 font-sans">
            {[
              "2 Queen Size Beds",
              "1 King Size Bed",
              "1 King Size Bed – ADA Accessible",
              "2 Queen Size Beds – ADA Accessible",
            ].map((r) => (
              <li key={r} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#c9a84c] shrink-0" aria-hidden="true" />
                {r}
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <Link href="/rooms" className="text-sm font-semibold text-[#c9a84c] hover:underline font-sans">
              View all room details →
            </Link>
          </div>
        </div>

        {/* Internal links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm font-sans">
          <Link href="/amenities" className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow text-center">
            <p className="font-bold text-[#1a2e4a] font-serif mb-1">Amenities</p>
            <p className="text-xs text-gray-500">Pool, breakfast, Wi-Fi & more</p>
          </Link>
          <Link href="/local-attractions" className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow text-center">
            <p className="font-bold text-[#1a2e4a] font-serif mb-1">Local Attractions</p>
            <p className="text-xs text-gray-500">Near Lake Whitney & Bosque Museum</p>
          </Link>
          <Link href="/contact" className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow text-center">
            <p className="font-bold text-[#1a2e4a] font-serif mb-1">Contact Us</p>
            <p className="text-xs text-gray-500">Front desk available 24 hours</p>
          </Link>
        </div>

        {/* CTA */}
        <div className="bg-[#1a2e4a] text-white rounded-lg p-8 text-center">
          <h2 className="text-xl font-bold font-serif mb-3">Plan Your Group Stay in Clifton, TX</h2>
          <p className="text-gray-300 text-sm font-sans mb-6">
            Call us directly to discuss availability and group hotel room arrangements.
            Our front desk is available 24 hours a day.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={HOTEL_PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 rounded bg-[#c9a84c] px-6 py-2.5 text-sm font-semibold text-[#1a2e4a] hover:bg-[#b8943d] transition-colors"
              aria-label={`Call Velkommen Inn at ${HOTEL_PHONE} to plan your group stay`}
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.01l-2.21 2.21z" />
              </svg>
              {HOTEL_PHONE}
            </a>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded border border-white/30 px-6 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors font-sans"
            >
              Book Rooms Online
            </a>
          </div>
        </div>

      </div>
    </>
  );
}
