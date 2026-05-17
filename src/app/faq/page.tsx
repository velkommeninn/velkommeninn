import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = { title: "FAQ" };

export default function FAQPage() {
  return (
    <ComingSoon
      title="Frequently Asked Questions"
      description="Answers to the most common questions about staying at Velkommen Inn."
    />
  );
}
