"use client";

import { BOOKING_URL } from "@/lib/constants";

export default function BookDirectButton() {
  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book direct"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#c9a84c] px-5 py-3 text-sm font-bold text-[#1a2e4a] shadow-xl hover:bg-[#b8943d] hover:shadow-2xl transition-all active:scale-95"
    >
      <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.5}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
      Book Direct
    </a>
  );
}
