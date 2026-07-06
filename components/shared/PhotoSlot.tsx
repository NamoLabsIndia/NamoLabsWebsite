"use client";

import React, { useState } from "react";

/**
 * Renders a photographic image with a graceful gradient fallback.
 * The real photos (founder portrait, globe, cityscapes, etc.) live in
 * /public/company and /public/team — drop the exact source images there
 * using the `src` paths below and they appear automatically. Until then
 * the branded gradient placeholder keeps the layout intact.
 */
export default function PhotoSlot({
  src,
  alt,
  className = "",
  imgClassName = "object-cover",
  children,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  children?: React.ReactNode;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br from-[#dfe6ff] via-[#eef1ff] to-[#c9d6ff] ${className}`}
    >
      {!failed && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          onError={() => setFailed(true)}
          className={`absolute inset-0 h-full w-full ${imgClassName}`}
        />
      )}
      {children}
    </div>
  );
}
