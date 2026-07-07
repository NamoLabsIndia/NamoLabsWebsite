"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import MegaMenu from "./MegaMenu";
import MobileMenu from "./MobileMenu";

// Nav items — no chevrons shown by label, controlled via hasDropdown
const topNavItems = [
  { label: "Platform",   key: "platform",   hasDropdown: true  },
  { label: "Research",   key: "research",   hasDropdown: true, href: "/research" },
  { label: "Consulting", key: "consulting", hasDropdown: true  },
  { label: "Company",    key: "company",    hasDropdown: true, href: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mega menu on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <>
      {/* ── Fixed header wrapper ── */}
      <header className="fixed top-0 left-0 right-0 z-50 w-full pointer-events-none">

        {/* Scroll-triggered top fade — mirrors Sarvam's gradient fade */}
        <div
          className="absolute top-0 left-0 right-0 h-8 lg:h-12 transition-opacity duration-300 pointer-events-none"
          style={{
            opacity: scrolled ? 1 : 0,
            background: "linear-gradient(to bottom, #fafafa 40%, transparent)",
            maskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          }}
        />

        {/* ── Centered pill container ── */}
        <div className="relative mx-auto w-full max-w-[1200px] px-4 pt-6 pointer-events-auto">
          <div
            ref={navRef}
            data-menu-open={activeMenu !== null}
            className="rounded-[34px] bg-white/95 backdrop-blur-md shadow-[0_8px_40px_rgb(0,0,0,0.04)] border border-gray-100/50 transition-all duration-300"
          >

            {/* ── Desktop nav bar ── */}
            <nav className="hidden lg:flex justify-between items-center py-2.5 px-4 w-full">

              {/* Logo */}
              <Link
                href="/"
                className="flex items-center shrink-0 transition-opacity hover:opacity-80 pl-3"
                onMouseEnter={() => setActiveMenu(null)}
              >
                <img
                  src="/namo-logo.png"
                  alt="Namo Labs"
                  className="h-[34px] w-auto object-contain mix-blend-multiply"
                />
              </Link>

              {/* Center nav links */}
              <div className="flex justify-center items-center gap-8 ml-8">
                {topNavItems.map((item) => {
                  const content = (
                    <span
                      className={cn(
                        "font-medium text-[15px] transition-colors",
                        activeMenu === item.key ? "text-namo-black" : "text-gray-600 hover:text-namo-black"
                      )}
                    >
                      {item.label}
                    </span>
                  );

                  return item.href ? (
                    <Link
                      key={item.key}
                      href={item.href}
                      onMouseEnter={() => setActiveMenu(item.hasDropdown ? item.key : null)}
                      onClick={() => setActiveMenu(null)}
                      className="transition-colors duration-200 cursor-pointer"
                    >
                      {content}
                    </Link>
                  ) : (
                    <button
                      key={item.key}
                      onMouseEnter={() => setActiveMenu(item.hasDropdown ? item.key : null)}
                      onClick={() => setActiveMenu(activeMenu === item.key ? null : item.key)}
                      className="transition-colors duration-200 cursor-pointer"
                    >
                      {content}
                    </button>
                  );
                })}
              </div>

              {/* Right CTA */}
              <div className="flex items-center" onMouseEnter={() => setActiveMenu(null)}>
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full min-h-[44px] px-7 text-[15px] font-medium text-white bg-[#0A0A0A] hover:bg-gray-800 transition-colors shadow-sm"
                >
                  Contact Us
                  <ArrowRight size={16} strokeWidth={2} />
                </Link>
              </div>
            </nav>

            {/* ── Dropdown panel — single persistent panel, no re-key on item switch ── */}
            <motion.div
              initial={false}
              animate={activeMenu ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="hidden lg:block border-t border-gray-100/80 overflow-hidden"
              onMouseLeave={() => setActiveMenu(null)}
            >
              {activeMenu && <MegaMenu menuKey={activeMenu} />}
            </motion.div>

            {/* ── Mobile bar ── */}
            <div className="lg:hidden flex flex-col">
              <div className="flex justify-between items-center px-4 pl-5 py-2">
                <Link href="/" className="relative flex items-center gap-2">
                  <img src="/namo-logo.webp" alt="Namo Labs" className="h-10 w-auto object-contain mix-blend-multiply scale-[1.3] origin-left" />
                </Link>
                <div className="flex items-center gap-3">
                  <Link href="/contact" className="transition-opacity duration-150 opacity-100">
                    <button
                      className="group relative inline-flex items-center justify-center cursor-pointer font-medium rounded-full touch-manipulation disabled:opacity-40 disabled:pointer-events-none overflow-hidden min-h-[48px] text-[#1e2033] active:scale-[0.97] active:duration-150 transition-all duration-350 ease-[cubic-bezier(0.2,0,0,1)] px-4 sm:px-5 py-3 text-[14px] sm:text-[15px]"
                      style={{
                        background: "linear-gradient(to bottom, #ffffff 0%, #f0f1f5 100%)",
                        boxShadow: "inset 0 0 0 1px rgba(30,32,51,0.14)",
                      }}
                    >
                      <span className="relative z-10 flex items-center gap-2">Contact Us</span>
                    </button>
                  </Link>
                  <button
                    onClick={() => setMobileOpen(true)}
                    className="flex flex-col justify-center items-center space-y-[5px] focus:outline-none w-10 h-10 hover:opacity-70 transition-opacity"
                    aria-label="Toggle menu"
                  >
                    <span className="w-[20px] h-[1.5px] bg-black transition-all duration-300 ease-out origin-center"></span>
                    <span className="w-[20px] h-[1.5px] bg-black transition-all duration-300 ease-out"></span>
                    <span className="w-[20px] h-[1.5px] bg-black transition-all duration-300 ease-out origin-center"></span>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
