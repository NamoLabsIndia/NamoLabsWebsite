"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Lightbulb, Code2, Rocket, Target } from "lucide-react";

const timelineSteps = [
  { label: "Research", icon: Search },
  { label: "Innovation", icon: Lightbulb },
  { label: "Engineering", icon: Code2 },
  { label: "Deployment", icon: Rocket },
  { label: "Impact", icon: Target },
];

export default function WhyWeExist() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-16 md:py-24">
      {/* Right Image Background with fading edge */}
      <div className="absolute inset-y-0 right-0 w-[50%] lg:w-[60%] hidden md:block z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent z-10 w-[40%]" />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white to-transparent h-[15%] z-10" />
        <div className="absolute inset-x-0 top-0 bg-gradient-to-b from-white to-transparent h-[15%] z-10" />
        <img
          src="/img/about/why-we-exist.jpg"
          alt="Man standing on mountain peak looking at horizon"
          className="w-full h-full object-cover object-[center_30%] [mask-image:linear-gradient(to_left,black_60%,transparent)]"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1516625807978-43e7fb02a3a1?q=80&w=2000&auto=format&fit=crop';
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-[1fr_auto] gap-12 lg:gap-24 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[480px] lg:max-w-[540px] pt-8"
        >
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-namo-black tracking-tight mb-6">
            Why We Exist
          </h2>
          <div className="h-[3px] w-12 bg-accent mb-12" />
          
          <div className="space-y-8 text-[16px] md:text-[18px] leading-[1.65] font-medium text-[#4a5568]">
            <p>
              Technology has become one of humanity's most powerful tools.
            </p>
            <p>
              Its impact extends beyond software into healthcare, national security, finance, education, scientific discovery, and public infrastructure.
            </p>
            <p>
              Namo Labs exists to ensure that this technological progress remains secure, responsible, and beneficial for mankind.
            </p>
          </div>
        </motion.div>

        {/* Timeline (Middle/Right) */}
        <div className="relative py-12 md:mr-12 lg:mr-24 self-center">
          {/* Vertical Line */}
          <div className="absolute top-12 bottom-12 left-[28px] w-[2px] bg-blue-100/50" />
          
          {/* Timeline Items */}
          <div className="space-y-12 relative z-10">
            {timelineSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="flex items-center gap-8 group"
                >
                  <div className="relative">
                    {/* The circle with icon */}
                    <div className="w-14 h-14 rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-50 flex items-center justify-center text-accent relative z-10 group-hover:scale-110 transition-transform duration-300">
                      <Icon size={24} strokeWidth={2} />
                    </div>
                    {/* Glowing dots on the line */}
                    {index < timelineSteps.length - 1 && (
                      <div className="absolute top-[60px] left-[26px] w-[4px] h-[4px] rounded-full bg-accent/40 animate-pulse" />
                    )}
                    {index > 0 && (
                      <div className="absolute -top-[16px] left-[26px] w-[4px] h-[4px] rounded-full bg-accent/40 animate-pulse" />
                    )}
                  </div>
                  <span className="text-[18px] font-bold text-namo-black tracking-wide">
                    {step.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
