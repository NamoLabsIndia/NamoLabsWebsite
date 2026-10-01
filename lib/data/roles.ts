/**
 * Open roles listed on /careers.
 *
 * This is the single source of truth for the careers listing. Department
 * filters and their counts are derived from this array, so adding or removing
 * a role here is the only change needed — nothing else has to be kept in sync.
 *
 * Emptying this array will leave the listing blank; the page is built on the
 * assumption that at least one role is open.
 */

export type Department = "Engineering" | "Research" | "Design" | "Operations";

export type WorkLocation = "Remote" | "Hybrid" | "On-site";

export interface Role {
  /** Used as the visible title and as the `?role=` value on the apply form. */
  title: string;
  department: Department;
  location: WorkLocation;
  type: "Full-Time" | "Part-Time" | "Contract" | "Internship";
  description: string;
  /** Optional flag for roles being prioritised. Surfaces a small badge. */
  featured?: boolean;
}

export const roles: Role[] = [
  {
    title: "PQC Research Intern",
    department: "Research",
    location: "Remote",
    type: "Internship",
    description: "Explore post-quantum cryptography and next-gen security.",
  },
  {
    title: "Cloud Engineering Intern",
    department: "Engineering",
    location: "Remote",
    type: "Internship",
    description: "Build and scale cloud infrastructure for real-world products.",
  },
  {
    title: "SDK Developer Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Internship",
    description: "Develop and maintain SDKs for seamless integrations.",
  },
  {
    title: "Full Stack Intern",
    department: "Engineering",
    location: "Remote",
    type: "Internship",
    description: "Work on end-to-end product development and modern web tech.",
  },
];

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

/**
 * Builds the filter pills from the role list, in the order departments first
 * appear. Departments with no open roles are omitted rather than shown as zero.
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
