"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Blocks, Brain, Atom, Cloud } from "lucide-react";

const domains = [
  {
    title: "Cryptography",
    description: "Building secure digital foundations for a trusted world.",
    icon: Shield,
  },
  {
    title: "Blockchain",
    description: "Trust infrastructure for the digital economy.",
    icon: Blocks,
  },
  {
    title: "Artificial Intelligence",
    description: "Intelligent systems designed to solve real-world challenges.",
    icon: Brain,
  },
  {
    title: "Quantum",
    description: "Preparing for the post-quantum future with advanced research.",
    icon: Atom,
  },
  {
    title: "Cloud",
    description: "Scalable, resilient infrastructure powering modern innovation.",
    icon: Cloud,
  },
];

export default function WhatWeBuild() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[12px] font-bold tracking-[0.15em] text-accent uppercase mb-4"
          >
            WHAT WE BUILD
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-3xl md:text-5xl font-bold text-namo-black tracking-tight"
          >
            Technologies that build a better future.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-[3px] w-12 bg-accent mx-auto mt-8 rounded-full"
          />
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {domains.map((domain, i) => {
            const Icon = domain.icon;
            return (
              <motion.div
                key={domain.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center p-8 lg:px-6 rounded-[32px] bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-300 group"
              >
                {/* Icon Container */}
                <div className="w-16 h-16 rounded-full bg-[#f4f7ff] text-accent flex items-center justify-center mb-8">
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-namo-black mb-5 group-hover:text-accent transition-colors">
                  {domain.title}
                </h3>
                <p className="text-[14px] text-gray-500 leading-relaxed font-medium mb-12 flex-grow">
                  {domain.description}
                </p>
                
                {/* Bottom line indicator */}
                <div className="h-[2px] w-12 bg-accent rounded-full transition-all duration-300 group-hover:w-20" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
