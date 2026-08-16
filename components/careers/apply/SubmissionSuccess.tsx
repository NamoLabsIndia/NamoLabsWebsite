"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const nextSteps = [
  {
    label: "Review",
    body: "A member of the team reads every application personally.",
    state: "Happening now",
  },
  {
    label: "Response",
    body: "We'll get back to you by email, whether or not there's a fit.",
    state: "Next",
  },
  {
    label: "Conversation",
    body: "If there's a match, we'll set up a first call to talk through your work.",
    state: "If there's a match",
  },
];

/**
 * Rendered only after the server confirms the application was accepted.
 */
export default function SubmissionSuccess({ role }: { role?: string }) {
  const shouldReduceMotion = useReducedMotion();
  const headingRef = useRef<HTMLHeadingElement>(null);

  // The form is replaced in place, so move the viewport and the caret to the
  // confirmation — otherwise keyboard and screen-reader users are left where
  // the submit button used to be with no indication anything changed.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: shouldReduceMotion ? "auto" : "smooth" });
    headingRef.current?.focus({ preventScroll: true });
  }, [shouldReduceMotion]);

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="border-t-2 border-namo-black pt-12 lg:pt-16"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-light text-accent">
        <Check size={22} strokeWidth={2.5} aria-hidden="true" />
      </div>

      <p className="mt-8 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">
        Application received
      </p>

      <h1
        ref={headingRef}
        tabIndex={-1}
        className="mt-4 max-w-[720px] text-4xl font-extrabold leading-[1.02] tracking-tighter text-namo-black focus:outline-none sm:text-5xl lg:text-6xl"
      >
        Thank you for applying
        <span className="text-accent">.</span>
      </h1>

      <p className="mt-6 max-w-[540px] text-[17px] leading-relaxed text-gray-600">
        {role
          ? `Your application for ${role} is with our team.`
          : "Your application is with our team."}{" "}
        We review every submission carefully and will be in touch by email.
      </p>

      {/* What happens next.
          The previous version was three columns of small grey text separated
          by hairlines — it read as a footnote, not as the answer to the one
          question everyone has after submitting. It now carries a heading, a
          progress rail that shows where the application actually is, and type
          large enough to be read rather than skimmed past. */}
      <section aria-labelledby="next-steps" className="mt-16 max-w-[900px]">
        <h2
          id="next-steps"
          className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500"
        >
          What happens next
        </h2>

        <ol className="mt-7 grid gap-x-8 gap-y-9 sm:grid-cols-3">
          {nextSteps.map((step, index) => {
            const current = index === 0;
            return (
              <li key={step.label} className="relative">
                {/* Rail: a filled segment for the stage the application is in,
                    hollow for the stages still ahead of it. */}
                <div
                  aria-hidden="true"
                  className="flex items-center gap-2.5"
                >
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] font-bold tabular-nums ${
                      current
                        ? "bg-accent text-white"
                        : "border-2 border-gray-200 bg-white text-gray-500"
                    }`}
                  >
                    {index + 1}
                  </span>
                  <span
                    className={`h-[2px] flex-1 rounded-full ${
                      current ? "bg-accent/30" : "bg-gray-200"
                    }`}
                  />
                </div>

                <p
                  className={`mt-4 text-[10px] font-bold uppercase tracking-[0.18em] ${
                    current ? "text-accent" : "text-gray-500"
                  }`}
                >
                  {step.state}
                </p>

                <h3 className="mt-2 text-[19px] font-bold tracking-tight text-namo-black">
                  {step.label}
                </h3>

                <p className="mt-2 text-[14px] leading-relaxed text-gray-600">
                  {step.body}
                </p>
              </li>
            );
          })}
        </ol>
      </section>

      <div className="mt-12 flex flex-col gap-3 pb-8 sm:flex-row">
        <Link
          href="/careers"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-namo-black px-7 py-3.5 text-[13px] font-bold text-white transition-colors hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-namo-black focus-visible:ring-offset-2"
        >
          Back to Careers <ArrowRight size={14} aria-hidden="true" />
        </Link>
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-7 py-3.5 text-[13px] font-bold text-namo-black transition-colors hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-namo-black focus-visible:ring-offset-2"
        >
          Return home
        </Link>
      </div>
    </motion.div>
  );
}
