import type { AmenityItem } from "@/data/amenities";

interface AmenityCardProps {
  item: AmenityItem;
}

export default function AmenityCard({ item }: AmenityCardProps) {
  return (
    <div className="flex items-start gap-4 bg-white rounded-lg p-5 border border-gray-100 shadow-sm">
      <svg
        className="h-5 w-5 shrink-0 text-[#c9a84c] mt-0.5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
      <div>
        <h3 className="font-semibold text-[#1a2e4a] mb-1">{item.title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed font-sans">{item.detail}</p>
      </div>
    </div>
  );
}
