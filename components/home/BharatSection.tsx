"use client";

import React from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

export default function BharatSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 0.95]);

  return (
    <section ref={ref} className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[minmax(0,500px)_1fr] gap-12 lg:gap-20 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl sm:text-6xl font-black text-namo-black leading-[1.1] mb-5">
              <span className="block">From Bharat,</span>
              <span className="block">For the World.</span>
            </h2>
            <div className="w-12 h-1 bg-accent rounded-full mb-6" />
            <p className="text-gray-500 leading-relaxed max-w-md mb-8">
              Building secure, inclusive and intelligent technology that empowers people, organisations and nations to progress together.
            </p>
          </motion.div>

          {/* Right - Earth image */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <motion.div style={{ scale }} className="rounded-3xl overflow-hidden shadow-2xl aspect-[16/10]">
              <img
                src="/img/bharat-earth.jpg"
                alt="Earth from space at night, India visible"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
