"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const TARGET_DATE = new Date("2027-01-01T00:00:00Z");

function useCountdown(target: Date) {
  const [t, setT] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    const calc = () => {
      const diff = target.getTime() - Date.now();
      if (diff <= 0) { setT({ days: 0, hours: 0, minutes: 0, seconds: 0 }); return; }
      setT({
        days:    Math.floor(diff / 86400000),
        hours:   Math.floor((diff / 3600000) % 24),
        minutes: Math.floor((diff / 60000) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, [target]);
  return t;
}

function Unit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white/8 border border-white/15 rounded-2xl min-w-[88px] py-5 px-4 text-center backdrop-blur-sm">
        <motion.span
          key={value}
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="text-5xl font-black text-white tabular-nums block"
        >
          {String(value).padStart(2, "0")}
        </motion.span>
      </div>
      <span className="mt-2 text-[10px] tracking-[0.2em] text-white/40 uppercase">{label}</span>
    </div>
  );
}

export default function CountdownSection() {
  const { days, hours, minutes, seconds } = useCountdown(TARGET_DATE);

  return (
    <section className="py-24 relative overflow-hidden bg-[#0a0a0a]">
      {/* Blue arch glow from top — matches PDF */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[160%] h-72 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 55% 100% at 50% 0%, rgba(59,91,255,0.45) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[11px] font-semibold tracking-[0.25em] text-accent uppercase mb-5"
        >
          Building the Future
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-4xl sm:text-5xl font-black text-white mb-12 leading-tight"
        >
          The Future of Secure<br />
          Communication is{" "}
          <span className="text-accent">Almost Here.</span>
        </motion.h2>

        {/* QSCL logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          {/* Triquetra-style symbol */}
          <div className="w-14 h-14 relative flex items-center justify-center">
            <div className="w-14 h-14 rounded-full border-2 border-white/30 absolute" />
            <div className="w-9 h-9 rounded-full border-2 border-accent/60 absolute" />
            <div className="w-4 h-4 rounded-full border-2 border-accent absolute" />
          </div>
          <span className="text-4xl font-black text-white tracking-tight">
            QSCL<sup className="text-accent text-base font-normal ml-0.5">™</sup>
          </span>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-start justify-center gap-3 sm:gap-5 mb-12"
        >
          <Unit value={days}    label="Days" />
          <span className="text-4xl font-black text-white/30 mt-5">:</span>
          <Unit value={hours}   label="Hours" />
          <span className="text-4xl font-black text-white/30 mt-5">:</span>
          <Unit value={minutes} label="Minutes" />
          <span className="text-4xl font-black text-white/30 mt-5">:</span>
          <Unit value={seconds} label="Seconds" />
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
        >
          <Link
            href="/platform/qscl"
            className="inline-flex items-center gap-2 border border-white/25 text-white font-medium px-8 py-3.5 rounded-full text-sm hover:bg-white/8 transition-colors"
          >
            Early Access <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
