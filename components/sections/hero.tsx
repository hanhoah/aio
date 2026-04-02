import React from "react"
import Link from "next/link"

const techStack = ["Next.js", "TypeScript", "Claude API", "n8n", "pgvector", "Vercel"]

const trustItems = [
  "KI-Systeme mit 17.000+ getesteten Nutzern",
  "Projekte für D-A-CH Unternehmen",
  "Kein Agentur-Overhead — direkt mit dem Entwickler",
]

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-[#080d1a] overflow-hidden">
      {/* Animated dot grid */}
      <div className="absolute inset-0 hero-dot-grid" />

      {/* Ambient glow orbs */}
      <div
        className="absolute top-1/4 right-1/3 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[120px] animate-pulse-slow"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 left-1/4 w-[400px] h-[400px] rounded-full bg-cyan-500/8 blur-[100px] animate-float"
        aria-hidden="true"
      />
      <div
        className="absolute top-0 right-0 w-[700px] h-[400px] rounded-full bg-blue-950/40 blur-[80px]"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 relative z-10 py-32 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16 items-center">

          {/* Left: Content */}
          <div>
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-medium animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Verfügbar für neue Projekte · Remote · Deutschland
            </div>

            {/* Main headline */}
            <h1 className="font-display text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.05] mb-6 animate-slide-up">
              <span className="text-white">KI-Lösungen, die Ihre</span>
              <br />
              <span className="text-white">Prozesse wirklich</span>
              <br />
              <span className="hero-gradient-text">automatisieren.</span>
            </h1>

            {/* Sub headline */}
            <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-xl animate-slide-up-delay">
              Ich baue{" "}
              <span className="text-slate-200 font-semibold">Custom AI Agents, Chatbots und Automatisierungen</span>{" "}
              für mittelständische Unternehmen —{" "}
              <span className="text-slate-200 font-semibold">
                <span className="text-cyan-400">Han Hoa Huynh</span>, KI-Entwickler & Berater.
              </span>
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10 animate-slide-up-delay-2">
              <Link
                href="/#kontakt"
                className="btn-glow inline-flex items-center justify-center px-8 py-4 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-base transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                Kostenlose Erstberatung
              </Link>
              <Link
                href="/#leistungen"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-slate-700 hover:border-blue-500/60 text-slate-300 hover:text-white font-semibold text-base transition-all duration-200 hover:bg-white/5 cursor-pointer"
              >
                Meine Leistungen ansehen
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-col gap-2 mb-10 animate-fade-in-delay">
              {trustItems.map((item) => (
                <div key={item} className="flex items-center gap-2 text-slate-400 text-sm">
                  <svg className="w-4 h-4 text-cyan-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Tech stack badges */}
            <div className="flex flex-wrap gap-2 items-center animate-fade-in-delay">
              <span className="text-slate-500 text-sm mr-1">Stack:</span>
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md bg-slate-800/60 border border-slate-700/50 text-slate-400 text-xs font-mono hover:border-blue-500/40 hover:text-slate-300 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right: KI-Visual */}
          <div className="hidden lg:flex items-center justify-center animate-fade-in">
            <div className="relative w-72 h-72">
              <div className="absolute inset-0 rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-950/50 to-slate-900/70 backdrop-blur-sm overflow-hidden shadow-[0_0_80px_rgba(59,130,246,0.12)]">

                <div
                  className="absolute inset-6 rounded-xl border border-blue-500/25 animate-spin-slow"
                  style={{ borderTopColor: "rgba(6,182,212,0.5)" }}
                />
                <div
                  className="absolute inset-12 rounded-xl border border-cyan-500/20 animate-spin-reverse"
                  style={{ borderBottomColor: "rgba(59,130,246,0.5)" }}
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 blur-md animate-pulse-slow" />
                    <div className="absolute inset-2 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                      <span className="text-white font-bold text-xl font-mono tracking-tight">AI</span>
                    </div>
                  </div>
                </div>

                <div className="absolute top-4 left-6 w-2 h-2 rounded-full bg-blue-400/70 animate-pulse" />
                <div className="absolute top-8 right-8 w-1.5 h-1.5 rounded-full bg-cyan-400/70 animate-pulse" style={{ animationDelay: "500ms" }} />
                <div className="absolute bottom-12 left-8 w-2 h-2 rounded-full bg-blue-300/60 animate-pulse" style={{ animationDelay: "1000ms" }} />
                <div className="absolute bottom-20 right-6 w-1 h-1 rounded-full bg-cyan-300/80 animate-pulse" style={{ animationDelay: "1500ms" }} />

                <div className="absolute bottom-0 left-0 right-0 bg-slate-900/95 border-t border-blue-500/20 px-4 py-3">
                  <p className="font-mono text-[11px] text-slate-400 leading-relaxed">
                    <span className="text-blue-400">const</span>{" "}
                    <span className="text-white">result</span>
                    {" = "}
                    <span className="text-cyan-400">await</span>{" "}
                    <span className="text-green-400">agent</span>
                    <span className="text-white">.automate(</span>
                    <span className="text-orange-300">process</span>
                    <span className="text-white">);</span>
                  </p>
                </div>
              </div>

              <div className="absolute -inset-4 rounded-3xl bg-blue-600/5 blur-xl -z-10" />
            </div>
          </div>
        </div>
      </div>

      {/* Seamless transition */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  )
}

export default Hero
