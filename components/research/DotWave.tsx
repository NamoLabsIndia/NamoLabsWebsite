"use client";

import React, { useRef, useEffect } from "react";

export default function DotWave() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: { x: number; y: number; z: number; ox: number; oz: number }[] = [];
    const amountX = 100;
    const amountY = 100;
    const separation = 25;

    // Initialize particles in a grid
    for (let ix = 0; ix < amountX; ix++) {
      for (let iy = 0; iy < amountY; iy++) {
        const x = ix * separation - (amountX * separation) / 2;
        const z = iy * separation - (amountY * separation) / 2;
        particles.push({ x, y: 0, z, ox: x, oz: z });
      }
    }

    let count = 0;
    let animationFrameId = 0;
    let running = false;

    const drawFrame = () => {
      ctx.clearRect(0, 0, width, height);

      const fov = 600;
      const viewDistance = 2500;

      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];

        // Wave function — flows left to right as `count` grows
        particle.y =
          Math.sin((particle.ox - count) * 0.005) * 80 +
          Math.sin((particle.oz - count) * 0.005) * 80;

        const z3d = particle.z + viewDistance;
        if (z3d <= 0) continue;

        const scale = fov / z3d;
        const x2d = particle.x * scale + width * 0.75;
        const y2d = particle.y * scale + height / 2 + 100;

        if (x2d > -10 && x2d < width + 10 && y2d > -10 && y2d < height + 10) {
          ctx.beginPath();
          const dotSize = Math.min(2.5, Math.max(0.3, scale * 1.5));
          ctx.arc(x2d, y2d, dotSize, 0, Math.PI * 2);
          const hue = 210 + particle.y * 0.4 + particle.ox * 0.01;
          const alpha = Math.min(1, scale * 2.5) * 0.8;
          ctx.fillStyle = `hsla(${hue}, 100%, 60%, ${alpha})`;
          ctx.fill();
        }
      }
    };

    const loop = () => {
      drawFrame();
      count += 2;
      animationFrameId = requestAnimationFrame(loop);
    };

    const start = () => {
      if (running) return;
      running = true;
      animationFrameId = requestAnimationFrame(loop);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(animationFrameId);
    };

    let observer: IntersectionObserver | undefined;

    if (prefersReduced) {
      // Respect reduced-motion: render a single static frame, no loop.
      drawFrame();
    } else {
      // Only animate while the hero is actually on screen — stops the loop
      // (and frees the main thread) the moment the user scrolls to the grid.
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) start();
          else stop();
        },
        { threshold: 0 }
      );
      observer.observe(canvas);
    }

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      observer?.disconnect();
      stop();
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{
          maskImage: "linear-gradient(to left, rgba(0,0,0,1) 10%, rgba(0,0,0,0.8) 40%, rgba(0,0,0,0) 85%)",
          WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,1) 10%, rgba(0,0,0,0.8) 40%, rgba(0,0,0,0) 85%)",
        }}
      />
    </div>
  );
}
