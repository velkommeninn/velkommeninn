import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import AttractionCard from "@/components/AttractionCard";
import CTASection from "@/components/CTASection";
import { breadcrumbSchema } from "@/lib/schema";
import { HOTEL_PHONE } from "@/lib/constants";
import { attractionGroups } from "@/data/attractions";
import { pageSeo } from "@/data/seo";

export const metadata: Metadata = {
  title: pageSeo.localAttractions.title,
  description: pageSeo.localAttractions.description,
  alternates: { canonical: pageSeo.localAttractions.canonical },
  openGraph: pageSeo.localAttractions.openGraph,
};

export default function LocalAttractionsPage() {
  const crumbs = [{ name: "Local Attractions", href: "/local-attractions" }];

  const allPlaces = attractionGroups.flatMap((g) => g.places);
  const attractionSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Local Attractions Near Velkommen Inn in Clifton, TX",
    itemListElement: allPlaces.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.name,
    })),
  };

  return (
    <>
      <JsonLd schema={[breadcrumbSchema(crumbs), attractionSchema]} />

      {/* Header */}
      <section className="bg-[#1a2e4a] text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-sm text-gray-400 font-sans">
              <li><Link href="/" className="hover:text-[#c9a84c] transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-gray-200">Local Attractions</li>
            </ol>
          </nav>
          <div className="text-center">
            <p className="text-[#c9a84c] text-sm tracking-[0.3em] uppercase mb-3 font-sans">
              Clifton · Bosque County · Central Texas
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold font-serif mb-4">Local Attractions</h1>
            <p className="text-gray-300 max-w-2xl mx-auto font-sans">
              Clifton is proudly known as the Norwegian Capital of Texas. Explore the rich
              history, arts, outdoor recreation, and natural beauty of Bosque County from your
              base at Velkommen Inn.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 space-y-14">

        {attractionGroups.map((group) => (
          <section key={group.category} aria-label={group.category}>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 font-sans mb-6 border-b border-gray-200 pb-2">
              {group.category}
            </h2>
            <div className="space-y-5">
              {group.places.map((place) => (
                <AttractionCard key={place.name} place={place} />
              ))}
            </div>
          </section>
        ))}

        {/* Courthouse note */}
        <div className="bg-[#f9f5ef] border border-gray-200 rounded-lg p-5 text-sm text-gray-600 font-sans">
          <p>
            <strong className="text-[#1a2e4a]">Visiting Bosque County?</strong> The Bosque County
            Courthouse is located in Meridian, Texas — the county seat. Meridian is a short drive
            from Clifton and is also home to Meridian State Park.
          </p>
        </div>

        {/* Internal links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm font-sans">
          <Link href="/rooms" className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow text-center">
            <p className="font-bold text-[#1a2e4a] font-serif mb-1">Guest Rooms</p>
            <p className="text-xs text-gray-500">Queen, King & ADA accessible</p>
          </Link>
          <Link href="/amenities" className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow text-center">
            <p className="font-bold text-[#1a2e4a] font-serif mb-1">Amenities</p>
            <p className="text-xs text-gray-500">Pool, breakfast, Wi-Fi & more</p>
          </Link>
          <Link href="/group-stays" className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow text-center">
            <p className="font-bold text-[#1a2e4a] font-serif mb-1">Group Stays</p>
            <p className="text-xs text-gray-500">Group hotel rooms in Clifton TX</p>
          </Link>
        </div>

        <CTASection
          heading="Stay at the Heart of Clifton, Texas"
          subtext="Velkommen Inn is your convenient home base for exploring everything Clifton and Bosque County have to offer. Book direct for the best available direct rate."
          bookLabel="Book Your Stay"
          phoneLabel={`Call ${HOTEL_PHONE}`}
        />

      </div>
    </>
  );
}
