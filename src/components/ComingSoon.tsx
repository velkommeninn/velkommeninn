import Link from "next/link";
import { BOOKING_URL } from "@/lib/constants";

interface Props {
  title: string;
  description?: string;
}

export default function ComingSoon({ title, description }: Props) {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-24 text-center">
      <h1 className="text-4xl font-bold font-serif text-[#1a2e4a] mb-4">{title}</h1>
      {description && (
        <p className="text-gray-600 font-sans mb-8 leading-relaxed">{description}</p>
      )}
      <p className="text-gray-500 font-sans mb-8 text-sm">
        This page is being updated with more detail. In the meantime, please contact us directly.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded bg-[#c9a84c] px-6 py-3 text-sm font-semibold text-[#1a2e4a] hover:bg-[#b8943d] transition-colors"
        >
          Book Direct
        </a>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded border border-[#1a2e4a] px-6 py-3 text-sm font-semibold text-[#1a2e4a] hover:bg-[#1a2e4a] hover:text-white transition-colors font-sans"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
