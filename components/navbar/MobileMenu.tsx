"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { X, ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navGroups = [
  {
    label: "Platform",
    children: [
      { label: "QSCL™", href: "/#qscl-timer" },
      { label: "TierraTrace™", href: "https://www.tierratrace.in" },
      { label: "DAFS™", href: "/platform/dafs" },
    ],
  },
  {
    label: "Research",
    children: [
      { label: "Cryptography", href: "/research/cryptography" },
      { label: "Blockchain", href: "/research/blockchain" },
      { label: "Artificial Intelligence", href: "/research/ai" },
      { label: "Quantum", href: "/research/quantum" },
      { label: "Cloud", href: "/research/cloud" },
    ],
  },
  {
    label: "Consulting",
    children: [
      { label: "AI & Data Analytics", href: "/consulting/ai-data" },
      { label: "Cybersecurity", href: "/consulting/cybersecurity" },
      { label: "Blockchain", href: "/consulting/blockchain" },
      { label: "Cloud", href: "/consulting/cloud" },
      { label: "Enterprise Solutions", href: "/consulting/enterprise" },
      { label: "Network Solutions", href: "/consulting/network" },
      { label: "Sustainability Services", href: "/consulting/sustainability" },
    ],
  },
  {
    label: "Company",
    children: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
    ],
  },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

interface MobileMenuProps {
  onClose: () => void;
}

export default function MobileMenu({ onClose }: MobileMenuProps) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "100%" }}
      transition={{ type: "tween", duration: 0.25 }}
      className="fixed inset-0 z-50 bg-white overflow-y-auto"
    >
      <div className="px-6 py-5 flex items-center justify-between border-b border-gray-100">
        <img src="/namo-logo.webp" alt="Namo Labs" className="h-8 w-auto object-contain mix-blend-multiply" />
        <button onClick={onClose} className="p-2 w-12 h-12 flex items-center justify-center text-gray-500 hover:text-namo-black">
          <X size={24} />
        </button>
      </div>

      <nav className="px-4 py-6 space-y-1">
        {navGroups.map((group) =>
          group.children ? (
            <div key={group.label}>
              <button
                onClick={() => setExpanded(expanded === group.label ? null : group.label)}
                className="w-full flex items-center justify-between px-4 py-3 min-h-[48px] text-base font-semibold text-namo-black hover:bg-gray-50 rounded-xl transition-colors"
              >
                {group.label}
                <ChevronDown
                  size={18}
                  className={cn(
                    "text-gray-400 transition-transform duration-200",
                    expanded === group.label && "rotate-180"
                  )}
                />
              </button>
              {expanded === group.label && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="ml-4 mt-1 space-y-1 border-l-2 border-accent-light pl-4"
                >
                  {group.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      onClick={onClose}
                      className="block py-3 min-h-[44px] text-[15px] text-gray-600 hover:text-accent transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>
          ) : (
            <Link
              key={group.label}
              href={group.href!}
              onClick={onClose}
              className="flex items-center px-4 py-3 min-h-[48px] text-base font-semibold text-namo-black hover:bg-gray-50 rounded-xl transition-colors"
            >
              {group.label}
            </Link>
          )
        )}
      </nav>

      <div className="px-6 pb-8 mt-auto">
        <Link
          href="/contact"
          onClick={onClose}
          className="flex items-center justify-center gap-2 bg-namo-black text-white text-[15px] font-medium px-6 py-3.5 min-h-[52px] rounded-full w-full hover:bg-gray-800 transition-colors"
        >
          Contact Us <ArrowRight size={16} />
        </Link>
      </div>
    </motion.div>
  );
}
