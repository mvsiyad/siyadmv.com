"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import TextPressure from "./TextPressure";

export default function WelcomeScreen() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const dark = resolvedTheme === "dark";

  return (
    <section className="relative z-[60] h-screen w-full flex items-center justify-center bg-background text-foreground transition-colors duration-500 overflow-hidden">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute w-[50vw] h-[50vw] rounded-full bg-primary/8 blur-[160px]" />

      {/* TextPressure fills the center using CSS variables for theme responsiveness */}
      <div className="relative w-full h-[50vh] px-6 md:px-16">
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

      {/* Theme toggle — bottom right */}
      {mounted && (
        <button
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
    </section>
  );
}
