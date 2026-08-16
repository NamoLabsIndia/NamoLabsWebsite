import React from "react";

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

/**
 * Deliberately no scroll-triggered entrance animation here. This content is
 * essential page copy — a visitor deciding whether to apply reads it, not
 * decoration — so it must not depend on client-side JS or an
 * IntersectionObserver firing to become visible. (An earlier version wrapped
 * this in the site's `Reveal` component, which SSRs with `opacity:0` baked
 * into the initial HTML; a curl/grep check still finds the text, but a real
 * screenshot before hydration shows a blank section.)
 */
export default function WhyWorkHere() {
  return (
    <section className="bg-white px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-14 lg:grid-cols-[1fr_2fr] lg:gap-20">
          {/* Left — sticky section anchor */}
          <div className="relative">
            <div className="sticky top-32">
              <h2 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-namo-black sm:text-[42px]">
                More than<br />a job.
              </h2>
              <div className="mt-6 h-[3px] w-12 rounded-full bg-accent" />
              <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-gray-600">
                At Namo Labs, we don&apos;t hire for roles — we recruit for beliefs.
                These are the principles that define how we work, what we build,
                and why it matters.
              </p>
            </div>
          </div>

          {/* Right — principles list, 2-column on lg with editorial numbering */}
          <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {principles.map((p, i) => (
              <div key={p.title} className="group">
                <div className="border-t border-gray-200 pt-6 transition-colors duration-300 group-hover:border-accent">
                  <div className="flex items-start gap-4">
                    <span className="mt-1 flex shrink-0 items-center text-[10px] font-bold uppercase tracking-widest text-gray-500 transition-colors duration-300 group-hover:text-accent">
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
