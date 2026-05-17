// To update this content later, edit this file.
// Edit room names, descriptions, badges, or image paths here.

export interface RoomType {
  id: string;
  name: string;
  description: string;
  badge: string | null;
  schemaName: string;
  imageSrc: string;
  imageAlt: string;
}

export const roomTypes: RoomType[] = [
  {
    id: "double-queen",
    name: "2 Queen Size Beds",
    description:
      "Ideal for families or travelers who prefer extra space. Two full-size queen beds with a private en-suite bathroom and all standard room amenities.",
    badge: null,
    schemaName: "Double Queen Room",
    imageSrc: "/images/rooms/double-queen.jpg",
    imageAlt: "2 Queen Size Beds room at Velkommen Inn, Clifton TX",
  },
  {
    id: "king",
    name: "1 King Size Bed",
    description:
      "A comfortable king bed with a private en-suite bathroom, perfect for couples or solo travelers seeking a relaxing stay in Clifton, TX.",
    badge: null,
    schemaName: "King Room",
    imageSrc: "/images/rooms/king.jpg",
    imageAlt: "1 King Size Bed room at Velkommen Inn, Clifton TX",
  },
  {
    id: "king-ada",
    name: "1 King Size Bed – ADA Accessible",
    description:
      "A king room thoughtfully designed for accessibility, with features to support guests with mobility needs. Same great amenities in an accessible layout.",
    badge: "ADA Accessible",
    schemaName: "Accessible King Room",
    imageSrc: "/images/rooms/king-ada.jpg",
    imageAlt: "ADA Accessible King room at Velkommen Inn, Clifton TX",
  },
  {
    id: "double-queen-ada",
    name: "2 Queen Size Beds – ADA Accessible",
    description:
      "Two queen beds in an accessible room configuration, ideal for guests who need extra space alongside accessibility features.",
    badge: "ADA Accessible",
    schemaName: "Accessible Double Queen Room",
    imageSrc: "/images/rooms/double-queen-ada.jpg",
    imageAlt: "ADA Accessible 2 Queen room at Velkommen Inn, Clifton TX",
  },
];

// In-room amenities included with every room
export const roomAmenities: string[] = [
  "Coffee Maker",
  "Mini Fridge",
  "Microwave",
  "Hair Dryer",
  "Free Wi-Fi",
  "Flat-Screen TV",
  "Smart DirecTV",
  "Climate Control",
  "Private En-Suite Bathroom",
];

// Room names only — used on group-stays page and other summary lists
export const roomTypeNames: string[] = roomTypes.map((r) => r.name);
