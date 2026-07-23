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
  title: "Terms of Service",
  description:
    "The terms that govern your use of the Namo Labs LLP website (namolabs.in), including acceptable use, intellectual property, disclaimers, and governing law.",
  alternates: {
    canonical: `${BASE_URL}/terms`,
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Terms of Service",
  description: metadata.description,
  url: `${BASE_URL}/terms`,
  dateModified: "2026-07-23",
  publisher: {
    "@type": "Organization",
    name: "Namo Labs",
    url: BASE_URL,
  },
};

const sections: LegalSection[] = [
  {
    heading: "1. Acceptance of these terms",
    body: (
      <LegalP>
        By accessing or using namolabs.in (the &ldquo;Site&rdquo;), you agree to
        be bound by these Terms of Service. If you do not agree with any part of
        them, please do not use the Site.
      </LegalP>
    ),
  },
  {
    heading: "2. About Namo Labs and this website",
    body: (
      <LegalP>
        The Site is an informational website operated by{" "}
        <strong>Namo Labs LLP</strong>, a deep-tech research and consulting
        organisation based in Chennai, India. Its content is provided for general
        information and to let you learn about and contact us. Nothing on the Site
        constitutes professional, legal, financial, or security advice, and it
        should not be relied on as such.
      </LegalP>
    ),
  },
  {
    heading: "3. Use of the website",
    body: (
      <>
        <LegalP>
          You may view and use the Site for lawful, personal, and
          business-evaluation purposes. You agree not to:
        </LegalP>
        <LegalList>
          <li>
            misuse the Site or attempt to gain unauthorised access to it or its
            underlying systems;
          </li>
          <li>
            interfere with, disrupt, or place an unreasonable load on the Site or
            its infrastructure;
          </li>
          <li>
            scrape, harvest, or collect data from the Site in violation of these
            Terms or applicable law;
          </li>
          <li>
            use the Site to infringe the rights of others or to engage in any
            unlawful activity.
          </li>
        </LegalList>
      </>
    ),
  },
  {
    heading: "4. Intellectual property",
    body: (
      <LegalP>
        The Site and its content — including text, graphics, logos, and the marks{" "}
        <strong>Namo Labs</strong>, <strong>QSCL&trade;</strong>,{" "}
        <strong>TierraTrace&trade;</strong>, and <strong>DAFS&trade;</strong> —
        are owned by or licensed to Namo Labs LLP and are protected by
        intellectual-property laws. You may not reproduce, distribute, or reuse
        them without our prior written permission, except as ordinary browsing of
        the Site necessarily involves.
      </LegalP>
    ),
  },
  {
    heading: "5. Third-party links",
    body: (
      <LegalP>
        The Site may contain links to third-party websites, including our platform
        sites and code repositories. We provide these for convenience and are not
        responsible for the content, policies, or practices of any third-party
        site.
      </LegalP>
    ),
  },
  {
    heading: "6. Disclaimers",
    body: (
      <LegalP>
        The Site and its content are provided on an &ldquo;as is&rdquo; and
        &ldquo;as available&rdquo; basis, without warranties of any kind, express
        or implied. We do not warrant that the Site will be uninterrupted,
        error-free, or secure, or that any information on it is complete, accurate,
        or current. Any reliance you place on the content is at your own risk.
      </LegalP>
    ),
  },
  {
    heading: "7. Limitation of liability",
    body: (
      <LegalP>
        To the maximum extent permitted by law, Namo Labs LLP and its members,
        employees, and partners will not be liable for any indirect, incidental,
        special, or consequential damages arising out of or in connection with
        your use of, or inability to use, the Site.
      </LegalP>
    ),
  },
  {
    heading: "8. Indemnification",
    body: (
      <LegalP>
        You agree to indemnify and hold harmless Namo Labs LLP from any claims,
        losses, or expenses arising out of your misuse of the Site or your breach
        of these Terms.
      </LegalP>
    ),
  },
  {
    heading: "9. Governing law",
    body: (
      <LegalP>
        These Terms are governed by and construed in accordance with the laws of
        India. Any disputes arising from them or your use of the Site are subject
        to the exclusive jurisdiction of the courts of Chennai, Tamil Nadu.
      </LegalP>
    ),
  },
  {
    heading: "10. Changes to these terms",
    body: (
      <LegalP>
        We may update these Terms from time to time. The &ldquo;Last updated&rdquo;
        date at the top of this page reflects the current version, and your
        continued use of the Site after changes take effect means you accept the
        revised Terms.
      </LegalP>
    ),
  },
  {
    heading: "11. Contact",
    body: (
      <LegalP>
        Questions about these Terms can be sent to <strong>Namo Labs LLP</strong>,
        Chennai, Tamil Nadu, India —{" "}
        <a
          href="mailto:info@namolabs.in"
          className="text-accent font-medium hover:underline"
        >
          info@namolabs.in
        </a>
        , or through our{" "}
        <Link href="/contact" className="text-accent font-medium hover:underline">
          contact page
        </Link>
        .
      </LegalP>
    ),
  },
];

export default function TermsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <LegalDocument
        title="Terms of Service"
        lastUpdated={LAST_UPDATED}
        intro={
          <LegalP>
            These Terms of Service (&ldquo;Terms&rdquo;) govern your use of{" "}
            <strong>namolabs.in</strong>, operated by{" "}
            <strong>Namo Labs LLP</strong>. Please read them carefully before using
            the Site.
          </LegalP>
        }
        sections={sections}
      />
    </>
  );
}
