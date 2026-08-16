import React from "react";

/**
 * Editorial two-column section shell for the application form: a numbered
 * heading sits in the left gutter on large screens and stacks above the fields
 * on smaller ones. Mirrors the rule-and-number language used across the site's
 * careers pages.
 */
export default function FormSection({
  index,
  title,
  description,
  first = false,
  children,
}: {
  index: string;
  title: string;
  description: string;
  first?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section
      className={`grid gap-x-16 gap-y-8 pt-10 lg:grid-cols-[220px_minmax(0,1fr)] lg:pt-14 ${
        first ? "border-t-2 border-namo-black" : "border-t border-gray-200"
      }`}
    >
      <div className="lg:sticky lg:top-32 lg:self-start">
        <span className="text-[11px] font-bold tracking-[0.2em] text-accent">
          {index}
        </span>
        <h2 className="mt-2 text-[19px] font-bold tracking-tight text-namo-black">
          {title}
        </h2>
        <p className="mt-2 max-w-[420px] text-[13px] leading-relaxed text-gray-500 lg:max-w-[190px]">
          {description}
        </p>
      </div>

      {/* Capped so inputs and long-form answers keep a comfortable measure
          rather than stretching the full width of the page. */}
      <div className="max-w-[680px] space-y-7 pb-12 lg:pb-16">{children}</div>
    </section>
  );
}
