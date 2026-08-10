# Namo Labs Website — End-to-End Gap Analysis Report

**Date:** 2026-08-10  
**Site:** [https://namolabs.in/](https://namolabs.in/)  
**Method:** Full codebase + live URL audit of Namo Labs, plus “Agent Reach” style internet research of peer deep-tech companies ([PQShield](https://pqshield.com/), [SandboxAQ](https://www.sandboxaq.com/), [Quantinuum](https://quantinuum.com/)) and B2B trust-signal best practices.

> **Note on Agent Reach:** [Panniantong/agent-reach](https://github.com/Panniantong/agent-reach) is an agent capability layer (read/search the open web — GitHub, YouTube, LinkedIn, etc.). It is **not** a website design framework. It was used here as the research *approach*: go read real company sites and extract what serious deep-tech brands actually put on the page. The CLI was not installed in this environment; peer pages were read via Jina Reader + public sources instead.

---

## 1. Verdict (one paragraph)

Namo Labs has a **broad, well-structured marketing shell** — Platform / Research / Consulting / Solutions / Company — that matches how a deep-tech firm *should* present itself. What it lacks is **proof**. Peers win trust with named customers, product specs, publications, press, and real people. Namo currently sells vision with aspirational copy, a QSCL countdown, stub products, empty research updates, and (highest risk) **fabricated-looking testimonials**. Until proof replaces placeholders, the site will read as early-stage and untrustworthy to governments, enterprises, and technical buyers.

---

## 2. What Namo Labs is selling (concept map)

| Pillar | Promise | Current web reality |
|--------|---------|---------------------|
| **Mission** | “Deep Tech. For Humanity.” / Driving technology for mankind | Strong brand narrative (Bharat → world) |
| **QSCL™** | Secure / post-quantum communication SDK | Countdown to 2027 + early-access form only — no product page, docs, or SDK |
| **DAFS™** | Platform product | “Launching Soon” stub; `noindex`; missing from sitemap |
| **TierraTrace™** | Supply-chain provenance | Off-site product; mobile nav still points to on-site **404** |
| **Research** | Crypto, blockchain, AI, quantum, cloud | Domain pages exist; most “In Progress / Coming Soon”; **no paper links** |
| **Consulting** | AI, cyber, blockchain, cloud, enterprise, network, sustainability | Full marketing pages; soft CTA → contact form |
| **Solutions** | Gov / orgs / institutions / startups / MSMEs | Segment pages exist; gov page has solid regulatory framing |
| **Company** | About, team, careers, process, collaboration | Founder-led; generic “teams”; careers = no open roles |

**One real credibility asset today:** the NIST PQC insights article (`/insights/nist-pqc-standards-ml-kem-ml-dsa-explained`).

---

## 3. What real deep-tech companies put on the site (benchmark)

### Pattern from peers

| Section / signal | PQShield | SandboxAQ | Quantinuum | Namo Labs |
|------------------|----------|-----------|------------|-----------|
| Clear product lines with dedicated pages | Yes (libs, IP, HW) | Yes (AQtive Guard, AQNav, etc.) | Yes (hardware + software stack) | Weak (stubs / countdown) |
| Named customers / partners | AMD, Microchip, Lockheed, Capgemini, TCS… | SoftBank, enterprises, press | BMW, bp, JPMorgan, SoftBank, Synopsys | **None real** (fake testimonials; logo strip disabled) |
| Case studies / customer spotlights | Consulting case narratives | Press + outcomes | Named collaborations with quotes | **Missing** |
| Publications / research portal | Blog + PQC insights | Dedicated research pub site | Papers + fidelity claims with citations | Badge “10+ papers” — **no links** |
| Press / newsroom | News | Press, events, awards, podcasts | News + partner announcements | **Removed / absent** (`/press` never shipped) |
| Docs / developer surface | Product docs implied | Product + research | Developer platforms (Nexus etc.) | **None** |
| Real team / advisors | Named experts, scale claims | Leadership + investors | Large technical org signals | Founder only + generic teams |
| Third-party validation | NCSC ACSC, funding, standards work | CHIPS award, investors, media | Peer-reviewed results, fidelity metrics | Mentions ISO/SOC as *services*, not company credentials |
| Investors / backers | Named | Named + quotes | Corporate heritage | **Missing** |
| Book-a-demo / sales motion | Clear contact / sales | Contact + demo language | Partner CTAs | Contact form only |

### What B2B buyers actually trust (2025–26)

1. Verifiable metrics and methodology  
2. Relevant case studies (same industry / size)  
3. Named switcher testimonials (not invented personas)  
4. Third-party badges (certifications, analyst, grants)  
5. Spec pages AI agents and humans can extract (product facts, compliance, packaging)  
6. Docs / sandbox for technical evaluators  

Sources: B2B trust-signal playbooks; peer sites above.

---

## 4. Gap inventory — missing or weak sections

### P0 — Trust killers (fix first)

| Gap | Why it hurts | Evidence |
|-----|--------------|----------|
| **Fake / unverifiable testimonials** | Enterprise buyers reverse-search names; fake quotes destroy brand | Home: “Sarah Jenkins / CloudNative Builders”, “Marcus Chen / Luxe Threads”, “Dr. Elena Rostova / Vertex IT” praising QSCL SDK & TierraTrace as if live |
| **“10+ Ongoing Papers” with zero papers** | Research-first claim collapses | Home research badge; no arXiv/DOI/PDF |
| **QSCL sold as SDK without a product** | Claims exceed surface area | Countdown + “SDK” language; testimonials reference integration that isn’t public |
| **Mobile Platform → `/platform/tierratrace` 404** | Broken nav = unprofessional | Confirmed HTTP 404 |
| **Customer logo strip prepared with GoI / ISRO / DRDO / TATA / etc. but disabled + empty assets** | If ever enabled without permission, catastrophic | `LogoLoopSection` commented out; `public/logos/` empty |

### P1 — Missing sections peers treat as table stakes

| Missing section | What to ship | Why |
|-----------------|--------------|-----|
| **Customers / Partners** | Real logos only with permission; or “Selected engagements (NDA)” + anonymized outcomes | Quantinuum/SandboxAQ/PQShield lead with this |
| **Case studies** | 2–3 write-ups: problem → approach → outcome → quote | Highest converting B2B trust asset |
| **Product pages (real)** | QSCL, DAFS, TierraTrace: what it is, who it’s for, architecture, security model, status, CTA | Today: timer / stub / off-site only |
| **Docs / Developer** | Even a thin `/docs` or GitHub org with README + install | Deep-tech buyers judge maturity by docs |
| **Publications library** | `/research/publications` with titles, abstracts, links | Matches “research-first” brand |
| **Press / Newsroom** | `/press` or News in Insights | SandboxAQ-level signal of being “alive” |
| **Named leadership + advisors** | Photos, bios, LinkedIn | Team page is categories, not people |
| **Trust / Security center** | How Namo handles data, infra, SDLC; roadmap to SOC2/ISO *as company* | Consulting copy currently blurs “we advise on ISO” vs “we are certified” |
| **Investors / backers / grants** (if any) | Or omit honestly | Peers use this heavily |

### P2 — Conversion & ops gaps

| Gap | Status |
|-----|--------|
| Careers apply form | UI-only; **does not submit** to API |
| Research newsletter | Decorative button |
| Domain “Stay Tuned / Collaborate” | Buttons with no destination |
| Booking / Calendly | Contact form only — no schedule flow |
| `/updates` link | Linked; **no route** |
| DAFS not in sitemap | Live but invisible to SEO |
| Insights depth | **1 article** — peers run continuous research blogs |

### P3 — Nice-to-have later

- Pricing / engagement packages (or clear “custom / RFP”)  
- Comparison / “Why Namo vs traditional consulting” page with proof  
- Community / open-source releases page  
- Events, webinars, podcasts  
- FAQ on product & PQC migration  
- Multilingual (EN + HI) if Bharat positioning deepens  
- `llms.txt` / clearer structured data for AI agent buyers (Agent Reach era)

---

## 5. Section-by-section: what exists vs what should

### Home
**Has:** Hero, approach, research domains, sector carousel, Bharat, testimonials, research updates teaser, QSCL countdown.  
**Missing / broken:** Real logo bar, real testimonials, article feed, product proof.  
**Recommendation:** Remove fake testimonials *now*. Replace with 1 real insight card + 1 real engagement metric (even “1 published PQC brief”) until customers exist. Soften QSCL to “in development — request early access.”

### Platform
**Has:** DAFS stub; QSCL anchor; TierraTrace external.  
**Missing:** Unified Platform hub, product specs, status badges (Alpha / Waitlist / GA), docs.  
**Recommendation:** `/platform` index + one honest page per product; fix TierraTrace 404; add DAFS to sitemap when ready to index.

### Research
**Has:** Domain landing pages, collaborate CTA.  
**Missing:** Papers, datasets, code, newsletter that works, updates feed.  
**Recommendation:** Ship publications list even if 3–5 items; link Insights articles per domain; wire Collaborate → contact with prefilled topic.

### Consulting
**Has:** Strong service taxonomy + process.  
**Missing:** Case studies per service, named industries served, downloadable capability deck, book-a-call.  
**Recommendation:** One anonymized case per top 3 services (PQC migration, blockchain, AI).

### Solutions
**Has:** Five sector pages; governments page is strongest.  
**Missing:** Sector-specific proof, RFPs won, compliance mapping PDFs.  
**Recommendation:** Mirror gov regulatory depth for enterprise & institutions.

### Company
**Has:** About narrative, process, collaboration, contact, legal.  
**Missing:** Full leadership, advisors, timeline of milestones, press kit.  
**Careers:** Honest “no roles” is fine; either wire apply or remove `/careers/apply` until hiring.

### Insights
**Has:** One excellent technical article.  
**Missing:** Cadence, categories filled out, authors beyond founder, newsletter.  
**Recommendation:** 1 article / month beats empty “Research & Updates.”

---

## 6. Priority roadmap (90 days)

### Week 1–2 — Honesty pass (credibility)
1. Remove or clearly label testimonials as illustrative — prefer **delete**.  
2. Fix `/platform/tierratrace` 404 (point to tierratrace.in or remove).  
3. Soften QSCL / SDK language to match reality.  
4. Remove or qualify “10+ Ongoing Papers” until links exist.  
5. Do **not** enable logo strip without written logo permission.

### Week 3–6 — Proof layer
6. Publish `/customers` or homepage “Selected work” with 2–3 real (or NDA-safe anonymized) stories.  
7. Add `/research/publications` with whatever is shippable (even drafts + “under review”).  
8. Expand Insights to 3–5 posts (PQC migration, India NSM, blockchain provenance).  
9. Real Platform pages: problem, architecture diagram, status, CTA.  
10. Wire careers apply + research subscribe **or** remove dead UI.

### Week 7–12 — Peer parity
11. Press / newsroom (even 3 items: launch, collaboration, insight).  
12. Docs or public GitHub with one openable artifact (spec, whitepaper, sample).  
13. Named team + advisors.  
14. Trust center draft + book-a-call.  
15. Add DAFS/QSCL to sitemap when content is index-worthy.

---

## 7. Scorecard

| Dimension (0–5) | Score | Comment |
|-----------------|------:|---------|
| Information architecture | 4 | Pillars are right |
| Brand / narrative | 4 | Clear mission |
| Product clarity | 1.5 | Stubs & countdown |
| Research proof | 1 | One article; no papers |
| Social proof | 0.5 | Fake testimonials = negative |
| Conversion UX | 2.5 | Contact + early access work; rest decorative |
| SEO / discoverability | 3 | Sitemap OK; DAFS omitted; thin content |
| Peer competitiveness (PQC / deep tech) | 1.5 | Far behind PQShield / SandboxAQ pattern |

**Overall maturity:** Marketing shell ~70% complete · Trust & proof ~20% complete.

---

## 8. Bottom line

You are not missing “one more hero section.” You are missing the **proof system** that real companies use:

1. **Real companies / partners** (logos + stories)  
2. **Real products** (pages + docs, not timers)  
3. **Real research** (publications, not badges)  
4. **Real people** (named team / advisors)  
5. **Real press & validation** (news, grants, standards involvement)

Until those exist, the highest-ROI move is **subtract aspirational fiction** (fake quotes, overclaimed SDK, empty paper counts) and **double down on the one true asset** you already have — serious PQC / deep-tech writing — while you collect 2–3 real engagements worth naming.

---

## Appendix A — Related files in this repo

- URL inventory: `namolabs-urls.md` / `namolabs-urls.html`  
- Fake testimonials: `components/home/TestimonialsSection.tsx`  
- Disabled logos: `components/home/LogoLoopSection.tsx` (commented out in `app/page.tsx`)  
- Sitemap: `app/sitemap.ts`  

## Appendix B — Peer references

- [PQShield](https://pqshield.com/) — product lines + named enterprise customers + NCSC validation  
- [SandboxAQ](https://www.sandboxaq.com/) — solutions + press + publications + investors  
- [Quantinuum](https://quantinuum.com/) — named customer spotlights (BMW, bp, JPMorgan, SoftBank)  
- [Agent Reach](https://github.com/Panniantong/agent-reach) — research tooling philosophy used for this audit  
