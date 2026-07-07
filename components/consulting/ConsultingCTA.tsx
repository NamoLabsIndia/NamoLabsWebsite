"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export default function ConsultingCTA() {
  return (
    <section className="py-16 sm:py-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: "url('/Together.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-black/70 backdrop-blur-[2px]" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-20 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl lg:text-6xl font-[800] text-white tracking-tight mb-6 drop-shadow-md"
        >
          Let’s Build the <span className="text-accent">Future Together.</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-10 drop-shadow-sm font-medium"
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
            className="inline-flex items-center justify-center gap-2 bg-accent text-white font-semibold px-8 py-4 rounded-full text-[14px] hover:bg-accent/90 transition-colors shadow-lg shadow-accent/20 w-full sm:w-auto"
          >
            Schedule Consultation
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white font-semibold px-8 py-4 rounded-full text-[14px] hover:bg-white/20 transition-colors shadow-sm border border-white/30 w-full sm:w-auto"
          >
            <Mail size={16} className="text-white/80" />
            Contact Us
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-[11px] font-bold tracking-[0.3em] text-white/40 uppercase"
        >
          For Humanity Always.
        </motion.p>
      </div>
    </section>
  );
}
