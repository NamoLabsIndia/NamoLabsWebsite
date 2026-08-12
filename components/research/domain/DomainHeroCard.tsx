import React from 'react';
import Link from 'next/link';
import { DomainData } from '@/lib/data/researchDomains';
import { ArrowRight, Bell, Sparkles, CheckCircle2 } from 'lucide-react';

export default function DomainHeroCard({ data }: { data: DomainData }) {
  const StatusIcon = data.statusBoxIcon;
  const isComingSoon = 
    data.titleHighlight.toLowerCase().includes('coming soon') ||
    data.statusBoxTitle.toLowerCase().includes('launching soon');

  return (
    <div className="bg-white border-2 border-gray-100 rounded-[24px] shadow-[0_8px_32px_rgba(0,0,0,0.04)] overflow-hidden">
      <div className="flex flex-col lg:flex-row items-stretch min-h-[280px]">
        
        {/* Left Column (Text & Status) - takes up ~58% */}
        <div className="flex-1 lg:max-w-[58%] p-6 lg:py-8 lg:pl-10 lg:pr-6 flex flex-col justify-center">
          {/* Tag */}
          <div className="flex items-center gap-2 mb-3 self-start">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold tracking-[0.1em] uppercase">
              {data.tag}
            </div>
            {isComingSoon && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-[10px] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                Active Roadmap
              </span>
            )}
          </div>

          {/* Heading */}
          <h1 className="text-3xl lg:text-[36px] xl:text-4xl font-bold text-slate-900 leading-[1.1] tracking-tight mb-3">
            {data.titlePrefix}
            <span className="text-blue-600 inline-block lg:block mt-0.5">
              {data.titleHighlight}
            </span>
          </h1>

          {/* Blue Underline */}
          <div className="w-10 h-1 mb-4 rounded-full bg-blue-600" />

          {/* Description */}
          <p className="text-slate-600 text-[14px] leading-relaxed mb-5 max-w-lg">
            {data.heroDescription}
          </p>

          {/* Status Box — Intentional Designed Coming Soon State (Blue Theme) */}
          {isComingSoon ? (
            <div className="p-4 bg-gradient-to-br from-blue-50/70 via-indigo-50/30 to-white border border-blue-100/90 rounded-2xl shadow-xs max-w-lg">
              <div className="flex items-center justify-between mb-3 gap-3">
                <div className="flex items-center gap-2.5 min-w-0 flex-1 pr-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-100/80 text-blue-700 flex items-center justify-center font-semibold shrink-0">
                    <StatusIcon size={16} strokeWidth={2} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-slate-900 font-bold text-[12.5px] leading-tight">{data.statusBoxTitle}</p>
                    <p className="text-slate-500 text-[11px] leading-snug">{data.statusBoxDescription}</p>
                  </div>
                </div>

                <Link
                  href={`/contact?subject=${encodeURIComponent(`${data.tag} Research Notification Request`)}`}
                  className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-white bg-blue-600 hover:bg-blue-700 px-3.5 py-1.5 rounded-full transition-colors shrink-0 shadow-xs ml-3"
                >
                  <Bell size={12} />
                  <span className="whitespace-nowrap">Notify Me</span>
                </Link>
              </div>

              {/* Designed Progress Timeline */}
              <div className="pt-2.5 border-t border-blue-100 flex items-center justify-between text-[11px] text-slate-600">
                <span className="flex items-center gap-1 font-medium text-blue-900">
                  <CheckCircle2 size={12} className="text-blue-600" /> 1. Scope Defined
                </span>
                <span className="flex items-center gap-1 font-semibold text-blue-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-ping" /> 2. Model Architecture
                </span>
                <span className="text-slate-400">3. Paper Release</span>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.02)] max-w-sm">
              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-50/50 rounded-lg text-blue-600">
                <StatusIcon size={16} strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-slate-900 font-bold text-[12px]">{data.statusBoxTitle}</p>
                <p className="text-slate-500 text-[11px] leading-snug">
                  {data.statusBoxDescription}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Right Column (Illustration) - takes up ~42% */}
        <div className="flex-1 lg:w-[42%] relative min-h-[200px] lg:min-h-0 overflow-hidden flex items-center justify-center">
          <img 
            src={data.heroImage} 
            alt={`${data.tag} Research`} 
            className={`absolute inset-0 w-full h-full object-contain object-center mix-blend-multiply drop-shadow-md ${
              data.slug === 'quantum' ? 'scale-125 lg:scale-150' : 'p-2 lg:p-4'
            }`}
          />
        </div>
      </div>
    </div>
  );
}
