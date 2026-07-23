import React from "react";

export interface LegalSection {
  heading: string;
  body: React.ReactNode;
}

// Shared styling primitives so both legal pages read consistently
// (the project has no @tailwindcss/typography, so prose is styled explicitly).
export function LegalP({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[15px] text-gray-600 leading-relaxed mb-4">{children}</p>
  );
}

export function LegalList({ children }: { children: React.ReactNode }) {
  return (
    <ul className="list-disc pl-5 text-[15px] text-gray-600 leading-relaxed mb-4 space-y-2">
      {children}
    </ul>
  );
}

export default function LegalDocument({
  title,
  lastUpdated,
  intro,
  sections,
}: {
  title: string;
  lastUpdated: string;
  intro: React.ReactNode;
  sections: LegalSection[];
}) {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-white selection:bg-blue-100">
      <div className="max-w-3xl mx-auto px-6">
        <p className="text-xs font-bold tracking-[0.2em] text-accent uppercase mb-4">
          Legal
        </p>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-namo-black leading-[1.1] tracking-tight mb-4">
          {title}
        </h1>
        <p className="text-sm text-gray-500 mb-10 pb-10 border-b border-gray-100">
          Last updated: {lastUpdated}
        </p>

        <div className="mb-10">{intro}</div>

        <div className="flex flex-col gap-9">
          {sections.map((section, i) => (
            <section key={i}>
              <h2 className="text-xl font-bold text-namo-black mb-3">
                {section.heading}
              </h2>
              {section.body}
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
