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
            <ul className="mt-6 space-y-2 text-foreground/80">
              {items.map((s) => (
                <li key={s} className="flex items-center gap-2 text-sm">
                  <span className="h-1 w-1 rounded-full bg-primary" /> {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
