"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Mail } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const [time, setTime] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setTime(
        d.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
          timeZone: "Asia/Kolkata",
        })
      );
    };
    tick();
    const id = setInterval(tick, 1000 * 30);
    return () => clearInterval(id);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setStatus("sending");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-48">
        <p className="text-xs uppercase tracking-[0.3em] opacity-70 reveal">05 — Contact</p>
        <h2 className="mt-6 font-display text-6xl leading-[0.9] md:text-[10rem] reveal">
          Let&apos;s build
          <br />
          <span className="italic">something good.</span>
        </h2>

        <div className="mt-16 grid gap-12 md:grid-cols-12 reveal">
          {/* Left Column: Info & Metadata */}
          <div className="md:col-span-5 flex flex-col justify-between gap-12">
            <div>
              <a
                href="mailto:mohdsiyadmv@gmail.com"
                className="group inline-flex items-center gap-4 font-display text-3xl md:text-5xl underline-sweep"
              >
                mohdsiyadmv@gmail.com
                <ArrowUpRight className="h-8 w-8 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  { icon: GithubIcon, label: "GitHub", href: "https://github.com/mvsiyad" },
                  { icon: LinkedinIcon, label: "LinkedIn", href: "https://linkedin.com/in/siyad-mv" },
                  { icon: Mail, label: "Email", href: "mailto:mohdsiyadmv@gmail.com" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-5 py-2.5 text-sm transition-all duration-300 hover:bg-primary-foreground hover:text-primary"
                  >
                    <s.icon className="h-4 w-4" />
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            <dl className="grid grid-cols-2 gap-8 text-sm border-t border-primary-foreground/20 pt-8">
              <div>
                <dt className="opacity-60 uppercase tracking-widest text-xs">Local time</dt>
                <dd className="mt-2 font-display text-2xl">{time || "—"} IST</dd>
              </div>
              <div>
                <dt className="opacity-60 uppercase tracking-widest text-xs">Response</dt>
                <dd className="mt-2 font-display text-2xl">≤ 24 hrs</dd>
              </div>
              <div>
                <dt className="opacity-60 uppercase tracking-widest text-xs">Status</dt>
                <dd className="mt-2 font-display text-2xl">Available</dd>
              </div>
              <div>
                <dt className="opacity-60 uppercase tracking-widest text-xs">Based in</dt>
                <dd className="mt-2 font-display text-2xl">India</dd>
              </div>
            </dl>
          </div>

          {/* Right Column: Contact Form */}
          <div className="md:col-span-6 md:col-start-7 bg-primary-foreground/5 rounded-2xl border border-primary-foreground/10 p-8 md:p-10 backdrop-blur-sm">
            {status === "success" ? (
              <div className="h-full flex flex-col justify-center items-center text-center py-12">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-primary-foreground text-primary text-2xl font-bold animate-bounce">
                  ✓
                </span>
                <h3 className="mt-6 font-display text-3xl">Message Sent!</h3>
                <p className="mt-2 text-primary-foreground/80 max-w-xs">
                  Thanks for reaching out, Mohammed Siyad will get back to you shortly.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-8 text-sm underline underline-offset-4 opacity-75 hover:opacity-100"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-widest opacity-70">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    disabled={status === "sending"}
                    className="mt-2 w-full bg-primary-foreground/5 border border-primary-foreground/20 rounded-lg px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/45 focus:outline-none focus:border-primary-foreground focus:ring-1 focus:ring-primary-foreground transition-all duration-300 disabled:opacity-50"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-widest opacity-70">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    disabled={status === "sending"}
                    className="mt-2 w-full bg-primary-foreground/5 border border-primary-foreground/20 rounded-lg px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/45 focus:outline-none focus:border-primary-foreground focus:ring-1 focus:ring-primary-foreground transition-all duration-300 disabled:opacity-50"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-widest opacity-70">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hey, let's talk about building..."
                    disabled={status === "sending"}
                    className="mt-2 w-full bg-primary-foreground/5 border border-primary-foreground/20 rounded-lg px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/45 focus:outline-none focus:border-primary-foreground focus:ring-1 focus:ring-primary-foreground transition-all duration-300 resize-none disabled:opacity-50"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full flex items-center justify-center gap-2 rounded-full bg-primary-foreground px-6 py-4 text-sm font-medium text-primary hover:bg-cream transition-all duration-300 cursor-pointer disabled:opacity-50"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
