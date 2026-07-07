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
    <section className="py-24 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-[700] text-namo-black tracking-tight"
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
                className="bg-white p-8 rounded-[24px] border border-gray-100 shadow-sm flex flex-col group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gray-50 text-namo-black rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-namo-black mb-2">
                  {industry.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
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
