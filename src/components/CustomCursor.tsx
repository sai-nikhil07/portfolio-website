"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
    };
    window.addEventListener("resize", resize);
    resize();

    class Particle {
      x: number;
      y: number;
      size: number;
      life: number;
      maxLife: number;
      velocity: { x: number; y: number };

      constructor(x: number, y: number) {
        this.x = x + (Math.random() - 0.5) * 10;
        this.y = y + (Math.random() - 0.5) * 10;
        this.size = Math.random() * 3 + 2; // initial bubble base size
        this.maxLife = Math.random() * 80 + 40;
        this.life = this.maxLife;
        this.velocity = {
          x: (Math.random() - 0.5) * 0.5,
          y: Math.random() * -1 - 1, // drift upwards
        };
      }

      update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.size += 0.05; // bubbles expand as they float
        this.life--;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        const opacity = this.life / this.maxLife;
        ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.7})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }

    // Capture mouse movement
    const onMouseMove = (e: MouseEvent) => {
      // Create a new bubble every time the mouse moves
      particles.push(new Particle(e.clientX, e.clientY));
      // Cap the array for extreme performance
      if (particles.length > 60) particles.shift();
    };

    window.addEventListener("mousemove", onMouseMove);

    // Render Loop
    const render = () => {
      // We must use clearRect with unscaled canvas width/height divided by scale, OR just clear using large numbers
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw(ctx);
        if (particles[i].life <= 0) {
          particles.splice(i, 1);
          i--;
        }
      }
      
      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[10000] hidden md:block"
    />
  );
}
