import React, { Suspense } from "react";
import ApplicationForm from "@/components/careers/ApplicationForm";

export const metadata = {
  title: "Apply",
  description: "Submit your application to join the Namo Labs team. We are always interested in meeting exceptional researchers, engineers, and builders.",
  alternates: {
    canonical: "https://namolabs.in/careers/apply",
  },
};

export default function ApplyPage() {
  return (
    <div className="flex min-h-screen justify-center bg-white px-5 py-24 sm:py-32">
      <div className="w-full max-w-3xl">
        <Suspense
          fallback={
            <div className="flex h-64 items-center justify-center text-[13px] text-gray-500">
              Loading form...
            </div>
          }
        >
          <ApplicationForm />
        </Suspense>
      </div>
    </div>
  );
}
