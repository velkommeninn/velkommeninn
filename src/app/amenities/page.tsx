import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import AmenityCard from "@/components/AmenityCard";
import CTASection from "@/components/CTASection";
import { breadcrumbSchema } from "@/lib/schema";
import { HOTEL_PHONE } from "@/lib/constants";
import { amenityGroups } from "@/data/amenities";
import { pageSeo } from "@/data/seo";

export const metadata: Metadata = {
  title: pageSeo.amenities.title,
  description: pageSeo.amenities.description,
  alternates: { canonical: pageSeo.amenities.canonical },
  openGraph: pageSeo.amenities.openGraph,
};

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
                <AmenityCard key={item.title} item={item} />
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
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-10 pb-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center text-sm font-sans">
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
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
        <CTASection
          heading="Plan Your Stay at Velkommen Inn"
          subtext="Book direct for the best available direct rate and direct support from the hotel."
          bookLabel="Book Direct"
          phoneLabel={`Call ${HOTEL_PHONE}`}
        />
      </section>
    </>
  );
}
