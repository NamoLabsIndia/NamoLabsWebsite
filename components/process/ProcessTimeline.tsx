"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { PROCESS_PHASES } from "@/lib/data/process";
import ProcessGlyph from "./ProcessGlyph";
import ScrollIn from "./ScrollIn";

/**
 * Six-phase engagement timeline with a scroll-driven progress beam.
 *
 * Layout: a single vertical track sits at a fixed x on every breakpoint, so the
 * timeline reads the same on mobile as on desktop rather than being a shrunk
 * desktop layout. On lg+ each phase splits into a sticky heading column and a
 * detail column; below that the heading simply stacks above its detail.
 *
 * IMPORTANT: the beam is the only animated element and is purely decorative
 * (aria-hidden). Phase content is never opacity- or transform-gated, so it is
 * fully visible in the server-rendered HTML and does not depend on JS or an
 * IntersectionObserver to appear.
 */
export default function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [trackHeight, setTrackHeight] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  // Measure the track so the beam can be driven in pixels. Re-measured on
  // resize because the column height changes considerably between breakpoints.
  useEffect(() => {
    const element = trackRef.current;
    if (!element) return;

    const measure = () => setTrackHeight(element.getBoundingClientRect().height);
    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 25%", "end 60%"],
  });
  const beamHeight = useTransform(scrollYProgress, [0, 1], [0, trackHeight]);

  return (
    <section id="phases" className="bg-white px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-[1100px]">
        <div className="max-w-[620px]">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
            The engagement
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-namo-black sm:text-4xl">
            Six phases, start to finish
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-gray-600">
            Each phase has a defined output. You always know what you&apos;re
            getting and where the engagement stands.
          </p>
        </div>

        <div ref={containerRef} className="relative mt-16">
          {/* Track + scroll beam — decorative only. Sits behind the phase
              glyphs, which punch through it and act as the timeline nodes. */}
          <div
            ref={trackRef}
            aria-hidden="true"
            className="absolute bottom-0 left-[23px] top-0 w-[2px] overflow-hidden bg-gray-200 sm:left-[27px] [mask-image:linear-gradient(to_bottom,transparent_0%,black_4%,black_94%,transparent_100%)]"
          >
            {shouldReduceMotion ? (
              <div className="h-full w-full bg-accent/60" />
            ) : (
              <motion.div
                style={{ height: beamHeight }}
                className="w-full bg-gradient-to-b from-accent to-accent/70"
              />
            )}
          </div>

          <ol className="relative">
            {PROCESS_PHASES.map((phase, index) => (
              // fadeOnly: this <li> contains the sticky heading column, and a
              // transform on it would become the sticky containing block.
              <ScrollIn
                as="li"
                key={phase.n}
                fadeOnly
                delay={Math.min(index, 2) * 0.06}
                className="group relative pb-14 pl-[62px] last:pb-0 sm:pb-20 sm:pl-[84px]"
              >
                {/* The glyph IS the node: it sits on the track and masks it,
                    so each marker is specific to its phase rather than an
                    identical decorative dot. */}
                <div
                  aria-hidden="true"
                  className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center bg-white sm:h-14 sm:w-14"
                >
                  <ProcessGlyph
                    name={phase.glyph}
                    className="h-10 w-10 transition-transform duration-500 ease-out group-hover:-translate-y-[3px] sm:h-12 sm:w-12"
                  />
                </div>

                <div className="lg:grid lg:grid-cols-[210px_minmax(0,1fr)] lg:gap-x-14">
                  {/* Heading column — sticks alongside its own detail on lg+ */}
                  <div className="lg:sticky lg:top-32 lg:self-start">
                    <span className="font-mono text-[12px] font-bold tracking-[0.18em] text-accent">
                      {phase.n}
                    </span>
                    <h3 className="mt-1.5 text-[23px] font-bold tracking-tight text-namo-black">
                      {phase.title}
                    </h3>
                  </div>

                  {/* Detail column */}
                  <div className="mt-5 lg:mt-1">
                    <p className="max-w-[600px] text-[17px] font-semibold leading-snug text-namo-black">
                      {phase.summary}
                    </p>
                    <p className="mt-3.5 max-w-[600px] text-[15px] leading-[1.75] text-gray-600">
                      {phase.detail}
                    </p>
                    <p className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1 border-l-2 border-accent/30 pl-4">
                      <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-500">
                        You get
                      </span>
                      <span className="text-[14px] font-semibold text-namo-black">
                        {phase.output}
                      </span>
                    </p>
                  </div>
                </div>
              </ScrollIn>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
