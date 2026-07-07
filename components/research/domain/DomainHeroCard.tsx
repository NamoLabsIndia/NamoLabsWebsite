import React from 'react';
import { DomainData } from '@/lib/data/researchDomains';

export default function DomainHeroCard({ data }: { data: DomainData }) {
  const StatusIcon = data.statusBoxIcon;

  return (
    <div className="bg-white border-2 border-gray-100 rounded-[24px] shadow-[0_8px_32px_rgba(0,0,0,0.04)] overflow-hidden">
      <div className="flex flex-col lg:flex-row items-stretch min-h-[280px]">
        
        {/* Left Column (Text & Status) - takes up ~55% */}
        <div className="flex-1 lg:max-w-[55%] p-6 lg:py-8 lg:pl-10 lg:pr-6 flex flex-col justify-center">
          {/* Tag */}
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold tracking-[0.1em] uppercase mb-3 self-start">
            {data.tag}
          </div>

          {/* Heading */}
          <h1 className="text-3xl lg:text-[36px] xl:text-4xl font-bold text-slate-900 leading-[1.1] tracking-tight mb-3">
            {data.titlePrefix}
            <span className="text-blue-600 inline-block lg:block mt-0.5">{data.titleHighlight}</span>
          </h1>

          {/* Blue Underline */}
          <div className="w-10 h-1 bg-blue-600 mb-4 rounded-full"></div>

          {/* Description */}
          <p className="text-slate-600 text-[14px] leading-relaxed mb-5 max-w-lg">
            {data.heroDescription}
          </p>

          {/* Status Box */}
          <div className="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.02)] max-w-sm">
            <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-50/50 rounded-lg text-blue-600">
              <StatusIcon size={16} strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="text-slate-900 font-bold text-[12px]">{data.statusBoxTitle}</h4>
              <p className="text-slate-500 text-[11px] leading-snug">
                {data.statusBoxDescription}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column (Illustration) - takes up ~45% */}
        <div className="flex-1 lg:w-[45%] relative min-h-[200px] lg:min-h-0 overflow-hidden flex items-center justify-center">
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
