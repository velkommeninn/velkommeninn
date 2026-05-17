// To update this content later, edit this file.
// Update page titles, meta descriptions, and Open Graph data here.
// Each key corresponds to a page route.

import { SITE_URL } from "@/data/site";

export interface PageSeoData {
  title: string;
  description: string;
  canonical: string;
  openGraph: {
    title: string;
    description: string;
    url: string;
  };
}

export const pageSeo: Record<string, PageSeoData> = {
  home: {
    title: "Velkommen Inn | Official Website | Hotel in Clifton, TX",
    description:
      "Welcome to Velkommen Inn — official website for this hotel in Clifton, TX. Norwegian Capital of Texas. Complimentary breakfast, free parking, pet-friendly, book direct hotel Clifton TX.",
    canonical: SITE_URL,
    openGraph: {
      title: "Velkommen Inn | Official Website | Hotel in Clifton, TX",
      description:
        "Velkommen Inn Clifton TX — complimentary breakfast, free Wi-Fi, free parking, outdoor pool, dog-friendly rooms. Book direct at the Norwegian Capital of Texas.",
      url: SITE_URL,
    },
  },
  rooms: {
    title: "Guest Rooms | Velkommen Inn Clifton TX",
    description:
      "Velkommen Inn Clifton TX offers Queen and King rooms, including ADA accessible options. Every room includes free Wi-Fi, mini fridge, microwave, and Smart DirecTV. Book direct.",
    canonical: `${SITE_URL}/rooms`,
    openGraph: {
      title: "Guest Rooms | Velkommen Inn – Hotel in Clifton, TX",
      description:
        "View room types at Velkommen Inn, a hotel in Clifton TX. 2 Queen, 1 King, and ADA accessible rooms — all with free Wi-Fi, mini fridge, microwave, and Smart DirecTV.",
      url: `${SITE_URL}/rooms`,
    },
  },
  amenities: {
    title: "Amenities | Hotel in Clifton TX | Velkommen Inn",
    description:
      "Velkommen Inn amenities in Clifton, TX include complimentary breakfast daily, free Wi-Fi, outdoor seasonal pool, fitness center, business center, guest laundry, free parking, and Level 2 EV charging.",
    canonical: `${SITE_URL}/amenities`,
    openGraph: {
      title: "Amenities | Velkommen Inn – Hotel in Clifton, TX",
      description:
        "Free breakfast, Wi-Fi, parking, outdoor pool, fitness center, business center, guest laundry, and EV charging at Velkommen Inn in Clifton, TX.",
      url: `${SITE_URL}/amenities`,
    },
  },
  petPolicy: {
    title: "Pet Policy | Dog Friendly Hotel in Clifton TX | Velkommen Inn",
    description:
      "Velkommen Inn is a dog friendly hotel in Clifton, TX. Dogs welcome in designated rooms — max 2 dogs, pet fees from $35. Cats and other pets not permitted. ADA service animals at no charge.",
    canonical: `${SITE_URL}/pet-policy`,
    openGraph: {
      title: "Pet Policy | Dog Friendly Hotel in Clifton TX | Velkommen Inn",
      description:
        "Traveling with your dog to Clifton TX? Velkommen Inn welcomes dogs in designated pet-friendly rooms. Max 2 dogs. Pet fees from $35. Notify hotel in advance.",
      url: `${SITE_URL}/pet-policy`,
    },
  },
  groupStays: {
    title: "Group Stays | Group Hotel Rooms in Clifton TX | Velkommen Inn",
    description:
      "Planning a group trip to Clifton, Lake Whitney, or Bosque County? Velkommen Inn offers group hotel rooms in Clifton TX. Call (254) 675-8999 to discuss room blocks.",
    canonical: `${SITE_URL}/group-stays`,
    openGraph: {
      title: "Group Hotel Rooms in Clifton TX | Velkommen Inn",
      description:
        "Velkommen Inn accommodates groups visiting Clifton TX, Lake Whitney, Meridian State Park, and Bosque County. Multiple room types, free breakfast, free parking. Call us to plan.",
      url: `${SITE_URL}/group-stays`,
    },
  },
  localAttractions: {
    title: "Local Attractions | Hotel Near Bosque Museum & Lake Whitney | Velkommen Inn",
    description:
      "Stay at Velkommen Inn — a hotel near the Bosque Museum, Bosque Arts Center, Lake Whitney, Meridian State Park, and the Norwegian Capital of Texas in Clifton, TX.",
    canonical: `${SITE_URL}/local-attractions`,
    openGraph: {
      title: "Local Attractions Near Velkommen Inn | Clifton, TX Hotel",
      description:
        "Velkommen Inn is a hotel near the Bosque Museum, Lake Whitney State Park, Meridian State Park, Bosque Arts Center, and historic Norse sites in Clifton, TX.",
      url: `${SITE_URL}/local-attractions`,
    },
  },
  businessTravel: {
    title: "Business Travel | Business Hotel in Clifton TX | Velkommen Inn",
    description:
      "Velkommen Inn is a business hotel in Clifton TX with free Wi-Fi, business center, free parking, Level 2 EV charging, and 24-hour front desk. Book direct hotel Clifton TX.",
    canonical: `${SITE_URL}/business-travel`,
    openGraph: {
      title: "Business Hotel in Clifton TX | Velkommen Inn",
      description:
        "Reliable Wi-Fi, business center, free parking, indoor corridor access, and 24-hour front desk at Velkommen Inn — the business hotel in Clifton, TX.",
      url: `${SITE_URL}/business-travel`,
    },
  },
  faq: {
    title: "FAQ | Velkommen Inn Clifton TX | Hotel Questions Answered",
    description:
      "Frequently asked questions about Velkommen Inn in Clifton, TX — check-in times, complimentary breakfast, free parking, pet policy, smoking policy, payment, and how to book direct.",
    canonical: `${SITE_URL}/faq`,
    openGraph: {
      title: "FAQ | Velkommen Inn – Hotel in Clifton, TX",
      description:
        "Common questions about Velkommen Inn Clifton TX — check-in, breakfast, Wi-Fi, parking, EV charging, pets, service animals, payment, and booking direct.",
      url: `${SITE_URL}/faq`,
    },
  },
  policies: {
    title: "Hotel Policies | Velkommen Inn Clifton TX",
    description:
      "Velkommen Inn hotel policies — check-in at 2:00 PM, check-out at 11:00 AM, 100% non-smoking property, payment collected at check-in, $100 refundable cash deposit. Clifton, TX.",
    canonical: `${SITE_URL}/policies`,
    openGraph: {
      title: "Hotel Policies | Velkommen Inn – Clifton, TX",
      description:
        "Check-in 2 PM, check-out 11 AM, 100% non-smoking, payment at check-in, $100 refundable cash deposit — full policies for Velkommen Inn in Clifton, TX.",
      url: `${SITE_URL}/policies`,
    },
  },
  contact: {
    title: "Contact | Velkommen Inn | Hotel in Clifton TX | (254) 675-8999",
    description:
      "Contact Velkommen Inn in Clifton, TX. Front desk available 24 hours a day. Call (254) 675-8999 or book direct online. Serving Clifton, Bosque County, Lake Whitney, and Central Texas.",
    canonical: `${SITE_URL}/contact`,
    openGraph: {
      title: "Contact Velkommen Inn | Hotel in Clifton, TX | (254) 675-8999",
      description:
        "Call (254) 675-8999 — front desk available 24 hours. Velkommen Inn at 1215 N Avenue G, Clifton TX 76634. Book direct hotel Clifton TX.",
      url: `${SITE_URL}/contact`,
    },
  },
  officialBookingNotice: {
    title: "Official Booking Notice | Velkommen Inn | Clifton, TX",
    description:
      "Official notice from Velkommen Inn in Clifton, TX — book direct at velkommeninncliftontx.com or call (254) 675-8999 to avoid third-party fees and ensure accurate hotel information.",
    canonical: `${SITE_URL}/official-booking-notice`,
    openGraph: {
      title: "Official Booking Notice | Velkommen Inn – Clifton, TX",
      description:
        "Book direct at Velkommen Inn official website or call (254) 675-8999. Avoid third-party booking fees and inaccurate hotel policies.",
      url: `${SITE_URL}/official-booking-notice`,
    },
  },
};
