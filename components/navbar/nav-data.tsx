import {
  Shield,
  Search,
  Brain,
  Atom,
  Cloud,
  Building2,
  Handshake,
  Briefcase,
  Newspaper,
  Database,
  Network,
  Leaf,
  BarChart3,
  Lock,
  Users,
} from "lucide-react";
import React from "react";

export interface NavItem {
  label: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

export interface NavSection {
  heading?: string;
  items: NavItem[];
  featured?: {
    label: string;
    title: string;
    description: string;
    cta: string;
  };
}

export const platformItems: NavSection[] = [
  {
    heading: "PLATFORMS",
    items: [
      {
        label: "QSCL",
        description: "Quantum-Safe Communication Layer",
        href: "/platform/qscl",
        icon: <Shield size={18} className="text-accent" />,
      },
      {
        label: "DAFS",
        description: "Digital Asset Forensics Suite",
        href: "/platform/dafs",
        icon: <Search size={18} className="text-accent" />,
      },
    ],
    featured: {
      label: "FEATURED PLATFORM",
      title: "QSCL",
      description:
        "A post-quantum cryptographic SDK that secures digital communication for the future. Built for developers. Ready for tomorrow.",
      cta: "Explore QSCL",
    },
  },
];

export const researchItems: NavSection[] = [
  {
    heading: "FOCUS AREAS",
    items: [
      {
        label: "Cryptography",
        description: "Building secure foundations for the digital future.",
        href: "/research/cryptography",
        icon: <Lock size={18} className="text-blue-600" />,
      },
      {
        label: "Blockchain",
        description: "Decentralized systems for trust and transparency.",
        href: "/research/blockchain",
        icon: <Database size={18} className="text-indigo-600" />,
      },
      {
        label: "Artificial Intelligence",
        description: "Intelligent systems that learn, reason and evolve.",
        href: "/research/ai",
        icon: <Brain size={18} className="text-orange-500" />,
      },
      {
        label: "Quantum",
        description: "Exploring quantum technologies for next-gen breakthroughs.",
        href: "/research/quantum",
        icon: <Atom size={18} className="text-purple-600" />,
      },
      {
        label: "Cloud",
        description: "Scalable, secure and resilient cloud infrastructure.",
        href: "/research/cloud",
        icon: <Cloud size={18} className="text-sky-500" />,
      },
    ],
  },
];

export const consultingItems: NavSection[] = [
  {
    heading: "CONSULTING",
    items: [
      {
        label: "AI & Data Analytics",
        description: "Unlock data value with AI-powered insights.",
        href: "/consulting/ai-data",
        icon: <BarChart3 size={18} className="text-accent" />,
      },
      {
        label: "Cybersecurity",
        description: "Strengthen resilience with end-to-end security.",
        href: "/consulting/cybersecurity",
        icon: <Shield size={18} className="text-accent" />,
      },
      {
        label: "Blockchain",
        description: "Build trust and transparency with decentralized solutions.",
        href: "/consulting/blockchain",
        icon: <Database size={18} className="text-accent" />,
      },
      {
        label: "Cloud",
        description: "Migrate, modernize and manage cloud infrastructure.",
        href: "/consulting/cloud",
        icon: <Cloud size={18} className="text-accent" />,
      },
      {
        label: "Enterprise Solutions",
        description: "Drive efficiency and innovation at scale.",
        href: "/consulting/enterprise",
        icon: <Building2 size={18} className="text-accent" />,
      },
      {
        label: "Network Solutions",
        description: "Design, optimize and manage reliable networks.",
        href: "/consulting/network",
        icon: <Network size={18} className="text-accent" />,
      },
      {
        label: "Sustainability Services",
        description: "Build a sustainable future with responsible solutions.",
        href: "/consulting/sustainability",
        icon: <Leaf size={18} className="text-accent" />,
      },
    ],
  },
];

export const companyItems: NavSection[] = [
  {
    heading: "COMPANY",
    items: [
      {
        label: "About",
        description: "Learn about our mission and philosophy.",
        href: "/about",
        icon: <Building2 size={18} className="text-accent" />,
      },
      {
        label: "Team",
        description: "Meet the people building tomorrow.",
        href: "/team",
        icon: <Users size={18} className="text-accent" />,
      },
      {
        label: "Partnership",
        description: "Partner with Namo Labs to turn ambition into impact.",
        href: "/partnership",
        icon: <Handshake size={18} className="text-accent" />,
      },
      {
        label: "Careers",
        description: "Join us in building the future of technology.",
        href: "/careers",
        icon: <Briefcase size={18} className="text-accent" />,
      },
      {
        label: "Blog",
        description: "Ideas, insights and updates from our team.",
        href: "/blog",
        icon: <Newspaper size={18} className="text-accent" />,
      },
    ],
  },
];
