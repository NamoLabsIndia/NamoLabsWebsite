import React from "react";
import Breadcrumb from "@/components/shared/Breadcrumb";
import RolesBoard from "@/components/careers/RolesBoard";
import WhyWorkHere from "@/components/careers/WhyWorkHere";
import TeamQuote from "@/components/careers/TeamQuote";
import HowToApply from "@/components/careers/HowToApply";
import FinalCTA from "@/components/careers/FinalCTA";
import { roles } from "@/lib/data/roles";

export const metadata = {
  title: "Careers",
  description:
    "Join Namo Labs — we are looking for researchers, engineers, designers, and operators who want to build deep technology that serves humanity. Explore open roles.",
  alternates: {
    canonical: "https://namolabs.in/careers",
  },
};

export default function CareersPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Company", href: "/about" },
    { label: "Careers" },
  ];
  const isHiring = roles.length > 0;

  return (
    <main className="min-h-screen bg-white pt-[104px]">
      {/* Same breadcrumb component as /careers/apply and /team — the two
          careers pages previously rendered visually different breadcrumbs. */}
      <div className="mx-auto w-full max-w-[1000px] px-6 pt-12">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <section className="overflow-hidden pb-10 pt-10 md:pt-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="mb-6 text-[12px] font-bold uppercase tracking-[0.15em] text-accent">
            CAREERS AT NAMO LABS
          </p>

          <h1 className="mb-8 text-4xl font-bold leading-[1.1] tracking-tight text-namo-black md:text-5xl lg:text-[64px]">
            Build the Future <br className="hidden sm:block" />
            <span className="text-accent">With Us.</span>
          </h1>

          <p className="mx-auto max-w-2xl text-[16px] font-medium leading-[1.65] text-gray-600 md:text-[18px]">
            We are a team of researchers, engineers, and problem-solvers
            dedicated to creating technologies that strengthen society and
            protect digital infrastructure. If you&apos;re passionate about
            cryptography, blockchain, AI, quantum computing, or cloud systems, we
            want to hear from you.
          </p>
        </div>
      </section>

      <WhyWorkHere />
      <TeamQuote />

      <section id="open-roles" className="px-6 pb-28 pt-4">
        <div className="mx-auto max-w-[1000px]">
          <div className="mb-8 flex flex-wrap items-baseline justify-between gap-3">
            <h2 className="text-2xl font-extrabold tracking-tight text-namo-black sm:text-3xl">
              Open Roles
            </h2>
            {isHiring && (
              <p className="text-[14px] text-gray-500">
                {roles.length} {roles.length === 1 ? "position" : "positions"} open
              </p>
            )}
          </div>

          <RolesBoard />
        </div>
      </section>

      <HowToApply />
      <FinalCTA />
    </main>
  );
}
