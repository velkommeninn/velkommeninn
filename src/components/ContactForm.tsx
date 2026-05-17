"use client";

// TODO: Replace mailto with Resend, SendGrid, Formspree, or a Next.js API route
// for reliable email delivery without requiring the user's mail client.

import { useState } from "react";
import { HOTEL_EMAIL, HOTEL_PHONE, HOTEL_PHONE_HREF } from "@/lib/constants";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const phone = data.get("phone") as string;
    const contactMethod = data.get("contactMethod") as string;
    const message = data.get("message") as string;

    const body = [
      `Guest Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Preferred Contact Method: ${contactMethod}`,
      `Message:\n${message}`,
    ].join("\n\n");

    const mailto = `mailto:${HOTEL_EMAIL}?subject=${encodeURIComponent(
      "Website Contact Inquiry – Velkommen Inn"
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-[#c9a84c]/10 border border-[#c9a84c]/30 rounded-lg p-6 text-center">
        <p className="font-semibold text-[#1a2e4a]">Your message is ready to send.</p>
        <p className="text-sm text-gray-600 mt-2 font-sans">
          Your email client should have opened. If it didn&apos;t, please call us directly at{" "}
          <a href={HOTEL_PHONE_HREF} className="text-[#c9a84c] font-semibold hover:underline">
            {HOTEL_PHONE}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cf-name" className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1">
            Guest Name <span className="text-red-400">*</span>
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            required
            className="w-full rounded border border-gray-200 px-3 py-2 text-sm text-gray-700 focus:border-[#c9a84c] focus:outline-none focus:ring-1 focus:ring-[#c9a84c]"
          />
        </div>
        <div>
          <label htmlFor="cf-email" className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1">
            Email Address <span className="text-red-400">*</span>
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            className="w-full rounded border border-gray-200 px-3 py-2 text-sm text-gray-700 focus:border-[#c9a84c] focus:outline-none focus:ring-1 focus:ring-[#c9a84c]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cf-phone" className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1">
            Phone Number
          </label>
          <input
            id="cf-phone"
            name="phone"
            type="tel"
            className="w-full rounded border border-gray-200 px-3 py-2 text-sm text-gray-700 focus:border-[#c9a84c] focus:outline-none focus:ring-1 focus:ring-[#c9a84c]"
          />
        </div>
        <div>
          <label htmlFor="cf-contact-method" className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1">
            Preferred Contact Method
          </label>
          <select
            id="cf-contact-method"
            name="contactMethod"
            defaultValue="Email"
            className="w-full rounded border border-gray-200 px-3 py-2 text-sm text-gray-700 focus:border-[#c9a84c] focus:outline-none focus:ring-1 focus:ring-[#c9a84c]"
          >
            <option>Email</option>
            <option>Phone</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="cf-message" className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1">
          Message <span className="text-red-400">*</span>
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={5}
          className="w-full rounded border border-gray-200 px-3 py-2 text-sm text-gray-700 focus:border-[#c9a84c] focus:outline-none focus:ring-1 focus:ring-[#c9a84c] resize-y"
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center rounded bg-[#1a2e4a] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#142340] transition-colors"
      >
        Send Message
      </button>

      <p className="text-xs text-gray-500 font-sans">
        This form is for general inquiries only. For urgent reservation assistance, please call
        the hotel directly at{" "}
        <a href={HOTEL_PHONE_HREF} className="text-[#c9a84c] hover:underline">
          {HOTEL_PHONE}
        </a>
        .
      </p>
    </form>
  );
}
