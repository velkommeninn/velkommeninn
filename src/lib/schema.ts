import { SITE_URL, BOOKING_URL, HOTEL_PHONE } from "./constants";

const BASE = {
  name: "Velkommen Inn",
  url: SITE_URL,
  telephone: HOTEL_PHONE,
  address: {
    "@type": "PostalAddress",
    streetAddress: "1215 N Avenue G",
    addressLocality: "Clifton",
    addressRegion: "TX",
    postalCode: "76634",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 31.7802,
    longitude: -97.5789,
  },
  hasMap: "https://maps.google.com/?q=1215+N+Avenue+G,+Clifton,+TX+76634",
  image: `${SITE_URL}/og-image.jpg`,
} as const;

const AMENITY_FEATURES = [
  { "@type": "LocationFeatureSpecification", name: "Free Wi-Fi", value: true },
  { "@type": "LocationFeatureSpecification", name: "Free Parking", value: true },
  { "@type": "LocationFeatureSpecification", name: "Outdoor Swimming Pool", value: true },
  { "@type": "LocationFeatureSpecification", name: "Fitness Center", value: true },
  { "@type": "LocationFeatureSpecification", name: "Business Center", value: true },
  { "@type": "LocationFeatureSpecification", name: "Complimentary Breakfast", value: true },
  { "@type": "LocationFeatureSpecification", name: "Guest Laundry", value: true },
  { "@type": "LocationFeatureSpecification", name: "EV Charging", value: true },
  { "@type": "LocationFeatureSpecification", name: "Pet Friendly", value: true },
  { "@type": "LocationFeatureSpecification", name: "Non-Smoking Property", value: true },
  { "@type": "LocationFeatureSpecification", name: "24-Hour Front Desk", value: true },
  { "@type": "LocationFeatureSpecification", name: "Indoor Corridor Access", value: true },
];

export function hotelSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Hotel",
    ...BASE,
    description:
      "Velkommen Inn is a professionally managed, independently operated hotel in Clifton, TX — the Norwegian Capital of Texas. Offering complimentary breakfast, free parking, free Wi-Fi, an outdoor pool, and pet-friendly rooms.",
    checkinTime: "14:00",
    checkoutTime: "11:00",
    petsAllowed: true,
    amenityFeature: AMENITY_FEATURES,
    makesOffer: {
      "@type": "Offer",
      url: BOOKING_URL,
      name: "Direct Room Reservation",
    },
    numberOfRooms: { "@type": "QuantitativeValue", value: "available" },
    starRating: undefined,
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    ...BASE,
    description:
      "Hotel in Clifton, TX serving travelers visiting Bosque County, Lake Whitney, Meridian State Park, and the surrounding Central Texas area.",
    openingHours: "Mo-Su 00:00-23:59",
    priceRange: "$$",
    paymentAccepted: "Cash, Credit Card",
    currenciesAccepted: "USD",
    areaServed: [
      { "@type": "City", name: "Clifton", containedInPlace: { "@type": "AdministrativeArea", name: "Bosque County, TX" } },
      { "@type": "Place", name: "Lake Whitney, TX" },
      { "@type": "Park", name: "Meridian State Park, TX" },
    ],
  };
}

export function breadcrumbSchema(
  crumbs: { name: string; href: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      ...crumbs.map((c, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: c.name,
        item: `${SITE_URL}${c.href}`,
      })),
    ],
  };
}

export function faqPageSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}
