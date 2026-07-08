"use client";

import React from "react";
import { motion } from "framer-motion";

const domains = [
  {
    title: "Cryptography",
    description: "Building secure digital foundations for a trusted world.",
    image: "/cryptography logo .webp",
  },
  {
    title: "Blockchain",
    description: "Trust infrastructure for the digital economy.",
    image: "/Blockchain logo.jpg",
  },
  {
    title: "Artificial Intelligence",
    description: "Intelligent systems designed to solve real-world challenges.",
    image: "/AI logo.jpg",
  },
  {
    title: "Quantum",
    description: "Preparing for the post-quantum future with advanced research.",
    image: "/Quantum logo.avif",
  },
  {
    title: "Cloud",
    description: "Scalable, resilient infrastructure powering modern innovation.",
    image: "/cloud tech logo .webp",
  },
];

export default function WhatWeBuild() {
  return (
    <section className="py-16 md:py-24 overflow-hidden">
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-6">
          {domains.map((domain, i) => {
            return (
              <motion.div
                key={domain.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center p-4 sm:p-6 lg:px-6 rounded-[20px] sm:rounded-[32px] bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-300 group"
              >
                {/* Image Container */}
                <div className="w-full aspect-square mb-6 relative rounded-[16px] overflow-hidden bg-gray-50 shadow-inner">
                  <img 
                    src={domain.image} 
                    alt={domain.title} 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                {/* Content */}
                <h3 className="text-[15px] sm:text-xl font-bold text-namo-black mb-2 sm:mb-5 group-hover:text-accent transition-colors leading-tight">
                  {domain.title}
                </h3>
                <p className="text-[11px] sm:text-[14px] text-gray-500 leading-relaxed font-medium mb-6 sm:mb-12 flex-grow">
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
