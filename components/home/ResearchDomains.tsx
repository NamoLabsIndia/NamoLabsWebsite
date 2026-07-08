"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const domains = [
  {
    number: "01",
    category: "BLOCKCHAIN RESEARCH",
    title: "Blockchain Research",
    description:
      "Building scalable, interoperable and secure blockchain systems for the future of decentralized infrastructure and digital trust.",
    tags: ["Consensus & BFT", "L2 Scaling / Rollups", "Cross-Chain Protocols", "MEV Research", "Tokenomics Design", "DeFi Mechanisms"],
    image: "/img/domain-blockchain.jpg",
    accent: "text-orange-400",
  },
  {
    number: "02",
    category: "CRYPTOGRAPHY RESEARCH",
    title: "Cryptography Research",
    description:
      "Designing next-generation cryptographic primitives and protocols to ensure privacy, authenticity, and security in a post-quantum world.",
    tags: ["Post-Quantum (PQC)", "ZK-SNARKs / ZK-STARKs", "MPC Protocols", "FHE", "Threshold Signatures", "Protocol Design & Analysis"],
    image: "/img/domain-cryptography.jpg",
    accent: "text-blue-400",
  },
  {
    number: "03",
    category: "AI RESEARCH",
    title: "AI Research",
    description:
      "Advancing the frontiers of AI to build intelligent systems that reason, adapt, and create real-world impact responsibly.",
    tags: ["Graph Neural Networks", "Agentic AI", "LLM Safety / Alignment", "RAG Architecture", "Multimodal Systems", "Mechanistic Interpretability"],
    image: "/img/domain-ai.jpg",
    accent: "text-cyan-400",
  },
  {
    number: "04",
    category: "QUANTUM RESEARCH",
    title: "Quantum Research",
    description:
      "Exploring quantum algorithms, hardware-aware designs, and error-resilient systems for the next computing revolution.",
    tags: ["Quantum Algorithms", "Quantum Cryptanalysis", "QKD Protocols", "Post-Quantum Transition", "Quantum Error Correction", "QR Primitives"],
    image: "/img/domain-quantum.jpg",
    accent: "text-purple-400",
  },
];

export default function ResearchDomains() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 mb-4"
        >
          <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            Our Research Domains
          </p>
          <div className="h-4 w-px bg-gray-200" />
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-accent/10 text-accent uppercase tracking-wider">
            10+ Ongoing Papers
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-4xl sm:text-5xl font-black text-namo-black mb-4 leading-tight"
        >
          Researching Today, Solving Tomorrow.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center text-gray-500 max-w-xl mx-auto mb-16"
        >
          At Namo Labs, we conduct deep research across multiple frontier domains to build secure, intelligent, and future-ready technologies.
        </motion.p>

        <div className="grid grid-cols-2 gap-3 sm:gap-6">
          {domains.map((domain, i) => (
            <motion.div
              key={domain.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col xl:flex-row gap-0 xl:gap-5 rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow group h-full"
            >
              {/* Image panel (from design) */}
              <div className="w-full xl:w-52 h-28 sm:h-40 xl:h-auto flex-shrink-0 relative overflow-hidden">
                <img
                  src={domain.image}
                  alt={domain.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-3 sm:p-6 xl:pr-7 flex flex-col justify-center flex-grow">
                <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-accent mb-1 sm:mb-2 line-clamp-1">
                  {domain.number} - {domain.category}
                </p>
                <h3 className="text-sm sm:text-lg font-bold text-namo-black mb-1 sm:mb-2 leading-tight line-clamp-2">{domain.title}</h3>
                <p className="text-[11px] sm:text-sm text-gray-500 leading-relaxed line-clamp-3 sm:line-clamp-none">{domain.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom tagline and CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8"
        >
          <div className="flex items-center gap-4 border-l-4 border-accent pl-5 max-w-xl">
            <p className="text-sm text-gray-500">
              Research drives innovation. Innovation drives impact. Impact drives{" "}
              <span className="text-accent font-semibold">humanity forward.</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
            <Link
              href="/research"
              className="group inline-flex items-center justify-center gap-3 bg-[#0A0A0A] text-white font-medium px-8 py-3.5 rounded-full text-[14px] hover:bg-gray-800 transition-colors shadow-sm"
            >
              Explore Research
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/collaboration"
              className="group inline-flex items-center justify-center gap-3 bg-white border border-gray-200 text-namo-black font-medium px-8 py-3.5 rounded-full text-[14px] hover:border-gray-300 hover:bg-gray-50 transition-colors shadow-sm"
            >
              Collaborate
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
