import React from "react";
import Breadcrumb from "@/components/shared/Breadcrumb";
import ApplicationForm from "@/components/careers/ApplicationForm";
import { findRoleByTitle } from "@/lib/data/roles";

const BASE_DESCRIPTION =
  "Submit your application to join the Namo Labs team. We are always interested in meeting exceptional researchers, engineers, and builders.";

type ApplySearchParams = { role?: string | string[] };

function resolveRole(searchParams: ApplySearchParams) {
  const raw = Array.isArray(searchParams.role)
    ? searchParams.role[0]
    : searchParams.role;
  // Only a genuinely open role is honoured. Anything else — a stale link, a
  // removed vacancy, or a hand-edited query string — falls through to a
  // general open application instead of being echoed back to the visitor.
  return findRoleByTitle(raw);
}

export function generateMetadata({
  searchParams,
}: {
  searchParams: ApplySearchParams;
}) {
  const role = resolveRole(searchParams);

  return {
    title: role ? `Apply — ${role.title}` : "Apply",
    description: role
      ? `Apply for the ${role.title} role at Namo Labs — ${role.location}, ${role.type}.`
      : BASE_DESCRIPTION,
    alternates: {
      // Role variants are query-string filters on one page, so the canonical
      // stays on the bare URL.
      canonical: "https://namolabs.in/careers/apply",
    },
  };
}

/**
 * The optional `?role=` parameter is resolved here, on the server, and passed
 * down as a prop. Reading it with `useSearchParams()` inside the client form
 * forced Next.js to bail out to client-side rendering, which is what made the
 * page ship a "Loading form..." Suspense fallback as its initial HTML.
 * Resolving it server-side means the fully-rendered form is in the first
 * response.
 */
export default function ApplyPage({
  searchParams,
}: {
  searchParams: ApplySearchParams;
}) {
  const role = resolveRole(searchParams);

  // Matches the Company-section trail used by /careers, /team and /about, so
  // the hierarchy doesn't change shape when you move between them.
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Company", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: role ? role.title : "Apply" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto w-full max-w-[1080px] px-5 pb-24 pt-28 sm:px-8 sm:pt-32">
        <Breadcrumb items={crumbs} />
        <div className="mt-10">
          <ApplicationForm role={role} />
        </div>
      </div>
    </div>
  );
}
