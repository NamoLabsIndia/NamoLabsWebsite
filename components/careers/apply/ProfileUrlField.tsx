"use client";

import React from "react";
import { Check } from "lucide-react";
import { FieldError, labelClass } from "./FormField";
import { URL_MAX_LENGTH, isGitHubUrl, isLinkedInUrl } from "@/lib/careers";

/**
 * Profile field for a single known service.
 *
 * The domain is shown as a fixed, non-editable prefix and the applicant types
 * only their handle. That does three things at once: it makes the restriction
 * visible before anyone can get it wrong, it removes the most common source of
 * error (a mistyped or unrelated URL), and it shortens what has to be typed.
 *
 * Pasting a full URL still works — `stripPrefix` recognises the service's own
 * address in whatever form it was copied (with or without scheme, `www.`, a
 * country subdomain, tracking query, or trailing slash) and keeps just the
 * handle. Pasting some *other* site's URL is left in place verbatim so the
 * shared validator can reject it with an explanation, rather than silently
 * mangling it into a handle.
 *
 * The prefix alone is not enough: a locked `linkedin.com/in/` prefix still
 * lets someone type `burnwal.com` as their "handle" and get a syntactically
 * real linkedin.com URL back. `handleChars` blocks disallowed characters (a
 * dot, most importantly) as they're typed, and `validate` — the same function
 * the shared validator and the server use — decides whether to show the
 * checkmark, so the field can never claim something is valid that the server
 * would reject.
 */

export interface ProfileService {
  /** Shown as the prefix, e.g. `linkedin.com/in/`. */
  prefix: string;
  /** Hosts whose URLs should be reduced to a handle when pasted. */
  hosts: RegExp;
  /** Path prefix to drop after the host, e.g. `in/`. */
  pathPrefix?: string;
  /** Characters allowed while typing a handle; anything else is dropped live. */
  handleChars: RegExp;
  /** Same host+shape check the shared validator and API route run. */
  validate: (url: string) => boolean;
  placeholder: string;
}

export const LINKEDIN_SERVICE: ProfileService = {
  prefix: "linkedin.com/in/",
  hosts: /^(?:https?:\/\/)?(?:[a-z]{2}\.|www\.)?linkedin\.com\//i,
  pathPrefix: "in/",
  handleChars: /[^a-zA-Z0-9-]/g,
  validate: isLinkedInUrl,
  placeholder: "ayush-burnwal",
};

export const GITHUB_SERVICE: ProfileService = {
  prefix: "github.com/",
  hosts: /^(?:https?:\/\/)?(?:www\.)?github\.com\//i,
  handleChars: /[^a-zA-Z0-9-]/g,
  validate: isGitHubUrl,
  placeholder: "ayushburnwal",
};

function stripPrefix(raw: string, service: ProfileService): string {
  let handle = raw.trim();
  if (!service.hosts.test(handle)) return handle;

  handle = handle.replace(service.hosts, "");
  if (service.pathPrefix) {
    handle = handle.replace(
      new RegExp(`^${service.pathPrefix}`, "i"),
      "",
    );
  }
  // Drop tracking params and any trailing slash.
  return handle.split(/[?#]/)[0].replace(/\/+$/, "");
}

export default function ProfileUrlField({
  id,
  label,
  service,
  value,
  onChange,
  error,
  disabled,
}: {
  id: string;
  label: string;
  service: ProfileService;
  /** Full URL, or empty. */
  value: string;
  onChange: (value: string) => void;
  error?: string;
  disabled?: boolean;
}) {
  const errorId = `${id}-error`;
  const hintId = `${id}-hint`;
  const handle = stripPrefix(value.replace(/^https?:\/\//i, ""), service);
  const invalid = Boolean(error);
  // The checkmark reflects the same check the server will run — never just
  // "something was typed". That's what closes the gap that let a bare domain
  // like "burnwal.com" show as valid: it has characters, but isn't a handle.
  const complete = handle.length > 0 && !invalid && service.validate(value);

  const emit = (nextHandle: string) => {
    // Strip disallowed characters as they're typed, not only on submit — a
    // dot or slash should visibly refuse to appear rather than be typed,
    // accepted, and only rejected later.
    const cleaned = stripPrefix(nextHandle, service).replace(
      service.handleChars,
      "",
    );
    onChange(cleaned ? `https://${service.prefix}${cleaned}` : "");
  };

  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      {/* The prefix is aria-hidden decoration, so without this a screen reader
          user has no way to know only the handle is expected. */}
      <p id={hintId} className="mt-1.5 text-[13px] text-gray-500">
        Just your username — we add {service.prefix} for you.
      </p>

      <div
        className={`mt-2 flex items-stretch rounded-lg border bg-white transition-colors ${
          invalid
            ? "border-rose-400 focus-within:border-rose-500 focus-within:ring-4 focus-within:ring-rose-500/10"
            : "border-gray-200 hover:border-gray-300 focus-within:border-accent focus-within:ring-4 focus-within:ring-accent/10"
        } ${disabled ? "bg-gray-50" : ""}`}
      >
        <span
          aria-hidden="true"
          className="flex shrink-0 select-none items-center rounded-l-lg border-r border-gray-200 bg-gray-50/70 px-3.5 text-[14px] font-medium tracking-tight text-gray-600"
        >
          {service.prefix}
        </span>

        <input
          id={id}
          name={id}
          type="text"
          inputMode="url"
          spellCheck={false}
          autoCapitalize="none"
          autoCorrect="off"
          value={handle}
          disabled={disabled}
          aria-invalid={invalid ? true : undefined}
          aria-describedby={[invalid ? errorId : null, hintId]
            .filter(Boolean)
            .join(" ")}
          placeholder={service.placeholder}
          maxLength={URL_MAX_LENGTH}
          onChange={(event) => emit(event.target.value)}
          className="w-full min-w-0 bg-transparent px-3.5 py-3.5 text-[15px] text-namo-black outline-none placeholder:text-gray-500 disabled:cursor-not-allowed disabled:text-gray-500"
        />

        {complete && (
          <span className="flex shrink-0 items-center pr-3.5">
            <Check size={16} className="text-accent" aria-hidden="true" />
            <span className="sr-only">Looks valid</span>
          </span>
        )}
      </div>

      <FieldError id={errorId} message={error} />
    </div>
  );
}
