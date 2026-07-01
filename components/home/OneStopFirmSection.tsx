"use client";

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Users,
  GraduationCap,
  Rocket,
  Store,
} from "lucide-react";
import { Card, CarouselCard } from "@/components/ui/apple-cards-carousel";

const sectors: (CarouselCard & { href: string })[] = [
  {
    category: "Public Sector",
    title: "Governments",
    icon: <Building2 size={16} />,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop",
    content:
      "Enabling digital transformation with secure, scalable and citizen-centric solutions that modernise public services and build trust at national scale.",
    href: "/solutions/governments",
  },
  {
    category: "Enterprise",
    title: "Organisations",
    icon: <Users size={16} />,
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    content:
      "Helping enterprises streamline operations, enhance productivity and drive innovation with intelligent, future-ready platforms.",
    href: "/solutions/organisations",
  },
  {
    category: "Education & Research",
    title: "Institutions",
    icon: <GraduationCap size={16} />,
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop",
    content:
      "Empowering educational and research institutions with smart, future-ready technology that accelerates discovery and learning.",
    href: "/solutions/institutions",
  },
  {
    category: "Emerging",
    title: "Startups",
    icon: <Rocket size={16} />,
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2070&auto=format&fit=crop",
    content:
      "Supporting startups with the right technology, mentorship and scalable infrastructure to grow fast and build with confidence.",
    href: "/solutions/startups",
  },
  {
    category: "Small Business",
    title: "MSMEs & Others",
    icon: <Store size={16} />,
    image:
      "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=2069&auto=format&fit=crop",
    content:
      "Delivering affordable, reliable and impactful digital tools for businesses of all sizes to compete and thrive.",
    href: "/solutions/msmes",
  },
];

// How many extra card-widths to scroll (beyond the 2 initially visible)
// Each card is ~384px + 20px gap = 404px. We have 3 extra cards to reveal.
const EXTRA_CARDS = 3;
const CARD_W = 372; // px (md:w-[22rem] = 352 + gap 20)

export default function OneStopFirmSection() {
  const outerRef = useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const outer = outerRef.current;
    if (!outer) return;

    const onScroll = () => {
      const rect = outer.getBoundingClientRect();
      // rect.top goes from 0 → -(totalScrollable)
      const totalScrollable = outer.offsetHeight - window.innerHeight;
      if (totalScrollable <= 0) return;

      const scrolled = Math.max(0, -rect.top);
      const progress = Math.min(1, scrolled / totalScrollable);

      // Max shift = how much extra track we need to reveal
      const maxShift = EXTRA_CARDS * CARD_W;
      setTranslateX(-(progress * maxShift));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Total height = 100vh (normal view) + extra scroll distance for cards
  const extraScrollPx = EXTRA_CARDS * CARD_W;

  return (
    <section
      ref={outerRef}
      className="bg-white"
      style={{ height: `calc(100vh + ${extraScrollPx}px)` }}
    >
      {/* Sticky panel - takes full viewport height */}
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-16">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">

            {/* ── Left: heading + CTA (fixed width, never moves) ── */}
            <div className="flex-shrink-0 w-full lg:w-[400px]">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-xs font-semibold tracking-[0.22em] text-accent uppercase mb-4"
              >
                Namo Labs
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
                className="text-3xl sm:text-[40px] font-black text-namo-black leading-[1.1] mb-5"
              >
                One Stop Firm for Governments, Organisations, Institutions,
                Startups and other MSMEs.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="text-gray-500 leading-relaxed mb-8"
              >
                We build secure, intelligent and future-ready digital solutions
                that empower every sector to innovate, grow and serve better.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Link
                  href="/solutions"
                  className="inline-flex items-center gap-2 bg-namo-black text-white font-semibold px-6 py-3.5 rounded-full text-sm hover:bg-gray-800 transition-colors"
                >
                  Explore Solutions <ArrowRight size={14} />
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-8 flex items-center gap-4 border-l-4 border-accent pl-4"
              >
                <p className="text-[11px] font-semibold tracking-[0.18em] text-gray-400 uppercase">
                  One Mission.&nbsp; Many Sectors.&nbsp; Limitless Impact.
                </p>
              </motion.div>
            </div>

            {/* ── Right: horizontal track driven by scroll translateX ── */}
            <div className="relative flex-1 min-w-0 overflow-hidden">
              {/* Right fade edge so cards disappear cleanly */}
              <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-white to-transparent" />

              {/* Translate the entire row of cards horizontally */}
              <div
                style={{
                  transform: `translateX(${translateX}px)`,
                  transition: "transform 0.05s linear",
                  willChange: "transform",
                }}
                className="flex flex-row gap-5 py-6"
              >
                {sectors.map((sector, i) => (
                  <div key={sector.title} className="flex-shrink-0">
                    <Card card={sector} index={i} />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
