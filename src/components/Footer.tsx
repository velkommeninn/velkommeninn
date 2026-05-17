import Link from "next/link";
import {
  HOTEL_NAME,
  HOTEL_ADDRESS,
  HOTEL_PHONE,
  HOTEL_PHONE_HREF,
  HOTEL_EMAIL,
  BOOKING_URL,
  BOOK_DIRECT_MESSAGE,
} from "@/lib/constants";
import { NAV_LINKS } from "@/data/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a2e4a] text-gray-300 mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Hotel info */}
          <div>
            <h3 className="text-white text-lg font-bold font-serif mb-3">{HOTEL_NAME}</h3>
            <address className="not-italic text-sm leading-relaxed text-gray-400">
              {HOTEL_ADDRESS}
            </address>
            <a
              href={HOTEL_PHONE_HREF}
              className="mt-2 inline-block text-[#c9a84c] hover:text-white transition-colors text-sm"
            >
              {HOTEL_PHONE}
            </a>
            <br />
            <a
              href={`mailto:${HOTEL_EMAIL}`}
              className="mt-1 inline-block text-gray-400 hover:text-[#c9a84c] transition-colors text-sm"
            >
              {HOTEL_EMAIL}
            </a>
            <p className="mt-4 text-xs text-gray-500 leading-relaxed">{BOOK_DIRECT_MESSAGE}</p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-widest mb-3">
              Navigate
            </h3>
            <ul className="grid grid-cols-2 gap-1 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#c9a84c] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Booking CTA */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-widest mb-3">
              Reserve Your Stay
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Book direct for the best available rate and direct hotel support.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded bg-[#c9a84c] px-5 py-2 text-sm font-semibold text-[#1a2e4a] hover:bg-[#b8943d] transition-colors"
            >
              Book Direct Now
            </a>
          </div>
        </div>

        {/* Official notice */}
        <div className="mt-8 border-t border-white/10 pt-6">
          <p className="text-xs text-gray-500 text-center leading-relaxed max-w-3xl mx-auto">
            You are on the official website of Velkommen Inn. For accurate rates, hotel policies,
            and reservation support, book directly through this website or call the hotel.
          </p>
        </div>

        <div className="mt-4 text-center text-xs text-gray-500">
          &copy; {currentYear} {HOTEL_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
