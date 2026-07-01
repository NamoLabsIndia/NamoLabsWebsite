"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail, Phone, MapPin, Send, ShieldCheck, ArrowRight, ChevronDown, Check,
} from "lucide-react";

const field =
  "w-full rounded-xl border border-gray-200 bg-gray-50/60 px-4 py-3 text-sm text-namo-black " +
  "placeholder:text-gray-400 outline-none transition focus:border-accent focus:bg-white " +
  "focus:ring-4 focus:ring-accent/10";

const labelCls = "block text-[13px] font-medium text-namo-black mb-1.5";
const Req = () => <span className="text-rose-500"> *</span>;

const contactRows = [
  { icon: <Mail size={18} />,   label: "Email",    value: "hello@namolabs.in" },
  { icon: <Phone size={18} />,  label: "Phone",    value: "+91 98765 43210" },
  { icon: <MapPin size={18} />, label: "Location", value: "Chennai, Tamil Nadu, India" },
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#f5f6ff] via-white to-white px-5 pt-32 pb-20 sm:px-8">
      {/* faint dotted texture, lower-left — echoes the PDF */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 h-[420px] w-[520px] opacity-[0.5]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(59,91,255,0.22) 1px, transparent 1.4px)",
          backgroundSize: "16px 16px",
          maskImage: "radial-gradient(ellipse at bottom left, black, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at bottom left, black, transparent 70%)",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[400px_1fr] lg:gap-16">
        {/* ── Left — invitation + details ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center rounded-md bg-accent-light px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
            Get in touch
          </span>

          <h1 className="mt-6 text-5xl font-black leading-[1.05] tracking-tight text-namo-black">
            Let&apos;s build
            <br />
            what&apos;s <span className="text-accent">next,</span>
            <br />
            together.
          </h1>

          <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-gray-500">
            Have a question, partnership idea, or just want to say hello?
            We&apos;d love to hear from you.
          </p>

          <div className="mt-9 space-y-5">
            {contactRows.map((r) => (
              <div key={r.label} className="flex items-center gap-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-accent-light text-accent">
                  {r.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold text-namo-black">{r.label}</p>
                  <p className="text-sm text-gray-500">{r.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-9 flex max-w-sm items-start gap-3 rounded-2xl bg-white/70 p-5 ring-1 ring-gray-100">
            <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-accent-light text-accent">
              <Send size={16} />
            </div>
            <div>
              <p className="text-sm font-semibold text-namo-black">We respond fast</p>
              <p className="mt-0.5 text-[13px] leading-relaxed text-gray-500">
                Our team typically replies within 24 hours.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── Right — message form ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-3xl bg-white p-7 shadow-xl shadow-black/[0.04] ring-1 ring-gray-100 sm:p-9"
        >
          {sent ? (
            <div className="flex min-h-[520px] flex-col items-center justify-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent-light text-accent">
                <Check size={30} />
              </div>
              <h2 className="mt-6 text-2xl font-bold text-namo-black">Message sent</h2>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-gray-500">
                Thanks for reaching out — our team will get back to you within 24 hours.
              </p>
              <button
                onClick={() => setSent(false)}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
              >
                Send another message <ArrowRight size={14} />
              </button>
            </div>
          ) : (
            <>
              {/* Card header */}
              <div className="mb-8 flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-accent-light text-accent">
                  <Send size={20} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-namo-black">Send us a message</h2>
                  <p className="mt-1 text-sm text-gray-500">
                    Fill in the details below and we&apos;ll get back to you.
                  </p>
                </div>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-5"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className={labelCls}>First Name<Req /></label>
                    <input id="firstName" name="firstName" required placeholder="Enter your first name" className={field} />
                  </div>
                  <div>
                    <label htmlFor="lastName" className={labelCls}>Last Name<Req /></label>
                    <input id="lastName" name="lastName" required placeholder="Enter your last name" className={field} />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className={labelCls}>Work Email<Req /></label>
                  <input id="email" name="email" type="email" required placeholder="you@company.com" className={field} />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className={labelCls}>Phone Number<Req /></label>
                    <div className="flex gap-2">
                      <div className="relative">
                        <select
                          aria-label="Country code"
                          defaultValue="+91"
                          className="h-full appearance-none rounded-xl border border-gray-200 bg-gray-50/60 py-3 pl-9 pr-7 text-sm text-namo-black outline-none focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10"
                        >
                          <option value="+91">+91</option>
                          <option value="+1">+1</option>
                          <option value="+44">+44</option>
                          <option value="+65">+65</option>
                        </select>
                        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm">🇮🇳</span>
                        <ChevronDown size={13} className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400" />
                      </div>
                      <input id="phone" name="phone" type="tel" required placeholder="98765 43210" className={field} />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="company" className={labelCls}>Company</label>
                    <input id="company" name="company" placeholder="Your company name" className={field} />
                  </div>
                </div>

                <div>
                  <label htmlFor="role" className={labelCls}>Role / Title<Req /></label>
                  <input id="role" name="role" required placeholder="e.g., CEO, VP Product, Engineer" className={field} />
                </div>

                <div>
                  <label htmlFor="message" className={labelCls}>Message<Req /></label>
                  <textarea id="message" name="message" required rows={4} placeholder="How can we help you?" className={`${field} resize-none`} />
                </div>

                <div className="flex flex-col items-start justify-between gap-4 pt-1 sm:flex-row sm:items-center">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-accent-light text-accent">
                      <ShieldCheck size={15} />
                    </div>
                    <p className="text-[12px] leading-tight text-gray-500">
                      <span className="font-semibold text-namo-black">We respect your privacy.</span>
                      <br />
                      Your information will never be shared.
                    </p>
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full bg-namo-black px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
                  >
                    Send Message <ArrowRight size={15} />
                  </button>
                </div>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
