import { Resend } from 'resend';

// Instantiated lazily: reading the key at module scope would throw during
// `next build`, where RESEND_API_KEY is not present.
let client: Resend | null = null;

export function getResend(): Resend {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not set');
  }
  if (!client) {
    client = new Resend(apiKey);
  }
  return client;
}

/**
 * Verified sender on the namolabs.in domain. Falls back to Resend's shared
 * onboarding sender, which only delivers to the Resend account owner's own
 * address — set CONTACT_FROM_EMAIL once namolabs.in is verified.
 */
export const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL || 'Namo Labs <onboarding@resend.dev>';

export const TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'info@namolabs.in';
