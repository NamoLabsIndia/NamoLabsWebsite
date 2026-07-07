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
    <section className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl font-[800] text-namo-black tracking-tight"
          >
            Industries We Serve
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {INDUSTRIES.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="relative bg-white p-8 rounded-[32px] border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.03)] flex flex-col group hover:shadow-2xl hover:shadow-accent/10 hover:border-accent/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                {/* Subtle Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-accent/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gray-50 text-gray-500 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white group-hover:shadow-lg group-hover:shadow-accent/20 transition-all duration-500 border border-gray-100 group-hover:border-accent group-hover:scale-110 ease-out">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-bold text-namo-black mb-3 transition-colors duration-300">
                    {industry.title}
                  </h3>
                  <p className="text-[14px] text-gray-500 leading-relaxed font-medium">
                    {industry.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
