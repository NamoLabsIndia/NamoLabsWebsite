export type Assignee = "Ayush" | "Rishab" | "Rishi";
export type Effort = "minimum" | "normal" | "major" | "nav" | "fix";
export type TaskStatus = "todo" | "in_progress" | "review" | "done";
export type Priority = "P0" | "P1" | "P2";

export interface Task {
  id: string;
  title: string;
  url?: string;
  urls?: string[];
  assignee: Assignee;
  effort: Effort;
  priority: Priority;
  status: TaskStatus;
  notes: string;
  acceptance: string;
}

export const ASSIGNEES: Assignee[] = ["Ayush", "Rishab", "Rishi"];

export const EFFORT_LABEL: Record<Effort, string> = {
  minimum: "Minimum UI",
  normal: "Normal UI",
  major: "Major UI",
  nav: "Nav / IA",
  fix: "Bug fix",
};

/** Website improvement sprint — assigned by PM (Ayush ↔ Rishab swapped) */
export const TASKS: Task[] = [
  // ─── RISHAB: minimum UI + broken platform link + Solutions discoverability ───
  {
    id: "RB-01",
    title: "Polish About page UI (minimum changes)",
    url: "https://namolabs.in/about",
    assignee: "Rishab",
    effort: "minimum",
    priority: "P1",
    status: "todo",
    notes:
      "Keep layout; tighten spacing, typography hierarchy, imagery, and mobile. Do not rewrite brand mission copy unless broken.",
    acceptance:
      "About looks sharper on desktop + mobile; no layout regressions; Lighthouse/visual check OK.",
  },
  {
    id: "RB-02",
    title: "Polish Team page UI (minimum changes)",
    url: "https://namolabs.in/team",
    assignee: "Rishab",
    effort: "minimum",
    priority: "P1",
    status: "todo",
    notes:
      "Founder section + team categories. Fix dead social href=\"#\". Improve PhotoSlot empty states. Light polish only.",
    acceptance:
      "Team page cleaner; no dead # links in founder/social; mobile readable.",
  },
  {
    id: "RB-03",
    title: "Fix TierraTrace 404 — create route or retarget links",
    url: "https://namolabs.in/platform/tierratrace",
    assignee: "Rishab",
    effort: "fix",
    priority: "P0",
    status: "todo",
    notes:
      "Mobile Platform parent href is /platform/tierratrace (404). Desktop nav already uses https://www.tierratrace.in. Either add a thin redirect/landing page OR change MobileMenu parent href. Prefer consistent destination.",
    acceptance:
      "No 404 from any Platform → TierraTrace path; mobile + desktop agree.",
  },
  {
    id: "RB-04",
    title: "Add Solutions to navbar (desktop mega menu + mobile)",
    urls: [
      "https://namolabs.in/solutions/governments",
      "https://namolabs.in/solutions/organisations",
      "https://namolabs.in/solutions/institutions",
      "https://namolabs.in/solutions/startups",
      "https://namolabs.in/solutions/msmes",
    ],
    assignee: "Rishab",
    effort: "nav",
    priority: "P0",
    status: "todo",
    notes:
      "CRITICAL GAP: all 5 Solutions pages exist (200) but are NOT in top nav — only footer + home carousel. Add Solutions dropdown (or under Company/Consulting). Wire MegaMenu + MobileMenu + nav-data.",
    acceptance:
      "User can reach every /solutions/* page from desktop and mobile nav without using footer.",
  },
  {
    id: "RB-05",
    title: "Surface Process + Collaboration in Company nav",
    urls: [
      "https://namolabs.in/process",
      "https://namolabs.in/collaboration",
    ],
    assignee: "Rishab",
    effort: "nav",
    priority: "P1",
    status: "todo",
    notes:
      "Pages exist but only in footer. Add to Company mega menu + mobile Company children. Insights is on desktop Company but missing on mobile — add it too.",
    acceptance:
      "Process, Collaboration, Insights reachable from Company nav on desktop and mobile.",
  },

  // ─── AYUSH: major company/careers/process ───
  {
    id: "AY-01",
    title: "Major redesign — Careers page",
    url: "https://namolabs.in/careers",
    assignee: "Ayush",
    effort: "major",
    priority: "P1",
    status: "todo",
    notes:
      "Currently thin “No open roles” page. Orphaned richer components exist (Hero, Culture, OpenRoles, etc.) — revive or rebuild. Keep honest empty state if not hiring, but make culture + how-to-apply strong.",
    acceptance:
      "Careers feels like a real destination; clear CTA to email or /careers/apply; mobile polished.",
  },
  {
    id: "AY-02",
    title: "Major redesign + wire Apply form",
    url: "https://namolabs.in/careers/apply",
    assignee: "Ayush",
    effort: "major",
    priority: "P0",
    status: "todo",
    notes:
      "UI overhaul + fix: ApplicationForm currently only sets local submitted state — does NOT POST. Wire to /api/contact (or new careers API). Handle loading/error. Fix “Loading form…” flash if any.",
    acceptance:
      "Form submits successfully; confirmation UX; no silent fake success.",
  },
  {
    id: "AY-03",
    title: "Major redesign — Our Process page",
    url: "https://namolabs.in/process",
    assignee: "Ayush",
    effort: "major",
    priority: "P1",
    status: "todo",
    notes:
      "Six phases are solid copy. Elevate visual hierarchy, motion, mobile timeline, stronger CTA to /contact. Align with consulting brand.",
    acceptance:
      "Process page looks intentional and premium; CTA clear; mobile timeline works.",
  },
  {
    id: "AY-04",
    title: "Careers ↔ Apply linking + empty-state QA",
    urls: [
      "https://namolabs.in/careers",
      "https://namolabs.in/careers/apply",
    ],
    assignee: "Ayush",
    effort: "fix",
    priority: "P2",
    status: "todo",
    notes:
      "Ensure careers page CTAs point correctly; apply page breadcrumbs back to careers; no orphaned routes.",
    acceptance:
      "Bidirectional navigation works; no dead CTAs.",
  },

  // ─── RISHI: collaboration + research domains (unchanged) ───
  {
    id: "RS-01",
    title: "Major redesign — Collaboration page",
    url: "https://namolabs.in/collaboration",
    assignee: "Rishi",
    effort: "major",
    priority: "P1",
    status: "todo",
    notes:
      "Engagement model (Propose → Scope → Research → Deliver) is good. Improve layout, hierarchy, partner types, CTA to propose project (contact with prefills if possible).",
    acceptance:
      "Collaboration reads as a real partnership product; strong CTA; mobile OK.",
  },
  {
    id: "RS-02",
    title: "Research domain UI — Cryptography",
    url: "https://namolabs.in/research/cryptography",
    assignee: "Rishi",
    effort: "normal",
    priority: "P1",
    status: "todo",
    notes:
      "Normal pass across shared domain template. Fix decorative Stay Tuned / Collaborate buttons so they navigate or open contact.",
    acceptance:
      "Page polished; CTAs functional; consistent with other domains.",
  },
  {
    id: "RS-03",
    title: "Research domain UI — Blockchain",
    url: "https://namolabs.in/research/blockchain",
    assignee: "Rishi",
    effort: "normal",
    priority: "P1",
    status: "todo",
    notes: "Same template polish as cryptography. Keep content accurate.",
    acceptance: "Consistent UI with other research domains; CTAs work.",
  },
  {
    id: "RS-04",
    title: "Research domain UI — AI",
    url: "https://namolabs.in/research/ai",
    assignee: "Rishi",
    effort: "normal",
    priority: "P1",
    status: "todo",
    notes: "Coming Soon state — make it intentional, not empty.",
    acceptance: "Coming Soon feels designed; CTAs work.",
  },
  {
    id: "RS-05",
    title: "Research domain UI — Quantum",
    url: "https://namolabs.in/research/quantum",
    assignee: "Rishi",
    effort: "normal",
    priority: "P1",
    status: "todo",
    notes: "Coming Soon state polish.",
    acceptance: "Consistent with AI/Cloud domain treatment.",
  },
  {
    id: "RS-06",
    title: "Research domain UI — Cloud",
    url: "https://namolabs.in/research/cloud",
    assignee: "Rishi",
    effort: "normal",
    priority: "P1",
    status: "todo",
    notes: "Coming Soon state polish. Close the research domain set.",
    acceptance: "All five research domain pages visually consistent.",
  },

  // ─── SHARED / MISSED (distributed) ───
  {
    id: "RB-06",
    title: "Missed: Solutions pages light QA after nav ships",
    urls: [
      "https://namolabs.in/solutions/governments",
      "https://namolabs.in/solutions/organisations",
      "https://namolabs.in/solutions/institutions",
      "https://namolabs.in/solutions/startups",
      "https://namolabs.in/solutions/msmes",
    ],
    assignee: "Rishab",
    effort: "minimum",
    priority: "P2",
    status: "todo",
    notes:
      "After RB-04, spot-check each solutions page loads from nav, breadcrumbs, CTA → contact. Flag content gaps to PM (no redesign required this sprint unless broken).",
    acceptance:
      "All five reachable + CTAs work; note any broken images/links.",
  },
  {
    id: "AY-05",
    title: "Missed: Remove or quarantine fake homepage testimonials",
    url: "https://namolabs.in/",
    assignee: "Ayush",
    effort: "fix",
    priority: "P0",
    status: "todo",
    notes:
      "Home TestimonialsSection uses unverifiable personas (Sarah Jenkins, Marcus Chen, Elena Rostova). Remove section or replace with real quotes only. Do not invent new fake ones.",
    acceptance:
      "No fabricated testimonials live on production homepage.",
  },
  {
    id: "RS-07",
    title: "Missed: Research updates / newsletter dead UI",
    urls: [
      "https://namolabs.in/research",
      "https://namolabs.in/",
    ],
    assignee: "Rishi",
    effort: "fix",
    priority: "P2",
    status: "todo",
    notes:
      "ResearchUpdatesList has empty feed, decorative Subscribe, and /updates link with no route. Fix or remove dead controls; link to /insights instead of /updates.",
    acceptance:
      "No 404 from research updates CTA; no fake subscribe success.",
  },
];

export function tasksByAssignee(assignee: Assignee): Task[] {
  return TASKS.filter((t) => t.assignee === assignee);
}

export function taskStats() {
  const byAssignee = Object.fromEntries(
    ASSIGNEES.map((a) => [
      a,
      {
        total: TASKS.filter((t) => t.assignee === a).length,
        p0: TASKS.filter((t) => t.assignee === a && t.priority === "P0").length,
      },
    ])
  ) as Record<Assignee, { total: number; p0: number }>;

  return {
    total: TASKS.length,
    byAssignee,
  };
}
