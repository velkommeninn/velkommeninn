import { BOOKING_URL, BOOK_DIRECT_MESSAGE } from "@/lib/constants";

export default function BookDirectBanner() {
  return (
    <section className="bg-[#c9a84c] text-[#1a2e4a]" aria-label="Book direct notice">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <p className="text-sm font-semibold">{BOOK_DIRECT_MESSAGE}</p>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded bg-[#1a2e4a] px-5 py-2 text-sm font-bold text-white hover:bg-[#142340] transition-colors"
        >
          Book Direct →
        </a>
      </div>
    </section>
  );
}
