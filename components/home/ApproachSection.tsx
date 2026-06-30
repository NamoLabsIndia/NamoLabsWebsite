"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Search, Sparkles, Target, TrendingUp, Shield } from "lucide-react";

const features = [
  { icon: <Search     size={20} />, title: "Research-First",          description: "We start with deep research across domains, industries, and emerging technologies to identify what truly matters." },
  { icon: <Sparkles   size={20} />, title: "AI-Powered Insights",     description: "We leverage advanced AI models to analyze, predict, and uncover opportunities others miss." },
  { icon: <Target     size={20} />, title: "Problem-Centric",         description: "We focus on real business problems, not decks. Solutions are tailored, practical, and executable." },
  { icon: <TrendingUp size={20} />, title: "Impact You Can Measure",  description: "We define success with clear outcomes and KPIs that create long-term, measurable value." },
  { icon: <Shield     size={20} />, title: "Future-Ready Solutions",  description: "Our solutions are secure, scalable, and built for a world shaped by AI, automation, and exponential technologies." },
];

function Feature({ icon, title, description }: (typeof features)[number]) {
  return (
    <div className="flex gap-4">
      <div className="w-11 h-11 rounded-xl bg-accent-light flex items-center justify-center text-accent shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-accent text-[15px] mb-1.5">{title}</h4>
        <p className="text-[13px] text-gray-500 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default function ApproachSection() {
  return (
    <section className="py-24 bg-namo-faint">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-[11px] font-semibold tracking-[0.22em] text-accent uppercase mb-3"
        >
          IT Consulting, Reimagined
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-center text-4xl sm:text-5xl font-black text-namo-black mb-4 leading-tight"
        >
          How Namo Labs
          <br className="hidden sm:block" /> Takes a Different Direction
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center text-gray-500 max-w-xl mx-auto mb-12 leading-relaxed"
        >
          We combine deep research, domain intelligence, and AI to deliver consulting that solves real problems and drives measurable impact.
        </motion.p>

        {/* One large rounded card holding everything */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[32px] border border-white/70 bg-gradient-to-b from-white to-[#eef2fc] shadow-[0_24px_70px_-28px_rgba(80,90,160,0.25)] p-8 sm:p-12"
        >
          <div className="grid lg:grid-cols-[minmax(0,340px)_1fr] gap-10 lg:gap-16 items-start">
            {/* Left — heading + CTA */}
            <div>
              <p className="text-sm font-semibold text-accent mb-4">Our Approach</p>
              <h3 className="text-3xl sm:text-[34px] font-black text-namo-black leading-[1.15] mb-6">
                Research-Backed.<br />
                AI-Powered. Impact-Driven.
              </h3>
              <p className="text-gray-500 text-[15px] leading-relaxed mb-8">
                Unlike traditional consulting firms that rely on templates and assumptions, we go deep — into research, data, and technology — to design solutions that are future-ready and built for scale.
              </p>
              <Link
                href="/consulting"
                className="inline-flex items-center gap-2 bg-namo-black text-white font-medium px-6 py-3.5 rounded-full text-sm hover:bg-gray-800 transition-colors"
              >
                Explore Consulting <ArrowRight size={14} />
              </Link>
            </div>

            {/* Right — feature grid with dividers */}
            <div className="lg:border-l lg:border-gray-200/70 lg:pl-16">
              <div className="grid sm:grid-cols-2 gap-x-10">
                <div className="pb-7">
                  <Feature {...features[0]} />
                </div>
                <div className="pb-7 sm:pl-8 sm:border-l sm:border-gray-200/70">
                  <Feature {...features[1]} />
                </div>

                <div className="col-span-full border-t border-gray-200/70" />

                <div className="py-7">
                  <Feature {...features[2]} />
                </div>
                <div className="py-7 sm:pl-8 sm:border-l sm:border-gray-200/70">
                  <Feature {...features[3]} />
                </div>

                <div className="col-span-full border-t border-gray-200/70" />

                <div className="col-span-full pt-7">
                  <Feature {...features[4]} />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
