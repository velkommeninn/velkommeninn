"use client";

import { BOOKING_URL } from "@/lib/constants";

export default function BookingWidget() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    window.open(BOOKING_URL, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
      <h3 className="text-lg font-bold font-serif text-[#1a2e4a] mb-4">Check Availability</h3>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label htmlFor="bw-checkin" className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1">
              Check-In
            </label>
            <input
              id="bw-checkin"
              type="date"
              className="w-full rounded border border-gray-200 px-3 py-2 text-sm text-gray-700 focus:border-[#c9a84c] focus:outline-none focus:ring-1 focus:ring-[#c9a84c]"
            />
          </div>
          <div>
            <label htmlFor="bw-checkout" className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1">
              Check-Out
            </label>
            <input
              id="bw-checkout"
              type="date"
              className="w-full rounded border border-gray-200 px-3 py-2 text-sm text-gray-700 focus:border-[#c9a84c] focus:outline-none focus:ring-1 focus:ring-[#c9a84c]"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label htmlFor="bw-adults" className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1">
              Adults
            </label>
            <select
              id="bw-adults"
              className="w-full rounded border border-gray-200 px-3 py-2 text-sm text-gray-700 focus:border-[#c9a84c] focus:outline-none focus:ring-1 focus:ring-[#c9a84c]"
              defaultValue="1"
            >
              {[1, 2, 3, 4].map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="bw-children" className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1">
              Children
            </label>
            <select
              id="bw-children"
              className="w-full rounded border border-gray-200 px-3 py-2 text-sm text-gray-700 focus:border-[#c9a84c] focus:outline-none focus:ring-1 focus:ring-[#c9a84c]"
              defaultValue="0"
            >
              {[0, 1, 2, 3, 4].map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="bw-promo" className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1">
            Promo Code <span className="normal-case font-normal text-gray-400">(optional)</span>
          </label>
          <input
            id="bw-promo"
            type="text"
            placeholder="Enter code"
            className="w-full rounded border border-gray-200 px-3 py-2 text-sm text-gray-700 focus:border-[#c9a84c] focus:outline-none focus:ring-1 focus:ring-[#c9a84c]"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded bg-[#c9a84c] px-6 py-3 text-sm font-bold text-[#1a2e4a] hover:bg-[#b8943d] transition-colors"
        >
          Search Official Rates
        </button>
        <p className="text-center text-xs text-gray-500">
          You are booking through Velkommen Inn&apos;s official reservation system.
        </p>
      </form>
    </div>
  );
}
