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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-black/20 backdrop-blur-xl p-4 sm:p-5 rounded-2xl border border-white/20 shadow-xl flex flex-col group hover:shadow-2xl hover:border-accent hover:bg-black/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-8 h-8 bg-white/10 text-white rounded-lg flex items-center justify-center mb-3 group-hover:bg-accent border border-white/10 group-hover:border-accent transition-colors duration-300">
                  <Icon size={16} strokeWidth={1.5} />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white mb-1.5 drop-shadow-sm">
                  {industry.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-white/80 leading-relaxed drop-shadow-sm">
                  {industry.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
