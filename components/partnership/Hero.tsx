"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Atom, Rocket, Globe } from "lucide-react";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const badges = [
  { icon: <ShieldCheck size={20} />, label: "Secure by Design" },
  { icon: <Atom size={20} />, label: "Research Driven" },
  { icon: <Rocket size={20} />, label: "Built for Impact" },
  { icon: <Globe size={20} />, label: "Partners for the Future" },
];

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[640px] items-center overflow-hidden pt-28 pb-16 sm:min-h-[720px] sm:pt-32 lg:min-h-[840px] lg:pt-36">
      {/* ── Full-bleed hero image ── */}
      <Image
        src="/Partnership/hero/hero.png"
        alt="Namo Labs partnership network connecting governments, enterprises, research institutions, cloud & infra partners, and startups"
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover object-center"
      />

      {/* ── Copy, overlaid on the left ── */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative mx-auto w-full max-w-7xl px-6 sm:px-8"
      >
        <div className="max-w-xl">
          <motion.div variants={fadeUp} className="flex flex-col items-start">
            <span className="text-[13px] font-bold uppercase tracking-[0.18em] text-accent">
              Partnerships
            </span>
            <span className="mt-2 h-[3px] w-8 rounded-full bg-accent" />
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-6 text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight leading-[1.08] text-namo-black"
          >
            Enterprise Partnerships
            <br />
            for Long-Term
            <br />
            <span className="text-accent">Innovation.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-lg text-base sm:text-lg leading-relaxed text-gray-600"
          >
            Whether you&apos;re an enterprise, government, research institution,
            or startup, we collaborate to solve complex technological challenges
            through research, engineering, and product innovation.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-colors hover:bg-accent/90"
            >
              Become a Partner
              <ArrowRight size={16} />
            </Link>
            <a
              href="#partnership-models"
              className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-white px-7 py-3.5 text-sm font-semibold text-accent transition-colors hover:bg-accent-light"
            >
              Explore Partnership Models
              <ArrowRight size={16} />
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-12 flex flex-wrap gap-x-8 gap-y-5"
          >
            {badges.map((b) => (
              <div key={b.label} className="flex items-center gap-2.5">
                <span className="text-accent">{b.icon}</span>
                <span className="text-sm font-medium text-namo-black">{b.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
