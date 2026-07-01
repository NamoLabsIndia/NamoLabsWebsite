"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import MegaMenu from "./MegaMenu";
import MobileMenu from "./MobileMenu";

// "Platform" has no dropdown - it's a direct link.
// "Research", "Consulting", "Company" have mega menus.
const topNavItems = [
  { label: "Platform",   key: "platform",   hasDropdown: false },
  { label: "Research",   key: "research",   hasDropdown: true  },
  { label: "Consulting", key: "consulting", hasDropdown: true  },
  { label: "Company",    key: "company",    hasDropdown: true  },
];

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-white"
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onMouseLeave={() => setActiveMenu(null)}
      >
        {/* ── Main bar ── */}
        <div
          className={cn(
            "flex items-center justify-between px-8 py-0 h-[60px] transition-all duration-300",
            scrolled ? "border-b border-gray-200 shadow-sm" : "border-b border-gray-100"
          )}
        >
          {/* Logo */}
          <Link href="/" className="flex items-baseline shrink-0">
            <span className="text-[18px] font-black text-namo-black tracking-tight">
              Namo Labs
            </span>
            <span className="text-[9px] text-gray-400 font-normal ml-0.5">™</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {topNavItems.map((item) =>
              item.hasDropdown ? (
                <button
                  key={item.key}
                  onMouseEnter={() => setActiveMenu(item.key)}
                  className={cn(
                    "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full transition-colors",
                    activeMenu === item.key
                      ? "text-accent"
                      : "text-gray-600 hover:text-namo-black"
                  )}
                >
                  {item.label}
                  <ChevronDown
                    size={13}
                    className={cn(
                      "transition-transform duration-200",
                      activeMenu === item.key && "rotate-180"
                    )}
                  />
                </button>
              ) : (
                <Link
                  key={item.key}
                  href="/platform"
                  onMouseEnter={() => setActiveMenu(item.key)}
                  className={cn(
                    "flex items-center px-4 py-2 text-sm font-medium rounded-full transition-colors",
                    activeMenu === item.key
                      ? "text-accent"
                      : "text-gray-600 hover:text-namo-black"
                  )}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center gap-2 bg-namo-black text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-gray-800 transition-colors group"
            >
              Contact Us
              <ArrowRight
                size={14}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </Link>
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 text-gray-600 hover:text-namo-black transition-colors"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>

        {/* ── Mega menus ── */}
        <AnimatePresence>
          {activeMenu && (
            <div onMouseEnter={() => setActiveMenu(activeMenu)}>
              <MegaMenu menuKey={activeMenu} />
            </div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
