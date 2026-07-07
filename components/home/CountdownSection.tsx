"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, Building, User } from "lucide-react";

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
    <div className="relative overflow-hidden bg-white shadow-[0_8px_40px_rgb(0,0,0,0.06)] rounded-[28px] min-w-[120px] sm:min-w-[140px] py-8 px-4 text-center flex flex-col items-center justify-center border border-gray-100/50">
      <motion.span
        key={value}
        className="text-5xl sm:text-6xl font-[700] text-namo-black tabular-nums block tracking-tight mb-2"
      >
        {String(value).padStart(2, "0")}
      </motion.span>
      <span className="text-[11px] tracking-[0.2em] text-accent uppercase font-bold">
        {label}
      </span>
    </div>
  );
}

const Colon = () => (
  <div className="text-4xl text-accent font-black pb-4">:</div>
);

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedForm, setSelectedForm] = useState<"enterprise" | "developer" | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In a real app, send data to backend here
    setTimeout(() => {
      setIsModalOpen(false);
      setTimeout(() => {
        setSelectedForm(null);
        setIsSubmitted(false);
      }, 300); // reset after animation
    }, 2500);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedForm(null);
      setIsSubmitted(false);
    }, 300);
  };

  return (
    <section id="qscl-timer" className="py-32 relative overflow-hidden" style={{
      background: "linear-gradient(to bottom, #FAFAFA 0%, transparent 100px), radial-gradient(160% 160% at 50% -20%, #ffffff 40%, #e0e7ff 100%)",
    }}>

      {/* Soft glow orbs */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-200/40 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-indigo-100/50 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 text-center z-10">

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
          className="text-3xl sm:text-5xl md:text-6xl font-[700] text-namo-black mb-14 leading-[1.1] tracking-tight max-w-4xl mx-auto [text-wrap:balance]"
        >
          The Future of Secure Communication is{" "}
          <span className="text-accent">
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
          <img
            src="/qscl-logo-transparent.png"
            alt="QSCL Brand Logo"
            className="h-28 sm:h-40 object-contain flex-shrink-0"
          />
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-16"
        >
          <LightUnit value={days}    label="Days" />
          <LightColon />
          <LightUnit value={hours}   label="Hours" />
          <LightColon />
          <LightUnit value={minutes} label="Minutes" />
          <LightColon />
          <LightUnit value={seconds} label="Seconds" />
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.5 }}
        >
          <button
            onClick={() => setIsModalOpen(true)}
            className="group inline-flex items-center justify-center gap-3 bg-[#0A0A0A] text-white font-medium px-9 py-4 rounded-full text-[15px] hover:bg-gray-800 transition-colors shadow-lg shadow-blue-900/10"
          >
            Request Early Access
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>

      </div>

      {/* Early Access Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
            />
            
            {/* Modal Content */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-2xl bg-white rounded-[32px] shadow-2xl p-8 sm:p-12 relative pointer-events-auto overflow-hidden max-h-[90vh] overflow-y-auto"
              >
                {/* Close Button */}
                <button
                  onClick={handleClose}
                  className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-500 z-10"
                >
                  <X size={24} />
                </button>

                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div 
                      key="submitted"
                      initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                      exit={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                      transition={{ duration: 0.4 }}
                      className="flex flex-col items-center justify-center py-16 text-center"
                    >
                      <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-6 shadow-sm">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      <h3 className="text-3xl font-bold text-namo-black mb-3 tracking-tight">Request Received</h3>
                      <p className="text-gray-500 text-[15px]">Thank you for your interest. Our team will be in touch shortly.</p>
                    </motion.div>
                  ) : !selectedForm ? (
                    <motion.div
                      key="selection"
                      initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="mb-10 text-center">
                        <h3 className="text-3xl font-bold text-namo-black mb-3 tracking-tight">Adopt QSCL Early</h3>
                        <p className="text-gray-500 text-[15px]">
                          Join the exclusive early access program to secure your infrastructure with Quantum Secure Communication Layer before the public launch.
                        </p>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        {/* Enterprise Card */}
                        <div 
                          onClick={() => setSelectedForm("enterprise")}
                          className="group relative overflow-hidden rounded-[24px] border border-gray-100 p-6 sm:p-8 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 transition-all bg-gradient-to-b from-white to-gray-50/50 cursor-pointer"
                        >
                          <div className="w-14 h-14 bg-blue-50 text-accent rounded-full flex items-center justify-center mb-6">
                            <Building size={26} />
                          </div>
                          <h4 className="text-xl font-bold text-namo-black mb-2">For Enterprises</h4>
                          <p className="text-sm text-gray-500 mb-8 leading-relaxed">
                            Integrate QSCL into your enterprise architecture. Dedicated support, custom integrations, and priority onboarding.
                          </p>
                          <span className="inline-flex items-center gap-2 text-[14px] font-semibold text-accent group-hover:text-blue-700 transition-colors">
                            Apply as Enterprise <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                          </span>
                        </div>

                        {/* Individual/Developer Card */}
                        <div 
                          onClick={() => setSelectedForm("developer")}
                          className="group relative overflow-hidden rounded-[24px] border border-gray-100 p-6 sm:p-8 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 transition-all bg-gradient-to-b from-white to-gray-50/50 cursor-pointer"
                        >
                          <div className="w-14 h-14 bg-blue-50 text-accent rounded-full flex items-center justify-center mb-6">
                            <User size={26} />
                          </div>
                          <h4 className="text-xl font-bold text-namo-black mb-2">For Developers</h4>
                          <p className="text-sm text-gray-500 mb-8 leading-relaxed">
                            Get early access to our SDKs and APIs. Build quantum-secure applications on top of the TierraTrace network.
                          </p>
                          <span className="inline-flex items-center gap-2 text-[14px] font-semibold text-accent group-hover:text-blue-700 transition-colors">
                            Join Waitlist <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0, x: 20, filter: "blur(4px)" }}
                      animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, x: -20, filter: "blur(4px)" }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="mb-8">
                        <button 
                          onClick={() => setSelectedForm(null)}
                          className="text-sm text-gray-400 hover:text-namo-black mb-5 inline-flex items-center gap-2 transition-colors font-medium"
                        >
                          ← Back to options
                        </button>
                        <h3 className="text-3xl font-bold text-namo-black mb-2 tracking-tight">
                          {selectedForm === "enterprise" ? "Enterprise Early Access" : "Developer Waitlist"}
                        </h3>
                        <p className="text-gray-500 text-[15px]">
                          {selectedForm === "enterprise" 
                            ? "Tell us about your organization and how you plan to use QSCL." 
                            : "Tell us about yourself and what you're building."}
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-2 gap-5">
                          <div className="space-y-2">
                            <label className="text-[11px] font-bold uppercase tracking-widest text-gray-500 ml-1">First Name *</label>
                            <input required type="text" className="w-full px-5 py-3.5 rounded-[16px] border border-gray-200 focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all bg-gray-50/50 text-[15px]" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-[11px] font-bold uppercase tracking-widest text-gray-500 ml-1">Last Name *</label>
                            <input required type="text" className="w-full px-5 py-3.5 rounded-[16px] border border-gray-200 focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all bg-gray-50/50 text-[15px]" />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-[11px] font-bold uppercase tracking-widest text-gray-500 ml-1">Work Email *</label>
                          <input required type="email" className="w-full px-5 py-3.5 rounded-[16px] border border-gray-200 focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all bg-gray-50/50 text-[15px]" />
                        </div>

                        {selectedForm === "enterprise" && (
                          <>
                            <div className="space-y-2">
                              <label className="text-[11px] font-bold uppercase tracking-widest text-gray-500 ml-1">Company Name *</label>
                              <input required type="text" className="w-full px-5 py-3.5 rounded-[16px] border border-gray-200 focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all bg-gray-50/50 text-[15px]" />
                            </div>
                            <div className="space-y-2">
                              <label className="text-[11px] font-bold uppercase tracking-widest text-gray-500 ml-1">Job Title *</label>
                              <input required type="text" className="w-full px-5 py-3.5 rounded-[16px] border border-gray-200 focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all bg-gray-50/50 text-[15px]" />
                            </div>
                          </>
                        )}

                        {selectedForm === "developer" && (
                          <div className="space-y-2">
                            <label className="text-[11px] font-bold uppercase tracking-widest text-gray-500 ml-1">GitHub Profile (Optional)</label>
                            <input type="url" placeholder="https://github.com/..." className="w-full px-5 py-3.5 rounded-[16px] border border-gray-200 focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all bg-gray-50/50 text-[15px]" />
                          </div>
                        )}

                        <div className="space-y-2 pt-1">
                          <label className="text-[11px] font-bold uppercase tracking-widest text-gray-500 ml-1">
                            {selectedForm === "enterprise" ? "Expected Use Case *" : "What are you building? *"}
                          </label>
                          <textarea required rows={3} className="w-full px-5 py-4 rounded-[16px] border border-gray-200 focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all bg-gray-50/50 resize-none text-[15px]"></textarea>
                        </div>

                        <button type="submit" className="w-full bg-[#0A0A0A] text-white font-medium py-4 rounded-[16px] mt-6 hover:bg-gray-800 transition-colors shadow-lg shadow-black/5 text-[15px]">
                          Submit Request
                        </button>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}

function LightUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="relative overflow-hidden bg-white rounded-[28px] min-w-[120px] sm:min-w-[140px] py-8 px-4 text-center flex flex-col items-center justify-center border border-blue-50 shadow-[0_8px_40px_rgb(59,91,255,0.06)]">
      <motion.span
        key={value}
        className="text-5xl sm:text-6xl font-[700] text-namo-black tabular-nums block tracking-tight mb-2"
      >
        {String(value).padStart(2, "0")}
      </motion.span>
      <span className="text-[11px] tracking-[0.2em] text-accent uppercase font-bold">
        {label}
      </span>
    </div>
  );
}

const LightColon = () => (
  <div className="text-4xl text-accent font-black pb-4">:</div>
);
