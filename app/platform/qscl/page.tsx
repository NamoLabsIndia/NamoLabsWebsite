"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Timer } from "lucide-react";

export default function QsclPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Target date: Jan 1, 2027
    const targetDate = new Date("2027-01-01T00:00:00Z").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-white min-h-screen flex items-center justify-center pt-[104px]">
      <div className="text-center px-6 max-w-3xl w-full">
        <div className="w-20 h-20 bg-[#f4f7ff] text-accent rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm">
          <Timer size={32} strokeWidth={1.5} />
        </div>
        
        <p className="text-[12px] font-bold tracking-[0.15em] text-accent uppercase mb-4">
          QSCL™ EARLY ACCESS
        </p>
        
        <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold text-namo-black tracking-tight mb-6 leading-tight">
          The post-quantum future <br className="hidden md:block"/> begins in
        </h1>

        <div className="flex items-center justify-center gap-4 md:gap-8 my-16">
          <TimeUnit value={timeLeft.days} label="Days" />
          <div className="text-3xl md:text-5xl font-light text-gray-300 pb-8">:</div>
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <div className="text-3xl md:text-5xl font-light text-gray-300 pb-8">:</div>
          <TimeUnit value={timeLeft.minutes} label="Minutes" />
          <div className="text-3xl md:text-5xl font-light text-gray-300 pb-8">:</div>
          <TimeUnit value={timeLeft.seconds} label="Seconds" />
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-namo-black text-white font-semibold px-8 py-4 rounded-full text-[14px] hover:bg-gray-800 transition-colors shadow-lg shadow-black/10"
        >
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </div>
    </main>
  );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl md:text-6xl lg:text-7xl font-bold text-namo-black tracking-tighter w-16 md:w-24 flex items-center justify-center">
        {value.toString().padStart(2, '0')}
      </div>
      <div className="text-[11px] md:text-[13px] font-bold text-gray-400 uppercase tracking-widest mt-4">
        {label}
      </div>
    </div>
  );
}
