"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export default function ConsultingHero() {
  return (
    <section className="relative pt-20 pb-16 lg:pt-28 lg:pb-24 overflow-hidden bg-white">
      {/* Background ambient gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-50/50 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Text Content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[11px] font-bold tracking-[0.2em] text-accent uppercase mb-6 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-accent"></span>
                Consulting
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-[700] text-namo-black tracking-tight leading-[1.1] mb-6"
            >
              Research-Backed Consulting for{" "}
              <span className="text-accent">Tomorrow’s Technology.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-600 leading-relaxed mb-10 max-w-xl"
            >
              We help governments, enterprises, institutions and startups solve complex technology challenges through research-driven consulting, secure engineering and future-ready digital transformation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-[#0A0A0A] text-white font-medium px-8 py-4 rounded-full text-[14px] hover:bg-gray-800 transition-colors shadow-lg shadow-black/10"
              >
                Explore Consulting
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-namo-black font-medium px-8 py-4 rounded-full text-[14px] hover:bg-gray-50 transition-colors shadow-sm border border-gray-200"
              >
                <Calendar size={16} className="text-gray-400" />
                Schedule Consultation
              </Link>
            </motion.div>
          </div>

          {/* Right Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:ml-auto w-full max-w-lg mx-auto lg:max-w-none"
          >
            <div className="relative aspect-square w-full">
              {/* Fallback while illustration is generated */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-indigo-50/30 rounded-3xl border border-white/60 shadow-[0_20px_60px_rgba(59,91,255,0.08)] overflow-hidden flex items-center justify-center p-8">
                <img 
                  src="/Image%201.jpg" 
                  alt="Enterprise ecosystem illustration" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 400 400"><rect width="400" height="400" fill="%23f8fafc"/><text x="50%" y="50%" font-family="sans-serif" font-size="14" fill="%2394a3b8" text-anchor="middle">Illustration: Premium Blue Enterprise Ecosystem</text></svg>';
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
