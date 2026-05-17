"use client";

import Link from "next/link";
import { useState } from "react";
import { HOTEL_NAME, BOOKING_URL, NAV_LINKS } from "@/lib/constants";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#1a2e4a] shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex flex-col leading-tight"
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
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-sm text-gray-200 hover:text-[#c9a84c] transition-colors rounded"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Book Now CTA */}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-2 rounded bg-[#c9a84c] px-4 py-2 text-sm font-semibold text-[#1a2e4a] hover:bg-[#b8943d] transition-colors"
          >
            Book Direct
          </a>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-white hover:text-[#c9a84c] transition-colors"
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
        <div className="lg:hidden bg-[#142340] border-t border-[#c9a84c]/20">
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
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded bg-[#c9a84c] px-4 py-2 text-center font-semibold text-[#1a2e4a] hover:bg-[#b8943d] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Book Direct
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
