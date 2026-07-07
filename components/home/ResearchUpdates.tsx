"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const TYPE_SPEED = 80;
const DELETE_SPEED = 50;
const PAUSE_AFTER_TYPE = 2500;
const PAUSE_AFTER_DELETE = 600;

function useTypewriter(words: string[]) {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const currentWord = words[wordIndex];

    if (phase === "typing") {
      if (displayed.length < currentWord.length) {
        timeout.current = setTimeout(() => {
          setDisplayed(currentWord.slice(0, displayed.length + 1));
        }, TYPE_SPEED);
      } else {
        timeout.current = setTimeout(() => setPhase("pausing"), PAUSE_AFTER_TYPE);
      }
    } else if (phase === "pausing") {
      timeout.current = setTimeout(() => setPhase("deleting"), PAUSE_AFTER_TYPE);
    } else if (phase === "deleting") {
      if (displayed.length > 0) {
        timeout.current = setTimeout(() => {
          setDisplayed(displayed.slice(0, displayed.length - 1));
        }, DELETE_SPEED);
      } else {
        timeout.current = setTimeout(() => {
          const next = (wordIndex + 1) % words.length;
          setWordIndex(next);
          setPhase("typing");
        }, PAUSE_AFTER_DELETE);
      }
    }

    return () => { if (timeout.current) clearTimeout(timeout.current); };
  }, [displayed, phase, wordIndex, words]);

  return displayed;
}

export default function ResearchUpdates() {
  const typedText = useTypewriter([
    "Releasing Soon",
    "Cryptography",
    "Blockchain",
    "Artificial Intelligence",
    "Quantum",
    "Cloud"
  ]);

  return (
    <section className="py-24 bg-namo-faint">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-4xl sm:text-5xl font-black text-namo-black mb-3"
        >
          Research &amp; Updates
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center text-gray-500 max-w-lg mx-auto mb-16"
        >
          Advancing research in Quantum Technology, Open-Sourcing and Cryptography to build a secure digital future.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto w-full flex flex-col items-center justify-center py-16 min-h-[240px] rounded-[28px] bg-white border border-gray-100 shadow-[0_8px_40px_rgba(0,0,0,0.04)]"
        >
          <h3 className="text-3xl sm:text-5xl lg:text-6xl font-[800] text-transparent bg-clip-text bg-gradient-to-r from-namo-black to-gray-500 tracking-tight flex items-center">
            {typedText}
            <span className="inline-block w-[4px] sm:w-[6px] h-[1em] bg-accent align-middle ml-[6px] animate-pulse" />
          </h3>
        </motion.div>
      </div>
    </section>
  );
}
