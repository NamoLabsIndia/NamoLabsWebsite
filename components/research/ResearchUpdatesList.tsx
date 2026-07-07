"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Calendar, Mail } from "lucide-react";

const filters = ["All Updates", "Cryptography", "Blockchain", "Artificial Intelligence", "Quantum", "Cloud"];

const articles = [
  {
    category: "Cryptography",
    eyebrow: "RESEARCH",
    title: "New Paper on Post-Quantum Cryptographic Frameworks",
    description: "Our latest research on lattice-based cryptography for building quantum-safe security primitives.",
    date: "April 2, 2026",
    image: "/img/update-cryptography.jpg",
    tagColor: "bg-blue-100 text-blue-700",
  },
  {
    category: "Blockchain",
    eyebrow: "ANNOUNCEMENT",
    title: "Open-Sourcing Core Infrastructure",
    description: "Making our core protocols, SDKs and tools open-source to accelerate innovation.",
    date: "April 15, 2026",
    image: "/img/update-opensource.jpg",
    tagColor: "bg-emerald-100 text-emerald-700",
  },
  {
    category: "Artificial Intelligence",
    eyebrow: "PUBLICATION",
    title: "Mechanistic Interpretability in LLMs",
    description: "Understanding the internal representations of large language models to ensure safety and alignment.",
    date: "April 20, 2026",
    image: "/AI logo.jpg",
    tagColor: "bg-orange-100 text-orange-700",
  },
  {
    category: "Quantum",
    eyebrow: "RESEARCH",
    title: "Advancing Quantum Communication Systems",
    description: "Researching next-generation quantum communication protocols for ultra-secure transfer.",
    date: "April 28, 2026",
    image: "/img/update-quantum.jpg",
    tagColor: "bg-purple-100 text-purple-700",
  },
];

export default function ResearchUpdatesList() {
  const [activeFilter, setActiveFilter] = useState("All Updates");

  const filteredArticles = articles.filter(
    (article) => activeFilter === "All Updates" || article.category === activeFilter
  );

  return (
    <section className="py-24 bg-namo-faint relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-[0.15em] text-accent uppercase mb-4">
              Research Updates
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-namo-black tracking-tight mb-4">
              Latest Research Updates & News
            </h2>
            <p className="text-gray-500 text-lg">
              Stay up-to-date with our latest publications, open-source releases, and breakthroughs.
            </p>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          <div className="flex flex-wrap items-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter
                    ? "bg-namo-black text-white shadow-md"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
          
          <Link
            href="/updates"
            className="shrink-0 inline-flex items-center gap-2 bg-white border border-gray-200 text-namo-black font-medium px-6 py-2.5 rounded-full text-sm hover:bg-gray-50 transition-colors"
          >
            View All Updates <ArrowRight size={14} />
          </Link>
        </div>

        {/* Grid - Empty State (Releasing Soon) */}
        <div className="w-full flex items-center justify-center min-h-[300px] mb-20 bg-white border border-gray-100 rounded-[32px] p-10 text-center shadow-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-md"
          >
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="text-gray-400" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-namo-black mb-3">
              Releases Soon
            </h3>
            <p className="text-gray-500 leading-relaxed">
              We are currently preparing our latest research papers, open-source tools, and announcements. Subscribe below to be notified as soon as they drop!
            </p>
          </motion.div>
        </div>

        {/* Newsletter Subscription Bar */}
        <div className="bg-gray-100 rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 border border-gray-200">
          <div>
            <h3 className="text-2xl font-bold text-namo-black mb-2">Never Miss an Update</h3>
            <p className="text-gray-500">Subscribe to our newsletter for the latest research papers and announcements.</p>
          </div>
          <div className="flex w-full lg:w-auto gap-2">
            <div className="relative flex-grow lg:w-80">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                <Mail size={18} />
              </div>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white border border-gray-200 text-namo-black rounded-full py-3.5 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
              />
            </div>
            <button className="shrink-0 bg-namo-black text-white font-medium px-8 py-3.5 rounded-full hover:bg-gray-800 transition-colors flex items-center gap-2">
              Subscribe <ArrowRight size={16} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
