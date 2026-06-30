"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    category: "QUANTUM TECHNOLOGY",
    categoryColor: "text-accent",
    title: "Advancing Quantum Communication Systems",
    date: "April 28, 2026",
    description:
      "Researching next-generation quantum communication protocols for ultra-secure, long-distance information transfer.",
    image: "/img/update-quantum.jpg",
    href: "/research/quantum-communication",
  },
  {
    category: "OPEN-SOURCING AT NAMO LABS",
    categoryColor: "text-emerald-600",
    title: "Open-Sourcing Core Infrastructure",
    date: "April 15, 2026",
    description:
      "Making our core protocols, SDKs and tools open-source to accelerate innovation and community-driven development.",
    image: "/img/update-opensource.jpg",
    href: "/blog/open-sourcing",
  },
  {
    category: "CRYPTOGRAPHY PAPER",
    categoryColor: "text-purple-600",
    title: "New Paper on Post-Quantum Cryptographic Frameworks",
    date: "April 2, 2026",
    description:
      "Our latest research on lattice-based cryptography for building quantum-safe security primitives.",
    image: "/img/update-cryptography.jpg",
    href: "/research/post-quantum-paper",
  },
];

export default function ResearchUpdates() {
  return (
    <section className="py-24 bg-namo-faint">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-4xl sm:text-5xl font-black text-namo-black mb-3"
        >
          Research &amp; Updates
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center text-gray-500 max-w-lg mx-auto mb-14"
        >
          Advancing research in Quantum Technology, Open-Sourcing and Cryptography to build a secure digital future.
        </motion.p>

        <div className="grid sm:grid-cols-3 gap-6 mb-10">
          {articles.map((article, i) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link href={article.href} className="group block">
                <div className="mb-4">
                  <p className={`text-xs font-semibold uppercase tracking-widest mb-2 ${article.categoryColor}`}>
                    {article.category}
                  </p>
                  <h3 className="text-xl font-bold text-namo-black mb-2 leading-snug group-hover:text-accent transition-colors min-h-[3.5rem]">
                    {article.title}
                  </h3>
                  <p className="text-xs text-gray-400 mb-3">{article.date}</p>
                </div>
                <div className="relative rounded-2xl overflow-hidden aspect-video mb-4">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center">
                    <ArrowRight size={14} className="text-namo-black" />
                  </div>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{article.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Link
            href="/research"
            className="inline-flex items-center gap-2 bg-namo-black text-white font-medium px-8 py-3.5 rounded-full text-sm hover:bg-gray-800 transition-colors"
          >
            View All Updates <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
