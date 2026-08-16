import React from "react";
import { MAX_RESUME_LABEL } from "@/lib/careers";

const steps = [
  {
    title: "Find your fit",
    body: `Browse the open roles above, or send an open application if nothing quite matches — we read every submission either way.`,
  },
  {
    title: "Tell us about your work",
    body: `Share your background, a project you're proud of, and why Namo Labs — plus your resume as a PDF (up to ${MAX_RESUME_LABEL}).`,
  },
  {
    title: "We review, personally",
    body: `No automated filters. A person on the team reads your application and gets back to you by email — whether or not there's a fit right now.`,
  },
];

/**
 * Sets expectations before the visitor clicks through to the form: what
 * they'll need, and that a human reads what they send. Numbering mirrors the
 * "01 About you / 02 Your work / 03 Application" language already used on the
 * apply form, so the two pages read as one flow rather than two designs.
 */
export default function HowToApply() {
  return (
    <section className="bg-namo-faint px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="max-w-lg">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
            The process
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-namo-black sm:text-4xl">
            How to apply
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-gray-600">
            Simple by design: one form, a resume, and a real person reading
            it on the other end.
          </p>
        </div>

        <ol className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title} className="border-t-2 border-namo-black pt-6">
              <span className="text-[11px] font-bold tracking-[0.2em] text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-[17px] font-bold text-namo-black">
                {step.title}
              </h3>
              <p className="mt-2.5 text-[14px] leading-relaxed text-gray-600">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
