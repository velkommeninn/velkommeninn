import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = { title: "Pet Policy" };

export default function PetPolicyPage() {
  return (
    <ComingSoon
      title="Pet Policy"
      description="Velkommen Inn welcomes well-behaved pets. Learn about our pet-friendly accommodations and policies."
    />
  );
}
