import React from "react";
import Link from "next/link";
import { ArrowRight, FileText, Mail } from "lucide-react";

/**
 * Honest fallback for when `lib/data/roles.ts` is empty — i.e. Namo Labs
 * isn't actively hiring. Renders instead of the role list, not a silent
 * blank section, and still gives the visitor two real ways forward.
 */
export default function NoOpenRoles() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-gray-50 px-6 py-16 text-center sm:px-12 sm:py-20">
      <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white text-accent ring-1 ring-gray-200">
        <Mail size={24} aria-hidden="true" />
      </span>

      <h3 className="mt-6 text-2xl font-bold text-namo-black">
        No open roles right now.
      </h3>

      <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-gray-600">
        We&apos;re not actively hiring at the moment, but we&apos;re always on
        the lookout for exceptional talent. Send an open application or email
        your resume — we&apos;ll reach out when a role fits.
      </p>

      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Link
          href="/careers/apply"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-[13px] font-bold text-white shadow-lg shadow-accent/20 transition-colors hover:bg-[#2f4be0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 sm:w-auto"
        >
          <FileText size={15} aria-hidden="true" /> Open Application
        </Link>
        <a
          href="mailto:info@namolabs.in"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-namo-black px-7 py-3.5 text-[13px] font-bold text-white shadow-lg shadow-black/10 transition-colors hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-namo-black focus-visible:ring-offset-2 sm:w-auto"
        >
          Email your resume <ArrowRight size={15} aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
