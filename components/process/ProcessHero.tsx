import React from "react";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/shared/Breadcrumb";

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Consulting", href: "/consulting" },
  { label: "Our Process" },
];

const stats = [
  { value: "06", label: "Phases" },
  { value: "Research", label: "First principle" },
  { value: "Post-launch", label: "Support model" },
];

/**
 * Light editorial masthead, matching the rest of the site (/careers,
 * /careers/apply, /team) rather than the dark image treatment used on
 * /consulting. An earlier revision inherited that dark hero, but a heavy
 * overlay flattened the photo into a grey slab and the stock image itself
 * undercut the research positioning.
 *
 * Server component with no scroll-triggered animation: the headline and CTAs
 * are the page's primary content and must be visible in the first paint.
 */
export default function ProcessHero() {
  return (
    <section className="bg-white px-6 pb-16 pt-32 sm:pt-36 lg:pb-24">
      <div className="mx-auto w-full max-w-[1100px]">
        <Breadcrumb items={crumbs} />

        <p className="mt-10 text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
          How we work
        </p>

        <h1 className="mt-4 max-w-[860px] text-4xl font-extrabold leading-[1.05] tracking-tight text-namo-black sm:text-5xl lg:text-[64px]">
          A process built to be{" "}
          <span className="text-accent">defensible.</span>
        </h1>

        <div className="mt-8 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <p className="max-w-[620px] text-[17px] leading-relaxed text-gray-600">
            The same six phases run every consulting engagement — government
            infrastructure, enterprise integration, or research collaboration.
            Research-first, security by design, and built to last past the
            initial launch.
          </p>

          <dl className="flex flex-col gap-5 border-l-2 border-accent pl-5 sm:flex-row sm:gap-10 lg:shrink-0 lg:border-l-0 lg:border-r-2 lg:pl-0 lg:pr-5 lg:text-right">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
                  {stat.label}
                </dt>
                <dd className="mt-1 text-[15px] font-bold text-namo-black">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-[14px] font-semibold text-white shadow-lg shadow-accent/20 transition-colors hover:bg-[#2f4be0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            Start a project <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <a
            href="#phases"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-8 py-4 text-[14px] font-semibold text-namo-black transition-colors hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-namo-black focus-visible:ring-offset-2"
          >
            See the six phases <ArrowDown size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
