"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Users, GraduationCap, Rocket, Store } from "lucide-react";
import { Carousel, Card, type CarouselCard } from "@/components/ui/apple-cards-carousel";

const sectors: (CarouselCard & { href: string })[] = [
  {
    category: "Public Sector",
    title: "Governments",
    icon: <Building2 size={16} />,
    image: "/img/sector-governments.jpg",
    content: "Enabling digital transformation with secure, scalable and citizen-centric solutions that modernise public services and build trust at national scale.",
    href: "/solutions/governments",
  },
  {
    category: "Enterprise",
    title: "Organisations",
    icon: <Users size={16} />,
    image: "/img/sector-organisations.jpg",
    content: "Helping enterprises streamline operations, enhance productivity and drive innovation with intelligent, future-ready platforms.",
    href: "/solutions/organisations",
  },
  {
    category: "Education & Research",
    title: "Institutions",
    icon: <GraduationCap size={16} />,
    image: "/img/sector-institutions.jpg",
    content: "Empowering educational and research institutions with smart, future-ready technology that accelerates discovery and learning.",
    href: "/solutions/institutions",
  },
  {
    category: "Emerging",
    title: "Startups",
    icon: <Rocket size={16} />,
    image: "/img/sector-startups.jpg",
    content: "Supporting startups with the right technology, mentorship and scalable infrastructure to grow fast and build with confidence.",
    href: "/solutions/startups",
  },
  {
    category: "Small Business",
    title: "MSMEs & Others",
    icon: <Store size={16} />,
    image: "/img/sector-msmes.jpg",
    content: "Delivering affordable, reliable and impactful digital tools for businesses of all sizes to compete and thrive.",
    href: "/solutions/msmes",
  },
];

export default function OneStopFirmSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-8 lg:px-12">

        {/* Two-column layout: left text | right carousel */}
        <div className="grid lg:grid-cols-[440px_1fr] gap-12 lg:gap-16 items-center">

          {/* Left — heading + CTA */}
          <div>
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
              className="text-4xl sm:text-[48px] font-black text-namo-black leading-[1.1] mb-5"
            >
              One Stop Firm for Governments, Organisations, Institutions, Startups and other MSMEs.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-gray-500 leading-relaxed mb-8"
            >
              We build secure, intelligent and future-ready digital solutions that empower every sector to innovate, grow and serve better.
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
          </div>

          {/* Right — Apple-style cards carousel */}
          <div className="min-w-0">
            <Carousel
              items={sectors.map((sector, i) => (
                <Card key={sector.title} index={i} card={sector} />
              ))}
            />
          </div>
        </div>

        {/* Bottom tagline with blue left border */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-14 flex items-center gap-5 border-l-4 border-accent pl-5"
        >
          <p className="text-sm font-semibold tracking-[0.18em] text-gray-400 uppercase">
            One Mission.&nbsp; Many Sectors.&nbsp; Limitless Impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
