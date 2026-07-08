import React from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { ArrowRight, Mail } from "lucide-react";

export const metadata = {
  title: "Careers - Namo Labs",
  description: "Join us in building the future of technology.",
};

export default function CareersPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Company", href: "/about" },
    { label: "Careers" },
  ];

  return (
    <main className="bg-white min-h-screen pt-[104px]">
      <Breadcrumbs items={breadcrumbItems} />
      
      <section className="py-20 md:py-32 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          
          <p className="text-[12px] font-bold tracking-[0.15em] text-accent uppercase mb-6">
            CAREERS AT NAMO LABS
          </p>
          
          <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold text-namo-black tracking-tight leading-[1.1] mb-8">
            Build the Future <br className="hidden sm:block" />
            <span className="text-accent">With Us.</span>
          </h1>
          
          <p className="text-[16px] md:text-[18px] text-gray-600 leading-[1.65] font-medium max-w-2xl mx-auto mb-16">
            We are a team of researchers, engineers, and problem-solvers dedicated to creating technologies that strengthen society and protect digital infrastructure. If you're passionate about cryptography, blockchain, AI, quantum computing, or cloud systems, we want to hear from you.
          </p>

          <div className="bg-[#f4f7ff] rounded-[32px] p-10 md:p-16 border border-blue-50 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-accent shadow-sm mb-6">
                <Mail size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-namo-black mb-4">
                No open roles right now.
              </h3>
              <p className="text-gray-600 text-[15px] max-w-md mx-auto leading-relaxed mb-8">
                We're not actively hiring at the moment, but we are always on the lookout for exceptional talent. Send us your resume, and we'll reach out when a position opens up!
              </p>
              
              <a
                href="mailto:info@namolabs.in"
                className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-8 py-4 rounded-full text-[14px] hover:bg-[#2f4be0] transition-colors shadow-lg shadow-accent/20"
              >
                Email your resume <ArrowRight size={16} />
              </a>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
