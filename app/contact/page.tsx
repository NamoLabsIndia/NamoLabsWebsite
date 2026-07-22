import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Namo Labs. Reach us for consulting, partnerships, research collaboration, or general enquiries. We respond within 24 hours.",
  alternates: {
    canonical: "https://namolabs.in/contact",
  },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Namo Labs",
  url: "https://namolabs.in/contact",
  description: "Contact page for Namo Labs — deep tech research and consulting.",
  mainEntity: {
    "@type": "Organization",
    name: "Namo Labs",
    telephone: "+916381141795",
    email: "info@namolabs.in",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <ContactContent />
    </>
  );
}
