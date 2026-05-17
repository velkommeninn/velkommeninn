import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = { title: "Amenities" };

export default function AmenitiesPage() {
  return (
    <ComingSoon
      title="Amenities"
      description="Everything you need for a comfortable stay — from complimentary Wi-Fi to on-site conveniences."
    />
  );
}
