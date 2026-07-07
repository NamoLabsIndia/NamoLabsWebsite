import React from 'react';
import { DomainData } from '@/lib/data/researchDomains';

export default function DomainFeaturesCard({ data }: { data: DomainData }) {
  return (
    <div className="bg-white border-2 border-gray-100 rounded-[24px] shadow-[0_8px_32px_rgba(0,0,0,0.04)] overflow-hidden">
      <div className="flex flex-col xl:flex-row items-stretch">
        
        {/* Left Column (Title & Text) */}
        <div className="xl:w-[28%] p-8 lg:p-12 xl:p-14 flex flex-col justify-center xl:border-r-2 xl:border-gray-100">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">
            {data.featuresTitle}
          </h2>
          <p className="text-slate-600 text-[15px] leading-relaxed">
            {data.featuresDescription}
          </p>
        </div>

        {/* Right Column (4 Features Grid) */}
        <div className="xl:w-[72%] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          {data.features.map((feature, idx) => {
            const Icon = feature.icon;
            
            // Calculate responsive borders
            let borderClasses = "border-gray-100 ";
            if (idx < 3) borderClasses += "border-b "; // Mobile (1x4)
            
            borderClasses += "md:border-b-0 "; // Reset mobile
            if (idx === 0 || idx === 1) borderClasses += "md:border-b xl:border-b-0 "; // Tablet row 1
            if (idx === 0 || idx === 2) borderClasses += "md:border-r xl:border-r-0 "; // Tablet col 1
            
            if (idx < 3) borderClasses += "xl:border-r "; // Desktop (4x1)

            return (
              <div key={idx} className={`p-8 lg:p-10 flex flex-col items-center text-center ${borderClasses}`}>
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                  <Icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-slate-900 font-bold mb-4 text-[15px]">
                  {feature.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-[200px]">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
