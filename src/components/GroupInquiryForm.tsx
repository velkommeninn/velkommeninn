"use client";

// TODO: Replace mailto with Resend, SendGrid, Formspree, or a Next.js API route
// for reliable email delivery without requiring the user's mail client.

import { useState } from "react";
import { HOTEL_EMAIL, HOTEL_PHONE, HOTEL_PHONE_HREF } from "@/lib/constants";

const eventTypes = [
  "Wedding / Wedding Block",
  "Family Reunion",
  "Work Crew / Contractors",
  "Sports Team",
  "Corporate / Business Travel",
  "Church or Community Group",
  "Funeral / Memorial Stay",
  "Other",
];

const roomTypeOptions = [
  "King Rooms",
  "Two Queen Rooms",
  "ADA Accessible Room",
  "Mix of Room Types",
  "Not Sure Yet",
];

export default function GroupInquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const d = new FormData(form);

    const get = (key: string) => (d.get(key) as string) || "Not provided";

    const body = [
      `Guest / Contact Name: ${get("name")}`,
      `Company or Organization: ${get("company")}`,
      `Email Address: ${get("email")}`,
      `Phone Number: ${get("phone")}`,
      `Best Time to Contact: ${get("bestTime")}`,
      `Event or Group Type: ${get("eventType")}`,
      `Arrival Date: ${get("arrivalDate")}`,
      `Departure Date: ${get("departureDate")}`,
      `Number of Nights: ${get("nights")}`,
      `Estimated Number of Rooms: ${get("rooms")}`,
      `Preferred Room Types: ${get("roomTypes")}`,
      `Need Dog-Friendly Rooms: ${get("dogFriendly")}`,
      `Need Accessible Rooms: ${get("accessible")}`,
      `Additional Details / Special Requests:\n${get("details")}`,
    ].join("\n\n");

    const mailto = `mailto:${HOTEL_EMAIL}?subject=${encodeURIComponent(
      "Group Inquiry – Velkommen Inn"
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-[#c9a84c]/10 border border-[#c9a84c]/30 rounded-lg p-6 text-center">
        <p className="font-semibold text-[#1a2e4a]">Your group inquiry is ready to send.</p>
        <p className="text-sm text-gray-600 mt-2 font-sans">
          Your email client should have opened with your inquiry. If it didn&apos;t, please call us
          directly at{" "}
          <a href={HOTEL_PHONE_HREF} className="text-[#c9a84c] font-semibold hover:underline">
            {HOTEL_PHONE}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="gi-name" className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1">
            Guest / Contact Name <span className="text-red-400">*</span>
          </label>
          <input id="gi-name" name="name" type="text" required className="w-full rounded border border-gray-200 px-3 py-2 text-sm text-gray-700 focus:border-[#c9a84c] focus:outline-none focus:ring-1 focus:ring-[#c9a84c]" />
        </div>
        <div>
          <label htmlFor="gi-company" className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1">
            Company or Organization
          </label>
          <input id="gi-company" name="company" type="text" className="w-full rounded border border-gray-200 px-3 py-2 text-sm text-gray-700 focus:border-[#c9a84c] focus:outline-none focus:ring-1 focus:ring-[#c9a84c]" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="gi-email" className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1">
            Email Address <span className="text-red-400">*</span>
          </label>
          <input id="gi-email" name="email" type="email" required className="w-full rounded border border-gray-200 px-3 py-2 text-sm text-gray-700 focus:border-[#c9a84c] focus:outline-none focus:ring-1 focus:ring-[#c9a84c]" />
        </div>
        <div>
          <label htmlFor="gi-phone" className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1">
            Phone Number <span className="text-red-400">*</span>
          </label>
          <input id="gi-phone" name="phone" type="tel" required className="w-full rounded border border-gray-200 px-3 py-2 text-sm text-gray-700 focus:border-[#c9a84c] focus:outline-none focus:ring-1 focus:ring-[#c9a84c]" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="gi-event-type" className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1">
            Event or Group Type <span className="text-red-400">*</span>
          </label>
          <select id="gi-event-type" name="eventType" required className="w-full rounded border border-gray-200 px-3 py-2 text-sm text-gray-700 focus:border-[#c9a84c] focus:outline-none focus:ring-1 focus:ring-[#c9a84c]">
            <option value="">Select…</option>
            {eventTypes.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="gi-best-time" className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1">
            Best Time to Contact
          </label>
          <input id="gi-best-time" name="bestTime" type="text" placeholder="e.g. Mornings, After 3 PM" className="w-full rounded border border-gray-200 px-3 py-2 text-sm text-gray-700 focus:border-[#c9a84c] focus:outline-none focus:ring-1 focus:ring-[#c9a84c]" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label htmlFor="gi-arrival" className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1">
            Arrival Date <span className="text-red-400">*</span>
          </label>
          <input id="gi-arrival" name="arrivalDate" type="date" required className="w-full rounded border border-gray-200 px-3 py-2 text-sm text-gray-700 focus:border-[#c9a84c] focus:outline-none focus:ring-1 focus:ring-[#c9a84c]" />
        </div>
        <div>
          <label htmlFor="gi-departure" className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1">
            Departure Date <span className="text-red-400">*</span>
          </label>
          <input id="gi-departure" name="departureDate" type="date" required className="w-full rounded border border-gray-200 px-3 py-2 text-sm text-gray-700 focus:border-[#c9a84c] focus:outline-none focus:ring-1 focus:ring-[#c9a84c]" />
        </div>
        <div>
          <label htmlFor="gi-nights" className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1">
            Number of Nights <span className="text-red-400">*</span>
          </label>
          <input id="gi-nights" name="nights" type="number" min="1" required className="w-full rounded border border-gray-200 px-3 py-2 text-sm text-gray-700 focus:border-[#c9a84c] focus:outline-none focus:ring-1 focus:ring-[#c9a84c]" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="gi-rooms" className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1">
            Estimated Number of Rooms <span className="text-red-400">*</span>
          </label>
          <input id="gi-rooms" name="rooms" type="number" min="1" required className="w-full rounded border border-gray-200 px-3 py-2 text-sm text-gray-700 focus:border-[#c9a84c] focus:outline-none focus:ring-1 focus:ring-[#c9a84c]" />
        </div>
        <div>
          <label htmlFor="gi-room-types" className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1">
            Preferred Room Types <span className="text-red-400">*</span>
          </label>
          <select id="gi-room-types" name="roomTypes" required className="w-full rounded border border-gray-200 px-3 py-2 text-sm text-gray-700 focus:border-[#c9a84c] focus:outline-none focus:ring-1 focus:ring-[#c9a84c]">
            <option value="">Select…</option>
            {roomTypeOptions.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="gi-dog" className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1">
            Need Dog-Friendly Rooms?
          </label>
          <select id="gi-dog" name="dogFriendly" className="w-full rounded border border-gray-200 px-3 py-2 text-sm text-gray-700 focus:border-[#c9a84c] focus:outline-none focus:ring-1 focus:ring-[#c9a84c]" defaultValue="Not Sure">
            <option>Yes</option>
            <option>No</option>
            <option>Not Sure</option>
          </select>
        </div>
        <div>
          <label htmlFor="gi-accessible" className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1">
            Need Accessible Rooms?
          </label>
          <select id="gi-accessible" name="accessible" className="w-full rounded border border-gray-200 px-3 py-2 text-sm text-gray-700 focus:border-[#c9a84c] focus:outline-none focus:ring-1 focus:ring-[#c9a84c]" defaultValue="Not Sure">
            <option>Yes</option>
            <option>No</option>
            <option>Not Sure</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="gi-details" className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1">
          Additional Details / Special Requests
        </label>
        <textarea
          id="gi-details"
          name="details"
          rows={4}
          className="field resize-y"
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center rounded bg-[#1a2e4a] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#142340] transition-colors"
      >
        Send Group Inquiry
      </button>

      <p className="text-xs text-gray-500 font-sans leading-relaxed">
        Submitting this form does not confirm a reservation or room block. A Velkommen Inn team
        member must confirm availability, pricing, and reservation details directly.
      </p>
    </form>
  );
}
