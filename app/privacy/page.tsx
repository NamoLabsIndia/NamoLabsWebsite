import React from "react";
import Link from "next/link";
import LegalDocument, {
  LegalP,
  LegalList,
  LegalSection,
} from "@/components/legal/LegalDocument";

const BASE_URL = "https://namolabs.in";
const LAST_UPDATED = "July 23, 2026";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How Namo Labs LLP collects, uses, and protects your personal information. We collect as little as possible and never sell your data.",
  alternates: {
    canonical: `${BASE_URL}/privacy`,
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Privacy Policy",
  description: metadata.description,
  url: `${BASE_URL}/privacy`,
  dateModified: "2026-07-23",
  publisher: {
    "@type": "Organization",
    name: "Namo Labs",
    url: BASE_URL,
  },
};

const sections: LegalSection[] = [
  {
    heading: "1. Information we collect",
    body: (
      <>
        <LegalP>We collect only the information we need to respond to you:</LegalP>
        <LegalList>
          <li>
            <strong>Information you give us.</strong> When you contact us or apply
            for a role, we collect the details you submit — your name, email
            address, phone number, and the content of your message or application
            (including any documents you attach, such as a CV).
          </li>
          <li>
            <strong>Information collected automatically.</strong> Like most
            websites, our hosting provider and any analytics we use may record
            basic technical data — such as IP address, browser type, and pages
            visited — to keep the site secure and understand how it is used.
          </li>
        </LegalList>
      </>
    ),
  },
  {
    heading: "2. How we use your information",
    body: (
      <>
        <LegalP>We use the information you provide only to:</LegalP>
        <LegalList>
          <li>respond to your enquiries and communicate with you;</li>
          <li>consider and process job or collaboration applications;</li>
          <li>operate, secure, maintain, and improve the website.</li>
        </LegalList>
        <LegalP>
          <strong>
            We do not sell, rent, or trade your personal information.
          </strong>{" "}
          We do not use it for advertising, and we do not share it with third
          parties for their own marketing.
        </LegalP>
      </>
    ),
  },
  {
    heading: "3. Legal basis for processing",
    body: (
      <LegalP>
        Where laws such as the EU/UK General Data Protection Regulation apply, we
        process your contact and application data on the basis of your consent and
        our legitimate interest in responding to you, and any analytics data on
        the basis of legitimate interest or consent where required. For users in
        India, we handle personal data in line with the Digital Personal Data
        Protection Act, 2023.
      </LegalP>
    ),
  },
  {
    heading: "4. How we share information",
    body: (
      <>
        <LegalP>We do not sell your data. We share it only:</LegalP>
        <LegalList>
          <li>
            with service providers who help us operate the site (for example, our
            hosting provider), under confidentiality obligations and only to the
            extent needed;
          </li>
          <li>
            where required by law, regulation, or legal process, or to protect our
            rights, safety, or property.
          </li>
        </LegalList>
      </>
    ),
  },
  {
    heading: "5. Data retention",
    body: (
      <LegalP>
        We keep personal information only for as long as needed for the purpose it
        was collected — for example, to handle your enquiry or evaluate an
        application — after which we delete or anonymise it, unless a longer
        retention period is required by law.
      </LegalP>
    ),
  },
  {
    heading: "6. Your rights",
    body: (
      <LegalP>
        Subject to applicable law, including India&apos;s Digital Personal Data
        Protection Act, 2023 and the GDPR where it applies, you may request access
        to, correction of, or deletion of your personal data, and you may withdraw
        any consent you have given. To exercise these rights, email us at{" "}
        <a
          href="mailto:info@namolabs.in"
          className="text-accent font-medium hover:underline"
        >
          info@namolabs.in
        </a>
        .
      </LegalP>
    ),
  },
  {
    heading: "7. Cookies",
    body: (
      <LegalP>
        We use only the cookies necessary for the site to function and, where
        enabled, privacy-respecting analytics to understand site usage. You can
        control or delete cookies through your browser settings; disabling some
        cookies may affect how the site works.
      </LegalP>
    ),
  },
  {
    heading: "8. Data security",
    body: (
      <LegalP>
        We take reasonable technical and organisational measures to protect your
        personal information. However, no method of transmission over the internet
        or electronic storage is completely secure, and we cannot guarantee
        absolute security.
      </LegalP>
    ),
  },
  {
    heading: "9. International visitors",
    body: (
      <LegalP>
        Namo Labs is based in India. If you access the site from outside India,
        please be aware that any information you provide may be processed and
        stored in India, where data protection laws may differ from those in your
        country.
      </LegalP>
    ),
  },
  {
    heading: "10. Children's privacy",
    body: (
      <LegalP>
        Our website is not directed at children under the age of 18, and we do not
        knowingly collect personal information from them. If you believe a child
        has provided us with personal data, please contact us and we will delete
        it.
      </LegalP>
    ),
  },
  {
    heading: "11. Changes to this policy",
    body: (
      <LegalP>
        We may update this Privacy Policy from time to time. The &ldquo;Last
        updated&rdquo; date at the top of this page reflects the most recent
        version, and material changes will be posted here.
      </LegalP>
    ),
  },
  {
    heading: "12. Contact us",
    body: (
      <LegalP>
        If you have any questions about this Privacy Policy or how we handle your
        data, contact <strong>Namo Labs LLP</strong>, Chennai, Tamil Nadu, India —{" "}
        <a
          href="mailto:info@namolabs.in"
          className="text-accent font-medium hover:underline"
        >
          info@namolabs.in
        </a>{" "}
        · +91 6381141795. You can also reach us through our{" "}
        <Link href="/contact" className="text-accent font-medium hover:underline">
          contact page
        </Link>
        .
      </LegalP>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <LegalDocument
        title="Privacy Policy"
        lastUpdated={LAST_UPDATED}
        intro={
          <LegalP>
            This Privacy Policy explains how <strong>Namo Labs LLP</strong>{" "}
            (&ldquo;Namo Labs&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) collects,
            uses, and protects your personal information when you use{" "}
            <strong>namolabs.in</strong>. We are committed to collecting as little
            personal data as possible and never selling it.
          </LegalP>
        }
        sections={sections}
      />
    </>
  );
}
