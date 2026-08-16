"use client";

import React, { useCallback, useRef, useState } from "react";
import Link from "next/link";
import { AlertCircle, ArrowRight, Loader2 } from "lucide-react";
import ApplyIntro from "@/components/careers/apply/ApplyIntro";
import FormSection from "@/components/careers/apply/FormSection";
import ResumeField, {
  type RejectedFile,
} from "@/components/careers/apply/ResumeField";
import EmailField from "@/components/careers/apply/EmailField";
import PhoneField from "@/components/careers/apply/PhoneField";
import ProfileUrlField, {
  GITHUB_SERVICE,
  LINKEDIN_SERVICE,
} from "@/components/careers/apply/ProfileUrlField";
import SubmissionSuccess from "@/components/careers/apply/SubmissionSuccess";
import {
  FieldError,
  TextAreaField,
  TextField,
} from "@/components/careers/apply/FormField";
import {
  APPLICATION_ENDPOINT,
  EMPTY_APPLICATION,
  FIELD_ORDER,
  HONEYPOT_FIELD,
  NAME_MAX_LENGTH,
  STORY_MAX_LENGTH,
  STORY_MIN_LENGTH,
  validateApplication,
  validateResume,
  type ApplicationErrors,
  type ApplicationField,
  type ApplicationValues,
} from "@/lib/careers";
import type { Role } from "@/lib/data/roles";

type Status = "idle" | "submitting" | "success";

const GENERIC_ERROR =
  "We couldn't submit your application right now. Please try again in a moment. Nothing you've entered has been lost.";

/** Maps an HTTP failure onto language an applicant can act on. */
function messageForStatus(status: number, serverMessage?: string): string {
  if (status === 413) {
    // Our own route replies with a JSON message naming the real limit. A bare
    // 413 with no body comes from the hosting platform rejecting the upload
    // before it reached us (Vercel caps function request bodies at 4.5MB), so
    // we must not promise the full limit in that case.
    return (
      serverMessage ||
      "Your resume was too large to upload. Please attach a smaller PDF and try again."
    );
  }
  if (status === 429) {
    return (
      serverMessage ||
      "You've sent several applications recently. Please try again later."
    );
  }
  if (status === 400) {
    return (
      serverMessage ||
      "Some details need fixing before we can accept your application."
    );
  }
  return GENERIC_ERROR;
}

export default function ApplicationForm({ role }: { role?: Role }) {
  const [values, setValues] = useState<ApplicationValues>(EMPTY_APPLICATION);
  const [resume, setResume] = useState<File | null>(null);
  const [rejectedResume, setRejectedResume] = useState<RejectedFile | null>(null);
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [errors, setErrors] = useState<ApplicationErrors>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [honeypot, setHoneypot] = useState("");

  /**
   * Synchronous guard against double submission. `status` alone is not enough:
   * React batches state updates, so two clicks in the same tick would both see
   * the stale value and fire two requests.
   */
  const inFlight = useRef(false);
  const errorRef = useRef<HTMLDivElement>(null);

  const isSubmitting = status === "submitting";

  const update = useCallback(
    (field: keyof ApplicationValues) => (value: string) => {
      setValues((previous) => ({ ...previous, [field]: value }));
      setErrors((previous) =>
        previous[field] ? { ...previous, [field]: undefined } : previous
      );
    },
    []
  );

  /**
   * Files are checked the moment they're picked. An unacceptable file is never
   * stored — holding onto it would let a 14MB PDF sit in the form looking
   * attached until submit failed.
   */
  const handleResumeSelect = (next: File | null) => {
    if (!next) {
      setResume(null);
      setRejectedResume(null);
      return;
    }

    const reason = validateResume({
      name: next.name,
      size: next.size,
      type: next.type,
    });

    if (reason) {
      setResume(null);
      setRejectedResume({ name: next.name, size: next.size, reason });
      setErrors((previous) =>
        previous.resume ? { ...previous, resume: undefined } : previous,
      );
      return;
    }

    setResume(next);
    setRejectedResume(null);
    setErrors((previous) =>
      previous.resume ? { ...previous, resume: undefined } : previous,
    );
  };

  const focusField = (field: ApplicationField) => {
    const element = document.getElementById(field);
    if (element instanceof HTMLElement) {
      element.focus();
      element.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  };

  const focusFirstError = (nextErrors: ApplicationErrors) => {
    const first = FIELD_ORDER.find((field) => nextErrors[field]);
    if (first) focusField(first);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inFlight.current) return;

    setFormError(null);

    const nextErrors = validateApplication(values, {
      resume: resume
        ? { name: resume.name, size: resume.size, type: resume.type }
        : null,
      privacyConsent,
    });
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      focusFirstError(nextErrors);
      return;
    }

    inFlight.current = true;
    setStatus("submitting");

    try {
      const payload = new FormData();
      payload.append("fullName", values.fullName.trim());
      payload.append("email", values.email.trim());
      payload.append("phone", values.phone.trim());
      payload.append("linkedin", values.linkedin.trim());
      payload.append("githubOrPortfolio", values.githubOrPortfolio.trim());
      payload.append("whyNamoLabs", values.whyNamoLabs.trim());
      payload.append("recentProject", values.recentProject.trim());
      payload.append("privacyConsent", String(privacyConsent));
      payload.append(HONEYPOT_FIELD, honeypot);
      // Only the resolved role's own title is sent — never raw query input.
      if (role) payload.append("role", role.title);
      if (resume) payload.append("resume", resume, resume.name);

      // Content-Type is intentionally omitted: the browser sets it along with
      // the multipart boundary, which cannot be reconstructed by hand.
      const response = await fetch(APPLICATION_ENDPOINT, {
        method: "POST",
        body: payload,
      });

      if (response.ok) {
        // Success is driven purely by the server's confirmation.
        setStatus("success");
        return;
      }

      const data = (await response.json().catch(() => null)) as {
        error?: string;
        fields?: ApplicationErrors;
      } | null;

      if (data?.fields) {
        setErrors(data.fields);
        focusFirstError(data.fields);
      }

      setFormError(messageForStatus(response.status, data?.error));
      setStatus("idle");
      if (!data?.fields) errorRef.current?.focus();
    } catch {
      // Network failure, offline, DNS, CORS or an aborted request.
      setFormError(
        "We couldn't reach our servers. Check your connection and try again — everything you've entered is still here."
      );
      setStatus("idle");
      errorRef.current?.focus();
    } finally {
      inFlight.current = false;
    }
  };

  if (status === "success") {
    return <SubmissionSuccess role={role?.title} />;
  }

  const errorCount = Object.values(errors).filter(Boolean).length;

  return (
    <>
      <ApplyIntro role={role} />

      <form onSubmit={handleSubmit} noValidate>
        {/* Anti-spam honeypot: hidden from people, tempting to bots. */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor={HONEYPOT_FIELD}>Company website</label>
          <input
            id={HONEYPOT_FIELD}
            name={HONEYPOT_FIELD}
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(event) => setHoneypot(event.target.value)}
          />
        </div>

        <FormSection
          first
          index="01"
          title="About you"
          description="How we reach you once we've read your application."
        >
          <div className="grid gap-7 sm:grid-cols-2">
            <TextField
              id="fullName"
              label="Full name"
              required
              value={values.fullName}
              onChange={update("fullName")}
              error={errors.fullName}
              disabled={isSubmitting}
              placeholder="Ayush Burnwal"
              autoComplete="name"
              maxLength={NAME_MAX_LENGTH}
            />
            <EmailField
              required
              value={values.email}
              onChange={update("email")}
              error={errors.email}
              disabled={isSubmitting}
            />
          </div>

          {/* Phone sits in the first column of a matching grid so it lines up
              with the name field above rather than spanning the full width. */}
          <div className="grid gap-7 sm:grid-cols-2">
            <PhoneField
              required
              value={values.phone}
              onChange={update("phone")}
              error={errors.phone}
              disabled={isSubmitting}
            />
          </div>
        </FormSection>

        <FormSection
          index="02"
          title="Your work"
          description="Where we can see what you've built. Both are optional."
        >
          <div className="grid gap-7 sm:grid-cols-2">
            <ProfileUrlField
              id="linkedin"
              label="LinkedIn"
              service={LINKEDIN_SERVICE}
              value={values.linkedin}
              onChange={update("linkedin")}
              error={errors.linkedin}
              disabled={isSubmitting}
            />
            <ProfileUrlField
              id="githubOrPortfolio"
              label="GitHub"
              service={GITHUB_SERVICE}
              value={values.githubOrPortfolio}
              onChange={update("githubOrPortfolio")}
              error={errors.githubOrPortfolio}
              disabled={isSubmitting}
            />
          </div>

          <TextAreaField
            id="whyNamoLabs"
            label="Why Namo Labs"
            required
            value={values.whyNamoLabs}
            onChange={update("whyNamoLabs")}
            error={errors.whyNamoLabs}
            disabled={isSubmitting}
            placeholder="What draws you to our research focus, and what you want to work on here."
            maxLength={STORY_MAX_LENGTH}
            minLength={STORY_MIN_LENGTH}
          />

          <TextAreaField
            id="recentProject"
            label="A recent project you're proud of"
            required
            value={values.recentProject}
            onChange={update("recentProject")}
            error={errors.recentProject}
            disabled={isSubmitting}
            placeholder="Describe a technical or research project that shows your depth — what it was, what you did, and what it took."
            maxLength={STORY_MAX_LENGTH}
            minLength={STORY_MIN_LENGTH}
          />
        </FormSection>

        <FormSection
          index="03"
          title="Application"
          description="Your resume and consent, then you're done."
        >
          <ResumeField
            file={resume}
            rejected={rejectedResume}
            error={errors.resume}
            disabled={isSubmitting}
            onSelect={handleResumeSelect}
          />

          <div className="border-t border-gray-100 pt-7">
            <div className="flex items-start gap-3.5">
              <input
                id="privacyConsent"
                name="privacyConsent"
                type="checkbox"
                checked={privacyConsent}
                disabled={isSubmitting}
                required
                aria-required
                aria-invalid={errors.privacyConsent ? true : undefined}
                aria-describedby={
                  errors.privacyConsent ? "privacyConsent-error" : undefined
                }
                onChange={(event) => {
                  setPrivacyConsent(event.target.checked);
                  setErrors((previous) =>
                    previous.privacyConsent
                      ? { ...previous, privacyConsent: undefined }
                      : previous
                  );
                }}
                className={`mt-0.5 h-[18px] w-[18px] shrink-0 cursor-pointer rounded border text-namo-black accent-namo-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
                  errors.privacyConsent ? "border-rose-400" : "border-gray-300"
                }`}
              />
              <label
                htmlFor="privacyConsent"
                className="cursor-pointer text-[14px] leading-relaxed text-gray-600"
              >
                I agree to the{" "}
                <Link
                  href="/privacy"
                  className="font-medium text-namo-black underline underline-offset-4 hover:text-accent"
                >
                  Privacy Policy
                </Link>{" "}
                and consent to Namo Labs processing my application data for
                recruitment purposes.
                <span className="text-accent" aria-hidden="true">
                  {" "}
                  *
                </span>
                <span className="sr-only"> (required)</span>
              </label>
            </div>
            <div className="pl-[30px]">
              <FieldError
                id="privacyConsent-error"
                message={errors.privacyConsent}
              />
            </div>
          </div>

          <div className="pt-2">
            {/* Server and network failures. Focusable so the handler can move
                the caret here when nothing field-specific came back. */}
            {formError && (
              <div
                ref={errorRef}
                tabIndex={-1}
                role="alert"
                className="mb-6 flex items-start gap-3 rounded-lg border border-rose-200 bg-rose-50 px-4 py-3.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
              >
                <AlertCircle
                  size={16}
                  className="mt-0.5 shrink-0 text-rose-600"
                  aria-hidden="true"
                />
                <p className="text-[14px] leading-relaxed text-rose-900">
                  {formError}
                </p>
              </div>
            )}

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-namo-black px-8 py-4 text-[13px] font-bold uppercase tracking-widest text-white transition-colors duration-200 hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-namo-black focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-gray-500 sm:w-auto"
              >
                {isSubmitting ? (
                  <>
                    <Loader2
                      size={15}
                      className="animate-spin motion-reduce:animate-none"
                      aria-hidden="true"
                    />
                    Submitting…
                  </>
                ) : (
                  <>
                    Submit application
                    <ArrowRight size={15} aria-hidden="true" />
                  </>
                )}
              </button>

              <p
                className="text-[13px] text-gray-500"
                aria-live="polite"
                aria-atomic="true"
              >
                {isSubmitting
                  ? "Sending your application…"
                  : errorCount > 0
                    ? `${errorCount} ${errorCount === 1 ? "field needs" : "fields need"} attention.`
                    : "We review every application personally."}
              </p>
            </div>
          </div>
        </FormSection>
      </form>
    </>
  );
}
