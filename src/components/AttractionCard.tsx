import type { AttractionPlace } from "@/data/attractions";

interface AttractionCardProps {
  place: AttractionPlace;
}

export default function AttractionCard({ place }: AttractionCardProps) {
  return (
    <article className="bg-white rounded-lg border border-gray-100 shadow-sm p-6">
      <h3 className="text-lg font-bold font-serif text-[#1a2e4a] mb-2">{place.name}</h3>
      <p className="text-sm text-gray-600 leading-relaxed font-sans">{place.description}</p>
    </article>
  );
}
