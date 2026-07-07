"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Atom, Rocket, Globe } from "lucide-react";

const features = [
  { label: "Secure by Design", icon: ShieldCheck },
  { label: "Research Driven", icon: Atom },
  { label: "Built for Impact", icon: Rocket },
  { label: "Partners for the Future", icon: Globe },
];

export default function PartnershipHero() {
  return (
    <section className="relative overflow-hidden bg-[#f4f7ff] py-16 md:py-24 rounded-b-[40px]">
      <div className="max-w-7xl mx-auto px-6 grid xl:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <p className="text-[12px] font-bold text-accent tracking-[0.15em] uppercase mb-4">
            PARTNERSHIPS
          </p>
          <div className="h-[2px] w-8 bg-accent mb-8" />
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-namo-black leading-[1.1] tracking-tight mb-8">
            Enterprise Partnerships for Long-Term <span className="text-accent">Innovation.</span>
          </h1>
          
          <p className="text-gray-700 text-lg md:text-[18px] leading-[1.65] font-medium max-w-[480px] mb-10">
            Whether you're an enterprise, government, research institution, or startup, we collaborate to solve complex technological challenges through research, engineering, and product innovation.
          </p>

          <div className="flex flex-wrap gap-4 mb-16">
            <Link
              href="/partnership/apply"
              className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-8 py-4 rounded-full text-[14px] hover:bg-[#2f4be0] transition-colors shadow-lg shadow-accent/20"
            >
              Become a Partner <ArrowRight size={16} />
            </Link>
            <Link
              href="#models"
              className="inline-flex items-center gap-2 bg-white text-accent font-semibold px-8 py-4 rounded-full text-[14px] hover:bg-gray-50 transition-colors border border-accent/20"
            >
              Explore Partnership Models <ArrowRight size={16} />
            </Link>
          </div>

          {/* Bottom Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {features.map((feat) => {
              const Icon = feat.icon;
              return (
                <div key={feat.label} className="flex items-center gap-3">
                  <div className="text-accent">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <span className="text-[12px] font-medium text-gray-700 max-w-[80px] leading-tight">
                    {feat.label}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Right Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[400px] md:h-[500px] xl:h-[600px] w-full"
        >
          <img
            src="/img/partnership/hero-isometric.png"
            alt="Isometric buildings representing enterprise partners connected by glowing networks"
            className="w-full h-full object-contain object-center drop-shadow-2xl"
            onError={(e) => {
              // Fallback to placeholder if image not found
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop';
            }}
          />
        </motion.div>

      </div>
    </section>
  );
}
