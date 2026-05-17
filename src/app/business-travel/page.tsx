import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = { title: "Business Travel" };

export default function BusinessTravelPage() {
  return (
    <ComingSoon
      title="Business Travel"
      description="Reliable Wi-Fi, comfortable rooms, and a convenient location make Velkommen Inn an ideal base for business travelers in the Clifton area."
    />
  );
}
