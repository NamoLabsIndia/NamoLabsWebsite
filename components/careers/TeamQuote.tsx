"use client";

import React from "react";
import { Quote, ArrowRight } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import PhotoSlot from "@/components/shared/PhotoSlot";

export default function TeamQuote() {
  return (
    <section className="bg-white px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Single solid border, no paired shadow — fixes ghost-card + over-rounding */}
        <div className="grid items-center gap-10 rounded-2xl bg-white p-9 ring-1 ring-black/8 sm:p-14 lg:grid-cols-2 lg:gap-14">
          {/* Left — quote */}
          <Reveal direction="left">
            <Quote size={42} className="text-accent" fill="currentColor" />
            <blockquote className="mt-6 text-[28px] font-bold leading-snug tracking-tight text-namo-black sm:text-[32px]">
              The best teams aren&apos;t just talented — they&apos;re driven by a shared
              belief that their work truly matters.
            </blockquote>
            <div className="mt-7 h-[3px] w-12 rounded-full bg-gray-200" />
            <div className="mt-6 flex items-center gap-4">
              <div className="h-10 w-10 overflow-hidden rounded-full ring-2 ring-black/10">
                <PhotoSlot
                  src="/careers/quote-scene.png"
                  alt="Namo Labs Founder"
                  className="h-full w-full"
                  imgClassName="object-cover object-top"
                />
              </div>
              <div>
                {/* Named attribution — a name builds more trust than a title alone */}
                <p className="text-[13px] font-bold text-namo-black">Namo Labs Leadership</p>
                <p className="text-[12px] text-gray-500">Building technology for humanity</p>
              </div>
            </div>
            <div className="mt-8">
              <a
                href="/team"
                className="inline-flex items-center gap-2 text-[13px] font-semibold text-namo-black transition-all duration-200 hover:gap-3 hover:text-accent"
              >
                Meet the Full Team <ArrowRight size={14} />
              </a>
            </div>
          </Reveal>

          {/* Right — photo */}
          <Reveal direction="right" className="h-[330px] lg:h-[420px]">
            <PhotoSlot
              src="/careers/culture-summit.png"
              alt="Namo Labs team at a summit"
              className="h-full w-full rounded-xl"
              imgClassName="object-cover object-center"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
