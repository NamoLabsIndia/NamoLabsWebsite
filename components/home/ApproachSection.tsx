"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Search, Sparkles, Target, TrendingUp, Shield } from "lucide-react";

const features = [
  { icon: <Search size={20} />, title: "Research-First", description: "We start with deep research across domains, industries, and emerging technologies to identify what truly matters." },
  { icon: <Sparkles size={20} />, title: "AI-Powered Insights", description: "We leverage advanced AI models to analyze, predict, and uncover opportunities others miss." },
  { icon: <Target size={20} />, title: "Problem-Centric", description: "We focus on real business problems, not decks. Solutions are tailored, practical, and executable." },
  { icon: <TrendingUp size={20} />, title: "Impact You Can Measure", description: "We define success with clear outcomes and KPIs that create long-term, measurable value." },
  { icon: <Shield size={20} />, title: "Future-Ready Solutions", description: "Our solutions are secure, scalable, and built for a world shaped by AI, automation, and exponential technologies." },
];

function Feature({ icon, title, description }: (typeof features)[number]) {
  return (
    <div className="flex gap-5">
      <div className="w-12 h-12 rounded-[14px] bg-[#F4F6FF] flex items-center justify-center text-accent shrink-0 border border-blue-100/50">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-accent text-[16px] mb-2">{title}</h4>
        <p className="text-[14px] text-gray-500 leading-[1.6]">{description}</p>
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
          className="text-center text-[12px] font-bold tracking-[0.3em] text-accent uppercase mb-4"
        >
          IT Consulting, Reimagined
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-center text-4xl sm:text-6xl font-[700] text-namo-black mb-6 leading-[1.1]"
        >
          How Namo Labs
          <br className="hidden sm:block" /> Takes a Different Direction
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center text-gray-500 text-[18px] max-w-[700px] mx-auto mb-14 leading-[1.6]"
        >
          We combine deep research, domain intelligence, and AI to deliver consulting that solves real problems and drives measurable impact.
        </motion.p>

        {/* One large rounded card holding everything */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[36px] bg-white shadow-[0_8px_40px_rgb(0,0,0,0.06)] border border-gray-100/50 p-8 sm:p-14 lg:p-16"
        >
          <div className="grid lg:grid-cols-[minmax(0,340px)_1fr] gap-10 lg:gap-16 items-start">
            {/* Left - heading + CTA */}
            <div>
              <p className="text-[15px] font-semibold text-accent mb-4">Our Approach</p>
              <h3 className="text-3xl sm:text-[36px] font-[700] text-namo-black leading-[1.2] mb-6 tracking-tight">
                Research-Backed.<br />
                AI-Powered. Impact-Driven.
              </h3>
              <p className="text-gray-500 text-[15px] leading-[1.65] mb-10">
                Unlike traditional consulting firms that rely on templates and assumptions, we go deep - into research, data, and technology - to design solutions that are future-ready and built for scale.
              </p>
              <Link
                href="/consulting"
                className="inline-flex items-center gap-3 bg-[#0A0A0A] text-white font-medium px-8 py-4 rounded-full text-[15px] hover:bg-gray-800 transition-colors shadow-sm"
              >
                Explore Consulting <ArrowRight size={16} strokeWidth={2} />
              </Link>
            </div>

            {/* Right - feature grid with dividers */}
            <div className="lg:border-l lg:border-gray-100 lg:pl-16">
              <div className="grid sm:grid-cols-2 gap-x-10">
                <div className="pb-8">
                  <Feature {...features[0]} />
                </div>
                <div className="pb-8 sm:pl-10 sm:border-l sm:border-gray-100">
                  <Feature {...features[1]} />
                </div>

                <div className="col-span-full border-t border-gray-100" />

                <div className="py-8">
                  <Feature {...features[2]} />
                </div>
                <div className="py-8 sm:pl-10 sm:border-l sm:border-gray-100">
                  <Feature {...features[3]} />
                </div>

                <div className="col-span-full border-t border-gray-100" />

                <div className="col-span-full pt-8">
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
