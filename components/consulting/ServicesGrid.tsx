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
    category: "Intelligence",
    title: "AI & Data Analytics",
    description: "Transform your data into intelligent, actionable business decisions.",
    href: "#ai-analytics",
    image: "/image%202.webp"
  },
  {
    icon: Hexagon,
    category: "Decentralization",
    title: "Blockchain",
    description: "Secure, decentralized infrastructure for modern enterprises.",
    href: "#blockchain",
    image: "/image%203.jpg"
  },
  {
    icon: ShieldCheck,
    category: "Protection",
    title: "Cybersecurity",
    description: "Enterprise-grade protection built into every layer of your stack.",
    href: "#cybersecurity",
    image: "/image%204.jpeg"
  },
  {
    icon: Cloud,
    category: "Infrastructure",
    title: "Cloud Computing",
    description: "Modern cloud infrastructure optimized for scale and security.",
    href: "#cloud",
    image: "/image%205.png"
  },
  {
    icon: Building2,
    category: "Transformation",
    title: "Enterprise Solutions",
    description: "End-to-end digital transformation for complex workflows.",
    href: "#enterprise",
    image: "/image%206.jpg"
  },
  {
    icon: Network,
    category: "Connectivity",
    title: "Network Solutions",
    description: "Reliable, high-performance networking for campus and data centers.",
    href: "#network",
    image: "/image%207.jpg"
  },
  {
    icon: Leaf,
    category: "Environment",
    title: "Sustainability Services",
    description: "Technology strategies that drive sustainable and green growth.",
    href: "#sustainability",
    image: "/image%208.jpg"
  }
];

export default function ServicesGrid() {
  return (
    <section id="services" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: "url('/consulting.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>
      
      {/* Dark Overlay for the overall section */}
      <div className="absolute inset-0 z-10 bg-black/70 backdrop-blur-[2px]" />

      <div className="relative z-20 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-[800] text-white tracking-tight drop-shadow-md"
          >
            Our Consulting Services
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link href={service.href} key={index} className="block outline-none">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="relative rounded-3xl overflow-hidden group h-[380px] flex flex-col z-10 shadow-lg hover:shadow-2xl transition-shadow duration-500"
                >
                  {/* Background Image for Card */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${service.image}')` }}
                  />
                  
                  {/* Dark Gradient Overlay for Readability */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/80 pointer-events-none transition-opacity duration-500 group-hover:opacity-90" />

                  <div className="relative z-20 flex flex-col h-full p-6 sm:p-7">
                    {/* Icon Container - Glassy Circle */}
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110 shadow-sm">
                      <Icon size={18} strokeWidth={2} className="text-white" />
                    </div>
                    
                    {/* Category Subhead */}
                    <p className="text-xs font-semibold text-white/80 uppercase tracking-widest mb-1 drop-shadow-md">
                      {service.category}
                    </p>
                    
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-3 tracking-tight drop-shadow-md leading-tight">
                      {service.title}
                    </h3>
                    
                    {/* Description - The "little more info" requested */}
                    <p className="text-sm text-white/90 leading-relaxed font-medium drop-shadow-md line-clamp-3">
                      {service.description}
                    </p>
                    
                    {/* CTA */}
                    <div className="mt-auto flex items-center text-xs font-bold text-white uppercase tracking-widest gap-2 overflow-hidden drop-shadow-md">
                      <span className="relative">
                        Learn More
                        <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                      </span>
                      <ArrowRight size={14} className="transform -translate-x-6 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out" />
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
