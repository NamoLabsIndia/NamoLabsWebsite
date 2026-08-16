/**
 * Shared contract for the careers application form.
 *
 * Imported by both the client form (`components/careers/ApplicationForm`) and
 * the API route (`app/api/careers/apply`) so client-side and server-side
 * validation can never drift apart. Keep this file free of server-only
 * imports — it is bundled into the client.
 */

/** Resume upload ceiling. Mirrored in the copy shown under the upload field. */
export const MAX_RESUME_BYTES = 10 * 1024 * 1024;
export const MAX_RESUME_LABEL = "10MB";
export const RESUME_ACCEPT = ".pdf,application/pdf";

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
 * Accepts realistic international numbers rather than a single country format:
 * an optional `+`, then 7–15 digits (the E.164 range), with whatever spacing,
 * dashes, dots or parentheses the applicant prefers.
 */
export function isValidPhone(value: string): boolean {
  if (value.length > PHONE_MAX_LENGTH) return false;
  if (!/^\+?[\d\s().-]+$/.test(value)) return false;
  const digits = value.replace(/\D/g, "");
  return digits.length >= 7 && digits.length <= 15;
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

/** Returns an error message, or null when the file is acceptable. */
export function validateResume(file: ResumeMeta | null): string | null {
  if (!file) return "Attach your resume as a PDF.";
  if (file.size === 0) return "That file is empty. Choose a different PDF.";
  if (file.size > MAX_RESUME_BYTES) {
    return `That file is ${formatBytes(file.size)}. The limit is ${MAX_RESUME_LABEL}.`;
  }
  if (!/\.pdf$/i.test(file.name)) {
    return "Resumes must be PDF files.";
  }
  if (file.type && file.type !== "application/pdf") {
    return "Resumes must be PDF files.";
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
    errors.phone = "Enter a phone number including the country code.";
  }

  const linkedin = values.linkedin.trim();
  if (linkedin && !isValidUrl(linkedin)) {
    errors.linkedin = "Enter a full URL, e.g. linkedin.com/in/you.";
  }

  const portfolio = values.githubOrPortfolio.trim();
  if (portfolio && !isValidUrl(portfolio)) {
    errors.githubOrPortfolio = "Enter a full URL, e.g. github.com/you.";
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
  githubOrPortfolio: "GitHub / portfolio",
  whyNamoLabs: "Why Namo Labs",
  recentProject: "Recent project",
  resume: "Resume",
  privacyConsent: "Privacy consent",
};
