import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = { title: "Rooms" };

export default function RoomsPage() {
  return (
    <ComingSoon
      title="Our Rooms"
      description="Comfortable, well-appointed guest rooms designed to make you feel at home during your stay in Clifton, Texas."
    />
  );
}
