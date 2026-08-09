"use client";

import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    // Assign staggered delay to sibling .reveal elements
    const parentMap = new Map<Element, HTMLElement[]>();
    els.forEach((el) => {
      const parent = el.parentElement;
      if (!parent) return;
      if (!parentMap.has(parent)) parentMap.set(parent, []);
      parentMap.get(parent)!.push(el);
    });

    parentMap.forEach((siblings) => {
      // Only stagger if there are multiple siblings (not solo elements)
      if (siblings.length > 1) {
        siblings.forEach((el, idx) => {
          el.style.transitionDelay = `${idx * 80}ms`;
        });
      }
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
