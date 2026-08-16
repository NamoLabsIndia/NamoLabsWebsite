import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface Crumb {
  label: string;
  href?: string;
}

/**
 * Company-section breadcrumb, e.g. Home > Company > Team.
 * Linked crumbs render in accent blue; the current page is muted.
 */
export default function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-[13px]">
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <React.Fragment key={item.label}>
            {item.href && !isLast ? (
              <Link href={item.href} className="font-medium text-accent hover:underline">
                {item.label}
              </Link>
            ) : (
              // gray-500 rather than gray-400: the current-page crumb is real
              // text and needs to clear WCAG AA (4.83:1 vs 2.54:1).
              <span className={isLast ? "text-gray-500" : "font-medium text-accent"}>
                {item.label}
              </span>
            )}
            {!isLast && <ChevronRight size={13} className="text-gray-300" />}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
