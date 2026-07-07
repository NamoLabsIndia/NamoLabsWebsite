import React from "react";
import Link from "next/link";
import { ArrowLeft, Rocket } from "lucide-react";

export const metadata = {
  title: "DAFS™ - Namo Labs",
  description: "Digital Asset Forensics Suite. Launching soon.",
};

export default function DafsPage() {
  return (
    <main className="bg-white min-h-screen flex items-center justify-center pt-[104px]">
      <div className="text-center px-6">
        <div className="w-20 h-20 bg-[#f4f7ff] text-accent rounded-full flex items-center justify-center mx-auto mb-8">
          <Rocket size={32} strokeWidth={1.5} />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-namo-black tracking-tight mb-6">
          DAFS™ is <span className="text-accent">Launching Soon.</span>
        </h1>
        <p className="text-gray-600 text-[16px] md:text-[18px] max-w-lg mx-auto mb-10 leading-relaxed">
          The next generation of Digital Asset Forensics Suite is currently under active development. Stay tuned for updates.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-namo-black text-white font-semibold px-8 py-4 rounded-full text-[14px] hover:bg-gray-800 transition-colors shadow-lg shadow-black/10"
        >
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </div>
    </main>
  );
}
