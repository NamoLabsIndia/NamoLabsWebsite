"use client";

import React from "react";
import { motion } from "framer-motion";
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
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-blue-50/50 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-[700] text-namo-black tracking-tight"
          >
            Our Consulting Process
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 relative">
          
          {/* Connecting line (visible on xl screens) */}
          <div className="hidden xl:block absolute top-[44px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-gray-200 to-transparent -z-10" />

          {PROCESS_STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Step Number Badge */}
                <div className="absolute -top-3 -right-2 w-6 h-6 bg-white border border-gray-100 shadow-sm rounded-full flex items-center justify-center text-[10px] font-bold text-gray-500 z-10">
                  {index + 1}
                </div>

                <div className="w-24 h-24 bg-white border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] rounded-full flex items-center justify-center mb-6 text-accent hover:scale-110 transition-transform duration-300">
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                
                <h4 className="text-[15px] font-bold text-namo-black mb-3">
                  {step.title}
                </h4>
                
                <p className="text-xs text-gray-500 leading-relaxed max-w-[200px]">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
