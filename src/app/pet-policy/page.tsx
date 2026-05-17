import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import CTASection from "@/components/CTASection";
import { breadcrumbSchema } from "@/lib/schema";
import { HOTEL_PHONE } from "@/lib/constants";
import { petFees, petRules } from "@/data/policies";
import { pageSeo } from "@/data/seo";

export const metadata: Metadata = {
  title: pageSeo.petPolicy.title,
  description: pageSeo.petPolicy.description,
  alternates: { canonical: pageSeo.petPolicy.canonical },
  openGraph: pageSeo.petPolicy.openGraph,
};

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
            <div role="img" aria-label="Dog icon" className="text-3xl mb-2">🐕</div>
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
            {petRules.map((rule) => (
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

        <CTASection
          heading="Traveling with Your Dog to Clifton, TX?"
          subtext="Please notify us before your arrival so we can assign a pet-friendly room. Book direct or call our 24-hour front desk."
          bookLabel="Book Direct"
          phoneLabel={`Call ${HOTEL_PHONE}`}
        />

      </div>
    </>
  );
}
