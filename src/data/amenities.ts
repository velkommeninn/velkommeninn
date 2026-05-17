// To update this content later, edit this file.
// Edit amenity groups, business travel features, and group amenities here.

import { BREAKFAST_HOURS } from "@/data/site";

export interface AmenityItem {
  title: string;
  detail: string;
}

export interface AmenityGroup {
  heading: string;
  items: AmenityItem[];
}

export const amenityGroups: AmenityGroup[] = [
  {
    heading: "Food & Beverage",
    items: [
      {
        title: "Complimentary Breakfast",
        detail: `Start your morning right with a complimentary breakfast served daily from ${BREAKFAST_HOURS}. Included with your stay at no additional charge.`,
      },
    ],
  },
  {
    heading: "Connectivity",
    items: [
      {
        title: "Free High-Speed Wi-Fi",
        detail:
          "Complimentary wireless internet is available throughout the property — in your room and all common areas.",
      },
    ],
  },
  {
    heading: "Recreation",
    items: [
      {
        title: "Outdoor Seasonal Pool",
        detail:
          "Relax and unwind in our outdoor pool, available seasonally. A great way to end a day exploring Clifton and Bosque County.",
      },
      {
        title: "Fitness Center",
        detail: "Stay on track with your fitness routine in our on-site fitness center.",
      },
    ],
  },
  {
    heading: "Business",
    items: [
      {
        title: "Business Center",
        detail:
          "On-site business center available for printing, copying, and work tasks — ideal for business travelers in the Clifton, TX area.",
      },
    ],
  },
  {
    heading: "Guest Services",
    items: [
      {
        title: "24-Hour Front Desk",
        detail:
          "Our front desk is staffed around the clock. Whether you arrive early or late, we're here to help.",
      },
      {
        title: "Guest Laundry",
        detail:
          "On-site guest laundry facilities are available for your convenience during your stay.",
      },
      {
        title: "Indoor Corridor Access",
        detail:
          "All guest rooms are accessible via secure, climate-controlled interior hallways.",
      },
    ],
  },
  {
    heading: "Parking & Transportation",
    items: [
      {
        title: "Free On-Site Parking",
        detail:
          "Complimentary parking is available on property for all guests. No daily parking fees.",
      },
      {
        title: "Level 2 EV Charging",
        detail: "Electric vehicle charging stations are available on-site for an additional fee.",
      },
    ],
  },
];

export const businessTravelFeatures: AmenityItem[] = [
  {
    title: "Free High-Speed Wi-Fi",
    detail:
      "Complimentary Wi-Fi throughout the property — in your room and all common areas — so you stay connected.",
  },
  {
    title: "Business Center",
    detail: "On-site business center available for printing, copying, and other work tasks.",
  },
  {
    title: "Free On-Site Parking",
    detail: "Ample free parking for all guests. No daily parking fees.",
  },
  {
    title: "Level 2 EV Charging",
    detail: "Electric vehicle charging available on-site for an additional fee.",
  },
  {
    title: "24-Hour Front Desk",
    detail:
      "Our front desk is staffed around the clock, accommodating early arrivals, late departures, and any requests during your stay.",
  },
  {
    title: "Indoor Corridor Access",
    detail:
      "All rooms accessible via secure, climate-controlled interior hallways — no outdoor walkways to navigate.",
  },
  {
    title: "Complimentary Breakfast",
    detail: `Start your workday with a complimentary breakfast served daily from ${BREAKFAST_HOURS}.`,
  },
  {
    title: "In-Room Work Amenities",
    detail:
      "Every room includes climate control, flat-screen TV, mini fridge, microwave, and coffee maker.",
  },
];

export interface GroupAmenity {
  label: string;
  detail: string;
}

export const groupAmenities: GroupAmenity[] = [
  { label: "Complimentary Breakfast", detail: `Daily ${BREAKFAST_HOURS}` },
  { label: "Free On-Site Parking", detail: "Ample parking for vehicles and trailers" },
  { label: "Level 2 EV Charging", detail: "Available for an additional fee" },
  { label: "Free Wi-Fi", detail: "Throughout the property" },
  { label: "Business Center", detail: "For group planning and printing needs" },
  { label: "Guest Laundry", detail: "On-site laundry facilities" },
  { label: "24-Hour Front Desk", detail: "Always available to assist your group" },
  { label: "Indoor Corridor Access", detail: "Secure, climate-controlled hallways" },
];
