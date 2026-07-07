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
    <section id="services" className="py-24 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-[700] text-namo-black tracking-tight"
          >
            Our Consulting Services
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link href={service.href} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white p-8 rounded-[24px] border border-gray-100 hover:border-accent/20 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1 group h-full flex flex-col"
                >
                  <div className="w-12 h-12 bg-blue-50/50 text-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-bold text-namo-black mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>
                  <div className="flex items-center text-xs font-bold text-accent uppercase tracking-widest gap-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 mt-auto">
                    Learn More <ArrowRight size={14} />
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
