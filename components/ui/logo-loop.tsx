"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface LogoItem {
  /** Custom React node (e.g. an icon or composed markup). Takes priority over src/name. */
  node?: React.ReactNode;
  /** Image source - rendered as an <img> if no node is provided. */
  src?: string;
  /** Accessible label / alt text, also used as the text fallback. */
  name?: string;
  title?: string;
  href?: string;
}

interface LogoLoopProps {
  logos: LogoItem[];
  /** Seconds for one full loop. Lower = faster. */
  speed?: number;
  direction?: "left" | "right";
  /** Gap between logos, in px. */
  gap?: number;
  /** Height of each logo row, in px. */
  logoHeight?: number;
  /** Fade the left/right edges into the background. */
  fadeOut?: boolean;
  fadeOutColor?: string;
  pauseOnHover?: boolean;
  ariaLabel?: string;
  className?: string;
}

export function LogoLoop({
  logos,
  speed = 30,
  direction = "left",
  gap = 60,
  logoHeight = 40,
  fadeOut = false,
  fadeOutColor = "#ffffff",
  pauseOnHover = true,
  ariaLabel = "Partner logos",
  className,
}: LogoLoopProps) {
  // Duplicate the set so the -50% translate loops seamlessly.
  const doubled = [...logos, ...logos];

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      role="region"
      aria-label={ariaLabel}
    >
      <div
        className={cn("flex w-max logo-loop-track", pauseOnHover && "logo-loop-pausable")}
        style={{
          gap: `${gap}px`,
          paddingRight: `${gap}px`,
          animation: `logoLoopScroll ${speed}s linear infinite`,
          animationDirection: direction === "right" ? "reverse" : "normal",
        }}
      >
        {doubled.map((logo, i) => {
          const content = logo.node ? (
            <span
              className="flex items-center"
              style={{ height: `${logoHeight}px` }}
              title={logo.title ?? logo.name}
            >
              {logo.node}
            </span>
          ) : logo.src ? (
            <img
              src={logo.src}
              alt={logo.name ?? logo.title ?? ""}
              style={{ height: `${logoHeight}px` }}
              className="object-contain"
            />
          ) : (
            <span className="text-sm font-semibold whitespace-nowrap uppercase tracking-wide text-gray-500">
              {logo.name}
            </span>
          );

          const inner = (
            <div
              className="flex items-center opacity-90 hover:opacity-100 transition-all duration-300 cursor-default select-none flex-shrink-0"
              style={{ height: `${logoHeight}px` }}
            >
              {content}
            </div>
          );

          return logo.href ? (
            <a
              key={`${logo.title ?? logo.name ?? "logo"}-${i}`}
              href={logo.href}
              target="_blank"
              rel="noreferrer"
              className="flex-shrink-0"
            >
              {inner}
            </a>
          ) : (
            <React.Fragment key={`${logo.title ?? logo.name ?? "logo"}-${i}`}>
              {inner}
            </React.Fragment>
          );
        })}
      </div>

      {fadeOut && (
        <>
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10"
            style={{ background: `linear-gradient(to right, ${fadeOutColor}, transparent)` }}
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10"
            style={{ background: `linear-gradient(to left, ${fadeOutColor}, transparent)` }}
          />
        </>
      )}
    </div>
  );
}
