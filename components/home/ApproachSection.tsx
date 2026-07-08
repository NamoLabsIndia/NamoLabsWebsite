"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Search, Sparkles, Target, TrendingUp, Shield } from "lucide-react";

const features = [
  { icon: <Search size={20} />, title: "Research-First", description: "We start with deep research across domains, industries, and emerging technologies to identify what truly matters.", image: "research.png" },
  { icon: <Sparkles size={20} />, title: "AI-Powered Insights", description: "We leverage advanced AI models to analyze, predict, and uncover opportunities others miss.", image: "ai powered insights.png" },
  { icon: <Target size={20} />, title: "Problem-Centric", description: "We focus on real business problems, not decks. Solutions are tailored, practical, and executable.", image: "Problem centric.webp" },
  { icon: <TrendingUp size={20} />, title: "Impact You Can Measure", description: "We define success with clear outcomes and KPIs that create long-term, measurable value.", image: "imapct .jpg" },
];

function useTypewriter(text: string, speed = 100, pause = 2000) {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayedText === text) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && displayedText === "") {
      timeout = setTimeout(() => setIsDeleting(false), 500);
    } else {
      const nextText = isDeleting
        ? text.substring(0, displayedText.length - 1)
        : text.substring(0, displayedText.length + 1);

      timeout = setTimeout(
        () => setDisplayedText(nextText),
        isDeleting ? speed / 2 : speed
      );
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, text, speed, pause]);

  return displayedText;
}

function Feature({ icon, title, description, image }: (typeof features)[number]) {
  return (
    <div className="flex flex-col gap-4 group cursor-pointer h-full">
      <div className="relative w-full h-28 sm:h-32 rounded-[16px] sm:rounded-[20px] overflow-hidden mb-1 bg-gray-50 border border-gray-100 shadow-sm group-hover:shadow-md transition-shadow duration-300">
        <img 
          src={`/our approach/${image}`} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
        />
        <div className="absolute top-3 left-3 w-10 h-10 rounded-[12px] bg-white/95 backdrop-blur-sm flex items-center justify-center text-accent shadow-[0_4px_12px_rgba(0,0,0,0.06)] group-hover:bg-accent group-hover:text-white transition-colors duration-300">
          {icon}
        </div>
      </div>
      <div className="transition-transform duration-300 group-hover:translate-x-1 flex-1">
        <h4 className="font-semibold text-accent text-[16px] mb-1 group-hover:text-blue-800 transition-colors duration-300">{title}</h4>
        <p className="text-[13px] sm:text-[14px] text-gray-500 leading-[1.6] group-hover:text-gray-800 transition-colors duration-300">{description}</p>
      </div>
    </div>
  );
}

export default function ApproachSection() {
  const typedWord = useTypewriter("AI-Powered.", 150, 2500);

  return (
    <section className="py-24 bg-namo-faint">
      <div className="max-w-[1150px] mx-auto px-6">
        {/* Header */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-[12px] font-bold tracking-[0.3em] text-accent uppercase mb-4"
        >
          IT Consulting, Reimagined
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-center text-4xl sm:text-6xl font-[700] text-namo-black mb-6 leading-[1.1]"
        >
          How Namo Labs
          <br className="hidden sm:block" /> Takes a Different Direction
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center text-gray-500 text-[18px] max-w-[700px] mx-auto mb-14 leading-[1.6]"
        >
          We combine deep research, domain intelligence, and AI to deliver consulting that solves real problems and drives measurable impact.
        </motion.p>

        {/* One large rounded card holding everything */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[36px] bg-white shadow-[0_8px_40px_rgb(0,0,0,0.06)] border border-gray-100/50 p-8 lg:p-12"
        >
          <div className="grid lg:grid-cols-[minmax(0,340px)_1fr] gap-10 lg:gap-12 items-start">
            {/* Left - heading + CTA */}
            <div>
              <p className="text-[15px] font-semibold text-accent mb-4">Our Approach</p>
              <h3 className="text-3xl sm:text-[36px] font-[700] text-namo-black leading-[1.2] mb-6 tracking-tight">
                Research-Backed.<br />
                <span className="text-accent font-black">
                  {typedWord}
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="inline-block w-[2px] h-[30px] sm:h-[36px] bg-accent/60 ml-1 align-middle translate-y-[-2px]"
                  />
                </span>{" "}
                Impact-Driven.
              </h3>
              <p className="text-gray-500 text-[15px] leading-[1.65] mb-10">
                Unlike traditional consulting firms that rely on templates and assumptions, we go deep - into research, data, and technology - to design solutions that are future-ready and built for scale.
              </p>
              <Link
                href="/consulting"
                className="hidden lg:inline-flex items-center gap-3 bg-[#0A0A0A] text-white font-medium px-8 py-4 rounded-full text-[15px] hover:bg-gray-800 transition-colors shadow-sm"
              >
                Explore Consulting <ArrowRight size={16} strokeWidth={2} />
              </Link>
            </div>

            {/* Right - feature grid */}
            <div className="lg:pl-4">
              <div className="grid sm:grid-cols-2 gap-8">
                <Feature {...features[0]} />
                <Feature {...features[1]} />
                <Feature {...features[2]} />
                <Feature {...features[3]} />
              </div>
              
              {/* Mobile Only CTA */}
              <div className="mt-10 lg:hidden flex justify-start">
                <Link
                  href="/consulting"
                  className="inline-flex items-center gap-3 bg-[#0A0A0A] text-white font-medium px-8 py-4 rounded-full text-[15px] hover:bg-gray-800 transition-colors shadow-sm"
                >
                  Explore Consulting <ArrowRight size={16} strokeWidth={2} />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
