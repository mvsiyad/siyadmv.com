"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    n: "01",
    title: "BookiFY",
    tag: "Full Stack · AI",
    year: "2025",
    desc: "Transform your books into interactive AI conversations. Upload PDFs or documents and chat with them using voice commands.",
    stack: ["Next.js", "TypeScript", "AI Integration"],
    link: "https://github.com/mvsiyad/BookiFY",
  },
  {
    n: "02",
    title: "RhythmTracker",
    tag: "Full Stack · MERN",
    year: "2024",
    desc: "A premium behavioral tracking platform allowing users to monitor rhythmic activities, analyze personal habits, and view visual analytics.",
    stack: ["React", "Node.js", "Express"],
    link: "https://github.com/mvsiyad/RhythmTracker",
  },
  {
    n: "03",
    title: "Wheel-Deal",
    tag: "Frontend App",
    year: "2024",
    desc: "A dynamic automotive trading and leasing portal showcasing product listings, customized search parameters, and an elegant interface.",
    stack: ["React.js", "Tailwind CSS", "Context API"],
    link: "https://github.com/mvsiyad/Wheel-Deal",
  },
  {
    n: "04",
    title: "Memoir",
    tag: "Frontend App",
    year: "2023",
    desc: "An aesthetic personal journal and blogging application designed for writing, timeline-tracking, and archiving precious life memories.",
    stack: ["React.js", "CSS Modules", "HTML5"],
    link: "https://github.com/mvsiyad/Memoir",
  },
];

function ProjectRow({ p }: { p: (typeof projects)[number] }) {
  const [hover, setHover] = useState(false);

  return (
    <li
      className="group relative reveal"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <a
        href={p.link}
        target="_blank"
        rel="noopener noreferrer"
        className="grid grid-cols-12 items-center gap-6 py-8 md:py-10 transition-colors duration-500 hover:text-primary-foreground relative"
      >
        {/* Red slide-in bg */}
        <span className="absolute inset-0 -z-10 origin-bottom scale-y-0 bg-primary transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:origin-top group-hover:scale-y-100" />

        <span className="col-span-2 md:col-span-1 font-display text-xl text-primary group-hover:text-primary-foreground/70 transition-colors duration-500">
          {p.n}
        </span>
        <div className="col-span-10 md:col-span-6">
          <h3 className="font-display text-3xl md:text-5xl tracking-tight">
            {p.title}
          </h3>
          <p className="mt-2 hidden text-sm text-foreground/60 group-hover:text-primary-foreground/80 md:block transition-colors duration-500">
            {p.desc}
          </p>
        </div>
        <div className="col-span-8 md:col-span-3 flex flex-wrap gap-2">
          {p.stack.slice(0, 3).map((s) => (
            <span
              key={s}
              className="rounded-full border border-current/30 px-3 py-1 text-xs opacity-70"
            >
              {s}
            </span>
          ))}
        </div>
        <div className="col-span-4 md:col-span-2 flex items-center justify-end gap-3">
          <span className="text-sm opacity-70">{p.year}</span>
          <ArrowUpRight
            className={`h-6 w-6 transition-transform duration-500 ${hover ? "rotate-45" : ""}`}
          />
        </div>
      </a>
    </li>
  );
}

export default function Projects() {
  return (
    <section id="work" className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary reveal">02 — Selected work</p>
            <h2 className="mt-6 font-display text-5xl leading-[0.95] md:text-7xl reveal">
              Recent projects.
            </h2>
          </div>
          <p className="max-w-sm text-foreground/70 reveal">
            A curated glimpse of what I&apos;ve been building — full stack products, tools, and
            experiments.
          </p>
        </div>

        <ul className="mt-20 divide-y divide-border border-y border-border">
          {projects.map((p) => (
            <ProjectRow key={p.n} p={p} />
          ))}
        </ul>
      </div>
    </section>
  );
}
