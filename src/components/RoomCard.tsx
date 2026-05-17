import HotelImage from "@/components/HotelImage";
import { BOOKING_URL } from "@/lib/constants";
import type { RoomType } from "@/data/rooms";

interface RoomCardProps {
  room: RoomType;
}

export default function RoomCard({ room }: RoomCardProps) {
  return (
    <article className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
      <HotelImage
        src={room.imageSrc}
        alt={room.imageAlt}
        className="relative h-48 bg-gray-100"
      />
      <div className="p-6">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-xl font-bold font-serif text-[#1a2e4a]">{room.name}</h3>
          {room.badge && (
            <span className="shrink-0 rounded-full bg-[#c9a84c]/15 px-3 py-0.5 text-xs font-semibold text-[#c9a84c] border border-[#c9a84c]/30">
              {room.badge}
            </span>
          )}
        </div>
        <p className="text-sm text-gray-600 leading-relaxed font-sans mb-5">
          {room.description}
        </p>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded bg-[#c9a84c] px-5 py-2 text-sm font-semibold text-[#1a2e4a] hover:bg-[#b8943d] transition-colors"
          aria-label={`Book ${room.name} at Velkommen Inn`}
        >
          Check Availability
        </a>
      </div>
    </article>
  );
}
