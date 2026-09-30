"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Mail, User, MessageSquare, ArrowRight, Check } from "lucide-react";

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
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rX = Math.max(-7, Math.min(7, (y / (rect.height / 2)) * -7));
    const rY = Math.max(-7, Math.min(7, (x / (rect.width / 2)) * 7));
    setRotate({ x: rX, y: rY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setIsHovered(false);
  };

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
      <div className="mx-auto max-w-7xl px-6 pt-12 pb-14 md:pt-16 md:pb-20 md:px-10">
        <p className="text-xs uppercase tracking-[0.3em] opacity-70 reveal">05 — Contact</p>
        <h2 className="mt-3 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight reveal">
          Let&apos;s build
          <br />
          <span className="italic">something good.</span>
        </h2>

        <div className="mt-8 md:mt-12 grid gap-10 lg:grid-cols-12 lg:gap-14 items-start reveal">
          {/* Left Column: Info & Metadata */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div>
              <a
                href="mailto:mohdsiyadmv@gmail.com"
                className="group inline-flex items-center gap-3 font-display text-2xl sm:text-3xl md:text-4xl leading-tight underline-sweep break-all sm:break-normal"
              >
                mohdsiyadmv@gmail.com
                <ArrowUpRight className="h-6 w-6 sm:h-7 sm:w-7 shrink-0 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
              <div className="mt-5 flex flex-wrap gap-2.5">
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
                    className="group inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-4 py-2 text-xs sm:text-sm transition-all duration-300 hover:bg-primary-foreground hover:text-primary cursor-pointer"
                  >
                    <s.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            <dl className="grid grid-cols-2 gap-5 sm:gap-6 text-sm border-t border-primary-foreground/20 pt-6">
              <div>
                <dt className="opacity-60 uppercase tracking-widest text-xs">Local time</dt>
                <dd className="mt-1.5 font-display text-xl sm:text-2xl">{time || "—"} IST</dd>
              </div>
              <div>
                <dt className="opacity-60 uppercase tracking-widest text-xs">Response</dt>
                <dd className="mt-1.5 font-display text-xl sm:text-2xl">≤ 24 hrs</dd>
              </div>
              <div>
                <dt className="opacity-60 uppercase tracking-widest text-xs">Status</dt>
                <dd className="mt-1.5 flex items-center gap-2 font-display text-xl sm:text-2xl">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  Available
                </dd>
              </div>
              <div>
                <dt className="opacity-60 uppercase tracking-widest text-xs">Based in</dt>
                <dd className="mt-1.5 font-display text-xl sm:text-2xl">India</dd>
              </div>
            </dl>
          </div>

          {/* Right Column: Contact Form Styled Card */}
          <div 
            className="lg:col-span-7 xl:col-span-6 xl:col-start-7 relative group"
            style={{ perspective: 1200 }}
          >
            <div
              onMouseEnter={() => setIsHovered(true)}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
                transition: isHovered ? "transform 100ms ease-out" : "transform 500ms ease-out",
                transformStyle: "preserve-3d",
              }}
              className="relative"
            >
              {/* Outer card glow effect */}
              <div 
                className="absolute -inset-[1px] rounded-2xl opacity-40 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none"
                style={{
                  boxShadow: "0 0 25px 3px rgba(255, 251, 212, 0.08)",
                }}
              />

              {/* Traveling light beam effect */}
              <div className="absolute -inset-[1px] rounded-2xl overflow-hidden pointer-events-none z-10">
                {/* Top light beam */}
                <div 
                  className="absolute top-0 h-[2.5px] w-[50%] bg-gradient-to-r from-transparent via-primary-foreground to-transparent opacity-75 blur-[1px]"
                  style={{ animation: "beam-top 2.8s ease-in-out infinite" }}
                />
                {/* Right light beam */}
                <div 
                  className="absolute right-0 w-[2.5px] h-[50%] bg-gradient-to-b from-transparent via-primary-foreground to-transparent opacity-75 blur-[1px]"
                  style={{ animation: "beam-right 2.8s ease-in-out infinite 0.7s" }}
                />
                {/* Bottom light beam */}
                <div 
                  className="absolute bottom-0 h-[2.5px] w-[50%] bg-gradient-to-r from-transparent via-primary-foreground to-transparent opacity-75 blur-[1px]"
                  style={{ animation: "beam-bottom 2.8s ease-in-out infinite 1.4s" }}
                />
                {/* Left light beam */}
                <div 
                  className="absolute left-0 w-[2.5px] h-[50%] bg-gradient-to-b from-transparent via-primary-foreground to-transparent opacity-75 blur-[1px]"
                  style={{ animation: "beam-left 2.8s ease-in-out infinite 2.1s" }}
                />

                {/* Subtle corner glow spots */}
                <div className="absolute top-0 left-0 h-2 w-2 rounded-full bg-primary-foreground/50 blur-[1.5px]" style={{ animation: "card-corner-pulse 2s infinite" }} />
                <div className="absolute top-0 right-0 h-2 w-2 rounded-full bg-primary-foreground/70 blur-[1.5px]" style={{ animation: "card-corner-pulse 2.4s infinite 0.5s" }} />
                <div className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-primary-foreground/70 blur-[1.5px]" style={{ animation: "card-corner-pulse 2.2s infinite 1s" }} />
                <div className="absolute bottom-0 left-0 h-2 w-2 rounded-full bg-primary-foreground/50 blur-[1.5px]" style={{ animation: "card-corner-pulse 2.3s infinite 1.5s" }} />
              </div>

              {/* Card border gradient outline */}
              <div className="absolute -inset-[0.5px] rounded-2xl bg-gradient-to-r from-primary-foreground/10 via-primary-foreground/25 to-primary-foreground/10 opacity-30 group-hover:opacity-75 transition-opacity duration-500 pointer-events-none" />

              {/* Glass card background */}
              <div className="relative bg-black/35 backdrop-blur-xl rounded-2xl p-6 sm:p-7 md:p-8 border border-primary-foreground/15 shadow-2xl overflow-hidden">
                {/* Subtle card inner grid pattern */}
                <div 
                  className="absolute inset-0 opacity-[0.04] pointer-events-none" 
                  style={{
                    backgroundImage: `linear-gradient(135deg, white 0.5px, transparent 0.5px), linear-gradient(45deg, white 0.5px, transparent 0.5px)`,
                    backgroundSize: "28px 28px",
                  }}
                />

                {status === "success" ? (
                  <div className="relative z-10 h-full flex flex-col justify-center items-center text-center py-10">
                    <span className="grid h-14 w-14 place-items-center rounded-full bg-primary-foreground text-primary text-2xl font-bold animate-bounce shadow-lg">
                      <Check className="h-7 w-7 stroke-[3]" />
                    </span>
                    <h3 className="mt-5 font-display text-2xl sm:text-3xl text-primary-foreground">Message Sent!</h3>
                    <p className="mt-2 text-primary-foreground/80 max-w-xs text-sm">
                      Thanks for reaching out, Mohammed Siyad will get back to you shortly.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="mt-6 text-sm underline underline-offset-4 opacity-75 hover:opacity-100 cursor-pointer text-primary-foreground transition-opacity"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="relative z-10 space-y-4 sm:space-y-5">
                    {/* Name input */}
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="block text-xs uppercase tracking-widest text-primary-foreground/75 font-medium">
                        Your Name
                      </label>
                      <div className="relative group/input">
                        {/* Outer hover gradient border */}
                        <div className="absolute -inset-[0.5px] bg-gradient-to-r from-primary-foreground/20 via-primary-foreground/10 to-primary-foreground/20 rounded-xl opacity-0 group-hover/input:opacity-100 transition-all duration-300 pointer-events-none" />
                        
                        <div className="relative flex items-center overflow-hidden rounded-xl bg-primary-foreground/[0.06] border border-primary-foreground/15 transition-all duration-300 focus-within:border-primary-foreground/40 focus-within:bg-primary-foreground/[0.1] focus-within:ring-2 focus-within:ring-primary-foreground/20">
                          <User className={`absolute left-3.5 w-4 h-4 transition-all duration-300 ${focusedInput === "name" ? "text-primary-foreground" : "text-primary-foreground/40"}`} />
                          <input
                            type="text"
                            id="name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            onFocus={() => setFocusedInput("name")}
                            onBlur={() => setFocusedInput(null)}
                            placeholder="John Doe"
                            disabled={status === "sending"}
                            className="w-full bg-transparent pl-10 pr-4 py-3 text-sm sm:text-base text-primary-foreground placeholder:text-primary-foreground/35 outline-none disabled:opacity-50"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Email input */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="block text-xs uppercase tracking-widest text-primary-foreground/75 font-medium">
                        Email Address
                      </label>
                      <div className="relative group/input">
                        <div className="absolute -inset-[0.5px] bg-gradient-to-r from-primary-foreground/20 via-primary-foreground/10 to-primary-foreground/20 rounded-xl opacity-0 group-hover/input:opacity-100 transition-all duration-300 pointer-events-none" />
                        
                        <div className="relative flex items-center overflow-hidden rounded-xl bg-primary-foreground/[0.06] border border-primary-foreground/15 transition-all duration-300 focus-within:border-primary-foreground/40 focus-within:bg-primary-foreground/[0.1] focus-within:ring-2 focus-within:ring-primary-foreground/20">
                          <Mail className={`absolute left-3.5 w-4 h-4 transition-all duration-300 ${focusedInput === "email" ? "text-primary-foreground" : "text-primary-foreground/40"}`} />
                          <input
                            type="email"
                            id="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            onFocus={() => setFocusedInput("email")}
                            onBlur={() => setFocusedInput(null)}
                            placeholder="john@example.com"
                            disabled={status === "sending"}
                            className="w-full bg-transparent pl-10 pr-4 py-3 text-sm sm:text-base text-primary-foreground placeholder:text-primary-foreground/35 outline-none disabled:opacity-50"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Message textarea */}
                    <div className="space-y-1.5">
                      <label htmlFor="message" className="block text-xs uppercase tracking-widest text-primary-foreground/75 font-medium">
                        Message
                      </label>
                      <div className="relative group/input">
                        <div className="absolute -inset-[0.5px] bg-gradient-to-r from-primary-foreground/20 via-primary-foreground/10 to-primary-foreground/20 rounded-xl opacity-0 group-hover/input:opacity-100 transition-all duration-300 pointer-events-none" />
                        
                        <div className="relative flex items-start overflow-hidden rounded-xl bg-primary-foreground/[0.06] border border-primary-foreground/15 transition-all duration-300 focus-within:border-primary-foreground/40 focus-within:bg-primary-foreground/[0.1] focus-within:ring-2 focus-within:ring-primary-foreground/20">
                          <MessageSquare className={`absolute left-3.5 top-3.5 w-4 h-4 transition-all duration-300 ${focusedInput === "message" ? "text-primary-foreground" : "text-primary-foreground/40"}`} />
                          <textarea
                            id="message"
                            required
                            rows={3}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            onFocus={() => setFocusedInput("message")}
                            onBlur={() => setFocusedInput(null)}
                            placeholder="Hey, let's talk about building..."
                            disabled={status === "sending"}
                            className="w-full bg-transparent pl-10 pr-4 py-3 text-sm sm:text-base text-primary-foreground placeholder:text-primary-foreground/35 outline-none resize-none disabled:opacity-50"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Submit button with glow and shimmer */}
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full relative group/button mt-2 cursor-pointer disabled:opacity-50"
                    >
                      {/* Button glow effect */}
                      <div className="absolute inset-0 bg-primary-foreground/20 rounded-full blur-md opacity-0 group-hover/button:opacity-80 transition-opacity duration-300 pointer-events-none" />
                      
                      <div className="relative overflow-hidden bg-primary-foreground text-primary font-semibold h-11 sm:h-12 rounded-full transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99]">
                        {/* Button shimmer beam */}
                        <div 
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none"
                          style={{ animation: "btn-shimmer 2.4s ease-in-out infinite" }}
                        />
                        
                        {status === "sending" ? (
                          <div className="flex items-center justify-center gap-2">
                            <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                            <span className="text-sm font-semibold">Sending...</span>
                          </div>
                        ) : (
                          <span className="flex items-center justify-center gap-1.5 text-sm font-semibold">
                            Send Message
                            <ArrowRight className="w-4 h-4 group-hover/button:translate-x-1 transition-transform duration-300" />
                          </span>
                        )}
                      </div>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
