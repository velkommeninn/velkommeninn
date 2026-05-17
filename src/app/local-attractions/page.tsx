import type { Metadata } from "next";
import Link from "next/link";
import { BOOKING_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Local Attractions",
  description:
    "Discover Clifton, Texas — the Norwegian Capital of Texas. Explore Bosque County attractions, Lake Whitney, Meridian State Park, the Bosque River, and more.",
};

const attractions = [
  {
    category: "Arts, Culture & History",
    places: [
      {
        name: "Bosque Museum",
        description:
          "Explore the history of Bosque County and the region's Scandinavian heritage at the Bosque Museum in Clifton. A great introduction to the Norwegian roots that give Clifton its nickname — the Norwegian Capital of Texas.",
      },
      {
        name: "Bosque Arts Center",
        description:
          "A cultural hub in Clifton featuring rotating exhibits, local artwork, and community events throughout the year.",
      },
      {
        name: "Clifton Classic Chassis Auto Museum",
        description:
          "A treat for car enthusiasts — this museum showcases a collection of classic automobiles right in downtown Clifton.",
      },
      {
        name: "Historic Norse Community",
        description:
          "Just a short drive from Clifton, the Norse community is one of the earliest Norwegian settlements in Texas. Visit the historic Norse Church and surrounding area to connect with the region's Scandinavian heritage.",
      },
      {
        name: "Clifton Whipple Truss Bridge",
        description:
          "A historic iron truss bridge that stands as a piece of Texas engineering history. Worth a stop for history buffs and photographers.",
      },
    ],
  },
  {
    category: "Outdoor Recreation & Nature",
    places: [
      {
        name: "Lake Whitney State Park",
        description:
          "Located on the shores of Lake Whitney, this state park offers swimming, fishing, camping, hiking, and water recreation. A popular destination for families and outdoor enthusiasts.",
      },
      {
        name: "Meridian State Park",
        description:
          "A scenic gem in Bosque County featuring hiking trails, a spring-fed lake, picnicking, and camping in a beautiful natural setting.",
      },
      {
        name: "Bosque River",
        description:
          "The Bosque River winds through Bosque County, offering scenic views, fishing spots, and peaceful natural surroundings.",
      },
      {
        name: "Lake Aquilla",
        description:
          "A quiet reservoir near Hillsboro, Lake Aquilla is known for good fishing — particularly striped bass — and a peaceful, uncrowded atmosphere.",
      },
    ],
  },
  {
    category: "Downtown Clifton",
    places: [
      {
        name: "Downtown Clifton",
        description:
          "Stroll through the charming streets of downtown Clifton, where you'll find locally owned shops, restaurants, and a welcoming small-town atmosphere. The downtown area reflects the Norwegian heritage and Texas character that makes Clifton unique.",
      },
    ],
  },
];

export default function LocalAttractionsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#1a2e4a] text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#c9a84c] text-sm tracking-[0.3em] uppercase mb-3 font-sans">
            Clifton · Bosque County · Central Texas
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold font-serif mb-4">Local Attractions</h1>
          <p className="text-gray-300 max-w-2xl mx-auto font-sans">
            Clifton is proudly known as the Norwegian Capital of Texas. Explore the rich history,
            outdoor recreation, and natural beauty of Bosque County and the surrounding region.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 space-y-14">

        {attractions.map((group) => (
          <div key={group.category}>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 font-sans mb-6 border-b border-gray-200 pb-2">
              {group.category}
            </h2>
            <div className="space-y-5">
              {group.places.map((place) => (
                <div key={place.name} className="bg-white rounded-lg border border-gray-100 shadow-sm p-6">
                  <h3 className="text-lg font-bold font-serif text-[#1a2e4a] mb-2">{place.name}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-sans">{place.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Note about courthouse */}
        <div className="bg-[#f9f5ef] border border-gray-200 rounded-lg p-5 text-sm text-gray-600 font-sans">
          <p>
            <strong className="text-[#1a2e4a]">Visiting Bosque County?</strong> The Bosque County
            Courthouse is located in Meridian, Texas — the county seat. Meridian is a short drive
            from Clifton and is also home to Meridian State Park.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-[#1a2e4a] text-white rounded-lg p-8 text-center">
          <h2 className="text-xl font-bold font-serif mb-3">Stay at the Heart of It All</h2>
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
            <Link
              href="/rooms"
              className="inline-flex items-center justify-center rounded border border-white/30 px-6 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors font-sans"
            >
              View Rooms
            </Link>
          </div>
        </div>

      </div>
    </>
  );
}
