"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Landmark, 
  Building2, 
  HeartPulse, 
  CircleDollarSign, 
  Factory, 
  GraduationCap, 
  Zap, 
  Rocket 
} from "lucide-react";

const INDUSTRIES = [
  {
    icon: Landmark,
    title: "Governments",
    description: "Secure infrastructure and compliance-driven solutions for public sector initiatives."
  },
  {
    icon: Building2,
    title: "Enterprises",
    description: "Digital transformation and scalable architectures for Fortune 500 companies."
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description: "Zero-trust environments and data privacy compliance for medical data."
  },
  {
    icon: CircleDollarSign,
    title: "Financial Services",
    description: "High-frequency infrastructure, DLT and regulatory tech for modern finance."
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Industrial IoT, supply chain tracking and automated workflow solutions."
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Campus networking and secure cloud infrastructure for academic institutions."
  },
  {
    icon: Zap,
    title: "Energy",
    description: "Grid modernization, carbon intelligence and sustainable tech deployment."
  },
  {
    icon: Rocket,
    title: "Startups",
    description: "Agile architecture and scalable foundations for hyper-growth technology companies."
  }
];

export default function IndustriesGrid() {
  return (
    <section className="relative py-12 sm:py-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: "url('/Industries%20we%20serve.webp')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-black/60 backdrop-blur-[2px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-20">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-[700] text-white tracking-tight drop-shadow-md"
          >
            Industries We Serve
          </motion.h2>
        </div>

        {/* Infinite Scrolling Marquee */}
        <div className="relative flex w-full overflow-hidden py-4 mt-8 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
          <div className="flex w-max gap-4 sm:gap-6 animate-logo-scroll hover:[animation-play-state:paused]">
            {[...INDUSTRIES, ...INDUSTRIES].map((industry, index) => {
              const Icon = industry.icon;
              return (
                <div
                  key={index}
                  className="bg-black/20 backdrop-blur-xl p-4 sm:p-5 rounded-2xl border border-white/20 shadow-xl flex flex-col group hover:shadow-2xl hover:border-accent hover:bg-black/40 transition-all duration-300 w-[200px] sm:w-[240px] flex-shrink-0 relative overflow-hidden h-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-accent transition-all duration-300 flex-shrink-0">
                    <Icon size={16} className="text-accent group-hover:text-white transition-colors" />
                  </div>
                  
                  <h3 className="text-sm sm:text-base font-bold text-white mb-1.5 tracking-tight">{industry.title}</h3>
                  <p className="text-white/70 text-[11px] sm:text-xs leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
