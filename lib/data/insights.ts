export interface InsightArticle {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  excerpt: string;
  category: string;
  author: string;
  authorTitle: string;
  datePublished: string;
  dateModified: string;
  readingTime: string;
}

// Single source of truth for the /insights index, sitemap, and per-article schema.
// Article bodies live in components/insights/articles/* and are mapped by slug in
// app/insights/[slug]/page.tsx.
export const insights: InsightArticle[] = [
  {
    slug: "nist-pqc-standards-ml-kem-ml-dsa-explained",
    title:
      "NIST's Post-Quantum Cryptography Standards: ML-KEM and ML-DSA Explained",
    metaTitle: "NIST PQC Standards: ML-KEM & ML-DSA Explained (2026)",
    description:
      "NIST finalized ML-KEM and ML-DSA as its core post-quantum cryptography standards. Here's what they are, how they work, and what your migration timeline should look like.",
    excerpt:
      "A technical explainer on FIPS 203 and FIPS 204 — how ML-KEM and ML-DSA work, their parameter sets, and the sector-by-sector migration deadlines that make this urgent now.",
    category: "Post-Quantum Cryptography",
    author: "Namoj PeriaKumar",
    authorTitle: "Founder & CEO, Namo Labs",
    datePublished: "2026-07-23",
    dateModified: "2026-07-23",
    readingTime: "9 min read",
  },
];

export function getArticle(slug: string): InsightArticle | undefined {
  return insights.find((a) => a.slug === slug);
}
