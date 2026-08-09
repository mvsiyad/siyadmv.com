export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-8 md:px-10 text-xs uppercase tracking-widest text-foreground/60">
        <span>© {new Date().getFullYear()} Mohammed Siyad MV</span>
        <span>Built with care · MERN</span>
        <a href="#top" className="underline-sweep hover:text-primary">Back to top ↑</a>
      </div>
    </footer>
  );
}
