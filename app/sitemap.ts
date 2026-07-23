import { MetadataRoute } from 'next';

const BASE_URL = 'https://namolabs.in';

// All research domain slugs
const researchDomainSlugs = ['blockchain', 'cryptography', 'ai', 'quantum', 'cloud'];

// All solution segment slugs
const solutionSlugs = ['governments', 'organisations', 'institutions', 'startups', 'msmes'];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static pages with priority weights
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/research`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/consulting`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/careers`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/careers/apply`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/collaboration`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/team`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/process`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  // Dynamic research domain pages
  const researchRoutes: MetadataRoute.Sitemap = researchDomainSlugs.map((slug) => ({
    url: `${BASE_URL}/research/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  // Dynamic solution segment pages
  const solutionRoutes: MetadataRoute.Sitemap = solutionSlugs.map((slug) => ({
    url: `${BASE_URL}/solutions/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  return [...staticRoutes, ...researchRoutes, ...solutionRoutes];
}
