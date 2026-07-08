"use client";

import React from "react";
import Reveal from "@/components/shared/Reveal";

const principles = [
  {
    title: "Research First",
    body: "We start with deep evidence, not assumptions. Every product decision is traceable to a research question.",
  },
  {
    title: "Think in Decades",
    body: "We build with a 10-year mindset, solving problems that aren't yet obvious to the rest of the market.",
  },
  {
    title: "Security is Non-Negotiable",
    body: "Privacy, integrity, and correctness are constraints, not features. They ship with everything, always.",
  },
  {
    title: "Challenge the Premise",
    body: "We question the brief before we answer it. The best ideas survive rigorous debate; weak ones don't make it through.",
  },
  {
    title: "Learn Out Loud",
    body: "Published research, internal seminars, conference access, and shared reading lists — knowledge compounds when it's shared.",
  },
  {
    title: "Frontier or Nothing",
    body: "Cryptography, AI, quantum, blockchain, cloud infrastructure — we only work on problems at the edge of what's known.",
  },
];

export default function WhyWorkHere() {
  return (
    <section className="bg-white px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-14 lg:grid-cols-[1fr_2fr] lg:gap-20">
          {/* Left — sticky section anchor */}
          <div className="relative">
            <Reveal direction="left" className="sticky top-32">
              <h2 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-namo-black sm:text-[42px]">
                More than<br />a job.
              </h2>
              <div className="mt-6 h-[3px] w-12 rounded-full bg-accent" />
              <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-gray-600">
                At Namo Labs, we don&apos;t hire for roles — we recruit for beliefs.
                These are the principles that define how we work, what we build,
                and why it matters.
              </p>
            </Reveal>
          </div>

          {/* Right — principles list, 2-column on lg with editorial numbering */}
          <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08} direction="up" className="group">
                <div className="border-t border-gray-200 pt-6 transition-colors duration-300 group-hover:border-accent">
                  <div className="flex items-start gap-4">
                    <span className="mt-1 flex shrink-0 items-center text-[10px] font-bold uppercase tracking-widest text-gray-400 transition-colors duration-300 group-hover:text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-[15px] font-bold text-namo-black transition-colors duration-300">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-[13px] leading-relaxed text-gray-600">
                        {p.body}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
