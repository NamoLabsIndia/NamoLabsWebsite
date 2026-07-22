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
      // Blog was removed with no redirect; this specific post is closely
      // related to the cryptography research page, which now has a real
      // definition of post-quantum cryptography to land visitors on.
      {
        source: "/blog/nist-pqc-standards-2024-ml-kem-ml-dsa-explained",
        destination: "/research/cryptography",
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
