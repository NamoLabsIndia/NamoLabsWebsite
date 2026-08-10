"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  ASSIGNEES,
  EFFORT_LABEL,
  TASKS,
  type Assignee,
  type Task,
  type TaskStatus,
} from "@/lib/data/tasks";
import { cn } from "@/lib/utils";
import {
  CheckCircle2,
  Circle,
  ClipboardList,
  ExternalLink,
  Filter,
  RotateCcw,
} from "lucide-react";

const STORAGE_KEY = "namolabs-task-statuses-v2";

const STATUS_OPTIONS: { value: TaskStatus; label: string }[] = [
  { value: "todo", label: "To do" },
  { value: "in_progress", label: "In progress" },
  { value: "review", label: "Review" },
  { value: "done", label: "Done" },
];

const PERSON_COLOR: Record<Assignee, string> = {
  Ayush: "bg-sky-500",
  Rishab: "bg-violet-500",
  Rishi: "bg-emerald-500",
};

function loadStatuses(): Record<string, TaskStatus> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Record<string, TaskStatus>) : {};
  } catch {
    return {};
  }
}

function withStatus(overrides: Record<string, TaskStatus>): Task[] {
  return TASKS.map((t) => ({
    ...t,
    status: overrides[t.id] ?? t.status,
  }));
}

export default function TaskBoard() {
  const [statuses, setStatuses] = useState<Record<string, TaskStatus>>({});
  const [person, setPerson] = useState<"all" | Assignee>("all");
  const [effort, setEffort] = useState<"all" | string>("all");
  const [priority, setPriority] = useState<"all" | string>("all");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setStatuses(loadStatuses());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(statuses));
  }, [statuses, hydrated]);

  const tasks = useMemo(() => withStatus(statuses), [statuses]);

  const filtered = useMemo(() => {
    return tasks.filter((t) => {
      if (person !== "all" && t.assignee !== person) return false;
      if (effort !== "all" && t.effort !== effort) return false;
      if (priority !== "all" && t.priority !== priority) return false;
      return true;
    });
  }, [tasks, person, effort, priority]);

  const counts = useMemo(() => {
    const base = ASSIGNEES.map((a) => {
      const mine = tasks.filter((t) => t.assignee === a);
      return {
        name: a,
        total: mine.length,
        done: mine.filter((t) => t.status === "done").length,
        p0: mine.filter((t) => t.priority === "P0").length,
      };
    });
    return base;
  }, [tasks]);

  const setStatus = (id: string, status: TaskStatus) => {
    setStatuses((prev) => ({ ...prev, [id]: status }));
  };

  const resetStatuses = () => {
    if (!confirm("Reset all local status changes to To do defaults?")) return;
    setStatuses({});
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <div className="min-h-screen bg-[#f6f7f9] text-namo-black pt-[104px] pb-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <header className="mb-6 sm:mb-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-accent mb-2 flex items-center gap-2">
                <ClipboardList size={14} /> Internal · Website sprint
              </p>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Task board
              </h1>
              <p className="mt-2 text-sm sm:text-[15px] text-gray-600 max-w-2xl leading-relaxed">
                Shared assignments for <strong>Ayush</strong>,{" "}
                <strong>Rishab</strong>, and <strong>Rishi</strong>. Status
                updates save in this browser (like a lightweight sheet). Share{" "}
                <code className="text-[12px] bg-white border px-1.5 py-0.5 rounded">
                  /task
                </code>{" "}
                with the team — not linked in public nav.
              </p>
            </div>
            <button
              type="button"
              onClick={resetStatuses}
              className="inline-flex items-center gap-2 text-[13px] font-medium text-gray-600 hover:text-namo-black border border-gray-200 bg-white rounded-lg px-3 py-2"
            >
              <RotateCcw size={14} /> Reset statuses
            </button>
          </div>

          {/* Person summary cards */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {counts.map((c) => (
              <button
                key={c.name}
                type="button"
                onClick={() =>
                  setPerson((p) => (p === c.name ? "all" : c.name))
                }
                className={cn(
                  "text-left rounded-xl border bg-white p-4 transition shadow-sm",
                  person === c.name
                    ? "border-accent ring-2 ring-accent/20"
                    : "border-gray-200 hover:border-gray-300"
                )}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={cn(
                      "w-2.5 h-2.5 rounded-full",
                      PERSON_COLOR[c.name]
                    )}
                  />
                  <span className="font-semibold">{c.name}</span>
                </div>
                <p className="text-2xl font-bold tracking-tight">
                  {c.done}/{c.total}
                  <span className="text-sm font-medium text-gray-500 ml-2">
                    done
                  </span>
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {c.p0} P0 priority · click to filter
                </p>
              </button>
            ))}
          </div>
        </header>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-4 text-[13px]">
          <span className="inline-flex items-center gap-1.5 text-gray-500 mr-1">
            <Filter size={14} /> Filters
          </span>
          <select
            value={person}
            onChange={(e) =>
              setPerson(e.target.value as "all" | Assignee)
            }
            className="rounded-lg border border-gray-200 bg-white px-3 py-2"
          >
            <option value="all">All people</option>
            {ASSIGNEES.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
          <select
            value={effort}
            onChange={(e) => setEffort(e.target.value)}
            className="rounded-lg border border-gray-200 bg-white px-3 py-2"
          >
            <option value="all">All effort</option>
            <option value="minimum">Minimum UI</option>
            <option value="normal">Normal UI</option>
            <option value="major">Major UI</option>
            <option value="nav">Nav / IA</option>
            <option value="fix">Bug fix</option>
          </select>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="rounded-lg border border-gray-200 bg-white px-3 py-2"
          >
            <option value="all">All priority</option>
            <option value="P0">P0</option>
            <option value="P1">P1</option>
            <option value="P2">P2</option>
          </select>
          <span className="text-gray-500 ml-auto">
            Showing {filtered.length} / {tasks.length}
          </span>
        </div>

        {/* Sheet table */}
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1100px] text-left text-[13px]">
              <thead>
                <tr className="bg-[#eef0f3] text-[11px] uppercase tracking-wider text-gray-600 border-b border-gray-200">
                  <th className="px-3 py-3 font-semibold w-[72px]">ID</th>
                  <th className="px-3 py-3 font-semibold w-[100px]">Owner</th>
                  <th className="px-3 py-3 font-semibold w-[72px]">Pri</th>
                  <th className="px-3 py-3 font-semibold w-[110px]">Effort</th>
                  <th className="px-3 py-3 font-semibold">Task</th>
                  <th className="px-3 py-3 font-semibold w-[200px]">URL(s)</th>
                  <th className="px-3 py-3 font-semibold w-[140px]">Status</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((t, i) => (
                  <tr
                    key={t.id}
                    className={cn(
                      "border-b border-gray-100 align-top",
                      i % 2 === 0 ? "bg-white" : "bg-[#fafbfc]",
                      t.status === "done" && "opacity-60"
                    )}
                  >
                    <td className="px-3 py-3 font-mono text-[12px] text-gray-500 whitespace-nowrap">
                      {t.id}
                    </td>
                    <td className="px-3 py-3 whitespace-nowrap">
                      <span className="inline-flex items-center gap-1.5 font-medium">
                        <span
                          className={cn(
                            "w-2 h-2 rounded-full",
                            PERSON_COLOR[t.assignee]
                          )}
                        />
                        {t.assignee}
                      </span>
                    </td>
                    <td className="px-3 py-3">
                      <PriorityBadge priority={t.priority} />
                    </td>
                    <td className="px-3 py-3 text-gray-600 whitespace-nowrap">
                      {EFFORT_LABEL[t.effort]}
                    </td>
                    <td className="px-3 py-3">
                      <p className="font-semibold text-[13.5px] text-namo-black leading-snug">
                        {t.title}
                      </p>
                      <p className="mt-1 text-gray-600 leading-relaxed max-w-xl">
                        {t.notes}
                      </p>
                      <p className="mt-1.5 text-[12px] text-gray-500">
                        <span className="font-semibold text-gray-700">
                          Done when:
                        </span>{" "}
                        {t.acceptance}
                      </p>
                    </td>
                    <td className="px-3 py-3">
                      <UrlList task={t} />
                    </td>
                    <td className="px-3 py-3">
                      <div className="flex items-center gap-1.5">
                        {t.status === "done" ? (
                          <CheckCircle2
                            size={14}
                            className="text-emerald-600 shrink-0"
                          />
                        ) : (
                          <Circle
                            size={14}
                            className="text-gray-300 shrink-0"
                          />
                        )}
                        <select
                          value={t.status}
                          onChange={(e) =>
                            setStatus(t.id, e.target.value as TaskStatus)
                          }
                          className={cn(
                            "w-full rounded-md border px-2 py-1.5 text-[12px] font-medium",
                            statusSelectClass(t.status)
                          )}
                        >
                          {STATUS_OPTIONS.map((o) => (
                            <option key={o.value} value={o.value}>
                              {o.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Workload split summary */}
        <section className="mt-8 grid md:grid-cols-3 gap-4">
          <OwnerBrief
            name="Ayush"
            color={PERSON_COLOR.Ayush}
            lines={[
              "Major: Careers + Apply (wire form)",
              "Major: Process page redesign",
              "P0: Remove fake testimonials",
              "Careers ↔ Apply linking QA",
            ]}
          />
          <OwnerBrief
            name="Rishab"
            color={PERSON_COLOR.Rishab}
            lines={[
              "Minimum UI: About + Team",
              "P0 fix: TierraTrace 404",
              "Nav: Solutions mega menu + Process/Collaboration/Insights",
              "Custom 404 error page (RB-07)",
              "QA: Solutions pages after nav",
            ]}
          />
          <OwnerBrief
            name="Rishi"
            color={PERSON_COLOR.Rishi}
            lines={[
              "Major: Collaboration redesign",
              "Normal: all 5 research domains",
              "Fix research updates / /updates dead link",
            ]}
          />
        </section>
      </div>
    </div>
  );
}

function PriorityBadge({ priority }: { priority: string }) {
  const cls =
    priority === "P0"
      ? "bg-red-100 text-red-700"
      : priority === "P1"
        ? "bg-amber-100 text-amber-800"
        : "bg-gray-100 text-gray-600";
  return (
    <span
      className={cn(
        "inline-block text-[11px] font-bold px-2 py-0.5 rounded-md",
        cls
      )}
    >
      {priority}
    </span>
  );
}

function statusSelectClass(status: TaskStatus) {
  switch (status) {
    case "done":
      return "border-emerald-200 bg-emerald-50 text-emerald-800";
    case "in_progress":
      return "border-sky-200 bg-sky-50 text-sky-800";
    case "review":
      return "border-violet-200 bg-violet-50 text-violet-800";
    default:
      return "border-gray-200 bg-white text-gray-700";
  }
}

function UrlList({ task }: { task: Task }) {
  const list = task.urls?.length
    ? task.urls
    : task.url
      ? [task.url]
      : [];
  if (!list.length) return <span className="text-gray-400">—</span>;
  return (
    <ul className="space-y-1">
      {list.map((u) => {
        const path = u.replace("https://namolabs.in", "") || "/";
        const internal = u.startsWith("https://namolabs.in") || u.startsWith("/");
        const href = internal
          ? path.startsWith("http")
            ? path
            : path || "/"
          : u;
        return (
          <li key={u}>
            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-accent hover:underline break-all"
            >
              {path.length > 36 ? `${path.slice(0, 34)}…` : path || "/"}
              <ExternalLink size={11} className="shrink-0 opacity-70" />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

function OwnerBrief({
  name,
  color,
  lines,
}: {
  name: string;
  color: string;
  lines: string[];
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-2 mb-3">
        <span className={cn("w-2.5 h-2.5 rounded-full", color)} />
        <h3 className="font-bold text-[15px]">{name}</h3>
      </div>
      <ul className="space-y-1.5 text-[13px] text-gray-600 list-disc pl-4">
        {lines.map((l) => (
          <li key={l}>{l}</li>
        ))}
      </ul>
    </div>
  );
}
