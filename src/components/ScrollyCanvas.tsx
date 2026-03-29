"use client";

import { useRef, useEffect, useState } from "react";
import { useScroll, useMotionValueEvent, motion, useTransform } from "framer-motion";

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  
  const { scrollYProgress } = useScroll({ 
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const frameCount = 123;
  
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // Preload images
    const loadedImages: HTMLImageElement[] = [];
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      const num = i.toString().padStart(3, "0");
      img.src = `/sequence/ezgif-frame-${num}.png`;
      // Optional: decode the image off main thread
      img.decode().catch(() => {});
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  useEffect(() => {
    if (images.length === 0) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const setCanvasScale = () => {
      // Cap DPR to 1 or max 1.5 to prevent massive 4K/5K resolutions from lagging
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
    };

    images[0].onload = () => {
      setCanvasScale();
      drawImageProp(ctx, images[0], 0, 0, canvas.width, canvas.height);
    };

    const handleResize = () => {
      setCanvasScale();
      const progress = scrollYProgress.get();
      const frameIndex = Math.min(Math.floor(progress * (frameCount - 1)), frameCount - 1);
      if (images[frameIndex] && images[frameIndex].complete) {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(() => {
          drawImageProp(ctx, images[frameIndex], 0, 0, canvas.width, canvas.height);
        });
      }
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [images, scrollYProgress]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (images.length === 0) return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d", { alpha: false });
    if (!canvas || !ctx) return;
    
    const frameIndex = Math.min(Math.floor(latest * (frameCount - 1)), frameCount - 1);
    const img = images[frameIndex];
    if (img && img.complete) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        drawImageProp(ctx, img, 0, 0, canvas.width, canvas.height);
      });
    }
  });

  const scale = useTransform(scrollYProgress, [0, 0.4], [0.5, 1]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.4], ["4rem", "0rem"]);
  const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

  return (
    <div ref={containerRef} className="relative w-full z-0" style={{ height: "400vh" }}>
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-black">
        <motion.div 
          style={{ scale, borderRadius, opacity }}
          className="w-full h-full overflow-hidden origin-center bg-[#111]"
        >
          <canvas ref={canvasRef} className="w-full h-full object-cover opacity-80" />
        </motion.div>
      </div>
    </div>
  );
}

function drawImageProp(ctx: CanvasRenderingContext2D, img: HTMLImageElement, x: number, y: number, w: number, h: number, offsetX = 0.5, offsetY = 0.5) {
  if (arguments.length === 2) {
      x = y = 0;
      w = ctx.canvas.width;
      h = ctx.canvas.height;
  }
  let iw = img.width, ih = img.height, r = Math.min(w / iw, h / ih), nw = iw * r, nh = ih * r, cx, cy, cw, ch, ar = 1;
  if (nw < w) ar = w / nw;
  if (Math.abs(ar - 1) < 1e-14 && nh < h) ar = h / nh;
  nw *= ar; nh *= ar; cw = iw / (nw / w); ch = ih / (nh / h);
  cx = (iw - cw) * offsetX; cy = (ih - ch) * offsetY;
  if (cx < 0) cx = 0; if (cy < 0) cy = 0; if (cw > iw) cw = iw; if (ch > ih) ch = ih;
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.drawImage(img, cx, cy, cw, ch, x, y, w, h);
}
