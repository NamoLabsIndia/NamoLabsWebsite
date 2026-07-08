"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Lightbulb, Code2, Rocket, Target } from "lucide-react";

const timelineSteps = []; // Removed timeline steps
export default function WhyWeExist() {
  return (
    <section className="relative w-full overflow-hidden py-16 md:py-24">
      {/* Right Image Background with fading edge */}
      <div className="absolute inset-y-0 right-0 w-[50%] lg:w-[60%] hidden md:block z-0 pointer-events-none">
        <img
          src="/About%202.png"
          alt="Man standing on mountain peak looking at horizon"
          className="absolute inset-0 w-full h-full object-cover object-[center_30%]"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1516625807978-43e7fb02a3a1?q=80&w=2000&auto=format&fit=crop';
          }}
        />
        <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white to-transparent h-[15%] z-10" />
        <div className="absolute inset-x-0 top-0 bg-gradient-to-b from-white to-transparent h-[15%] z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex min-h-[500px] items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[500px] lg:max-w-[560px] pt-8"
        >
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-namo-black tracking-tight mb-6">
            Why We Exist
          </h2>
          <div className="h-[3px] w-12 bg-accent mb-8" />
          
          <div className="text-[16px] md:text-[18px] leading-[1.7] font-medium text-[#4a5568]">
            <p>
              Technology has become one of humanity's most powerful tools. Its impact extends beyond software into healthcare, national security, finance, education, scientific discovery, and public infrastructure. Namo Labs exists to ensure that this technological progress remains secure, responsible, and beneficial for mankind.
            </p>
          </div>
        </motion.div>

        {/* Timeline removed per request */}
      </div>
    </section>
  );
}
