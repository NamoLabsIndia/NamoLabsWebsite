import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { notFound } from 'next/navigation';
import { researchDomains } from '@/lib/data/researchDomains';
import DomainHeroCard from '@/components/research/domain/DomainHeroCard';
import DomainFeaturesCard from '@/components/research/domain/DomainFeaturesCard';
import DomainCTACard from '@/components/research/domain/DomainCTACard';

export function generateStaticParams() {
  return Object.keys(researchDomains).map((domain) => ({
    domain: domain,
  }));
}

const domainTitles: Record<string, string> = {
  blockchain: 'Blockchain Research',
  cryptography: 'Post-Quantum Cryptography Research',
  ai: 'Artificial Intelligence Research',
  quantum: 'Quantum Technologies Research',
  cloud: 'Cloud Technologies Research',
};

const BASE_URL = 'https://namolabs.in';

export function generateMetadata({ params }: { params: { domain: string } }) {
  const slug = params.domain.toLowerCase();
  const data = researchDomains[slug];
  if (!data) return { title: 'Research Not Found' };

  return {
    title: domainTitles[slug] ?? `${data.tag} Research`,
    description: data.heroDescription.split('. ')[0] + '.',
    alternates: {
      canonical: `${BASE_URL}/research/${slug}`,
    },
  };
}

const domainSchemaData: Record<string, { dateModified: string }> = {
  blockchain: { dateModified: '2026-07-23' },
  cryptography: { dateModified: '2026-07-23' },
  ai: { dateModified: '2026-07-23' },
  quantum: { dateModified: '2026-07-23' },
  cloud: { dateModified: '2026-07-23' },
};

export default function ResearchDomainPage({ params }: { params: { domain: string } }) {
  const slug = params.domain.toLowerCase();
  const data = researchDomains[slug];

  if (!data) {
    notFound();
  }

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: domainTitles[slug] ?? `${data.tag} Research`,
    description: data.heroDescription,
    url: `${BASE_URL}/research/${slug}`,
    dateModified: domainSchemaData[slug]?.dateModified,
    isPartOf: {
      "@type": "CollectionPage",
      name: "Research at Namo Labs",
      url: `${BASE_URL}/research`,
    },
  };

  return (
    <main className="min-h-screen pt-32 pb-24 bg-white selection:bg-blue-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col gap-8">

        {/* 1. Hero Card */}
        <DomainHeroCard data={data} />

        {/* 2. Features Card */}
        <DomainFeaturesCard data={data} />

        {/* 3. CTA Card */}
        <DomainCTACard data={data} />

        {/* 4. Further reading (optional — links to a related /insights article) */}
        {data.furtherReading && (
          <Link
            href={data.furtherReading.href}
            className="group flex items-center justify-between gap-6 bg-[#FAFBFF] border-2 border-gray-100 rounded-[24px] p-8 hover:border-accent/30 transition-colors"
          >
            <div>
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-accent mb-2">
                {data.furtherReading.label}
              </p>
              <p className="text-lg font-bold text-slate-900 leading-snug group-hover:text-accent transition-colors max-w-2xl">
                {data.furtherReading.title}
              </p>
            </div>
            <ArrowRight
              size={22}
              strokeWidth={2}
              className="shrink-0 text-accent -translate-x-2 group-hover:translate-x-0 transition-transform"
            />
          </Link>
        )}

      </div>
    </main>
  );
}
