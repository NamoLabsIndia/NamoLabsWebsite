import React from "react";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

/**
 * Closing call to action. The brief asks for a stronger route to /contact than
 * the previous single centred button, so this states what actually happens
 * next and offers a lower-commitment email path alongside the primary CTA.
 */
export default function ProcessCTA() {
  return (
    <section className="px-6 pb-28 pt-4">
      <div className="mx-auto max-w-[1100px] overflow-hidden rounded-[28px] bg-gradient-to-b from-[#f2f5ff] to-[#eef2fc] px-8 py-14 ring-1 ring-black/5 sm:px-14 sm:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-namo-black sm:text-4xl">
              Start at phase one<span className="text-accent">.</span>
            </h2>
            <p className="mt-5 max-w-[520px] text-[15px] leading-relaxed text-gray-600">
              Whether it&apos;s a consulting engagement or a research
              collaboration, it begins the same way — a discovery conversation
              about what you&apos;re trying to solve. No commitment required to
              have it.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-[14px] font-semibold text-white shadow-lg shadow-accent/25 transition-colors hover:bg-[#2f4be0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                Start a conversation <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <a
                href="mailto:info@namolabs.in"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-8 py-4 text-[14px] font-semibold text-namo-black transition-colors hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-namo-black focus-visible:ring-offset-2"
              >
                <Mail size={15} aria-hidden="true" /> Email us directly
              </a>
            </div>
          </div>

          {/* What the first conversation actually covers */}
          <div className="rounded-2xl border border-white/70 bg-white/70 p-7 backdrop-blur-sm">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
              A first conversation covers
            </p>
            <ul className="mt-4 space-y-3">
              {[
                "What you're trying to solve, in your terms",
                "Whether our research focus genuinely fits",
                "Rough scope, timeline and how we'd phase it",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                  />
                  <span className="text-[14px] leading-relaxed text-gray-700">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
