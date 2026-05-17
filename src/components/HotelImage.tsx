"use client";

import Image from "next/image";
import { useState } from "react";

interface HotelImageProps {
  src: string;
  alt: string;
  /** Applied to the outer wrapper div — must include `relative` and a height class */
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export default function HotelImage({
  src,
  alt,
  className = "relative h-48 bg-gray-100",
  priority,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
}: HotelImageProps) {
  const [error, setError] = useState(false);

  return (
    <div className={className} role={error ? "img" : undefined} aria-label={error ? alt : undefined}>
      {error ? (
        <div className="flex h-full w-full items-center justify-center">
          <svg
            className="h-16 w-16 text-gray-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes={sizes}
          priority={priority}
          onError={() => setError(true)}
        />
      )}
    </div>
  );
}
