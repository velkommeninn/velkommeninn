import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = { title: "Group Stays" };

export default function GroupStaysPage() {
  return (
    <ComingSoon
      title="Group Stays"
      description="Planning a group visit to Clifton? We can accommodate groups and work with you to make the stay seamless."
    />
  );
}
