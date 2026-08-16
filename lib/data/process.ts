import type { GlyphKey } from "@/components/process/ProcessGlyph";

/**
 * The six phases of a Namo Labs consulting engagement.
 *
 * Single source of truth for /process. The `summary` lines are the same ones
 * used by the condensed process strip on /consulting, so the two pages can't
 * drift apart. Copy here is deliberately unchanged from the original page —
 * it was already solid; only the presentation around it was rebuilt.
 */

export interface ProcessPhase {
  /** Zero-padded display number, e.g. "01". */
  n: string;
  title: string;
  /** Which hand-drawn glyph in ProcessGlyph illustrates this phase. */
  glyph: GlyphKey;
  /** One-line description, shared with the /consulting overview strip. */
  summary: string;
  /** Full explanation shown on the /process timeline. */
  detail: string;
  /** Short label for what the client actually receives from this phase. */
  output: string;
}

export const PROCESS_PHASES: ProcessPhase[] = [
  {
    n: "01",
    title: "Discovery",
    glyph: "discovery",
    summary:
      "Aligning on goals, auditing existing systems and defining requirements.",
    detail:
      "Every engagement starts with understanding what actually exists today — current systems, constraints, compliance requirements, and what success looks like for your team specifically. We'd rather spend extra time here than build the wrong thing efficiently.",
    output: "Requirements & systems audit",
  },
  {
    n: "02",
    title: "Research",
    glyph: "research",
    summary: "Deep technical analysis and feasibility studies for emerging tech.",
    detail:
      "Where our research background does the most work: evaluating which techniques from post-quantum cryptography, blockchain, AI, quantum computing, or cloud architecture genuinely apply to your problem — and being direct when one doesn't, rather than fitting a solution to a technology we happen to specialize in.",
    output: "Feasibility study & recommendation",
  },
  {
    n: "03",
    title: "Architecture",
    glyph: "architecture",
    summary: "Designing secure, scalable and future-ready system blueprints.",
    detail:
      "System design with security and scalability as first-class requirements, not afterthoughts added before launch. This is also where we plan for the security posture your system will need years from now, not just at launch.",
    output: "System blueprint & threat model",
  },
  {
    n: "04",
    title: "Implementation",
    glyph: "implementation",
    summary: "Enterprise-grade engineering and secure deployment.",
    detail:
      "Building to the architecture, with the same engineering discipline we'd want in a system protecting our own infrastructure — secure defaults, tested deployment processes, and documentation that outlives the engagement.",
    output: "Working system & documentation",
  },
  {
    n: "05",
    title: "Validation",
    glyph: "validation",
    summary: "Rigorous security audits, testing and compliance checks.",
    detail:
      "Testing, security review, and compliance verification before anything goes live — not a formality, the actual gate that determines whether a system is ready.",
    output: "Audit results & sign-off",
  },
  {
    n: "06",
    title: "Long-Term Support",
    glyph: "support",
    summary: "Ongoing optimization, maintenance and scaling.",
    detail:
      "An engagement doesn't end at launch. Systems need to evolve as your organization, its scale, and the threat landscape change — we stay involved rather than handing over a system and disappearing.",
    output: "Ongoing maintenance & scaling",
  },
];

/**
 * What distinguishes how this process runs, as opposed to what the phases are.
 * Kept to three so the section stays a supporting note, not a second timeline.
 */
export const PROCESS_PRINCIPLES = [
  {
    title: "Research before build",
    body: "We evaluate whether a technology genuinely fits your problem before committing to it — and say so when it doesn't.",
  },
  {
    title: "Security by design",
    body: "Threat modelling and compliance are inputs to the architecture, not a review step bolted on before launch.",
  },
  {
    title: "Built to outlive us",
    body: "Documentation, tested deployments and handover quality are treated as deliverables, not afterthoughts.",
  },
];
