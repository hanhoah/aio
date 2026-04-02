import React from "react"
import Link from "next/link"
import { Github, Linkedin } from "lucide-react"

const stats = [
  { value: "10+", label: "Jahre Erfahrung" },
  { value: "18k+", label: "Telegram-Community" },
  { value: "48h", label: "Konzept-Garantie" },
  { value: "5", label: "KI-Services" },
]

const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Claude API",
  "OpenAI",
  "n8n",
  "Vercel",
  "PostgreSQL",
  "Tailwind CSS",
  "Node.js",
]

const Trust = () => {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-3xl mx-auto">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-white mb-1">
                {value}
              </div>
              <div className="text-sm text-slate-400">{label}</div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 mb-12" />

        {/* Social links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link
            href="https://www.linkedin.com/in/han-hoa-huynh/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-[#0A66C2]/20 border border-[#0A66C2]/40 text-[#5fa8d3] hover:bg-[#0A66C2]/30 hover:text-white transition-all duration-200 font-medium text-sm"
          >
            <Linkedin size={18} />
            LinkedIn: Han Hoa Huynh
          </Link>
          <Link
            href="https://github.com/hanhoah"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white transition-all duration-200 font-medium text-sm"
          >
            <Github size={18} />
            GitHub: hanhoah
          </Link>
        </div>

        {/* Tech stack */}
        <div className="text-center">
          <p className="text-slate-500 text-sm mb-4 font-mono tracking-wider uppercase">
            Tech-Stack
          </p>
          <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 text-xs font-mono hover:border-blue-500/50 hover:text-slate-200 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Trust
