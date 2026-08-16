import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Role } from "@/lib/data/roles";

/**
 * Masthead for the application page. Deliberately editorial — an eyebrow, a
 * single strong headline and a meta rail — matching the careers hero rather
 * than a generic form header.
 *
 * When the visitor arrived from a specific opening on /careers, the meta rail
 * is populated from that role's own record so both pages state the same facts.
 */
export default function ApplyIntro({ role }: { role?: Role }) {
  const meta = role
    ? [
        { label: "Department", value: role.department },
        { label: "Location", value: role.location },
        { label: "Type", value: role.type },
      ]
    : [{ label: "Location", value: "Global · Remote" }];

  return (
    <div className="pb-14 lg:pb-20">
      <Link
        href="/careers"
        className="inline-flex items-center gap-1.5 text-[13px] font-medium text-gray-500 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
      >
        <ArrowLeft size={14} aria-hidden="true" /> Back to Careers
      </Link>

      <p className="mt-10 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">
        {role ? "Applying for" : "Open application"}
      </p>

      <h1 className="mt-4 max-w-[900px] text-5xl font-extrabold leading-[0.95] tracking-tighter text-namo-black sm:text-6xl lg:text-[76px]">
        {role ? (
          role.title
        ) : (
          <>
            Build what <span className="text-accent">matters.</span>
          </>
        )}
      </h1>

      <div className="mt-10 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        <p className="max-w-[540px] text-[17px] leading-relaxed text-gray-600">
          {role
            ? role.description
            : `Apply to Namo Labs and work on research-driven technology across AI,
               cryptography, blockchain, quantum technologies, cloud infrastructure,
               and the systems being built on top of them.`}
        </p>

        <dl className="flex flex-col gap-5 border-l-2 border-accent pl-5 sm:flex-row sm:gap-10 lg:shrink-0 lg:border-l-0 lg:border-r-2 lg:pl-0 lg:pr-5 lg:text-right">
          {meta.map((item) => (
            <div key={item.label}>
              <dt className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
                {item.label}
              </dt>
              <dd className="mt-1 text-[13px] font-medium text-namo-black">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
