"use client";

import { BOOKING_URL, HOTEL_PHONE, HOTEL_PHONE_HREF } from "@/lib/constants";

export default function StickyBookingBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex gap-2 bg-[#1a2e4a]/95 backdrop-blur-sm px-4 py-3 shadow-lg sm:hidden">
      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center rounded bg-[#c9a84c] px-4 py-2.5 text-sm font-bold text-[#1a2e4a] hover:bg-[#b8943d] transition-colors"
      >
        Book Direct
      </a>
      <a
        href={HOTEL_PHONE_HREF}
        className="flex flex-1 items-center justify-center gap-2 rounded border border-white/30 px-4 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
        aria-label={`Call Velkommen Inn at ${HOTEL_PHONE}`}
      >
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.01l-2.21 2.21z" />
        </svg>
        Call Hotel
      </a>
    </div>
  );
}
