import type { Metadata } from "next";
import Link from "next/link";
import { BOOKING_URL, HOTEL_PHONE, HOTEL_PHONE_HREF, CHECK_IN, CHECK_OUT, BREAKFAST_HOURS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Velkommen Inn in Clifton, Texas — check-in times, breakfast, parking, pet policy, smoking policy, payment, and more.",
};

const faqs = [
  {
    question: "What time is check-in and check-out?",
    answer: `Check-in is at ${CHECK_IN}. Check-out is at ${CHECK_OUT}. If you need to make special arrangements, please contact our front desk in advance. The front desk is available 24 hours a day.`,
  },
  {
    question: "Is breakfast included?",
    answer: `Yes — complimentary breakfast is served daily from ${BREAKFAST_HOURS}. It is included with your stay at no additional charge.`,
  },
  {
    question: "Is Wi-Fi available?",
    answer:
      "Yes. Free Wi-Fi is available throughout the property, including in all guest rooms and common areas.",
  },
  {
    question: "Is parking available?",
    answer:
      "Yes. Free on-site parking is available for all guests. Level 2 EV charging is also available on-site for an additional fee.",
  },
  {
    question: "Is Velkommen Inn a non-smoking hotel?",
    answer:
      "Yes. Velkommen Inn is a 100% non-smoking property. Smoking is permitted outside only, at least 50 feet away from the building. Smoking violations may result in additional charges.",
  },
  {
    question: "Is the front desk available 24 hours?",
    answer:
      "Yes. Our front desk is staffed 24 hours a day to assist with check-in, check-out, and any questions during your stay.",
  },
  {
    question: "What room types are available?",
    answer:
      "We offer four room types: 2 Queen Size Beds, 1 King Size Bed, 1 King Size Bed – ADA Accessible, and 2 Queen Size Beds – ADA Accessible. All rooms include free Wi-Fi, mini fridge, microwave, coffee maker, flat-screen TV with Smart DirecTV, climate control, and a private en-suite bathroom.",
  },
  {
    question: "What amenities does the hotel offer?",
    answer: `Velkommen Inn offers complimentary breakfast (${BREAKFAST_HOURS} daily), free Wi-Fi, an outdoor seasonal pool, a fitness center, a business center, guest laundry, indoor corridor access, free on-site parking, and Level 2 EV charging (fee applies).`,
  },
  {
    question: "Are pets allowed?",
    answer:
      "Dogs are welcome in designated pet-friendly rooms. Cats and other pets are not permitted. Guests must notify the hotel in advance if bringing a dog. The maximum is 2 dogs per room, and pet fees apply. Service animals as defined by the ADA are welcome at no additional charge.",
  },
  {
    question: "What are the pet fees?",
    answer:
      "Pet fees are: 1 dog for 1 night — $35; 2 dogs for 1 night — $50; 1 dog for 2 nights — $50; 2 dogs for 2 nights — $60. See our Pet Policy page for full details.",
  },
  {
    question: "Do you accept service animals?",
    answer:
      "Yes. Service animals as defined by the Americans with Disabilities Act (ADA) are welcome at Velkommen Inn at no additional charge.",
  },
  {
    question: "How is payment handled at check-in?",
    answer:
      "Room charges are collected at check-in unless approved arrangements have been made in advance. Cash guests may pay at check-in, but a $100 refundable deposit is required. The deposit is refunded at checkout after room inspection, provided there are no damages, missing items, smoking violations, or additional charges.",
  },
  {
    question: "Is a deposit required for cash payments?",
    answer:
      "Yes. Cash guests are required to provide a $100 refundable deposit at check-in. The deposit is returned at checkout after a room inspection, as long as there are no damages, missing items, smoking violations, or other additional charges.",
  },
  {
    question: "Where is Velkommen Inn located?",
    answer:
      "Velkommen Inn is located at 1215 N Avenue G in Clifton, Texas — the Norwegian Capital of Texas. We proudly serve travelers visiting Clifton, Bosque County, Lake Whitney, Meridian State Park, and the surrounding Central Texas area.",
  },
  {
    question: "What is near the hotel?",
    answer:
      "Clifton is home to the Bosque Museum, Bosque Arts Center, Clifton Classic Chassis Auto Museum, and the historic Norse community. Nearby destinations include Lake Whitney State Park, Meridian State Park, the Bosque River, Lake Aquilla, and the charming streets of downtown Clifton. The Bosque County Courthouse is located in Meridian, Texas.",
  },
  {
    question: "How do I book a room?",
    answer:
      "You can book directly through our online reservation system or by calling us at (254) 675-8999. Booking direct gives you the best available direct rate, accurate hotel policies, and direct support from our team.",
  },
];

export default function FAQPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#1a2e4a] text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#c9a84c] text-sm tracking-[0.3em] uppercase mb-3 font-sans">
            Velkommen Inn · Clifton, Texas
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold font-serif mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto font-sans">
            Everything you need to know before your stay at Velkommen Inn.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-5">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-lg border border-gray-100 shadow-sm p-6">
              <h2 className="text-base font-bold font-serif text-[#1a2e4a] mb-3">
                {faq.question}
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed font-sans">{faq.answer}</p>
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div className="mt-14 bg-[#1a2e4a] text-white rounded-lg p-8 text-center">
          <h2 className="text-xl font-bold font-serif mb-3">Still Have Questions?</h2>
          <p className="text-gray-300 text-sm font-sans mb-6">
            Our front desk is available 24 hours a day. Call us or book direct online.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={HOTEL_PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 rounded bg-[#c9a84c] px-6 py-2.5 text-sm font-semibold text-[#1a2e4a] hover:bg-[#b8943d] transition-colors"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
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
