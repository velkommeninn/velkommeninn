import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { BOOKING_URL, HOTEL_PHONE, HOTEL_PHONE_HREF, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Pet Policy | Dog Friendly Hotel in Clifton TX | Velkommen Inn",
  description:
    "Velkommen Inn is a dog friendly hotel in Clifton, TX. Dogs welcome in designated rooms — max 2 dogs, pet fees from $35. Cats and other pets not permitted. ADA service animals at no charge.",
  alternates: { canonical: `${SITE_URL}/pet-policy` },
  openGraph: {
    title: "Pet Policy | Dog Friendly Hotel in Clifton TX | Velkommen Inn",
    description:
      "Traveling with your dog to Clifton TX? Velkommen Inn welcomes dogs in designated pet-friendly rooms. Max 2 dogs. Pet fees from $35. Notify hotel in advance.",
    url: `${SITE_URL}/pet-policy`,
  },
};

const petFees = [
  { situation: "1 dog · 1 night", fee: "$35" },
  { situation: "2 dogs · 1 night", fee: "$50" },
  { situation: "1 dog · 2 nights", fee: "$50" },
  { situation: "2 dogs · 2 nights", fee: "$60" },
];

const rules = [
  "Dogs are allowed only in designated pet-friendly rooms.",
  "Guests must notify the hotel in advance if bringing a dog.",
  "Dogs only. Cats and other pets are not permitted.",
  "Maximum 2 dogs per room.",
  "Pet fees apply and are collected at check-in.",
  "Dogs must be kept on a leash in all common areas.",
  "Guests are responsible for any pet-related damages.",
  "The 100% non-smoking policy applies in all pet-friendly rooms.",
];

export default function PetPolicyPage() {
  const crumbs = [{ name: "Pet Policy", href: "/pet-policy" }];

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
              <li className="text-gray-200">Pet Policy</li>
            </ol>
          </nav>
          <div className="text-center">
            <p className="text-[#c9a84c] text-sm tracking-[0.3em] uppercase mb-3 font-sans">
              Dog Friendly Hotel · Clifton, Texas
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold font-serif mb-4">Pet Policy</h1>
            <p className="text-gray-300 max-w-2xl mx-auto font-sans">
              Velkommen Inn is a dog friendly hotel in Clifton, TX. Dogs are welcome in designated
              pet-friendly rooms. Please review our full policy before your stay.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 space-y-14">

        {/* Quick summary */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6" aria-label="Pet policy at a glance">
          <div className="bg-white rounded-lg border border-gray-200 p-6 text-center shadow-sm">
            <div
              role="img"
              aria-label="Dog icon"
              className="text-3xl mb-2"
            >🐕</div>
            <h2 className="font-bold text-[#1a2e4a] font-serif mb-1">Dogs Only</h2>
            <p className="text-xs text-gray-500 font-sans">Cats and other pets are not permitted</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-6 text-center shadow-sm">
            <p className="text-3xl mb-2" aria-hidden="true">2️⃣</p>
            <h2 className="font-bold text-[#1a2e4a] font-serif mb-1">Max 2 Dogs</h2>
            <p className="text-xs text-gray-500 font-sans">Per room maximum</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-6 text-center shadow-sm">
            <p className="text-3xl mb-2" aria-hidden="true">📞</p>
            <h2 className="font-bold text-[#1a2e4a] font-serif mb-1">Notify in Advance</h2>
            <p className="text-xs text-gray-500 font-sans">Contact us before your arrival</p>
          </div>
        </div>

        {/* Pet fee table */}
        <div>
          <h2 className="text-2xl font-bold font-serif text-[#1a2e4a] mb-6">Pet Fee Schedule</h2>
          <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
            <table className="w-full text-sm font-sans" aria-label="Pet fee schedule at Velkommen Inn">
              <thead className="bg-[#1a2e4a] text-white">
                <tr>
                  <th className="py-3 px-5 text-left font-semibold" scope="col">Stay</th>
                  <th className="py-3 px-5 text-right font-semibold" scope="col">Pet Fee</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {petFees.map((row) => (
                  <tr key={row.situation} className="hover:bg-gray-50 transition-colors">
                    <td className="py-3 px-5 text-gray-700">{row.situation}</td>
                    <td className="py-3 px-5 text-right font-semibold text-[#1a2e4a]">{row.fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-gray-500 font-sans">
            Pet fees are collected at check-in along with room charges.
          </p>
        </div>

        {/* Rules */}
        <div>
          <h2 className="text-2xl font-bold font-serif text-[#1a2e4a] mb-6">Pet Rules</h2>
          <ul className="space-y-3" aria-label="Pet rules at Velkommen Inn">
            {rules.map((rule) => (
              <li key={rule} className="flex items-start gap-3">
                <svg className="h-5 w-5 shrink-0 text-[#c9a84c] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 font-sans text-sm leading-relaxed">{rule}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Service animals */}
        <div className="bg-[#c9a84c]/10 border border-[#c9a84c]/30 rounded-lg p-6">
          <h2 className="text-xl font-bold font-serif text-[#1a2e4a] mb-3">Service Animals</h2>
          <p className="text-sm text-gray-700 font-sans leading-relaxed">
            Service animals as defined by the Americans with Disabilities Act (ADA) are welcome
            at Velkommen Inn at no additional charge. Service animals are not subject to the pet
            fee schedule above. If you are traveling with a service animal, please let us know in
            advance so we can best accommodate your stay.
          </p>
        </div>

        {/* Internal links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-sans">
          <Link href="/policies" className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <p className="font-bold text-[#1a2e4a] font-serif mb-1">Hotel Policies</p>
            <p className="text-xs text-gray-500">Check-in, payment, smoking & more</p>
          </Link>
          <Link href="/rooms" className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <p className="font-bold text-[#1a2e4a] font-serif mb-1">Guest Rooms</p>
            <p className="text-xs text-gray-500">View pet-friendly room options</p>
          </Link>
        </div>

        {/* Contact to book */}
        <div className="bg-[#1a2e4a] text-white rounded-lg p-8 text-center">
          <h2 className="text-xl font-bold font-serif mb-3">
            Traveling with Your Dog to Clifton, TX?
          </h2>
          <p className="text-gray-300 text-sm font-sans mb-6">
            Please notify us before your arrival so we can assign a pet-friendly room.
            Book direct or call our 24-hour front desk.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded bg-[#c9a84c] px-6 py-2.5 text-sm font-semibold text-[#1a2e4a] hover:bg-[#b8943d] transition-colors"
            >
              Book Direct
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
