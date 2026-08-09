"use client";

import { ArrowUpRight, MapPin, Download } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 md:pt-40">
      {/* Soft decorative blobs */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-[520px] w-[520px] rounded-full bg-primary/10 blur-3xl animate-float-slow" />
      <div className="pointer-events-none absolute top-40 -left-20 h-[380px] w-[380px] rounded-full bg-primary/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-foreground/60 reveal">
          <span className="h-px w-10 bg-primary" />
          <span>Portfolio · 2026</span>
        </div>

        <h1 className="mt-8 font-display text-[13vw] leading-[0.92] tracking-tight md:text-[9.5vw] lg:text-[8.5rem] reveal">
          <span className="block">Mohammed</span>
          <span className="block">
            Siyad <span className="text-outline">MV</span>
            <span className="text-primary animate-blink">.</span>
          </span>
        </h1>

        <div className="mt-10 grid gap-8 md:grid-cols-12 md:items-end">
          <p className="md:col-span-6 md:col-start-1 text-lg leading-relaxed text-foreground/80 reveal">
            Full stack developer specialising in the{" "}
            <span className="font-semibold text-primary">MERN</span> stack. I build fast,
            elegant, thoroughly considered products for teams that care about the details.
          </p>
          <div className="md:col-span-4 md:col-start-9 flex flex-col gap-2 text-sm reveal">
            <div className="flex items-center gap-2 text-foreground/70">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Available for select freelance
            </div>
            <div className="flex items-center gap-2 text-foreground/70">
              <MapPin className="h-3.5 w-3.5" /> Based in India · Remote worldwide
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center gap-4 reveal">
          <a
            href="#work"
            className="magnetic-btn inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground"
          >
            View selected work <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-7 py-3.5 text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors duration-300"
          >
            Get in touch
          </a>
          <a
            href="/Siyad.pdf"
            download="Mohammed_Siyad_MV_CV.pdf"
            className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-7 py-3.5 text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors duration-300"
          >
            <Download className="h-4 w-4" /> Download CV
          </a>
        </div>

        <div className="mt-24 flex items-center justify-between border-t border-border pt-6 text-xs uppercase tracking-widest text-foreground/50 reveal">
          <span>Scroll to explore</span>
          <span>01 / 06</span>
        </div>
      </div>
    </section>
  );
}
