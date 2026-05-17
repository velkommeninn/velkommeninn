import type { Metadata } from "next";
import { BOOKING_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Rooms",
  description:
    "Velkommen Inn offers Queen and King rooms, including ADA accessible options. Every room includes free Wi-Fi, mini fridge, microwave, coffee maker, and Smart DirecTV.",
};

const roomTypes = [
  {
    name: "2 Queen Size Beds",
    description:
      "Ideal for families or travelers who prefer extra space. Two full-size queen beds with a private en-suite bathroom and all standard room amenities.",
    badge: null,
  },
  {
    name: "1 King Size Bed",
    description:
      "A comfortable king bed with a private en-suite bathroom, perfect for couples or solo travelers seeking a relaxing stay.",
    badge: null,
  },
  {
    name: "1 King Size Bed – ADA Accessible",
    description:
      "A king room thoughtfully designed for accessibility, with features to support guests with mobility needs. Same great amenities in an accessible layout.",
    badge: "ADA Accessible",
  },
  {
    name: "2 Queen Size Beds – ADA Accessible",
    description:
      "Two queen beds in an accessible room configuration, ideal for guests who need extra space alongside accessibility features.",
    badge: "ADA Accessible",
  },
];

const roomAmenities = [
  { label: "Coffee Maker", icon: "☕" },
  { label: "Mini Fridge", icon: "🧊" },
  { label: "Microwave", icon: "🔲" },
  { label: "Hair Dryer", icon: "💨" },
  { label: "Free Wi-Fi", icon: "📶" },
  { label: "Flat-Screen TV", icon: "📺" },
  { label: "Smart DirecTV", icon: "📡" },
  { label: "Climate Control", icon: "🌡️" },
  { label: "Private En-Suite Bathroom", icon: "🚿" },
];

export default function RoomsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#1a2e4a] text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#c9a84c] text-sm tracking-[0.3em] uppercase mb-3 font-sans">
            Velkommen Inn · Clifton, Texas
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold font-serif mb-4">Our Rooms</h1>
          <p className="text-gray-300 max-w-2xl mx-auto font-sans">
            Every room at Velkommen Inn is designed for comfort, with indoor corridor access,
            quality furnishings, and all the essentials for a great stay.
          </p>
        </div>
      </section>

      {/* Room types */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold font-serif text-[#1a2e4a] mb-8">Room Types</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {roomTypes.map((room) => (
            <div
              key={room.name}
              className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden"
            >
              <div className="bg-gray-100 h-48 flex items-center justify-center">
                <svg
                  className="h-16 w-16 text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
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
                >
                  Check Availability
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* In-room amenities */}
      <section className="bg-white border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold font-serif text-[#1a2e4a] mb-3">
            In Every Room
          </h2>
          <p className="text-gray-600 font-sans mb-10">
            All guest rooms at Velkommen Inn include:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {roomAmenities.map((amenity) => (
              <div
                key={amenity.label}
                className="flex items-center gap-3 bg-[#f9f5ef] rounded-lg px-4 py-3 border border-gray-100"
              >
                <span className="text-xl" aria-hidden="true">{amenity.icon}</span>
                <span className="text-sm font-medium text-[#1a2e4a] font-sans">
                  {amenity.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Non-smoking notice */}
      <section className="bg-[#1a2e4a]/5 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-start gap-4">
            <div className="shrink-0 mt-0.5">
              <svg className="h-5 w-5 text-[#c9a84c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-[#1a2e4a] mb-1">100% Non-Smoking Property</p>
              <p className="text-sm text-gray-600 font-sans">
                Velkommen Inn is a 100% non-smoking hotel. Smoking is permitted outside only,
                at least 50 feet from the building. Smoking violations may result in additional charges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-2xl font-bold font-serif text-[#1a2e4a] mb-3">
          Ready to Reserve Your Room?
        </h2>
        <p className="text-gray-600 font-sans mb-6 max-w-lg mx-auto">
          Book directly for the best available direct rate and direct support from the hotel.
        </p>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded bg-[#c9a84c] px-8 py-3 text-base font-semibold text-[#1a2e4a] hover:bg-[#b8943d] transition-colors"
        >
          Book Direct
        </a>
      </section>
    </>
  );
}
