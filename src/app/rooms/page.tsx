import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { BOOKING_URL, HOTEL_PHONE_HREF, HOTEL_PHONE, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Guest Rooms | Velkommen Inn Clifton TX",
  description:
    "Velkommen Inn Clifton TX offers Queen and King rooms, including ADA accessible options. Every room includes free Wi-Fi, mini fridge, microwave, and Smart DirecTV. Book direct.",
  alternates: { canonical: `${SITE_URL}/rooms` },
  openGraph: {
    title: "Guest Rooms | Velkommen Inn – Hotel in Clifton, TX",
    description:
      "View room types at Velkommen Inn, a hotel in Clifton TX. 2 Queen, 1 King, and ADA accessible rooms — all with free Wi-Fi, mini fridge, microwave, and Smart DirecTV.",
    url: `${SITE_URL}/rooms`,
  },
};

const roomTypes = [
  {
    name: "2 Queen Size Beds",
    description:
      "Ideal for families or travelers who prefer extra space. Two full-size queen beds with a private en-suite bathroom and all standard room amenities.",
    badge: null,
    schemaName: "Double Queen Room",
  },
  {
    name: "1 King Size Bed",
    description:
      "A comfortable king bed with a private en-suite bathroom, perfect for couples or solo travelers seeking a relaxing stay in Clifton, TX.",
    badge: null,
    schemaName: "King Room",
  },
  {
    name: "1 King Size Bed – ADA Accessible",
    description:
      "A king room thoughtfully designed for accessibility, with features to support guests with mobility needs. Same great amenities in an accessible layout.",
    badge: "ADA Accessible",
    schemaName: "Accessible King Room",
  },
  {
    name: "2 Queen Size Beds – ADA Accessible",
    description:
      "Two queen beds in an accessible room configuration, ideal for guests who need extra space alongside accessibility features.",
    badge: "ADA Accessible",
    schemaName: "Accessible Double Queen Room",
  },
];

const roomAmenities = [
  { label: "Coffee Maker" },
  { label: "Mini Fridge" },
  { label: "Microwave" },
  { label: "Hair Dryer" },
  { label: "Free Wi-Fi" },
  { label: "Flat-Screen TV" },
  { label: "Smart DirecTV" },
  { label: "Climate Control" },
  { label: "Private En-Suite Bathroom" },
];

export default function RoomsPage() {
  const crumbs = [{ name: "Rooms", href: "/rooms" }];
  const roomSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Guest Rooms at Velkommen Inn",
    itemListElement: roomTypes.map((r, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: r.schemaName,
      url: `${SITE_URL}/rooms`,
    })),
  };

  return (
    <>
      <JsonLd schema={[breadcrumbSchema(crumbs), roomSchema]} />

      {/* Header */}
      <section className="bg-[#1a2e4a] text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-sm text-gray-400 font-sans">
              <li><Link href="/" className="hover:text-[#c9a84c] transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-gray-200">Rooms</li>
            </ol>
          </nav>
          <div className="text-center">
            <p className="text-[#c9a84c] text-sm tracking-[0.3em] uppercase mb-3 font-sans">
              Velkommen Inn · Clifton, Texas
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold font-serif mb-4">Guest Rooms</h1>
            <p className="text-gray-300 max-w-2xl mx-auto font-sans">
              Every room at Velkommen Inn in Clifton, TX is designed for comfort, with indoor
              corridor access, quality furnishings, and all the in-room essentials you need.
            </p>
          </div>
        </div>
      </section>

      {/* Room types */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold font-serif text-[#1a2e4a] mb-8">Room Types</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {roomTypes.map((room) => (
            <article
              key={room.name}
              className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden"
            >
              <div
                className="bg-gray-100 h-48 flex items-center justify-center"
                role="img"
                aria-label={`${room.name} room at Velkommen Inn, Clifton TX`}
              >
                <svg
                  className="h-16 w-16 text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-xl font-bold font-serif text-[#1a2e4a]">{room.name}</h3>
                  {room.badge && (
                    <span className="shrink-0 rounded-full bg-[#c9a84c]/15 px-3 py-0.5 text-xs font-semibold text-[#c9a84c] border border-[#c9a84c]/30">
                      {room.badge}
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed font-sans mb-5">
                  {room.description}
                </p>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded bg-[#c9a84c] px-5 py-2 text-sm font-semibold text-[#1a2e4a] hover:bg-[#b8943d] transition-colors"
                  aria-label={`Book ${room.name} at Velkommen Inn`}
                >
                  Check Availability
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* In-room amenities */}
      <section className="bg-white border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold font-serif text-[#1a2e4a] mb-3">
            Included in Every Room
          </h2>
          <p className="text-gray-600 font-sans mb-10">
            All guest rooms at Velkommen Inn include the following amenities at no extra charge:
          </p>
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4" aria-label="In-room amenities">
            {roomAmenities.map((amenity) => (
              <li
                key={amenity.label}
                className="flex items-center gap-3 bg-[#f9f5ef] rounded-lg px-4 py-3 border border-gray-100"
              >
                <svg className="h-4 w-4 shrink-0 text-[#c9a84c]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm font-medium text-[#1a2e4a] font-sans">
                  {amenity.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Non-smoking notice */}
      <section className="bg-[#1a2e4a]/5 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-start gap-4">
            <div className="shrink-0 mt-0.5">
              <svg className="h-5 w-5 text-[#c9a84c]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-[#1a2e4a] mb-1">100% Non-Smoking Property</p>
              <p className="text-sm text-gray-600 font-sans">
                Velkommen Inn is a 100% non-smoking hotel. Smoking is permitted outside only,
                at least 50 feet from the building. Smoking violations may result in additional charges.
                See our <Link href="/policies" className="text-[#c9a84c] hover:underline">full hotel policies</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Internal links + CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 text-center">
          <Link href="/amenities" className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
            <p className="font-bold text-[#1a2e4a] font-serif mb-1">Amenities</p>
            <p className="text-xs text-gray-500 font-sans">Pool, fitness center, breakfast & more</p>
          </Link>
          <Link href="/pet-policy" className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
            <p className="font-bold text-[#1a2e4a] font-serif mb-1">Pet Policy</p>
            <p className="text-xs text-gray-500 font-sans">Dog friendly hotel in Clifton TX</p>
          </Link>
          <Link href="/policies" className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
            <p className="font-bold text-[#1a2e4a] font-serif mb-1">Hotel Policies</p>
            <p className="text-xs text-gray-500 font-sans">Check-in, check-out, payment info</p>
          </Link>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold font-serif text-[#1a2e4a] mb-3">
            Reserve Your Room at Velkommen Inn
          </h2>
          <p className="text-gray-600 font-sans mb-6 max-w-lg mx-auto">
            Book direct for the best available direct rate and direct hotel support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded bg-[#c9a84c] px-8 py-3 text-base font-semibold text-[#1a2e4a] hover:bg-[#b8943d] transition-colors"
            >
              Book Direct
            </a>
            <a
              href={HOTEL_PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 rounded border border-[#1a2e4a] px-8 py-3 text-base font-semibold text-[#1a2e4a] hover:bg-[#1a2e4a] hover:text-white transition-colors font-sans"
              aria-label="Call Velkommen Inn front desk"
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
