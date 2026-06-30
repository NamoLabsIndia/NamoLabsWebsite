"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight, Shield, Search, Brain, Atom, Cloud, Lock, Database,
  Building2, Users, Briefcase, Newspaper, Handshake, TrendingUp,
  Globe, Code2, FileText, PenSquare, BarChart3, Network, Leaf,
} from "lucide-react";

interface MegaMenuProps { menuKey: string }

const enter = {
  initial: { opacity: 0, y: -6 },
  animate: { opacity: 1, y: 0 },
  exit:    { opacity: 0, y: -6 },
  transition: { duration: 0.15, ease: "easeOut" as const },
};

/* ── PLATFORM ── */
function PlatformMenu() {
  return (
    <motion.div {...enter} className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl">
      <div className="max-w-7xl mx-auto px-6 pt-8 pb-0">
        {/* 3-column upper */}
        <div className="grid grid-cols-[220px_1fr_280px] gap-8 pb-8">
          {/* Left — list */}
          <div>
            <p className="text-[11px] font-semibold text-accent uppercase tracking-widest mb-4">Platforms</p>
            {[
              { icon: <Shield size={16} className="text-accent"/>, label: "QSCL", sub: "Quantum-Safe Communication Layer", href: "/platform/qscl" },
              { icon: <Search size={16} className="text-accent"/>, label: "DAFS", sub: "Digital Asset Forensics Suite",   href: "/platform/dafs" },
            ].map(p => (
              <Link key={p.label} href={p.href} className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 group transition-colors mb-1">
                <div className="w-8 h-8 rounded-lg bg-accent-light flex items-center justify-center flex-shrink-0">{p.icon}</div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-semibold text-namo-black">{p.label}</span>
                    <ArrowRight size={11} className="text-gray-300 group-hover:text-accent transition-colors"/>
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5">{p.sub}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Center — QSCL logo */}
          <div className="flex flex-col items-center justify-center gap-3 border-x border-gray-100 px-8">
            <div className="w-20 h-20 rounded-full border-2 border-accent/30 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full border-2 border-accent/60 flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-accent/20"/>
              </div>
            </div>
            <span className="text-3xl font-black text-namo-black tracking-tight">QSCL<sup className="text-accent text-sm font-normal">™</sup></span>
          </div>

          {/* Right — featured */}
          <div className="bg-accent-light rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <p className="text-[11px] font-semibold text-accent uppercase tracking-widest mb-2">Featured Platform</p>
              <h3 className="text-2xl font-black text-namo-black mb-3">QSCL</h3>
              <p className="text-sm text-gray-600 leading-relaxed">A post-quantum cryptographic SDK that secures digital communication for the future. Built for developers. Ready for tomorrow.</p>
            </div>
            <Link href="/platform/qscl" className="mt-5 inline-flex items-center gap-2 bg-namo-black text-white text-sm font-medium px-4 py-2.5 rounded-full w-fit hover:bg-gray-800 transition-colors">
              Explore QSCL <ArrowRight size={13}/>
            </Link>
          </div>
        </div>

        {/* Bottom feature bar */}
        <div className="border-t border-gray-100 grid grid-cols-4 divide-x divide-gray-100">
          {[
            { icon: <Shield size={16}/>, title: "Post-Quantum Security", desc: "Built with advanced post-quantum cryptography standards." },
            { icon: <Lock   size={16}/>, title: "Developer-First",       desc: "Simple APIs. Easy integration. Powerful security." },
            { icon: <Globe  size={16}/>, title: "Future-Ready",          desc: "Designed to protect today and tomorrow." },
            { icon: <Code2  size={16}/>, title: "Open & Interoperable",  desc: "Open standards. Seamless compatibility." },
          ].map(f => (
            <div key={f.title} className="flex items-start gap-3 px-6 py-4">
              <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 flex-shrink-0 mt-0.5">{f.icon}</div>
              <div>
                <p className="text-xs font-semibold text-namo-black">{f.title}</p>
                <p className="text-xs text-gray-500 mt-0.5">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ── RESEARCH ── */
function ResearchMenu() {
  const focusAreas = [
    { icon: <Lock     size={16} className="text-blue-600"/>,   label: "Cryptography",          desc: "Building secure foundations for the digital future.",        href: "/research/cryptography" },
    { icon: <Database size={16} className="text-indigo-600"/>, label: "Blockchain",             desc: "Decentralized systems for trust and transparency.",          href: "/research/blockchain" },
    { icon: <Brain    size={16} className="text-orange-500"/>, label: "Artificial Intelligence",desc: "Intelligent systems that learn, reason and evolve.",         href: "/research/ai" },
    { icon: <Atom     size={16} className="text-purple-600"/>, label: "Quantum",                desc: "Exploring quantum technologies for next-gen breakthroughs.", href: "/research/quantum" },
    { icon: <Cloud    size={16} className="text-sky-500"/>,    label: "Cloud",                  desc: "Scalable, secure and resilient cloud infrastructure.",       href: "/research/cloud" },
  ];

  return (
    <motion.div {...enter} className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl">
      <div className="max-w-7xl mx-auto px-6 pt-8 pb-0">
        <div className="grid grid-cols-[220px_1fr_1fr_200px] gap-8 pb-8">
          {/* Col 1 — Focus Areas */}
          <div>
            <p className="text-[11px] font-semibold text-accent uppercase tracking-widest mb-4">Focus Areas</p>
            <div className="space-y-1">
              {focusAreas.map(a => (
                <Link key={a.label} href={a.href} className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-gray-50 group transition-colors">
                  <div className="w-7 h-7 rounded-lg bg-accent-light flex items-center justify-center flex-shrink-0">{a.icon}</div>
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-medium text-namo-black">{a.label}</span>
                    <ArrowRight size={11} className="text-gray-300 group-hover:text-accent transition-colors"/>
                  </div>
                </Link>
              ))}
            </div>
            <Link href="/research" className="flex items-center gap-1 text-xs text-accent font-medium mt-4 hover:underline">
              Explore all focus areas <ArrowRight size={11}/>
            </Link>
          </div>

          {/* Col 2 — Publications */}
          <div className="border-l border-gray-100 pl-8 flex flex-col">
            <p className="text-[11px] font-semibold text-accent uppercase tracking-widest mb-4">Publications</p>
            <div className="flex-1 flex flex-col items-start">
              <div className="w-12 h-12 rounded-xl bg-accent-light flex items-center justify-center mb-4">
                <FileText size={22} className="text-accent"/>
              </div>
              <h4 className="text-lg font-bold text-namo-black leading-snug mb-2">Research that drives innovation.</h4>
              <p className="text-sm text-gray-500 leading-relaxed">Access our latest papers, whitepapers and technical reports across domains.</p>
            </div>
            <Link href="/research/papers" className="flex items-center gap-1 text-xs text-accent font-medium mt-4 hover:underline">
              View all publications <ArrowRight size={11}/>
            </Link>
          </div>

          {/* Col 3 — Blog */}
          <div className="border-l border-gray-100 pl-8 flex flex-col">
            <p className="text-[11px] font-semibold text-accent uppercase tracking-widest mb-4">Blog</p>
            <div className="flex-1 flex flex-col items-start">
              <div className="w-12 h-12 rounded-xl bg-accent-light flex items-center justify-center mb-4">
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

        {/* Bottom bar */}
        <div className="border-t border-gray-100 flex items-center justify-between py-4">
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
      </div>
    </motion.div>
  );
}

/* ── CONSULTING ── */
function ConsultingMenu() {
  const services = [
    { icon: <BarChart3 size={16}/>, label: "Artificial Intelligence and Data & Analytics", desc: "Unlock data value with AI-powered insights and advanced analytics.", href: "/consulting/ai-data" },
    { icon: <Building2 size={16}/>, label: "Enterprise Solutions",                          desc: "Drive efficiency and innovation with scalable enterprise solutions.", href: "/consulting/enterprise" },
    { icon: <Shield    size={16}/>, label: "Cybersecurity",                                 desc: "Strengthen resilience with end-to-end security and risk management.", href: "/consulting/cybersecurity" },
    { icon: <Network   size={16}/>, label: "Network Solutions and Services",                desc: "Design, optimize and manage reliable and secure networks.", href: "/consulting/network" },
    { icon: <Database  size={16}/>, label: "Blockchain",                                    desc: "Build trust and transparency with decentralized solutions.", href: "/consulting/blockchain" },
    { icon: <Leaf      size={16}/>, label: "Sustainability Services",                       desc: "Build a sustainable future with responsible solutions.", href: "/consulting/sustainability" },
    { icon: <Cloud     size={16}/>, label: "Cloud",                                         desc: "Migrate, modernize and manage cloud infrastructure with agility.", href: "/consulting/cloud" },
    { icon: <Users     size={16}/>, label: "Consulting",                                    desc: "Strategy, transformation and advisory services tailored to your goals.", href: "/consulting" },
  ];

  return (
    <motion.div {...enter} className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-[280px_1fr] gap-12">
          {/* Left info card */}
          <div>
            <p className="text-[11px] font-semibold text-accent uppercase tracking-widest mb-3">Consulting</p>
            <h3 className="text-2xl font-black text-namo-black leading-snug mb-3">Solving complex challenges. Delivering measurable impact.</h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">Our consulting services help organizations modernize, secure and scale with confidence across industries and technologies.</p>
            <div className="bg-accent-light rounded-2xl p-5">
              <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-3">
                <Users size={16}/>
              </div>
              <p className="text-sm font-semibold text-namo-black mb-1">Let&apos;s build the future together.</p>
              <p className="text-xs text-gray-500 mb-3">Partner with Namo Labs to turn ambition into impact.</p>
              <Link href="/contact" className="flex items-center gap-1 text-xs text-accent font-semibold hover:underline">
                Talk to an expert <ArrowRight size={11}/>
              </Link>
            </div>
          </div>

          {/* Right 2-col grid */}
          <div className="grid grid-cols-2 gap-1">
            {services.map(s => (
              <Link key={s.label} href={s.href} className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 group transition-colors">
                <div className="w-8 h-8 rounded-lg bg-accent-light flex items-center justify-center text-accent flex-shrink-0 mt-0.5">{s.icon}</div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-medium text-namo-black leading-snug">{s.label}</span>
                    <ArrowRight size={11} className="text-gray-300 group-hover:text-accent transition-colors flex-shrink-0"/>
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{s.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ── COMPANY ── */
function CompanyMenu() {
  const items = [
    { icon: <Building2   size={16}/>, label: "About",        desc: "Learn about our mission, vision and research philosophy.",     href: "/about" },
    { icon: <Users       size={16}/>, label: "Team",         desc: "Meet the people behind Namo Labs.",                            href: "/about/team" },
    { icon: <Briefcase   size={16}/>, label: "Careers",      desc: "Join us in building the future of technology.",               href: "/careers" },
    { icon: <Newspaper   size={16}/>, label: "Newsroom",     desc: "Latest news, announcements and press releases.",              href: "/newsroom" },
    { icon: <Handshake   size={16}/>, label: "Partnerships", desc: "Partner with Namo Labs to turn ambition into impact.",        href: "/partnership" },
    { icon: <TrendingUp  size={16}/>, label: "Investment",   desc: "Explore investment opportunities with Namo Labs.",            href: "/investment" },
  ];

  return (
    <motion.div {...enter} className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-[280px_1fr] gap-12">
          {/* Left list */}
          <div>
            <p className="text-[11px] font-semibold text-accent uppercase tracking-widest mb-4">Company</p>
            <div className="space-y-1">
              {items.map(item => (
                <Link key={item.label} href={item.href} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 group transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-accent-light flex items-center justify-center text-accent flex-shrink-0">{item.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-namo-black">{item.label}</span>
                      <ArrowRight size={13} className="text-gray-300 group-hover:text-accent transition-colors"/>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Right about panel */}
          <div className="bg-gradient-to-br from-accent-light to-white rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <p className="text-[11px] font-semibold text-accent uppercase tracking-widest mb-3">About Namo Labs</p>
              <h3 className="text-3xl font-black text-namo-black leading-snug mb-4">Pioneering deep tech for a better tomorrow.</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Namo Labs is on a mission to build secure, intelligent and impactful solutions through research and innovation.</p>
            </div>
            <Link href="/about" className="mt-6 inline-flex items-center gap-2 border border-gray-300 text-namo-black text-sm font-medium px-4 py-2.5 rounded-full w-fit hover:bg-gray-50 transition-colors">
              Learn more <ArrowRight size={13}/>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function MegaMenu({ menuKey }: MegaMenuProps) {
  if (menuKey === "platform")  return <PlatformMenu />;
  if (menuKey === "research")  return <ResearchMenu />;
  if (menuKey === "consulting") return <ConsultingMenu />;
  if (menuKey === "company")   return <CompanyMenu />;
  return null;
}
