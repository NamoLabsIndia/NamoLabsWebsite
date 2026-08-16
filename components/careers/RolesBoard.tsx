"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Briefcase, Clock, Flame, MapPin } from "lucide-react";
import {
  getDepartmentFilters,
  roles as allRoles,
  type Department,
  type Role,
  type WorkLocation,
} from "@/lib/data/roles";
import NoOpenRoles from "./NoOpenRoles";

/** Location badge colours. Kept low-saturation so the page stays restrained. */
const locationStyles: Record<WorkLocation, string> = {
  Remote: "bg-emerald-50 text-emerald-700",
  Hybrid: "bg-accent-light text-accent",
  "On-site": "bg-amber-50 text-amber-700",
};

function Badge({
  icon,
  children,
  className,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
  className: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[12px] font-semibold ${className}`}
    >
      {icon}
      {children}
    </span>
  );
}

function RoleRow({ role, last }: { role: Role; last: boolean }) {
  return (
    <li className={last ? "" : "border-b border-gray-100"}>
      {/* The whole row is the link, so the arrow is decorative rather than a
          second interactive target nested inside it. */}
      <Link
        href={`/careers/apply?role=${encodeURIComponent(role.title)}`}
        className="group flex flex-col gap-4 px-5 py-6 transition-colors hover:bg-gray-50/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-6"
      >
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2.5">
            <h3 className="text-[17px] font-bold tracking-tight text-namo-black">
              {role.title}
            </h3>
            {role.featured && (
              <Badge
                icon={<Flame size={12} aria-hidden="true" />}
                className="bg-orange-50 text-orange-700"
              >
                Hot
              </Badge>
            )}
          </div>
          <p className="mt-1.5 text-[14px] leading-relaxed text-gray-500">
            {role.description}
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-2.5">
          <Badge
            icon={<MapPin size={12} aria-hidden="true" />}
            className={locationStyles[role.location]}
          >
            {role.location}
          </Badge>
          <Badge
            icon={<Clock size={12} aria-hidden="true" />}
            className="bg-gray-100 text-gray-600"
          >
            {role.type}
          </Badge>
          <span
            aria-hidden="true"
            className="ml-1 hidden h-10 w-10 shrink-0 items-center justify-center rounded-full bg-namo-black text-white transition-transform duration-200 group-hover:scale-105 sm:inline-flex"
          >
            <ArrowRight size={16} />
          </span>
        </div>
      </Link>
    </li>
  );
}

export default function RolesBoard({ list = allRoles }: { list?: Role[] }) {
  const [active, setActive] = useState<Department | null>(null);

  const filters = useMemo(() => getDepartmentFilters(list), [list]);
  const filtered = useMemo(
    () => (active === null ? list : list.filter((r) => r.department === active)),
    [list, active]
  );

  // Genuinely not hiring — the honest fallback, not a filtered-to-zero state.
  if (list.length === 0) {
    return <NoOpenRoles />;
  }

  return (
    <div>
      {/* Department filters */}
      <div
        role="group"
        aria-label="Filter roles by department"
        className="flex flex-wrap gap-2.5"
      >
        {filters.map((filter) => {
          const isActive = filter.department === active;
          return (
            <button
              key={filter.label}
              type="button"
              onClick={() => setActive(filter.department)}
              aria-pressed={isActive}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[14px] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
                isActive
                  ? "bg-namo-black text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {filter.label}
              <span
                className={`inline-flex min-w-[20px] items-center justify-center rounded-md px-1.5 py-0.5 text-[11px] font-bold tabular-nums ${
                  isActive ? "bg-white/20 text-white" : "bg-white text-gray-600"
                }`}
              >
                {filter.count}
              </span>
            </button>
          );
        })}
      </div>

      <p aria-live="polite" className="sr-only">
        {filtered.length} {filtered.length === 1 ? "role" : "roles"} shown
      </p>

      {/* Role list */}
      <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-white">
        {filtered.length > 0 ? (
          <ul>
            {filtered.map((role, index) => (
              <RoleRow
                key={role.title}
                role={role}
                last={index === filtered.length - 1}
              />
            ))}
          </ul>
        ) : (
          <p className="px-6 py-16 text-center text-[14px] text-gray-500">
            No roles in this department right now.
          </p>
        )}
      </div>

      {/* Open application */}
      <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-gray-200 bg-gray-50 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex items-center gap-3.5">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-gray-500 ring-1 ring-gray-200">
            <Briefcase size={17} aria-hidden="true" />
          </span>
          <p className="text-[14px] leading-relaxed text-gray-600">
            Don&apos;t see a fit? We&apos;re always looking for great people.
          </p>
        </div>
        <Link
          href="/careers/apply"
          className="inline-flex shrink-0 items-center gap-2 text-[14px] font-bold text-namo-black transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        >
          Send an open application
          <ArrowRight size={15} aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
