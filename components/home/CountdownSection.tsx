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
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setApiError("");

    const formData = new FormData(e.currentTarget);
    const firstName = formData.get("firstName") || "";
    const lastName = formData.get("lastName") || "";
    const name = `${firstName} ${lastName}`.trim();
    
    const data = {
      formType: 'early_access',
      name: name,
      email: formData.get("email"),
      company: formData.get("company") || "N/A",
      message: `Form Type: ${selectedForm}\nJob Title: ${formData.get("jobTitle") || "N/A"}\nGitHub: ${formData.get("github") || "N/A"}\nUse Case: ${formData.get("message")}`
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      if (res.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsModalOpen(false);
          setTimeout(() => {
            setSelectedForm(null);
            setIsSubmitted(false);
          }, 300);
        }, 2500);
      } else {
        const errData = await res.json();
        setApiError(errData.error || "Something went wrong.");
      }
    } catch (err) {
      setApiError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
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
          className="flex flex-row items-center justify-center gap-4 mb-10"
        >
          <img
            src="/qscl-logo-transparent.png"
            alt="QSCL Brand Logo"
            className="h-24 sm:h-32 object-contain flex-shrink-0"
          />
          <h3 className="text-3xl sm:text-4xl font-black text-namo-black tracking-[0.2em] flex items-start uppercase pl-2">
            QSCL<span className="text-sm sm:text-base font-bold ml-1 -mt-1 sm:-mt-2 opacity-60">TM</span>
          </h3>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-16"
        >
          <FlipUnit value={days}    label="Days" />
          <FlipColon />
          <FlipUnit value={hours}   label="Hours" />
          <FlipColon />
          <FlipUnit value={minutes} label="Minutes" />
          <FlipColon />
          <FlipUnit value={seconds} label="Seconds" />
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
                            <input name="firstName" required type="text" className="w-full px-5 py-3.5 rounded-[16px] border border-gray-200 focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all bg-gray-50/50 text-[15px]" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-[11px] font-bold uppercase tracking-widest text-gray-500 ml-1">Last Name *</label>
                            <input name="lastName" required type="text" className="w-full px-5 py-3.5 rounded-[16px] border border-gray-200 focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all bg-gray-50/50 text-[15px]" />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-[11px] font-bold uppercase tracking-widest text-gray-500 ml-1">Work Email *</label>
                          <input name="email" required type="email" className="w-full px-5 py-3.5 rounded-[16px] border border-gray-200 focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all bg-gray-50/50 text-[15px]" />
                        </div>

                        {selectedForm === "enterprise" && (
                          <>
                            <div className="space-y-2">
                              <label className="text-[11px] font-bold uppercase tracking-widest text-gray-500 ml-1">Company Name *</label>
                              <input name="company" required type="text" className="w-full px-5 py-3.5 rounded-[16px] border border-gray-200 focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all bg-gray-50/50 text-[15px]" />
                            </div>
                            <div className="space-y-2">
                              <label className="text-[11px] font-bold uppercase tracking-widest text-gray-500 ml-1">Job Title *</label>
                              <input name="jobTitle" required type="text" className="w-full px-5 py-3.5 rounded-[16px] border border-gray-200 focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all bg-gray-50/50 text-[15px]" />
                            </div>
                          </>
                        )}

                        {selectedForm === "developer" && (
                          <div className="space-y-2">
                            <label className="text-[11px] font-bold uppercase tracking-widest text-gray-500 ml-1">GitHub Profile (Optional)</label>
                            <input name="github" type="url" placeholder="https://github.com/..." className="w-full px-5 py-3.5 rounded-[16px] border border-gray-200 focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all bg-gray-50/50 text-[15px]" />
                          </div>
                        )}

                        <div className="space-y-2 pt-1">
                          <label className="text-[11px] font-bold uppercase tracking-widest text-gray-500 ml-1">
                            {selectedForm === "enterprise" ? "Expected Use Case *" : "What are you building? *"}
                          </label>
                          <textarea name="message" required rows={3} className="w-full px-5 py-4 rounded-[16px] border border-gray-200 focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all bg-gray-50/50 resize-none text-[15px]"></textarea>
                        </div>

                        <button disabled={loading} type="submit" className="w-full bg-[#0A0A0A] text-white font-medium py-4 rounded-[16px] mt-6 hover:bg-gray-800 transition-colors shadow-lg shadow-black/5 text-[15px] disabled:opacity-70 disabled:cursor-not-allowed">
                          {loading ? 'Submitting...' : 'Submit Request'}
                        </button>
                        {apiError && <p className="text-red-500 text-[13px] text-center">{apiError}</p>}
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

function FlipUnit({ value, label }: { value: number; label: string }) {
  const formattedValue = String(value).padStart(2, "0");

  return (
    <div className="flex flex-col items-center gap-3">
      <div 
        className="relative w-20 sm:w-28 h-24 sm:h-32 bg-[#121212] rounded-[12px] shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col justify-center items-center overflow-hidden"
        style={{
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1), 0 20px 50px rgba(0,0,0,0.3), 0 10px 20px rgba(0,0,0,0.2)"
        }}
      >
        {/* Flip Clock Cards Background (Top and Bottom halves) */}
        <div className="absolute inset-0 flex flex-col">
          <div className="h-1/2 bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a]" />
          <div className="h-1/2 bg-gradient-to-b from-[#111] to-[#0a0a0a]" />
        </div>

        {/* Middle mechanical split line */}
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-black z-20 -translate-y-1/2 shadow-[0_1px_1px_rgba(255,255,255,0.05)]" />
        
        {/* Hinge shadows */}
        <div className="absolute top-1/2 left-0 w-2 h-4 bg-gradient-to-r from-black to-transparent z-30 -translate-y-1/2 opacity-50" />
        <div className="absolute top-1/2 right-0 w-2 h-4 bg-gradient-to-l from-black to-transparent z-30 -translate-y-1/2 opacity-50" />

        <AnimatePresence mode="popLayout">
          <motion.div
            key={value}
            initial={{ rotateX: -90, filter: "brightness(0.5)", opacity: 0 }}
            animate={{ rotateX: 0, filter: "brightness(1)", opacity: 1 }}
            exit={{ rotateX: 90, filter: "brightness(0.5)", opacity: 0 }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
            className="absolute inset-0 flex items-center justify-center z-10 perspective-[400px]"
          >
            <span 
              className="text-5xl sm:text-7xl font-bold tabular-nums text-white"
              style={{
                textShadow: "0 2px 4px rgba(0,0,0,0.5)"
              }}
            >
              {formattedValue}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>
      <span className="text-[11px] tracking-[0.2em] text-accent uppercase font-bold">
        {label}
      </span>
    </div>
  );
}

const FlipColon = () => (
  <div className="flex flex-col gap-3 pb-8">
    <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-accent/80 shadow-[0_0_10px_rgba(59,91,255,0.5)]" />
    <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-accent/80 shadow-[0_0_10px_rgba(59,91,255,0.5)]" />
  </div>
);
