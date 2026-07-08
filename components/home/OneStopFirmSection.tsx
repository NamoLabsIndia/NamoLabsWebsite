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
    image: "/government-image.png",
    content:
      "Enabling digital transformation with secure, scalable and citizen-centric solutions that modernise public services and build trust at national scale.",
    href: "/solutions/governments",
  },
  {
    category: "Enterprise",
    title: "Organisations",
    icon: <Users size={16} />,
    image: "/organisation-image.png",
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

const EXTRA_CARDS = 3;
const CARD_W = 372;

export default function OneStopFirmSection() {
  const outerRef = useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile on mount and on resize
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Scroll-driven animation — desktop only
  useEffect(() => {
    if (isMobile) return;
    const outer = outerRef.current;
    if (!outer) return;

    const onScroll = () => {
      const rect = outer.getBoundingClientRect();
      const totalScrollable = outer.offsetHeight - window.innerHeight;
      if (totalScrollable <= 0) return;
      const scrolled = Math.max(0, -rect.top);
      const progress = Math.min(1, scrolled / totalScrollable);
      setTranslateX(-(progress * EXTRA_CARDS * CARD_W));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isMobile]);

  /* ── MOBILE: simple swipeable layout ── */
  if (isMobile) {
    return (
      <section className="bg-white py-14 px-6">
        <div className="mb-8">
          <p className="text-[10px] font-semibold tracking-[0.22em] text-accent uppercase mb-3">
            Namo Labs
          </p>
          <h2 className="text-[26px] font-black text-namo-black leading-[1.15] mb-4">
            One Stop Firm for Governments, Organisations, Institutions, Startups
            and other MSMEs.
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed mb-6">
            We build secure, intelligent and future-ready digital solutions that
            empower every sector to innovate, grow and serve better.
          </p>
          <Link
            href="/consulting"
            className="inline-flex items-center gap-2 bg-namo-black text-white font-semibold px-6 py-3.5 rounded-full text-sm hover:bg-gray-800 transition-colors"
          >
            Explore Solutions <ArrowRight size={14} />
          </Link>
          <div className="mt-6 flex items-center gap-4 border-l-4 border-accent pl-4">
            <p className="text-[9px] font-semibold tracking-[0.18em] text-gray-400 uppercase">
              One Mission.&nbsp; Many Sectors.&nbsp; Limitless Impact.
            </p>
          </div>
        </div>

        {/* Swipeable cards row */}
        <div className="overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden -mx-6 px-6">
          <div className="flex flex-row gap-4 pb-4" style={{ width: "max-content" }}>
            {sectors.map((sector, i) => (
              <div key={sector.title} className="flex-shrink-0">
                <Card card={sector} index={i} />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  /* ── DESKTOP: scroll-driven horizontal animation ── */
  return (
    <section
      ref={outerRef}
      className="bg-white"
      style={{ height: `calc(100vh + ${EXTRA_CARDS * CARD_W}px)` }}
    >
      <div className="sticky top-0 h-[100dvh] overflow-hidden flex items-center justify-center">
        <div className="w-full max-w-[1600px] mx-auto px-16">
          <div className="flex flex-row gap-16 items-center">

            {/* Left: heading + CTA */}
            <div className="flex-shrink-0 w-[400px]">
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
                className="text-[40px] font-black text-namo-black leading-[1.1] mb-5"
              >
                One Stop Firm for Governments, Organisations, Institutions,
                Startups and other MSMEs.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="text-base text-gray-500 leading-relaxed mb-8"
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
                  href="/consulting"
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

            {/* Right: scroll-driven card track */}
            <div className="relative flex-1 min-w-0 overflow-hidden">
              <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-white to-transparent" />
              <div
                style={{
                  transform: `translateX(${translateX}px)`,
                  transition: "transform 0.05s linear",
                  willChange: "transform",
                }}
                className="flex flex-row gap-5 py-6 overflow-visible"
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
