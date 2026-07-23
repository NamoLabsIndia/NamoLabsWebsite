/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      // GA4 shows real historical traffic to these pre-restructuring URLs;
      // both now 404 with no redirect in place.
      {
        source: "/products/dafs",
        destination: "/platform/dafs",
        permanent: true,
      },
      {
        source: "/careers/open-application",
        destination: "/careers/apply",
        permanent: true,
      },
      // No current page maps 1:1 to this old URL; closest real match is
      // the research-collaboration page.
      {
        source: "/contact/research",
        destination: "/collaboration",
        permanent: true,
      },
      // This post was removed with the old /blog; it has now been relaunched
      // under /insights. Point the old URL at the new article to recover any
      // residual link equity (GA4 showed real historical traffic here).
      {
        source: "/blog/nist-pqc-standards-2024-ml-kem-ml-dsa-explained",
        destination: "/insights/nist-pqc-standards-ml-kem-ml-dsa-explained",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      // Security headers for all routes
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
        ],
      },
      // Long-term immutable cache for Next.js static assets (hashed filenames)
      {
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Cache public assets (images, fonts, icons) for 7 days
      {
        source: "/(.*\\.(?:png|jpg|jpeg|webp|avif|gif|svg|ico|woff|woff2|ttf|otf))",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
