"use client";

import Link from "next/link";
import { useState } from "react";
import { HOTEL_NAME, BOOKING_URL, HOTEL_PHONE, HOTEL_PHONE_HREF } from "@/lib/constants";
import { NAV_LINKS } from "@/data/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#1a2e4a] shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">

          {/* Logo */}
          <Link
            href="/"
            className="flex flex-col leading-tight shrink-0"
            onClick={() => setMenuOpen(false)}
          >
            <span className="text-xl font-bold tracking-wide text-white font-serif">
              {HOTEL_NAME}
            </span>
            <span className="text-xs text-[#c9a84c] tracking-widest uppercase">
              Clifton, Texas
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden xl:flex items-center gap-0.5 flex-1 justify-center">
            {NAV_LINKS.filter((l) => l.href !== "/official-booking-notice").map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-2.5 py-1.5 text-sm text-gray-200 hover:text-[#c9a84c] transition-colors rounded whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden xl:flex items-center gap-2 shrink-0">
            <a
              href={HOTEL_PHONE_HREF}
              className="inline-flex items-center gap-1.5 rounded border border-white/30 px-3 py-1.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              aria-label={`Call Velkommen Inn at ${HOTEL_PHONE}`}
            >
              <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.01l-2.21 2.21z" />
              </svg>
              {HOTEL_PHONE}
            </a>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded bg-[#c9a84c] px-4 py-1.5 text-sm font-semibold text-[#1a2e4a] hover:bg-[#b8943d] transition-colors"
            >
              Book Direct
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="xl:hidden p-2 text-white hover:text-[#c9a84c] transition-colors"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="xl:hidden bg-[#142340] border-t border-[#c9a84c]/20">
          <nav className="flex flex-col px-4 py-3 gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-2 px-3 text-gray-200 hover:text-[#c9a84c] hover:bg-white/5 rounded transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-2">
              <a
                href={HOTEL_PHONE_HREF}
                className="rounded border border-white/20 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-white/10 transition-colors"
                onClick={() => setMenuOpen(false)}
                aria-label={`Call Velkommen Inn at ${HOTEL_PHONE}`}
              >
                Call {HOTEL_PHONE}
              </a>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded bg-[#c9a84c] px-4 py-2 text-center font-semibold text-[#1a2e4a] hover:bg-[#b8943d] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Book Direct
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
