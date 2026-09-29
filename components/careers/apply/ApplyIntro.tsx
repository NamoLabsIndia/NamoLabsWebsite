import React from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Wrench } from "lucide-react";
import type { Role } from "@/lib/data/roles";

/**
 * Masthead for the application page. Deliberately editorial — an eyebrow, a
 * single strong headline and a meta rail — matching the careers hero rather
 * than a generic form header.
 *
 * When the visitor arrived from a specific opening on /careers, the meta rail
 * is populated from that role's own record so both pages state the same facts.
 * If the role has skills/responsibilities they are surfaced below the meta rail
 * so applicants can reference the full JD without leaving the apply flow.
 */
export default function ApplyIntro({ role }: { role?: Role }) {
  const meta = role
    ? [
        { label: "Department", value: role.department },
        ...(role.focus ? [{ label: "Focus", value: role.focus }] : []),
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

      {/* Skills + Responsibilities — only shown when the role carries them */}
      {role && (role.skills || role.responsibilities) && (
        <div className="mt-12 grid gap-8 rounded-2xl border border-gray-100 bg-gray-50 p-6 sm:grid-cols-2 sm:p-8">
          {role.skills && role.skills.length > 0 && (
            <div>
              <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-gray-500">
                <Wrench size={13} aria-hidden="true" />
                Preferred Skills
              </p>
              <ul className="mt-4 space-y-2">
                {role.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-start gap-2 text-[14px] text-gray-700"
                  >
                    <span className="mt-[3px] h-[6px] w-[6px] shrink-0 rounded-full bg-accent" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {role.responsibilities && role.responsibilities.length > 0 && (
            <div>
              <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-gray-500">
                <CheckCircle2 size={13} aria-hidden="true" />
                Responsibilities
              </p>
              <ul className="mt-4 space-y-2">
                {role.responsibilities.map((resp) => (
                  <li
                    key={resp}
                    className="flex items-start gap-2 text-[14px] text-gray-700"
                  >
                    <span className="mt-[3px] h-[6px] w-[6px] shrink-0 rounded-full bg-namo-black" />
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
