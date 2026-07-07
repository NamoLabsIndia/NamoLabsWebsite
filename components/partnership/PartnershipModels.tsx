"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Users, ShieldCheck } from "lucide-react";

const models = [
  {
    num: "01",
    title: "Strategic Technology Partnerships",
    description: "Co-develop next-generation products and platforms through deep technical collaboration and shared roadmap alignment.",
    iconImg: "/img/partnership/model-1.png",
  },
  {
    num: "02",
    title: "Research Collaborations",
    description: "Join our R&D initiatives exploring frontier technologies across Cryptography, Blockchain, AI, Quantum and Cloud.",
    iconImg: "/img/partnership/model-2.png",
  },
  {
    num: "03",
    title: "Enterprise Transformation",
    description: "Modernize systems, enhance security, and build scalable platforms with our consulting and engineering expertise.",
    iconImg: "/img/partnership/model-3.png",
  },
  {
    num: "04",
    title: "Startup Innovation",
    description: "Accelerate your startup's growth with access to our engineering, infrastructure, and go-to-market collaboration.",
    iconImg: "/img/partnership/model-4.png",
  },
];

export default function PartnershipModels() {
  return (
    <section id="models" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[12px] font-bold tracking-[0.15em] text-accent uppercase mb-4"
          >
            PARTNERSHIP MODELS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-3xl md:text-5xl font-bold text-namo-black tracking-tight mb-4"
          >
            Choose How You Want to Build With Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-500 max-w-2xl mx-auto"
          >
            Flexible partnership models designed to create real impact and drive long-term innovation together.
          </motion.p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {models.map((model, i) => (
            <motion.div
              key={model.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col p-8 rounded-[24px] bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-300 group"
            >
              {/* Badge & Image */}
              <div className="relative mb-10">
                <div className="absolute top-0 left-0 bg-[#f4f7ff] text-accent font-bold text-sm px-3 py-1 rounded-md">
                  {model.num}
                </div>
                <div className="h-[120px] w-full flex items-center justify-center mt-6">
                  <img 
                    src={model.iconImg} 
                    alt={model.title}
                    className="h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=300&auto=format&fit=crop';
                    }}
                  />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-[22px] font-bold text-namo-black mb-4 leading-tight">
                {model.title}
              </h3>
              <div className="h-[1px] w-8 bg-gray-200 mb-4 group-hover:bg-accent transition-colors" />
              <p className="text-[14px] text-gray-500 leading-relaxed mb-8 flex-grow">
                {model.description}
              </p>

              {/* Link */}
              <Link 
                href="/partnership/apply" 
                className="inline-flex items-center gap-2 text-[14px] font-bold text-accent group-hover:text-[#2f4be0] transition-colors"
              >
                Learn More <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom Wide Badges */}
        <div className="grid md:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-6 p-6 rounded-[20px] border border-gray-100 bg-white shadow-sm"
          >
            <div className="w-12 h-12 rounded-full bg-[#f4f7ff] text-accent flex items-center justify-center shrink-0">
              <Users size={24} strokeWidth={1.5} />
            </div>
            <div>
              <p className="font-bold text-namo-black text-[15px]">Long-Term Partnerships. Real-World Impact.</p>
              <p className="text-gray-500 text-[13px] mt-1">We don't just work together — we build the future, together.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center gap-6 p-6 rounded-[20px] border border-gray-100 bg-white shadow-sm relative overflow-hidden"
          >
            <div className="w-12 h-12 rounded-full bg-[#f4f7ff] text-accent flex items-center justify-center shrink-0">
              <ShieldCheck size={24} strokeWidth={1.5} />
            </div>
            <div className="relative z-10">
              <p className="font-bold text-namo-black text-[15px]">Built on Trust. Driven by Purpose.</p>
              <p className="text-gray-500 text-[13px] mt-1">Shared values. Aligned goals. Lasting impact.</p>
            </div>
            
            {/* Decorative dots right side */}
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:8px_8px] [mask-image:linear-gradient(to_left,white,transparent)] opacity-50 pointer-events-none" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
