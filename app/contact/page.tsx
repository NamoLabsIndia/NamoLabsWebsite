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
  { icon: <Mail size={18} />,   label: "Email",    value: "info@namolabs.in" },
  { icon: <Phone size={18} />,  label: "Phone",    value: "+91 98765 43210" },
  { icon: <MapPin size={18} />, label: "Location", value: "Chennai, Tamil Nadu, India" },
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateField = (name: string, value: string) => {
    let error = "";
    if (name === "email" && value) {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error = "Please enter a valid email address.";
      }
    }
    if (name === "phone" && value) {
      const digits = value.replace(/\D/g, "");
      if (digits.length > 0 && digits.length < 7) {
        error = "Please enter a valid phone number.";
      }
    }
    return error;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    // 500 char limit for message
    if (name === "message" && value.length > 500) return;
    
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Forgiving formatting: backend can take cleanPhone
    const cleanPhone = formData.phone.replace(/\D/g, "");
    console.log("Submitting clean phone:", cleanPhone);
    setSent(true);
  };

  const requiredFields = ["name", "email", "phone", "message"];
  const isComplete = requiredFields.every((f) => formData[f as keyof typeof formData].trim() !== "");
  const hasErrors = Object.values(errors).some((err) => err !== "");
  const isSubmitDisabled = !isComplete || hasErrors;

  const FieldError = ({ name }: { name: string }) => {
    if (touched[name] && errors[name]) {
      return <p className="mt-1.5 text-[12px] font-medium text-rose-500">{errors[name]}</p>;
    }
    return null;
  };

  const getInputCls = (name: string) => {
    return `${field} ${touched[name] && errors[name] ? "border-rose-300 focus:border-rose-500 focus:ring-rose-500/10" : ""}`;
  };

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
          <span className="inline-flex items-center rounded-full border border-gray-200/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-600">
            Get in touch
          </span>

          <h1 className="mt-8 text-5xl md:text-6xl font-semibold tracking-tighter leading-[0.95] text-namo-black">
            Let&apos;s build
            <br />
            what&apos;s <span className="text-accent italic pr-2">next,</span>
            <br />
            together.
          </h1>

          <p className="mt-6 max-w-sm text-base leading-relaxed text-gray-600">
            Have a question, partnership idea, or just want to say hello?
            We&apos;d love to hear from you.
          </p>

          <div className="mt-10 space-y-8 max-w-sm">
            {/* Contact Details */}
            {contactRows.map((r) => (
              <div key={r.label} className="flex items-start gap-4">
                <div className="mt-0.5 text-gray-400">
                  {r.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold text-namo-black leading-none">{r.label}</p>
                  <p className="mt-1.5 text-sm text-gray-500">{r.value}</p>
                </div>
              </div>
            ))}

            {/* Response time */}
            <div className="flex items-start gap-4 pt-2">
              <div className="mt-0.5 text-accent">
                <Send size={18} />
              </div>
              <div>
                <p className="text-sm font-semibold text-namo-black leading-none">We respond fast</p>
                <p className="mt-1.5 text-sm text-gray-500">Our team typically replies within 24 hours.</p>
              </div>
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
                onClick={() => {
                  setSent(false);
                  setFormData({ name: "", email: "", phone: "", company: "", message: "" });
                  setTouched({});
                  setErrors({});
                }}
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

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className={labelCls}>Name<Req /></label>
                  <input id="name" name="name" required placeholder="Enter your full name" className={getInputCls("name")} value={formData.name} onChange={handleChange} onBlur={handleBlur} />
                  <FieldError name="name" />
                </div>

                <div>
                  <label htmlFor="email" className={labelCls}>Work Email<Req /></label>
                  <input id="email" name="email" type="email" required placeholder="you@company.com" className={getInputCls("email")} value={formData.email} onChange={handleChange} onBlur={handleBlur} />
                  <FieldError name="email" />
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
                      <input id="phone" name="phone" type="tel" required placeholder="98765 43210" className={getInputCls("phone")} value={formData.phone} onChange={handleChange} onBlur={handleBlur} />
                    </div>
                    <FieldError name="phone" />
                  </div>
                  <div>
                    <label htmlFor="company" className={labelCls}>Company</label>
                    <input id="company" name="company" placeholder="Your company name" className={getInputCls("company")} value={formData.company} onChange={handleChange} onBlur={handleBlur} />
                  </div>
                </div>



                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label htmlFor="message" className="block text-[13px] font-medium text-namo-black">Message<Req /></label>
                    <span className="text-[11px] font-medium text-gray-400">{formData.message.length} / 500</span>
                  </div>
                  <textarea id="message" name="message" required rows={4} placeholder="How can we help you?" className={`${getInputCls("message")} resize-none`} value={formData.message} onChange={handleChange} onBlur={handleBlur} />
                  <FieldError name="message" />
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
                    disabled={isSubmitDisabled}
                    className={`inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-colors ${
                      isSubmitDisabled 
                        ? "bg-gray-200 text-gray-400 cursor-not-allowed" 
                        : "bg-namo-black text-white hover:bg-gray-800"
                    }`}
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
