import React from 'react';
import { DomainData } from '@/lib/data/researchDomains';
import { ArrowRight, Bell } from 'lucide-react';

export default function DomainCTACard({ data }: { data: DomainData }) {
  const isWaitlist = data.ctaButtonText.toLowerCase().includes('stay tuned');
  const ButtonIcon = data.ctaButtonIcon ? (isWaitlist ? Bell : ArrowRight) : null;

  return (
    <div className="bg-[#FAFBFF] border-2 border-gray-100 rounded-[24px] shadow-[0_8px_32px_rgba(0,0,0,0.03)] overflow-hidden">
      <div className="flex flex-col xl:flex-row items-center p-8 lg:p-12 gap-10 xl:gap-0">
        
        {/* Left Column (CTA Content) */}
        <div className="xl:w-[40%] flex flex-col items-start xl:border-r-2 xl:border-gray-100 xl:pr-12">
          <div className="text-blue-600 text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
            {data.ctaTag}
          </div>
          
          <h2 className="text-2xl font-bold text-slate-900 leading-tight mb-4 tracking-tight">
            {data.ctaTitle}
          </h2>
          
          <p className="text-slate-600 text-[15px] leading-relaxed mb-8 max-w-sm">
            {data.ctaDescription}
          </p>

          <button className="flex items-center gap-3 bg-slate-900 hover:bg-black text-white px-6 py-3 rounded-full text-sm font-semibold transition-transform hover:scale-105 duration-300">
            {data.ctaButtonText}
            {ButtonIcon && <ButtonIcon size={16} strokeWidth={2.5} />}
          </button>
        </div>

        {/* Right Column (Value Props Grid) */}
        <div className="xl:w-[60%] grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-10 xl:pl-12">
          {data.valueProps.map((prop, idx) => {
            const Icon = prop.icon;
            return (
              <div key={idx} className="flex flex-col items-start text-left">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50/80 text-blue-600 flex items-center justify-center flex-shrink-0">
                    <Icon size={20} strokeWidth={2} />
                  </div>
                  <h3 className="text-slate-900 font-bold text-sm leading-tight">
                    {prop.title}
                  </h3>
                </div>
                <p className="text-slate-500 text-[13px] leading-relaxed">
                  {prop.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
