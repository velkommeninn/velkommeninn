import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = { title: "Policies" };

export default function PoliciesPage() {
  return (
    <ComingSoon
      title="Hotel Policies"
      description="Our guest policies are designed to ensure a comfortable and enjoyable stay for everyone at Velkommen Inn."
    />
  );
}
