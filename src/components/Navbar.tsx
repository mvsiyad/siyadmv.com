"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { ArrowUpRight, Sun, Moon } from "lucide-react";

const navLinks = [
  ["Work", "#work"],
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Experience", "#experience"],
  ["Contact", "#contact"],
] as const;

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    const hasVisited = sessionStorage.getItem("siyad_portfolio_visited");

    const on = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;

      if (hasVisited) {
        setVisible(true);
        setScrolled(scrollY > 20);
      } else {
        if (scrollY >= vh * 0.8) {
          setVisible(true);
          setScrolled(true);
        } else {
          setVisible(false);
          setScrolled(false);
        }
      }
    };

    on();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => {
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
    };
  }, []);

  // Close menu on outside click
  useEffect(() => {
    if (!menuOpen) return;
    const close = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("#mobile-menu") && !target.closest("#hamburger-btn")) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [menuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  if (!mounted) return null;

  const dark = theme === "dark";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        } ${
          scrolled || menuOpen ? "backdrop-blur-md bg-background/70 border-b border-border" : ""
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
          {/* Logo */}
          <a href="#top" className="group flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground font-display text-sm transition-transform duration-500 group-hover:rotate-[360deg]">
              S
            </span>
            <span className="hidden font-display text-lg tracking-tight md:inline">
              Siyad<span className="text-primary">.</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 text-sm md:flex">
            {navLinks.map(([label, href]) => (
              <a key={href} href={href} className="underline-sweep text-foreground/80 hover:text-foreground">
                {label}
              </a>
            ))}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="magnetic-btn hidden md:inline-flex items-center gap-2 rounded-full border border-primary px-5 py-2 text-sm font-medium text-primary"
            >
              Let&apos;s talk <ArrowUpRight className="h-4 w-4" />
            </a>

            {/* Theme toggle */}
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

            {/* Hamburger button — mobile only */}
            <button
              id="hamburger-btn"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="md:hidden relative grid h-10 w-10 place-items-center rounded-full border border-primary/40 text-primary transition-all duration-300 hover:border-primary hover:bg-primary/10 cursor-pointer"
            >
              {/* Animated bars → X */}
              <span className="flex flex-col gap-[5px] w-4">
                <span
                  className={`block h-px bg-current transition-all duration-300 origin-center ${
                    menuOpen ? "rotate-45 translate-y-[6px]" : ""
                  }`}
                />
                <span
                  className={`block h-px bg-current transition-all duration-300 ${
                    menuOpen ? "opacity-0 scale-x-0" : ""
                  }`}
                />
                <span
                  className={`block h-px bg-current transition-all duration-300 origin-center ${
                    menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={`fixed inset-x-0 top-0 z-40 md:hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          menuOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-4 opacity-0 pointer-events-none"
        }`}
        style={{ paddingTop: "72px" }}
      >
        <div className="bg-background/95 backdrop-blur-xl border-b border-border px-6 pb-8 pt-6">
          <nav className="flex flex-col gap-1">
            {navLinks.map(([label, href], i) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="group flex items-center justify-between rounded-xl px-4 py-4 text-2xl font-display tracking-tight text-foreground/80 hover:text-primary hover:bg-primary/5 transition-all duration-300"
                style={{ transitionDelay: menuOpen ? `${i * 50}ms` : "0ms" }}
              >
                <span>{label}</span>
                <ArrowUpRight className="h-5 w-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Divider + CTA */}
          <div className="mt-6 border-t border-border pt-6">
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground w-full"
            >
              Let&apos;s talk <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Backdrop overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-30 md:hidden bg-background/40 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}
