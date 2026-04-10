import React from "react"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Cpu, Zap } from "lucide-react"

const stats = [
  { value: "17.000+", label: "Community-Nutzer auf KI-System" },
  { value: "4 Jahre", label: "Aktive KI-Entwicklung" },
  { value: "100%", label: "Remote & direkt" },
]

const highlights = [
  { icon: MapPin, text: "Kein Agentur-Overhead — Sie sprechen immer direkt mit mir" },
  { icon: Cpu, text: "Claude API, OpenAI, n8n und pgvector im täglichen Produktiveinsatz" },
  { icon: Zap, text: "KI-beschleunigt: Was früher 3 Monate dauerte, liefere ich in 4–8 Wochen" },
]

const About = () => {
  return (
    <section id="ueber-mich" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Portrait */}
          <div className="relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-[360px] lg:max-w-none">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-100 to-cyan-50 -rotate-2 scale-[1.02]" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rotate-1" />

              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-gradient-to-br from-slate-800 to-blue-950 border border-blue-200/50">
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-blue-950">
                  <div className="w-28 h-28 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center mb-5 shadow-lg shadow-blue-500/30">
                    <span className="text-white font-display font-bold text-4xl">HH</span>
                  </div>
                  <p className="text-slate-400 text-sm font-mono tracking-wider">Han Hoa Huynh</p>
                  <p className="text-slate-500 text-xs mt-1">KI-Entwickler & Berater</p>
                </div>
                <Image
                  src="/images/han-portrait.jpg"
                  alt="Han Hoa Huynh — KI-Entwickler & Berater"
                  fill
                  className="object-cover object-top"
                  style={{ zIndex: 1 }}
                />
              </div>

              <div className="absolute -bottom-4 -right-4 lg:-right-6 bg-white rounded-xl shadow-lg border border-blue-100 px-4 py-3 z-10">
                <p className="text-xs text-slate-500 font-medium">aio steht für</p>
                <p className="text-sm font-bold text-blue-600 font-display">AI Optimization</p>
              </div>
            </div>
          </div>

          {/* Story */}
          <div className="order-1 lg:order-2">
            <div className="mb-3 text-sm font-mono text-blue-600 tracking-wider uppercase">
              Über mich
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-slate-900 leading-tight">
              Wer steckt hinter aio?
            </h2>

            <div className="space-y-4 text-slate-600 text-base leading-relaxed mb-8">
              <p>
                Ich habe jahrelang gesehen, wie Unternehmen tausende Euro für KI-Projekte ausgaben, die{" "}
                <strong className="text-slate-800">nie fertig wurden</strong> — weil Agenturen über-engineerten,
                Freelancer verschwanden oder die Technologie nicht zum Problem passte.
              </p>
              <p>
                2022 baute ich meinen ersten RAG-Bot — für eine Community mit{" "}
                <strong className="text-slate-800">17.000 Mitgliedern</strong>. Er funktioniert heute noch.
                Seitdem ist KI nicht mehr Experiment, sondern mein tägliches Werkzeug: Claude API, n8n,
                pgvector, Next.js — im echten Produktiveinsatz.
              </p>
              <p>
                <strong className="text-slate-800">Ich arbeite alleine.</strong> Das bedeutet: kein Overhead,
                kein Telefonspiel zwischen Account-Manager und Entwickler, kein 3-monatiges Pflichtenheft.
                Sie sprechen direkt mit der Person, die Ihre Lösung baut.
              </p>
            </div>

            <ul className="space-y-3 mb-8">
              {highlights.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3 text-slate-700">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
                    <Icon size={15} className="text-blue-600" />
                  </div>
                  <span className="text-sm">{text}</span>
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-3 gap-3 mb-8">
              {stats.map(({ value, label }) => (
                <div key={label} className="text-center p-4 rounded-xl bg-blue-50 border border-blue-100 hover:border-blue-200 transition-colors">
                  <div className="text-xl font-bold text-blue-600 font-display leading-tight">{value}</div>
                  <div className="text-xs text-slate-600 mt-1 leading-tight">{label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/#kontakt"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                Sprechen wir über Ihr Projekt →
              </Link>
              <a
                href="https://www.linkedin.com/in/han-hoa-huynh/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-200 hover:border-blue-300 bg-white hover:bg-blue-50 text-slate-700 hover:text-blue-600 font-semibold transition-all duration-200 hover:-translate-y-0.5"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
