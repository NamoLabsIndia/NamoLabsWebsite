"use client";

import React, { useState } from "react";
import { ArrowRight, Briefcase } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import Link from "next/link";

type Department = "All" | "Engineering" | "Research" | "Design" | "Operations";

interface Role {
  title: string;
  department: Exclude<Department, "All">;
  location: string;
  type: string;
  description: string;
}

const roles: Role[] = [
  {
    title: "Senior Cryptography Engineer",
    department: "Research",
    location: "Remote",
    type: "Full-Time",
    description: "Design and implement post-quantum cryptographic protocols.",
  },
  {
    title: "AI / ML Research Scientist",
    department: "Research",
    location: "Remote",
    type: "Full-Time",
    description: "Lead research initiatives in applied AI and machine learning.",
  },
  {
    title: "Blockchain Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-Time",
    description: "Build decentralized systems and smart contract infrastructure.",
  },
  {
    title: "Frontend Engineer (Next.js)",
    department: "Engineering",
    location: "Remote",
    type: "Full-Time",
    description: "Craft premium web experiences using Next.js and Tailwind CSS.",
  },
  {
    title: "Product Designer",
    department: "Design",
    location: "Hybrid",
    type: "Full-Time",
    description: "Shape the visual identity and UX of Namo Labs products.",
  },
  {
    title: "Operations Manager",
    department: "Operations",
    location: "On-site",
    type: "Full-Time",
    description: "Oversee day-to-day operations and drive efficiency.",
  },
  {
    title: "Technical Writer",
    department: "Operations",
    location: "Remote",
    type: "Contract",
    description: "Document APIs, research papers, and internal processes.",
  },
];

const tabs: Department[] = ["All", "Engineering", "Research", "Design", "Operations"];

export default function OpenRoles() {
  const [active, setActive] = useState<Department>("All");

  const filtered = active === "All" ? roles : roles.filter((r) => r.department === active);

  return (
    <section id="open-roles" className="bg-white px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <h2 className="text-5xl font-extrabold tracking-tighter text-namo-black sm:text-6xl">
              Open Roles
            </h2>
            <p className="mt-6 max-w-sm text-[16px] leading-relaxed text-gray-600">
              We're always looking for talented, mission-driven individuals. Find your place at Namo Labs.
            </p>
          </Reveal>

          {/* Filter tabs - Minimalist editorial style */}
          <Reveal delay={0.1} className="flex shrink-0 flex-wrap gap-6 border-b border-gray-200 pb-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`text-[12px] font-bold uppercase tracking-widest transition-colors ${
                  active === tab
                    ? "text-namo-black"
                    : "text-gray-400 hover:text-namo-black"
                }`}
              >
                {tab}
              </button>
            ))}
          </Reveal>
        </div>

        {/* Roles List - Editorial Table layout */}
        <div className="mt-16 border-t-2 border-namo-black">
          {filtered.length === 0 ? (
            <Reveal>
              <div className="flex flex-col items-center justify-center py-24 text-gray-400">
                <Briefcase size={32} className="mb-4 opacity-40" />
                <p className="text-[14px]">No open roles in this category right now.</p>
              </div>
            </Reveal>
          ) : (
            filtered.map((role, i) => (
              <Reveal key={role.title} delay={i * 0.04}>
                <Link
                  href={`/careers/apply?role=${encodeURIComponent(role.title)}`}
                  className="group flex flex-col justify-between gap-4 border-b border-gray-200 py-8 transition-colors hover:bg-gray-50 sm:flex-row sm:items-center sm:gap-8 sm:px-6"
                >
                  {/* Left: Title & Description */}
                  <div className="flex-1">
                    <h3 className="text-[20px] font-bold tracking-tight text-namo-black transition-colors group-hover:text-accent">
                      {role.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-gray-500">
                      {role.description}
                    </p>
                  </div>

                  {/* Middle: Meta Data */}
                  <div className="flex shrink-0 flex-col gap-1 sm:w-48 sm:text-right">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-namo-black">
                      {role.department}
                    </span>
                    <span className="text-[13px] text-gray-500">
                      {role.location} &middot; {role.type}
                    </span>
                  </div>

                  {/* Right: Arrow (Desktop only, subtle reveal) */}
                  <div className="hidden shrink-0 text-gray-300 transition-colors group-hover:text-accent sm:block">
                    <ArrowRight size={24} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </Reveal>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
