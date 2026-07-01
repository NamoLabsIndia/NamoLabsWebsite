"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import MegaMenu from "./MegaMenu";
import MobileMenu from "./MobileMenu";

const topNavItems = [
  { label: "Platform",   key: "platform"   },
  { label: "Research",   key: "research"   },
  { label: "Consulting", key: "consulting" },
  { label: "Company",    key: "company"    },
];

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Click-to-open menus: close on outside click or Escape.
  useEffect(() => {
    if (!activeMenu) return;
    const onPointerDown = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveMenu(null);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [activeMenu]);

  const toggleMenu = (key: string) =>
    setActiveMenu((prev) => (prev === key ? null : key));

  return (
    <>
      {/*
        The header is fixed full-width so the MegaMenu (which uses
        "absolute top-full left-0 right-0") still spans the viewport.
        Only the inner pill is visually narrow/centered.
      */}
      <motion.header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* ── Floating pill row (stays above the full-screen menu) ── */}
        <div className="relative z-10 flex justify-center px-4 pt-4">
          <div
            className={cn(
              "w-full max-w-[960px] bg-white/95 backdrop-blur-md rounded-full px-6 py-3",
              "flex items-center justify-between transition-all duration-300",
              scrolled
                ? "shadow-lg shadow-black/10"
                : "shadow-md shadow-black/[0.07]"
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
            <nav className="hidden lg:flex items-center gap-0.5">
              {topNavItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => toggleMenu(item.key)}
                  aria-expanded={activeMenu === item.key}
                  aria-haspopup="true"
                  className={cn(
                    "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full transition-colors",
                    activeMenu === item.key
                      ? "text-accent bg-accent-light"
                      : "text-gray-600 hover:text-namo-black hover:bg-gray-50"
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
              ))}
            </nav>

            {/* CTA */}
            <div className="flex items-center gap-2 shrink-0">
              <Link
                href="/contact"
                onClick={() => setActiveMenu(null)}
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
                aria-label="Open menu"
                className="lg:hidden p-2 text-gray-600 hover:text-namo-black transition-colors"
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </div>

        {/* ── Mega menu (absolute to this fixed header → full viewport width) ── */}
        <AnimatePresence>
          {activeMenu && (
            <div
              // Close on link navigation, or on a click in the blank overlay area.
              onClick={(e) => {
                const t = e.target as HTMLElement;
                const onBlankArea =
                  t.closest("[data-menu-backdrop]") && !t.closest("[data-menu-content]");
                if (t.closest("a") || onBlankArea) setActiveMenu(null);
              }}
            >
              <MegaMenu menuKey={activeMenu} />
            </div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* ── Mobile overlay ── */}
      <AnimatePresence>
        {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
