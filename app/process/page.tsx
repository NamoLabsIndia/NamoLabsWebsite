import React from "react";
import ProcessHero from "@/components/process/ProcessHero";
import ProcessTimeline from "@/components/process/ProcessTimeline";
import ProcessPrinciples from "@/components/process/ProcessPrinciples";
import ProcessCTA from "@/components/process/ProcessCTA";
import { PROCESS_PHASES } from "@/lib/data/process";

export const metadata = {
  title: "Our Process",
  description:
    "How Namo Labs runs a consulting engagement, from discovery through long-term support — a research-first, security-by-design process across six phases.",
  alternates: {
    canonical: "https://namolabs.in/process",
  },
};

const BASE_URL = "https://namolabs.in";

const processSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Our Process",
  description: metadata.description,
  url: `${BASE_URL}/process`,
  dateModified: "2026-08-16",
  about: {
    "@type": "Organization",
    name: "Namo Labs",
    url: BASE_URL,
  },
};

/**
 * HowTo schema generated from the same phase data the page renders, so the
 * structured data can never describe a different process than the visible one.
 */
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "The Namo Labs consulting engagement process",
  description: metadata.description,
  step: PROCESS_PHASES.map((phase, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: phase.title,
    text: phase.summary,
    url: `${BASE_URL}/process#phases`,
  })),
};

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(processSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <ProcessHero />
      <ProcessTimeline />
      <ProcessPrinciples />
      <ProcessCTA />
    </main>
  );
}
