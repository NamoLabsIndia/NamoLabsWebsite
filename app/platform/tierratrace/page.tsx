import React from "react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { ArrowRight, Globe, Box, Link2 } from "lucide-react";

export const metadata = {
  title: "TierraTrace™ - Supply Chain & Asset Tracking",
  description: "A blockchain-powered supply chain tracking platform ensuring end-to-end transparency and provenance.",
};

export default function TierraTracePage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Platform", href: "#" },
    { label: "TierraTrace™" },
  ];

  return (
    <main className="bg-white min-h-screen pt-[104px]">
      <Breadcrumbs items={breadcrumbItems} />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 opacity-70 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-emerald-600 text-[12px] font-bold tracking-[0.15em] uppercase mb-8">
              <Globe size={14} /> Releasing Soon
            </div>
            
            <h1 className="text-5xl md:text-[64px] font-bold text-namo-black leading-[1.05] tracking-tight mb-6">
              Total Supply Chain <br />
              <span className="text-emerald-500">Transparency.</span>
            </h1>
            
            <p className="text-[18px] text-gray-600 leading-relaxed font-medium mb-10 max-w-lg">
              A blockchain-powered tracking platform ensuring end-to-end transparency, provenance, and trust for physical and digital assets.
            </p>
            
            <button className="bg-namo-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors inline-flex items-center gap-2">
              Get Notified <ArrowRight size={18} />
            </button>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-green-50 to-white rounded-[40px] border border-green-100/50 shadow-2xl flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(#10b981 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
              <Globe size={120} strokeWidth={1} className="text-emerald-500 relative z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Link2, title: "Immutable Provenance", desc: "Every step in the supply chain is recorded immutably on a decentralized ledger." },
              { icon: Box, title: "Asset Tokenization", desc: "Digitally represent physical goods to easily track ownership and history." },
              { icon: Globe, title: "Global Compliance", desc: "Built to adapt to international trade regulations and sustainability reporting standards." }
            ].map((feat, i) => (
              <div key={i} className="bg-white p-10 rounded-[32px] shadow-sm border border-gray-100">
                <div className="w-14 h-14 bg-green-50 text-emerald-600 rounded-full flex items-center justify-center mb-6">
                  <feat.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-namo-black mb-4">{feat.title}</h3>
                <p className="text-gray-600 leading-relaxed text-[15px]">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
