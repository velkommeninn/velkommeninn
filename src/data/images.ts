// To update this content later, edit this file.
// All hotel images are catalogued here with metadata.
//
// HOW TO REPLACE A PHOTO:
//   Keep the exact same filename in public/images/<category>/ and overwrite it.
//   No code changes needed — the src is already set.
//
// HOW TO ADD A NEW PHOTO:
//   1. Place the file in public/images/<category>/
//   2. Add a new entry to hotelImages below with the correct src, alt, and category.
//   3. Reference the image by id in the relevant page or component.

export type ImageCategory =
  | "exterior"
  | "rooms"
  | "amenities"
  | "attractions"
  | "lobby"
  | "breakfast"
  | "pool"
  | "fitness";

export interface HotelImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  category: ImageCategory;
  page?: string;
  width: number;
  height: number;
}

export const hotelImages: HotelImage[] = [
  // ── Exterior ──────────────────────────────────────────────────────────────
  {
    id: "exterior-front",
    src: "/images/exterior/front.jpg",
    alt: "Velkommen Inn exterior — hotel in Clifton, TX",
    caption: "Velkommen Inn at 1215 N Avenue G, Clifton, TX",
    category: "exterior",
    page: "home",
    width: 1200,
    height: 800,
  },
  // ── Lobby ─────────────────────────────────────────────────────────────────
  {
    id: "lobby-main",
    src: "/images/lobby/lobby.jpg",
    alt: "Lobby at Velkommen Inn, Clifton TX",
    caption: "Velkommen Inn lobby",
    category: "lobby",
    page: "home",
    width: 800,
    height: 533,
  },
  // ── Rooms ─────────────────────────────────────────────────────────────────
  {
    id: "room-double-queen",
    src: "/images/rooms/double-queen.jpg",
    alt: "2 Queen Size Beds room at Velkommen Inn, Clifton TX",
    caption: "2 Queen Size Beds room",
    category: "rooms",
    page: "rooms",
    width: 800,
    height: 533,
  },
  {
    id: "room-king",
    src: "/images/rooms/king.jpg",
    alt: "1 King Size Bed room at Velkommen Inn, Clifton TX",
    caption: "1 King Size Bed room",
    category: "rooms",
    page: "rooms",
    width: 800,
    height: 533,
  },
  {
    id: "room-king-ada",
    src: "/images/rooms/king-ada.jpg",
    alt: "ADA Accessible King room at Velkommen Inn, Clifton TX",
    caption: "1 King Size Bed – ADA Accessible",
    category: "rooms",
    page: "rooms",
    width: 800,
    height: 533,
  },
  {
    id: "room-double-queen-ada",
    src: "/images/rooms/double-queen-ada.jpg",
    alt: "ADA Accessible 2 Queen room at Velkommen Inn, Clifton TX",
    caption: "2 Queen Size Beds – ADA Accessible",
    category: "rooms",
    page: "rooms",
    width: 800,
    height: 533,
  },
  // ── Breakfast ─────────────────────────────────────────────────────────────
  {
    id: "breakfast-spread",
    src: "/images/breakfast/breakfast-spread.jpg",
    alt: "Complimentary breakfast at Velkommen Inn, Clifton TX",
    caption: "Complimentary breakfast served daily 6:00 AM – 9:00 AM",
    category: "breakfast",
    page: "amenities",
    width: 800,
    height: 533,
  },
  // ── Pool ──────────────────────────────────────────────────────────────────
  {
    id: "pool-outdoor",
    src: "/images/pool/outdoor-pool.jpg",
    alt: "Outdoor seasonal pool at Velkommen Inn, Clifton TX",
    caption: "Outdoor seasonal pool",
    category: "pool",
    page: "amenities",
    width: 800,
    height: 533,
  },
  // ── Fitness ───────────────────────────────────────────────────────────────
  {
    id: "fitness-center",
    src: "/images/fitness/fitness-center.jpg",
    alt: "Fitness center at Velkommen Inn, Clifton TX",
    caption: "On-site fitness center",
    category: "fitness",
    page: "amenities",
    width: 800,
    height: 533,
  },
];

export function getImagesByCategory(category: ImageCategory): HotelImage[] {
  return hotelImages.filter((img) => img.category === category);
}

export function getImagesByPage(page: string): HotelImage[] {
  return hotelImages.filter((img) => img.page === page);
}

export function getImageById(id: string): HotelImage | undefined {
  return hotelImages.find((img) => img.id === id);
}
