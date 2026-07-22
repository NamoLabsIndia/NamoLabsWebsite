import React from "react";
import ResearchHero from "@/components/research/ResearchHero";
import CollaborateBanner from "@/components/research/CollaborateBanner";
import ResearchDomainsGrid from "@/components/research/ResearchDomainsGrid";
import ResearchUpdatesList from "@/components/research/ResearchUpdatesList";

export const metadata = {
  title: "Research",
  description: "Namo Labs conducts deep, interdisciplinary research in post-quantum cryptography, blockchain, artificial intelligence, quantum technologies, and cloud systems — to solve the hardest problems in technology.",
  alternates: {
    canonical: "https://namolabs.in/research",
  },
};

const BASE_URL = "https://namolabs.in";

const researchDomainPages = [
  { slug: "cryptography", name: "Post-Quantum Cryptography Research" },
  { slug: "blockchain", name: "Blockchain Research" },
  { slug: "ai", name: "Artificial Intelligence Research" },
  { slug: "quantum", name: "Quantum Technologies Research" },
  { slug: "cloud", name: "Cloud Technologies Research" },
];

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Research at Namo Labs",
  description: metadata.description,
  url: `${BASE_URL}/research`,
  hasPart: researchDomainPages.map((page) => ({
    "@type": "WebPage",
    name: page.name,
    url: `${BASE_URL}/research/${page.slug}`,
  })),
};

export default function ResearchPage() {
  return (
    <main className="min-h-screen pt-24 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <ResearchHero />
      <ResearchDomainsGrid />
      <ResearchUpdatesList />
      <CollaborateBanner />
    </main>
  );
}
