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

        <div>
          {/* 5-Column Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-5 mb-12">
            {domains.map((domain, i) => {
              const isActive = activeDomain?.id === domain.id;
              const isRightSide = i < 3; // Crypto, Blockchain, AI show on right. Quantum, Cloud show on left.
              
              return (
                <div 
                  key={domain.id} 
                  className="relative"
                  onMouseEnter={() => setActiveDomain(domain)} 
                  onMouseLeave={() => setActiveDomain(null)}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className={`group flex flex-col bg-white rounded-[20px] sm:rounded-3xl p-3 sm:p-5 border-2 transition-all duration-300 cursor-pointer h-full ${
                      isActive ? `${domain.activeBorderClass} shadow-2xl -translate-y-3 z-20 relative` : 'border-transparent shadow-[0_0_0_1px_rgba(0,0,0,0.05)] hover:shadow-xl hover:-translate-y-2'
                    }`}
                  >
                    {/* Image Container */}
                    <div className="w-full aspect-square mb-3 sm:mb-5 relative rounded-[12px] sm:rounded-[16px] overflow-hidden bg-gray-50 shadow-inner">
                      <img 
                        src={domain.image} 
                        alt={domain.title} 
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-grow">
                      <h3 className={`text-[14px] sm:text-[17px] font-bold mb-1 sm:mb-2 leading-tight ${domain.textColor}`}>
                        {domain.title}
                      </h3>
                      <p className="text-[11px] sm:text-[13px] text-gray-500 mb-4 sm:mb-6 flex-grow leading-relaxed line-clamp-3 sm:line-clamp-none">
                        {domain.description}
                      </p>
                      
                      <div className={`inline-flex items-center gap-2 text-xs font-semibold transition-opacity ${isActive ? domain.textColor : 'text-gray-400 group-hover:text-gray-600'}`}>
                        Explore <ArrowRight size={14} />
                      </div>
                    </div>
                  </motion.div>

                  {/* Hover Card Popover */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, x: isRightSide ? -10 : 10, scale: 0.95 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: isRightSide ? -10 : 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className={`hidden lg:block absolute top-0 z-50 w-[550px] bg-white rounded-[24px] shadow-2xl overflow-hidden ${
                          isRightSide ? 'left-full ml-6' : 'right-full mr-6'
                        }`}
                      >
                        <div className="flex p-6 gap-6">
                          <div className="flex-1">
                            <p className={`text-[10px] font-bold tracking-[0.15em] uppercase mb-2 ${domain.textColor}`}>
                              SPOTLIGHT
                            </p>
                            <h3 className="text-xl font-bold text-namo-black tracking-tight mb-2 leading-snug">
                              {domain.spotlightTitle}
                            </h3>
                            <p className="text-gray-600 text-[13px] leading-[1.5] mb-5 font-medium">
                              {domain.spotlightDescription}
                            </p>
                            <Link
                              href={domain.href}
                              className="inline-flex items-center gap-2 bg-[#0A0A0A] text-white font-medium px-4 py-2 rounded-full hover:bg-gray-800 transition-colors shadow-lg text-xs"
                            >
                              View All <ArrowRight size={14} />
                            </Link>
                          </div>
                          
                          <div className="w-[140px] aspect-square relative flex-shrink-0 bg-gray-50 rounded-[16px] shadow-inner overflow-hidden border border-gray-100">
                            <img 
                                src={domain.image} 
                                alt={domain.title} 
                                className="absolute inset-0 w-full h-full object-cover"
                              />
                          </div>
                        </div>

                        {/* Quick Links */}
                        <div className="bg-gray-50 border-t border-gray-100 px-6 py-4">
                          <div className="grid grid-cols-2 gap-4">
                            {spotlightLinks.slice(0, 4).map((link) => {
                              const Icon = link.icon;
                              return (
                                <Link href={domain.href} key={link.label} className="group flex items-start gap-3">
                                  <div className={`p-1.5 rounded-md bg-white shadow-sm border border-gray-100 text-gray-400 group-hover:${domain.textColor} transition-colors shrink-0`}>
                                    <Icon size={14} strokeWidth={2.5} />
                                  </div>
                                  <div>
                                    <h4 className="font-bold text-namo-black text-[11px] mb-0.5">{link.label}</h4>
                                    <p className="text-[10px] text-gray-500 leading-tight line-clamp-1">{link.sub}</p>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
