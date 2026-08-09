const items = [
  {
    year: "2023 — Now",
    role: "Full Stack Developer",
    company: "Wizzo Technologies",
    copy: "Design and develop responsive, high-performance web applications using the MERN stack. Implement real-time API integrations, robust user authentication flows, and state management solutions. Collaborate closely with design and product teams.",
  },
  {
    year: "2024",
    role: "Freelance Developer",
    company: "Independent",
    copy: "Delivered web apps and dashboards for early-stage teams. Focus on performance, accessibility, and shipping fast without cutting corners.",
  },
  {
    year: "2023",
    role: "Learning in public",
    company: "Self-directed",
    copy: "Deep dive into modern JavaScript, TypeScript, and the MERN ecosystem. Built and released a handful of projects that became my portfolio's foundation.",
  },
];

export default function Experience() {
  return (
    <section className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40">
        <p className="text-xs uppercase tracking-[0.3em] text-primary reveal">04 — Journey</p>
        <h2 className="mt-6 max-w-3xl font-display text-5xl leading-[0.95] md:text-7xl reveal">
          A short timeline.
        </h2>

        <ol className="mt-16 space-y-12">
          {items.map((it, i) => (
            <li key={i} className="grid gap-4 md:grid-cols-12 md:gap-10 reveal">
              <div className="md:col-span-3">
                <span className="font-display text-2xl text-primary">{it.year}</span>
              </div>
              <div className="md:col-span-9 border-t border-border pt-4">
                <h3 className="font-display text-3xl md:text-4xl">{it.role}</h3>
                <p className="mt-1 text-sm uppercase tracking-widest text-foreground/60">
                  {it.company}
                </p>
                <p className="mt-4 max-w-2xl leading-relaxed text-foreground/80">
                  {it.copy}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
