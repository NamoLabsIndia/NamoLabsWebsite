"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight, Shield, Search, Brain, Atom, Cloud, Lock, Database,
  Building2, Briefcase, Newspaper, Handshake,
  BarChart3, Network, Leaf, FileText,
} from "lucide-react";


interface MegaMenuProps { menuKey: string }

const itemAnim = {
  initial: { opacity: 0, x: 6 },
  animate: { opacity: 1, x: 0 },
  exit:    { opacity: 0, x: 6 },
  transition: { duration: 0.16, ease: "easeOut" as const },
};

/* ─────────── shared: featured card ─────────── */
function FeaturedCard({
  gradient,
  label,
  title,
  href,
}: {
  gradient: string;
  label: string;
  title: string;
  href: string;
}) {
  return (
    <Link href={href} className="group w-full flex flex-col rounded-2xl bg-white border border-gray-100 shadow-[0_2px_16px_rgba(0,0,0,0.03)] overflow-hidden transition-transform duration-300 hover:-translate-y-1">
      <div className="h-[130px] w-full relative flex items-center justify-center p-4">
        <div className="absolute inset-0 opacity-90" style={{ background: gradient }} />
        <h3 className="relative z-10 text-white text-lg font-bold text-center leading-tight drop-shadow-sm">
          {title}
        </h3>
      </div>
      <div className="px-3.5 py-3 flex items-center justify-between bg-white border-t border-gray-50">
        <p className="text-[12px] font-medium text-gray-600 group-hover:text-namo-black transition-colors line-clamp-1">
          {label}
        </p>
        <ArrowUpRight size={13} className="flex-shrink-0 ml-2 text-gray-400 group-hover:text-accent transition-colors" />
      </div>
    </Link>
  );
}

/* ────────────────────── PLATFORM ────────────────────── */
const platformProducts = [
  {
    icon: <img src="/qscl-logo-transparent.png" alt="QSCL" className="w-5 h-5 object-contain" />,
    label: "QSCL",
    sub: "Quantum-Safe Communication Layer",
    href: "/platform/qscl",
    card: {
      gradient: "linear-gradient(135deg, #3B5BFF 0%, #1e2033 100%)",
      label: "FEATURED PLATFORM",
      title: "QSCL™",
    },
    desc: "A post-quantum cryptographic SDK that secures digital communication for the future. Built for developers. Ready for tomorrow.",
  },
  {
    icon: <Search size={16} />,
    label: "DAFS",
    sub: "Digital Asset Forensics Suite",
    href: "/platform/dafs",
    card: {
      gradient: "linear-gradient(135deg, #6366f1 0%, #1e2033 100%)",
      label: "PLATFORM",
      title: "DAFS™",
    },
    desc: "A powerful digital asset forensics suite for tracing, analyzing and reporting on blockchain transactions.",
  },
];

function PlatformMenu() {
  const [active, setActive] = useState(platformProducts[0]);
  return (
    <div className="py-8 w-full border-t border-gray-100/50">
      <div className="max-w-5xl mx-auto px-8">
        <div className="grid grid-cols-[280px_1fr] gap-12">

        {/* Col 1 — product list */}
        <div>
          <p className="text-[10px] font-bold text-accent uppercase tracking-[1.4px] mb-5">Products</p>
          <div className="space-y-1">
            {platformProducts.map((p) => (
              <button
                key={p.label}
                onMouseEnter={() => setActive(p)}
                onClick={() => setActive(p)}
                className={cn(
                  "w-full flex items-start gap-4 px-4 py-3.5 rounded-2xl text-left transition-colors group",
                  active.label === p.label ? "bg-accent/[0.07]" : "hover:bg-black/[0.03]"
                )}
              >
                <div className={cn(
                  "w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors",
                  active.label === p.label
                    ? "bg-accent text-white [&>img]:invert [&>img]:brightness-200"
                    : "bg-white border border-gray-100 shadow-sm text-accent"
                )}>
                  {p.icon}
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-namo-black leading-tight">{p.label}</p>
                  <p className="text-[12px] text-gray-500 mt-1 leading-snug">{p.sub}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Col 2 — dynamic featured card + description */}
        <AnimatePresence mode="wait">
          <motion.div key={active.label} {...itemAnim} className="flex items-center gap-8 py-2">
            <div className="w-[260px] shrink-0">
              <FeaturedCard {...active.card} href={active.href} />
            </div>
            <div className="flex-1 max-w-[320px]">
              <p className="text-[14px] text-gray-500 leading-relaxed">{active.desc}</p>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
      </div>
    </div>
  );
}

/* ────────────────────── RESEARCH ────────────────────── */
const researchAreas = [
  { icon: <Lock    size={15} className="text-blue-600"   />, label: "Cryptography",           sub: "Post-quantum & ZK protocols",       href: "/research/cryptography" },
  { icon: <Database size={15} className="text-indigo-600" />, label: "Blockchain",            sub: "Consensus, L2, DeFi mechanisms",    href: "/research/blockchain"   },
  { icon: <Brain   size={15} className="text-orange-500"  />, label: "Artificial Intelligence", sub: "Agentic AI, LLMs, alignment",    href: "/research/ai"           },
  { icon: <Atom    size={15} className="text-purple-600"  />, label: "Quantum",               sub: "QKD, algorithms, error correction", href: "/research/quantum"      },
  { icon: <Cloud   size={15} className="text-sky-500"     />, label: "Cloud",                 sub: "Secure, resilient infrastructure",  href: "/research/cloud"        },
];

const researchCards = [
  {
    gradient: "linear-gradient(135deg, #6366f1 0%, #1e2033 100%)",
    label: "OPEN RESEARCH",
    title: "Papers & Publications",
    href: "/research/papers",
  },
];

function ResearchMenu() {
  return (
    <div className="py-8 w-full border-t border-gray-100/50">
      <div className="max-w-5xl mx-auto px-8">
      <div className="grid grid-cols-[1fr_220px] gap-10">

        {/* Col 1 — focus areas */}
        <div>
          <p className="text-[10px] font-bold text-accent uppercase tracking-[1.4px] mb-4">Focus Areas</p>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 mt-2">
            {researchAreas.map((a) => (
              <Link
                key={a.label}
                href={a.href}
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)] flex items-center justify-center text-accent flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                  {a.icon}
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-namo-black leading-tight group-hover:text-accent transition-colors">{a.label}</p>
                  <p className="text-[12px] text-gray-500 mt-1">{a.sub}</p>
                </div>
              </Link>
            ))}
          </div>
          <Link href="/research" className="inline-flex items-center gap-1 text-[11px] text-accent font-semibold mt-4 hover:underline underline-offset-2">
            View all areas <ArrowUpRight size={11} />
          </Link>
        </div>

        {/* Col 2 — two featured cards */}
        <div className="flex flex-col gap-3">
          {researchCards.map((c) => (
            <FeaturedCard key={c.title} {...c} />
          ))}
        </div>

      </div>
      </div>
    </div>
  );
}

/* ────────────────────── CONSULTING ────────────────────── */
const consultingServices = [
  { icon: <BarChart3 size={15} />, label: "AI & Data Analytics",   desc: "Unlock data value with AI insights.",             href: "/consulting/ai-data"        },
  { icon: <Shield    size={15} />, label: "Cybersecurity",          desc: "End-to-end security & risk management.",          href: "/consulting/cybersecurity"   },
  { icon: <Database  size={15} />, label: "Blockchain",             desc: "Decentralized solutions for trust.",              href: "/consulting/blockchain"      },
  { icon: <Cloud     size={15} />, label: "Cloud",                  desc: "Migrate, modernize & manage cloud.",              href: "/consulting/cloud"           },
  { icon: <Building2 size={15} />, label: "Enterprise Solutions",   desc: "Drive efficiency and innovation at scale.",       href: "/consulting/enterprise"      },
  { icon: <Network   size={15} />, label: "Network Solutions",      desc: "Design & optimize reliable networks.",            href: "/consulting/network"         },
  { icon: <Leaf      size={15} />, label: "Sustainability Services", desc: "Responsible, energy-efficient stacks.",          href: "/consulting/sustainability"  },
];

const consultingCard = {
  gradient: "linear-gradient(135deg, #3B5BFF 0%, #0f172a 100%)",
  label: "NAMO LABS",
  title: "Let's build the future together.",
  href: "/contact",
};

function ConsultingMenu() {
  return (
    <div className="py-8 w-full border-t border-gray-100/50">
      <div className="max-w-5xl mx-auto px-8">
        <div className="grid grid-cols-[1fr_220px] gap-10">

        {/* Left — two-col service grid */}
        <div>
          <p className="text-[10px] font-bold text-accent uppercase tracking-[1.4px] mb-4">Consulting</p>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 mt-2">
            {consultingServices.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)] flex items-center justify-center text-accent flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                  {s.icon}
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-namo-black leading-tight group-hover:text-accent transition-colors">{s.label}</p>
                  <p className="text-[12px] text-gray-500 mt-1">{s.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Right — featured card + CTA */}
        <div className="flex flex-col gap-4">
          <FeaturedCard {...consultingCard} />
        </div>

      </div>
      </div>
    </div>
  );
}

/* ────────────────────── COMPANY ────────────────────── */
const companyLinks = [
  { icon: <Building2  size={15} />, label: "About Namo Labs",  sub: "Mission, vision & research philosophy.", href: "/about"       },
  { icon: <Briefcase  size={15} />, label: "Careers",          sub: "Build the future with us.",             href: "/careers"     },
  { icon: <Handshake  size={15} />, label: "Partnerships",     sub: "Collaborate to turn ambition into impact.", href: "/partnership" },
  { icon: <Newspaper  size={15} />, label: "Blog",             sub: "Ideas, insights and updates.",          href: "/blog"        },
];

const companyCards = [
  {
    gradient: "linear-gradient(135deg, #0f172a 0%, #1e2033 70%, #3B5BFF 100%)",
    label: "QSCL LAUNCH",
    title: "Early Access 2027",
    href: "/platform/qscl",
  },
  {
    gradient: "linear-gradient(135deg, #3B5BFF 0%, #6366f1 100%)",
    label: "From Bharat, for the World.",
    title: "Namo Labs",
    href: "/about",
  },
];

function CompanyMenu() {
  return (
    <div className="py-8 w-full border-t border-gray-100/50">
      <div className="max-w-5xl mx-auto px-8">
        <div className="grid grid-cols-[240px_1fr] gap-12 items-center">

        {/* Col 1 — links */}
        <div>
          <div className="space-y-5">
            {companyLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)] flex items-center justify-center text-accent flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                  {item.icon}
                </div>
                <p className="text-[14px] font-semibold text-namo-black group-hover:text-accent transition-colors">
                  {item.label}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Col 2 — two featured cards side by side */}
        <div className="flex gap-6 justify-center w-full">
          {companyCards.map((c) => (
            <div key={c.title} className="w-[180px]">
              <FeaturedCard {...c} />
            </div>
          ))}
        </div>

      </div>
      </div>
    </div>
  );
}

/* ────────────────────── cn helper ────────────────────── */
function cn(...classes: (string | undefined | false | null)[]) {
  return classes.filter(Boolean).join(" ");
}

/* ────────────────────── EXPORT ────────────────────── */
export default function MegaMenu({ menuKey }: MegaMenuProps) {
  if (menuKey === "platform")   return <PlatformMenu />;
  if (menuKey === "research")   return <ResearchMenu />;
  if (menuKey === "consulting") return <ConsultingMenu />;
  if (menuKey === "company")    return <CompanyMenu />;
  return null;
}
