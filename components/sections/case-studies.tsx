import React from "react"
import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"

interface Project {
  title: string
  description: string
  tags: string[]
  status: string
  statusColor: "green" | "blue" | "cyan"
  isPlaceholder?: boolean
}

const projects: Project[] = [
  {
    title: "Asia-Zone Restaurant-Verzeichnis",
    description:
      "Restaurant-Verzeichnis mit KI-gestützter Lead-Generierung und automatisiertem Outreach für asiatische Gastronomie in Deutschland.",
    tags: ["Next.js", "TypeScript", "OpenClaw Scout", "PostgreSQL"],
    status: "In Entwicklung",
    statusColor: "blue",
  },
  {
    title: "Telegram Community Bot",
    description:
      "Automatisierter Community-Bot mit 18.000+ Mitgliedern. Generiert ~500€ passives Monatseinkommen durch smarte Automationen.",
    tags: ["Node.js", "Telegram API", "Automation"],
    status: "Aktiv & profitabel",
    statusColor: "green",
  },
  {
    title: "Dein Projekt hier",
    description:
      "Du hast eine Idee oder ein konkretes Problem? Lass uns darüber reden — das könnte das nächste Projekt sein.",
    tags: ["KI-Integration", "Webentwicklung", "Automation"],
    status: "Offen für Anfragen",
    statusColor: "cyan",
    isPlaceholder: true,
  },
]

const statusColors = {
  green: "bg-green-50 text-green-700 border-green-200",
  blue: "bg-blue-50 text-blue-700 border-blue-200",
  cyan: "bg-cyan-50 text-cyan-700 border-cyan-200",
}

const borderColors = {
  green: "border-t-green-400",
  blue: "border-t-blue-500",
  cyan: "border-t-cyan-500",
}

const CaseStudies = () => {
  return (
    <section id="projekte" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="mb-3 text-sm font-mono text-blue-600 tracking-wider uppercase">
            Referenzen & Projekte
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            KI in der Praxis
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Keine Theorie — echte Projekte, echte Ergebnisse. So sieht
            KI-Einsatz aus, der funktioniert.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`bg-white rounded-2xl border-2 border-slate-100 ${borderColors[project.statusColor]} border-t-4 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col ${project.isPlaceholder ? "border-dashed" : ""}`}
            >
              {/* Status */}
              <div className="mb-4">
                <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full border ${statusColors[project.statusColor]}`}>
                  {project.status}
                </span>
              </div>

              <h3 className="font-display text-lg font-bold text-slate-900 mb-3">
                {project.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-5 flex-1">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <Link
                href="/#kontakt"
                className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors ${
                  project.isPlaceholder
                    ? "text-cyan-600 hover:text-cyan-700"
                    : "text-blue-600 hover:text-blue-700"
                }`}
              >
                {project.isPlaceholder ? "Jetzt anfragen" : "Mehr erfahren"}
                <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseStudies
