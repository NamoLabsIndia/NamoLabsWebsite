import React from "react";
import ResearchHero from "@/components/research/ResearchHero";
import CollaborateBanner from "@/components/research/CollaborateBanner";
import ResearchDomainsGrid from "@/components/research/ResearchDomainsGrid";
import ResearchUpdatesList from "@/components/research/ResearchUpdatesList";

export const metadata = {
  title: "Research | Namo Labs",
  description: "Deep Research. Real World Impact. We conduct deep, interdisciplinary research to solve the hardest problems.",
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
