import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { Be_Vietnam_Pro, League_Spartan } from 'next/font/google';
import Script from "next/script";

const beVietnamPro = Be_Vietnam_Pro({ 
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ["latin"],
});

const leagueSpartan = League_Spartan({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
  variable: '--font-league-spartan',
});

const BASE_URL = "https://namolabs.in";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Namo Labs — Deep Tech. For Humanity.",
    template: "%s | Namo Labs",
  },
  description:
    "Namo Labs builds secure digital infrastructure, post-quantum communication systems, blockchain solutions, AI-powered platforms, and enterprise technologies that enable governments, businesses, and developers to build the future with confidence.",
  keywords: [
    "quantum security", "blockchain", "AI", "deep tech", "India",
    "QSCL", "cryptography", "post-quantum", "research lab", "namo labs",
  ],
  authors: [{ name: "Namo Labs", url: BASE_URL }],
  creator: "Namo Labs",
  publisher: "Namo Labs",

  // Favicon / Icons
  icons: {
    icon: [
      { url: "/namo-labs-logo.png", type: "image/png" },
    ],
    apple: "/namo-labs-logo.png",
    shortcut: "/namo-labs-logo.png",
  },

  // Open Graph (for link previews + Google's rich results)
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "Namo Labs",
    title: "Namo Labs — Deep Tech. For Humanity.",
    description:
      "Building post-quantum cryptography, blockchain, AI, and enterprise technologies for governments and businesses worldwide.",
    images: [
      {
        url: "/namo-labs-logo.png",
        width: 512,
        height: 512,
        alt: "Namo Labs Logo",
      },
    ],
  },

  // Twitter card
  twitter: {
    card: "summary",
    title: "Namo Labs — Deep Tech. For Humanity.",
    description:
      "Building post-quantum cryptography, blockchain, AI and enterprise technologies.",
    images: ["/namo-labs-logo.png"],
  },

  // Canonical URL
  alternates: {
    canonical: BASE_URL,
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// JSON-LD schemas
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Namo Labs",
  alternateName: "NamoLabs",
  url: BASE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${BASE_URL}/namo-labs-logo.png`,
    width: 512,
    height: 512,
  },
  description:
    "Namo Labs is a deep-tech research and engineering organisation building foundational infrastructure in cryptography, AI, blockchain, and quantum technologies.",
  foundingDate: "2023",
  foundingLocation: {
    "@type": "Place",
    addressCountry: "IN",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
    addressRegion: "Tamil Nadu",
  },
  telephone: "+916381141795",
  email: "info@namolabs.in",
  sameAs: [
    "https://github.com/NamoLabsIndia",
    "https://linkedin.com/company/namo-labs",
    "https://twitter.com/namolabs",
    "https://instagram.com/namolabs",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+916381141795",
    email: "info@namolabs.in",
    contactType: "customer support",
    areaServed: "Worldwide",
    availableLanguage: "English",
    url: `${BASE_URL}/contact`,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${BASE_URL}/#local-business`,
  name: "Namo Labs",
  description: "Deep-tech research and consulting firm specialising in post-quantum cryptography, blockchain, AI, and enterprise technologies.",
  url: BASE_URL,
  telephone: "+916381141795",
  email: "info@namolabs.in",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
    addressRegion: "Tamil Nadu",
  },
  logo: `${BASE_URL}/namo-labs-logo.png`,
  image: `${BASE_URL}/namo-labs-logo.png`,
  priceRange: "$$$$",
  openingHours: "Mo-Fr 09:00-18:00",
  sameAs: [
    "https://github.com/NamoLabsIndia",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Namo Labs",
  url: BASE_URL,
  description: "Deep Tech. For Humanity.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Explicit favicon tag for maximum browser/crawler compatibility */}
        <link rel="icon" href="/namo-labs-logo.png" type="image/png" />
        <link rel="shortcut icon" href="/namo-labs-logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/namo-labs-logo.png" />
      </head>
      <body className={`${beVietnamPro.className} ${leagueSpartan.variable} bg-white text-namo-black antialiased selection:bg-namo-black selection:text-white`}>
        {/* Force-unregister any old service workers from the old website deployment */}
        <Script
          id="kill-service-workers"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.getRegistrations().then(function(registrations) {
                    for(let registration of registrations) {
                      registration.unregister();
                      console.log('Old ServiceWorker unregistered.');
                    }
                  });
                });
              }
            `,
          }}
        />
        {/* JSON-LD Structured Data — plain <script>, not next/script, so it's
            present in the server-rendered HTML rather than injected after hydration */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
