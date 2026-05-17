// To update this content later, edit this file.
// Add, remove, or edit FAQ entries here.
// To add: append a new { question, answer } object to the array.
// To remove: delete the object.

import { CHECK_IN, CHECK_OUT, BREAKFAST_HOURS } from "@/data/site";

export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: "What time is check-in and check-out at Velkommen Inn?",
    answer: `Check-in is at ${CHECK_IN}. Check-out is at ${CHECK_OUT}. If you need to make special arrangements, please contact our 24-hour front desk in advance at (254) 675-8999.`,
  },
  {
    question: "Is breakfast included with my stay?",
    answer: `Yes — complimentary breakfast is served daily from ${BREAKFAST_HOURS}. It is included with your stay at no additional charge.`,
  },
  {
    question: "Is free Wi-Fi available at Velkommen Inn?",
    answer:
      "Yes. Free high-speed Wi-Fi is available throughout the property, including in all guest rooms and common areas.",
  },
  {
    question: "Is parking available at the hotel?",
    answer:
      "Yes. Free on-site parking is available for all guests — no daily parking fees. Level 2 EV charging is also available on-site for an additional fee.",
  },
  {
    question: "Is Velkommen Inn a non-smoking hotel?",
    answer:
      "Yes. Velkommen Inn is a 100% non-smoking property. Smoking is permitted outside only, at least 50 feet away from the building. Smoking violations may result in additional charges.",
  },
  {
    question: "Is the front desk available 24 hours?",
    answer:
      "Yes. Our front desk is staffed 24 hours a day to assist with check-in, check-out, and any questions during your stay at our hotel in Clifton, TX.",
  },
  {
    question: "What room types are available at Velkommen Inn?",
    answer:
      "We offer four room types: 2 Queen Size Beds, 1 King Size Bed, 1 King Size Bed – ADA Accessible, and 2 Queen Size Beds – ADA Accessible. All rooms include free Wi-Fi, mini fridge, microwave, coffee maker, flat-screen TV with Smart DirecTV, climate control, and a private en-suite bathroom.",
  },
  {
    question: "What amenities does Velkommen Inn offer?",
    answer: `Velkommen Inn offers complimentary breakfast (${BREAKFAST_HOURS} daily), free Wi-Fi, an outdoor seasonal pool, a fitness center, a business center, guest laundry, indoor corridor access, free on-site parking, and Level 2 EV charging (fee applies). Our front desk is available 24 hours a day.`,
  },
  {
    question: "Is Velkommen Inn a dog friendly hotel?",
    answer:
      "Yes, Velkommen Inn is a dog friendly hotel in Clifton, TX. Dogs are allowed only in designated pet-friendly rooms. Cats and other pets are not permitted. Guests must notify the hotel in advance if bringing a dog. The maximum is 2 dogs per room, and pet fees apply.",
  },
  {
    question: "What are the pet fees at Velkommen Inn?",
    answer:
      "Pet fees are: 1 dog for 1 night — $35; 2 dogs for 1 night — $50; 1 dog for 2 nights — $50; 2 dogs for 2 nights — $60. Pet fees are collected at check-in. See our Pet Policy page for full details.",
  },
  {
    question: "Are service animals welcome?",
    answer:
      "Yes. Service animals as defined by the Americans with Disabilities Act (ADA) are welcome at Velkommen Inn at no additional charge. They are not subject to pet fees.",
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
      "Velkommen Inn is located at 1215 N Avenue G in Clifton, Texas 76634 — proudly known as the Norwegian Capital of Texas. We serve travelers visiting Clifton, Bosque County, Lake Whitney, Meridian State Park, and the surrounding Central Texas area.",
  },
  {
    question: "What attractions are near Velkommen Inn?",
    answer:
      "Velkommen Inn is a hotel near the Bosque Museum, the Bosque Arts Center, the Clifton Classic Chassis Auto Museum, CLIFTEX Theatre, and the historic Norse community. Nearby outdoor destinations include Lake Whitney State Park, Meridian State Park, the Bosque River, and the Whitney Lake Dam. The Bosque County Courthouse is located in Meridian, Texas — the county seat.",
  },
  {
    question: "How do I book a room at Velkommen Inn?",
    answer:
      "You can book directly through our official online reservation system on this website or by calling us at (254) 675-8999. Booking direct gives you the best available direct rate, accurate hotel policies, and direct support from our team.",
  },
];
