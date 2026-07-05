"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Search,
  Lightbulb,
  Code2,
  Rocket,
  Target,
  ShieldCheck,
  Blocks,
  Brain,
  Atom,
  Cloud,
  Quote,
  Users,
  Globe,
  Handshake,
} from "lucide-react";
import Breadcrumb from "@/components/shared/Breadcrumb";
import Reveal from "@/components/shared/Reveal";
import PhotoSlot from "@/components/shared/PhotoSlot";

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Company", href: "/about" },
  { label: "About Us" },
];

const eyebrow = "text-[11px] font-semibold uppercase tracking-[0.22em] text-accent";

/* ── Why We Exist — process timeline ── */
const journey = [
  { label: "Research", icon: <Search size={20} /> },
  { label: "Innovation", icon: <Lightbulb size={20} /> },
  { label: "Engineering", icon: <Code2 size={20} /> },
  { label: "Deployment", icon: <Rocket size={20} /> },
  { label: "Impact", icon: <Target size={20} /> },
];

/* ── What We Build ── */
const build = [
  { title: "Cryptography", icon: <ShieldCheck size={26} />, body: "Building secure digital foundations for a trusted world." },
  { title: "Blockchain", icon: <Blocks size={26} />, body: "Trust infrastructure for the digital economy." },
  { title: "Artificial Intelligence", icon: <Brain size={26} />, body: "Intelligent systems designed to solve real-world challenges." },
  { title: "Quantum", icon: <Atom size={26} />, body: "Preparing for the post-quantum future with advanced research." },
  { title: "Cloud", icon: <Cloud size={26} />, body: "Scalable, resilient infrastructure powering modern innovation." },
];

/* ── Join Us Today — value points ── */
const values = [
  { title: "Collaborate", icon: <Users size={16} />, body: "Work with a team that cares about impact." },
  { title: "Innovate", icon: <Lightbulb size={16} />, body: "Solve real-world problems with cutting-edge tech." },
  { title: "Make Impact", icon: <Globe size={16} />, body: "Create solutions that improve lives globally." },
  { title: "Grow Together", icon: <Handshake size={16} />, body: "Learn, build, and grow in a purpose-driven culture." },
];

const trusted = [
  { icon: <ShieldCheck size={14} />, line1: "Researchers", line2: "& Innovators" },
  { icon: <Rocket size={14} />, line1: "Startups", line2: "& Builders" },
  { icon: <Blocks size={14} />, line1: "Enterprises", line2: "& Institutions" },
  { icon: <Globe size={14} />, line1: "Global", line2: "Partners" },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative flex min-h-screen flex-col overflow-hidden bg-white pt-28 sm:pt-32">
        {/* Full-bleed photo right, fades left, top, and bottom */}
        <Reveal
          direction="right"
          className="pointer-events-none absolute inset-y-0 right-0 hidden h-full w-[54%] lg:block"
        >
          <img
            src="/company/hero-globe.jpg"
            alt="A child on a mountain peak lifting a glowing globe toward the sky"
            className="h-full w-full object-cover object-right [mask-image:linear-gradient(to_left,black_70%,transparent)]"
          />
          {/* Seamless vertical transitions into the white background */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
        </Reveal>
        <div className="relative flex w-full flex-1 flex-col px-5 sm:px-8">
          <Breadcrumb items={crumbs} />
          <div className="flex max-w-[520px] flex-1 flex-col justify-center pb-16 pt-10 lg:pb-24 lg:pt-0">
            <Reveal>
              <p className={eyebrow}>About Namo Labs</p>
              <h1 className="mt-5 text-5xl font-extrabold leading-[1.05] tracking-tight text-namo-black sm:text-6xl">
                Driving Technology
                <br />
                for <span className="text-accent">Mankind.</span>
              </h1>
              <div className="mt-5 h-[3px] w-12 rounded-full bg-accent" />
              <p className="mt-7 max-w-md text-[15px] leading-relaxed text-gray-600">
                At Namo Labs, we believe technology should solve problems that
                matter—not just for today, but for generations ahead.
              </p>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-gray-600">
                We conduct research, build digital infrastructure, and develop
                technologies across cryptography, blockchain, artificial
                intelligence, quantum computing, and cloud systems to strengthen
                governments, institutions, enterprises, and society.
              </p>
            </Reveal>
          </div>
          {/* Mobile: photo stacks below text */}
          <PhotoSlot
            src="/company/hero-globe.jpg"
            alt="A child on a mountain peak lifting a glowing globe toward the sky"
            className="-mx-5 h-72 sm:-mx-8 sm:h-96 lg:hidden"
          />
        </div>
      </section>

      {/* ═══════════════ WHY WE EXIST ═══════════════ */}
      <section className="relative flex min-h-screen flex-col overflow-hidden bg-white">
        {/* Summit photo bleeds to right viewport edge, matching Hero style */}
        <Reveal
          direction="right"
          className="pointer-events-none absolute inset-y-0 right-0 hidden h-full w-[54%] lg:block"
        >
          <img
            src="/company/why-summit.jpeg"
            alt=""
            aria-hidden
            className="h-full w-full object-cover object-right [mask-image:linear-gradient(to_left,black_70%,transparent)]"
          />
          {/* Top and Bottom vertical transitions */}
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
        </Reveal>

        <div className="relative flex w-full flex-1 flex-col px-5 sm:px-8">
          <div className="flex flex-1 flex-col justify-center py-16 lg:py-24">
            <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
              {/* Text */}
              <Reveal className="max-w-md">
                <h2 className="text-4xl font-extrabold tracking-tight text-namo-black sm:text-5xl">
                  Why We Exist
                </h2>
                <div className="mt-5 h-[3px] w-12 rounded-full bg-accent" />
                <div className="mt-8 space-y-6 text-[15px] leading-relaxed text-gray-600">
                  <p>Technology has become one of humanity&apos;s most powerful tools.</p>
                  <p>
                    Its impact extends beyond software into healthcare, national security,
                    finance, education, scientific discovery, and public infrastructure.
                  </p>
                  <p>
                    Namo Labs exists to ensure that this technological progress remains
                    secure, responsible, and beneficial for mankind.
                  </p>
                </div>
              </Reveal>

              {/* Timeline */}
              <div className="flex flex-col items-start space-y-0 lg:pl-8" role="list">
                {journey.map((step, i) => (
                  <Reveal
                    key={step.label}
                    delay={i * 0.1}
                    direction="up"
                    className="flex items-center gap-5"
                  >
                    <div className="flex flex-col items-center">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-accent/20 bg-white text-accent shadow-sm transition-transform duration-300 ease-out hover:scale-105">
                        {step.icon}
                      </div>
                      {i < journey.length - 1 && (
                        <div className="my-1 h-8 w-px bg-gradient-to-b from-accent/40 to-accent/10" />
                      )}
                    </div>
                    <span className="pb-8 text-lg font-semibold text-namo-black last:pb-0">
                      {step.label}
                    </span>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile photo */}
        <PhotoSlot
          src="/company/why-summit.jpeg"
          alt="A hiker standing on a rocky summit overlooking misty mountains"
          className="mx-5 mb-12 h-72 rounded-2xl sm:mx-8 sm:h-96 lg:hidden"
        />
      </section>



      {/* ═══════════════ MISSION & VISION ═══════════════ */}
      <section className="px-5 pb-16 pt-24 sm:px-8">
        <div className="grid items-stretch gap-6 lg:grid-cols-2">
          {/* Mission */}
          <Reveal direction="left" className="flex">
            <div className="group relative flex w-full flex-col overflow-hidden rounded-2xl ring-1 ring-black/5 transition-shadow duration-300 hover:shadow-xl min-h-[460px]">
              {/* Full Background Photo */}
              <div className="absolute inset-0 z-0">
                <PhotoSlot
                  src="/company/mission-summit.jpg"
                  alt="A hiker standing on a mountain peak at golden hour sunrise overlooking clouds"
                  className="h-full w-full"
                  imgClassName="object-cover object-bottom transition-transform duration-700 group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/30 to-transparent" />
              </div>

              {/* Text content (top-left) */}
              <div className="relative z-10 flex flex-col items-start p-8 mr-auto text-left">
                <p className="text-[11px] font-bold uppercase tracking-widest text-white/90">Our Mission</p>
                <div className="mt-2 h-[3px] w-8 rounded-full bg-accent" />
                <h3 className="mt-4 max-w-[320px] text-[23px] font-bold leading-[1.13] tracking-tight text-white">
                  To advance technologies that strengthen societies, protect digital
                  infrastructure, and create lasting value for humanity.
                </h3>
                <p className="mt-3 max-w-[280px] text-[13px] leading-relaxed text-gray-300">
                  We build, secure, and scale the technologies that empower institutions,
                  enterprises, and communities to thrive in a digital world.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Vision */}
          <Reveal direction="right" delay={0.1} className="flex">
            <div className="group relative flex w-full flex-col overflow-hidden rounded-2xl ring-1 ring-black/5 transition-shadow duration-300 hover:shadow-xl min-h-[460px]">
              {/* Full Background Photo */}
              <div className="absolute inset-0 z-0">
                <PhotoSlot
                  src="/company/vision-city.jpg"
                  alt="Aerial view of a futuristic city with glass skyscrapers and a geodesic dome"
                  className="h-full w-full"
                  imgClassName="object-cover object-center transition-transform duration-700 group-hover:scale-[1.05]"
                />
                {/* Dark gradient overlay for crisp white text readability */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/30 to-transparent" />
              </div>
              
              {/* Text content (Positioned Top Left) */}
              <div className="relative z-10 flex flex-col items-start p-8 mr-auto text-left">
                <p className="text-[11px] font-bold uppercase tracking-widest text-white/90">Our Vision</p>
                <div className="mt-2 h-[3px] w-8 rounded-full bg-accent" />
                <h3 className="mt-4 max-w-[320px] text-[23px] font-bold leading-[1.13] tracking-tight text-white">
                  To become one of the world&apos;s leading technology research and
                  engineering organizations—building trusted systems that shape the next
                  century of digital civilization.
                </h3>
                <p className="mt-3 max-w-[280px] text-[13px] leading-relaxed text-gray-300">
                  We envision a future where secure, intelligent, and decentralized systems
                  drive progress, opportunity, and sustainability for generations to come.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>


      {/* ═══════════════ WHAT WE BUILD ═══════════════ */}
      <section className="bg-namo-faint px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal className="text-center">
            <p className={eyebrow}>What We Build</p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-namo-black sm:text-[42px]">
              Technologies that build a better future.
            </h2>
            <div className="mx-auto mt-5 h-[3px] w-12 rounded-full bg-accent" />
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {build.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.06}>
                <div className="flex h-full flex-col items-center rounded-2xl bg-white p-7 text-center shadow-[0_18px_50px_-30px_rgba(60,80,180,0.4)] ring-1 ring-black/5 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_24px_60px_-25px_rgba(60,80,180,0.5)]">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-light text-accent transition-transform duration-300 hover:scale-110">
                    {c.icon}
                  </div>
                  <h4 className="mt-6 text-base font-bold text-namo-black">{c.title}</h4>
                  <p className="mt-3 text-[13px] leading-relaxed text-gray-500">{c.body}</p>
                  <div className="mt-6 h-[3px] w-8 rounded-full bg-accent/60" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ OUR BELIEF ═══════════════ */}
      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-10 rounded-[28px] bg-white p-9 shadow-[0_30px_80px_-50px_rgba(60,80,180,0.5)] ring-1 ring-black/5 sm:p-14 lg:grid-cols-2 lg:gap-14">
            <Reveal direction="left">
              <Quote size={42} className="text-accent" fill="currentColor" />
              <p className={`mt-6 ${eyebrow}`}>Our Belief</p>
              <h2 className="mt-4 text-[32px] font-bold leading-snug tracking-tight text-namo-black sm:text-[36px]">
                Technology is meaningful only when it improves lives, strengthens
                institutions, and creates opportunities for future generations.
              </h2>
              <div className="mt-7 h-[3px] w-12 rounded-full bg-accent" />
              <p className="mt-7 max-w-md text-[15px] leading-relaxed text-gray-600">
                At Namo Labs, we build with purpose. Every line of code, every system, and
                every solution is designed to make a positive and lasting impact on
                humanity.
              </p>
            </Reveal>
            <Reveal direction="right" className="h-[330px] lg:h-[420px]">
              <PhotoSlot
                src="/company/belief-globe.jpg"
                alt="A man and a child holding a glowing globe against a city skyline"
                className="h-full w-full rounded-3xl"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════ JOIN US TODAY ═══════════════ */}
      <section className="px-5 pb-24 sm:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-gradient-to-b from-[#f2f5ff] to-[#eef2fc] p-6 ring-1 ring-black/5 sm:p-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* Left */}
            <Reveal>
              <p className={eyebrow}>Join Us Today</p>
              <div className="mt-2 h-[3px] w-12 rounded-full bg-accent" />
              <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-namo-black sm:text-4xl">
                Let&apos;s build a
                <br />
                safer, smarter, and
                <br />
                more human future.
              </h2>
              <div className="mt-4 h-[3px] w-12 rounded-full bg-accent" />
              <p className="mt-4 max-w-md text-[13px] leading-relaxed text-gray-600">
                We believe the best solutions come from collaboration. Whether you&apos;re
                a developer, researcher, organization, or changemaker—there&apos;s a place
                for you at Namo Labs.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-y-4 sm:grid-cols-4 sm:divide-x sm:divide-gray-200">
                {values.map((v, i) => (
                  <div
                    key={v.title}
                    className={`flex flex-col ${i > 0 ? "sm:pl-4" : ""} ${i < values.length - 1 ? "sm:pr-4" : ""}`}
                  >
                    <span className="text-accent">{v.icon}</span>
                    <h4 className="mt-2 text-[13px] font-bold text-namo-black">{v.title}</h4>
                    <p className="mt-1 text-[11px] leading-relaxed text-gray-500">{v.body}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href="/partnership"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-[13px] font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[#2f4be0] hover:shadow-lg hover:shadow-accent/20"
                >
                  Partner With Us <ArrowRight size={14} />
                </Link>
                <Link
                  href="/careers"
                  className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-5 py-2.5 text-[13px] font-semibold text-namo-black transition-all duration-300 hover:scale-[1.02] hover:bg-gray-50 hover:shadow-sm"
                >
                  Explore Opportunities <ArrowRight size={14} />
                </Link>
              </div>
            </Reveal>

            {/* Right — Lotus artwork + caption + dot accents */}
            <Reveal direction="scale" delay={0.1} className="relative flex flex-col items-center justify-center py-4">
              {/* Scattered accent dots */}
              {[
                { top: "5%",  left: "10%", size: 5, opacity: 0.35 },
                { top: "12%", left: "75%", size: 4, opacity: 0.25 },
                { top: "28%", left: "90%", size: 6, opacity: 0.2  },
                { top: "50%", left: "4%",  size: 4, opacity: 0.3  },
                { top: "68%", left: "18%", size: 5, opacity: 0.2  },
                { top: "82%", left: "80%", size: 4, opacity: 0.25 },
                { top: "18%", left: "42%", size: 3, opacity: 0.15 },
                { top: "92%", left: "52%", size: 3, opacity: 0.2  },
              ].map((dot, i) => (
                <span
                  key={i}
                  className="pointer-events-none absolute rounded-full bg-accent"
                  style={{ top: dot.top, left: dot.left, width: dot.size, height: dot.size, opacity: dot.opacity }}
                />
              ))}
              <img
                src="/company/join-art.jpg"
                alt="Namo Labs lotus mark inside a glowing constellation network"
                className="relative mx-auto w-full max-w-[260px] opacity-80 mix-blend-multiply [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)] [clip-path:inset(0_0_20%_0)] -mb-6"
              />
              <div className="flex flex-col items-center text-center">
                <p className="relative text-lg font-bold tracking-wide text-namo-black">
                  For Humanity Always.
                </p>
                <div className="relative mt-3 h-[4px] w-12 rounded-full bg-accent" />
              </div>
            </Reveal>
          </div>

          {/* Trusted by strip */}
          <div className="-mx-6 -mb-6 mt-8 bg-white px-6 py-5 sm:-mx-8 sm:-mb-8 sm:px-8">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_2fr]">
              <div className="lg:border-r lg:border-gray-200 lg:pr-6">
                <p className={eyebrow}>Trusted by visionaries</p>
                <p className="mt-1.5 text-[11px] text-gray-500">who believe in building a better tomorrow.</p>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {trusted.map((t, i) => (
                  <Reveal key={t.line1} delay={0.2 + i * 0.08} direction="up" className="flex items-center gap-2">
                    <span className="text-accent">{t.icon}</span>
                    <div className="text-[11px] leading-tight">
                      <p className="font-semibold text-namo-black">{t.line1}</p>
                      <p className="text-gray-500">{t.line2}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
