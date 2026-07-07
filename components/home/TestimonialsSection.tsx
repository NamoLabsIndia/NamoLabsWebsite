"use client";

import React from "react";
import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    quote: "Namo Labs' approach to quantum-secure architecture has fundamentally transformed how we view our long-term data resilience. Their research is second to none.",
    author: "Dr. Elena Rostova",
    role: "Chief Information Security Officer, GlobalTech Financial",
  },
  {
    quote: "The deep tech insights provided by Namo Labs have been invaluable for our aerospace navigation systems. Their TierraTrace protocol is revolutionary.",
    author: "Marcus Chen",
    role: "Director of Systems Engineering, AeroSpace Systems",
  },
  {
    quote: "Integrating their blockchain and cryptography research allowed us to future-proof our decentralized identity solutions years ahead of the curve.",
    author: "Sarah Jenkins",
    role: "VP of Product, SecurID Networks",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[12px] font-bold tracking-[0.3em] text-accent uppercase mb-4"
          >
            Client Testimonials
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-[700] text-namo-black tracking-tight"
          >
            What Our Partners Say
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2 }}
              className="bg-gray-50/50 p-8 rounded-[24px] border border-gray-100 hover:border-accent/20 transition-colors shadow-sm hover:shadow-xl hover:shadow-accent/5 flex flex-col justify-between group"
            >
              <div>
                {/* Quote Icon */}
                <div className="text-accent/20 mb-6 group-hover:text-accent/40 transition-colors">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                  </svg>
                </div>
                <p className="text-gray-700 leading-relaxed mb-8 text-[15px]">
                  "{testimonial.quote}"
                </p>
              </div>
              
              <div>
                <h4 className="font-bold text-namo-black">{testimonial.author}</h4>
                <p className="text-xs text-gray-500 mt-1 uppercase tracking-wide font-medium">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
