"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Breadcrumb from "@/components/shared/Breadcrumb";
import PhotoSlot from "@/components/shared/PhotoSlot";

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Company", href: "/about" },
  { label: "Careers" },
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export default function CareersHero() {
  return (
    <section className="relative w-full bg-white pb-16 pt-24 sm:pt-24 lg:pb-32 lg:pt-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Breadcrumb items={crumbs} />
        
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="mt-12 lg:mt-20"
        >
          {/* Massive Editorial Headline */}
          <motion.h1
            variants={fadeUp}
            className="max-w-[1100px] text-6xl font-extrabold leading-[0.9] tracking-tighter text-namo-black sm:text-7xl lg:text-[100px]"
          >
            Build the Future.
            <br />
            Join <span className="text-accent">Namo Labs.</span>
          </motion.h1>

          <div className="mt-12 flex flex-col gap-10 lg:mt-20 lg:flex-row lg:items-end lg:justify-between">
            <motion.div variants={fadeUp} className="max-w-[520px]">
              <p className="text-[17px] leading-relaxed text-gray-600">
                We are a team of researchers, engineers, and innovators working on technologies that matter — cryptography, AI, blockchain, quantum, and cloud infrastructure.
              </p>
              <p className="mt-4 text-[17px] leading-relaxed text-gray-600">
                If you want your work to have real-world impact and be part of a purpose-driven culture, there&apos;s a place for you here.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#open-roles"
                  className="inline-flex items-center gap-2 rounded-full bg-namo-black px-7 py-3.5 text-[13px] font-bold text-white transition-transform hover:scale-[1.02] hover:bg-gray-800"
                >
                  View Open Roles <ArrowRight size={14} />
                </a>
                <a
                  href="#culture"
                  className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-7 py-3.5 text-[13px] font-bold text-namo-black transition-transform hover:scale-[1.02] hover:bg-gray-200"
                >
                  Our Culture
                </a>
              </div>
            </motion.div>

            {/* Subtle section label instead of a repeating eyebrow above the H1 */}
            <motion.div 
              variants={fadeUp} 
              className="flex flex-col items-start border-l-2 border-accent pl-5 lg:items-end lg:border-l-0 lg:border-r-2 lg:pl-0 lg:pr-5 lg:text-right"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Department</span>
              <span className="mt-1 text-[13px] font-medium text-namo-black">Careers & People</span>
              <span className="text-[13px] font-medium text-gray-500">Global / Remote</span>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
