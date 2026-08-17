import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { insights } from "@/lib/data/insights";
import NewsletterForm from "./NewsletterForm";

export default function ResearchUpdatesList() {
  return (
    <section className="py-20 bg-namo-faint relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-[0.15em] text-accent uppercase mb-3">
              Research & Insights
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-namo-black tracking-tight mb-3">
              Latest Publications & Research Insights
            </h2>
            <p className="text-gray-500 text-base">
              Technical articles, post-quantum standards breakdown, and architectural papers from our research team.
            </p>
          </div>

          <Link
            href="/insights"
            className="shrink-0 inline-flex items-center gap-2 bg-namo-black text-white font-medium px-6 py-3 rounded-full text-sm hover:bg-gray-800 transition-colors shadow-sm"
          >
            Explore All Insights <ArrowRight size={15} />
          </Link>
        </div>

        {/* Article Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {insights.map((article) => (
            <Link
              key={article.slug}
              href={`/insights/${article.slug}`}
              className="group bg-white border border-gray-200/80 rounded-[24px] p-6 shadow-xs hover:shadow-md hover:border-accent/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 text-xs mb-3">
                  <span className="font-bold tracking-[0.15em] text-accent uppercase">
                    {article.category}
                  </span>
                  <span className="text-gray-400">{article.readingTime}</span>
                </div>
                <h3 className="text-xl font-bold text-namo-black leading-snug mb-3 group-hover:text-accent transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                <span className="font-medium text-namo-black">{article.author}</span>
                <span className="inline-flex items-center gap-1 text-accent font-semibold group-hover:translate-x-1 transition-transform">
                  Read Paper <ArrowRight size={13} />
                </span>
              </div>
            </Link>
          ))}

          {/* Upcoming Roadmap Card */}
          <div className="bg-gradient-to-br from-blue-50/70 via-indigo-50/20 to-white border border-blue-100 rounded-[24px] p-6 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-[10px] font-bold tracking-wider uppercase mb-4">
                <BookOpen size={12} />
                Upcoming Research
              </div>
              <h3 className="text-xl font-bold text-namo-black leading-snug mb-3">
                Lattice-Based Zero-Knowledge Proof Architectures
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Our forthcoming paper on efficient zero-knowledge proofs designed for post-quantum verification pipelines.
              </p>
            </div>

            <div className="pt-4 border-t border-blue-100/80 flex items-center justify-between text-xs text-blue-700 font-semibold">
              <span>Publication Stage 2/3</span>
              <span className="text-gray-400">Q3 2026</span>
            </div>
          </div>
        </div>

        {/* Functional Newsletter Subscription Bar */}
        <div className="bg-gray-100 rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 border border-gray-200">
          <div className="max-w-xl">
            <h3 className="text-2xl font-bold text-namo-black mb-2">Never Miss a Research Paper</h3>
            <p className="text-gray-500 text-sm sm:text-base">
              Subscribe to get notified when we release new post-quantum, AI, or blockchain technical publications.
            </p>
          </div>

          <NewsletterForm />
        </div>

      </div>
    </section>
  );
}
