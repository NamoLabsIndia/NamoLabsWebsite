"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export type RevealDirection = "up" | "left" | "right" | "scale" | "none";

/**
 * Enhanced scroll-reveal wrapper.
 * Animates into view once, supports directional animations, and respects reduced motion.
 *
 * Uses a single render path to avoid SSR ↔ client hydration mismatches
 * (useReducedMotion returns null on the server).
 */
export default function Reveal({
  children,
  delay = 0,
  direction = "up",
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: RevealDirection;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  const getVariants = () => {
    // When reduced motion is preferred, collapse to a simple fade
    if (shouldReduceMotion) {
      return { hidden: { opacity: 0 }, visible: { opacity: 1 } };
    }

    switch (direction) {
      case "up":
        return { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };
      case "left":
        return { hidden: { opacity: 0, x: -32 }, visible: { opacity: 1, x: 0 } };
      case "right":
        return { hidden: { opacity: 0, x: 32 }, visible: { opacity: 1, x: 0 } };
      case "scale":
        return { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } };
      case "none":
        return { hidden: { opacity: 0 }, visible: { opacity: 1 } };
      default:
        return { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: shouldReduceMotion ? 0.4 : 0.6, delay, ease: "easeOut" }}
      variants={getVariants()}
      className={className}
    >
      {children}
    </motion.div>
  );
}
