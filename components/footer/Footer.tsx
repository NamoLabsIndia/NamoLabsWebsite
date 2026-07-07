"use client";

import React from "react";
import Link from "next/link";

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const columns = [
  {
    heading: "PLATFORM",
    links: [
      { label: "QSCL SDK", href: "/#qscl-timer" },
      { label: "DAFS Platform", href: "/platform/dafs" },
      { label: "TierraTrace", href: "https://www.tierratrace.in" },
    ],
  },
  {
    heading: "RESEARCH",
    links: [
      { label: "Blockchain Research", href: "/research/blockchain" },
      { label: "Cryptography Research", href: "/research/cryptography" },
      { label: "Quantum Technology", href: "/research/quantum" },
      { label: "Papers & Publications", href: "/research/papers" },
      { label: "Research Blog", href: "/blog/research" },
      { label: "Open Science", href: "/research/open-science" },
    ],
  },
  {
    heading: "DEVELOPERS",
    links: [
      { label: "Documentation", href: "/docs" },
      { label: "API Reference", href: "/docs/api" },
      { label: "SDKs & Tools", href: "/docs/sdks" },
      { label: "Integrations", href: "/docs/integrations" },
      { label: "GitHub", href: "https://github.com/namolabs" },
      { label: "Developer Support", href: "/support/developers" },
    ],
  },
  {
    heading: "COMPANY",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
      { label: "Press Kit", href: "/press" },
      { label: "Contact Us", href: "/contact" },
      { label: "Trust Center", href: "/trust" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
  {
    heading: "RESOURCES",
    links: [
      { label: "Whitepapers", href: "/resources/whitepapers" },
      { label: "Case Studies", href: "/resources/case-studies" },
      { label: "Guides", href: "/resources/guides" },
      { label: "Newsroom", href: "/newsroom" },
      { label: "Events", href: "/events" },
      { label: "Support Center", href: "/support" },
    ],
  },
];

const socials = [
  { icon: <GithubIcon />, href: "https://github.com/namolabs", label: "GitHub" },
  { icon: <LinkedinIcon />, href: "https://linkedin.com/company/namolabs", label: "LinkedIn" },
  { icon: <XIcon />, href: "https://x.com/namolabs", label: "X" },
  { icon: <YoutubeIcon />, href: "https://youtube.com/@namolabs", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* Top section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-0.5 mb-3">
              <img src="/namo-logo.png" alt="Namo Labs" className="h-16 w-auto object-contain mix-blend-multiply -ml-2" />
            </Link>
            <p className="text-sm font-semibold text-gray-700 mb-2 mt-2">Deep Tech. For Humanity.</p>



            {/* Socials */}
            <div className="flex gap-2 mt-5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-accent hover:border-accent transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.heading}>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
                {col.heading}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© 2026 Namo Labs LLP. All rights reserved.</p>

        </div>
      </div>
    </footer>
  );
}
