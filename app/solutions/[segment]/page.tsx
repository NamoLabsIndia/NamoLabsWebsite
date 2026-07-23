import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Scale } from "lucide-react";
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

        {data.regulatoryContext && (
          <section className="bg-[#FAFBFF] border-2 border-gray-100 rounded-[24px] p-8 lg:p-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl bg-blue-50 text-accent flex items-center justify-center shrink-0">
                <Scale size={22} strokeWidth={2} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                {data.regulatoryContext.heading}
              </h2>
            </div>
            <p className="text-slate-600 text-[15px] leading-relaxed max-w-3xl mb-8">
              {data.regulatoryContext.intro}
            </p>
            <div className="grid sm:grid-cols-2 gap-5 mb-8">
              {data.regulatoryContext.drivers.map((driver) => (
                <div
                  key={driver.label}
                  className="bg-white border border-gray-100 rounded-2xl p-5"
                >
                  <p className="text-sm font-bold text-accent mb-1.5">
                    {driver.label}
                  </p>
                  <p className="text-slate-600 text-[13.5px] leading-relaxed">
                    {driver.detail}
                  </p>
                </div>
              ))}
            </div>
            <Link
              href={data.regulatoryContext.articleHref}
              className="group inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
            >
              {data.regulatoryContext.articleLabel}
              <ArrowRight
                size={15}
                strokeWidth={2.5}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </Link>
          </section>
        )}

        <SolutionCTA data={data} />
      </div>
    </main>
  );
}
