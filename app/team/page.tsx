import type { Metadata } from "next";
import TeamContent from "./TeamContent";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the researchers, engineers, and builders at Namo Labs — united by one purpose: driving technology for humanity. Learn about our philosophy, culture, and the people building tomorrow.",
  alternates: {
    canonical: "https://namolabs.in/team",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Namoj PeriaKumar",
  jobTitle: "Founder & CEO",
  worksFor: {
    "@type": "Organization",
    name: "Namo Labs",
    url: "https://namolabs.in",
  },
  url: "https://namolabs.in/team",
  image: "https://namolabs.in/Founder%20Image.jpg",
  description:
    "Namoj is a researcher and builder focused on cryptography, blockchain, and emerging technologies. He founded Namo Labs to build technologies that serve humanity.",
  knowsAbout: [
    "Post-Quantum Cryptography",
    "Blockchain",
    "Artificial Intelligence",
    "Quantum Technologies",
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://namolabs.in" },
    { "@type": "ListItem", position: 2, name: "Company", item: "https://namolabs.in/about" },
    { "@type": "ListItem", position: 3, name: "Team", item: "https://namolabs.in/team" },
  ],
};

export default function TeamPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <TeamContent />
    </>
  );
}
