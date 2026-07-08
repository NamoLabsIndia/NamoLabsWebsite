import React from "react";
import AboutHero from "@/components/about/AboutHero";
import WhyWeExist from "@/components/about/WhyWeExist";
import MissionVision from "@/components/about/MissionVision";
import OurBelief from "@/components/about/OurBelief";
import WhatWeBuild from "@/components/about/WhatWeBuild";

export const metadata = {
  title: "About Us - Namo Labs",
  description: "Driving Technology for Mankind.",
};

export default function AboutPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Company", href: "/about" },
    { label: "About Us" },
  ];

  return (
    <main className="bg-namo-faint min-h-screen pt-[104px]">
      <AboutHero />
      <WhyWeExist />
      <MissionVision />
      <OurBelief />
      <WhatWeBuild />
    </main>
  );
}
