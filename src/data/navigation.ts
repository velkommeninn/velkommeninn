// To update this content later, edit this file.
// Add, remove, or reorder navigation links here.
// The header and footer both use this list.

export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Rooms", href: "/rooms" },
  { label: "Amenities", href: "/amenities" },
  { label: "Pet Policy", href: "/pet-policy" },
  { label: "Groups", href: "/group-stays" },
  { label: "Local Attractions", href: "/local-attractions" },
  { label: "Business Travel", href: "/business-travel" },
  { label: "FAQ", href: "/faq" },
  { label: "Policies", href: "/policies" },
  { label: "Contact Us", href: "/contact" },
  { label: "Booking Notice", href: "/official-booking-notice" },
];
