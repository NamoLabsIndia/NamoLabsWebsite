"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, FlaskConical, LayoutTemplate, Hammer, ShieldCheck, HeadphonesIcon, ArrowRight } from "lucide-react";

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
    <section className="py-16 relative overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: "url('/process.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-black/70 backdrop-blur-[2px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-20">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-[700] text-white tracking-tight drop-shadow-md"
          >
            Our Consulting Process
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 xl:gap-6 relative">
          
          {/* Animated Connecting line (visible on xl screens) to create the flow effect */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="hidden xl:block absolute top-[48px] left-[8%] right-[8%] h-[2px] bg-gradient-to-r from-accent/0 via-accent to-accent/0 origin-left -z-10 opacity-60" 
          />

          {PROCESS_STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Step Number Badge */}
                <div className="absolute top-0 -right-2 xl:right-4 w-6 h-6 bg-accent border border-white/20 shadow-lg rounded-full flex items-center justify-center text-[10px] font-bold text-white z-20 group-hover:scale-125 transition-transform duration-300">
                  {index + 1}
                </div>

                {/* Glass Circle */}
                <div className="w-24 h-24 bg-black/30 backdrop-blur-xl border border-white/20 shadow-2xl rounded-full flex items-center justify-center mb-6 text-white group-hover:text-accent group-hover:border-accent group-hover:bg-white/10 transition-all duration-300">
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                
                <h4 className="text-[15px] font-bold text-white mb-3 drop-shadow-sm group-hover:text-accent transition-colors">
                  {step.title}
                </h4>
                
                <p className="text-xs text-white/70 leading-relaxed max-w-[200px] drop-shadow-sm">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            href="/process"
            className="inline-flex items-center gap-2 text-white font-semibold text-sm hover:text-accent transition-colors"
          >
            See our full process in detail
            <ArrowRight size={16} strokeWidth={2} />
          </Link>
        </div>
      </div>
    </section>
  );
}
