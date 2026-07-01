# Namo Labs — Marketing Site

A marketing site for **Namo Labs**, built as a faithful, near-pixel replica of the provided
_"Namo Labs Main Page Design"_ and _"Namo Labs Header Details"_ PDF designs. It presents Namo
Labs' deep-tech positioning — post-quantum security (QSCL), digital asset forensics (DAFS),
research domains, consulting, and a contact flow.

Built with the Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

---

## Tech stack

| Area          | Choice                                             |
| ------------- | -------------------------------------------------- |
| Framework     | [Next.js 14.2](https://nextjs.org) (App Router)    |
| Language      | TypeScript 5                                       |
| Styling       | Tailwind CSS 3.4 + `clsx` / `tailwind-merge` (`cn`)|
| Animation     | Framer Motion 12                                   |
| Icons         | `lucide-react`                                     |
| Fonts         | Inter (via Google Fonts)                           |
| Verification  | Playwright (dev-only, for screenshot checks)       |

---

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Scripts

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the local dev server           |
| `npm run build` | Production build                     |
| `npm run start` | Serve the production build           |
| `npm run lint`  | Run ESLint (`eslint-config-next`)    |

---

## Project structure

```
namolabs-site/
├─ app/
│  ├─ layout.tsx            # Root layout: Navbar + <main> + Footer, fonts, metadata
│  ├─ page.tsx              # Home page — composes the sections below
│  ├─ globals.css           # Tailwind layers, brand tokens, focus + reduced-motion rules
│  └─ contact/
│     └─ page.tsx           # /contact — "Let's build what's next, together." form
├─ components/
│  ├─ navbar/
│  │  ├─ Navbar.tsx         # Fixed pill header; click-to-open full-screen mega-menus
│  │  ├─ MegaMenu.tsx       # Platform / Research / Consulting / Company panels
│  │  ├─ MobileMenu.tsx     # Slide-in accordion nav for < lg
│  │  └─ nav-data.tsx       # (legacy nav data — not currently wired in)
│  ├─ home/
│  │  ├─ Hero.tsx           # Silk-wave hero, "Driving Technology for Mankind"
│  │  ├─ LogoLoopSection.tsx# "Trusted by…" scrolling institution logos
│  │  ├─ ApproachSection.tsx# "How Namo Labs Takes a Different Direction"
│  │  ├─ ResearchDomains.tsx# Cryptography / Blockchain / AI / Quantum cards
│  │  ├─ OneStopFirmSection.tsx # Sectors — Aceternity-style cards carousel
│  │  ├─ BharatSection.tsx  # "From Bharat, for the World"
│  │  ├─ ResearchUpdates.tsx# Latest research & blog cards
│  │  └─ CountdownSection.tsx # Dark early-access countdown
│  ├─ footer/Footer.tsx
│  └─ ui/                   # Reusable primitives (carousel, logo-loop, wobble-card)
├─ lib/
│  └─ utils.ts             # `cn()` class-merge helper
├─ public/
│  ├─ hero-bg.jpg          # Hero silk-wave background
│  ├─ logos/               # 7 transparent institution logos (gov-india, isro, drdo, …)
│  └─ img/                 # Section imagery (domains, sectors, updates, bharat-earth)
├─ tailwind.config.ts
└─ package.json
```

---

## Header & navigation

The header is a floating pill that stays fixed to the top of the viewport.

- **Click to open.** Each nav item (Platform, Research, Consulting, Company) opens its
  mega-menu **on click** (not hover). The chevron flips up while open.
- **Full-screen panel.** An open menu covers the entire viewport with an opaque surface, so
  no page content shows behind it. The nav pill stays above the panel and remains clickable.
- **Closing.** Re-click the active item, click any blank area of the panel, or press
  `Escape`. Clicking a different nav item switches menus without closing. Following any link
  inside a menu closes it.
- **Mobile (`< lg`).** The pill collapses to a hamburger that opens a slide-in accordion menu.

Each mega-menu mirrors the "Header Details" PDF:

| Menu       | Contents                                                                       |
| ---------- | ------------------------------------------------------------------------------ |
| Platform   | QSCL / DAFS list, featured QSCL card, and a 4-up feature bar                    |
| Research   | Focus areas, Publications, Blog, About + an "Explore Research" footer          |
| Consulting | Intro card + an 8-service grid (5 / 3 columns)                                  |
| Company    | About / Team / Careers / Newsroom / Partnerships / Investment + about panel     |

---

## Pages

- **`/`** — Home. Hero → Trusted-by logos → Approach → Research Domains → One-Stop-Firm
  carousel → From Bharat → Research Updates → Countdown.
- **`/contact`** — Contact. Split layout with contact details and a message form
  (name, work email, phone with country code, company, role, message). Submitting shows an
  inline **"Message sent"** confirmation. The form is currently client-side only (no backend).

> **Note:** Mega-menu deep links (e.g. `/platform/qscl`, `/research/cryptography`,
> `/consulting/*`) are placeholders — those routes are not built yet and will 404. Only `/`
> and `/contact` exist today.

---

## Design system

Brand tokens are defined in [`tailwind.config.ts`](tailwind.config.ts) and
[`app/globals.css`](app/globals.css).

| Token          | Value      | Use                          |
| -------------- | ---------- | ---------------------------- |
| `accent`       | `#3B5BFF`  | Primary blue                 |
| `accent-light` | `#EEF1FF`  | Tint for icon tiles / chips  |
| `namo-black`   | `#0A0A0A`  | Headlines, primary buttons   |
| `namo-gray`    | `#F5F6F8`  | Soft surfaces                |
| `namo-faint`   | `#FAFAFA`  | Section backgrounds          |

**Type:** Inter (300–900). **Accessibility quality floor** (in `globals.css`): visible
`:focus-visible` ring, on-brand `::selection`, and a `prefers-reduced-motion` block that
stills the logo marquee and neutralizes long transitions.

---

## Verifying visually

Playwright is included as a dev dependency for quick screenshot checks against the dev server:

```bash
npm run dev          # in one terminal
node your-script.cjs # drive http://localhost:3000 with Playwright
```

---

## Asset & trademark note

Section imagery and the institution logos under `public/logos` and `public/img` were derived
from the design PDFs / generated approximations. Confirm you hold the rights to any real
third-party marks (government, ISRO, DRDO, Tata, Infosys, LIC, IIT Madras, etc.) before any
public launch.
