export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="sticky top-32">
            <p className="text-xs uppercase tracking-[0.3em] text-primary reveal">01 — About</p>
            <h2 className="mt-6 font-display text-5xl leading-[0.95] md:text-6xl reveal">
              A developer with a taste for craft.
            </h2>
          </div>
        </div>
        <div className="md:col-span-7 md:col-start-6 space-y-6 text-lg leading-relaxed text-foreground/80">
          <p className="reveal">
            I&apos;m Siyad — a full stack developer currently building production software at a
            product company, where I&apos;ve spent the last year shipping features end to end
            across the MERN stack.
          </p>
          <p className="reveal">
            My work sits at the intersection of engineering and design. I care about the
            architecture behind a feature just as much as the microinteractions on top of
            it. Every project I take on gets the same thing: clean code, considered
            interfaces, and animations that feel earned — never decorative.
          </p>
          <p className="reveal">
            Outside of client work I explore side projects, contribute to open source, and
            keep a running list of ideas I hope to build one day.
          </p>

          <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-border pt-10 reveal">
            {[
              ["1+", "Years shipping"],
              ["20+", "Projects delivered"],
              ["MERN", "Primary stack"],
              ["24h", "Avg. reply time"],
            ].map(([k, v]) => (
              <div key={v}>
                <dt className="font-display text-4xl text-primary">{k}</dt>
                <dd className="mt-1 text-sm uppercase tracking-widest text-foreground/60">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
