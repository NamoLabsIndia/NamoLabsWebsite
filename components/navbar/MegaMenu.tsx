"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight, ChevronRight, Shield, Search, Brain, Atom, Cloud, Lock, Database,
  Building2, Users, Briefcase, Newspaper, Handshake, TrendingUp,
  Globe, Code2, FileText, PenSquare, BarChart3, Network, Leaf,
} from "lucide-react";

interface MegaMenuProps { menuKey: string }

const enter = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit:    { opacity: 0 },
  transition: { duration: 0.18, ease: "easeOut" as const },
};

/* Trinity-knot mark used for the QSCL wordmark (three interlaced rings). */
function QsclMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth={3.2}>
        <circle cx="50" cy="37" r="21" />
        <circle cx="34" cy="63" r="21" />
        <circle cx="66" cy="63" r="21" />
      </g>
    </svg>
  );
}

/* Full-screen menu surface: an opaque panel that covers the whole viewport so
   nothing of the page shows behind it. The nav pill floats above it (z-10) and
   stays clickable, so re-clicking the active item / Escape / a blank click closes it. */
function MenuShell({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      {...enter}
      data-menu-backdrop
      className="fixed inset-0 z-0 bg-white overflow-y-auto"
    >
      <div data-menu-content className="mx-auto max-w-[1400px] px-6 pt-28 pb-16">
        {children}
      </div>
    </motion.div>
  );
}

/* ── PLATFORM ── */
function PlatformMenu() {
  const platforms = [
    { icon: <Shield size={16} className="text-accent"/>, label: "QSCL", sub: "Quantum-Safe Communication Layer", href: "/platform/qscl", active: true },
    { icon: <Search size={16} className="text-accent"/>, label: "DAFS", sub: "Digital Asset Forensics Suite",     href: "/platform/dafs", active: false },
  ];

  return (
    <MenuShell>
      <div className="px-8 pt-8 pb-8">
        <div className="grid grid-cols-[260px_1fr] gap-6">
          {/* Left — platform list */}
          <div>
            <p className="text-[11px] font-semibold text-accent uppercase tracking-widest mb-4">Platforms</p>
            {platforms.map(p => (
              <Link
                key={p.label}
                href={p.href}
                className={cnMenu(
                  "flex items-start gap-3 p-3 rounded-xl group transition-colors mb-1 border",
                  p.active
                    ? "bg-accent-light/70 border-accent/15"
                    : "border-transparent hover:bg-gray-50"
                )}
              >
                <div className="w-8 h-8 rounded-lg bg-white shadow-sm ring-1 ring-gray-100 flex items-center justify-center flex-shrink-0">{p.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-namo-black">{p.label}</span>
                    <ArrowRight size={13} className="text-gray-300 group-hover:text-accent transition-colors"/>
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5">{p.sub}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Featured card — logo | copy, split by a divider */}
          <div className="rounded-2xl border border-gray-200 grid grid-cols-[1fr_330px] overflow-hidden">
            <div className="flex items-center justify-center gap-3 border-r border-gray-100 px-8 py-10">
              <QsclMark className="w-16 h-16 text-namo-black"/>
              <span className="text-4xl font-black text-namo-black tracking-tight">
                QSCL<sup className="text-accent text-base font-normal align-super">™</sup>
              </span>
            </div>
            <div className="px-8 py-8 flex flex-col justify-center">
              <p className="text-[11px] font-semibold text-accent uppercase tracking-widest mb-2">Featured Platform</p>
              <h3 className="text-2xl font-black text-namo-black mb-3">QSCL</h3>
              <p className="text-sm text-gray-600 leading-relaxed">A post-quantum cryptographic SDK that secures digital communication for the future. Built for developers. Ready for tomorrow.</p>
              <Link href="/platform/qscl" className="mt-5 inline-flex items-center gap-2 bg-namo-black text-white text-sm font-medium px-4 py-2.5 rounded-full w-fit hover:bg-gray-800 transition-colors">
                Explore QSCL <ArrowRight size={13}/>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom feature bar — spans the full card width */}
      <div className="border-t border-gray-100 grid grid-cols-4 divide-x divide-gray-100">
        {[
          { icon: <Shield size={16}/>, title: "Post-Quantum Security", desc: "Built with advanced post-quantum cryptography standards." },
          { icon: <Lock   size={16}/>, title: "Developer-First",       desc: "Simple APIs. Easy integration. Powerful security." },
          { icon: <Globe  size={16}/>, title: "Future-Ready",          desc: "Designed to protect today and tomorrow." },
          { icon: <Code2  size={16}/>, title: "Open & Interoperable",  desc: "Open standards. Seamless compatibility." },
        ].map(f => (
          <div key={f.title} className="flex items-start gap-3 px-6 py-5">
            <div className="w-8 h-8 rounded-lg bg-accent-light flex items-center justify-center text-accent flex-shrink-0 mt-0.5">{f.icon}</div>
            <div>
              <p className="text-xs font-semibold text-namo-black">{f.title}</p>
              <p className="text-xs text-gray-500 mt-0.5">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </MenuShell>
  );
}

/* ── RESEARCH ── */
function ResearchMenu() {
  const focusAreas = [
    { icon: <Lock     size={16} className="text-blue-600"/>,   label: "Cryptography",          href: "/research/cryptography" },
    { icon: <Database size={16} className="text-indigo-600"/>, label: "Blockchain",             href: "/research/blockchain" },
    { icon: <Brain    size={16} className="text-orange-500"/>, label: "Artificial Intelligence",href: "/research/ai" },
    { icon: <Atom     size={16} className="text-purple-600"/>, label: "Quantum",                href: "/research/quantum" },
    { icon: <Cloud    size={16} className="text-sky-500"/>,    label: "Cloud",                  href: "/research/cloud" },
  ];
  const descByLabel: Record<string, string> = {
    "Cryptography": "Building secure foundations for the digital future.",
    "Blockchain": "Decentralized systems for trust and transparency.",
    "Artificial Intelligence": "Intelligent systems that learn, reason and evolve.",
    "Quantum": "Exploring quantum technologies for next-gen breakthroughs.",
    "Cloud": "Scalable, secure and resilient cloud infrastructure.",
  };

  return (
    <MenuShell>
      <div className="px-8 pt-8 pb-8">
        <div className="grid grid-cols-[260px_1fr_1fr_220px] gap-8">
          {/* Col 1 — Focus Areas */}
          <div>
            <p className="text-[11px] font-semibold text-accent uppercase tracking-widest mb-4">Focus Areas</p>
            <div className="space-y-0.5">
              {focusAreas.map(a => (
                <Link key={a.label} href={a.href} className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-gray-50 group transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-accent-light flex items-center justify-center flex-shrink-0 mt-0.5">{a.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-namo-black">{a.label}</span>
                      <ArrowRight size={12} className="text-gray-300 group-hover:text-accent transition-colors"/>
                    </div>
                    <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{descByLabel[a.label]}</p>
                  </div>
                </Link>
              ))}
            </div>
            <Link href="/research" className="flex items-center gap-1 text-xs text-accent font-medium mt-4 hover:underline">
              Explore all focus areas <ArrowRight size={11}/>
            </Link>
          </div>

          {/* Col 2 — Publications (centered) */}
          <div className="border-l border-gray-100 pl-8 flex flex-col">
            <p className="text-[11px] font-semibold text-accent uppercase tracking-widest mb-4">Publications</p>
            <div className="flex-1 flex flex-col items-center text-center px-2">
              <div className="w-12 h-12 rounded-xl bg-accent-light flex items-center justify-center mb-5">
                <FileText size={22} className="text-accent"/>
              </div>
              <h4 className="text-lg font-bold text-namo-black leading-snug mb-2">Research that drives innovation.</h4>
              <p className="text-sm text-gray-500 leading-relaxed">Access our latest papers, whitepapers and technical reports across domains.</p>
            </div>
            <Link href="/research/papers" className="flex items-center gap-1 text-xs text-accent font-medium mt-4 hover:underline">
              View all publications <ArrowRight size={11}/>
            </Link>
          </div>

          {/* Col 3 — Blog (centered) */}
          <div className="border-l border-gray-100 pl-8 flex flex-col">
            <p className="text-[11px] font-semibold text-accent uppercase tracking-widest mb-4">Blog</p>
            <div className="flex-1 flex flex-col items-center text-center px-2">
              <div className="w-12 h-12 rounded-xl bg-accent-light flex items-center justify-center mb-5">
                <PenSquare size={22} className="text-accent"/>
              </div>
              <h4 className="text-lg font-bold text-namo-black leading-snug mb-2">Ideas, insights and updates.</h4>
              <p className="text-sm text-gray-500 leading-relaxed">Read our latest blog posts on emerging technologies, research updates and industry insights.</p>
            </div>
            <Link href="/blog" className="flex items-center gap-1 text-xs text-accent font-medium mt-4 hover:underline">
              Explore blog <ArrowRight size={11}/>
            </Link>
          </div>

          {/* Col 4 — About */}
          <div className="border-l border-gray-100 pl-8 flex flex-col">
            <p className="text-[11px] font-semibold text-accent uppercase tracking-widest mb-4">About</p>
            <div className="space-y-1 flex-1">
              {[
                { icon: <Building2 size={15}/>, label: "Overview", desc: "Learn about our mission, vision and research philosophy.", href: "/about" },
                { icon: <Users     size={15}/>, label: "People",   desc: "Meet the researchers, engineers and innovators behind Namo Labs.", href: "/about/people" },
              ].map(a => (
                <Link key={a.label} href={a.href} className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-gray-50 group transition-colors">
                  <div className="w-7 h-7 rounded-lg bg-accent-light flex items-center justify-center flex-shrink-0 mt-0.5 text-accent">{a.icon}</div>
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-medium text-namo-black">{a.label}</span>
                      <ArrowRight size={11} className="text-gray-300 group-hover:text-accent transition-colors"/>
                    </div>
                    <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{a.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
            <Link href="/about" className="flex items-center gap-1 text-xs text-accent font-medium mt-4 hover:underline">
              View all about <ArrowRight size={11}/>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar — spans the full card width */}
      <div className="border-t border-gray-100 flex items-center justify-between px-8 py-5">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-accent-light flex items-center justify-center text-accent">
            <Search size={14}/>
          </div>
          <p className="text-sm text-gray-600">Pushing the boundaries of technology through deep research and real-world impact.</p>
        </div>
        <Link href="/research" className="flex items-center gap-2 bg-namo-black text-white text-xs font-medium px-4 py-2.5 rounded-full hover:bg-gray-800 transition-colors whitespace-nowrap">
          Explore Research <ArrowRight size={12}/>
        </Link>
      </div>
    </MenuShell>
  );
}

/* ── CONSULTING ── */
function ConsultingMenu() {
  // Two explicit columns to mirror the PDF's 5 / 3 arrangement.
  const leftCol = [
    { icon: <BarChart3 size={16}/>, label: "Artificial Intelligence and Data & Analytics", desc: "Unlock data value with AI-powered insights and advanced analytics.", href: "/consulting/ai-data" },
    { icon: <Shield    size={16}/>, label: "Cybersecurity",                                 desc: "Strengthen resilience with end-to-end security and risk management.", href: "/consulting/cybersecurity" },
    { icon: <Database  size={16}/>, label: "Blockchain",                                    desc: "Build trust and transparency with decentralized solutions.", href: "/consulting/blockchain" },
    { icon: <Cloud     size={16}/>, label: "Cloud",                                         desc: "Migrate, modernize and manage cloud infrastructure with agility.", href: "/consulting/cloud" },
    { icon: <Users     size={16}/>, label: "Consulting",                                    desc: "Strategy, transformation and advisory services tailored to your goals.", href: "/consulting" },
  ];
  const rightCol = [
    { icon: <Building2 size={16}/>, label: "Enterprise Solutions",           desc: "Drive efficiency and innovation with scalable enterprise solutions.", href: "/consulting/enterprise" },
    { icon: <Network   size={16}/>, label: "Network Solutions and Services",  desc: "Design, optimize and manage reliable and secure networks.", href: "/consulting/network" },
    { icon: <Leaf      size={16}/>, label: "Sustainability Services",         desc: "Build a sustainable future with responsible solutions.", href: "/consulting/sustainability" },
  ];

  const ServiceLink = (s: { icon: React.ReactNode; label: string; desc: string; href: string }) => (
    <Link key={s.label} href={s.href} className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 group transition-colors">
      <div className="w-9 h-9 rounded-lg bg-accent-light flex items-center justify-center text-accent flex-shrink-0 mt-0.5">{s.icon}</div>
      <div className="flex-1">
        <div className="flex items-center justify-between gap-2">
          <span className="text-sm font-semibold text-namo-black leading-snug">{s.label}</span>
          <ArrowRight size={13} className="text-gray-300 group-hover:text-accent transition-colors flex-shrink-0"/>
        </div>
        <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{s.desc}</p>
      </div>
    </Link>
  );

  return (
    <MenuShell>
      <div className="px-8 py-8">
        <div className="grid grid-cols-[300px_1fr] gap-12">
          {/* Left info card */}
          <div>
            <p className="text-[11px] font-semibold text-accent uppercase tracking-widest mb-3">Consulting</p>
            <h3 className="text-2xl font-black text-namo-black leading-snug mb-4">Solving complex challenges. Delivering measurable impact.</h3>
            <div className="h-px w-10 bg-accent/40 mb-4" />
            <p className="text-sm text-gray-500 leading-relaxed mb-6">Our consulting services help organizations modernize, secure and scale with confidence across industries and technologies.</p>
            <div className="bg-accent-light rounded-2xl p-5">
              <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-accent mb-3 shadow-sm">
                <Users size={16}/>
              </div>
              <p className="text-sm font-semibold text-namo-black mb-1">Let&apos;s build the future together.</p>
              <p className="text-xs text-gray-500 mb-3">Partner with Namo Labs to turn ambition into impact.</p>
              <Link href="/contact" className="flex items-center gap-1 text-xs text-accent font-semibold hover:underline">
                Talk to an expert <ArrowRight size={11}/>
              </Link>
            </div>
          </div>

          {/* Right — two service columns (5 / 3) */}
          <div className="grid grid-cols-2 gap-x-10">
            <div className="space-y-0.5">{leftCol.map(ServiceLink)}</div>
            <div className="space-y-0.5">{rightCol.map(ServiceLink)}</div>
          </div>
        </div>
      </div>
    </MenuShell>
  );
}

/* ── COMPANY ── */
function CompanyMenu() {
  const items = [
    { icon: <Building2   size={17} className="text-accent"/>,      label: "About",        href: "/about",       active: true  },
    { icon: <Users       size={17} className="text-emerald-500"/>, label: "Team",         href: "/about/team",  active: false },
    { icon: <Briefcase   size={17} className="text-orange-500"/>,  label: "Careers",      href: "/careers",     active: false },
    { icon: <Newspaper   size={17} className="text-purple-500"/>,  label: "Newsroom",     href: "/newsroom",    active: false },
    { icon: <Handshake   size={17} className="text-sky-500"/>,     label: "Partnerships", href: "/partnership", active: false },
    { icon: <TrendingUp  size={17} className="text-green-600"/>,   label: "Investment",   href: "/investment",  active: false },
  ];

  return (
    <MenuShell>
      <div className="px-8 py-8">
        <div className="grid grid-cols-[360px_1fr] gap-12">
          {/* Left list */}
          <div className="space-y-1">
            {items.map(item => (
              <Link
                key={item.label}
                href={item.href}
                className={cnMenu(
                  "flex items-center gap-3 px-4 py-3 rounded-xl group transition-colors",
                  item.active ? "bg-accent-light" : "hover:bg-gray-50"
                )}
              >
                <div className="w-9 h-9 rounded-lg bg-white shadow-sm ring-1 ring-gray-100 flex items-center justify-center flex-shrink-0">{item.icon}</div>
                <span className="flex-1 text-[15px] font-semibold text-namo-black">{item.label}</span>
                <ChevronRight size={16} className="text-gray-400 group-hover:text-accent group-hover:translate-x-0.5 transition-all"/>
              </Link>
            ))}
          </div>

          {/* Right about panel */}
          <div className="border-l border-gray-100 pl-12 flex flex-col justify-center">
            <p className="text-[11px] font-semibold text-accent uppercase tracking-widest mb-4">About Namo Labs</p>
            <h3 className="text-3xl font-black text-namo-black leading-tight mb-4">Pioneering deep tech<br/>for a better tomorrow.</h3>
            <p className="text-sm text-gray-600 leading-relaxed max-w-md">Namo Labs is on a mission to build secure, intelligent and impactful solutions through research and innovation.</p>
            <Link href="/about" className="mt-6 inline-flex items-center gap-2 border border-gray-300 text-namo-black text-sm font-medium px-5 py-2.5 rounded-full w-fit hover:bg-gray-50 transition-colors">
              Learn more <ArrowRight size={13}/>
            </Link>
          </div>
        </div>
      </div>
    </MenuShell>
  );
}

/* Local class-merge helper (kept tiny to avoid an extra import surface). */
function cnMenu(...parts: (string | false | null | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}

export default function MegaMenu({ menuKey }: MegaMenuProps) {
  if (menuKey === "platform")  return <PlatformMenu />;
  if (menuKey === "research")  return <ResearchMenu />;
  if (menuKey === "consulting") return <ConsultingMenu />;
  if (menuKey === "company")   return <CompanyMenu />;
  return null;
}
