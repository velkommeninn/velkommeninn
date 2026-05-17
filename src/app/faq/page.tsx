import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import FAQSection from "@/components/FAQSection";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";
import { BOOKING_URL, HOTEL_PHONE, HOTEL_PHONE_HREF } from "@/lib/constants";
import { faqs } from "@/data/faqs";
import { pageSeo } from "@/data/seo";

export const metadata: Metadata = {
  title: pageSeo.faq.title,
  description: pageSeo.faq.description,
  alternates: { canonical: pageSeo.faq.canonical },
  openGraph: pageSeo.faq.openGraph,
};

export default function FAQPage() {
  const crumbs = [{ name: "FAQ", href: "/faq" }];

  return (
    <>
      <JsonLd schema={[breadcrumbSchema(crumbs), faqPageSchema(faqs)]} />

      {/* Header */}
      <section className="bg-[#1a2e4a] text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-sm text-gray-400 font-sans">
              <li><Link href="/" className="hover:text-[#c9a84c] transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-gray-200">FAQ</li>
            </ol>
          </nav>
          <div className="text-center">
            <p className="text-[#c9a84c] text-sm tracking-[0.3em] uppercase mb-3 font-sans">
              Velkommen Inn · Clifton, Texas
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold font-serif mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto font-sans">
              Everything you need to know about staying at our hotel in Clifton, TX.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <FAQSection faqs={faqs} />

        {/* Internal links */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm font-sans">
          <Link href="/policies" className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow text-center">
            <p className="font-bold text-[#1a2e4a] font-serif mb-1">Hotel Policies</p>
            <p className="text-xs text-gray-500">Full check-in, payment & smoking policies</p>
          </Link>
          <Link href="/pet-policy" className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow text-center">
            <p className="font-bold text-[#1a2e4a] font-serif mb-1">Pet Policy</p>
            <p className="text-xs text-gray-500">Dog friendly hotel in Clifton TX</p>
          </Link>
          <Link href="/amenities" className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow text-center">
            <p className="font-bold text-[#1a2e4a] font-serif mb-1">Amenities</p>
            <p className="text-xs text-gray-500">Pool, breakfast, Wi-Fi & more</p>
          </Link>
        </div>

        {/* CTA */}
        <div className="mt-14 bg-[#1a2e4a] text-white rounded-lg p-8 text-center">
          <h2 className="text-xl font-bold font-serif mb-3">Still Have Questions?</h2>
          <p className="text-gray-300 text-sm font-sans mb-6">
            Our front desk is available 24 hours a day. Call us or book direct online.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={HOTEL_PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 rounded bg-[#c9a84c] px-6 py-2.5 text-sm font-semibold text-[#1a2e4a] hover:bg-[#b8943d] transition-colors"
              aria-label={`Call Velkommen Inn at ${HOTEL_PHONE}`}
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.01l-2.21 2.21z" />
              </svg>
              {HOTEL_PHONE}
            </a>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded border border-white/30 px-6 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors font-sans"
            >
              Book Direct
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
