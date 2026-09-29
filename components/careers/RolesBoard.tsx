"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Briefcase, Clock, Flame, MapPin } from "lucide-react";
import {
  getDepartmentFilters,
  getTypeFilters,
  roles as allRoles,
  type Department,
  type Role,
  type RoleType,
  type WorkLocation,
} from "@/lib/data/roles";
import NoOpenRoles from "./NoOpenRoles";

const locationStyles: Record<WorkLocation, string> = {
  Remote: "bg-emerald-50 text-emerald-700",
  Hybrid: "bg-accent-light text-accent",
  "On-site": "bg-amber-50 text-amber-700",
};

const typeStyles: Record<string, string> = {
  "Full-Time": "bg-blue-50 text-blue-700",
  Internship: "bg-purple-50 text-purple-700",
  Contract: "bg-gray-100 text-gray-600",
  "Part-Time": "bg-orange-50 text-orange-700",
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
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[12px] font-semibold ${className}`}
    >
      {icon}
      {children}
    </span>
  );
}

/** Shared pill used in both filter rows. */
function Pill({
  label,
  count,
  isActive,
  onClick,
}: {
  label: string;
  count: number;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={isActive}
      className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[13px] font-semibold transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1 ${
        isActive
          ? "bg-namo-black text-white shadow-sm"
          : "bg-white text-gray-600 ring-1 ring-inset ring-gray-200 hover:ring-gray-300 hover:text-gray-900"
      }`}
    >
      {label}
      <span
        className={`text-[11px] tabular-nums font-bold ${
          isActive ? "text-white/50" : "text-gray-400"
        }`}
      >
        {count}
      </span>
    </button>
  );
}

function RoleRow({ role, last }: { role: Role; last: boolean }) {
  return (
    <li className={last ? "" : "border-b border-gray-100"}>
      <Link
        href={`/careers/apply?role=${encodeURIComponent(role.title)}`}
        className="group flex flex-col gap-3 px-5 py-5 transition-colors hover:bg-gray-50/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-6"
      >
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-[15px] font-bold tracking-tight text-namo-black">
              {role.title}
            </h3>
            {role.featured && (
              <Badge
                icon={<Flame size={11} aria-hidden="true" />}
                className="bg-orange-50 text-orange-600"
              >
                Hot
              </Badge>
            )}
          </div>
          <p className="mt-1 text-[13px] leading-relaxed text-gray-500 line-clamp-2">
            {role.description}
          </p>
          {role.focus && (
            <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.1em] text-accent/80">
              {role.focus}
            </p>
          )}
        </div>

        <div className="flex shrink-0 items-center gap-1.5">
          <Badge
            icon={<MapPin size={11} aria-hidden="true" />}
            className={locationStyles[role.location]}
          >
            {role.location}
          </Badge>
          <Badge
            icon={<Clock size={11} aria-hidden="true" />}
            className={typeStyles[role.type] ?? "bg-gray-100 text-gray-600"}
          >
            {role.type}
          </Badge>
          <span
            aria-hidden="true"
            className="ml-1 hidden h-8 w-8 shrink-0 items-center justify-center rounded-full bg-namo-black text-white transition-transform duration-200 group-hover:scale-110 sm:inline-flex"
          >
            <ArrowRight size={14} />
          </span>
        </div>
      </Link>
    </li>
  );
}

export default function RolesBoard({ list = allRoles }: { list?: Role[] }) {
  const [activeDept, setActiveDept] = useState<Department | null>(null);
  const [activeType, setActiveType] = useState<RoleType | null>(null);

  const typeFiltered = useMemo(
    () => (activeType === null ? list : list.filter((r) => r.type === activeType)),
    [list, activeType]
  );
  const deptFilters = useMemo(() => getDepartmentFilters(typeFiltered), [typeFiltered]);

  const deptFiltered = useMemo(
    () => (activeDept === null ? list : list.filter((r) => r.department === activeDept)),
    [list, activeDept]
  );
  const typeFilters = useMemo(() => getTypeFilters(deptFiltered), [deptFiltered]);

  const filtered = useMemo(
    () =>
      list.filter(
        (r) =>
          (activeDept === null || r.department === activeDept) &&
          (activeType === null || r.type === activeType)
      ),
    [list, activeDept, activeType]
  );

  if (list.length === 0) return <NoOpenRoles />;

  // "All Types" pill = activeType null; exclude it from the options list
  // since we show it manually with the label "All".
  const typeOptions = typeFilters.filter((f) => f.type !== null);

  return (
    <div className="space-y-3">
      {/* ── Filter card ──────────────────────────────────────────────────── */}
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
        {/* Type row */}
        <div className="flex flex-wrap items-center gap-2 px-4 py-3.5 sm:px-5">
          <span className="mr-1 text-[11px] font-bold uppercase tracking-[0.13em] text-gray-400">
            Type
          </span>
          <Pill
            label="All"
            count={list.length}
            isActive={activeType === null}
            onClick={() => { setActiveType(null); setActiveDept(null); }}
          />
          {typeOptions.map((f) => (
            <Pill
              key={f.label}
              label={f.label}
              count={f.count}
              isActive={f.type === activeType}
              onClick={() => { setActiveType(f.type); setActiveDept(null); }}
            />
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-100" />

        {/* Department row */}
        <div
          role="group"
          aria-label="Filter roles by department"
          className="flex flex-wrap items-center gap-2 px-4 py-3.5 sm:px-5"
        >
          <span className="mr-1 text-[11px] font-bold uppercase tracking-[0.13em] text-gray-400">
            Dept
          </span>
          {deptFilters.map((f) => (
            <Pill
              key={f.label}
              label={f.label === "All Roles" ? "All" : f.label}
              count={f.count}
              isActive={f.department === activeDept}
              onClick={() => setActiveDept(f.department)}
            />
          ))}
        </div>
      </div>

      <p aria-live="polite" className="sr-only">
        {filtered.length} {filtered.length === 1 ? "role" : "roles"} shown
      </p>

      {/* ── Role list ────────────────────────────────────────────────────── */}
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
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
          <p className="px-6 py-16 text-center text-[14px] text-gray-400">
            No roles match these filters.
          </p>
        )}
      </div>

      {/* ── Open application ─────────────────────────────────────────────── */}
      <div className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-gray-400 ring-1 ring-gray-200">
            <Briefcase size={15} aria-hidden="true" />
          </span>
          <p className="text-[13px] text-gray-500">
            Don&apos;t see a fit? We&apos;re always looking for great people.
          </p>
        </div>
        <Link
          href="/careers/apply"
          className="inline-flex shrink-0 items-center gap-1.5 text-[13px] font-bold text-namo-black transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        >
          Send an open application
          <ArrowRight size={14} aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
