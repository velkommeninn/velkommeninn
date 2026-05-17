import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import GroupInquiryForm from "@/components/GroupInquiryForm";
import CTASection from "@/components/CTASection";
import { breadcrumbSchema } from "@/lib/schema";
import { HOTEL_PHONE, HOTEL_PHONE_HREF } from "@/lib/constants";
import { groupAmenities } from "@/data/amenities";
import { roomTypeNames } from "@/data/rooms";
import { pageSeo } from "@/data/seo";

export const metadata: Metadata = {
  title: pageSeo.groupStays.title,
  description: pageSeo.groupStays.description,
  alternates: { canonical: pageSeo.groupStays.canonical },
  openGraph: pageSeo.groupStays.openGraph,
};

export default function GroupStaysPage() {
  const crumbs = [{ name: "Group Stays", href: "/group-stays" }];

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
              <li className="text-gray-200">Group Stays</li>
            </ol>
          </nav>
          <div className="text-center">
            <p className="text-[#c9a84c] text-sm tracking-[0.3em] uppercase mb-3 font-sans">
              Group Hotel Rooms · Clifton, Texas
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold font-serif mb-4">Group Stays</h1>
            <p className="text-gray-300 max-w-2xl mx-auto font-sans">
              Bringing a group to Clifton, Lake Whitney, or Bosque County? Velkommen Inn offers
              group hotel rooms in Clifton TX and is glad to help make your group stay smooth
              and comfortable.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 space-y-14">

        {/* Group CTA near top */}
        <div className="bg-[#c9a84c]/10 border border-[#c9a84c]/30 rounded-lg p-7">
          <h2 className="text-xl font-bold font-serif text-[#1a2e4a] mb-3">
            Planning a Group Stay in Clifton?
          </h2>
          <p className="text-sm text-gray-700 font-sans leading-relaxed mb-5">
            For group blocks, wedding parties, work crews, family gatherings, and event stays,
            please contact Velkommen Inn directly so we can confirm availability, room types,
            and current group options.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={HOTEL_PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 rounded bg-[#1a2e4a] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#142340] transition-colors"
              aria-label={`Call Velkommen Inn at ${HOTEL_PHONE}`}
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.01l-2.21 2.21z" />
              </svg>
              Call the Hotel
            </a>
            <a
              href="#group-inquiry"
              className="inline-flex items-center justify-center gap-2 rounded border border-[#1a2e4a] px-5 py-2.5 text-sm font-semibold text-[#1a2e4a] hover:bg-[#1a2e4a] hover:text-white transition-colors font-sans"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send Us an Inquiry
            </a>
          </div>
        </div>

        {/* Intro */}
        <div>
          <p className="text-gray-700 font-sans leading-relaxed text-base">
            Velkommen Inn is a professionally managed, independently operated hotel in Clifton,
            Texas — the Norwegian Capital of Texas. We proudly serve travelers visiting Clifton,
            Bosque County, Lake Whitney, Meridian State Park, and the surrounding Central Texas
            area. Whether you&apos;re organizing a family reunion, a work crew stay, a sports
            team trip, or any other group travel, we&apos;re here to help coordinate your visit.
          </p>
          <p className="text-gray-700 font-sans leading-relaxed text-base mt-4">
            For group reservations and room block arrangements, please contact us directly by
            phone or submit an inquiry below. Our front desk is available 24 hours a day.
          </p>
        </div>

        {/* What groups get */}
        <div>
          <h2 className="text-2xl font-bold font-serif text-[#1a2e4a] mb-6">
            What Your Group Can Expect
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {groupAmenities.map((item) => (
              <div key={item.label} className="flex items-start gap-3 bg-white rounded-lg border border-gray-100 p-4 shadow-sm">
                <svg className="h-5 w-5 shrink-0 text-[#c9a84c] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="text-sm font-semibold text-[#1a2e4a]">{item.label}</p>
                  <p className="text-xs text-gray-500 font-sans mt-0.5">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Room types */}
        <div className="bg-[#f9f5ef] border border-gray-200 rounded-lg p-6">
          <h2 className="text-xl font-bold font-serif text-[#1a2e4a] mb-3">Available Room Types</h2>
          <p className="text-sm text-gray-700 font-sans leading-relaxed mb-4">
            We offer multiple room configurations to accommodate different group needs:
          </p>
          <ul className="space-y-2 text-sm text-gray-700 font-sans">
            {roomTypeNames.map((r) => (
              <li key={r} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#c9a84c] shrink-0" aria-hidden="true" />
                {r}
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <Link href="/rooms" className="text-sm font-semibold text-[#c9a84c] hover:underline font-sans">
              View all room details →
            </Link>
          </div>
        </div>

        {/* Group Inquiry Form */}
        <div id="group-inquiry" className="scroll-mt-24">
          <h2 className="text-2xl font-bold font-serif text-[#1a2e4a] mb-6">
            Submit a Group Inquiry
          </h2>
          <GroupInquiryForm />
        </div>

        {/* Internal links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm font-sans">
          <Link href="/amenities" className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow text-center">
            <p className="font-bold text-[#1a2e4a] font-serif mb-1">Amenities</p>
            <p className="text-xs text-gray-500">Pool, breakfast, Wi-Fi & more</p>
          </Link>
          <Link href="/local-attractions" className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow text-center">
            <p className="font-bold text-[#1a2e4a] font-serif mb-1">Local Attractions</p>
            <p className="text-xs text-gray-500">Near Lake Whitney & Bosque Museum</p>
          </Link>
          <Link href="/contact" className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow text-center">
            <p className="font-bold text-[#1a2e4a] font-serif mb-1">Contact Us</p>
            <p className="text-xs text-gray-500">Front desk available 24 hours</p>
          </Link>
        </div>

        <CTASection
          heading="Plan Your Group Stay in Clifton, TX"
          subtext="Call us directly to discuss availability and group hotel room arrangements. Our front desk is available 24 hours a day."
          bookLabel="Book Rooms Online"
          phoneLabel={HOTEL_PHONE}
        />

      </div>
    </>
  );
}
