import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { insights } from "@/lib/data/insights";

const BASE_URL = "https://namolabs.in";

export const metadata = {
  title: "Insights",
  description:
    "Technical writing from the Namo Labs research team on post-quantum cryptography, blockchain, AI, and the engineering behind secure, future-ready systems.",
  alternates: {
    canonical: `${BASE_URL}/insights`,
  },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Namo Labs Insights",
  description: metadata.description,
  url: `${BASE_URL}/insights`,
  publisher: {
    "@type": "Organization",
    name: "Namo Labs",
    url: BASE_URL,
  },
  blogPost: insights.map((a) => ({
    "@type": "BlogPosting",
    headline: a.title,
    description: a.description,
    url: `${BASE_URL}/insights/${a.slug}`,
    datePublished: a.datePublished,
    dateModified: a.dateModified,
    author: { "@type": "Person", name: a.author, url: `${BASE_URL}/team` },
  })),
};

export default function InsightsPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-white selection:bg-blue-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-xs font-bold tracking-[0.2em] text-accent uppercase mb-4">
          Insights
        </p>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-namo-black leading-[1.1] tracking-tight mb-6">
          Research, explained<span className="text-accent">.</span>
        </h1>
        <p className="text-[17px] text-gray-600 leading-relaxed max-w-2xl mb-16">
          Technical writing from our team on the problems we work on — post-quantum
          cryptography, blockchain, AI, and the engineering behind secure,
          future-ready systems. Written to be genuinely useful, not marketing.
        </p>

        <div className="flex flex-col gap-6">
          {insights.map((article) => (
            <Link
              key={article.slug}
              href={`/insights/${article.slug}`}
              className="group block p-8 bg-gray-50/50 border border-gray-100 rounded-[24px] hover:border-accent/30 hover:bg-blue-50/30 transition-colors"
            >
              <div className="flex items-center gap-3 text-xs mb-3">
                <span className="font-bold tracking-[0.15em] text-accent uppercase">
                  {article.category}
                </span>
                <span className="text-gray-400" aria-hidden>
                  &middot;
                </span>
                <span className="text-gray-500">{article.readingTime}</span>
              </div>
              <h2 className="text-2xl font-bold text-namo-black leading-snug mb-3 group-hover:text-accent transition-colors">
                {article.title}
              </h2>
              <p className="text-gray-600 text-[15px] leading-relaxed max-w-2xl mb-5">
                {article.excerpt}
              </p>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="font-medium text-namo-black">{article.author}</span>
                <span aria-hidden>&middot;</span>
                <time dateTime={article.datePublished}>
                  {new Date(article.datePublished).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <ArrowRight
                  size={16}
                  strokeWidth={2}
                  className="ml-auto text-accent opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
