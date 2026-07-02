"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" as const } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden px-6 pt-16 pb-24">

      {/* ── Flowing blue-wave background (image from design) ── */}
      <div className="absolute inset-0 -z-10">
        {/* Base wash so the top stays light behind the headline */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f4f6ff] via-white to-white" />

        {/* The blue silk-wave image, anchored to the bottom of the hero */}
        <div
          className="absolute inset-0 bg-no-repeat opacity-70"
          style={{
            backgroundImage: "url('/hero-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center bottom",
          }}
        />

        {/* White veil - keeps the headline + subtext readable, waves mostly at the bottom */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.8) 40%, rgba(255,255,255,0.45) 62%, rgba(255,255,255,0.1) 82%, rgba(255,255,255,0) 100%)",
          }}
        />

        {/* Fade the very bottom into the next section */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32"
          style={{ background: "linear-gradient(to bottom, transparent, #ffffff)" }}
        />
      </div>

      {/* ── Content ── */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center"
      >

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          className="text-5xl sm:text-6xl lg:text-[72px] font-black text-namo-black leading-[1.05] tracking-tight max-w-3xl"
        >
          Driving Technology
          <br />
          for{" "}
          <span
            className="text-accent"
            style={{ WebkitTextFillColor: "unset" }}
          >
            Mankind
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={fadeUp}
          className="mt-6 text-base sm:text-lg text-gray-500 leading-relaxed max-w-2xl"
        >
          We build secure digital infrastructure, post-quantum communication systems,
          blockchain solutions, AI-powered platforms, and enterprise technologies
          that enable governments, businesses, and developers to build the future with confidence.
        </motion.p>

        {/* CTA */}
        <motion.div variants={fadeUp} className="mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-namo-black text-white font-semibold px-8 py-4 rounded-full hover:bg-gray-800 transition-colors text-base shadow-lg"
          >
            Contact Us
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </motion.div>


    </section>
  );
}
