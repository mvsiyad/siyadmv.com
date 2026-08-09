const words = ["React", "Node.js", "MongoDB", "Express", "TypeScript", "Next.js", "GraphQL", "AWS", "Docker", "PostgreSQL"];
const row = [...words, ...words];

export default function Marquee() {
  return (
    <div className="mt-28 overflow-hidden border-y border-border bg-primary text-primary-foreground py-6">
      <div className="flex whitespace-nowrap animate-marquee">
        {row.map((w, i) => (
          <span key={i} className="mx-8 font-display text-3xl md:text-4xl italic tracking-tight">
            {w} <span className="mx-4 opacity-50">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
