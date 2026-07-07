"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Cpu, 
  Hexagon, 
  ShieldCheck, 
  Cloud, 
  Building2, 
  Network, 
  Leaf,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

const SERVICES = [
  {
    icon: Cpu,
    title: "AI & Data Analytics",
    description: "Transform your data into intelligent, actionable business decisions.",
    href: "#ai-analytics"
  },
  {
    icon: Hexagon,
    title: "Blockchain",
    description: "Secure, decentralized infrastructure for modern enterprises.",
    href: "#blockchain"
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    description: "Enterprise-grade protection built into every layer of your stack.",
    href: "#cybersecurity"
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    description: "Modern cloud infrastructure optimized for scale and security.",
    href: "#cloud"
  },
  {
    icon: Building2,
    title: "Enterprise Solutions",
    description: "End-to-end digital transformation for complex workflows.",
    href: "#enterprise"
  },
  {
    icon: Network,
    title: "Network Solutions",
    description: "Reliable, high-performance networking for campus and data centers.",
    href: "#network"
  },
  {
    icon: Leaf,
    title: "Sustainability Services",
    description: "Technology strategies that drive sustainable and green growth.",
    href: "#sustainability"
  }
];

export default function ServicesGrid() {
  return (
    <section id="services" className="py-32 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl font-[800] text-namo-black tracking-[-0.02em]"
          >
            Our Consulting Services
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link href={service.href} key={index} className="block h-full outline-none">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="relative bg-white p-8 sm:p-10 rounded-[32px] border border-gray-200/80 hover:border-accent hover:bg-accent transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-2xl hover:shadow-accent/30 hover:-translate-y-3 group h-full flex flex-col overflow-hidden z-10"
                >
                  {/* Glass Reflection Highlight */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  <div className="relative z-20 flex flex-col h-full">
                    {/* Icon Container */}
                    <div className="w-16 h-16 bg-gray-50 text-namo-black group-hover:bg-white/10 group-hover:text-white rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 ease-out border border-gray-100 group-hover:border-white/20 shadow-sm group-hover:shadow-inner">
                      <Icon size={28} strokeWidth={1.5} className="group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500" />
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl font-bold text-namo-black group-hover:text-white transition-colors duration-500 mb-4 tracking-tight">
                      {service.title}
                    </h3>
                    
                    <p className="text-[15px] sm:text-base text-gray-600 group-hover:text-white/90 leading-relaxed mb-10 flex-grow transition-colors duration-500 font-medium">
                      {service.description}
                    </p>
                    
                    {/* CTA */}
                    <div className="flex items-center text-sm font-bold text-namo-black group-hover:text-white transition-colors duration-500 mt-auto uppercase tracking-widest gap-3 overflow-hidden">
                      <span className="relative">
                        Learn More
                        <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                      </span>
                      <ArrowRight size={16} className="transform -translate-x-6 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
