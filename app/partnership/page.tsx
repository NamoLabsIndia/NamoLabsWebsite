import React from "react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PartnershipHero from "@/components/partnership/PartnershipHero";
import PartnershipModels from "@/components/partnership/PartnershipModels";
import WhyPartner from "@/components/partnership/WhyPartner";
import PartnershipCTA from "@/components/partnership/PartnershipCTA";

export const metadata = {
  title: "Partnerships - Namo Labs",
  description: "Enterprise Partnerships for Long-Term Innovation.",
};

export default function PartnershipPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Company", href: "/about" },
    { label: "Partnerships" },
  ];

  return (
    <main className="bg-[#f4f7ff] min-h-screen pt-[104px]">
      <Breadcrumbs items={breadcrumbItems} />
      <PartnershipHero />
      <PartnershipModels />
      <WhyPartner />
      <PartnershipCTA />
    </main>
  );
}
