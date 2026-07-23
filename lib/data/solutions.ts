import React from "react";
import {
  Building2,
  Users,
  GraduationCap,
  Rocket,
  Store,
  ShieldCheck,
  Cloud,
  Brain,
  Blocks,
  Lock,
  Workflow,
} from "lucide-react";

export interface SolutionFeature {
  icon: React.ElementType;
  title: string;
  description: string;
}

export interface RegulatoryDriver {
  label: string;
  detail: string;
}

export interface SolutionData {
  slug: string;
  category: string;
  title: string;
  icon: React.ElementType;
  heroImage: string;
  heroDescription: string;
  features: SolutionFeature[];
  ctaDescription: string;
  // Optional regulatory-context section (currently used by governments).
  regulatoryContext?: {
    heading: string;
    intro: string;
    drivers: RegulatoryDriver[];
    articleHref: string;
    articleLabel: string;
  };
}

export const solutions: Record<string, SolutionData> = {
  governments: {
    slug: "governments",
    category: "Public Sector",
    title: "Governments",
    icon: Building2,
    heroImage: "/government-image.png",
    heroDescription:
      "Government infrastructure carries a longer security horizon than most private-sector systems — citizen records, defence communications, and national databases need to stay protected for decades, not years. That timeline is exactly why post-quantum readiness and secure-by-design architecture matter now, before today's encryption becomes tomorrow's liability. We help public sector organisations modernise citizen services and national infrastructure with security built in from the start, not bolted on afterward.",
    features: [
      {
        icon: Lock,
        title: "Post-Quantum Readiness",
        description:
          "Assess and migrate cryptographic systems that protect long-lived government data against future quantum decryption risk.",
      },
      {
        icon: ShieldCheck,
        title: "Zero Trust & Compliance",
        description:
          "Security architectures and compliance frameworks built for the scrutiny public infrastructure requires.",
      },
      {
        icon: Cloud,
        title: "Sovereign Cloud Migration",
        description:
          "Modernise legacy public-sector systems onto secure, scalable cloud infrastructure without compromising data sovereignty.",
      },
      {
        icon: Workflow,
        title: "Digital Public Services",
        description:
          "Enterprise digital transformation and workflow automation for citizen-facing services at national scale.",
      },
    ],
    ctaDescription:
      "Partner with us to build public infrastructure that's secure today and stays secure as the threat landscape changes.",
    regulatoryContext: {
      heading: "The regulatory clock is already running",
      intro:
        "Post-quantum migration is no longer a research topic for governments — it is a dated compliance requirement. The major deadlines are already published, and because migration across a national estate takes years, the time to start is now, not when the deadlines arrive.",
      drivers: [
        {
          label: "US — NSM-10",
          detail:
            "US National Security Memorandum 10 directs federal agencies to migrate vulnerable cryptographic systems to post-quantum standards by 2035.",
        },
        {
          label: "US — CNSA 2.0",
          detail:
            "The NSA's Commercial National Security Algorithm Suite 2.0 requires ML-KEM and ML-DSA for national security systems, phased in through the late 2020s and early 2030s.",
        },
        {
          label: "EU — PQC Transition Roadmap",
          detail:
            "The EU's coordinated roadmap (NIS Cooperation Group, 2025) targets migration of high-risk use cases by 2030 and medium-risk by 2035.",
        },
        {
          label: "UK — NCSC three-phase timeline",
          detail:
            "The UK NCSC sets discovery and planning by 2028, highest-priority migration by 2031, and full migration by 2035.",
        },
      ],
      articleHref: "/insights/nist-pqc-standards-ml-kem-ml-dsa-explained",
      articleLabel:
        "Read our explainer on the NIST standards behind these mandates",
    },
  },
  organisations: {
    slug: "organisations",
    category: "Enterprise",
    title: "Organisations",
    icon: Users,
    heroImage: "/organisation-image.png",
    heroDescription:
      "Enterprises face a specific version of the technology problem: legacy systems that work but don't scale, and new capabilities (AI, blockchain, cloud-native architecture) that promise a lot but need real integration discipline to deliver. We help enterprises streamline operations and adopt emerging technology through the same research-first approach we bring to every engagement — auditing what exists, then designing what should replace or extend it.",
    features: [
      {
        icon: Brain,
        title: "AI & Business Intelligence",
        description:
          "Enterprise AI strategy, workflow automation, and data pipelines that turn operational data into decisions.",
      },
      {
        icon: Blocks,
        title: "Enterprise Blockchain",
        description:
          "Permissioned DLT frameworks and smart contract systems built for institutional privacy and compliance needs.",
      },
      {
        icon: Cloud,
        title: "Cloud & Multi-Cloud Strategy",
        description:
          "Migration, Kubernetes/DevOps, and vendor-agnostic cloud architecture that scales without lock-in.",
      },
      {
        icon: Workflow,
        title: "Digital Transformation",
        description:
          "ERP modernisation and system integration that unify fragmented operations under one architecture.",
      },
    ],
    ctaDescription:
      "Partner with us to modernise your operations without the disruption a full rebuild usually costs.",
  },
  institutions: {
    slug: "institutions",
    category: "Education & Research",
    title: "Institutions",
    icon: GraduationCap,
    heroImage:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop",
    heroDescription:
      "Educational and research institutions run on a different clock than enterprises — long-term projects, sensitive research data, and infrastructure that has to serve both teaching and active research simultaneously. We work with institutions the same way we approach our own research: as a genuine research partner, not just an infrastructure vendor. See our collaboration model for how we structure joint research projects.",
    features: [
      {
        icon: Brain,
        title: "Research Acceleration",
        description:
          "AI and computational infrastructure that speeds up data-heavy research without requiring an in-house engineering team.",
      },
      {
        icon: Lock,
        title: "Research Data Protection",
        description:
          "Cryptographic and access-control safeguards for sensitive or pre-publication research data and intellectual property.",
      },
      {
        icon: Cloud,
        title: "Scalable Research Computing",
        description:
          "Cloud infrastructure sized for the bursty, compute-intensive workloads research projects actually produce.",
      },
      {
        icon: Users,
        title: "Joint Research Projects",
        description:
          "Direct research collaboration with our team across cryptography, blockchain, AI, and quantum technologies.",
      },
    ],
    ctaDescription:
      "Propose a joint research project, or talk to us about infrastructure for an existing one.",
  },
  startups: {
    slug: "startups",
    category: "Emerging",
    title: "Startups",
    icon: Rocket,
    heroImage:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2070&auto=format&fit=crop",
    heroDescription:
      "Startups need infrastructure decisions that don't have to be re-made in eighteen months, without the enterprise-scale budget that usually buys that kind of durability. We help early-stage teams make foundational technology choices — cloud architecture, AI integration, security fundamentals — that scale with growth instead of becoming the thing that has to be rebuilt at Series B.",
    features: [
      {
        icon: Cloud,
        title: "Scalable Cloud Foundations",
        description:
          "Cost-effective cloud architecture designed to scale with growth instead of requiring a rebuild at your next stage.",
      },
      {
        icon: Brain,
        title: "AI-Powered Product Edge",
        description:
          "Practical AI integration for product differentiation, not research-lab experimentation you can't ship.",
      },
      {
        icon: Blocks,
        title: "Web3 & Blockchain Infrastructure",
        description:
          "Blockchain and DLT architecture for startups building in decentralized or tokenized product spaces.",
      },
      {
        icon: ShieldCheck,
        title: "Security Fundamentals",
        description:
          "Right-sized security practices that satisfy early enterprise customers and investors without slowing you down.",
      },
    ],
    ctaDescription:
      "Talk to us before you make infrastructure decisions you'll have to unwind later.",
  },
  msmes: {
    slug: "msmes",
    category: "Small Business",
    title: "MSMEs & Others",
    icon: Store,
    heroImage:
      "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=2069&auto=format&fit=crop",
    heroDescription:
      "Small and medium businesses are usually offered the same enterprise tools scaled down, at enterprise-adjacent prices. We take the opposite approach: figuring out which specific piece of technology — a cloud migration, a workflow automation, a security baseline — actually moves the needle for a business at this scale, and delivering just that, without the overhead.",
    features: [
      {
        icon: Cloud,
        title: "Affordable Cloud Migration",
        description:
          "Right-sized cloud infrastructure that replaces costly on-premise systems without an enterprise price tag.",
      },
      {
        icon: Workflow,
        title: "Workflow Automation",
        description:
          "Practical automation for repetitive operational tasks — the highest-ROI starting point for most small businesses.",
      },
      {
        icon: ShieldCheck,
        title: "Essential Security",
        description:
          "The security baseline that protects a small business's most exposed risk, without unnecessary enterprise complexity.",
      },
      {
        icon: Brain,
        title: "Practical AI Tools",
        description:
          "Targeted AI automation for specific, high-value tasks rather than an open-ended AI transformation initiative.",
      },
    ],
    ctaDescription:
      "Tell us what's actually slowing your business down — we'll tell you honestly if technology is the fix.",
  },
};
