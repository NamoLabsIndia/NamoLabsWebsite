"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search, FlaskConical, LayoutTemplate, Hammer, ShieldCheck, HeadphonesIcon } from "lucide-react";

const PROCESS_STEPS = [
  {
    title: "Discovery",
    description: "Aligning on goals, auditing existing systems and defining requirements.",
    icon: Search
  },
  {
    title: "Research",
    description: "Deep technical analysis and feasibility studies for emerging tech.",
    icon: FlaskConical
  },
  {
    title: "Architecture",
    description: "Designing secure, scalable and future-ready system blueprints.",
    icon: LayoutTemplate
  },
  {
    title: "Implementation",
    description: "Enterprise-grade engineering and secure deployment.",
    icon: Hammer
  },
  {
    title: "Validation",
    description: "Rigorous security audits, testing and compliance checks.",
    icon: ShieldCheck
  },
  {
    title: "Long-Term Support",
    description: "Ongoing optimization, maintenance and scaling.",
    icon: HeadphonesIcon
  }
];

export default function ConsultingProcess() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Slide content left as we scroll down. 
  const xTransform = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);
  // A glowing gradient line tracking progress
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-[#FAFAFA]">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden pt-20 pb-20">
        
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-50/80 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 w-full mb-24 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl font-[800] text-namo-black tracking-tight"
          >
            Our Consulting Process
          </motion.h2>
        </div>

        <div className="relative w-full">
          {/* Animated Connecting Line Track */}
          <div className="absolute top-[60px] left-0 w-full h-[2px] bg-gray-200/60 z-0 hidden md:block">
            <motion.div 
              style={{ width: lineWidth, originX: 0 }}
              className="h-full bg-accent shadow-[0_0_15px_rgba(59,91,255,0.5)]"
            />
          </div>

          <motion.div 
            style={{ x: xTransform }}
            className="flex gap-12 md:gap-24 px-6 md:px-[10vw] w-[max-content]"
          >
            {PROCESS_STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="relative flex flex-col items-center text-center w-[280px] shrink-0"
                >
                  {/* Step Number Badge */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "0px -50px" }}
                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                    className="absolute top-0 right-16 w-8 h-8 bg-namo-black border-[3px] border-white shadow-xl rounded-full flex items-center justify-center text-[12px] font-bold text-white z-20"
                  >
                    {index + 1}
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "0px -50px" }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="w-[120px] h-[120px] bg-white border border-gray-100 shadow-[0_20px_40px_rgba(0,0,0,0.04)] rounded-[32px] flex items-center justify-center mb-8 text-namo-black hover:text-accent hover:border-accent/30 hover:scale-105 hover:-translate-y-2 transition-all duration-500 relative z-10 group"
                  >
                    <Icon size={40} strokeWidth={1.5} className="group-hover:rotate-6 transition-transform duration-500" />
                  </motion.div>
                  
                  <motion.h4 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "0px -50px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xl font-bold text-namo-black mb-4"
                  >
                    {step.title}
                  </motion.h4>
                  
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "0px -50px" }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-[15px] text-gray-500 leading-relaxed font-medium"
                  >
                    {step.description}
                  </motion.p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
