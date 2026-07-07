"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export default function ConsultingHero() {
  return (
    <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden min-h-[90vh] flex flex-col justify-center">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: "url('/Image%201.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>
      
      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 z-10 bg-black/60" />
      
      {/* Subtle bottom gradient to blend into the next section */}
      <div className="absolute inset-x-0 bottom-0 h-32 z-10 bg-gradient-to-t from-white to-transparent" />

      <div className="relative z-20 max-w-4xl mx-auto px-6 w-full mt-10 sm:mt-0 flex flex-col items-center text-center">
        
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-5xl lg:text-5xl font-[800] text-white tracking-tight leading-[1.1] mb-6 drop-shadow-sm max-w-5xl"
        >
          Research-Backed Consulting <br className="hidden sm:block" />
          for <span className="text-accent">Tomorrow’s Technology.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg sm:text-xl text-white/90 leading-relaxed mb-10 max-w-2xl drop-shadow-sm font-medium"
        >
          We help governments, enterprises, institutions and startups solve complex technology challenges through research-driven consulting, secure engineering and future-ready digital transformation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <Link
            href="#services"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-accent text-white font-semibold px-8 py-4 rounded-full text-[14px] hover:bg-accent/90 transition-colors shadow-lg shadow-accent/20"
          >
            Explore Consulting
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/contact"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white font-semibold px-8 py-4 rounded-full text-[14px] hover:bg-white/20 transition-colors shadow-sm border border-white/30"
          >
            <Calendar size={16} className="text-white/80" />
            Schedule Consultation
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
