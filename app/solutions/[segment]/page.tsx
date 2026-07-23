import React from "react";
import { notFound } from "next/navigation";
import { solutions } from "@/lib/data/solutions";
import SolutionHero from "@/components/solutions/SolutionHero";
import SolutionFeatures from "@/components/solutions/SolutionFeatures";
import SolutionCTA from "@/components/solutions/SolutionCTA";

const BASE_URL = "https://namolabs.in";

export function generateStaticParams() {
  return Object.keys(solutions).map((segment) => ({ segment }));
}

export function generateMetadata({ params }: { params: { segment: string } }) {
  const slug = params.segment.toLowerCase();
  const data = solutions[slug];
  if (!data) return { title: "Solution Not Found" };

  return {
    title: `Solutions for ${data.title}`,
    description: data.heroDescription.split(". ").slice(0, 2).join(". ") + ".",
    alternates: {
      canonical: `${BASE_URL}/solutions/${slug}`,
    },
  };
}

export default function SolutionPage({ params }: { params: { segment: string } }) {
  const slug = params.segment.toLowerCase();
  const data = solutions[slug];

  if (!data) {
    notFound();
  }

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `Solutions for ${data.title}`,
    description: data.heroDescription,
    url: `${BASE_URL}/solutions/${slug}`,
    dateModified: "2026-07-23",
    about: {
      "@type": "Organization",
      name: "Namo Labs",
      url: BASE_URL,
    },
  };

  return (
    <main className="min-h-screen pt-32 pb-24 bg-white selection:bg-blue-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col gap-8">
        <SolutionHero data={data} />
        <SolutionFeatures data={data} />
        <SolutionCTA data={data} />
      </div>
    </main>
  );
}
