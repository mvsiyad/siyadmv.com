"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    let rx = 0, ry = 0, x = 0, y = 0;
    const move = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (dot.current) {
        dot.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    };
    const loop = () => {
      rx += (x - rx) * 0.15;
      ry += (y - ry) * 0.15;
      if (ring.current) ring.current.style.transform = `translate(${rx}px, ${ry}px)`;
      requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", move);
    loop();
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div
        ref={ring}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] -ml-5 -mt-5 h-10 w-10 rounded-full border border-primary/60 mix-blend-multiply hidden md:block"
      />
      <div
        ref={dot}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[101] -ml-[3px] -mt-[3px] h-1.5 w-1.5 rounded-full bg-primary hidden md:block"
      />
    </>
  );
}
