"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function ApplicationForm() {
  const searchParams = useSearchParams();
  const role = searchParams.get("role") || "this role";

  const [fields, setFields] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    whyNamo: "",
    project: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const labelClass =
    "block text-[11px] font-bold uppercase tracking-[0.15em] text-namo-black mb-2";
  const inputClass = (field: string) =>
    `w-full border ${
      errors[field] ? "border-red-500" : "border-gray-300"
    } bg-gray-50/50 px-4 py-3.5 text-[15px] text-namo-black placeholder-gray-400 focus:outline-none focus:border-namo-black focus:ring-1 focus:ring-namo-black transition-colors rounded-sm`;

  const update = (field: string, value: string) => {
    setFields((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: "" }));
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!fields.name.trim()) e.name = "Required";
    if (!fields.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
      e.email = "Valid email required";
    if (!fields.phone.trim()) e.phone = "Required";
    if (fields.whyNamo.trim().length < 50)
      e.whyNamo = "Please write at least 50 characters";
    if (fields.project.trim().length < 50)
      e.project = "Please write at least 50 characters";
    if (!file) e.file = "Please attach your resume";
    if (!consent) e.consent = "Required";
    return e;
  };

  const isComplete =
    fields.name &&
    fields.email &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email) &&
    fields.phone &&
    fields.whyNamo.length >= 50 &&
    fields.project.length >= 50 &&
    file &&
    consent;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      const firstErrKey = Object.keys(errs)[0];
      document.getElementById(`field-${firstErrKey}`)?.focus();
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-6 py-8">
        <CheckCircle2 size={48} className="text-accent" />
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-namo-black sm:text-4xl">
            Application received.
          </h1>
          <p className="mt-4 max-w-md text-[16px] leading-relaxed text-gray-600">
            Thank you for applying for <strong>{role}</strong>. We review every
            submission personally and will be in touch within 5 business days.
          </p>
        </div>
        <a
          href="/careers"
          className="mt-4 inline-flex items-center gap-2 text-[14px] font-semibold text-accent transition-colors hover:text-namo-black"
        >
          ← Back to Careers
        </a>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="mb-12">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">
          Open Application
        </p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-namo-black sm:text-[44px]">
          Apply for {role}
        </h1>
        <div className="mt-6 h-[2px] w-12 bg-namo-black" />
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-8">
        {/* Row 1: Name and Email */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          <div>
            <label htmlFor="field-name" className={labelClass}>
              Full Name *
            </label>
            <input
              id="field-name"
              type="text"
              placeholder="Your full name"
              className={inputClass("name")}
              value={fields.name}
              onChange={(e) => update("name", e.target.value)}
              autoComplete="name"
              required
            />
            {errors.name && (
              <p className="mt-2 text-[12px] font-medium text-red-500">{errors.name}</p>
            )}
          </div>
          <div>
            <label htmlFor="field-email" className={labelClass}>
              Email Address *
            </label>
            <input
              id="field-email"
              type="email"
              placeholder="name@example.com"
              className={inputClass("email")}
              value={fields.email}
              onChange={(e) => update("email", e.target.value)}
              autoComplete="email"
              required
            />
            {errors.email && (
              <p className="mt-2 text-[12px] font-medium text-red-500">{errors.email}</p>
            )}
          </div>
        </div>

        {/* Row 2: Phone */}
        <div>
          <label htmlFor="field-phone" className={labelClass}>
            Phone Number *
          </label>
          <input
            id="field-phone"
            type="tel"
            inputMode="tel"
            placeholder="+1 (555) 000-0000"
            className={inputClass("phone")}
            value={fields.phone}
            onChange={(e) => update("phone", e.target.value)}
            autoComplete="tel"
            required
          />
          {errors.phone && (
            <p className="mt-2 text-[12px] font-medium text-red-500">{errors.phone}</p>
          )}
        </div>

        {/* Row 3: URLs */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          <div>
            <label htmlFor="field-linkedin" className={labelClass}>
              LinkedIn URL
            </label>
            <input
              id="field-linkedin"
              type="url"
              placeholder="https://linkedin.com/in/..."
              className={inputClass("linkedin")}
              value={fields.linkedin}
              onChange={(e) => update("linkedin", e.target.value)}
              autoComplete="url"
            />
          </div>
          <div>
            <label htmlFor="field-github" className={labelClass}>
              GitHub / Portfolio URL
            </label>
            <input
              id="field-github"
              type="url"
              placeholder="https://github.com/..."
              className={inputClass("github")}
              value={fields.github}
              onChange={(e) => update("github", e.target.value)}
              autoComplete="url"
            />
          </div>
        </div>

        {/* Row 4: Why Namo Labs */}
        <div>
          <div className="mb-2 flex items-end justify-between">
            <label htmlFor="field-whyNamo" className={`${labelClass} mb-0`}>
              Why Namo Labs? *
            </label>
            <span
              className={`text-[11px] font-medium tracking-wider ${
                fields.whyNamo.length >= 50 ? "text-gray-400" : "text-gray-400"
              }`}
            >
              {fields.whyNamo.length} / 2000
              {fields.whyNamo.length > 0 && fields.whyNamo.length < 50 && (
                <span className="text-red-400"> (min {50 - fields.whyNamo.length} more chars)</span>
              )}
            </span>
          </div>
          <textarea
            id="field-whyNamo"
            required
            rows={5}
            maxLength={2000}
            value={fields.whyNamo}
            onChange={(e) => update("whyNamo", e.target.value)}
            placeholder="What draws you to this role and to our specific research focus?"
            className={`${inputClass("whyNamo")} resize-y leading-relaxed`}
          />
          {errors.whyNamo && (
            <p className="mt-2 text-[12px] font-medium text-red-500">{errors.whyNamo}</p>
          )}
        </div>

        {/* Row 5: Recent Project */}
        <div>
          <div className="mb-2 flex items-end justify-between">
            <label htmlFor="field-project" className={`${labelClass} mb-0`}>
              A recent project you're proud of *
            </label>
            <span
              className={`text-[11px] font-medium tracking-wider text-gray-400`}
            >
              {fields.project.length} / 2000
              {fields.project.length > 0 && fields.project.length < 50 && (
                <span className="text-red-400"> (min {50 - fields.project.length} more chars)</span>
              )}
            </span>
          </div>
          <textarea
            id="field-project"
            required
            rows={5}
            maxLength={2000}
            value={fields.project}
            onChange={(e) => update("project", e.target.value)}
            placeholder="Describe a technical or research project that demonstrates your depth."
            className={`${inputClass("project")} resize-y leading-relaxed`}
          />
          {errors.project && (
            <p className="mt-2 text-[12px] font-medium text-red-500">{errors.project}</p>
          )}
        </div>

        {/* Row 6: Resume */}
        <div className="pt-2">
          <label className={labelClass}>Resume (PDF) *</label>
          <div className="mt-3 flex items-center gap-5">
            <label className="cursor-pointer rounded-sm border border-gray-300 bg-gray-50 px-5 py-2.5 text-[12px] font-bold tracking-wider text-namo-black transition-colors hover:bg-gray-100">
              CHOOSE FILE
              <input
                id="field-file"
                type="file"
                accept=".pdf,application/pdf"
                capture={undefined}
                className="hidden"
                onChange={(e) => {
                  setFile(e.target.files?.[0] || null);
                  if (errors.file) setErrors((err) => ({ ...err, file: "" }));
                }}
                required
              />
            </label>
            <span className="text-[14px] text-gray-500">
              {file ? file.name : "No file chosen"}
            </span>
          </div>
          {errors.file && (
            <p className="mt-2 text-[12px] font-medium text-red-500">{errors.file}</p>
          )}
          <p className="mt-3 text-[10px] uppercase tracking-[0.2em] text-gray-400">
            PDF format only. Maximum size 10MB.
          </p>
        </div>

        {/* Row 7: Consent */}
        <div className="pb-4 pt-6 border-t border-gray-100">
          <label className="flex cursor-pointer items-start gap-4">
            <input
              id="field-consent"
              type="checkbox"
              checked={consent}
              onChange={(e) => {
                setConsent(e.target.checked);
                if (errors.consent)
                  setErrors((err) => ({ ...err, consent: "" }));
              }}
              required
              className="mt-1 h-4 w-4 rounded-sm border-gray-300 text-namo-black focus:ring-namo-black"
            />
            <span className="text-[14px] leading-relaxed text-gray-600">
              I agree to the{" "}
              <Link
                href="/privacy"
                className="font-medium text-namo-black underline underline-offset-4 hover:text-accent"
              >
                Privacy Policy
              </Link>{" "}
              and consent to Namo Labs processing my application data for recruitment purposes.
            </span>
          </label>
          {errors.consent && (
            <p className="mt-2 ml-8 text-[12px] font-medium text-red-500">
              {errors.consent}
            </p>
          )}
        </div>

        {/* Submit */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={!isComplete}
            className={`w-full sm:w-auto rounded-full px-10 py-4 text-[13px] font-bold uppercase tracking-widest transition-all duration-300 ${
              isComplete
                ? "bg-namo-black text-white hover:scale-[1.02] hover:bg-gray-800 cursor-pointer"
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
            }`}
          >
            {isComplete ? "Submit Application" : "Complete all fields"}
          </button>
        </div>
      </form>
    </div>
  );
}
