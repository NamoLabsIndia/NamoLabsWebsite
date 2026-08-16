import { NextResponse } from 'next/server';
import { getResend, FROM_EMAIL, CAREERS_TO_EMAIL } from '@/lib/resend';
import {
  HONEYPOT_FIELD,
  MAX_RESUME_BYTES,
  MAX_RESUME_LABEL,
  ROLE_MAX_LENGTH,
  formatBytes,
  normaliseUrl,
  validateApplication,
  type ApplicationValues,
} from '@/lib/careers';

// Buffer/Uint8Array handling for the resume attachment requires the Node runtime.
export const runtime = 'nodejs';
// Applications are never cached.
export const dynamic = 'force-dynamic';

/**
 * Generous ceiling for the whole multipart body: the resume plus the text
 * fields and multipart overhead. Requests larger than this are rejected before
 * the body is buffered into memory.
 */
const MAX_BODY_BYTES = MAX_RESUME_BYTES + 1024 * 1024;

/** First bytes of every valid PDF — the client-reported MIME type is not trusted. */
const PDF_SIGNATURE = '%PDF-';

/**
 * Best-effort in-memory throttle. Serverless instances are ephemeral and not
 * shared, so this slows down casual abuse from a single client but is not a
 * substitute for edge rate limiting. See the note in the README/report.
 */
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const submissions = new Map<string, number[]>();

// User input is interpolated into an HTML email body.
const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const asString = (value: FormDataEntryValue | null) =>
  typeof value === 'string' ? value.trim() : '';

const row = (label: string, value: string) =>
  `<p style="margin:4px 0;"><strong>${escapeHtml(label)}:</strong> ${escapeHtml(value)}</p>`;

const linkRow = (label: string, value: string) => {
  const href = normaliseUrl(value);
  if (!href) return row(label, value);
  return `<p style="margin:4px 0;"><strong>${escapeHtml(label)}:</strong> <a href="${escapeHtml(
    href
  )}">${escapeHtml(value)}</a></p>`;
};

const block = (heading: string, body: string) =>
  `<h3 style="margin:20px 0 6px;">${escapeHtml(heading)}</h3>` +
  `<p style="white-space:pre-wrap;margin:0;">${escapeHtml(body)}</p>`;

function getClientKey(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0].trim();
  return request.headers.get('x-real-ip') || 'unknown';
}

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const recent = (submissions.get(key) || []).filter(
    (at) => now - at < RATE_LIMIT_WINDOW_MS
  );

  if (recent.length >= RATE_LIMIT_MAX) {
    submissions.set(key, recent);
    return true;
  }

  recent.push(now);
  submissions.set(key, recent);

  // Opportunistic cleanup so the map cannot grow without bound.
  if (submissions.size > 500) {
    for (const [existingKey, times] of submissions) {
      if (times.every((at) => now - at >= RATE_LIMIT_WINDOW_MS)) {
        submissions.delete(existingKey);
      }
    }
  }

  return false;
}

/**
 * Reduces an uploaded filename to a safe, predictable attachment name.
 * Strips any directory components, control characters and unusual glyphs so
 * the value can never escape the attachment context or confuse a mail client.
 */
function sanitiseFilename(name: string): string {
  const base = name.split(/[\\/]/).pop() || 'resume.pdf';
  const cleaned = Array.from(base)
    .map((char) => {
      const code = char.codePointAt(0) ?? 0;
      // Drop C0/DEL control characters outright, then reduce anything outside
      // the allowlist to an underscore.
      if (code < 0x20 || code === 0x7f) return '';
      return /[A-Za-z0-9._ -]/.test(char) ? char : '_';
    })
    .join('')
    .replace(/_{2,}/g, '_')
    .replace(/^[._]+/, '')
    .trim()
    .slice(0, 100);

  const safe = cleaned.length > 0 ? cleaned : 'resume.pdf';
  return /\.pdf$/i.test(safe) ? safe : `${safe}.pdf`;
}

const genericFailure = (status: number) =>
  NextResponse.json(
    { error: 'We could not submit your application right now. Please try again in a moment.' },
    { status }
  );

export async function POST(request: Request) {
  // 1. Reject oversized bodies before buffering anything into memory.
  const declaredLength = Number(request.headers.get('content-length') || 0);
  if (declaredLength > MAX_BODY_BYTES) {
    return NextResponse.json(
      { error: `Your resume must be smaller than ${MAX_RESUME_LABEL}.` },
      { status: 413 }
    );
  }

  // 2. Throttle repeat submissions from the same client.
  if (isRateLimited(getClientKey(request))) {
    return NextResponse.json(
      { error: 'You have already sent several applications. Please try again later.' },
      { status: 429 }
    );
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json({ error: 'Invalid form submission.' }, { status: 400 });
  }

  // 3. Honeypot: silently accept bot submissions so they do not retry, but
  //    never send an email.
  if (asString(form.get(HONEYPOT_FIELD))) {
    return NextResponse.json({ success: true }, { status: 200 });
  }

  const values: ApplicationValues = {
    fullName: asString(form.get('fullName')),
    email: asString(form.get('email')),
    phone: asString(form.get('phone')),
    linkedin: asString(form.get('linkedin')),
    githubOrPortfolio: asString(form.get('githubOrPortfolio')),
    whyNamoLabs: asString(form.get('whyNamoLabs')),
    recentProject: asString(form.get('recentProject')),
  };
  const privacyConsent = asString(form.get('privacyConsent')) === 'true';
  const role = asString(form.get('role')).slice(0, ROLE_MAX_LENGTH);

  // 4. Re-run the shared validation server-side. The browser is never trusted.
  const errors = validateApplication(values, { privacyConsent });
  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { error: 'Some details need fixing before we can accept this application.', fields: errors },
      { status: 400 }
    );
  }

  // 5. Validate the upload itself.
  const upload = form.get('resume');
  if (!(upload instanceof File) || upload.size === 0) {
    return NextResponse.json(
      { error: 'Attach your resume as a PDF.', fields: { resume: 'Attach your resume as a PDF.' } },
      { status: 400 }
    );
  }
  if (upload.size > MAX_RESUME_BYTES) {
    return NextResponse.json(
      {
        error: `Your resume is ${formatBytes(upload.size)}. The limit is ${MAX_RESUME_LABEL}.`,
        fields: { resume: `That file is too large. The limit is ${MAX_RESUME_LABEL}.` },
      },
      { status: 400 }
    );
  }

  const resumeBytes = Buffer.from(await upload.arrayBuffer());

  // Verify the actual file signature rather than the client-declared MIME type.
  if (resumeBytes.subarray(0, PDF_SIGNATURE.length).toString('latin1') !== PDF_SIGNATURE) {
    return NextResponse.json(
      {
        error: 'That file is not a readable PDF.',
        fields: { resume: 'That file is not a readable PDF.' },
      },
      { status: 400 }
    );
  }

  const filename = sanitiseFilename(upload.name);

  const subject = role
    ? `[Careers] ${role} — ${values.fullName}`
    : `[Careers] Open application — ${values.fullName}`;

  const html = `
    <h2 style="margin:0 0 12px;">New Career Application</h2>
    ${row('Applied for', role || 'Open application')}
    ${row('Name', values.fullName)}
    ${row('Email', values.email)}
    ${row('Phone', values.phone)}
    ${values.linkedin ? linkRow('LinkedIn', values.linkedin) : ''}
    ${values.githubOrPortfolio ? linkRow('GitHub / Portfolio', values.githubOrPortfolio) : ''}
    ${row('Privacy consent', 'Granted')}
    ${row('Received', new Date().toISOString())}
    ${block('Why Namo Labs', values.whyNamoLabs)}
    ${block("A recent project they're proud of", values.recentProject)}
    <p style="margin:20px 0 0;color:#666;">Resume attached: ${escapeHtml(filename)} (${formatBytes(
      upload.size
    )})</p>
  `;

  try {
    const { data, error } = await getResend().emails.send({
      from: FROM_EMAIL,
      to: CAREERS_TO_EMAIL,
      replyTo: values.email,
      subject,
      html,
      attachments: [{ filename, content: resumeBytes, contentType: 'application/pdf' }],
    });

    // Resend reports delivery failures in `error` rather than throwing.
    if (error) {
      // Logged without applicant details or resume contents.
      console.error('Resend rejected careers application:', error.name);
      return genericFailure(502);
    }

    console.log('Careers application email sent:', data?.id);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error(
      'Error sending careers application:',
      err instanceof Error ? err.message : 'unknown error'
    );
    return genericFailure(500);
  }
}

/** Applications are accepted by POST only. */
export async function GET() {
  return NextResponse.json({ error: 'Method not allowed.' }, { status: 405 });
}
