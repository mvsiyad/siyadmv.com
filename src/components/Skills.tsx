import React from "react";

const skillIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  React: () => (
    <svg className="h-4.5 w-4.5 text-primary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(30 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(90 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(150 12 12)" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  ),
  "Next.js": () => (
    <svg className="h-4.5 w-4.5 text-primary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
      <path d="M9 17L14.25 9.5H15M16 15V9" />
    </svg>
  ),
  TypeScript: () => (
    <svg className="h-4.5 w-4.5 text-primary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M16 8h-4v8m2-8h4" />
      <path d="M7 15c1-1 1-3 0-4s-2-1.5-2 0" />
    </svg>
  ),
  Tailwind: () => (
    <svg className="h-4.5 w-4.5 text-primary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M12 3a6 6 0 0 0-6 6c0 3.6 3.6 5.4 6 9.6 2.4-4.2 6-6 6-9.6a6 6 0 0 0-6-6Z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  ),
  "Framer Motion": () => (
    <svg className="h-4.5 w-4.5 text-primary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16L12 12 4 4Z" />
      <path d="M4 12h16L12 20 4 12Z" />
    </svg>
  ),
  Redux: () => (
    <svg className="h-4.5 w-4.5 text-primary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v20M2 12h20" />
    </svg>
  ),
  "Node.js": () => (
    <svg className="h-4.5 w-4.5 text-primary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L3.5 7v10L12 22l8.5-5V7L12 2z" />
      <path d="M12 22V12" />
      <path d="M3.5 7L12 12l8.5-5" />
    </svg>
  ),
  Express: () => (
    <svg className="h-4.5 w-4.5 text-primary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7 8h4v2H7v2h4v2H7v2h5" />
    </svg>
  ),
  REST: () => (
    <svg className="h-4.5 w-4.5 text-primary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  ),
  GraphQL: () => (
    <svg className="h-4.5 w-4.5 text-primary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5" />
      <circle cx="12" cy="12" r="3" />
      <line x1="12" y1="2" x2="12" y2="22" />
      <line x1="2" y1="8.5" x2="22" y2="15.5" />
      <line x1="2" y1="15.5" x2="22" y2="8.5" />
    </svg>
  ),
  WebSockets: () => (
    <svg className="h-4.5 w-4.5 text-primary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  ),
  Auth: () => (
    <svg className="h-4.5 w-4.5 text-primary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  ),
  MongoDB: () => (
    <svg className="h-4.5 w-4.5 text-primary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C12 2 7 9 7 13.5C7 16.5 9.24 19 12 19C14.76 19 17 16.5 17 13.5C17 9 12 2 12 2Z" />
      <path d="M12 2V22" />
    </svg>
  ),
  PostgreSQL: () => (
    <svg className="h-4.5 w-4.5 text-primary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M12 8v8M9 11h6" />
    </svg>
  ),
  Redis: () => (
    <svg className="h-4.5 w-4.5 text-primary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      <path d="M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6" />
    </svg>
  ),
  Mongoose: () => (
    <svg className="h-4.5 w-4.5 text-primary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.5" y1="10.5" x2="15.5" y2="6.5" />
      <line x1="8.5" y1="13.5" x2="15.5" y2="17.5" />
    </svg>
  ),
  Prisma: () => (
    <svg className="h-4.5 w-4.5 text-primary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 22 12 12 22 2 12" />
    </svg>
  ),
  Git: () => (
    <svg className="h-4.5 w-4.5 text-primary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="18" r="3" />
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M18 15V9a4 4 0 0 0-4-4H9" />
      <line x1="6" y1="9" x2="6" y2="15" />
    </svg>
  ),
  Docker: () => (
    <svg className="h-4.5 w-4.5 text-primary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="10" width="20" height="8" rx="2" />
      <line x1="6" y1="10" x2="6" y2="18" />
      <line x1="10" y1="10" x2="10" y2="18" />
      <line x1="14" y1="10" x2="14" y2="18" />
      <line x1="18" y1="10" x2="18" y2="18" />
    </svg>
  ),
  AWS: () => (
    <svg className="h-4.5 w-4.5 text-primary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.5 19A3.5 3.5 0 0 0 21 15.5c0-2.79-2.54-4.5-5-4.5-.42 0-.83.05-1.22.14A7 7 0 0 0 4 11.5c0 3.59 2.91 6.5 6.5 6.5" />
    </svg>
  ),
  Vercel: () => (
    <svg className="h-4.5 w-4.5 text-primary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 20h18L12 4z" />
    </svg>
  ),
  "CI/CD": () => (
    <svg className="h-4.5 w-4.5 text-primary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12a4 4 0 0 1 8 0 4 4 0 0 0 8 0" />
      <path d="M20 12a4 4 0 0 1-8 0 4 4 0 0 0-8 0" />
    </svg>
  ),
  Jest: () => (
    <svg className="h-4.5 w-4.5 text-primary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
};

const skills: Record<string, string[]> = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion", "Redux"],
  Backend: ["Node.js", "Express", "REST", "GraphQL", "WebSockets", "Auth"],
  Database: ["MongoDB", "PostgreSQL", "Redis", "Mongoose", "Prisma"],
  Tooling: ["Git", "Docker", "AWS", "Vercel", "CI/CD", "Jest"],
};

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40">
      <p className="text-xs uppercase tracking-[0.3em] text-primary reveal">03 — Toolbox</p>
      <h2 className="mt-6 max-w-3xl font-display text-5xl leading-[0.95] md:text-7xl reveal">
        Tools I reach for, daily.
      </h2>

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {Object.entries(skills).map(([group, items]) => (
          <div
            key={group}
            className="reveal rounded-2xl border border-border bg-card/60 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary hover:shadow-[0_20px_60px_-30px_rgba(169,14,2,0.5)]"
          >
            <h3 className="font-display text-2xl text-primary">{group}</h3>
            <ul className="mt-6 space-y-3.5 text-foreground/80">
              {items.map((s) => {
                const IconComponent = skillIcons[s];
                return (
                  <li key={s} className="flex items-center gap-3.5 text-sm font-medium">
                    {IconComponent ? <IconComponent /> : <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />}
                    <span>{s}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
