"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export default function ConsultingHero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacityText = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  return (
    <section ref={containerRef} className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-white min-h-[90vh] flex items-center">
      {/* Dynamic Floating Background Gradients */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-50/80 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-50/80 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/4" 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-12 items-center">
          {/* Left Text Content */}
          <motion.div style={{ opacity: opacityText }} className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-[11px] font-bold tracking-[0.2em] text-accent uppercase mb-8 flex items-center gap-3">
                <span className="w-10 h-[2px] bg-accent rounded-full"></span>
                Consulting
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-6xl lg:text-[72px] font-[800] text-namo-black tracking-[-0.03em] leading-[1.05] mb-8"
            >
              Research-Backed Consulting for{" "}
              <span className="text-accent bg-clip-text">Tomorrow’s Technology.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl text-gray-600 leading-relaxed mb-12 max-w-xl font-medium"
            >
              We help governments, enterprises, institutions and startups solve complex technology challenges through research-driven consulting, secure engineering and future-ready digital transformation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-5"
            >
              <Link
                href="#services"
                className="group inline-flex items-center justify-center gap-3 bg-[#0A0A0A] text-white font-semibold px-8 py-4 rounded-full text-[15px] hover:bg-gray-900 transition-all duration-300 shadow-xl shadow-black/10 hover:shadow-2xl hover:shadow-black/20 hover:-translate-y-1 overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full" />
                <span className="relative z-10">Explore Consulting</span>
                <ArrowRight size={18} className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 bg-white text-namo-black font-semibold px-8 py-4 rounded-full text-[15px] hover:bg-gray-50 transition-all duration-300 shadow-sm border border-gray-200 hover:border-gray-300 hover:-translate-y-1 hover:shadow-md"
              >
                <Calendar size={18} className="text-gray-400 group-hover:text-accent transition-colors duration-300" />
                Schedule Consultation
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ y: yImage }}
            className="relative w-full mx-auto lg:max-w-none perspective-1000"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div 
                whileHover={{ rotateX: 2, rotateY: -5, scale: 1.02 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative aspect-square w-full rounded-[40px] overflow-hidden shadow-2xl shadow-accent/20 border border-gray-100 bg-gradient-to-tr from-blue-50/50 to-indigo-50/50 backdrop-blur-sm"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <img 
                    src="/Image%201.jpg" 
                    alt="Enterprise ecosystem illustration" 
                    className="w-full h-full object-cover scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 400 400"><rect width="400" height="400" fill="%23f8fafc"/><text x="50%" y="50%" font-family="sans-serif" font-size="14" fill="%2394a3b8" text-anchor="middle">Illustration: Premium Blue Enterprise Ecosystem</text></svg>';
                    }}
                  />
                </div>
                {/* Glossy overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
