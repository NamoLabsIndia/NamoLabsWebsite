"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export default function ConsultingCTA() {
  return (
    <section className="py-32 bg-white relative overflow-hidden flex flex-col justify-center min-h-[70vh]">
      {/* Dynamic Animated Ambient Background */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-indigo-100/60 to-blue-50/60 rounded-full blur-[100px] pointer-events-none" 
      />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-6xl lg:text-[72px] font-[800] text-namo-black tracking-[-0.02em] mb-6"
        >
          Let’s Build the <span className="text-accent">Future Together.</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-12 font-medium"
        >
          Whether you’re modernizing infrastructure, adopting emerging technologies, or solving complex engineering challenges, our consulting team is ready to help.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-24"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-3 bg-[#0A0A0A] text-white font-semibold px-8 py-4 rounded-full text-[15px] hover:bg-gray-900 transition-all duration-300 shadow-xl shadow-black/10 hover:shadow-2xl hover:shadow-black/20 hover:-translate-y-1 overflow-hidden relative w-full sm:w-auto"
          >
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full" />
            <span className="relative z-10">Schedule Consultation</span>
            <ArrowRight size={18} className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-3 bg-white text-namo-black font-semibold px-8 py-4 rounded-full text-[15px] hover:bg-gray-50 transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-200 hover:border-gray-300 hover:-translate-y-1 hover:shadow-xl w-full sm:w-auto"
          >
            <Mail size={18} className="text-gray-400 group-hover:text-accent transition-colors duration-300" />
            Contact Us
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-[11px] font-bold tracking-[0.3em] text-gray-400 uppercase"
        >
          For Humanity Always.
        </motion.p>
      </div>
    </section>
  );
}
