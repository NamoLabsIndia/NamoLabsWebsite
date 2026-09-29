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

/** Inline LinkedIn icon — official "in" mark as paths, fills the box properly. */
function LinkedInIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="24" height="24" rx="4" fill="#0A66C2" />
      {/* Top-left dot */}
      <circle cx="4.983" cy="5.009" r="2.188" fill="white" />
      {/* Vertical bar */}
      <rect x="3" y="8.977" width="3.966" height="12.056" fill="white" />
      {/* Right column — L-shape */}
      <path
        d="M9.237 8.977h3.798v1.648h.053c.529-1.001 1.82-2.057 3.745-2.057 4.008 0 4.748 2.638 4.748 6.066v6.399h-3.962v-5.674c0-1.353-.023-3.093-1.884-3.093-1.887 0-2.175 1.473-2.175 2.995v5.772H9.237V8.977z"
        fill="white"
      />
    </svg>
  );
}

/** Inline GitHub mark — square-rounded box matching LinkedIn's style. */
function GitHubIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="24" height="24" rx="4" fill="#24292f" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 3C7.03 3 3 7.03 3 12.01c0 3.98 2.58 7.36 6.16 8.56.45.08.61-.19.61-.43 0-.21-.01-.77-.01-1.51-2.5.54-3.03-1.2-3.03-1.2-.41-1.04-.99-1.32-.99-1.32-.81-.55.06-.54.06-.54.9.06 1.37.92 1.37.92.8 1.37 2.09.97 2.6.74.08-.58.31-.97.57-1.2-1.99-.23-4.08-.99-4.08-4.43 0-.98.35-1.78.92-2.41-.09-.23-.4-1.14.09-2.37 0 0 .75-.24 2.46.92a8.57 8.57 0 0 1 2.24-.3c.76 0 1.53.1 2.24.3 1.71-1.16 2.46-.92 2.46-.92.49 1.23.18 2.14.09 2.37.57.63.92 1.43.92 2.41 0 3.45-2.1 4.2-4.1 4.42.32.28.61.83.61 1.67 0 1.21-.01 2.18-.01 2.48 0 .24.16.52.62.43A9.01 9.01 0 0 0 21 12.01C21 7.03 16.97 3 12 3z"
        fill="white"
      />
    </svg>
  );
}

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
  /** Optional brand icon to show in the prefix area. */
  icon?: React.ReactNode;
}

export const LINKEDIN_SERVICE: ProfileService = {
  prefix: "linkedin.com/in/",
  hosts: /^(?:https?:\/\/)?(?:[a-z]{2}\.|www\.)?linkedin\.com\//i,
  pathPrefix: "in/",
  handleChars: /[^a-zA-Z0-9-]/g,
  validate: isLinkedInUrl,
  placeholder: "Your username",
  icon: <LinkedInIcon />,
};

export const GITHUB_SERVICE: ProfileService = {
  prefix: "github.com/",
  hosts: /^(?:https?:\/\/)?(?:www\.)?github\.com\//i,
  handleChars: /[^a-zA-Z0-9-]/g,
  validate: isGitHubUrl,
  placeholder: "Your GitHub username",
  icon: <GitHubIcon />,
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
      <p id={hintId} className="mt-1.5 text-[13px] text-gray-500 truncate">
        We add {service.prefix} for you.
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
          className="flex shrink-0 select-none items-center gap-2 rounded-l-lg border-r border-gray-200 bg-gray-50/70 px-3 sm:px-3.5"
        >
          {service.icon}
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
