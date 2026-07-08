"use client";

import React from "react";
import { motion } from "framer-motion";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export default function AboutHero() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Company", href: "/about" },
    { label: "About Us" },
  ];

  return (
    <section className="relative flex min-h-[60vh] lg:min-h-[65vh] flex-col overflow-hidden">
      {/* Right Image with Mask */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="pointer-events-none absolute inset-y-0 right-0 hidden h-full w-[60%] lg:block z-0"
      >
        <img
          src="/About%201.png"
          alt="About Namo Labs"
          className="h-full w-full object-cover object-[100%_30%] [mask-image:linear-gradient(to_left,black_50%,transparent)]"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop';
          }}
        />
      </motion.div>

      <div className="relative z-10 flex w-full flex-1 flex-col max-w-7xl mx-auto px-6">
        <div className="flex max-w-[560px] flex-1 flex-col justify-center pt-4 lg:pt-8 pb-12 lg:pb-16">
          <div className="-ml-4 mb-4">
            <Breadcrumbs items={breadcrumbItems} />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[12px] font-bold text-accent tracking-[0.15em] uppercase mb-6">
              ABOUT NAMO LABS
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold text-namo-black leading-[1.05] tracking-tight">
              Driving Technology
              <br />
              for <span className="text-accent">Mankind.</span>
            </h1>
            <div className="mt-8 mb-8 h-[3px] w-12 bg-accent" />
            <div className="space-y-6 text-[15px] md:text-[16px] leading-[1.65] font-medium text-gray-700">
              <p>
                At Namo Labs, we believe technology should solve problems that matter—not just for today, but for generations ahead.
              </p>
              <p>
                We conduct research, build digital infrastructure, and develop technologies across cryptography, blockchain, artificial intelligence, quantum computing, and cloud systems to strengthen governments, institutions, enterprises, and society.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
