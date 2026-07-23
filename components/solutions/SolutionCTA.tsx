import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { SolutionData } from "@/lib/data/solutions";

export default function SolutionCTA({ data }: { data: SolutionData }) {
  return (
    <div className="bg-white border-2 border-gray-100 rounded-[24px] shadow-[0_8px_32px_rgba(0,0,0,0.04)] overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 p-8 lg:p-14">
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-slate-900 leading-tight mb-3 tracking-tight">
            Let&apos;s Talk About Your {data.title}.
          </h2>
          <p className="text-slate-600 text-[15px] leading-relaxed max-w-xl">
            {data.ctaDescription}
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-[#0A0A0A] text-white font-medium px-8 py-4 rounded-full hover:bg-gray-800 transition-colors shadow-lg shrink-0"
        >
          Start a Conversation
          <ArrowRight size={16} strokeWidth={2} />
        </Link>
      </div>
    </div>
  );
}
