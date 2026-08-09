"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { ArrowUpRight, Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  if (!mounted) return null;

  const dark = theme === "dark";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-md bg-background/70 border-b border-border" : ""
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <a href="#top" className="group flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground font-display text-sm transition-transform duration-500 group-hover:rotate-[360deg]">
            S
          </span>
          <span className="hidden font-display text-lg tracking-tight md:inline">
            Siyad<span className="text-primary">.</span>
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm md:flex">
          {[
            ["Work", "#work"],
            ["About", "#about"],
            ["Skills", "#skills"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a key={href} href={href} className="underline-sweep text-foreground/80 hover:text-foreground">
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="magnetic-btn hidden md:inline-flex items-center gap-2 rounded-full border border-primary px-5 py-2 text-sm font-medium text-primary"
          >
            Let&apos;s talk <ArrowUpRight className="h-4 w-4" />
          </a>
          <button
            onClick={() => setTheme(dark ? "light" : "dark")}
            aria-label="Toggle theme"
            className="group relative grid h-10 w-10 place-items-center overflow-hidden rounded-full border border-primary/40 text-primary transition-all duration-500 hover:border-primary hover:bg-primary hover:text-primary-foreground cursor-pointer"
          >
            <Sun
              className={`absolute h-4 w-4 transition-all duration-500 ${dark ? "-translate-y-6 rotate-90 opacity-0" : "translate-y-0 rotate-0 opacity-100"}`}
            />
            <Moon
              className={`absolute h-4 w-4 transition-all duration-500 ${dark ? "translate-y-0 rotate-0 opacity-100" : "translate-y-6 -rotate-90 opacity-0"}`}
            />
          </button>
        </div>
      </div>
    </header>
  );
}
