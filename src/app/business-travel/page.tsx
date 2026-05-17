import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import AmenityCard from "@/components/AmenityCard";
import CTASection from "@/components/CTASection";
import { breadcrumbSchema } from "@/lib/schema";
import { CHECK_IN, CHECK_OUT, HOTEL_PHONE } from "@/lib/constants";
import { businessTravelFeatures } from "@/data/amenities";
import { pageSeo } from "@/data/seo";

export const metadata: Metadata = {
  title: pageSeo.businessTravel.title,
  description: pageSeo.businessTravel.description,
  alternates: { canonical: pageSeo.businessTravel.canonical },
  openGraph: pageSeo.businessTravel.openGraph,
};

export default function BusinessTravelPage() {
  const crumbs = [{ name: "Business Travel", href: "/business-travel" }];

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
              <li className="text-gray-200">Business Travel</li>
            </ol>
          </nav>
          <div className="text-center">
            <p className="text-[#c9a84c] text-sm tracking-[0.3em] uppercase mb-3 font-sans">
              Business Hotel · Clifton, Texas
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold font-serif mb-4">Business Travel</h1>
            <p className="text-gray-300 max-w-2xl mx-auto font-sans">
              A comfortable, reliable business hotel in Clifton TX for professionals working in
              Clifton, Bosque County, and the surrounding Central Texas area.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 space-y-14">

        {/* Intro */}
        <p className="text-gray-700 font-sans leading-relaxed text-base">
          Velkommen Inn is a professionally managed, independently operated hotel in Clifton,
          Texas. Whether you&apos;re in the area for a project, a client visit, or an extended
          work stay, we offer the amenities and consistency that business travelers need at a
          book direct hotel Clifton TX.
        </p>

        {/* Features */}
        <div>
          <h2 className="text-2xl font-bold font-serif text-[#1a2e4a] mb-6">
            Built for Business Travelers in Clifton, TX
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {businessTravelFeatures.map((item) => (
              <AmenityCard key={item.title} item={item} />
            ))}
          </div>
        </div>

        {/* Key info strip */}
        <div>
          <h2 className="text-xl font-bold font-serif text-[#1a2e4a] mb-4">Quick Reference</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Check-In", value: CHECK_IN },
              { label: "Check-Out", value: CHECK_OUT },
              { label: "Front Desk", value: "24 Hours" },
              { label: "Parking", value: "Free" },
            ].map((item) => (
              <div key={item.label} className="bg-[#f9f5ef] rounded-lg p-4 text-center border border-gray-100">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 font-sans mb-1">{item.label}</p>
                <p className="text-sm font-bold text-[#1a2e4a] font-sans">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Payment note */}
        <div className="bg-[#f9f5ef] border border-gray-200 rounded-lg p-6">
          <h2 className="text-lg font-bold font-serif text-[#1a2e4a] mb-3">Payment & Check-In</h2>
          <p className="text-sm text-gray-700 font-sans leading-relaxed">
            Room charges are collected at check-in. If your company or project requires advance
            payment arrangements, please contact us before your arrival so we can make the
            appropriate arrangements. Our front desk is available 24 hours a day.
          </p>
        </div>

        {/* Internal links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm font-sans">
          <Link href="/rooms" className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow text-center">
            <p className="font-bold text-[#1a2e4a] font-serif mb-1">Guest Rooms</p>
            <p className="text-xs text-gray-500">Queen, King & ADA accessible</p>
          </Link>
          <Link href="/amenities" className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow text-center">
            <p className="font-bold text-[#1a2e4a] font-serif mb-1">All Amenities</p>
            <p className="text-xs text-gray-500">Pool, laundry, EV charging & more</p>
          </Link>
          <Link href="/policies" className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow text-center">
            <p className="font-bold text-[#1a2e4a] font-serif mb-1">Hotel Policies</p>
            <p className="text-xs text-gray-500">Check-in, payment & smoking policies</p>
          </Link>
        </div>

        <CTASection
          heading="Book Your Business Stay in Clifton, TX"
          subtext="Book direct for the best available direct rate and direct support from the hotel."
          bookLabel="Book Direct"
          phoneLabel={`Call ${HOTEL_PHONE}`}
        />

      </div>
    </>
  );
}
