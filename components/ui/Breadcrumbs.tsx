import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbsProps {
  items: {
    label: string;
    href?: string;
  }[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center text-[14px] font-medium text-accent pt-12 pb-8 px-6 max-w-7xl mx-auto w-full">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <div key={item.label} className="flex items-center">
            {item.href && !isLast ? (
              <Link href={item.href} className="hover:opacity-70 transition-opacity">
                {item.label}
              </Link>
            ) : (
              <span className={isLast ? "text-namo-black" : ""}>{item.label}</span>
            )}
            {!isLast && (
              <ChevronRight size={14} className="mx-2 text-gray-400" />
            )}
          </div>
        );
      })}
    </nav>
  );
}
