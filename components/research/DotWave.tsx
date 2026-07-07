"use client";

import React, { useRef, useEffect } from "react";

export default function DotWave() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    let particles: { x: number; y: number; z: number; ox: number; oz: number }[] = [];
    const amountX = 120;
    const amountY = 120;
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
    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Camera / Projection settings
      const fov = 600;
      // We push the grid far back so dots never come to the extreme foreground
      const viewDistance = 2500;
      
      // Calculate dot movement and draw
      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];
        
        // Complex wave function using sine and cosine for natural motion
        // We subtract count so the wave flows from left to right
        particle.y =
          Math.sin((particle.ox - count) * 0.005) * 80 +
          Math.sin((particle.oz - count) * 0.005) * 80;

        // 3D to 2D projection
        // We simulate looking at it from an angle (isometric-ish)
        const z3d = particle.z + viewDistance;
        if (z3d <= 0) continue; // Behind camera

        const scale = fov / z3d;
        // Shift the center of the wave to the right (75% of screen width)
        const x2d = (particle.x * scale) + width * 0.75;
        // Shift Y down so the wave sits in the lower half/middle of the screen
        const y2d = (particle.y * scale) + height / 2 + 100; 

        // Only draw if on screen
        if (x2d > -10 && x2d < width + 10 && y2d > -10 && y2d < height + 10) {
          ctx.beginPath();
          
          // Dot size scales with distance, but capped so they never get huge
          const dotSize = Math.min(2.5, Math.max(0.3, scale * 1.5));
          ctx.arc(x2d, y2d, dotSize, 0, Math.PI * 2);
          
          // Color logic: map height (particle.y) and position to a gradient
          // from cyan to deep blue
          const hue = 210 + (particle.y * 0.4) + (particle.ox * 0.01);
          // Opacity fades out in the distance. Increased max opacity to make them brighter.
          const alpha = Math.min(1, scale * 2.5) * 0.8;
          
          ctx.fillStyle = `hsla(${hue}, 100%, 60%, ${alpha})`;
          ctx.fill();
        }
      }

      count += 2; // Speed of the wave (left to right, much slower)
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* 
        We use a radial mask on the canvas itself to fade it out gracefully 
        at the edges of the screen, just like the reference image.
      */}
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
