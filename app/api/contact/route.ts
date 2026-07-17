import { NextResponse } from 'next/server';
import { getResend, FROM_EMAIL, TO_EMAIL } from '@/lib/resend';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// User input is interpolated into an HTML email body.
const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const asString = (value: unknown) => (typeof value === 'string' ? value.trim() : '');

const row = (label: string, value: string) =>
  `<p><strong>${label}:</strong> ${escapeHtml(value)}</p>`;

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 });
  }

  const body = (payload ?? {}) as Record<string, unknown>;
  const formType = asString(body.formType) || 'contact';
  const name = asString(body.name);
  const email = asString(body.email);
  const phone = asString(body.phone);
  const company = asString(body.company);
  const message = asString(body.message);

  const isEarlyAccess = formType === 'early_access';

  // Validation — early access only collects an email address.
  const errors: string[] = [];
  if (!email) {
    errors.push('Email is required.');
  } else if (!EMAIL_RE.test(email)) {
    errors.push('Please enter a valid email address.');
  }
  if (!isEarlyAccess) {
    if (!name) errors.push('Name is required.');
    if (!message) errors.push('Message is required.');
  }
  if (message.length > 5000) {
    errors.push('Message is too long.');
  }

  if (errors.length > 0) {
    return NextResponse.json({ error: errors.join(' '), errors }, { status: 400 });
  }

  const subject = isEarlyAccess
    ? `[Early Access Request] ${name || email}`
    : `[Contact Form] Message from ${name}`;

  const html = `
    <h2>${isEarlyAccess ? 'New Early Access Request' : 'New Contact Form Submission'}</h2>
    ${row('Form Source', formType)}
    ${name ? row('Name', name) : ''}
    ${row('Email', email)}
    ${phone ? row('Phone', phone) : ''}
    ${company ? row('Company', company) : ''}
    ${row('Received', new Date().toISOString())}
    ${
      message
        ? `<h3>Message:</h3><p style="white-space: pre-wrap;">${escapeHtml(message)}</p>`
        : ''
    }
  `;

  try {
    const { data, error } = await getResend().emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject,
      html,
    });

    // Resend reports delivery failures in `error` rather than throwing.
    if (error) {
      console.error('Resend rejected contact email:', error);
      return NextResponse.json(
        { error: 'Failed to send message. Please try again later.' },
        { status: 502 }
      );
    }

    console.log('Contact email sent:', data?.id);
    return NextResponse.json({ success: true, id: data?.id }, { status: 200 });
  } catch (err) {
    console.error('Error sending contact email:', err);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
