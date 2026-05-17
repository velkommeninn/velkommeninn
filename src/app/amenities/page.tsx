import type { Metadata } from "next";
import Link from "next/link";
import { BOOKING_URL, BREAKFAST_HOURS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Amenities",
  description:
    "Velkommen Inn amenities include complimentary breakfast, free Wi-Fi, outdoor pool, fitness center, business center, guest laundry, free parking, and Level 2 EV charging.",
};

const amenityGroups = [
  {
    heading: "Food & Beverage",
    items: [
      {
        title: "Complimentary Breakfast",
        detail: `Served daily from ${BREAKFAST_HOURS}. Start your morning right before heading out to explore Clifton and Bosque County.`,
      },
    ],
  },
  {
    heading: "Connectivity & Tech",
    items: [
      {
        title: "Free Wi-Fi",
        detail: "Complimentary high-speed wireless internet is available throughout the property.",
      },
    ],
  },
  {
    heading: "Recreation & Fitness",
    items: [
      {
        title: "Outdoor Seasonal Pool",
        detail: "Cool off and relax in our outdoor pool, available seasonally.",
      },
      {
        title: "Fitness Center",
        detail: "Stay on track with your routine in our on-site fitness center.",
      },
    ],
  },
  {
    heading: "Business & Productivity",
    items: [
      {
        title: "Business Center",
        detail: "On-site business center available for printing, copying, and other business needs.",
      },
    ],
  },
  {
    heading: "Guest Services",
    items: [
      {
        title: "24-Hour Front Desk",
        detail: "Our front desk is staffed 24 hours a day for any questions or assistance during your stay.",
      },
      {
        title: "Guest Laundry",
        detail: "On-site guest laundry facilities are available for your convenience.",
      },
      {
        title: "Indoor Corridor Access",
        detail: "All guest rooms are accessible via interior corridors for added comfort and security.",
      },
    ],
  },
  {
    heading: "Parking & Transportation",
    items: [
      {
        title: "Free On-Site Parking",
        detail: "Complimentary parking is available on property for all guests.",
      },
      {
        title: "Level 2 EV Charging",
        detail: "Electric vehicle charging is available on-site for an additional fee.",
      },
    ],
  },
];

export default function AmenitiesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#1a2e4a] text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#c9a84c] text-sm tracking-[0.3em] uppercase mb-3 font-sans">
            Velkommen Inn · Clifton, Texas
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold font-serif mb-4">Amenities</h1>
          <p className="text-gray-300 max-w-2xl mx-auto font-sans">
            Everything you need for a comfortable and productive stay, all in one place.
          </p>
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
                  <div className="shrink-0 mt-0.5 h-2 w-2 rounded-full bg-[#c9a84c] mt-2" />
                  <div>
                    <p className="font-semibold text-[#1a2e4a] mb-1">{item.title}</p>
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
            <div className="shrink-0 mt-0.5">
              <svg className="h-5 w-5 text-[#c9a84c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-[#1a2e4a] mb-1">100% Non-Smoking Property</p>
              <p className="text-sm text-gray-600 font-sans">
                Velkommen Inn is 100% non-smoking. Smoking is permitted outside only, at least
                50 feet from the building.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-14 text-center">
        <h2 className="text-2xl font-bold font-serif text-[#1a2e4a] mb-3">Plan Your Stay</h2>
        <p className="text-gray-600 font-sans mb-6">
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
          <Link
            href="/rooms"
            className="inline-flex items-center justify-center rounded border border-[#1a2e4a] px-8 py-3 text-sm font-semibold text-[#1a2e4a] hover:bg-[#1a2e4a] hover:text-white transition-colors font-sans"
          >
            View Rooms
          </Link>
        </div>
      </section>
    </>
  );
}
