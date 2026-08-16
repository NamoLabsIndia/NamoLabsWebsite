"use client";

import React from "react";
import { AlertCircle } from "lucide-react";

export const labelClass =
  "block text-[11px] font-bold uppercase tracking-[0.15em] text-namo-black";

const inputBase =
  "w-full rounded-lg border bg-white px-4 py-3.5 text-[15px] text-namo-black " +
  "placeholder:text-gray-500 outline-none transition-colors duration-200 " +
  "hover:border-gray-300 focus:ring-4 " +
  "disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500";

const inputState = (invalid: boolean) =>
  invalid
    ? "border-rose-400 focus:border-rose-500 focus:ring-rose-500/10"
    : "border-gray-200 focus:border-accent focus:ring-accent/10";

export function inputClass(invalid: boolean) {
  return `${inputBase} ${inputState(invalid)}`;
}

/**
 * Error text for a single field. Rendered as an alert so assistive technology
 * announces it, and paired with an icon so colour is never the only signal.
 */
export function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p
      id={id}
      role="alert"
      className="mt-2 flex items-start gap-1.5 text-[13px] font-medium text-rose-600"
    >
      <AlertCircle size={14} className="mt-[3px] shrink-0" aria-hidden="true" />
      <span>{message}</span>
    </p>
  );
}

export function RequiredMark() {
  return (
    <>
      <span className="text-accent" aria-hidden="true">
        {" "}
        *
      </span>
      <span className="sr-only"> (required)</span>
    </>
  );
}

interface BaseProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
  hint?: string;
}

interface TextFieldProps extends BaseProps {
  type?: "text" | "email" | "tel" | "url";
  autoComplete?: string;
  inputMode?: "text" | "email" | "tel" | "url";
  maxLength?: number;
}

export function TextField({
  id,
  label,
  value,
  onChange,
  error,
  required,
  disabled,
  placeholder,
  hint,
  type = "text",
  autoComplete,
  inputMode,
  maxLength,
}: TextFieldProps) {
  const errorId = `${id}-error`;
  const hintId = `${id}-hint`;
  const describedBy =
    [error ? errorId : null, hint ? hintId : null].filter(Boolean).join(" ") ||
    undefined;

  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}
        {required && <RequiredMark />}
      </label>
      {hint && (
        <p id={hintId} className="mt-1.5 text-[13px] text-gray-500">
          {hint}
        </p>
      )}
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        inputMode={inputMode}
        maxLength={maxLength}
        disabled={disabled}
        required={required}
        aria-required={required || undefined}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        className={`mt-2 ${inputClass(Boolean(error))}`}
      />
      <FieldError id={errorId} message={error} />
    </div>
  );
}

interface TextAreaFieldProps extends BaseProps {
  rows?: number;
  maxLength: number;
  minLength: number;
}

export function TextAreaField({
  id,
  label,
  value,
  onChange,
  error,
  required,
  disabled,
  placeholder,
  hint,
  rows = 6,
  maxLength,
  minLength,
}: TextAreaFieldProps) {
  const errorId = `${id}-error`;
  const countId = `${id}-count`;
  const hintId = `${id}-hint`;
  const remaining = minLength - value.trim().length;
  const belowMinimum = value.length > 0 && remaining > 0;

  const describedBy = [error ? errorId : null, hint ? hintId : null, countId]
    .filter(Boolean)
    .join(" ");

  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <label htmlFor={id} className={labelClass}>
          {label}
          {required && <RequiredMark />}
        </label>
        {/* Described by the textarea rather than a live region: announcing on
            every keystroke would be unusable with a screen reader. */}
        <span
          id={countId}
          className={`text-[12px] font-medium tabular-nums ${
            belowMinimum ? "text-gray-600" : "text-gray-500"
          }`}
        >
          {belowMinimum
            ? `${remaining} more character${remaining === 1 ? "" : "s"} needed`
            : `${value.length} / ${maxLength}`}
        </span>
      </div>
      {hint && (
        <p id={hintId} className="mt-1.5 text-[13px] text-gray-500">
          {hint}
        </p>
      )}
      <textarea
        id={id}
        name={id}
        rows={rows}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        maxLength={maxLength}
        disabled={disabled}
        required={required}
        aria-required={required || undefined}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        className={`mt-2 resize-y leading-relaxed ${inputClass(Boolean(error))}`}
      />
      <FieldError id={errorId} message={error} />
    </div>
  );
}
