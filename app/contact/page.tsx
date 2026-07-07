"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail, Phone, MapPin, Send, ShieldCheck, ArrowRight, ChevronDown, Check, Sparkles
} from "lucide-react";

const field =
  "w-full rounded-2xl border border-gray-200 bg-white px-5 py-3.5 text-[15px] text-namo-black " +
  "placeholder:text-gray-400 outline-none transition-all shadow-sm hover:border-gray-300 " +
  "focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10 focus:shadow-md";

const labelCls = "block text-sm font-bold text-namo-black mb-2";
const Req = () => <span className="text-accent ml-0.5">*</span>;

const contactRows = [
  { icon: <Mail size={20} />,   label: "Email",    value: "info@namolabs.in" },
  { icon: <Phone size={20} />,  label: "Phone",    value: "+91 6381141795" },
  { icon: <MapPin size={20} />, label: "Location", value: "Chennai, Tamil Nadu, India" },
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
    setSent(true);
  };

  const requiredFields = ["name", "email", "phone", "message"];
  const isComplete = requiredFields.every((f) => formData[f as keyof typeof formData].trim() !== "");
  const hasErrors = Object.values(errors).some((err) => err !== "");
  const isSubmitDisabled = !isComplete || hasErrors;

  const FieldError = ({ name }: { name: string }) => {
    if (touched[name] && errors[name]) {
      return <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="mt-2 text-[13px] font-semibold text-rose-500">{errors[name]}</motion.p>;
    }
    return null;
  };

  const getInputCls = (name: string) => {
    return `${field} ${touched[name] && errors[name] ? "border-rose-300 focus:border-rose-500 focus:ring-rose-500/10 shadow-rose-500/5" : ""}`;
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-5 pt-32 pb-24 sm:px-8">
      {/* ── Flowing blue-wave background ── */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f4f6ff] via-white to-white" />
        <div
          className="absolute inset-0 bg-no-repeat opacity-60"
          style={{
            backgroundImage: "url('/hero-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center bottom",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.75) 40%, rgba(255,255,255,0.4) 62%, rgba(255,255,255,0.05) 85%, rgba(255,255,255,0) 100%)",
          }}
        />
      </div>

      <div className="relative w-full max-w-[1100px] mx-auto grid gap-16 lg:grid-cols-[420px_1fr] items-center">
        {/* ── Left — invitation + details ── */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-namo-black leading-[1.05]">
            Let&apos;s build <br />
            what&apos;s <span className="text-accent italic pr-2">next,</span> <br />
            together.
          </h1>

          <p className="mt-6 max-w-sm text-lg leading-relaxed text-gray-600">
            Have a question, partnership idea, or just want to say hello? We&apos;d love to hear from you.
          </p>

          <div className="mt-12 space-y-8 max-w-sm">
            {contactRows.map((r) => (
              <div key={r.label} className="flex items-center gap-5 group">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm border border-gray-100 text-gray-400 group-hover:text-accent group-hover:scale-110 group-hover:border-accent/20 transition-all duration-300">
                  {r.icon}
                </div>
                <div>
                  <p className="text-sm font-bold text-namo-black">{r.label}</p>
                  <p className="mt-1 text-[15px] text-gray-500">{r.value}</p>
                </div>
              </div>
            ))}

            <div className="flex items-center gap-5 group">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent-light text-accent shadow-sm border border-accent/10 group-hover:scale-110 transition-all duration-300">
                <Send size={20} />
              </div>
              <div>
                <p className="text-sm font-bold text-namo-black">We respond fast</p>
                <p className="mt-1 text-[15px] text-gray-500">Replies usually within 24 hours.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Right — message form ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-[32px] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.04)] border border-gray-100 sm:p-12 relative overflow-hidden"
        >
          {sent ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex min-h-[500px] flex-col items-center justify-center text-center"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-[24px] bg-green-50 text-green-500 mb-6 shadow-sm border border-green-100">
                <Check size={36} strokeWidth={2.5} />
              </div>
              <h2 className="text-3xl font-bold text-namo-black mb-3">Message sent!</h2>
              <p className="max-w-sm text-base leading-relaxed text-gray-500 mb-8">
                Thanks for reaching out — our team has received your message and will get back to you shortly.
              </p>
              <button
                onClick={() => {
                  setSent(false);
                  setFormData({ name: "", email: "", phone: "", company: "", message: "" });
                  setTouched({});
                  setErrors({});
                }}
                className="inline-flex items-center gap-2 rounded-full bg-gray-50 px-6 py-3 text-sm font-bold text-namo-black hover:bg-gray-100 transition-colors"
              >
                Send another message <ArrowRight size={16} />
              </button>
            </motion.div>
          ) : (
            <>
              <div className="mb-10 flex items-center gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent text-white shadow-lg shadow-accent/20">
                  <Send size={22} />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-namo-black">Send us a message</h2>
                  <p className="mt-1.5 text-base text-gray-500">
                    Fill in the details below.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className={labelCls}>Full Name<Req /></label>
                  <input id="name" name="name" required placeholder="John Doe" className={getInputCls("name")} value={formData.name} onChange={handleChange} onBlur={handleBlur} />
                  <FieldError name="name" />
                </div>

                <div>
                  <label htmlFor="email" className={labelCls}>Work Email<Req /></label>
                  <input id="email" name="email" type="email" required placeholder="john@company.com" className={getInputCls("email")} value={formData.email} onChange={handleChange} onBlur={handleBlur} />
                  <FieldError name="email" />
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className={labelCls}>Phone Number<Req /></label>
                    <div className="flex gap-2">
                      <div className="relative shrink-0">
                        <select
                          aria-label="Country code"
                          defaultValue="+91"
                          className="h-full appearance-none rounded-2xl border border-gray-200 bg-white py-3.5 pl-10 pr-8 text-[15px] font-medium text-namo-black outline-none transition-all focus:border-accent focus:ring-4 focus:ring-accent/10 shadow-sm hover:border-gray-300"
                        >
                          <option value="+91">+91</option>
                          <option value="+1">+1</option>
                          <option value="+44">+44</option>
                          <option value="+65">+65</option>
                        </select>
                        <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[15px]">🇮🇳</span>
                        <ChevronDown size={14} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      </div>
                      <input id="phone" name="phone" type="tel" required placeholder="6381141795" className={getInputCls("phone")} value={formData.phone} onChange={handleChange} onBlur={handleBlur} />
                    </div>
                    <FieldError name="phone" />
                  </div>
                  <div>
                    <label htmlFor="company" className={labelCls}>Company</label>
                    <input id="company" name="company" placeholder="Your company" className={getInputCls("company")} value={formData.company} onChange={handleChange} onBlur={handleBlur} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label htmlFor="message" className={labelCls} style={{ marginBottom: 0 }}>Message<Req /></label>
                    <span className="text-xs font-bold text-gray-400">{formData.message.length} / 500</span>
                  </div>
                  <textarea id="message" name="message" required rows={4} placeholder="How can we help you?" className={`${getInputCls("message")} resize-none`} value={formData.message} onChange={handleChange} onBlur={handleBlur} />
                  <FieldError name="message" />
                </div>

                <div className="flex flex-col gap-6 pt-4 sm:flex-row sm:items-center sm:justify-between border-t border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gray-50 text-gray-400">
                      <ShieldCheck size={18} />
                    </div>
                    <p className="text-[13px] leading-snug text-gray-500">
                      <span className="font-bold text-namo-black">Privacy First.</span>
                      <br />
                      Your data is secure.
                    </p>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitDisabled}
                    className={`inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-[15px] font-bold transition-all duration-300 w-full sm:w-auto ${
                      isSubmitDisabled 
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed" 
                        : "bg-accent text-white hover:bg-[#324ce6] shadow-lg shadow-accent/25 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/30"
                    }`}
                  >
                    Send Message <ArrowRight size={18} />
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

