import React from "react";
import { PROCESS_PRINCIPLES } from "@/lib/data/process";
import ScrollIn from "./ScrollIn";

/**
 * Supporting note on *how* the phases are run, as opposed to what they are.
 * Deliberately restrained — three items on the editorial rule treatment used
 * across the site, so it reads as a footnote to the timeline rather than
 * competing with it.
 */
export default function ProcessPrinciples() {
  return (
    <section className="bg-namo-faint px-6 py-24">
      <div className="mx-auto max-w-[1100px]">
        <div className="max-w-[560px]">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
            What holds it together
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-namo-black sm:text-4xl">
            The parts that don&apos;t change
          </h2>
        </div>

        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-3">
          {PROCESS_PRINCIPLES.map((principle, index) => (
            <ScrollIn
              key={principle.title}
              delay={index * 0.08}
              className="border-t-2 border-namo-black pt-6"
            >
              <span className="text-[11px] font-bold tracking-[0.2em] text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-[17px] font-bold text-namo-black">
                {principle.title}
              </h3>
              <p className="mt-2.5 text-[14px] leading-relaxed text-gray-600">
                {principle.body}
              </p>
            </ScrollIn>
          ))}
        </div>
      </div>
    </section>
  );
}
