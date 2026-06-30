"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface WobbleCardProps {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
}

export function WobbleCard({ children, containerClassName, className }: WobbleCardProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
    setMousePos({ x, y });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePos({ x: 0, y: 0 });
      }}
      animate={{
        rotateX: isHovered ? mousePos.y * -12 : 0,
        rotateY: isHovered ? mousePos.x * 12 : 0,
        scale: isHovered ? 1.02 : 1,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      style={{ transformStyle: "preserve-3d", perspective: 800 }}
      className={cn("relative rounded-2xl overflow-hidden cursor-pointer", containerClassName)}
    >
      <div
        className={cn(
          "relative z-10 w-full h-full",
          className
        )}
      >
        {children}
      </div>
      {isHovered && (
        <div
          className="pointer-events-none absolute inset-0 z-20 rounded-2xl opacity-20"
          style={{
            background: `radial-gradient(circle at ${50 + mousePos.x * 50}% ${50 + mousePos.y * 50}%, rgba(59,91,255,0.4), transparent 60%)`,
          }}
        />
      )}
    </motion.div>
  );
}
