"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Step 15: Stop custom cursor loop if reduced motion is preferred
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let rx = 0, ry = 0, x = 0, y = 0;

    const move = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (dot.current) {
        dot.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    let rafId: number;

    const loop = () => {
      rx += (x - rx) * 0.15;
      ry += (y - ry) * 0.15;
      if (ring.current) ring.current.style.transform = `translate(${rx}px, ${ry}px)`;
      rafId = requestAnimationFrame(loop);
    };

    // Step 14: Cursor hover expansion on links, buttons, and custom triggers
    const onMouseEnter = () => {
      if (ring.current) {
        ring.current.classList.add("scale-[1.5]", "bg-primary/10", "border-primary");
      }
      if (dot.current) {
        dot.current.classList.add("scale-0");
      }
    };

    const onMouseLeave = () => {
      if (ring.current) {
        ring.current.classList.remove("scale-[1.5]", "bg-primary/10", "border-primary");
      }
      if (dot.current) {
        dot.current.classList.remove("scale-0");
      }
    };

    const addHoverListeners = (node: ParentNode) => {
      const targets = node.querySelectorAll("a, button, [role='button'], .magnetic-btn");
      targets.forEach((target) => {
        target.addEventListener("mouseenter", onMouseEnter);
        target.addEventListener("mouseleave", onMouseLeave);
      });
    };

    const removeHoverListeners = (node: ParentNode) => {
      const targets = node.querySelectorAll("a, button, [role='button'], .magnetic-btn");
      targets.forEach((target) => {
        target.removeEventListener("mouseenter", onMouseEnter);
        target.removeEventListener("mouseleave", onMouseLeave);
      });
    };

    // Add initial listeners
    addHoverListeners(document);

    // Watch for dynamically loaded content/buttons
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            addHoverListeners(node);
          }
        });
        mutation.removedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            removeHoverListeners(node);
          }
        });
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    window.addEventListener("mousemove", move);
    loop();

    const onVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(rafId);
      } else {
        rafId = requestAnimationFrame(loop);
      }
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", move);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      observer.disconnect();
      removeHoverListeners(document);
    };
  }, []);

  return (
    <>
      <div
        ref={ring}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] -ml-5 -mt-5 h-10 w-10 rounded-full border border-primary/60 mix-blend-difference hidden md:block transition-[scale,background-color,border-color] duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]"
      />
      <div
        ref={dot}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[101] -ml-[3px] -mt-[3px] h-1.5 w-1.5 rounded-full bg-primary hidden md:block transition-[scale] duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]"
      />
    </>
  );
}
