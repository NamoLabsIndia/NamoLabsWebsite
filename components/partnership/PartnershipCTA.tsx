"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Handshake, Rocket, ShieldCheck, Users, Heart } from "lucide-react";

const ctaValues = [
  { icon: Handshake, title: "Be the First", desc: "Join us early and shape the future together." },
  { icon: Rocket, title: "Unlock Innovation", desc: "Co-create solutions that redefine industries." },
  { icon: ShieldCheck, title: "Future-Ready", desc: "Build with technologies designed to last." },
  { icon: Users, title: "Grow Together", desc: "Build long-term value and lasting impact." },
];

export default function PartnershipCTA() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[12px] font-bold tracking-[0.15em] text-accent uppercase mb-6"
        >
          LET'S BUILD SOMETHING THAT MATTERS.
        </motion.p>
        
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-[56px] font-bold text-namo-black tracking-tight leading-[1.1] max-w-4xl mx-auto mb-8"
        >
          Technology changes industries. <br className="hidden md:block" />
          Partnerships <span className="text-accent">change the future.</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-500 max-w-2xl mx-auto mb-12"
        >
          Whether you're looking to modernize infrastructure, launch a new platform, or explore frontier research, we'd love to build it together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-24"
        >
          <Link
            href="/partnership/apply"
            className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-8 py-4 rounded-full text-[14px] hover:bg-[#2f4be0] transition-colors shadow-lg shadow-accent/20"
          >
            Become a Partner <ArrowRight size={16} />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-accent font-semibold px-8 py-4 rounded-full text-[14px] hover:bg-gray-50 transition-colors border border-accent/20"
          >
            Schedule a Meeting <ArrowRight size={16} />
          </Link>
        </motion.div>

        {/* Decorative Skyline silhouette - gradient style */}
        <div className="absolute inset-x-0 h-[200px] bottom-40 bg-[url('/img/partnership/skyline.png')] bg-bottom bg-repeat-x opacity-10 pointer-events-none" />

        {/* Bottom Panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative bg-white rounded-[32px] border border-gray-100 shadow-[0_8px_40px_rgba(0,0,0,0.04)] p-8 md:p-12 mt-16 max-w-6xl mx-auto"
        >
          <p className="text-[11px] font-bold text-accent uppercase tracking-widest text-center mb-10">
            NO PARTNERS YET, BUT GREAT THINGS START WITH THE FIRST STEP.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
            {ctaValues.map((val, i) => {
              const Icon = val.icon;
              return (
                <div key={val.title} className={`flex items-start gap-4 ${i > 0 ? "pt-6 sm:pt-0 sm:pl-8" : ""}`}>
                  <div className="text-accent mt-1">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <div className="text-left">
                    <h4 className="text-[14px] font-bold text-namo-black mb-1">{val.title}</h4>
                    <p className="text-[12px] text-gray-500 font-medium leading-relaxed">{val.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 pt-8 border-t border-gray-100 text-center">
            <div className="flex items-center justify-center gap-2 text-accent font-bold text-sm mb-2">
              <Heart size={16} fill="currentColor" /> For Humanity Always.
            </div>
            <p className="text-sm text-gray-500 font-medium">
              We build technologies that protect, empower, and elevate humanity.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
