import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { insights, getArticle } from "@/lib/data/insights";
import NistPqcStandards from "@/components/insights/articles/NistPqcStandards";

const BASE_URL = "https://namolabs.in";

// Article bodies keyed by slug. Adding an article = add a data entry in
// lib/data/insights.ts + a component here.
const articleBodies: Record<string, React.ComponentType> = {
  "nist-pqc-standards-ml-kem-ml-dsa-explained": NistPqcStandards,
};

export function generateStaticParams() {
  return insights.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug);
  if (!article) return { title: "Article Not Found" };

  return {
    title: article.metaTitle,
    description: article.description,
    alternates: {
      canonical: `${BASE_URL}/insights/${article.slug}`,
    },
    openGraph: {
      title: article.metaTitle,
      description: article.description,
      type: "article",
      url: `${BASE_URL}/insights/${article.slug}`,
      publishedTime: article.datePublished,
      modifiedTime: article.dateModified,
      authors: [article.author],
    },
  };
}

export default function InsightArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug);
  const Body = articleBodies[params.slug];

  if (!article || !Body) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    url: `${BASE_URL}/insights/${article.slug}`,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    articleSection: article.category,
    author: {
      "@type": "Person",
      name: article.author,
      url: `${BASE_URL}/team`,
    },
    publisher: {
      "@type": "Organization",
      name: "Namo Labs",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/namo-labs-logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/insights/${article.slug}`,
    },
    isPartOf: {
      "@type": "Blog",
      name: "Namo Labs Insights",
      url: `${BASE_URL}/insights`,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Insights", item: `${BASE_URL}/insights` },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `${BASE_URL}/insights/${article.slug}`,
      },
    ],
  };

  return (
    <main className="min-h-screen pt-32 pb-24 bg-white selection:bg-blue-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="max-w-3xl mx-auto px-6">
        <Link
          href="/insights"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-accent transition-colors mb-8"
        >
          <ArrowLeft size={15} strokeWidth={2} />
          All Insights
        </Link>

        <p className="text-xs font-bold tracking-[0.2em] text-accent uppercase mb-4">
          {article.category}
        </p>
        <h1 className="text-3xl sm:text-[2.75rem] font-extrabold text-namo-black leading-[1.12] tracking-tight mb-6">
          {article.title}
        </h1>

        <div className="flex items-center gap-3 text-sm text-gray-500 mb-10 pb-10 border-b border-gray-100">
          <span className="font-medium text-namo-black">{article.author}</span>
          <span aria-hidden>&middot;</span>
          <time dateTime={article.datePublished}>
            {new Date(article.datePublished).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span aria-hidden>&middot;</span>
          <span>{article.readingTime}</span>
        </div>

        <Body />

        {/* Author bio */}
        <div className="mt-14 pt-8 border-t border-gray-100 flex flex-col sm:flex-row sm:items-start gap-4">
          <div>
            <p className="text-sm font-bold text-namo-black mb-1">
              {article.author}
            </p>
            <p className="text-sm text-accent font-medium mb-2">
              {article.authorTitle}
            </p>
            <p className="text-sm text-gray-600 leading-relaxed max-w-xl">
              Namoj is a researcher and builder focused on cryptography,
              blockchain, and emerging technologies. He founded Namo Labs to
              build technologies that serve humanity.{" "}
              <Link href="/team" className="text-accent font-medium hover:underline">
                Meet the team
              </Link>
              .
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 flex flex-col items-center text-center bg-[#f4f6ff] rounded-[32px] p-10 sm:p-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-namo-black mb-3">
            Planning a post-quantum migration?
          </h2>
          <p className="text-gray-600 text-[15px] leading-relaxed max-w-lg mb-8">
            We help governments, enterprises, and institutions inventory their
            cryptography and sequence the move to PQC without breaking what
            already works.
          </p>
          <Link
            href="/consulting"
            className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-8 py-4 rounded-full hover:bg-[#2f4be0] transition-colors shadow-lg shadow-accent/20"
          >
            Talk to us
            <ArrowRight size={16} strokeWidth={2} />
          </Link>
        </div>
      </div>
    </main>
  );
}
