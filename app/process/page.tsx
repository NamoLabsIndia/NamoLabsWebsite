import React from "react";
import Link from "next/link";
import {
  Search,
  FlaskConical,
  LayoutTemplate,
  Hammer,
  ShieldCheck,
  HeadphonesIcon,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Our Process",
  description:
    "How Namo Labs runs a consulting engagement, from discovery through long-term support — a research-first, security-by-design process across six phases.",
  alternates: {
    canonical: "https://namolabs.in/process",
  },
};

const BASE_URL = "https://namolabs.in";

const STEPS = [
  {
    n: "01",
    title: "Discovery",
    icon: Search,
    summary: "Aligning on goals, auditing existing systems and defining requirements.",
    detail:
      "Every engagement starts with understanding what actually exists today — current systems, constraints, compliance requirements, and what success looks like for your team specifically. We'd rather spend extra time here than build the wrong thing efficiently.",
  },
  {
    n: "02",
    title: "Research",
    icon: FlaskConical,
    summary: "Deep technical analysis and feasibility studies for emerging tech.",
    detail:
      "Where our research background does the most work: evaluating which techniques from post-quantum cryptography, blockchain, AI, quantum computing, or cloud architecture genuinely apply to your problem — and being direct when one doesn't, rather than fitting a solution to a technology we happen to specialize in.",
  },
  {
    n: "03",
    title: "Architecture",
    icon: LayoutTemplate,
    summary: "Designing secure, scalable and future-ready system blueprints.",
    detail:
      "System design with security and scalability as first-class requirements, not afterthoughts added before launch. This is also where we plan for the security posture your system will need years from now, not just at launch.",
  },
  {
    n: "04",
    title: "Implementation",
    icon: Hammer,
    summary: "Enterprise-grade engineering and secure deployment.",
    detail:
      "Building to the architecture, with the same engineering discipline we'd want in a system protecting our own infrastructure — secure defaults, tested deployment processes, and documentation that outlives the engagement.",
  },
  {
    n: "05",
    title: "Validation",
    icon: ShieldCheck,
    summary: "Rigorous security audits, testing and compliance checks.",
    detail:
      "Testing, security review, and compliance verification before anything goes live — not a formality, the actual gate that determines whether a system is ready.",
  },
  {
    n: "06",
    title: "Long-Term Support",
    icon: HeadphonesIcon,
    summary: "Ongoing optimization, maintenance and scaling.",
    detail:
      "An engagement doesn't end at launch. Systems need to evolve as your organization, its scale, and the threat landscape change — we stay involved rather than handing over a system and disappearing.",
  },
];

const processSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Our Process",
  description: metadata.description,
  url: `${BASE_URL}/process`,
  dateModified: "2026-07-23",
  about: {
    "@type": "Organization",
    name: "Namo Labs",
    url: BASE_URL,
  },
};

export default function ProcessPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-white selection:bg-blue-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(processSchema) }}
      />
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-xs font-bold tracking-[0.2em] text-accent uppercase mb-4">
          How We Work
        </p>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-namo-black leading-[1.1] tracking-tight mb-6">
          Our Process<span className="text-accent">.</span>
        </h1>
        <p className="text-[17px] text-gray-600 leading-relaxed max-w-2xl mb-16">
          The same six-phase process we run for every consulting engagement,
          whether it&apos;s a government infrastructure project, an enterprise
          integration, or a research collaboration: research-first, security
          by design, and built to last past the initial launch.
        </p>

        <div className="flex flex-col gap-6">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.n}
                className="flex flex-col sm:flex-row gap-6 sm:gap-8 p-8 bg-gray-50/50 border border-gray-100 rounded-[24px]"
              >
                <div className="flex sm:flex-col items-center sm:items-start gap-4 sm:gap-3 shrink-0">
                  <span className="text-sm font-bold text-accent">{step.n}</span>
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 text-accent flex items-center justify-center">
                    <Icon size={26} strokeWidth={1.5} />
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-namo-black mb-1">{step.title}</h2>
                  <p className="text-sm font-semibold text-accent mb-3">{step.summary}</p>
                  <p className="text-gray-600 text-[15px] leading-relaxed max-w-2xl">
                    {step.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 flex flex-col items-center text-center bg-[#f4f6ff] rounded-[32px] p-10 sm:p-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-namo-black mb-3">
            Ready to start a project?
          </h2>
          <p className="text-gray-600 text-[15px] leading-relaxed max-w-lg mb-8">
            Whether it&apos;s a consulting engagement or a research
            collaboration, it starts with the same first step: telling us
            what you&apos;re trying to solve.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-8 py-4 rounded-full hover:bg-[#2f4be0] transition-colors shadow-lg shadow-accent/20"
          >
            Get in Touch
            <ArrowRight size={16} strokeWidth={2} />
          </Link>
        </div>
      </div>
    </main>
  );
}
