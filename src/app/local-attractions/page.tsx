import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { BOOKING_URL, HOTEL_PHONE_HREF, HOTEL_PHONE, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Local Attractions | Hotel Near Bosque Museum & Lake Whitney | Velkommen Inn",
  description:
    "Stay at Velkommen Inn — a hotel near the Bosque Museum, Bosque Arts Center, Lake Whitney, Meridian State Park, and the Norwegian Capital of Texas in Clifton, TX.",
  alternates: { canonical: `${SITE_URL}/local-attractions` },
  openGraph: {
    title: "Local Attractions Near Velkommen Inn | Clifton, TX Hotel",
    description:
      "Velkommen Inn is a hotel near the Bosque Museum, Lake Whitney State Park, Meridian State Park, Bosque Arts Center, and historic Norse sites in Clifton, TX.",
    url: `${SITE_URL}/local-attractions`,
  },
};

const attractions = [
  {
    category: "Arts, Culture & History",
    places: [
      {
        name: "Bosque Museum",
        description:
          "Explore the history of Bosque County and the region's Scandinavian heritage at the Bosque Museum in Clifton. A great introduction to the Norwegian roots that give Clifton its nickname — the Norwegian Capital of Texas. Velkommen Inn is conveniently located as a hotel near the Bosque Museum.",
        keywords: "hotel near Bosque Museum",
      },
      {
        name: "Bosque Arts Center",
        description:
          "A cultural hub in Clifton featuring rotating exhibits, local artwork, and community events throughout the year. Velkommen Inn is your home base as a hotel near the Bosque Arts Center.",
        keywords: "hotel near Bosque Arts Center",
      },
      {
        name: "Clifton Classic Chassis Auto Museum",
        description:
          "A treat for car enthusiasts — this museum showcases a collection of classic automobiles right in downtown Clifton.",
        keywords: null,
      },
      {
        name: "Historic Norse Community",
        description:
          "Just a short drive from Clifton, the Norse community is one of the earliest Norwegian settlements in Texas. Visit the historic Norse Church and surrounding area to connect with the region's Scandinavian heritage.",
        keywords: null,
      },
      {
        name: "Clifton Whipple Truss Bridge",
        description:
          "A historic iron truss bridge that stands as a piece of Texas engineering history. Worth a stop for history buffs and photographers.",
        keywords: null,
      },
    ],
  },
  {
    category: "Outdoor Recreation & Nature",
    places: [
      {
        name: "Lake Whitney State Park",
        description:
          "Located on the shores of Lake Whitney, this state park offers swimming, fishing, camping, hiking, and water recreation. A popular destination for families and outdoor enthusiasts. Velkommen Inn is a convenient hotel near Lake Whitney for visitors exploring the park.",
        keywords: "hotel near Lake Whitney",
      },
      {
        name: "Meridian State Park",
        description:
          "A scenic gem in Bosque County featuring hiking trails, a spring-fed lake, picnicking, and camping in a beautiful natural setting. Velkommen Inn serves as a hotel near Meridian State Park for guests exploring this destination.",
        keywords: "hotel near Meridian State Park",
      },
      {
        name: "Bosque River",
        description:
          "The Bosque River winds through Bosque County, offering scenic views, fishing spots, and peaceful natural surroundings.",
        keywords: null,
      },
      {
        name: "Lake Aquilla",
        description:
          "A quiet reservoir known for good fishing — particularly striped bass — and a peaceful, uncrowded atmosphere.",
        keywords: null,
      },
    ],
  },
  {
    category: "Downtown Clifton",
    places: [
      {
        name: "Downtown Clifton",
        description:
          "Stroll through the charming streets of downtown Clifton, where you'll find shops, restaurants, and the welcoming small-town atmosphere that makes Clifton unique. The town's Norwegian heritage is evident throughout — a true reflection of the Norwegian Capital of Texas.",
        keywords: null,
      },
    ],
  },
];

export default function LocalAttractionsPage() {
  const crumbs = [{ name: "Local Attractions", href: "/local-attractions" }];

  const attractionSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Local Attractions Near Velkommen Inn in Clifton, TX",
    itemListElement: attractions.flatMap((g) =>
      g.places.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: p.name,
      }))
    ),
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
              history, outdoor recreation, and natural beauty of Bosque County from your base
              at Velkommen Inn.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 space-y-14">

        {attractions.map((group) => (
          <section key={group.category} aria-label={group.category}>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 font-sans mb-6 border-b border-gray-200 pb-2">
              {group.category}
            </h2>
            <div className="space-y-5">
              {group.places.map((place) => (
                <article key={place.name} className="bg-white rounded-lg border border-gray-100 shadow-sm p-6">
                  <h3 className="text-lg font-bold font-serif text-[#1a2e4a] mb-2">{place.name}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-sans">{place.description}</p>
                </article>
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

        {/* CTA */}
        <div className="bg-[#1a2e4a] text-white rounded-lg p-8 text-center">
          <h2 className="text-xl font-bold font-serif mb-3">
            Stay at the Heart of Clifton, Texas
          </h2>
          <p className="text-gray-300 text-sm font-sans mb-6">
            Velkommen Inn is your convenient home base for exploring everything Clifton and
            Bosque County have to offer. Book direct for the best available direct rate.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded bg-[#c9a84c] px-6 py-2.5 text-sm font-semibold text-[#1a2e4a] hover:bg-[#b8943d] transition-colors"
            >
              Book Your Stay
            </a>
            <a
              href={HOTEL_PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 rounded border border-white/30 px-6 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors font-sans"
              aria-label={`Call Velkommen Inn at ${HOTEL_PHONE}`}
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.01l-2.21 2.21z" />
              </svg>
              Call {HOTEL_PHONE}
            </a>
          </div>
        </div>

      </div>
    </>
  );
}
