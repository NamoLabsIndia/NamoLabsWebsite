"use client";

import React from "react";
import { motion } from "framer-motion";

export default function OurBelief() {
  return (
    <section className="py-12 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[40px] bg-white border border-gray-100 shadow-[0_8px_40px_rgba(0,0,0,0.04)] overflow-hidden"
        >
          <div className="grid lg:grid-cols-2 items-stretch">
            
            {/* Left Content */}
            <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
              {/* Quote Mark */}
              <div className="text-5xl md:text-[60px] leading-none text-accent font-black opacity-80 mb-4 font-serif">
                &ldquo;
              </div>
              
              <p className="text-[11px] font-bold text-accent tracking-[0.15em] uppercase mb-4">
                OUR BELIEF
              </p>
              
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-namo-black leading-[1.2] tracking-tight mb-6">
                Technology is meaningful only when it improves lives, strengthens institutions, and creates opportunities for future generations.
              </h2>
              
              <div className="w-12 h-1 bg-accent mb-6" />
              
              <p className="text-gray-600 text-lg md:text-[18px] leading-[1.7] font-medium max-w-[480px]">
                At Namo Labs, we build with purpose.<br />
                Every line of code, every system, and every solution is designed to make a positive and lasting impact on humanity.
              </p>
            </div>

            {/* Right Image */}
            <div className="relative h-[300px] lg:h-auto min-h-[400px]">
              <img
                src="/About%205.png"
                alt="Father and son holding glowing earth"
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1000&auto=format&fit=crop';
                }}
              />
              {/* Blend gradient for desktop (left edge) */}
              <div className="absolute inset-y-0 left-0 w-24 sm:w-32 bg-gradient-to-r from-white via-white/70 to-transparent z-10 hidden lg:block pointer-events-none" />
              {/* Blend gradient for mobile (top edge, where it meets the text block) */}
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white via-white/70 to-transparent z-10 lg:hidden pointer-events-none" />
            </div>
            
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
