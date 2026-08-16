"use client";

import React, { useRef, useState } from "react";
import { AlertTriangle, FileText, Upload, X } from "lucide-react";
import { FieldError, RequiredMark, labelClass } from "./FormField";
import {
  MAX_RESUME_BYTES,
  MAX_RESUME_LABEL,
  RESUME_ACCEPT,
  formatBytes,
} from "@/lib/careers";

/**
 * Resume upload with drag-and-drop.
 *
 * The native file input stays in the DOM and is only visually hidden, so it
 * remains keyboard reachable and correctly labelled; the drop zone is its
 * `<label>`.
 *
 * Rejection happens at selection, not at submit. A 14 MB file that is only
 * refused after the applicant has filled in two long-form answers and pressed
 * submit is a bad experience and an easy one to avoid — the browser knows the
 * size the moment the file is picked.
 *
 * `rejected` is deliberately separate from the form-level `error`: it describes
 * a file we refused to accept and therefore never stored, and it carries its
 * own recovery affordance.
 */

export interface RejectedFile {
  name: string;
  size: number;
  reason: string;
}

export default function ResumeField({
  id = "resume",
  file,
  rejected,
  onSelect,
  error,
  disabled,
}: {
  id?: string;
  file: File | null;
  rejected: RejectedFile | null;
  onSelect: (file: File | null) => void;
  error?: string;
  disabled?: boolean;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);

  const errorId = `${id}-error`;
  const hintId = `${id}-hint`;

  const handleFiles = (files: FileList | null) => {
    onSelect(files && files.length > 0 ? files[0] : null);
  };

  const clear = () => {
    onSelect(null);
    if (inputRef.current) inputRef.current.value = "";
    inputRef.current?.focus();
  };

  const usage = file ? Math.min(file.size / MAX_RESUME_BYTES, 1) : 0;

  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        {/* The drop zone is the input's <label>, which makes it clickable — but
            it would also become the input's accessible name ("Drop your PDF
            here, or browse…"). aria-labelledby points at this heading instead,
            so the field announces as "Resume, required". */}
        <span id={`${id}-label`} className={labelClass}>
          Resume
          <RequiredMark />
        </span>
        <span className="text-[12px] font-medium text-gray-500">
          PDF · max {MAX_RESUME_LABEL}
        </span>
      </div>
      <p id={hintId} className="mt-1.5 text-[13px] text-gray-500">
        Files over {MAX_RESUME_LABEL} can&apos;t be accepted — compress or
        re-export before attaching.
      </p>

      <input
        ref={inputRef}
        id={id}
        name={id}
        type="file"
        accept={RESUME_ACCEPT}
        disabled={disabled}
        required
        aria-required
        aria-labelledby={`${id}-label`}
        aria-invalid={error ? true : undefined}
        aria-describedby={[error ? errorId : null, hintId].filter(Boolean).join(" ")}
        onChange={(event) => handleFiles(event.target.files)}
        className="peer sr-only"
      />

      {/* A file we refused. Shown instead of a generic field error so the
          applicant can see which file failed and why, and retry in one click. */}
      {rejected && (
        <div
          role="alert"
          className="mt-3 rounded-lg border border-rose-200 bg-rose-50/70 px-4 py-4"
        >
          <div className="flex items-start gap-3">
            <AlertTriangle
              size={17}
              className="mt-0.5 shrink-0 text-rose-600"
              aria-hidden="true"
            />
            <div className="min-w-0 flex-1">
              <p className="text-[14px] font-semibold text-rose-900">
                Couldn&apos;t attach “{rejected.name}”
              </p>
              <p className="mt-1 text-[13px] leading-relaxed text-rose-800">
                {rejected.reason}
              </p>
              <button
                type="button"
                onClick={() => inputRef.current?.click()}
                disabled={disabled}
                className="mt-3 inline-flex min-h-[44px] items-center rounded-full bg-rose-600 px-5 text-[12px] font-bold uppercase tracking-wider text-white transition-colors hover:bg-rose-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-600 focus-visible:ring-offset-2 disabled:opacity-50"
              >
                Choose another file
              </button>
            </div>
          </div>
        </div>
      )}

      {file ? (
        <div
          className={`mt-3 rounded-lg border px-4 py-4 transition-colors ${
            error ? "border-rose-400 bg-rose-50/40" : "border-gray-200 bg-gray-50/60"
          } peer-focus-visible:border-accent peer-focus-visible:ring-4 peer-focus-visible:ring-accent/10`}
        >
          <div className="flex items-center gap-4">
            <FileText size={20} className="shrink-0 text-accent" aria-hidden="true" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-[14px] font-medium text-namo-black">
                {file.name}
              </p>
              <p className="mt-0.5 text-[12px] text-gray-500">
                {formatBytes(file.size)} of {MAX_RESUME_LABEL}
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-1">
              <button
                type="button"
                onClick={() => inputRef.current?.click()}
                disabled={disabled}
                className="inline-flex min-h-[44px] items-center rounded-full px-3 text-[12px] font-bold uppercase tracking-wider text-gray-600 transition-colors hover:bg-white hover:text-namo-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:opacity-50"
              >
                Replace
              </button>
              <button
                type="button"
                onClick={clear}
                disabled={disabled}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full text-gray-600 transition-colors hover:bg-white hover:text-rose-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:opacity-50"
              >
                <X size={16} aria-hidden="true" />
                <span className="sr-only">Remove {file.name}</span>
              </button>
            </div>
          </div>

          {/* How much of the allowance this file uses. Decorative — the same
              facts are stated in text directly above. */}
          <div
            aria-hidden="true"
            className="mt-3 h-1 w-full overflow-hidden rounded-full bg-gray-200"
          >
            <div
              className={`h-full rounded-full ${
                usage > 0.9 ? "bg-amber-500" : "bg-accent"
              }`}
              style={{ width: `${Math.max(usage * 100, 2)}%` }}
            />
          </div>
        </div>
      ) : (
        <label
          htmlFor={id}
          onDragOver={(event) => {
            event.preventDefault();
            if (!disabled) setDragging(true);
          }}
          onDragLeave={() => setDragging(false)}
          onDrop={(event) => {
            event.preventDefault();
            setDragging(false);
            if (!disabled) handleFiles(event.dataTransfer.files);
          }}
          className={`mt-3 flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border border-dashed px-6 py-10 text-center transition-colors ${
            error
              ? "border-rose-400 bg-rose-50/40"
              : dragging
                ? "border-accent bg-accent-light"
                : "border-gray-300 bg-gray-50/60 hover:border-gray-400 hover:bg-gray-50"
          } peer-focus-visible:border-accent peer-focus-visible:ring-4 peer-focus-visible:ring-accent/10 ${
            disabled ? "pointer-events-none opacity-60" : ""
          }`}
        >
          <Upload size={20} className="text-gray-500" aria-hidden="true" />
          <span className="text-[14px] font-medium text-namo-black">
            Drop your PDF here, or{" "}
            <span className="text-accent underline underline-offset-4">browse</span>
          </span>
          <span className="text-[12px] text-gray-500">
            PDF only · {MAX_RESUME_LABEL} maximum
          </span>
        </label>
      )}

      <FieldError id={errorId} message={error} />
    </div>
  );
}
