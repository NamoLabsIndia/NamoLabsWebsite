"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ClipboardList, User, FileText, Globe } from "lucide-react";
import DotWave from "./DotWave";

export default function ResearchHero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-[#FAFAFA] pt-8 pb-24">
      {/* ── Dynamic 3D Dot Wave Background ── */}
      <DotWave />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 h-full flex flex-col justify-between flex-1">
        
        {/* ── Main Content ── */}
        <div className="max-w-2xl mt-0 sm:mt-4">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold tracking-[0.2em] text-accent uppercase mb-6"
          >
            Research at Namo Labs
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-[60px] font-extrabold text-namo-black leading-[1.1] tracking-tighter mb-8"
          >
            Deep Research.
            <br />
            Real World <span className="text-accent">Impact.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[17px] text-gray-600 leading-[1.8] font-medium max-w-lg mb-12"
          >
            We conduct deep, interdisciplinary research across multiple
            domains to solve complex problems and build the foundation
            for a secure, intelligent and future-ready digital world.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              href="#explore"
              className="inline-flex items-center gap-2 bg-[#0A0A0A] text-white font-medium px-8 py-4 rounded-full hover:bg-gray-800 transition-colors text-[15px] shadow-lg"
            >
              Explore Our Research
              <ArrowRight size={18} strokeWidth={2} />
            </Link>
          </motion.div>
        </div>

        {/* ── Stats Bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 w-full"
        >
          <div className="bg-white/80 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.04)] rounded-[32px] p-8 sm:p-10 w-full flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-4">
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-accent flex items-center justify-center shrink-0">
                <ClipboardList size={24} strokeWidth={2} />
              </div>
              <div>
                <p className="text-xl font-bold text-namo-black">10+</p>
                <p className="text-sm text-gray-500 font-medium">Research Domains</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-accent flex items-center justify-center shrink-0">
                <User size={24} strokeWidth={2} />
              </div>
              <div>
                <p className="text-xl font-bold text-namo-black">20+</p>
                <p className="text-sm text-gray-500 font-medium">Active Researchers</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-accent flex items-center justify-center shrink-0">
                <FileText size={24} strokeWidth={2} />
              </div>
              <div>
                <p className="text-xl font-bold text-namo-black">10+</p>
                <p className="text-sm text-gray-500 font-medium">Research Papers</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-accent flex items-center justify-center shrink-0">
                <Globe size={24} strokeWidth={2} />
              </div>
              <div>
                <p className="text-xl font-bold text-namo-black">Global</p>
                <p className="text-sm text-gray-500 font-medium">Industry Impact</p>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
