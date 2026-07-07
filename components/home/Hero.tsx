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
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden px-6 pt-32 pb-24">

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
        className="relative flex flex-col items-center w-full z-10"
      >
        


        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          className="relative z-10 text-4xl sm:text-5xl lg:text-[72px] font-[700] text-transparent bg-clip-text bg-gradient-to-b from-black via-black/80 to-black leading-[1.08] tracking-tight"
          style={{
            WebkitTextStroke: '1px rgba(0,0,0,0.1)',
            filter: 'drop-shadow(0px 8px 16px rgba(0,0,0,0.15)) drop-shadow(0px 2px 2px rgba(255,255,255,0.6))'
          }}
        >
          Driving Technology
          <br />
          for{" "}
          <span
            className="text-accent drop-shadow-sm inline-block"
            style={{ WebkitTextFillColor: "unset" }}
          >
            Mankind.
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={fadeUp}
          className="relative z-10 mt-5 text-sm sm:text-[16px] lg:text-[17px] text-transparent bg-clip-text bg-gradient-to-b from-black/90 to-black/70 leading-[1.7] max-w-[640px] font-normal"
          style={{
            filter: 'drop-shadow(0px 4px 8px rgba(0,0,0,0.1)) drop-shadow(0px 1px 1px rgba(255,255,255,0.8))'
          }}
        >
          We build secure digital infrastructure, post-quantum communication systems,
          blockchain solutions, AI-powered platforms, and enterprise technologies
          that enable governments, businesses, and developers to build the future with confidence.
        </motion.p>

        {/* CTA */}
        <motion.div variants={fadeUp} className="relative z-10 mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-[12px] border border-white/60 shadow-[inset_0_1px_3px_rgba(255,255,255,1),inset_0_-2px_6px_rgba(0,0,0,0.05),0_12px_24px_rgba(0,0,0,0.08)] text-namo-black font-[600] px-7 py-3.5 rounded-full hover:bg-white/30 transition-all duration-300 text-[15px]"
          >
            Contact Us
            <ArrowRight size={16} strokeWidth={2} />
          </Link>
        </motion.div>
      </motion.div>


    </section>
  );
}
