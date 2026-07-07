"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export default function ConsultingCTA() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-50/60 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl lg:text-6xl font-[700] text-namo-black tracking-tight mb-6"
        >
          Let’s Build the <span className="text-accent">Future Together.</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10"
        >
          Whether you’re modernizing infrastructure, adopting emerging technologies, or solving complex engineering challenges, our consulting team is ready to help.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-[#0A0A0A] text-white font-medium px-8 py-4 rounded-full text-[14px] hover:bg-gray-800 transition-colors shadow-lg shadow-black/10 w-full sm:w-auto"
          >
            Schedule Consultation
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-namo-black font-medium px-8 py-4 rounded-full text-[14px] hover:bg-gray-50 transition-colors shadow-sm border border-gray-200 w-full sm:w-auto"
          >
            <Mail size={16} className="text-gray-400" />
            Contact Us
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-[11px] font-bold tracking-[0.3em] text-gray-400 uppercase"
        >
          For Humanity Always.
        </motion.p>
      </div>
    </section>
  );
}
