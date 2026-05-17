import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = { title: "Local Attractions" };

export default function LocalAttractionsPage() {
  return (
    <ComingSoon
      title="Local Attractions"
      description="Discover the beauty of Clifton and Bosque County — from scenic Hill Country vistas to local dining and outdoor recreation."
    />
  );
}
