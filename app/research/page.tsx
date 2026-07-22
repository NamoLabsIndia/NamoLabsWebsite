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

export default function ResearchPage() {
  return (
    <main className="min-h-screen pt-24 bg-white">
      <ResearchHero />
      <ResearchDomainsGrid />
      <ResearchUpdatesList />
      <CollaborateBanner />
    </main>
  );
}
