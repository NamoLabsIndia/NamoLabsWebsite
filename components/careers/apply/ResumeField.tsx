"use client";

import React, { useRef, useState } from "react";
import { FileText, Upload, X } from "lucide-react";
import { FieldError, RequiredMark, labelClass } from "./FormField";
import { MAX_RESUME_LABEL, RESUME_ACCEPT, formatBytes } from "@/lib/careers";

/**
 * Resume upload with drag-and-drop. The native file input stays in the DOM and
 * is only visually hidden, so it remains keyboard reachable and correctly
 * labelled; the drop zone is its `<label>`.
 */
export default function ResumeField({
  id = "resume",
  file,
  onSelect,
  error,
  disabled,
}: {
  id?: string;
  file: File | null;
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

  return (
    <div>
      <span className={labelClass}>
        Resume
        <RequiredMark />
      </span>
      <p id={hintId} className="mt-1.5 text-[13px] text-gray-500">
        PDF only, up to {MAX_RESUME_LABEL}.
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
        aria-invalid={error ? true : undefined}
        aria-describedby={[error ? errorId : null, hintId].filter(Boolean).join(" ")}
        onChange={(event) => handleFiles(event.target.files)}
        className="peer sr-only"
      />

      {file ? (
        <div
          className={`mt-3 flex items-center gap-4 rounded-lg border px-4 py-4 transition-colors ${
            error ? "border-rose-400 bg-rose-50/40" : "border-gray-200 bg-gray-50/60"
          } peer-focus-visible:border-accent peer-focus-visible:ring-4 peer-focus-visible:ring-accent/10`}
        >
          <FileText size={20} className="shrink-0 text-accent" aria-hidden="true" />
          <div className="min-w-0 flex-1">
            <p className="truncate text-[14px] font-medium text-namo-black">
              {file.name}
            </p>
            <p className="mt-0.5 text-[12px] text-gray-500">
              {formatBytes(file.size)}
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-1">
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              disabled={disabled}
              className="rounded-full px-3 py-1.5 text-[12px] font-bold uppercase tracking-wider text-gray-500 transition-colors hover:bg-white hover:text-namo-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:opacity-50"
            >
              Replace
            </button>
            <button
              type="button"
              onClick={clear}
              disabled={disabled}
              className="rounded-full p-2 text-gray-500 transition-colors hover:bg-white hover:text-rose-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:opacity-50"
            >
              <X size={16} aria-hidden="true" />
              <span className="sr-only">Remove {file.name}</span>
            </button>
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
