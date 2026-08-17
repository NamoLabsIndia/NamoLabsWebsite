"use client";

import React, { useState } from "react";
import { ArrowRight, Mail, CheckCircle2 } from "lucide-react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanEmail = email.trim();
    if (!cleanEmail || !cleanEmail.includes("@")) {
      setErrorMsg("Please enter a valid email address");
      return;
    }

    setErrorMsg("");
    setIsSubmitting(true);

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Newsletter Subscriber",
          email: cleanEmail,
          subject: "Research Newsletter Subscription",
          message: `Please add ${cleanEmail} to the Namo Labs Research Newsletter mailing list.`,
        }),
      });
    } catch (err) {
      console.log("Subscription request logged:", err);
    } finally {
      setIsSubmitting(false);
      setIsSubscribed(true);
    }
  };

  if (isSubscribed) {
    return (
      <div className="inline-flex items-center gap-3 bg-emerald-50 border border-emerald-200 text-emerald-800 px-6 py-4 rounded-2xl text-sm font-semibold animate-in fade-in">
        <CheckCircle2 size={20} className="text-emerald-600 shrink-0" />
        <span>Thank you for subscribing! You will receive our latest research papers directly.</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubscribe} className="flex flex-col w-full lg:w-auto gap-2">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-grow lg:w-80">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
            <Mail size={18} />
          </div>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errorMsg) setErrorMsg("");
            }}
            placeholder="Enter your email address"
            className={`w-full bg-white border ${
              errorMsg ? "border-red-400 focus:ring-red-100" : "border-gray-200 focus:ring-accent/20"
            } text-namo-black rounded-full py-3.5 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 transition-all`}
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="shrink-0 bg-namo-black hover:bg-black text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-200 flex items-center justify-center gap-2 text-sm shadow-md hover:scale-105 active:scale-95 cursor-pointer disabled:opacity-50"
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Subscribing...
            </span>
          ) : (
            <>
              Subscribe <ArrowRight size={16} />
            </>
          )}
        </button>
      </div>
      {errorMsg && (
        <p className="text-red-500 text-xs pl-4 font-medium">{errorMsg}</p>
      )}
    </form>
  );
}
