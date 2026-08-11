import React from "react";
import EngagementModel from "@/components/home/EngagementModel";
import Link from "next/link";
import {
  ArrowRight,
  GraduationCap,
  FlaskConical,
  Building2,
  Landmark,
  Microscope,
  ShieldCheck,
  Handshake,
} from "lucide-react";

const BASE_URL = "https://namolabs.in";

export const metadata = {
  title: "Research Collaboration",
  description:
    "Partner with Namo Labs on deep research and protocol engineering. We collaborate with academic institutions, research labs, enterprises, and governments to solve hard technical problems.",
  alternates: {
    canonical: `${BASE_URL}/collaboration`,
  },
};

const collaborators = [
  {
    icon: GraduationCap,
    title: "Academic Institutions",
    description:
      "Joint research projects and infrastructure for university and research-institute programs across cryptography, distributed systems, and AI.",
<<<<<<< HEAD
    href: "/solutions/institutions",
=======
    href: "/contact?subject=academic",
>>>>>>> 508c26f (Redesign collaboration page and update task board)
  },
  {
    icon: FlaskConical,
    title: "Research Labs",
    description:
      "Co-development on hard technical problems where our post-quantum cryptography and protocol-engineering depth complements an existing research agenda.",
<<<<<<< HEAD
    href: "/research",
=======
    href: "/contact?subject=research-lab",
>>>>>>> 508c26f (Redesign collaboration page and update task board)
  },
  {
    icon: Building2,
    title: "Enterprises",
    description:
      "Applied research partnerships that turn emerging technology — PQC, blockchain, AI — into systems an enterprise can actually deploy.",
<<<<<<< HEAD
    href: "/solutions/organisations",
=======
    href: "/contact?subject=enterprise",
>>>>>>> 508c26f (Redesign collaboration page and update task board)
  },
  {
    icon: Landmark,
    title: "Governments",
    description:
      "Long-horizon research on the security of national infrastructure, where post-quantum readiness is already a dated regulatory requirement.",
<<<<<<< HEAD
    href: "/solutions/governments",
=======
    href: "/contact?subject=government",
>>>>>>> 508c26f (Redesign collaboration page and update task board)
  },
];

const contributions = [
  {
    icon: Microscope,
    title: "Genuine research depth",
    description:
      "We work across post-quantum cryptography, blockchain, AI, quantum technologies, and cloud — and we're direct when a problem doesn't need the technology you came in asking about.",
  },
  {
    icon: ShieldCheck,
    title: "Security by design",
    description:
      "Every collaboration is built with the security posture a system will need years from now, not just at launch — the same discipline we apply to our own research.",
  },
  {
    icon: Handshake,
    title: "A real partnership",
    description:
      "We work as a research partner, not a vendor that hands over a deliverable and disappears. Our six-phase process stays involved through long-term support.",
  },
];

const collaborationSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Research Collaboration",
  description: metadata.description,
  url: `${BASE_URL}/collaboration`,
<<<<<<< HEAD
  dateModified: "2026-07-23",
=======
  dateModified: "2026-08-11",
>>>>>>> 508c26f (Redesign collaboration page and update task board)
  about: {
    "@type": "Organization",
    name: "Namo Labs",
    url: BASE_URL,
  },
};

export default function CollaborationPage() {
  return (
<<<<<<< HEAD
    <main className="min-h-screen pt-64 pb-0 bg-white">
=======
    <main className="min-h-screen pt-44 sm:pt-48 pb-0 bg-white overflow-x-hidden">
>>>>>>> 508c26f (Redesign collaboration page and update task board)
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collaborationSchema) }}
      />
      <div className="max-w-7xl mx-auto px-6 mb-24">
<<<<<<< HEAD
        <h1 className="text-5xl sm:text-7xl font-[800] text-namo-black mb-6 tracking-tight">
=======
        <h1 className="text-5xl sm:text-7xl font-[800] text-namo-black mb-6 tracking-tight leading-[1.05]">
>>>>>>> 508c26f (Redesign collaboration page and update task board)
          Collaborate on <br className="hidden sm:block" />
          <span className="text-accent">Deep Tech Research.</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mb-6 leading-relaxed">
          We partner with enterprises, protocols, and ambitious teams to solve
          the hardest problems in cryptography, distributed systems, and AI.
        </p>
        <p className="text-[17px] text-gray-500 max-w-2xl mb-10 leading-relaxed">
          A collaboration with Namo Labs is a genuine research relationship — we
          bring the same research-first rigor and security-by-design approach to
          a joint project that we bring to our own work. If you&apos;re pushing on
          a hard technical problem and our{" "}
          <Link href="/research" className="text-accent font-medium hover:underline">
            research areas
          </Link>{" "}
          overlap with it, we should talk.
        </p>
<<<<<<< HEAD
        <Link
          href="/contact"
          className="inline-flex items-center gap-3 bg-[#0A0A0A] text-white font-medium px-8 py-4 rounded-full hover:bg-gray-800 transition-colors shadow-lg"
        >
          Propose a Project <ArrowRight size={16} />
        </Link>

        {/* Who we collaborate with */}
        <section className="mt-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-namo-black mb-8 tracking-tight">
            Who we collaborate with
          </h2>
=======
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-3">
          <Link
            href="/contact?subject=collaboration"
            className="group inline-flex items-center gap-3 bg-[#0A0A0A] text-white font-semibold text-[15px] px-8 py-4 rounded-full hover:bg-gray-800 transition-all duration-200 shadow-md hover:shadow-xl hover:scale-[1.01]"
          >
            Propose a Project <ArrowRight size={17} className="transition-transform group-hover:translate-x-1 text-blue-400" />
          </Link>
          <Link
            href="/process"
            className="inline-flex items-center gap-2 text-gray-700 hover:text-namo-black font-medium text-[15px] px-6 py-4 rounded-full border border-gray-200 hover:border-gray-300 bg-gray-50/50 hover:bg-gray-100/50 transition-all"
          >
            How Engagements Work
          </Link>
        </div>
        <p className="text-xs text-gray-500 font-medium">
          ⚡ 24-hour response time · Direct sync with research engineers
        </p>

        {/* Who we collaborate with */}
        <section className="mt-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <p className="text-xs font-bold text-accent uppercase tracking-widest mb-1.5">PARTNERSHIP TYPES</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-namo-black tracking-tight">
                Who we collaborate with
              </h2>
            </div>
            <p className="text-sm text-gray-500 max-w-sm">
              Customized engagement terms for universities, deep-tech labs, enterprises, and public institutions.
            </p>
          </div>

>>>>>>> 508c26f (Redesign collaboration page and update task board)
          <div className="grid sm:grid-cols-2 gap-5">
            {collaborators.map((c) => {
              const Icon = c.icon;
              return (
                <Link
                  key={c.title}
                  href={c.href}
<<<<<<< HEAD
                  className="group flex flex-col items-start p-7 bg-gray-50/60 border border-gray-100 rounded-[24px] hover:border-accent/30 hover:bg-blue-50/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-accent flex items-center justify-center mb-4">
                    <Icon size={22} strokeWidth={1.75} />
                  </div>
                  <h3 className="text-lg font-bold text-namo-black mb-2 group-hover:text-accent transition-colors">
                    {c.title}
                  </h3>
                  <p className="text-gray-600 text-[14.5px] leading-relaxed">
                    {c.description}
                  </p>
=======
                  className="group flex flex-col justify-between p-7 bg-gray-50/60 border border-gray-100 rounded-[24px] hover:border-accent/40 hover:bg-blue-50/20 transition-all duration-300 hover:shadow-sm"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-accent flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-105">
                      <Icon size={22} strokeWidth={1.75} />
                    </div>
                    <h3 className="text-lg font-bold text-namo-black mb-2 group-hover:text-accent transition-colors">
                      {c.title}
                    </h3>
                    <p className="text-gray-600 text-[14.5px] leading-relaxed mb-6">
                      {c.description}
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-accent group-hover:text-blue-700 transition-colors pt-2 border-t border-gray-100/80">
                    <span>Propose {c.title} Brief</span>
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </div>
>>>>>>> 508c26f (Redesign collaboration page and update task board)
                </Link>
              );
            })}
          </div>
        </section>

        {/* What we bring */}
        <section className="mt-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-namo-black mb-8 tracking-tight">
            What we bring to a collaboration
          </h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {contributions.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.title}
                  className="flex flex-col items-start p-7 bg-white border border-gray-100 rounded-[24px]"
                >
                  <div className="w-11 h-11 rounded-xl bg-blue-50 text-accent flex items-center justify-center mb-4">
                    <Icon size={20} strokeWidth={1.75} />
                  </div>
                  <h3 className="text-base font-bold text-namo-black mb-2">
                    {c.title}
                  </h3>
                  <p className="text-gray-600 text-[14px] leading-relaxed">
                    {c.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      </div>

<<<<<<< HEAD
      {/* Reusing the engagement model component the user wanted here */}
      <EngagementModel />
=======
      {/* Reusing the engagement model component */}
      <EngagementModel />

      {/* Bottom Action CTA Banner */}
      <section className="bg-[#0A0A0A] text-white py-20 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <p className="text-xs font-bold text-accent uppercase tracking-widest mb-3">GET STARTED TODAY</p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6 leading-tight">
            Have a Hard Technical Problem? <br /> Let&apos;s Solve It Together.
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Submit your research brief or request an initial technical evaluation with our research engineering lead.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <Link
              href="/contact?subject=collaboration"
              className="inline-flex items-center gap-3 bg-white text-namo-black font-semibold text-[15px] px-8 py-4 rounded-full hover:bg-gray-100 transition-all shadow-lg hover:scale-[1.02]"
            >
              Propose a Project <ArrowRight size={16} />
            </Link>
            <Link
              href="/research"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-white font-medium text-[15px] px-7 py-4 rounded-full border border-gray-800 hover:border-gray-700 transition-colors"
            >
              Explore Our Research
            </Link>
          </div>
        </div>
      </section>
>>>>>>> 508c26f (Redesign collaboration page and update task board)
    </main>
  );
}
