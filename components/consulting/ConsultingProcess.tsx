"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PROCESS_PHASES } from "@/lib/data/process";
import ProcessGlyph from "@/components/process/ProcessGlyph";
import ScrollIn from "@/components/process/ScrollIn";

/**
 * Condensed six-phase strip, linking through to the full /process page.
 *
 * Reads PROCESS_PHASES directly rather than keeping its own copy: this section
 * previously duplicated all six titles and summaries as a local array, so the
 * two pages could describe the process differently with nothing to catch it.
 * Phase copy now has exactly one home, in lib/data/process.ts.
 *
 * The glyphs are the same drawings /process uses, in their dark tone — a phase
 * should look like itself on both pages.
 */
export default function ConsultingProcess() {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: "url('/process.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      <div className="absolute inset-0 z-10 bg-black/70 backdrop-blur-[2px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-20">
        <div className="text-center mb-24">
          <ScrollIn>
            <h2 className="text-3xl sm:text-4xl font-[700] text-white tracking-tight drop-shadow-md">
              Our Consulting Process
            </h2>
          </ScrollIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 xl:gap-6 relative">
          {/* Connecting line (xl only) — decorative */}
          <motion.div
            aria-hidden="true"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="hidden xl:block absolute top-[48px] left-[8%] right-[8%] h-[2px] bg-gradient-to-r from-accent/0 via-accent to-accent/0 origin-left -z-10 opacity-60"
          />

          {PROCESS_PHASES.map((phase, index) => (
            <ScrollIn
              key={phase.n}
              delay={Math.min(index, 3) * 0.08}
              className="relative flex flex-col items-center text-center group"
            >
              {/* Step number */}
              <div className="absolute top-0 -right-2 xl:right-4 w-6 h-6 bg-accent border border-white/20 shadow-lg rounded-full flex items-center justify-center text-[10px] font-bold text-white z-20 group-hover:scale-125 transition-transform duration-300">
                {index + 1}
              </div>

              <div className="w-24 h-24 bg-black/30 backdrop-blur-xl border border-white/20 shadow-2xl rounded-full flex items-center justify-center mb-6 group-hover:border-accent group-hover:bg-white/10 transition-all duration-300">
                <ProcessGlyph
                  name={phase.glyph}
                  tone="dark"
                  className="h-10 w-10 transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <h3 className="text-[15px] font-bold text-white mb-3 drop-shadow-sm group-hover:text-accent transition-colors">
                {phase.title}
              </h3>

              <p className="text-xs text-white/70 leading-relaxed max-w-[200px] drop-shadow-sm">
                {phase.summary}
              </p>
            </ScrollIn>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            href="/process"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-white font-semibold text-sm transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            See our full process in detail
            <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
