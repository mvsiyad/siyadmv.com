export default function SiteBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-80" />
      <div className="absolute inset-0 spotlight" />
      <div className="absolute inset-0 parallax-slow">
        <div
          className="absolute -top-40 -left-32 h-[60vw] w-[60vw] rounded-full blur-3xl aurora-blob"
          style={{ background: "radial-gradient(circle at center, var(--aurora-1), transparent 60%)" }}
        />
        <div
          className="absolute top-1/3 -right-40 h-[55vw] w-[55vw] rounded-full blur-3xl aurora-blob"
          style={{ background: "radial-gradient(circle at center, var(--aurora-1), transparent 60%)", animationDelay: "-6s" }}
        />
      </div>
      <div className="absolute inset-0 parallax-fast">
        <div
          className="absolute bottom-0 left-1/3 h-[50vw] w-[50vw] rounded-full blur-3xl aurora-blob"
          style={{ background: "radial-gradient(circle at center, var(--aurora-2), transparent 65%)", animationDelay: "-12s" }}
        />
      </div>
      <div className="absolute inset-0 noise" />
    </div>
  );
}
