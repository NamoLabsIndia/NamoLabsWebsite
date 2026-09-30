/**
 * Open roles listed on /careers.
 *
 * Each role appears as a single listing.
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

export type RoleType = "Full-Time" | "Internship";

export interface Role {
  /** Used as the visible title and as the `?role=` value on the apply form. */
  title: string;
  department: Department;
  location: WorkLocation;
  /** Which engagement types are open for this role. */
  availableTypes: RoleType[];
  description: string;
  /** One-liner focus area shown on the apply page masthead. */
  focus?: string;
  /** Preferred / required skills for this role. */
  skills?: string[];
  /** Key responsibilities for this role. */
  responsibilities?: string[];
}

export const roles: Role[] = [
  {
    title: "PQC Research Intern",
    department: "Research",
    location: "Remote",
    availableTypes: ["Internship"],
    description:
      "Explore post-quantum cryptography and next-gen security.",
    focus: "Cryptography + Research",
    skills: [
      "C/C++ or Rust",
      "Python",
      "Cryptography fundamentals",
      "Mathematics",
    ],
    responsibilities: [
      "Explore post-quantum cryptography",
      "Research next-gen security",
    ],
  },
  {
    title: "Cloud Engineering Intern",
    department: "Engineering",
    location: "Remote",
    availableTypes: ["Internship"],
    description:
      "Build and scale cloud infrastructure for real-world products.",
    focus: "Cloud Architecture + Backend",
    skills: [
      "AWS / GCP / Azure",
      "Docker / Kubernetes",
      "Backend development",
    ],
    responsibilities: [
      "Build and scale cloud infrastructure",
      "Deploy real-world products",
    ],
  },
  {
    title: "SDK Developer Engineer",
    department: "Engineering",
    location: "Remote",
    availableTypes: ["Internship"],
    description:
      "Develop and maintain SDKs for seamless integrations.",
    focus: "SDK Development + Developer Experience",
    skills: [
      "TypeScript",
      "Python",
      "Go",
      "API design",
    ],
    responsibilities: [
      "Develop and maintain SDKs",
      "Ensure seamless integrations",
    ],
  },
  {
    title: "Full Stack Intern",
    department: "Engineering",
    location: "Remote",
    availableTypes: ["Internship"],
    description:
      "Work on end-to-end product development and modern web tech.",
    focus: "Full-Stack Web Development",
    skills: [
      "TypeScript / JavaScript",
      "React / Next.js",
      "Node.js",
    ],
    responsibilities: [
      "Work on end-to-end product development",
      "Build with modern web tech",
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

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
  department: Department | null;
  count: number;
}

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
