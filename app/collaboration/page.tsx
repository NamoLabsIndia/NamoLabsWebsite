import React from "react";
import EngagementModel from "@/components/home/EngagementModel";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Research Collaboration - Namo Labs",
  description: "Partner with Namo Labs on deep research and protocol engineering.",
};

export default function CollaborationPage() {
  return (
    <main className="min-h-screen pt-64 pb-0 bg-white">
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <h1 className="text-5xl sm:text-7xl font-[800] text-namo-black mb-6 tracking-tight">
          Collaborate on <br className="hidden sm:block" />
          <span className="text-accent">Deep Tech Research.</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mb-10 leading-relaxed">
          We partner with enterprises, protocols, and ambitious teams to solve the hardest problems in cryptography, distributed systems, and AI.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-3 bg-[#0A0A0A] text-white font-medium px-8 py-4 rounded-full hover:bg-gray-800 transition-colors shadow-lg"
        >
          Propose a Project <ArrowRight size={16} />
        </Link>
      </div>

      {/* Reusing the engagement model component the user wanted here */}
      <EngagementModel />
    </main>
  );
}
