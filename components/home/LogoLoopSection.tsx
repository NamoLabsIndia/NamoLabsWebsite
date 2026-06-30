"use client";

import React from "react";
import { LogoLoop, type LogoItem } from "@/components/ui/logo-loop";

const partners: LogoItem[] = [
  { title: "Government of India", src: "/logos/gov-india.png" },
  { title: "ISRO", src: "/logos/isro.png" },
  { title: "DRDO", src: "/logos/drdo.png" },
  { title: "TATA Advanced Systems", src: "/logos/tata.png" },
  { title: "Infosys", src: "/logos/infosys.png" },
  { title: "LIC", src: "/logos/lic.png" },
  { title: "IIT Madras", src: "/logos/iit-madras.png" },
];

export default function LogoLoopSection() {
  return (
    <section className="py-14 bg-white border-y border-gray-100">
      {/* Label — same typography as the PDF */}
      <p className="text-center text-[11px] font-semibold tracking-[0.28em] text-gray-400 uppercase mb-10">
        Trusted by Innovators, Enterprises &amp; Institutions
      </p>

      {/* Continuously scrolling logo loop */}
      <LogoLoop
        logos={partners}
        speed={40}
        direction="left"
        gap={80}
        logoHeight={104}
        fadeOut
        fadeOutColor="#ffffff"
        pauseOnHover
        ariaLabel="Trusted by leading institutions"
        className="max-w-6xl mx-auto"
      />
    </section>
  );
}
