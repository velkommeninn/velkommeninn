import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { BOOKING_URL, HOTEL_PHONE, HOTEL_PHONE_HREF, BREAKFAST_HOURS, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Amenities | Hotel in Clifton TX | Velkommen Inn",
  description:
    "Velkommen Inn amenities in Clifton, TX include complimentary breakfast daily, free Wi-Fi, outdoor seasonal pool, fitness center, business center, guest laundry, free parking, and Level 2 EV charging.",
  alternates: { canonical: `${SITE_URL}/amenities` },
  openGraph: {
    title: "Amenities | Velkommen Inn – Hotel in Clifton, TX",
    description:
      "Free breakfast, Wi-Fi, parking, outdoor pool, fitness center, business center, guest laundry, and EV charging at Velkommen Inn in Clifton, TX.",
    url: `${SITE_URL}/amenities`,
  },
};

const amenityGroups = [
  {
    heading: "Food & Beverage",
    items: [
      {
        title: "Complimentary Breakfast",
        detail: `Start your morning right with a complimentary breakfast served daily from ${BREAKFAST_HOURS}. Included with your stay at no additional charge.`,
      },
    ],
  },
  {
    heading: "Connectivity",
    items: [
      {
        title: "Free High-Speed Wi-Fi",
        detail: "Complimentary wireless internet is available throughout the property — in your room and all common areas.",
      },
    ],
  },
  {
    heading: "Recreation",
    items: [
      {
        title: "Outdoor Seasonal Pool",
        detail: "Relax and unwind in our outdoor pool, available seasonally. A great way to end a day exploring Clifton and Bosque County.",
      },
      {
        title: "Fitness Center",
        detail: "Stay on track with your fitness routine in our on-site fitness center.",
      },
    ],
  },
  {
    heading: "Business",
    items: [
      {
        title: "Business Center",
        detail: "On-site business center available for printing, copying, and work tasks — ideal for business travelers in the Clifton, TX area.",
      },
    ],
  },
  {
    heading: "Guest Services",
    items: [
      {
        title: "24-Hour Front Desk",
        detail: "Our front desk is staffed around the clock. Whether you arrive early or late, we're here to help.",
      },
      {
        title: "Guest Laundry",
        detail: "On-site guest laundry facilities are available for your convenience during your stay.",
      },
      {
        title: "Indoor Corridor Access",
        detail: "All guest rooms are accessible via secure, climate-controlled interior hallways.",
      },
    ],
  },
  {
    heading: "Parking & Transportation",
    items: [
      {
        title: "Free On-Site Parking",
        detail: "Complimentary parking is available on property for all guests. No daily parking fees.",
      },
      {
        title: "Level 2 EV Charging",
        detail: "Electric vehicle charging stations are available on-site for an additional fee.",
      },
    ],
  },
];

export default function AmenitiesPage() {
  const crumbs = [{ name: "Amenities", href: "/amenities" }];

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
              <li className="text-gray-200">Amenities</li>
            </ol>
          </nav>
          <div className="text-center">
            <p className="text-[#c9a84c] text-sm tracking-[0.3em] uppercase mb-3 font-sans">
              Velkommen Inn · Clifton, Texas
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold font-serif mb-4">Hotel Amenities</h1>
            <p className="text-gray-300 max-w-2xl mx-auto font-sans">
              Everything you need for a comfortable stay at our hotel in Clifton, TX — all
              in one convenient location.
            </p>
          </div>
        </div>
      </section>

      {/* Amenity groups */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        {amenityGroups.map((group) => (
          <div key={group.heading}>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 font-sans mb-4 border-b border-gray-200 pb-2">
              {group.heading}
            </h2>
            <div className="space-y-4">
              {group.items.map((item) => (
                <div key={item.title} className="flex items-start gap-4 bg-white rounded-lg p-5 border border-gray-100 shadow-sm">
                  <svg className="h-5 w-5 shrink-0 text-[#c9a84c] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-[#1a2e4a] mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed font-sans">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Non-smoking notice */}
      <section className="bg-[#1a2e4a]/5 border-t border-gray-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-start gap-4">
            <svg className="h-5 w-5 shrink-0 text-[#c9a84c] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="text-sm font-semibold text-[#1a2e4a] mb-1">100% Non-Smoking Property</p>
              <p className="text-sm text-gray-600 font-sans">
                Velkommen Inn is 100% non-smoking. Smoking is permitted outside only, at least
                50 feet from the building. See our{" "}
                <Link href="/policies" className="text-[#c9a84c] hover:underline">hotel policies</Link>{" "}
                for full details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 text-center text-sm font-sans">
          <Link href="/rooms" className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <p className="font-bold text-[#1a2e4a] font-serif mb-1">Guest Rooms</p>
            <p className="text-xs text-gray-500">Queen, King & ADA accessible</p>
          </Link>
          <Link href="/pet-policy" className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <p className="font-bold text-[#1a2e4a] font-serif mb-1">Pet Policy</p>
            <p className="text-xs text-gray-500">Dog friendly hotel in Clifton TX</p>
          </Link>
          <Link href="/local-attractions" className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <p className="font-bold text-[#1a2e4a] font-serif mb-1">Local Attractions</p>
            <p className="text-xs text-gray-500">Near Lake Whitney & Bosque Museum</p>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1a2e4a] text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-14 text-center">
          <h2 className="text-2xl font-bold font-serif mb-3">Plan Your Stay at Velkommen Inn</h2>
          <p className="text-gray-300 font-sans mb-6">
            Book direct for the best available direct rate and direct support from the hotel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded bg-[#c9a84c] px-8 py-3 text-sm font-semibold text-[#1a2e4a] hover:bg-[#b8943d] transition-colors"
            >
              Book Direct
            </a>
            <a
              href={HOTEL_PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 rounded border border-white/30 px-8 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors font-sans"
              aria-label={`Call Velkommen Inn at ${HOTEL_PHONE}`}
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.01l-2.21 2.21z" />
              </svg>
              Call {HOTEL_PHONE}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
