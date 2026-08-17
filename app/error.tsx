"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { ArrowRight, RotateCcw, AlertTriangle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application Error:", error);
  }, [error]);

  return (
    <main className="min-h-screen pt-44 pb-24 bg-white flex items-center justify-center px-6">
      <div className="max-w-xl mx-auto text-center">
        <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-6 border border-amber-100">
          <AlertTriangle size={32} strokeWidth={1.75} />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-namo-black tracking-tight mb-4">
          Something went wrong
        </h1>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
          An unexpected error occurred while loading this page. You can try refreshing or returning to the homepage.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => reset()}
            className="inline-flex items-center gap-2 bg-[#0A0A0A] text-white font-medium text-sm px-6 py-3 rounded-full hover:bg-gray-800 transition-colors shadow-md"
          >
            <RotateCcw size={15} /> Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-gray-50 text-gray-700 font-medium text-sm px-6 py-3 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors"
          >
            Return Home <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </main>
  );
}
