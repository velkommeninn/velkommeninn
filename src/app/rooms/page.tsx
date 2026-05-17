import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import RoomCard from "@/components/RoomCard";
import CTASection from "@/components/CTASection";
import { breadcrumbSchema } from "@/lib/schema";
import { HOTEL_PHONE, SITE_URL } from "@/lib/constants";
import { roomTypes, roomAmenities } from "@/data/rooms";
import { pageSeo } from "@/data/seo";

export const metadata: Metadata = {
  title: pageSeo.rooms.title,
  description: pageSeo.rooms.description,
  alternates: { canonical: pageSeo.rooms.canonical },
  openGraph: pageSeo.rooms.openGraph,
};

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
            <RoomCard key={room.id} room={room} />
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
                key={amenity}
                className="flex items-center gap-3 bg-[#f9f5ef] rounded-lg px-4 py-3 border border-gray-100"
              >
                <svg className="h-4 w-4 shrink-0 text-[#c9a84c]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm font-medium text-[#1a2e4a] font-sans">{amenity}</span>
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

      {/* Internal links */}
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
        <CTASection
          heading="Reserve Your Room at Velkommen Inn"
          subtext="Book direct for the best available direct rate and direct hotel support."
          bookLabel="Book Direct"
          phoneLabel={`Call ${HOTEL_PHONE}`}
        />
      </section>
    </>
  );
}
