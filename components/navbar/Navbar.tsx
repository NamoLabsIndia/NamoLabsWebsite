"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import { Menu, ArrowRight, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import MegaMenu from "./MegaMenu";
import MobileMenu from "./MobileMenu";

// Nav items — no chevrons shown by label, controlled via hasDropdown
const topNavItems = [
  { label: "Platform",   key: "platform",   hasDropdown: true  },
  { label: "Research",   key: "research",   hasDropdown: true  },
  { label: "Consulting", key: "consulting", hasDropdown: true  },
  { label: "Company",    key: "company",    hasDropdown: true  },
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
        <div className="relative mx-auto w-full max-w-[1440px] px-2 pt-2 lg:px-6 lg:pt-3 pointer-events-auto">
          <div
            ref={navRef}
            data-menu-open={activeMenu !== null}
            className="rounded-[34px] overflow-hidden"
            style={{
              backgroundColor: scrolled
                ? "rgba(255,255,255,0.82)"
                : "rgba(255,255,255,0.58)",
              border: "1px solid rgba(220,220,220,0.45)",
              backdropFilter: "blur(24px) saturate(1.3) brightness(1.04)",
              WebkitBackdropFilter: "blur(24px) saturate(1.3) brightness(1.04)",
              boxShadow: "0 2px 24px rgba(0,0,0,0.03), inset 0 1px 0 rgba(255,255,255,0.6), inset 0 -1px 0 rgba(0,0,0,0.04)",
              transition: "background-color 0.35s, border-color 0.35s, box-shadow 0.35s",
            }}
          >

            {/* ── Desktop nav bar ── */}
            <nav className="hidden lg:flex justify-between items-center py-2.5 pr-2.5 pl-8 w-full">

              {/* Logo */}
              <Link
                href="/"
                className="flex flex-1 items-center gap-1 shrink-0 transition-opacity hover:opacity-75"
                onMouseEnter={() => setActiveMenu(null)}
              >
                <img src="/namo-logo.webp" alt="Namo Labs" className="h-14 w-auto object-contain mix-blend-multiply scale-[1.3] origin-left" />
              </Link>

              {/* Center nav links */}
              <div className="flex flex-1 justify-center items-center gap-1">
                {topNavItems.map((item) => (
                  <button
                    key={item.key}
                    onMouseEnter={() => setActiveMenu(item.key)}
                    onClick={() => setActiveMenu(activeMenu === item.key ? null : item.key)}
                    className={cn(
                      "flex items-center gap-1 px-4 py-2 rounded-xl transition-colors duration-200 cursor-pointer",
                      activeMenu === item.key
                        ? "bg-black/[0.06]"
                        : "hover:bg-black/[0.04]"
                    )}
                  >
                    <span
                      className={cn(
                        "font-semibold text-[11px] uppercase tracking-[1.1px] transition-colors",
                        activeMenu === item.key ? "text-namo-black" : "text-gray-600"
                      )}
                    >
                      {item.label}
                    </span>
                  </button>
                ))}
              </div>

              {/* Right CTAs */}
              <div className="flex flex-1 justify-end items-center gap-2.5" onMouseEnter={() => setActiveMenu(null)}>
                {/* Early Access — dark gradient (Sarvam's "Sign up") */}
                <Link
                  href="/platform/qscl"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full min-h-[40px] px-5 py-2.5 text-[13px] font-semibold text-white whitespace-nowrap transition-all duration-300 active:scale-[0.97]"
                  style={{
                    background: "linear-gradient(to bottom, #3a3f5c 0%, #1e2033 100%)",
                  }}
                >
                  {/* Hover radial glow */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: "radial-gradient(circle 80px at 80% 20%, rgba(255,255,255,0.16) 0%, transparent 100%)",
                    }}
                  />
                  <span className="relative z-10 flex items-center gap-1.5">
                    Early Access
                    <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>

                {/* Contact Us — light pill (Sarvam's "Contact Us") */}
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center rounded-full min-h-[40px] px-5 py-2.5 text-[13px] font-semibold text-namo-black whitespace-nowrap transition-all duration-300 hover:bg-gray-50 active:scale-[0.97]"
                  style={{
                    background: "linear-gradient(to bottom, #ffffff 0%, #f0f1f5 100%)",
                    boxShadow: "inset 0 0 0 1px rgba(30,32,51,0.14)",
                  }}
                >
                  Contact Us
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
                      className="group relative inline-flex items-center justify-center cursor-pointer font-medium rounded-full touch-manipulation disabled:opacity-40 disabled:pointer-events-none overflow-hidden min-h-[44px] text-[#1e2033] active:scale-[0.97] active:duration-150 transition-all duration-350 ease-[cubic-bezier(0.2,0,0,1)] px-5 py-3 text-[15px]"
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
                    className="flex flex-col justify-center items-center space-y-[4px] focus:outline-none w-8 h-8 hover:opacity-70 transition-opacity"
                    aria-label="Toggle menu"
                  >
                    <span className="w-[18px] h-[1.5px] bg-black transition-all duration-300 ease-out origin-center"></span>
                    <span className="w-[18px] h-[1.5px] bg-black transition-all duration-300 ease-out"></span>
                    <span className="w-[18px] h-[1.5px] bg-black transition-all duration-300 ease-out origin-center"></span>
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
