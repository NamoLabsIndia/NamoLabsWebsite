/**
 * Open roles listed on /careers.
 *
 * Each logical role appears as TWO entries — one Full-Time and one Internship.
 * Department filters, type filters, and their counts are all derived from this
 * array, so adding a role here is the only change needed.
 */

export type Department =
  | "Engineering"
  | "Research"
  | "Security"
  | "Design"
  | "Product"
  | "Marketing"
  | "Sales"
  | "Operations";

export type WorkLocation = "Remote" | "Hybrid" | "On-site";

export type RoleType = "Full-Time" | "Part-Time" | "Contract" | "Internship";

export interface Role {
  /** Used as the visible title and as the `?role=` value on the apply form. */
  title: string;
  department: Department;
  location: WorkLocation;
  type: RoleType;
  description: string;
  /** One-liner focus area shown on the apply page masthead. */
  focus?: string;
  /** Preferred / required skills for this role. */
  skills?: string[];
  /** Key responsibilities for this role. */
  responsibilities?: string[];
  /** Optional flag for roles being prioritised. Surfaces a small badge. */
  featured?: boolean;
}

// ─────────────────────────────────────────────────────────────────────────────
// Role definitions — each entry becomes both a Full-Time and an Internship row.
// ─────────────────────────────────────────────────────────────────────────────

interface RoleBase
  extends Omit<Role, "title" | "type"> {
  /** Base name without the "(Intern)" suffix. */
  baseName: string;
}

const roleDefinitions: RoleBase[] = [
  // 1 ── Post-Quantum Cryptography Research
  {
    baseName: "Post-Quantum Cryptography Researcher",
    department: "Research",
    location: "Remote",
    description:
      "Research cutting-edge PQC algorithms, study NIST standards, and develop cryptographic prototypes for the quantum-safe era.",
    focus: "Cryptography + Research",
    featured: true,
    skills: [
      "C/C++ or Rust",
      "Python",
      "Strong mathematics",
      "Cryptography fundamentals",
      "Number theory",
      "Lattice-based cryptography",
      "ML-KEM / Kyber",
      "ML-DSA / Dilithium",
      "SLH-DSA / SPHINCS+",
      "SHA-2 / SHA-3 / SHAKE",
      "AES",
      "Research-paper reading",
      "NIST PQC standards",
    ],
    responsibilities: [
      "Research PQC algorithms",
      "Study NIST standards",
      "Develop cryptographic prototypes",
      "Benchmark algorithms",
      "Research hybrid cryptography",
      "Produce technical documentation",
    ],
  },

  // 2 ── Cryptographic Systems & Security
  {
    baseName: "Cryptographic Systems & Security Engineer",
    department: "Security",
    location: "Remote",
    description:
      "Turn cryptography into secure production-grade systems — integrate PQC into QSCL, fuzz implementations, and model threats.",
    focus: "Cryptographic Systems + Security Engineering",
    featured: true,
    skills: [
      "C/C++ or Rust",
      "Linux",
      "OpenSSL",
      "TLS 1.3",
      "Networking",
      "Secure coding",
      "Cryptographic protocols",
      "Fuzzing",
      "Threat modeling",
      "Vulnerability research",
      "GDB / AFL++ / libFuzzer",
    ],
    responsibilities: [
      "Integrate PQC into QSCL",
      "Work with cryptographic libraries",
      "Build crypto modules",
      "Security testing",
      "Fuzzing",
      "Threat modeling",
      "Performance optimization",
      "Identify implementation vulnerabilities",
    ],
  },

  // 3 ── QSCL Cloud & Backend Engineering
  {
    baseName: "QSCL Cloud & Backend Engineer",
    department: "Engineering",
    location: "Remote",
    description:
      "Build the QSCL platform — cloud APIs, authentication, key management, and the backend infrastructure powering our cryptographic engine.",
    focus: "Cloud Backend + Platform Engineering",
    featured: true,
    skills: [
      "Go / TypeScript / Python",
      "REST APIs",
      "gRPC",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Linux",
      "Authentication & RBAC",
      "API security",
      "Git/GitHub",
      "Cloud fundamentals",
    ],
    responsibilities: [
      "QSCL Cloud APIs",
      "Authentication and authorization",
      "Key/policy management services",
      "Tenant management",
      "Audit logging",
      "Database services",
      "API gateway",
      "Backend infrastructure",
    ],
  },

  // 4 ── SDK & Developer Platform
  {
    baseName: "SDK & Developer Platform Engineer",
    department: "Engineering",
    location: "Remote",
    description:
      "Make QSCL usable by developers — build TypeScript, Python, and Go SDKs, the CLI, and the tooling that lets anyone integrate QSCL without touching the underlying cryptography.",
    focus: "SDK Development + Developer Experience",
    skills: [
      "TypeScript",
      "JavaScript",
      "Python",
      "Go",
      "REST / gRPC",
      "API design",
      "Package development",
      "CLI development",
      "Git/GitHub",
    ],
    responsibilities: [
      "TypeScript SDK",
      "Python SDK",
      "Go SDK",
      "QSCL CLI",
      "Developer examples",
      "Integration templates",
      "API documentation",
      "Developer tooling",
      "SDK testing",
    ],
  },

  // 5 ── Full Stack Engineer
  {
    baseName: "Full Stack Engineer",
    department: "Engineering",
    location: "Remote",
    description:
      "Design, build, and ship full-stack features across the QSCL platform — from React frontends to Go/Node backends and cloud infrastructure.",
    focus: "Full-Stack Web + Platform Development",
    skills: [
      "TypeScript / JavaScript",
      "React / Next.js",
      "Node.js or Go",
      "REST APIs / GraphQL",
      "PostgreSQL / Redis",
      "Docker / Kubernetes",
      "CI/CD pipelines",
      "Cloud (AWS / GCP / Azure)",
      "Git/GitHub",
    ],
    responsibilities: [
      "Build end-to-end product features",
      "Design and maintain REST/GraphQL APIs",
      "Implement responsive, accessible UIs",
      "Optimize database queries and backend performance",
      "Write and maintain tests (unit, integration, e2e)",
      "Participate in architecture and code reviews",
    ],
  },

  // 6 ── Frontend Engineer (Next.js)
  {
    baseName: "Frontend Engineer (Next.js)",
    department: "Engineering",
    location: "Remote",
    description:
      "Craft premium web experiences using Next.js and Tailwind CSS.",
    focus: "Frontend + Web Engineering",
    skills: [
      "TypeScript",
      "React / Next.js",
      "Tailwind CSS",
      "Accessibility (WCAG)",
      "Performance optimisation",
      "Figma-to-code",
    ],
    responsibilities: [
      "Build and maintain Next.js web applications",
      "Translate Figma designs into pixel-perfect UIs",
      "Implement accessibility and performance best practices",
      "Collaborate with designers and backend engineers",
    ],
  },

  // 7 ── Senior Cryptography Engineer
  {
    baseName: "Cryptography Engineer",
    department: "Research",
    location: "Remote",
    description:
      "Design and implement post-quantum cryptographic protocols at the core of Namo Labs products.",
    focus: "Cryptographic Protocol Engineering",
    skills: [
      "C/C++ or Rust",
      "Cryptographic protocol design",
      "Post-quantum cryptography",
      "TLS / PKI",
      "Formal verification (bonus)",
    ],
    responsibilities: [
      "Architect PQC protocol integrations",
      "Review and harden cryptographic implementations",
      "Collaborate with research team on algorithm selection",
      "Document cryptographic design decisions",
    ],
  },

  // 8 ── AI / ML Research Scientist
  {
    baseName: "AI / ML Research Scientist",
    department: "Research",
    location: "Remote",
    description:
      "Lead research initiatives in applied AI and machine learning, publishing findings and integrating breakthroughs into Namo Labs products.",
    focus: "Applied AI + Machine Learning Research",
    skills: [
      "Python",
      "PyTorch / JAX",
      "Machine learning theory",
      "Publication track record",
      "Distributed training",
    ],
    responsibilities: [
      "Design and run ML research experiments",
      "Publish and present findings",
      "Collaborate with engineering on model productionisation",
      "Stay current with SOTA literature",
    ],
  },

  // 9 ── Blockchain Developer
  {
    baseName: "Blockchain Developer",
    department: "Engineering",
    location: "Remote",
    description:
      "Build decentralized systems and smart contract infrastructure powering Namo Labs' blockchain layer.",
    focus: "Blockchain + Decentralized Systems",
    skills: [
      "Solidity / Rust (Anchor)",
      "EVM / Solana",
      "Smart contract auditing",
      "Web3.js / Ethers.js",
      "IPFS / Arweave",
    ],
    responsibilities: [
      "Design and deploy smart contracts",
      "Audit contract security",
      "Integrate on-chain and off-chain systems",
      "Monitor and optimize gas usage",
    ],
  },

  // 10 ── Product Designer
  {
    baseName: "Product Designer",
    department: "Design",
    location: "Hybrid",
    description:
      "Shape the visual identity and UX of Namo Labs products from concept to shipped.",
    focus: "Product Design + UX",
    skills: [
      "Figma",
      "UX research",
      "Design systems",
      "Prototyping",
      "Accessibility",
      "Motion design (bonus)",
    ],
    responsibilities: [
      "Own end-to-end UX for core product flows",
      "Conduct user research and usability testing",
      "Maintain and evolve the design system",
      "Collaborate with engineering on implementation",
    ],
  },

  // 11 ── Project Manager
  {
    baseName: "Project Manager",
    department: "Operations",
    location: "Hybrid",
    description:
      "Drive cross-functional delivery across engineering, research, and design — keeping ambitious projects on track without slowing the team down.",
    focus: "Project Delivery + Cross-functional Leadership",
    skills: [
      "Agile / Scrum / Kanban",
      "Jira / Linear / Notion",
      "Stakeholder management",
      "Risk identification",
      "Technical communication",
      "OKR / goal-setting frameworks",
      "Budget tracking",
      "Roadmap planning",
    ],
    responsibilities: [
      "Own project timelines and delivery milestones",
      "Run sprint planning, standups, and retrospectives",
      "Communicate progress to leadership and stakeholders",
      "Identify and mitigate risks early",
      "Coordinate between engineering, research, and design",
      "Maintain living project documentation",
      "Track OKRs and surface blockers",
    ],
  },

  // 12 ── SEO & Growth Specialist
  {
    baseName: "SEO & Growth Specialist",
    department: "Marketing",
    location: "Remote",
    description:
      "Own Namo Labs' organic search presence — technical SEO, content strategy, and data-driven growth across the entire funnel.",
    focus: "SEO + Organic Growth",
    skills: [
      "Technical SEO (Core Web Vitals, schema, crawl)",
      "Keyword research & clustering",
      "Content strategy",
      "Google Search Console / Analytics 4",
      "Ahrefs / Semrush",
      "Link building",
      "On-page & off-page optimisation",
      "HTML / CSS basics",
      "Data analysis (Looker Studio / Sheets)",
    ],
    responsibilities: [
      "Develop and execute SEO strategy",
      "Conduct keyword research and gap analysis",
      "Audit and improve technical SEO health",
      "Collaborate with content and engineering teams",
      "Track rankings, traffic, and conversion metrics",
      "Build backlink campaigns",
      "Optimise landing pages for search intent",
      "Produce monthly SEO performance reports",
    ],
  },

  // 13 ── Operations Manager
  {
    baseName: "Operations Manager",
    department: "Operations",
    location: "On-site",
    description:
      "Oversee day-to-day operations and drive efficiency across Namo Labs.",
    focus: "Operations + Organisational Excellence",
    skills: [
      "Process optimisation",
      "Vendor management",
      "Financial tracking",
      "People ops",
      "Strong communication",
    ],
    responsibilities: [
      "Manage day-to-day operational processes",
      "Coordinate vendors and external partners",
      "Support finance, HR, and compliance workflows",
      "Drive operational efficiency initiatives",
    ],
  },

  // 14 ── Technical Writer
  {
    baseName: "Technical Writer",
    department: "Operations",
    location: "Remote",
    description:
      "Document APIs, research papers, and internal processes with clarity and precision.",
    focus: "Technical Documentation + Developer Communication",
    skills: [
      "Technical writing",
      "Markdown / MDX",
      "API documentation",
      "Docs-as-code",
      "Developer empathy",
    ],
    responsibilities: [
      "Write and maintain API reference docs",
      "Produce user guides and tutorials",
      "Collaborate with engineers on accuracy",
      "Establish documentation standards",
    ],
  },

  // 15 ── Sales Development Representative
  {
    baseName: "Sales Development Representative",
    department: "Sales",
    location: "Remote",
    description:
      "Own the top of the sales funnel — prospect, qualify, and book meetings with engineering and security decision-makers at companies that need quantum-safe cryptography.",
    focus: "Outbound Prospecting + Pipeline Generation",
    featured: true,
    skills: [
      "Outbound prospecting (cold email, LinkedIn, calls)",
      "CRM (HubSpot / Salesforce)",
      "Lead qualification (BANT / MEDDIC)",
      "Written & verbal communication",
      "Research & personalisation at scale",
      "Sales engagement tools (Apollo / Outreach)",
      "Basic understanding of B2B SaaS sales cycles",
    ],
    responsibilities: [
      "Identify and research target accounts",
      "Execute multi-channel outbound sequences",
      "Qualify inbound and outbound leads",
      "Book discovery calls for Account Executives",
      "Maintain accurate CRM records",
      "Collaborate with marketing on ICP targeting",
      "Hit weekly and monthly pipeline targets",
    ],
  },

  // 16 ── Account Executive
  {
    baseName: "Account Executive",
    department: "Sales",
    location: "Remote",
    description:
      "Run full-cycle sales for QSCL — from discovery to close — working with CTOs, security leads, and engineering teams at companies modernising their cryptographic infrastructure.",
    focus: "Full-Cycle B2B Sales + Revenue Growth",
    skills: [
      "Full-cycle B2B SaaS sales",
      "Solution / consultative selling",
      "CRM (HubSpot / Salesforce)",
      "Contract negotiation",
      "Technical product demos",
      "Forecasting & pipeline management",
      "Stakeholder mapping",
      "Cybersecurity / DevTools market knowledge (bonus)",
    ],
    responsibilities: [
      "Own the full sales cycle from discovery to close",
      "Run technical discovery and product demonstrations",
      "Build multi-threaded relationships within target accounts",
      "Negotiate and close enterprise and mid-market deals",
      "Maintain accurate pipeline and forecasting in CRM",
      "Collaborate with SDRs, marketing, and solutions engineering",
      "Provide market feedback to product and leadership",
      "Hit quarterly revenue targets",
    ],
  },

  // 17 ── Partnerships & Business Development
  {
    baseName: "Partnerships & Business Development Manager",
    department: "Sales",
    location: "Remote",
    description:
      "Identify, structure, and grow strategic partnerships — with cloud providers, system integrators, cybersecurity vendors, and standards bodies — that expand QSCL's reach and credibility.",
    focus: "Strategic Partnerships + Business Development",
    skills: [
      "Partnership development & channel sales",
      "Contract & MOU negotiation",
      "Ecosystem mapping (cloud, SI, ISV)",
      "Executive-level relationship building",
      "Go-to-market co-sell motions",
      "CRM & partner tracking tools",
      "Cybersecurity / cloud industry knowledge",
      "Strong written communication",
    ],
    responsibilities: [
      "Source and qualify strategic partnership opportunities",
      "Lead partnership negotiations and contract structuring",
      "Build and maintain relationships with cloud & SI partners",
      "Design co-sell and co-market GTM motions",
      "Represent Namo Labs at industry events and standards bodies",
      "Track partner pipeline and revenue attribution",
      "Work with product to shape integration roadmaps",
      "Report partnership performance to leadership",
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Expand each definition into a Full-Time + Internship pair.
// Full-Time entries come first so they appear at the top within each department.
// ─────────────────────────────────────────────────────────────────────────────

function expand(def: RoleBase): [Role, Role] {
  const { baseName, ...rest } = def;
  const fullTime: Role = { ...rest, title: baseName, type: "Full-Time" };
  const intern: Role = {
    ...rest,
    title: `${baseName} — Intern`,
    type: "Internship",
    // Internship descriptions carry an extra hint.
    description: rest.description.replace(
      /\.$/,
      " — as a paid internship programme."
    ),
  };
  return [fullTime, intern];
}

export const roles: Role[] = roleDefinitions.flatMap(expand);

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Resolves a `?role=` query value against the open roles.
 *
 * Returns `undefined` for anything that isn't a currently open role, so the
 * apply page can fall back to a general open application rather than echoing
 * arbitrary text back to the visitor as though it were a real vacancy.
 */
export function findRoleByTitle(
  title: string | undefined,
  list: Role[] = roles
): Role | undefined {
  if (!title) return undefined;
  const needle = title.trim().toLowerCase();
  return list.find((role) => role.title.toLowerCase() === needle);
}

export interface DepartmentFilter {
  label: string;
  /** `null` means "no filter" — the All Roles pill. */
  department: Department | null;
  count: number;
}

export interface TypeFilter {
  label: string;
  type: RoleType | null;
  count: number;
}

/**
 * Builds the department filter pills from the role list, in the order
 * departments first appear. Departments with no open roles are omitted.
 */
export function getDepartmentFilters(list: Role[] = roles): DepartmentFilter[] {
  const counts = new Map<Department, number>();
  for (const role of list) {
    counts.set(role.department, (counts.get(role.department) ?? 0) + 1);
  }

  return [
    { label: "All Roles", department: null, count: list.length },
    ...[...counts.entries()].map(([department, count]) => ({
      label: department,
      department,
      count,
    })),
  ];
}

/**
 * Builds the type filter pills (Full-Time / Internship / …) from the role
 * list. Types with zero open roles are omitted.
 */
export function getTypeFilters(list: Role[] = roles): TypeFilter[] {
  const counts = new Map<RoleType, number>();
  for (const role of list) {
    counts.set(role.type, (counts.get(role.type) ?? 0) + 1);
  }

  return [
    { label: "All Types", type: null, count: list.length },
    ...[...counts.entries()].map(([type, count]) => ({
      label: type,
      type,
      count,
    })),
  ];
}
