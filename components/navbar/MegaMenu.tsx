"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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

const panelAnim = {
  initial: { opacity: 0, x: 8 },
  animate: { opacity: 1, x: 0 },
  exit:    { opacity: 0, x: 8 },
  transition: { duration: 0.18, ease: "easeOut" as const },
};

/* ─────────────────────────────── PLATFORM ─────────────────────────────── */
const platformProducts = [
  {
    icon: <Shield size={16} className="text-accent" />,
    label: "QSCL",
    sub: "Quantum-Safe Communication Layer",
    href: "/platform/qscl",
    panel: {
      tag: "Featured Platform",
      title: "QSCL™",
      desc: "A post-quantum cryptographic SDK that secures digital communication for the future. Built for developers. Ready for tomorrow.",
      cta: "Explore QSCL",
      href: "/platform/qscl",
      features: ["Post-Quantum Security", "Developer-First", "Future-Ready", "Open & Interoperable"],
    },
  },
  {
    icon: <Search size={16} className="text-accent" />,
    label: "DAFS",
    sub: "Digital Asset Forensics Suite",
    href: "/platform/dafs",
    panel: {
      tag: "Platform",
      title: "DAFS™",
      desc: "A powerful digital asset forensics suite for tracing, analyzing and reporting on blockchain transactions and digital evidence.",
      cta: "Explore DAFS",
      href: "/platform/dafs",
      features: ["Blockchain Tracing", "Evidence Analysis", "Compliance Ready", "Multi-chain Support"],
    },
  },
];

function PlatformMenu() {
  const [hovered, setHovered] = useState(platformProducts[0].label);
  const active = platformProducts.find(p => p.label === hovered)!;

  return (
    <motion.div {...enter} className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl">
      <div className="max-w-7xl mx-auto px-6 pt-8 pb-0">
        <div className="grid grid-cols-[220px_1fr_300px] gap-8 pb-8">

          {/* Left - product list */}
          <div>
            <p className="text-[11px] font-semibold text-accent uppercase tracking-widest mb-4">Platforms</p>
            {platformProducts.map(p => (
              <Link
                key={p.label}
                href={p.href}
                onMouseEnter={() => setHovered(p.label)}
                className={`flex items-start gap-3 p-3 rounded-xl group transition-colors mb-1 ${
                  hovered === p.label ? "bg-accent-light" : "hover:bg-gray-50"
                }`}
              >
                <div className="w-8 h-8 rounded-lg bg-white border border-gray-100 flex items-center justify-center flex-shrink-0 shadow-sm">
                  {p.icon}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-semibold text-namo-black">{p.label}</span>
                    <ArrowRight size={11} className="text-gray-300 group-hover:text-accent transition-colors" />
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5">{p.sub}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Center - QSCL logo */}
          <div className="flex flex-col items-center justify-center gap-3 border-x border-gray-100 px-8">
            <div className="flex items-center gap-4">
              <img src="/qscl-logo-transparent.png" alt="QSCL" className="w-16 h-16 object-contain" />
              <span className="text-4xl font-black text-namo-black tracking-tight">
                QSCL<sup className="text-gray-400 text-base font-normal ml-0.5">™</sup>
              </span>
            </div>
          </div>

          {/* Right - dynamic panel */}
          <AnimatePresence mode="wait">
            <motion.div key={active.label} {...panelAnim} className="bg-accent-light rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <p className="text-[11px] font-semibold text-accent uppercase tracking-widest mb-2">{active.panel.tag}</p>
                <h3 className="text-2xl font-black text-namo-black mb-3">{active.panel.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{active.panel.desc}</p>
              </div>
              <Link href={active.panel.href} className="mt-5 inline-flex items-center gap-2 bg-namo-black text-white text-sm font-medium px-4 py-2.5 rounded-full w-fit hover:bg-gray-800 transition-colors">
                {active.panel.cta} <ArrowRight size={13} />
              </Link>
            </motion.div>
          </AnimatePresence>

        </div>

        {/* Bottom feature bar */}
        <div className="border-t border-gray-100 grid grid-cols-4 divide-x divide-gray-100">
          {[
            { icon: <Shield size={16} />, title: "Post-Quantum Security",   desc: "Built with advanced post-quantum cryptography standards." },
            { icon: <Lock   size={16} />, title: "Developer-First",         desc: "Simple APIs. Easy integration. Powerful security." },
            { icon: <Globe  size={16} />, title: "Future-Ready",            desc: "Designed to protect today and tomorrow." },
            { icon: <Code2  size={16} />, title: "Open & Interoperable",    desc: "Open standards. Seamless compatibility." },
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

/* ─────────────────────────────── RESEARCH ─────────────────────────────── */
const focusAreas = [
  {
    icon: <Lock     size={16} className="text-blue-600" />,
    label: "Cryptography",
    desc: "Building secure foundations for the digital future.",
    href: "/research/cryptography",
    panel: {
      tag: "Focus Area",
      title: "Cryptography",
      body: "We research and develop cutting-edge cryptographic algorithms, post-quantum standards and secure protocols that form the backbone of tomorrow's digital infrastructure.",
      link: "/research/cryptography",
      cta: "Explore Cryptography Research",
    },
  },
  {
    icon: <Database size={16} className="text-indigo-600" />,
    label: "Blockchain",
    desc: "Decentralized systems for trust and transparency.",
    href: "/research/blockchain",
    panel: {
      tag: "Focus Area",
      title: "Blockchain",
      body: "From consensus mechanisms to smart contract security, our blockchain research drives the next generation of decentralized, trustless systems.",
      link: "/research/blockchain",
      cta: "Explore Blockchain Research",
    },
  },
  {
    icon: <Brain    size={16} className="text-orange-500" />,
    label: "Artificial Intelligence",
    desc: "Intelligent systems that learn, reason and evolve.",
    href: "/research/ai",
    panel: {
      tag: "Focus Area",
      title: "Artificial Intelligence",
      body: "Our AI research spans machine learning, large language models, reasoning systems and ethical AI - building systems that are intelligent, explainable and secure.",
      link: "/research/ai",
      cta: "Explore AI Research",
    },
  },
  {
    icon: <Atom     size={16} className="text-purple-600" />,
    label: "Quantum",
    desc: "Exploring quantum technologies for next-gen breakthroughs.",
    href: "/research/quantum",
    panel: {
      tag: "Focus Area",
      title: "Quantum",
      body: "We explore quantum computing, quantum communication and post-quantum cryptography to prepare the world for the quantum era.",
      link: "/research/quantum",
      cta: "Explore Quantum Research",
    },
  },
  {
    icon: <Cloud    size={16} className="text-sky-500" />,
    label: "Cloud",
    desc: "Scalable, secure and resilient cloud infrastructure.",
    href: "/research/cloud",
    panel: {
      tag: "Focus Area",
      title: "Cloud",
      body: "Our cloud research focuses on scalable, secure and energy-efficient architectures that power the next generation of digital services.",
      link: "/research/cloud",
      cta: "Explore Cloud Research",
    },
  },
];

function ResearchMenu() {
  const [hovered, setHovered] = useState(focusAreas[0].label);
  const active = focusAreas.find(a => a.label === hovered)!;

  return (
    <motion.div {...enter} className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl">
      <div className="max-w-7xl mx-auto px-6 pt-8 pb-0">
        <div className="grid grid-cols-[220px_1fr_1fr_260px] gap-8 pb-8">

          {/* Col 1 - Focus Areas */}
          <div>
            <p className="text-[11px] font-semibold text-accent uppercase tracking-widest mb-4">Focus Areas</p>
            <div className="space-y-0.5">
              {focusAreas.map(a => (
                <Link
                  key={a.label}
                  href={a.href}
                  onMouseEnter={() => setHovered(a.label)}
                  className={`flex items-center gap-3 p-2.5 rounded-xl group transition-colors ${
                    hovered === a.label ? "bg-accent-light" : "hover:bg-gray-50"
                  }`}
                >
                  <div className="w-7 h-7 rounded-lg bg-white border border-gray-100 flex items-center justify-center flex-shrink-0 shadow-sm">{a.icon}</div>
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-medium text-namo-black">{a.label}</span>
                    <ArrowRight size={11} className="text-gray-300 group-hover:text-accent transition-colors" />
                  </div>
                </Link>
              ))}
            </div>
            <Link href="/research" className="flex items-center gap-1 text-xs text-accent font-medium mt-4 hover:underline">
              Explore all focus areas <ArrowRight size={11} />
            </Link>
          </div>

          {/* Col 2 - Publications */}
          <div className="border-l border-gray-100 pl-8 flex flex-col">
            <p className="text-[11px] font-semibold text-accent uppercase tracking-widest mb-4">Publications</p>
            <div className="flex-1 flex flex-col items-start">
              <div className="w-12 h-12 rounded-xl bg-accent-light flex items-center justify-center mb-4">
                <FileText size={22} className="text-accent" />
              </div>
              <h4 className="text-lg font-bold text-namo-black leading-snug mb-2">Research that drives innovation.</h4>
              <p className="text-sm text-gray-500 leading-relaxed">Access our latest papers, whitepapers and technical reports across domains.</p>
            </div>
            <Link href="/research/papers" className="flex items-center gap-1 text-xs text-accent font-medium mt-4 hover:underline">
              View all publications <ArrowRight size={11} />
            </Link>
          </div>

          {/* Col 3 - Blog */}
          <div className="border-l border-gray-100 pl-8 flex flex-col">
            <p className="text-[11px] font-semibold text-accent uppercase tracking-widest mb-4">Blog</p>
            <div className="flex-1 flex flex-col items-start">
              <div className="w-12 h-12 rounded-xl bg-accent-light flex items-center justify-center mb-4">
                <PenSquare size={22} className="text-accent" />
              </div>
              <h4 className="text-lg font-bold text-namo-black leading-snug mb-2">Ideas, insights and updates.</h4>
              <p className="text-sm text-gray-500 leading-relaxed">Read our latest blog posts on emerging technologies, research updates and industry insights.</p>
            </div>
            <Link href="/blog" className="flex items-center gap-1 text-xs text-accent font-medium mt-4 hover:underline">
              Explore blog <ArrowRight size={11} />
            </Link>
          </div>

          {/* Col 4 - Dynamic panel based on hovered focus area */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.label}
              {...panelAnim}
              className="border-l border-gray-100 pl-8 flex flex-col"
            >
              <p className="text-[11px] font-semibold text-accent uppercase tracking-widest mb-4">{active.panel.tag}</p>
              <h4 className="text-lg font-bold text-namo-black leading-snug mb-2">{active.panel.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed flex-1">{active.panel.body}</p>
              <Link href={active.panel.link} className="flex items-center gap-1 text-xs text-accent font-medium mt-4 hover:underline">
                {active.panel.cta} <ArrowRight size={11} />
              </Link>
            </motion.div>
          </AnimatePresence>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-100 flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-accent-light flex items-center justify-center text-accent">
              <Search size={14} />
            </div>
            <p className="text-sm text-gray-600">Pushing the boundaries of technology through deep research and real-world impact.</p>
          </div>
          <Link href="/research" className="flex items-center gap-2 bg-namo-black text-white text-xs font-medium px-4 py-2.5 rounded-full hover:bg-gray-800 transition-colors whitespace-nowrap">
            Explore Research <ArrowRight size={12} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────── CONSULTING ─────────────────────────────── */
const consultingServices = [
  {
    icon: <BarChart3 size={16} />,
    label: "AI & Data Analytics",
    desc: "Unlock data value with AI-powered insights and advanced analytics.",
    href: "/consulting/ai-data",
    panel: {
      tag: "Consulting",
      title: "AI & Data Analytics",
      body: "Unlock the full value of your data with AI-powered analytics, predictive modelling and intelligent dashboards that drive smarter decisions.",
      cta: "Talk to an expert",
    },
  },
  {
    icon: <Building2 size={16} />,
    label: "Enterprise Solutions",
    desc: "Drive efficiency and innovation with scalable enterprise solutions.",
    href: "/consulting/enterprise",
    panel: {
      tag: "Consulting",
      title: "Enterprise Solutions",
      body: "We help large organizations modernize their operations, integrate intelligent systems and scale with confidence across every department.",
      cta: "Talk to an expert",
    },
  },
  {
    icon: <Shield size={16} />,
    label: "Cybersecurity",
    desc: "Strengthen resilience with end-to-end security and risk management.",
    href: "/consulting/cybersecurity",
    panel: {
      tag: "Consulting",
      title: "Cybersecurity",
      body: "From threat modelling to incident response, our cybersecurity consulting protects your digital assets with a zero-trust, defence-in-depth approach.",
      cta: "Talk to an expert",
    },
  },
  {
    icon: <Network size={16} />,
    label: "Network Solutions",
    desc: "Design, optimize and manage reliable and secure networks.",
    href: "/consulting/network",
    panel: {
      tag: "Consulting",
      title: "Network Solutions",
      body: "We design, deploy and optimize enterprise-grade network infrastructure - secure, reliable and built to scale with your business.",
      cta: "Talk to an expert",
    },
  },
  {
    icon: <Database size={16} />,
    label: "Blockchain",
    desc: "Build trust and transparency with decentralized solutions.",
    href: "/consulting/blockchain",
    panel: {
      tag: "Consulting",
      title: "Blockchain",
      body: "From tokenization to smart contracts and DeFi, our blockchain consultants help you harness decentralized technology for real business value.",
      cta: "Talk to an expert",
    },
  },
  {
    icon: <Leaf size={16} />,
    label: "Sustainability Services",
    desc: "Build a sustainable future with responsible solutions.",
    href: "/consulting/sustainability",
    panel: {
      tag: "Consulting",
      title: "Sustainability Services",
      body: "We help organizations reduce their digital carbon footprint and build responsible, energy-efficient technology stacks that align with ESG goals.",
      cta: "Talk to an expert",
    },
  },
  {
    icon: <Cloud size={16} />,
    label: "Cloud",
    desc: "Migrate, modernize and manage cloud infrastructure with agility.",
    href: "/consulting/cloud",
    panel: {
      tag: "Consulting",
      title: "Cloud",
      body: "Whether you're moving to the cloud, optimizing existing workloads or building multi-cloud strategies, we guide you every step of the way.",
      cta: "Talk to an expert",
    },
  },
  {
    icon: <Users size={16} />,
    label: "Consulting",
    desc: "Strategy, transformation and advisory services tailored to your goals.",
    href: "/consulting",
    panel: {
      tag: "Consulting",
      title: "Strategy & Advisory",
      body: "Our consulting practice helps organizations navigate digital transformation with clear strategy, expert guidance and measurable outcomes.",
      cta: "Talk to an expert",
    },
  },
];

function ConsultingMenu() {
  const [hovered, setHovered] = useState(consultingServices[0].label);
  const active = consultingServices.find(s => s.label === hovered)!;

  return (
    <motion.div {...enter} className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-[300px_1fr_280px] gap-10">

          {/* Left info card */}
          <div>
            <p className="text-[11px] font-semibold text-accent uppercase tracking-widest mb-3">Consulting</p>
            <h3 className="text-2xl font-black text-namo-black leading-snug mb-3">Solving complex challenges. Delivering measurable impact.</h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">Our consulting services help organizations modernize, secure and scale with confidence across industries and technologies.</p>
            <div className="bg-accent-light rounded-2xl p-5">
              <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-3">
                <Users size={16} />
              </div>
              <p className="text-sm font-semibold text-namo-black mb-1">Let&apos;s build the future together.</p>
              <p className="text-xs text-gray-500 mb-3">Partner with Namo Labs to turn ambition into impact.</p>
              <Link href="/contact" className="flex items-center gap-1 text-xs text-accent font-semibold hover:underline">
                Talk to an expert <ArrowRight size={11} />
              </Link>
            </div>
          </div>

          {/* Center 2-col grid of services */}
          <div className="grid grid-cols-2 gap-1 content-start">
            {consultingServices.map(s => (
              <Link
                key={s.label}
                href={s.href}
                onMouseEnter={() => setHovered(s.label)}
                className={`flex items-start gap-3 p-3 rounded-xl group transition-colors ${
                  hovered === s.label ? "bg-accent-light" : "hover:bg-gray-50"
                }`}
              >
                <div className="w-8 h-8 rounded-lg bg-white border border-gray-100 flex items-center justify-center text-accent flex-shrink-0 mt-0.5 shadow-sm">{s.icon}</div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-medium text-namo-black leading-snug">{s.label}</span>
                    <ArrowRight size={11} className="text-gray-300 group-hover:text-accent transition-colors flex-shrink-0" />
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{s.desc}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Right - dynamic panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.label}
              {...panelAnim}
              className="bg-gradient-to-br from-accent-light to-white rounded-2xl p-6 flex flex-col border border-accent/10"
            >
              <p className="text-[11px] font-semibold text-accent uppercase tracking-widest mb-3">{active.panel.tag}</p>
              <h3 className="text-xl font-black text-namo-black leading-snug mb-3">{active.panel.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed flex-1">{active.panel.body}</p>
              <Link href="/contact" className="mt-5 inline-flex items-center gap-2 bg-namo-black text-white text-sm font-medium px-4 py-2.5 rounded-full w-fit hover:bg-gray-800 transition-colors">
                {active.panel.cta} <ArrowRight size={13} />
              </Link>
            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────── COMPANY ─────────────────────────────── */
const companyItems = [
  {
    icon: <Building2  size={16} />,
    label: "About",
    desc: "Learn about our mission, vision and research philosophy.",
    href: "/about",
    panel: {
      tag: "About Namo Labs",
      title: "Pioneering deep tech for a better tomorrow.",
      body: "Namo Labs is on a mission to build secure, intelligent and impactful solutions through research and innovation. We operate at the intersection of technology, security and human progress.",
      cta: "Learn more",
      href: "/about",
    },
  },
  {
    icon: <Users      size={16} />,
    label: "Team",
    desc: "Meet the people behind Namo Labs.",
    href: "/about/team",
    panel: {
      tag: "Our People",
      title: "Researchers, engineers and innovators.",
      body: "Meet the brilliant minds at Namo Labs - a diverse team of researchers, engineers, designers and strategists united by a passion for building the future.",
      cta: "Meet the team",
      href: "/about/team",
    },
  },
  {
    icon: <Briefcase  size={16} />,
    label: "Careers",
    desc: "Join us in building the future of technology.",
    href: "/careers",
    panel: {
      tag: "Careers",
      title: "Build the future with us.",
      body: "We're looking for bold thinkers and builders who want to solve hard problems at the frontier of technology. Join Namo Labs and make your mark.",
      cta: "View open positions",
      href: "/careers",
    },
  },
  {
    icon: <Newspaper  size={16} />,
    label: "Newsroom",
    desc: "Latest news, announcements and press releases.",
    href: "/newsroom",
    panel: {
      tag: "Newsroom",
      title: "Latest from Namo Labs.",
      body: "Stay up to date with our latest product launches, research milestones, partnerships and press coverage from around the world.",
      cta: "Visit newsroom",
      href: "/newsroom",
    },
  },
  {
    icon: <Handshake  size={16} />,
    label: "Partnerships",
    desc: "Partner with Namo Labs to turn ambition into impact.",
    href: "/partnership",
    panel: {
      tag: "Partnerships",
      title: "Let's build the future together.",
      body: "We collaborate with governments, enterprises and research institutions to create transformative solutions. Partner with Namo Labs to amplify your impact.",
      cta: "Explore partnerships",
      href: "/partnership",
    },
  },
  {
    icon: <TrendingUp size={16} />,
    label: "Investment",
    desc: "Explore investment opportunities with Namo Labs.",
    href: "/investment",
    panel: {
      tag: "Investment",
      title: "Invest in the future of deep tech.",
      body: "Namo Labs is at the forefront of post-quantum security, AI and blockchain. Explore investment opportunities and grow alongside a company defining the next era of technology.",
      cta: "Learn about investment",
      href: "/investment",
    },
  },
];

function CompanyMenu() {
  const [hovered, setHovered] = useState(companyItems[0].label);
  const active = companyItems.find(i => i.label === hovered)!;

  return (
    <motion.div {...enter} className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-[280px_1fr] gap-12">

          {/* Left list */}
          <div>
            <p className="text-[11px] font-semibold text-accent uppercase tracking-widest mb-4">Company</p>
            <div className="space-y-0.5">
              {companyItems.map(item => (
                <Link
                  key={item.label}
                  href={item.href}
                  onMouseEnter={() => setHovered(item.label)}
                  className={`flex items-center gap-3 p-3 rounded-xl group transition-colors ${
                    hovered === item.label ? "bg-accent-light" : "hover:bg-gray-50"
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                    hovered === item.label ? "bg-accent text-white" : "bg-accent-light text-accent"
                  }`}>
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-namo-black">{item.label}</span>
                      <ArrowRight size={13} className={`transition-colors ${
                        hovered === item.label ? "text-accent" : "text-gray-300 group-hover:text-accent"
                      }`} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Right - dynamic panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.label}
              {...panelAnim}
              className="bg-gradient-to-br from-accent-light to-white rounded-2xl p-8 flex flex-col justify-between border border-accent/10"
            >
              <div>
                <p className="text-[11px] font-semibold text-accent uppercase tracking-widest mb-3">{active.panel.tag}</p>
                <h3 className="text-3xl font-black text-namo-black leading-snug mb-4">{active.panel.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{active.panel.body}</p>
              </div>
              <Link href={active.panel.href} className="mt-6 inline-flex items-center gap-2 border border-gray-300 text-namo-black text-sm font-medium px-4 py-2.5 rounded-full w-fit hover:bg-gray-50 transition-colors">
                {active.panel.cta} <ArrowRight size={13} />
              </Link>
            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────── EXPORT ─────────────────────────────── */
export default function MegaMenu({ menuKey }: MegaMenuProps) {
  if (menuKey === "platform")   return <PlatformMenu />;
  if (menuKey === "research")   return <ResearchMenu />;
  if (menuKey === "consulting") return <ConsultingMenu />;
  if (menuKey === "company")    return <CompanyMenu />;
  return null;
}
