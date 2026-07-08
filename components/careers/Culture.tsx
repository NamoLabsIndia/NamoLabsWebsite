"use client";

import React from "react";
import { Search, Target, ShieldCheck, Lightbulb, BookOpen } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import PhotoSlot from "@/components/shared/PhotoSlot";


const philosophy = [
  {
    icon: <Search size={16} />,
    title: "Research First",
    body: "We start with deep research and evidence, not assumptions.",
  },
  {
    icon: <Target size={16} />,
    title: "Think Long-Term",
    body: "We build with a 10-year mindset, solving problems that truly matter.",
  },
  {
    icon: <ShieldCheck size={16} />,
    title: "Build Securely",
    body: "Security, privacy and integrity are non-negotiable in everything we build.",
  },
  {
    icon: <Lightbulb size={16} />,
    title: "Challenge Ideas",
    body: "We question, debate and refine — so the best ideas win.",
  },
  {
    icon: <BookOpen size={16} />,
    title: "Learn Every Day",
    body: "We are committed to continuous learning, growth, and knowledge sharing.",
  },
];

export default function Culture() {
  return (
    <section id="culture" className="bg-namo-faint px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — photo collage */}
          <Reveal direction="left" className="grid grid-cols-2 gap-3">
            {/* Large photo spanning both rows on left */}
            <div className="row-span-2 overflow-hidden rounded-2xl ring-1 ring-black/5">
              <PhotoSlot
                src="/careers/culture-research.png"
                alt="Namo Labs researchers deep in work"
                className="h-full w-full min-h-[380px]"
                imgClassName="object-cover object-center"
              />
            </div>
            {/* Two stacked photos on the right column */}
            <div className="overflow-hidden rounded-2xl ring-1 ring-black/5">
              <PhotoSlot
                src="/careers/culture-collab.png"
                alt="Team in a modern city environment"
                className="h-[180px] w-full"
                imgClassName="object-cover object-center"
              />
            </div>
            <div className="overflow-hidden rounded-2xl ring-1 ring-black/5">
              <PhotoSlot
                src="/careers/culture-summit.png"
                alt="Team at a summit, celebrating milestones"
                className="h-[180px] w-full"
                imgClassName="object-cover object-center"
              />
            </div>
          </Reveal>

          {/* Right — text */}
          <Reveal direction="right">
            <h2 className="text-4xl font-extrabold tracking-tight text-namo-black sm:text-[40px]">
              A culture built on{" "}
              <span className="text-accent">curiosity</span> and craft.
            </h2>
            <div className="mt-5 h-[3px] w-12 rounded-full bg-gray-200" />
            <p className="mt-7 text-[15px] leading-relaxed text-gray-600">
              We&apos;ve built a workplace where great minds come to do their best work.
              Our culture is defined by principles, not perks.
            </p>

            <div className="mt-8 space-y-5">
              {philosophy.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.08} direction="up">
                  <div className="flex items-start gap-4">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-light text-accent">
                      {p.icon}
                    </div>
                    <div>
                      <h4 className="text-[14px] font-bold text-namo-black">{p.title}</h4>
                      <p className="mt-1 text-[13px] leading-relaxed text-gray-600">{p.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
