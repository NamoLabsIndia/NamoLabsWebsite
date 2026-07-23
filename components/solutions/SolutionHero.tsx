import React from "react";
import Image from "next/image";
import type { SolutionData } from "@/lib/data/solutions";

export default function SolutionHero({ data }: { data: SolutionData }) {
  const Icon = data.icon;

  return (
    <div className="bg-white border-2 border-gray-100 rounded-[24px] shadow-[0_8px_32px_rgba(0,0,0,0.04)] overflow-hidden">
      <div className="flex flex-col lg:flex-row items-stretch">
        {/* Left Column (Text) */}
        <div className="lg:w-[55%] p-8 lg:p-14 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <Icon size={20} strokeWidth={2} />
            </div>
            <span className="text-xs font-bold tracking-[0.15em] text-blue-600 uppercase">
              {data.category}
            </span>
          </div>
          <h1 className="text-3xl lg:text-[36px] xl:text-4xl font-bold text-slate-900 leading-[1.1] tracking-tight mb-3">
            Solutions for {data.title}
          </h1>
          <div className="w-10 h-1 bg-blue-600 mb-4 rounded-full" />
          <p className="text-slate-600 text-[14px] leading-relaxed max-w-lg">
            {data.heroDescription}
          </p>
        </div>

        {/* Right Column (Illustration) */}
        <div className="flex-1 lg:w-[45%] relative min-h-[240px] lg:min-h-0 overflow-hidden">
          <Image
            src={data.heroImage}
            alt={`Solutions for ${data.title}`}
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
