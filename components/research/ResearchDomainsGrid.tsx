"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, FileText, Users, Code2, BookOpen, List, FolderKanban, Handshake } from "lucide-react";

const domains = [
  {
    id: "cryptography",
    title: "Cryptography",
    description: "Building secure foundations for the digital future.",
    image: "/cryptography logo .webp",
    textColor: "text-blue-600",
    activeBorderClass: "border-blue-500",
    activeBgClass: "bg-blue-50/50",
    href: "/research/cryptography",
    spotlightTitle: "Advancing Cryptography for a Secure Tomorrow",
    spotlightDescription: "Our cryptography research focuses on creating robust primitives, protocols and frameworks that protect data, communication and identities in an increasingly connected world.",
  },
  {
    id: "blockchain",
    title: "Blockchain",
    description: "Decentralized systems for trust and transparency.",
    image: "/Blockchain logo.jpg",
    textColor: "text-emerald-600",
    activeBorderClass: "border-emerald-500",
    activeBgClass: "bg-emerald-50/50",
    href: "/research/blockchain",
    spotlightTitle: "Building the Future of Blockchain",
    spotlightDescription: "Our blockchain research focuses on creating decentralized, secure, and interoperable systems that empower individuals and organizations to transact, collaborate and build with transparency and confidence.",
  },
  {
    id: "ai",
    title: "Artificial Intelligence",
    description: "Intelligent systems that learn, reason and evolve.",
    image: "/AI logo.jpg",
    textColor: "text-orange-600",
    activeBorderClass: "border-orange-500",
    activeBgClass: "bg-orange-50/50",
    href: "/research/ai",
    spotlightTitle: "Advancing Intelligence for a Smarter Future",
    spotlightDescription: "Our AI research focuses on building intelligent systems that perceive, learn and make decisions to solve complex real-world problems and augment human potential.",
  },
  {
    id: "quantum",
    title: "Quantum",
    description: "Exploring quantum technologies for next-gen breakthroughs.",
    image: "/Quantum logo.avif",
    textColor: "text-purple-600",
    activeBorderClass: "border-purple-500",
    activeBgClass: "bg-purple-50/50",
    href: "/research/quantum",
    spotlightTitle: "Unlocking the Potential of Quantum Technologies",
    spotlightDescription: "Our quantum research focuses on advancing computation, communication, and cryptography to solve problems beyond the limits of classical systems.",
  },
  {
    id: "cloud",
    title: "Cloud",
    description: "Scalable, secure and resilient cloud infrastructure.",
    image: "/cloud tech logo .webp",
    textColor: "text-blue-500",
    activeBorderClass: "border-blue-400",
    activeBgClass: "bg-blue-50/50",
    href: "/research/cloud",
    spotlightTitle: "Building the Next Generation of Cloud Infrastructure",
    spotlightDescription: "Our cloud research focuses on designing and optimizing scalable, secure, and resilient infrastructure that powers the digital world with reliability and efficiency.",
  },
];

const spotlightLinks = [
  { icon: FileText, label: "Overview", sub: "Explore our mission, vision and focus." },
  { icon: Users, label: "Our Work", sub: "Discover ongoing research initiatives." },
  { icon: Code2, label: "Tools + Code", sub: "Open-source tools and implementations." },
  { icon: BookOpen, label: "Publications", sub: "Browse papers and research outputs." },
  { icon: List, label: "Topics", sub: "Explore key research topics." },
  { icon: FolderKanban, label: "Projects", sub: "View projects solving real world problems." },
  { icon: Handshake, label: "Collaborate", sub: "Partner with us to drive impact." },
];

export default function ResearchDomainsGrid() {
  const [activeDomain, setActiveDomain] = useState<typeof domains[0] | null>(null);

  return (
    <section className="py-24 bg-white" id="explore">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-namo-black mb-4"
          >
            Our Research Domains
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-lg"
          >
            Exploring the frontiers of technology to build a better tomorrow.
          </motion.p>
        </div>

        <div onMouseLeave={() => setActiveDomain(null)}>
          {/* 5-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5 mb-12">
            {domains.map((domain, i) => {
              const isActive = activeDomain?.id === domain.id;
              
              return (
                <motion.div
                  key={domain.id}
                  onMouseEnter={() => setActiveDomain(domain)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`group flex flex-col bg-white rounded-3xl p-5 border-2 transition-all duration-300 cursor-pointer ${
                    isActive ? `${domain.activeBorderClass} shadow-2xl -translate-y-3` : 'border-transparent shadow-[0_0_0_1px_rgba(0,0,0,0.05)] hover:shadow-xl hover:-translate-y-2'
                  }`}
                >
                  {/* Image Container */}
                  <div className="w-full aspect-square mb-5 relative rounded-[16px] overflow-hidden bg-gray-50 shadow-inner">
                    <img 
                      src={domain.image} 
                      alt={domain.title} 
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-grow">
                    <h3 className={`text-[17px] font-bold mb-2 ${domain.textColor}`}>
                      {domain.title}
                    </h3>
                    <p className="text-[13px] text-gray-500 mb-6 flex-grow leading-relaxed">
                      {domain.description}
                    </p>
                    
                    <div className={`inline-flex items-center gap-2 text-xs font-semibold transition-opacity ${isActive ? domain.textColor : 'text-gray-400 group-hover:text-gray-600'}`}>
                      Explore <ArrowRight size={14} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Dynamic Spotlight Section */}
          <AnimatePresence>
            {activeDomain && (
              <motion.div
                key="spotlight-container"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <motion.div
                  key={activeDomain.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className={`w-full max-w-5xl mx-auto rounded-[28px] border ${activeDomain.activeBorderClass} ${activeDomain.activeBgClass} overflow-hidden mb-12 shadow-sm`}
                >
                  <div className="flex flex-col lg:flex-row items-center justify-between p-8 lg:p-10 gap-8">
                    
                    {/* Left Spotlight Content */}
                    <div className="max-w-xl flex-1">
                      <p className={`text-[11px] font-bold tracking-[0.15em] uppercase mb-3 ${activeDomain.textColor}`}>
                        SPOTLIGHT
                      </p>
                      <h3 className="text-2xl lg:text-3xl font-bold text-namo-black tracking-tight mb-4 leading-snug">
                        {activeDomain.spotlightTitle}
                      </h3>
                      <p className="text-gray-600 text-[15px] leading-[1.6] mb-8 font-medium">
                        {activeDomain.spotlightDescription}
                      </p>
                      <Link
                        href={activeDomain.href}
                        className="inline-flex items-center gap-2 bg-[#0A0A0A] text-white font-medium px-6 py-2.5 rounded-full hover:bg-gray-800 transition-colors shadow-lg text-xs"
                      >
                        View All in {activeDomain.title} <ArrowRight size={14} />
                      </Link>
                    </div>

                    {/* Right Spotlight Image */}
                    <div className="w-full lg:w-[320px] aspect-square relative flex-shrink-0 bg-gray-50 rounded-[20px] shadow-inner overflow-hidden border border-white/60">
                      <img 
                          src={activeDomain.image} 
                          alt={activeDomain.title} 
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>

                  </div>

                  {/* Bottom Quick Links Bar */}
                  <div className="bg-white/60 backdrop-blur-md border-t border-white/50 px-8 py-5">
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                      {spotlightLinks.map((link) => {
                        const Icon = link.icon;
                        return (
                          <Link href={activeDomain.href} key={link.label} className="group flex flex-col gap-1.5">
                            <div className="flex items-center gap-2">
                              <div className={`p-1 rounded-md bg-white shadow-sm text-gray-400 group-hover:${activeDomain.textColor} transition-colors`}>
                                <Icon size={14} strokeWidth={2.5} />
                              </div>
                              <h4 className="font-bold text-namo-black text-[11px]">{link.label}</h4>
                            </div>
                            <p className="text-[9px] text-gray-500 leading-relaxed">
                              {link.sub}
                            </p>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                  
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
