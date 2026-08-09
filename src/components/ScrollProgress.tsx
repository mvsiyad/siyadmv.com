"use client";

import { useEffect } from "react";

export default function ScrollProgress() {
  useEffect(() => {
    const root = document.documentElement;
    let raf = 0;
    const update = () => {
      const h = root.scrollHeight - window.innerHeight;
      const p = h > 0 ? window.scrollY / h : 0;
      root.style.setProperty("--sp", String(p));
      root.style.setProperty("--sy", String(window.scrollY));
      raf = 0;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    const onMove = (e: MouseEvent) => {
      root.style.setProperty("--mx", `${e.clientX}px`);
      root.style.setProperty("--my", `${e.clientY}px`);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px]">
      <div className="scroll-progress h-full w-full bg-primary" />
    </div>
  );
}
