"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Microscope,
  ShieldCheck,
  Zap,
  Globe,
  TrendingUp,
  Handshake,
  Users,
  CheckCircle2,
  BarChart,
  Clock
} from "lucide-react";

const reasons = [
  {
    icon: Microscope,
    title: "Research First",
    desc: "Deep research at the core of everything we build.",
  },
  {
    icon: ShieldCheck,
    title: "Security by Design",
    desc: "Security, privacy and resilience built into every layer.",
  },
  {
    icon: Zap,
    title: "Fast Execution",
    desc: "Agile teams and proven engineering for real-world impact.",
  },
  {
    icon: Globe,
    title: "Global Collaboration",
    desc: "Working with enterprises, governments and innovators worldwide.",
  },
  {
    icon: TrendingUp,
    title: "Long-Term Innovation",
    desc: "Building future-ready technologies that stand the test of time.",
  },
  {
    icon: Handshake,
    title: "Dedicated Partnership",
    desc: "A committed team that grows with you at every step.",
  },
];

const metrics = [
  { icon: Users, value: "10+", label: "Enterprise Partners" },
  { icon: Globe, value: "5+", label: "Countries Impacted" },
  { icon: CheckCircle2, value: "99.9%", label: "Security Commitment" },
  { icon: BarChart, value: "100+", label: "Projects Delivered" },
  { icon: Clock, value: "24/7", label: "Partner Support" },
];

export default function WhyPartner() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      
      {/* Curved background shape connecting from the top */}
      <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-[#f4f7ff] to-white/0 pointer-events-none rounded-b-[60px]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-24">
          
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[12px] font-bold tracking-[0.15em] text-accent uppercase mb-6">
              WHY PARTNER WITH US
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-namo-black tracking-tight leading-[1.1] mb-8">
              Why Industry Leaders Choose <span className="text-accent">Namo Labs</span>
            </h2>
            <div className="space-y-6 text-gray-700 text-[16px] leading-[1.65] font-medium max-w-[480px]">
              <p>
                We combine deep research, enterprise engineering and long-term thinking to create technologies designed to last decades—not quarters.
              </p>
              <p>
                Our partners trust us to solve complex challenges, accelerate innovation, and build systems that create lasting impact.
              </p>
            </div>
          </motion.div>

          {/* Right Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-12 gap-x-8 pt-4">
            {reasons.map((reason, i) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-16 h-16 flex items-center justify-center rounded-[18px] bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] text-accent mb-6 group-hover:scale-110 transition-transform duration-500">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-[14px] font-bold text-namo-black mb-3">{reason.title}</h4>
                  <div className="h-[2px] w-6 bg-gray-200 mb-3 group-hover:bg-accent transition-colors" />
                  <p className="text-[12px] text-gray-500 leading-relaxed font-medium">
                    {reason.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Global Connection Visualization (Optional/Decorative) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative h-[240px] mb-8 rounded-[40px] bg-gradient-to-r from-[#eef2fc] via-[#f4f7ff] to-[#eef2fc] border border-white shadow-sm flex items-center justify-center overflow-hidden"
        >
          {/* Faint grid/world map background */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#eef2fc]" />
          
          <div className="relative z-10 flex gap-4 md:gap-16 flex-wrap justify-center px-4">
            {['Governments', 'Enterprises', 'Research Institutions', 'Startups & Innovators'].map((label, i) => (
              <div key={label} className="flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-100 px-6 py-3 rounded-full shadow-sm">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-sm font-semibold text-namo-black">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-between gap-8 p-10 lg:px-14 rounded-[32px] bg-white border border-gray-100 shadow-[0_8px_40px_rgba(0,0,0,0.04)]"
        >
          {metrics.map((metric, i) => {
            const Icon = metric.icon;
            return (
              <div key={metric.label} className="flex items-center gap-4 flex-1 min-w-[140px]">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#f4f7ff] text-accent shrink-0">
                  <Icon size={20} strokeWidth={2} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent mb-0.5">{metric.value}</div>
                  <div className="text-[11px] font-medium text-gray-500 uppercase tracking-wide">
                    {metric.label}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
