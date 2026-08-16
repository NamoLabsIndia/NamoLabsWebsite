"use client";

import React, { useEffect, useLayoutEffect, useRef } from "react";

/**
 * Scroll-entrance motion that cannot make content invisible.
 *
 * The site's older `Reveal` wrapper animates with framer-motion's `whileInView`,
 * which serialises `opacity: 0` into the server-rendered HTML. If JS is slow,
 * blocked, or the IntersectionObserver never fires, the content is simply gone —
 * that is exactly the bug that made sections of /careers render blank.
 *
 * This component inverts the failure mode:
 *
 *  - Server HTML and the first client render contain no opacity or transform at
 *    all. With JS disabled or broken, every phase is fully visible. Always.
 *  - Hiding is applied imperatively in a layout effect, i.e. on the client,
 *    before the browser paints, and *only* to elements that start below the
 *    fold — so nothing the reader can already see is ever hidden.
 *  - A failsafe timer releases anything still hidden after 3s, so a wedged
 *    observer degrades to "visible" rather than "blank".
 *  - `prefers-reduced-motion` opts out entirely and never touches the styles.
 */

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/** Only animate elements comfortably below the fold. */
const BELOW_FOLD_MARGIN = 80;
/** If the observer never fires, reveal anyway. */
const FAILSAFE_MS = 3000;

export default function ScrollIn({
  children,
  delay = 0,
  className,
  fadeOnly = false,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  /** Seconds of stagger. Kept small — this is punctuation, not choreography. */
  delay?: number;
  className?: string;
  /**
   * Fade without the translate. Required whenever the subtree contains a
   * `position: sticky` child: `transform` and `will-change: transform` both
   * make this element the containing block, which silently kills the stick.
   * Opacity creates only a stacking context, so it is safe.
   */
  fadeOnly?: boolean;
  as?: "div" | "li";
}) {
  const ref = useRef<HTMLElement>(null);

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    )?.matches;
    if (reduced || typeof IntersectionObserver === "undefined") return;

    // Anything already on screen stays exactly as rendered.
    if (el.getBoundingClientRect().top < window.innerHeight - BELOW_FOLD_MARGIN) {
      return;
    }

    let released = false;
    const release = () => {
      if (released) return;
      released = true;
      el.style.opacity = "1";
      if (!fadeOnly) el.style.transform = "none";
    };

    const easing = "cubic-bezier(.22,.61,.36,1)";
    el.style.opacity = "0";
    el.style.transition = fadeOnly
      ? `opacity 620ms ${easing} ${delay}s`
      : `opacity 620ms ${easing} ${delay}s, transform 620ms ${easing} ${delay}s`;
    el.style.willChange = fadeOnly ? "opacity" : "opacity, transform";
    if (!fadeOnly) el.style.transform = "translateY(14px)";

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          release();
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px" },
    );
    observer.observe(el);

    const failsafe = window.setTimeout(release, FAILSAFE_MS);
    const onDone = () => {
      el.style.willChange = "auto";
    };
    el.addEventListener("transitionend", onDone);

    return () => {
      observer.disconnect();
      window.clearTimeout(failsafe);
      el.removeEventListener("transitionend", onDone);
    };
  }, [delay, fadeOnly]);

  return (
    <Tag ref={ref as never} className={className}>
      {children}
    </Tag>
  );
}
