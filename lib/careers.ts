/**
 * Shared contract for the careers application form.
 *
 * Imported by both the client form (`components/careers/ApplicationForm`) and
 * the API route (`app/api/careers/apply`) so client-side and server-side
 * validation can never drift apart. Keep this file free of server-only
 * imports — it is bundled into the client.
 */

import { digitsOf, splitPhone } from "@/lib/countries";

/** Resume upload ceiling. Mirrored in the copy shown under the upload field. */
export const MAX_RESUME_BYTES = 10 * 1024 * 1024;
export const MAX_RESUME_LABEL = "10 MB";
export const RESUME_ACCEPT = ".pdf,application/pdf";

/**
 * Offered after the applicant types `@`. Suggestions only — a custom domain
 * (`ayush@iitb.ac.in`) must never be harder to enter than a Gmail address, so
 * nothing here is enforced at validation time.
 *
 * Ordered by how common they are among Indian applicants, since that is who
 * this form mostly serves.
 */
export const EMAIL_DOMAIN_SUGGESTIONS = [
  "gmail.com",
  "outlook.com",
  "yahoo.com",
  "yahoo.in",
  "hotmail.com",
  "rediffmail.com",
  "icloud.com",
  "protonmail.com",
  "live.com",
  "zoho.com",
  "aol.com",
  "msn.com",
] as const;

/**
 * Returns the domains worth offering for what has been typed so far, or an
 * empty list when there is nothing useful to suggest (no `@`, more than one
 * `@`, or the applicant has already typed a domain we don't recognise).
 */
export function suggestEmailDomains(value: string, limit = 6): string[] {
  const parts = value.split("@");
  if (parts.length !== 2) return [];

  const [local, domain] = parts;
  if (!local) return [];

  const typed = domain.toLowerCase();
  const matches = EMAIL_DOMAIN_SUGGESTIONS.filter(
    (candidate) => candidate.startsWith(typed) && candidate !== typed,
  );

  return matches.slice(0, limit).map((candidate) => `${local}@${candidate}`);
}

/** Long-form answer limits. */
export const STORY_MAX_LENGTH = 2000;
export const STORY_MIN_LENGTH = 50;

/** Defensive ceilings on the short fields so oversized payloads are rejected. */
export const NAME_MAX_LENGTH = 120;
export const EMAIL_MAX_LENGTH = 254;
export const PHONE_MAX_LENGTH = 32;
export const URL_MAX_LENGTH = 500;
export const ROLE_MAX_LENGTH = 120;

/** Endpoint the form posts to. */
export const APPLICATION_ENDPOINT = "/api/careers/apply";

/** Hidden anti-spam field. A real applicant never fills this in. */
export const HONEYPOT_FIELD = "company_website";

export interface ApplicationValues {
  fullName: string;
  email: string;
  phone: string;
  linkedin: string;
  githubOrPortfolio: string;
  whyNamoLabs: string;
  recentProject: string;
}

export type ApplicationField =
  | keyof ApplicationValues
  | "resume"
  | "privacyConsent";

export type ApplicationErrors = Partial<Record<ApplicationField, string>>;

export const EMPTY_APPLICATION: ApplicationValues = {
  fullName: "",
  email: "",
  phone: "",
  linkedin: "",
  githubOrPortfolio: "",
  whyNamoLabs: "",
  recentProject: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(value: string): boolean {
  return value.length <= EMAIL_MAX_LENGTH && EMAIL_RE.test(value);
}

/**
 * Validates a stored phone value such as `+91 98765 43210`.
 *
 * When the dial code matches a country we hold rules for, the national number
 * is checked against that country's digit range — so a 9-digit Indian mobile
 * is caught here rather than three weeks later when someone tries to call it.
 * For anything else we fall back to the E.164 range (7–15 digits), because a
 * gap in our table must never block a legitimate applicant.
 */
export function isValidPhone(value: string): boolean {
  if (value.length > PHONE_MAX_LENGTH) return false;
  if (!/^\+?[\d\s().-]+$/.test(value)) return false;

  const allDigits = digitsOf(value);
  if (allDigits.length < 7 || allDigits.length > 15) return false;

  if (value.trim().startsWith("+")) {
    const { country, national } = splitPhone(value);
    const nationalDigits = digitsOf(national);
    // Only enforce the range when the value actually carries that dial code;
    // splitPhone falls back to the default country for unknown prefixes.
    if (value.trim().startsWith(country.dialCode)) {
      return (
        nationalDigits.length >= country.min &&
        nationalDigits.length <= country.max
      );
    }
  }

  return true;
}

/**
 * Explains *why* a number was rejected.
 *
 * "Enter a phone number including the country code" was the old message for
 * every failure, which was actively misleading once the country code is picked
 * from a menu and can't be missing — someone who typed nine digits instead of
 * ten would go looking for a problem that wasn't there. When we know the
 * country, the message states the digits expected and the digits received.
 */
export function describePhoneProblem(value: string): string {
  const trimmed = value.trim();

  if (/[A-Za-z]/.test(trimmed)) {
    return "A phone number can only contain digits.";
  }

  if (trimmed.startsWith("+")) {
    const { country, national } = splitPhone(trimmed);
    if (trimmed.startsWith(country.dialCode)) {
      const entered = digitsOf(national).length;
      const expected =
        country.min === country.max
          ? `${country.min} digits`
          : `${country.min}–${country.max} digits`;
      return `${country.name} numbers are ${expected}. You've entered ${entered}.`;
    }
  }

  return "That phone number doesn't look right. Check it and try again.";
}

/**
 * Deliberately permissive: any http(s) address with a dotted host passes, and a
 * missing scheme is tolerated (`linkedin.com/in/you`). The applicant's text is
 * never rewritten in place — {@link normaliseUrl} is only used to build links.
 */
export function isValidUrl(value: string): boolean {
  if (value.length > URL_MAX_LENGTH) return false;
  try {
    const url = new URL(withScheme(value));
    return (
      (url.protocol === "http:" || url.protocol === "https:") &&
      url.hostname.includes(".")
    );
  } catch {
    return false;
  }
}

function withScheme(value: string): string {
  return /^https?:\/\//i.test(value) ? value : `https://${value}`;
}

/**
 * Host allowlists for the two profile fields.
 *
 * Matching is on the parsed URL's hostname, never on a substring of the raw
 * text: `https://linkedin.com.phish.example/in/you` contains "linkedin.com"
 * but its host is `linkedin.com.phish.example`, and a naive `includes` check
 * would wave it through.
 *
 * LinkedIn localises by subdomain (`in.linkedin.com`, `uk.linkedin.com`), so
 * a single trailing-dot suffix match is allowed for it.
 */
const LINKEDIN_HOSTS = ["linkedin.com", "www.linkedin.com"];
const GITHUB_HOSTS = ["github.com", "www.github.com"];
const GIST_HOST = "gist.github.com";

function parseProfileUrl(
  value: string,
): { host: string; segments: string[] } | null {
  if (value.length > URL_MAX_LENGTH) return null;
  try {
    const url = new URL(withScheme(value.trim()));
    if (url.protocol !== "http:" && url.protocol !== "https:") return null;
    const segments = url.pathname.split("/").filter(Boolean);
    // A profile URL must point at somebody — a bare host is not a profile.
    if (segments.length === 0) return null;
    return { host: url.hostname.toLowerCase(), segments };
  } catch {
    return null;
  }
}

/**
 * A LinkedIn "public identifier": the slug after `/in/`. LinkedIn issues these
 * as 3–100 characters of letters, digits and single hyphens.
 *
 * This is what actually closes the hole a host-only check leaves open: without
 * it, `linkedin.com/in/burnwal.com` passes, because the *host* genuinely is
 * linkedin.com — the field just built that URL out of whatever text was typed
 * as a "handle". Rejecting dots and other punctuation in the identifier itself
 * is what stops someone's typed-in domain name from being accepted as if it
 * were a username.
 */
const LINKEDIN_HANDLE_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/i;

/** GitHub's own username rules: 1–39 chars, alphanumeric, single hyphens, no leading/trailing hyphen. */
const GITHUB_HANDLE_RE = /^[a-z0-9](?:-?[a-z0-9])*$/i;

/** Accepts linkedin.com/in/<handle> and its country subdomains, nothing else. */
export function isLinkedInUrl(value: string): boolean {
  const parsed = parseProfileUrl(value);
  if (!parsed) return false;
  const { host, segments } = parsed;

  const validHost =
    LINKEDIN_HOSTS.includes(host) ||
    (host.endsWith(".linkedin.com") && host.split(".").length === 3);
  if (!validHost) return false;

  // Require the /in/<handle> shape LinkedIn actually uses for public profiles
  // — a bare linkedin.com/whatever is not a profile link.
  if (segments.length !== 2 || segments[0].toLowerCase() !== "in") return false;

  const handle = segments[1];
  return handle.length >= 3 && handle.length <= 100 && LINKEDIN_HANDLE_RE.test(handle);
}

/** Accepts github.com/<user> and gist.github.com/<user>/..., nothing else. */
export function isGitHubUrl(value: string): boolean {
  const parsed = parseProfileUrl(value);
  if (!parsed) return false;
  const { host, segments } = parsed;

  if (host === GIST_HOST) {
    return segments.length >= 1 && GITHUB_HANDLE_RE.test(segments[0]);
  }
  if (!GITHUB_HOSTS.includes(host)) return false;

  // github.com/<user> only — GitHub's own org/repo/settings paths never start
  // with a bare single segment that fails the username shape, so this also
  // rejects things like github.com/about or github.com/pricing.
  const handle = segments[0];
  return (
    segments.length === 1 &&
    handle.length <= 39 &&
    GITHUB_HANDLE_RE.test(handle) &&
    !RESERVED_GITHUB_PATHS.has(handle.toLowerCase())
  );
}

/**
 * GitHub reserves these top-level paths for its own product pages — they are
 * syntactically valid "usernames" but are not profiles.
 */
const RESERVED_GITHUB_PATHS = new Set([
  "about",
  "pricing",
  "features",
  "marketplace",
  "explore",
  "topics",
  "collections",
  "trending",
  "sponsors",
  "settings",
  "notifications",
  "issues",
  "pulls",
  "organizations",
  "login",
  "join",
  "orgs",
  "apps",
]);

/** Returns a safe absolute URL, or null when the value cannot be linked. */
export function normaliseUrl(value: string): string | null {
  if (!value || !isValidUrl(value)) return null;
  return withScheme(value);
}

export interface ResumeMeta {
  name: string;
  size: number;
  /** Browser-reported MIME type. Advisory only — never trusted server-side. */
  type?: string;
}

/** Human-readable size, e.g. `1.4 MB`. */
export function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

/**
 * Returns an error message, or null when the file is acceptable.
 *
 * Messages name the actual problem and the actual numbers. "Invalid file" tells
 * an applicant nothing; "That file is 14.2 MB — the limit is 10 MB" tells them
 * exactly what to do next.
 */
export function validateResume(file: ResumeMeta | null): string | null {
  if (!file) return "Attach your resume as a PDF.";
  if (file.size === 0) {
    return "That file is empty. Check it opens, then attach it again.";
  }
  if (file.size > MAX_RESUME_BYTES) {
    return `That file is ${formatBytes(file.size)} — the limit is ${MAX_RESUME_LABEL}. Compress it or export a lighter PDF, then try again.`;
  }
  if (!/\.pdf$/i.test(file.name)) {
    return `“${file.name}” isn't a PDF. Export or print it to PDF and attach that instead.`;
  }
  if (file.type && file.type !== "application/pdf") {
    return "That file isn't a PDF. Export or print it to PDF and attach that instead.";
  }
  return null;
}

/**
 * Validates the text portion of an application. Shared by the browser (for
 * inline field errors) and by the API route (which never trusts the browser).
 *
 * Pass `resume: undefined` to skip file checks — the route validates the
 * uploaded bytes separately, including the PDF signature.
 */
export function validateApplication(
  values: ApplicationValues,
  options: { resume?: ResumeMeta | null; privacyConsent: boolean }
): ApplicationErrors {
  const errors: ApplicationErrors = {};

  const fullName = values.fullName.trim();
  if (!fullName) {
    errors.fullName = "Enter your full name.";
  } else if (fullName.length > NAME_MAX_LENGTH) {
    errors.fullName = `Keep this under ${NAME_MAX_LENGTH} characters.`;
  }

  const email = values.email.trim();
  if (!email) {
    errors.email = "Enter your email address.";
  } else if (!isValidEmail(email)) {
    errors.email = "That email address doesn't look right.";
  }

  const phone = values.phone.trim();
  if (!phone) {
    errors.phone = "Enter a phone number we can reach you on.";
  } else if (!isValidPhone(phone)) {
    errors.phone = describePhoneProblem(phone);
  }

  const linkedin = values.linkedin.trim();
  if (linkedin && !isLinkedInUrl(linkedin)) {
    errors.linkedin =
      "This must be a LinkedIn profile URL, e.g. linkedin.com/in/your-name.";
  }

  const github = values.githubOrPortfolio.trim();
  if (github && !isGitHubUrl(github)) {
    errors.githubOrPortfolio =
      "This must be a GitHub profile URL, e.g. github.com/your-username.";
  }

  const why = values.whyNamoLabs.trim();
  if (!why) {
    errors.whyNamoLabs = "Tell us why you want to work here.";
  } else if (why.length < STORY_MIN_LENGTH) {
    errors.whyNamoLabs = `Write at least ${STORY_MIN_LENGTH} characters.`;
  } else if (why.length > STORY_MAX_LENGTH) {
    errors.whyNamoLabs = `Keep this under ${STORY_MAX_LENGTH} characters.`;
  }

  const project = values.recentProject.trim();
  if (!project) {
    errors.recentProject = "Describe a project you're proud of.";
  } else if (project.length < STORY_MIN_LENGTH) {
    errors.recentProject = `Write at least ${STORY_MIN_LENGTH} characters.`;
  } else if (project.length > STORY_MAX_LENGTH) {
    errors.recentProject = `Keep this under ${STORY_MAX_LENGTH} characters.`;
  }

  if (options.resume !== undefined) {
    const resumeError = validateResume(options.resume);
    if (resumeError) errors.resume = resumeError;
  }

  if (!options.privacyConsent) {
    errors.privacyConsent = "We need your consent to review your application.";
  }

  return errors;
}

/** Field order used to focus and list errors consistently. */
export const FIELD_ORDER: ApplicationField[] = [
  "fullName",
  "email",
  "phone",
  "linkedin",
  "githubOrPortfolio",
  "whyNamoLabs",
  "recentProject",
  "resume",
  "privacyConsent",
];

export const FIELD_LABELS: Record<ApplicationField, string> = {
  fullName: "Full name",
  email: "Email address",
  phone: "Phone number",
  linkedin: "LinkedIn",
  githubOrPortfolio: "GitHub",
  whyNamoLabs: "Why Namo Labs",
  recentProject: "Recent project",
  resume: "Resume",
  privacyConsent: "Privacy consent",
};
