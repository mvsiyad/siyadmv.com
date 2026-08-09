"use client";

import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import TextPressure from "./TextPressure";

export default function WelcomeScreen() {
  const [mounted, setMounted] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const { resolvedTheme, setTheme } = useTheme();

  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const bgGlowRef = useRef<HTMLDivElement>(null);
  const scrollCueRef = useRef<HTMLDivElement>(null);
  const themeToggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
    
    // Step 12: Skip WelcomeScreen for returning session visitors
    const hasVisited = sessionStorage.getItem("siyad_portfolio_visited");
    if (hasVisited) {
      setShowWelcome(false);
    } else {
      sessionStorage.setItem("siyad_portfolio_visited", "true");
    }
  }, []);

  const dark = resolvedTheme === "dark";

  useEffect(() => {
    if (!showWelcome) return;

    const handleScroll = () => {
      if (!containerRef.current) return;

      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      const progress = Math.min(scrollY / vh, 1);

      // 1. Content 3D receding transform (No blur filter to prevent browser repaint lag)
      if (contentRef.current) {
        const scale = 1 - progress * 0.25;
        const translateZ = -progress * 250;
        const rotateX = -progress * 8;
        const rotateY = progress * 4;
        const opacity = Math.max(0, 1 - progress * 1.1);

        contentRef.current.style.transform = `perspective(1200px) translate3d(0, 0, ${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
        contentRef.current.style.opacity = String(opacity);
      }

      // 2. Background glow scale up and fade
      if (bgGlowRef.current) {
        const glowScale = 1 + progress * 0.5;
        const glowOpacity = Math.max(0, 1 - progress * 1.5);
        bgGlowRef.current.style.transform = `scale(${glowScale})`;
        bgGlowRef.current.style.opacity = String(glowOpacity);
      }

      // 3. Scroll Cue (fades out fast)
      if (scrollCueRef.current) {
        const cueOpacity = Math.max(0, 1 - progress * 4);
        const cueTranslateY = progress * 40;
        scrollCueRef.current.style.opacity = String(cueOpacity);
        scrollCueRef.current.style.transform = `translate3d(-50%, ${cueTranslateY}px, 0)`;
      }

      // 4. Theme Toggle (fades out fast)
      if (themeToggleRef.current) {
        const toggleOpacity = Math.max(0, 1 - progress * 3.3);
        const toggleTranslateY = progress * 30;
        themeToggleRef.current.style.opacity = String(toggleOpacity);
        themeToggleRef.current.style.transform = `translate3d(0, ${toggleTranslateY}px, 0)`;
      }

      // 5. Toggle visibility to disable pointer-events and stop rendering when scrolled past
      if (progress >= 1) {
        containerRef.current.style.visibility = "hidden";
        containerRef.current.style.pointerEvents = "none";
      } else {
        containerRef.current.style.visibility = "visible";
        containerRef.current.style.pointerEvents = "auto";
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [showWelcome]);

  if (!showWelcome) return null;

  return (
    <>
      <section
        ref={containerRef}
        className="fixed top-0 left-0 w-screen h-screen z-[60] flex items-center justify-center bg-background text-foreground transition-colors duration-500 overflow-hidden will-change-transform"
      >
        <div
          ref={contentRef}
          className="relative w-screen h-screen flex flex-col items-center justify-center origin-center will-change-transform"
        >
          {/* Subtle background glow */}
          <div
            ref={bgGlowRef}
            className="pointer-events-none absolute w-[50vw] h-[50vw] rounded-full bg-primary/8 blur-[160px] will-change-transform"
          />

          {/* TextPressure fills the center using CSS variables for theme responsiveness */}
          <div className="relative w-full h-[50vh] flex items-center justify-center px-6 md:px-16">
            <TextPressure
              text="HELLO"
              fontFamily="Roboto Flex"
              fontUrl="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wdth,wght@8..144,25..151,100..1000&display=swap"
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={true}
              textColor="var(--primary)"
              strokeColor="var(--foreground)"
              minFontSize={48}
              scale={true}
            />
          </div>

          {/* Step 11: Scroll-down indicator cue */}
          <div
            ref={scrollCueRef}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/50 transition-opacity duration-500 animate-pulse pointer-events-none"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] font-medium opacity-80">Scroll to explore</span>
            <div className="flex flex-col items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-[bounce_1.5s_infinite]" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="animate-bounce"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
          </div>

          {/* Theme toggle — bottom right */}
          {mounted && (
            <button
              ref={themeToggleRef}
              onClick={() => setTheme(dark ? "light" : "dark")}
              aria-label="Toggle theme"
              className="absolute bottom-8 right-8 grid h-11 w-11 place-items-center overflow-hidden rounded-full border border-border text-foreground/75 transition-all duration-500 hover:border-primary hover:text-primary hover:bg-primary/10 cursor-pointer"
            >
              <Sun
                className={`absolute h-4 w-4 transition-all duration-500 ${dark ? "-translate-y-6 rotate-90 opacity-0" : "translate-y-0 rotate-0 opacity-100"}`}
              />
              <Moon
                className={`absolute h-4 w-4 transition-all duration-500 ${dark ? "translate-y-0 rotate-0 opacity-100" : "translate-y-6 -rotate-90 opacity-0"}`}
              />
            </button>
          )}
        </div>
      </section>

      {/* Spacer to push down the portfolio content in the document flow */}
      <div className="h-screen w-full pointer-events-none" />
    </>
  );
}
