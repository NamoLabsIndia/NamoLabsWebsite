"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Search,
  Target,
  ShieldCheck,
  Lightbulb,
  BookOpen,
  Microscope,
  Cog,
  FlaskConical,
  Rocket,
  Globe,
  Lock,
  Blocks,
  Brain,
  Atom,
  Cloud,
  Code2,
  BarChart3,
  Quote,
  User,
  PenTool,
  GraduationCap,
  Users,
  Mail,
  MapPin,
  Send,
  Heart,
} from "lucide-react";
import Breadcrumb from "@/components/shared/Breadcrumb";
import Reveal from "@/components/shared/Reveal";
import PhotoSlot from "@/components/shared/PhotoSlot";

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Company", href: "/about" },
  { label: "Team" },
];

const eyebrow = "text-[11px] font-semibold uppercase tracking-[0.22em] text-accent";

/* Brand icons — this lucide build ships no brand marks, so inline them (as the Footer does) */
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

/* Our Philosophy */
const philosophy = [
  { title: "Research First", icon: <Search size={20} />, body: "We start with deep research and evidence, not assumptions." },
  { title: "Think Long-Term", icon: <Target size={20} />, body: "We build with a 10-year mindset, solving problems that truly matter." },
  { title: "Build Securely", icon: <ShieldCheck size={20} />, body: "Security, privacy and integrity are non-negotiable in everything we build." },
  { title: "Challenge Ideas", icon: <Lightbulb size={20} />, body: "We question, debate and refine—so that the best ideas win." },
  { title: "Learn Every Day", icon: <BookOpen size={20} />, body: "We are committed to continuous learning, growth and knowledge sharing." },
];

/* How We Work */
const process = [
  { n: "01", title: "Research", icon: <Microscope size={26} />, body: "Every project begins with research." },
  { n: "02", title: "Engineering", icon: <Cog size={26} />, body: "Ideas become production-grade systems." },
  { n: "03", title: "Experiment", icon: <FlaskConical size={26} />, body: "Rapid validation through prototypes." },
  { n: "04", title: "Build", icon: <Rocket size={26} />, body: "Transform research into robust products." },
  { n: "05", title: "Impact", icon: <Globe size={26} />, body: "Technology serving people worldwide." },
];

/* Our Teams */
const teams = [
  { title: "Cryptography Research", icon: <Lock size={22} />, body: "Advancing cryptographic science to build quantum-safe, secure foundations." },
  { title: "Blockchain Engineering", icon: <Blocks size={22} />, body: "Building scalable, secure, and interoperable blockchain infrastructure." },
  { title: "Artificial Intelligence", icon: <Brain size={22} />, body: "Creating intelligent systems that learn, reason, and automate complex tasks." },
  { title: "Quantum Technologies", icon: <Atom size={22} />, body: "Exploring quantum computing, communication, and post-quantum security." },
  { title: "Cloud Infrastructure", icon: <Cloud size={22} />, body: "Designing resilient, secure, and high-performance cloud architectures." },
  { title: "Platform Engineering", icon: <Code2 size={22} />, body: "Building developer-centric platforms, tools, and foundational systems." },
  { title: "Product Design", icon: <Lightbulb size={22} />, body: "Designing intuitive experiences that make powerful technology easy to adopt." },
  { title: "Strategy & Operations", icon: <BarChart3 size={22} />, body: "Aligning strategy, operations, and execution to drive sustainable growth." },
];

/* Culture */
const culture = [
  {
    title: "Own Your Work.",
    icon: <User size={20} />,
    body: "We believe in ownership, not hierarchy. Every member takes full responsibility, drives impact, and sees their work through to excellence.",
    img: "/team/culture-summit.jpg",
    alt: "Illustration of a climber planting a flag on a peak",
  },
  {
    title: "Think Like a Researcher.",
    icon: <Brain size={20} />,
    body: "Curiosity drives us. We question assumptions, explore deeply, and base decisions on evidence and experiments.",
    img: "/team/culture-research.jpg",
    alt: "Illustration of a researcher studying data on large screens",
  },
  {
    title: "Build for Decades.",
    icon: <Rocket size={20} />,
    body: "We build with a long-term mindset. Our goal is to create secure, scalable technologies that stand the test of time and serve generations.",
    img: "/team/culture-city.jpg",
    alt: "Illustration of a future city skyline under a dome",
  },
];

/* Careers */
const careers = [
  { title: "Research", icon: <Microscope size={24} />, body: "Push the boundaries of knowledge and explore emerging frontiers." },
  { title: "Engineering", icon: <Code2 size={24} />, body: "Design, build and scale secure, reliable, and innovative systems." },
  { title: "Design", icon: <PenTool size={24} />, body: "Craft intuitive experiences that make complex technology simple." },
  { title: "Security", icon: <ShieldCheck size={24} />, body: "Protect systems and data with world-class security and privacy." },
  { title: "Operations", icon: <BarChart3 size={24} />, body: "Drive impact through strategy, processes and operational excellence." },
  { title: "Internships", icon: <GraduationCap size={24} />, body: "Learn, build, and grow with mentorship from experienced builders." },
];

const contactRows = [
  { icon: <Mail size={18} />, label: "Email Us", value: "hello@namolabs.in", href: "mailto:hello@namolabs.in" },
  { icon: <Globe size={18} />, label: "Visit Our Website", value: "www.namolabs.in", href: "https://www.namolabs.in" },
  { icon: <MapPin size={18} />, label: "Our Headquarters", value: "Namo Labs, Chennai, India" },
];

const field =
  "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-namo-black " +
  "placeholder:text-gray-400 outline-none transition focus:border-accent focus:ring-4 focus:ring-accent/10";

export default function TeamPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="bg-white">
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="px-5 pt-28 sm:px-8 sm:pt-32">
        <div className="mx-auto max-w-6xl">
          <Breadcrumb items={crumbs} />
        </div>
        <div className="mx-auto mt-6 max-w-6xl overflow-hidden rounded-[28px] bg-gradient-to-b from-[#f4f6ff] to-white ring-1 ring-black/5">
          <div className="grid items-stretch gap-6 lg:grid-cols-2 lg:gap-0">
            <div className="flex flex-col justify-center px-6 py-10 sm:px-10 lg:py-16 lg:pr-6">
              <Reveal>
                <p className={eyebrow}>Team</p>
                <div className="mt-2 h-[3px] w-12 rounded-full bg-accent" />
                <h1 className="mt-5 text-5xl font-extrabold leading-[1.05] tracking-tight text-namo-black sm:text-6xl">
                  The People
                  <br />
                  Building Tomorrow<span className="text-accent">.</span>
                </h1>
                <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-gray-600">
                  We are researchers, engineers, designers, scientists, builders, and
                  problem-solvers united by one purpose:
                </p>
                <p className="mt-2 max-w-sm text-[15px] font-semibold text-accent">
                  Driving Technology for Mankind.
                </p>
                <Link
                  href="#culture"
                  className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-[#2f4be0]"
                >
                  Explore Our Culture <ArrowRight size={14} />
                </Link>
              </Reveal>
            </div>

            <Reveal direction="right" className="p-4 pt-0 sm:p-5 sm:pt-0 lg:p-5 lg:pl-0">
              <PhotoSlot
                src="/team/hero-team.jpg"
                alt="The Namo Labs team collaborating around a holographic lotus interface, surrounded by AI, blockchain, quantum, cryptography and cloud tags"
                className="h-full min-h-[300px] w-full rounded-[20px] object-cover lg:min-h-[460px]"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════ OUR PHILOSOPHY ═══════════════ */}
      <section className="relative overflow-hidden px-5 py-24 sm:px-8">
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal direction="left">
            <p className={eyebrow}>Our Philosophy</p>
            <div className="mt-3 h-[3px] w-12 rounded-full bg-accent" />
            <h2 className="mt-7 text-4xl font-extrabold tracking-tight text-namo-black sm:text-5xl">
              We Hire Builders<span className="text-accent">.</span>
            </h2>
            <p className="mt-8 max-w-md text-[15px] leading-relaxed text-gray-600">
              We believe great technology is created by curious minds, disciplined
              engineering, and relentless research—not by titles.
            </p>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-gray-600">
              Every member of Namo Labs contributes to technologies designed for long-term
              impact.
            </p>
          </Reveal>

          <div className="relative space-y-3 pl-10">
            {/* Vertical connector line */}
            <div className="absolute bottom-10 left-[19px] top-10 w-px bg-accent/20" />
            
            {philosophy.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08} direction="right">
                <div className="relative group">
                  {/* Dot marker */}
                  <span className="absolute -left-10 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center">
                    <span className="h-2 w-2 rounded-full bg-accent ring-4 ring-white" />
                  </span>
                  
                  <div className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-[0_18px_50px_-32px_rgba(60,80,180,0.5)] ring-1 ring-black/5 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_24px_60px_-25px_rgba(60,80,180,0.55)]">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-accent-light text-accent transition-transform duration-300 group-hover:scale-110">
                      {p.icon}
                    </div>
                    <div>
                      <h4 className="text-[15px] font-bold text-namo-black">{p.title}</h4>
                      <p className="mt-1 text-[13px] leading-relaxed text-gray-500">{p.body}</p>
                    </div>
                    <span className="ml-auto mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ HOW WE WORK ═══════════════ */}
      <section className="relative overflow-hidden bg-namo-faint px-5 py-24 sm:px-8">
        {/* wave band with glowing nodes — scraped from the PDF art */}
        <img
          src="/backgrounds/waves-wide.jpg"
          alt=""
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-1/2 w-full min-w-[900px] -translate-x-1/2 mix-blend-multiply"
        />
        <div className="relative mx-auto max-w-6xl">
          <Reveal className="text-center">
            <p className={eyebrow}>Our Approach</p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-namo-black sm:text-5xl">
              How We Work<span className="text-accent">.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-gray-500">
              A research-driven process that turns ideas into secure, scalable, and
              impactful technologies.
            </p>
          </Reveal>

          <div className="mt-14 flex flex-col items-stretch gap-4 lg:flex-row lg:items-center">
            {process.map((step, i) => (
              <React.Fragment key={step.n}>
                <Reveal delay={i * 0.08} direction="up" className="flex-1">
                  <div className="group flex h-full flex-col items-center rounded-2xl bg-white p-6 text-center shadow-[0_18px_50px_-32px_rgba(60,80,180,0.45)] ring-1 ring-black/5 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_24px_60px_-25px_rgba(60,80,180,0.55)]">
                    <span className="text-sm font-bold text-accent">{step.n}</span>
                    <div className="mt-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent-light text-accent transition-transform duration-300 group-hover:scale-110">
                      {step.icon}
                    </div>
                    <h4 className="mt-5 text-lg font-bold text-namo-black">{step.title}</h4>
                    <div className="mt-3 h-[3px] w-6 rounded-full bg-accent/60" />
                    <p className="mt-4 text-[13px] leading-relaxed text-gray-500">{step.body}</p>
                  </div>
                </Reveal>
                {i < process.length - 1 && (
                  <Reveal delay={i * 0.08 + 0.2} direction="none" className="mx-auto hidden flex-shrink-0 text-accent/50 lg:block">
                    <ArrowRight size={20} />
                  </Reveal>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ OUR TEAMS ═══════════════ */}
      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal className="text-center">
            <p className={eyebrow}>Our Teams</p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-namo-black sm:text-5xl">
              Our Teams<span className="text-accent">.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-gray-500">
              Cross-disciplinary teams working together to solve complex problems and build
              the future.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {teams.map((t, i) => (
              <Reveal key={t.title} delay={(i % 4) * 0.08} direction="up">
                <div className="group flex h-full flex-col rounded-2xl bg-white p-5 shadow-[0_18px_50px_-32px_rgba(60,80,180,0.45)] ring-1 ring-black/5 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_24px_60px_-30px_rgba(60,80,180,0.55)]">
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-light text-accent transition-transform duration-300 group-hover:scale-110">
                      {React.cloneElement(t.icon as React.ReactElement, { size: 18 })}
                    </div>
                    <ArrowRight size={16} className="text-gray-300 transition-colors group-hover:text-accent" />
                  </div>
                  <h4 className="mt-4 text-[14px] font-bold leading-snug text-namo-black">{t.title}</h4>
                  <div className="mt-2.5 h-[2px] w-5 rounded-full bg-accent/60" />
                  <p className="mt-3 text-[12px] leading-relaxed text-gray-500">{t.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ FOUNDER ═══════════════ */}
      <section className="px-5 pb-24 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-stretch gap-0 overflow-hidden rounded-[28px] bg-gradient-to-b from-[#f4f6ff] to-white ring-1 ring-black/5 lg:grid-cols-2">
            <Reveal direction="left" className="px-7 py-12 sm:px-12">
              <p className={eyebrow}>Leadership</p>
              <div className="mt-3 h-[3px] w-12 rounded-full bg-accent" />
              <h2 className="mt-6 text-5xl font-extrabold tracking-tight text-namo-black">
                Founder<span className="text-accent">.</span>
              </h2>
              <h3 className="mt-6 text-2xl font-bold text-namo-black">Namoj PeriaKumar</h3>
              <p className="mt-1 text-sm font-medium text-accent">Founder &amp; CEO, Namo Labs</p>
              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-gray-600">
                Namoj is a researcher and builder focused on cryptography, blockchain, and
                emerging technologies. With a vision to create secure, scalable, and
                impactful solutions, he founded Namo Labs to build technologies that serve
                humanity and stand the test of time.
              </p>

              <blockquote className="mt-8 max-w-md rounded-2xl bg-[#f4f6ff] p-6">
                <div className="flex items-start gap-4">
                  <Quote size={28} className="mt-1 flex-shrink-0 text-accent" fill="currentColor" />
                  <div>
                    <p className="text-[14px] font-medium leading-relaxed text-namo-black">
                      Building technology that serves humanity requires patience, research, and
                      people who believe in solving meaningful problems.
                    </p>
                    <div className="mt-5">
                      <p className="font-[cursive] text-[19px] text-gray-700">Namoj PeriaKumar</p>
                      <p className="mt-1 text-[12px] font-semibold text-accent">— Namoj PeriaKumar</p>
                    </div>
                  </div>
                </div>
              </blockquote>
            </Reveal>

            <Reveal direction="right" className="min-h-[420px] lg:min-h-[600px]">
              <PhotoSlot
                src="/team/founder.jpg"
                alt="Portrait of Namoj PeriaKumar, Founder & CEO of Namo Labs"
                className="h-full w-full"
                imgClassName="object-cover object-top"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════ CULTURE ═══════════════ */}
      <section id="culture" className="scroll-mt-24 bg-namo-faint px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal className="text-center">
            <p className={eyebrow}>Our Culture</p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-namo-black sm:text-5xl">
              Culture at Namo Labs<span className="text-accent">.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-gray-500">
              Our culture is the foundation of our innovation. It defines how we think,
              build, and grow together.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {culture.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.1} direction="up" className="group">
                <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_18px_50px_-32px_rgba(60,80,180,0.45)] ring-1 ring-black/5 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_24px_60px_-25px_rgba(60,80,180,0.55)]">
                  <div className="flex-shrink-0 px-5 pt-5 pb-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-light text-accent transition-transform duration-300 group-hover:scale-110">
                      {React.cloneElement(c.icon as React.ReactElement, { size: 18 })}
                    </div>
                    <h4 className="mt-4 text-[16px] font-bold text-namo-black">{c.title}</h4>
                    <div className="mt-2.5 h-[2px] w-5 rounded-full bg-accent/60" />
                    <p className="mt-2.5 text-[12px] leading-relaxed text-gray-500">{c.body}</p>
                  </div>
                  <PhotoSlot src={c.img} alt={c.alt} className="mt-auto h-40" imgClassName="object-cover object-bottom opacity-90 transition-transform duration-500 group-hover:scale-105" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CAREERS ═══════════════ */}
      <section className="px-5 py-24 sm:px-8">
        <div className="relative mx-auto max-w-[1300px] overflow-hidden rounded-[28px] bg-gradient-to-b from-[#f4f6ff] to-white px-5 py-12 ring-1 ring-black/5 sm:px-8 lg:p-14">
          <div className="relative z-10 mx-auto max-w-[1150px]">
          <Reveal className="text-center">
            <p className={eyebrow}>Careers</p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-namo-black sm:text-5xl">
              Join Our <span className="text-accent">Team.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-gray-500">
              We&apos;re always looking for exceptional people who are passionate about
              building technologies that matter.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {careers.map((c, i) => (
              <Reveal key={c.title} delay={(i % 6) * 0.06} direction="up" className="group flex h-full flex-col items-center rounded-2xl bg-white p-4 text-center shadow-[0_18px_50px_-32px_rgba(60,80,180,0.45)] ring-1 ring-black/5 sm:p-5 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_24px_60px_-25px_rgba(60,80,180,0.55)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-light text-accent transition-transform duration-300 group-hover:scale-110">
                  {React.cloneElement(c.icon as React.ReactElement, { size: 20 })}
                </div>
                <h4 className="mt-4 text-[14px] font-bold text-namo-black">{c.title}</h4>
                <div className="mt-2.5 h-[2px] w-5 rounded-full bg-accent/60" />
                <p className="mt-3 flex-1 text-[11px] leading-relaxed text-gray-500">{c.body}</p>
                <span className="mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-gray-50 text-accent ring-1 ring-gray-100 transition-colors group-hover:ring-accent">
                  <ArrowRight size={14} />
                </span>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} direction="up">
            <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl bg-namo-faint py-4 px-6 sm:flex-row sm:px-8">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-accent-light text-accent">
                  <Users size={18} />
                </div>
                <div>
                  <p className="text-[14px] font-bold text-namo-black">Don&apos;t see the right role?</p>
                  <p className="mt-0.5 text-[12px] text-gray-500">
                    We&apos;re always open to connecting with great talent.
                  </p>
                </div>
              </div>
              <Link
                href="/careers"
                className="inline-flex flex-shrink-0 items-center gap-2 rounded-full bg-accent px-6 py-2.5 text-[13px] font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[#2f4be0] hover:shadow-lg hover:shadow-accent/20"
              >
                View Careers <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════ LET'S BUILD THE FUTURE ═══════════════ */}
      <section className="px-5 pb-24 sm:px-8">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[28px] bg-gradient-to-br from-[#eef2ff] via-[#f5f7ff] to-[#dbe6ff] p-6 ring-1 ring-black/5 sm:p-10">
          {/* dotted network globe — scraped from the PDF art */}
          <img
            src="/backgrounds/globe-network.jpg"
            alt=""
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 hidden h-full object-cover opacity-90 [mask-image:linear-gradient(to_left,black_65%,transparent)] lg:block"
          />

          <div className="relative z-10 grid gap-12 lg:grid-cols-2 lg:gap-8">
            {/* Left */}
            <Reveal direction="left">
              <p className={eyebrow}>Let&apos;s build the future</p>
              <div className="mt-3 h-[3px] w-12 rounded-full bg-accent" />
              <h2 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-namo-black sm:text-5xl">
                Let&apos;s Build a
                <br />
                Secure <span className="text-accent">Tomorrow.</span>
              </h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-gray-600">
                We collaborate with organizations and innovators to build secure, scalable,
                and future-ready technologies that create a lasting impact.
              </p>

              <div className="mt-8 space-y-4">
                {contactRows.map((r, i) => (
                  <Reveal key={r.label} delay={i * 0.1} direction="up" className="flex items-center gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white text-accent shadow-sm">
                      {React.cloneElement(r.icon as React.ReactElement, { size: 18 })}
                    </div>
                    <div>
                      <p className="text-[13px] font-bold text-namo-black">{r.label}</p>
                      {r.href ? (
                        <a href={r.href} className="mt-0.5 text-[12px] font-medium text-accent hover:underline">
                          {r.value}
                        </a>
                      ) : (
                        <p className="mt-0.5 text-[12px] text-gray-500">{r.value}</p>
                      )}
                    </div>
                  </Reveal>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-4">
                {[
                  { icon: <LinkedinIcon />, href: "#", label: "LinkedIn" },
                  { icon: <XIcon />, href: "#", label: "Twitter" },
                  { icon: <GithubIcon />, href: "#", label: "GitHub" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-accent shadow-sm transition-colors hover:bg-accent hover:text-white"
                  >
                    {React.cloneElement(s.icon as React.ReactElement, { size: 14 })}
                  </a>
                ))}
                <span className="text-[12px] text-gray-500">Follow our journey</span>
              </div>
            </Reveal>

            {/* Right — form */}
            <Reveal delay={0.1} direction="right">
              <div className="rounded-2xl bg-white p-6 shadow-xl shadow-black/[0.05] ring-1 ring-gray-100 sm:p-7">
                <h3 className="text-[20px] font-bold text-namo-black">Get in Touch</h3>
                <p className="mt-1.5 text-[13px] text-gray-500">
                  Have a question, idea, or collaboration in mind? We&apos;d love to hear
                  from you.
                </p>

                {sent ? (
                  <div className="mt-6 flex min-h-[240px] flex-col items-center justify-center text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-light text-accent">
                      <Send size={20} />
                    </div>
                    <p className="mt-4 text-base font-bold text-namo-black">Message sent</p>
                    <p className="mt-1.5 max-w-xs text-[13px] text-gray-500">
                      Thanks for reaching out — our team will get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form
                    className="mt-5 space-y-3"
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSent(true);
                    }}
                  >
                    <div className="grid gap-3 sm:grid-cols-2">
                      <input name="name" required placeholder="Your Name" className={`${field} py-2.5 text-[13px]`} />
                      <input name="email" type="email" required placeholder="Work Email" className={`${field} py-2.5 text-[13px]`} />
                    </div>
                    <input name="company" placeholder="Company / Organization" className={`${field} py-2.5 text-[13px]`} />
                    <textarea name="message" required rows={3} placeholder="Your Message" className={`${field} resize-none py-2.5 text-[13px]`} />
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-[#2f4be0]"
                    >
                      Send Message <ArrowRight size={14} />
                    </button>
                    <p className="mt-1 flex items-center justify-center gap-1.5 text-[11px] text-gray-500">
                      <ShieldCheck size={13} className="text-accent" />
                      We respect your privacy. Your information is safe with us.
                    </p>
                  </form>
                )}
              </div>
            </Reveal>
          </div>

          {/* Closing line */}
          <div className="relative mt-8 border-t border-gray-200/70 pt-5 text-center">
            <p className="flex items-center justify-center gap-1.5 text-[13px] font-semibold text-accent">
              <Heart size={14} fill="currentColor" /> For Humanity Always
            </p>
            <p className="mt-1.5 text-[13px] font-medium text-namo-black">
              Building technology that protects, empowers, and elevates humanity.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
