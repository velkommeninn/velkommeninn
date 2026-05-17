import type { Metadata } from "next";
import Link from "next/link";
import { BOOKING_URL, HOTEL_PHONE, HOTEL_PHONE_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Pet Policy",
  description:
    "Velkommen Inn welcomes dogs in designated pet-friendly rooms. Dogs only — no cats or other pets. Maximum 2 dogs per room. Pet fees apply. Service animals welcome at no charge.",
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
  return (
    <>
      {/* Header */}
      <section className="bg-[#1a2e4a] text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#c9a84c] text-sm tracking-[0.3em] uppercase mb-3 font-sans">
            Velkommen Inn · Clifton, Texas
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold font-serif mb-4">Pet Policy</h1>
          <p className="text-gray-300 max-w-2xl mx-auto font-sans">
            Dogs are welcome at Velkommen Inn in designated pet-friendly rooms.
            Please review our policy before your stay.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 space-y-14">

        {/* Quick summary */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6 text-center shadow-sm">
            <p className="text-3xl mb-2">🐕</p>
            <p className="font-bold text-[#1a2e4a] font-serif mb-1">Dogs Only</p>
            <p className="text-xs text-gray-500 font-sans">Cats and other pets are not permitted</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-6 text-center shadow-sm">
            <p className="text-3xl mb-2">2️⃣</p>
            <p className="font-bold text-[#1a2e4a] font-serif mb-1">Max 2 Dogs</p>
            <p className="text-xs text-gray-500 font-sans">Per room maximum</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-6 text-center shadow-sm">
            <p className="text-3xl mb-2">📞</p>
            <p className="font-bold text-[#1a2e4a] font-serif mb-1">Notify in Advance</p>
            <p className="text-xs text-gray-500 font-sans">Let us know before your arrival</p>
          </div>
        </div>

        {/* Pet fee table */}
        <div>
          <h2 className="text-2xl font-bold font-serif text-[#1a2e4a] mb-6">Pet Fee Schedule</h2>
          <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
            <table className="w-full text-sm font-sans">
              <thead className="bg-[#1a2e4a] text-white">
                <tr>
                  <th className="py-3 px-5 text-left font-semibold">Stay</th>
                  <th className="py-3 px-5 text-right font-semibold">Pet Fee</th>
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
          <ul className="space-y-3">
            {rules.map((rule) => (
              <li key={rule} className="flex items-start gap-3">
                <svg className="h-5 w-5 shrink-0 text-[#c9a84c] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            Service animals as defined by the Americans with Disabilities Act (ADA) are welcome at
            Velkommen Inn at no additional charge. Service animals are not subject to the pet fee
            schedule above. If you are traveling with a service animal, please let us know in advance
            so we can best accommodate your stay.
          </p>
        </div>

        {/* Contact to book */}
        <div className="bg-[#1a2e4a] text-white rounded-lg p-8 text-center">
          <h2 className="text-xl font-bold font-serif mb-3">Traveling with Your Dog?</h2>
          <p className="text-gray-300 text-sm font-sans mb-6">
            Please notify us before your arrival so we can assign a pet-friendly room.
            Book direct or call us directly.
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
            >
              Call {HOTEL_PHONE}
            </a>
          </div>
        </div>

      </div>
    </>
  );
}
