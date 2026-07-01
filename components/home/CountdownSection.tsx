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
      <div className="relative overflow-hidden bg-white/70 backdrop-blur-xl border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl min-w-[100px] sm:min-w-[120px] py-6 px-4 text-center">
        {/* Subtle inner top highlight */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-80" />
        <motion.span
          key={value}
          initial={{ opacity: 0, y: -4, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="text-5xl sm:text-6xl font-black text-namo-black tabular-nums block tracking-tight"
        >
          {String(value).padStart(2, "0")}
        </motion.span>
      </div>
      <span className="mt-4 text-[11px] tracking-[0.2em] text-gray-500 uppercase font-bold">
        {label}
      </span>
    </div>
  );
}

// Triquetra / Celtic knot SVG matching the QSCL brand mark
function TriquetraSVG() {
  return (
    <img
      src="/qscl-logo-transparent.png"
      alt="QSCL triquetra logo"
      className="w-16 h-16 sm:w-20 sm:h-20 object-contain flex-shrink-0 drop-shadow-sm"
    />
  );
}

export default function CountdownSection() {
  const { days, hours, minutes, seconds } = useCountdown(TARGET_DATE);

  return (
    <section className="py-32 relative overflow-hidden" style={{
      // Linear gradient at the top smoothly fades the #FAFAFA from the previous section into the white center of the radial gradient
      background: "linear-gradient(to bottom, #FAFAFA 0%, transparent 100px), radial-gradient(160% 160% at 50% -20%, #ffffff 40%, #6366f1 100%)",
    }}>



      {/* Soft glow orbs */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-200/40 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-blue-100/30 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[12px] font-bold tracking-[0.3em] text-accent uppercase mb-6"
        >
          Building the Future
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl font-black text-namo-black mb-14 leading-[1.1] tracking-tight"
        >
          The Future of Secure <br className="hidden sm:block" />
          Communication is{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-indigo-600">
            Almost Here.
          </span>
        </motion.h2>

        {/* QSCL Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-5 mb-16"
        >
          <TriquetraSVG />
          <span className="text-6xl sm:text-7xl font-black text-namo-black tracking-tighter leading-none">
            QSCL<sup className="text-gray-400 text-2xl font-medium ml-1 align-super">™</sup>
          </span>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-start justify-center gap-4 sm:gap-8 mb-16"
        >
          <Unit value={days}    label="Days" />
          <Unit value={hours}   label="Hours" />
          <Unit value={minutes} label="Minutes" />
          <Unit value={seconds} label="Seconds" />
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.5 }}
        >
          <Link
            href="/platform/qscl"
            className="group relative inline-flex items-center justify-center gap-3 bg-namo-black text-white font-bold px-10 py-4.5 rounded-full text-[15px] transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(99,102,241,0.4)] overflow-hidden"
          >
            {/* Button hover glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent via-indigo-500 to-accent opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
            <span className="relative z-10 py-1">Early Access</span>
            <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
