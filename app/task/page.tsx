import type { Metadata } from "next";
import TaskBoard from "./TaskBoard";

export const metadata: Metadata = {
  title: "Task Board (Internal)",
  description:
    "Internal website sprint board for Ayush, Rishab, and Rishi — Namo Labs project management.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: "https://namolabs.in/task",
  },
};

export default function TaskPage() {
  return <TaskBoard />;
}
