import React from "react";
import Link from "next/link";
import { ArrowLeft, CheckCheck } from "lucide-react";
import type { Role } from "@/lib/data/roles";

/**
 * Masthead for the application page. Editorial headline + meta rail, then a
 * premium skills / responsibilities panel when the role carries those fields.
 */
export default function ApplyIntro({ role }: { role?: Role }) {
  const meta = role
    ? [
        { label: "Department", value: role.department },
        ...(role.focus ? [{ label: "Focus", value: role.focus }] : []),
        { label: "Location", value: role.location },
        {
          label: "Open for",
          value: role.availableTypes.join(" · "),
        },
      ]
    : [{ label: "Location", value: "Global · Remote" }];

  const hasExtras =
    role && (role.skills?.length || role.responsibilities?.length);

  return (
    <div className="pb-14 lg:pb-20">
      {/* Back link */}
      <Link
        href="/careers"
        className="inline-flex items-center gap-1.5 text-[13px] font-medium text-gray-500 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
      >
        <ArrowLeft size={14} aria-hidden="true" /> Back to Careers
      </Link>

      {/* Eyebrow */}
      <p className="mt-10 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">
        {role ? "Applying for" : "Open application"}
      </p>

      {/* Headline */}
      <h1 className="mt-3 max-w-[900px] text-5xl font-extrabold leading-[0.95] tracking-tighter text-namo-black sm:text-6xl lg:text-[72px]">
        {role ? (
          role.title
        ) : (
          <>
            Build what <span className="text-accent">matters.</span>
          </>
        )}
      </h1>

      {/* Description + meta */}
      <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <p className="max-w-[520px] text-[16px] leading-relaxed text-gray-500">
          {role
            ? role.description
            : `Apply to Namo Labs and work on research-driven technology across AI,
               cryptography, blockchain, quantum technologies, cloud infrastructure,
               and the systems being built on top of them.`}
        </p>

        <dl className="flex flex-wrap gap-x-8 gap-y-4 border-l-2 border-accent pl-5 lg:shrink-0 lg:border-l-0 lg:border-r-2 lg:pl-0 lg:pr-6">
          {meta.map((item) => (
            <div key={item.label}>
              <dt className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                {item.label}
              </dt>
              <dd className="mt-0.5 text-[13px] font-semibold text-namo-black">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* ── Skills + Responsibilities panel ─────────────────────────────── */}
      {hasExtras && (
        <div className="mt-10 overflow-hidden rounded-2xl border border-gray-200">
          {/* Panel header */}
          <div className="border-b border-gray-100 bg-gray-50 px-6 py-4">
            <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-gray-400">
              Role details
            </p>
          </div>

          <div className="grid divide-y divide-gray-100 bg-white sm:grid-cols-2 sm:divide-x sm:divide-y-0">
            {/* ── Skills column */}
            {role?.skills && role.skills.length > 0 && (
              <div className="px-6 py-6">
                <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.14em] text-gray-400">
                  Preferred Skills
                </p>
                <div className="flex flex-wrap gap-2">
                  {role.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-[12px] font-medium text-gray-700 transition-colors hover:border-accent/30 hover:bg-accent/5 hover:text-accent"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* ── Responsibilities column */}
            {role?.responsibilities && role.responsibilities.length > 0 && (
              <div className="px-6 py-6">
                <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.14em] text-gray-400">
                  Responsibilities
                </p>
                <ul className="space-y-2.5">
                  {role.responsibilities.map((resp) => (
                    <li
                      key={resp}
                      className="flex items-start gap-2.5 text-[13px] text-gray-600"
                    >
                      <CheckCheck
                        size={14}
                        className="mt-[2px] shrink-0 text-accent"
                        aria-hidden="true"
                      />
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
