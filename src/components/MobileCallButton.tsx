"use client";

import { HOTEL_PHONE, HOTEL_PHONE_HREF } from "@/lib/constants";

export default function MobileCallButton() {
  return (
    <a
      href={HOTEL_PHONE_HREF}
      aria-label={`Call ${HOTEL_PHONE}`}
      className="fixed bottom-6 left-6 z-50 flex items-center gap-2 rounded-full bg-[#1a2e4a] px-4 py-3 text-sm font-bold text-white shadow-xl hover:bg-[#142340] hover:shadow-2xl transition-all active:scale-95 lg:hidden"
    >
      <svg className="h-4 w-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
        <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.01l-2.21 2.21z" />
      </svg>
      <span className="hidden sm:inline">{HOTEL_PHONE}</span>
      <span className="sm:hidden">Call Now</span>
    </a>
  );
}
