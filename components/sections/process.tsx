import React from "react"
import { Search, Code2, BookOpen } from "lucide-react"

const colorMap = {
  blue: {
    border: "border-blue-200",
    bg: "bg-blue-50",
    icon: "text-blue-600 bg-blue-100",
    number: "text-blue-600",
  },
  indigo: {
    border: "border-indigo-200",
    bg: "bg-indigo-50",
    icon: "text-indigo-600 bg-indigo-100",
    number: "text-indigo-600",
  },
  cyan: {
    border: "border-cyan-200",
    bg: "bg-cyan-50",
    icon: "text-cyan-600 bg-cyan-100",
    number: "text-cyan-600",
  },
} as const

type StepColor = keyof typeof colorMap

interface Step {
  number: string
  icon: React.ElementType
  title: string
  duration: string
  description: string
  color: StepColor
}

const steps: Step[] = [
  {
    number: "01",
    icon: Search,
    title: "Analyse & Roadmap",
    duration: "2–3 Tage",
    description:
      "Ich analysiere Ihre bestehenden Prozesse und zeige Ihnen genau, wo KI den größten Hebel hat — mit konkreten Zahlen und realistischer Aufwandsschätzung.",
    color: "blue",
  },
  {
    number: "02",
    icon: Code2,
    title: "Entwicklung & Integration",
    duration: "2–6 Wochen",
    description:
      "Ich baue die Lösung — iterativ, mit wöchentlichen Updates. Keine Überraschungen am Ende. Sie sehen den Fortschritt, bevor die letzte Rechnung kommt.",
    color: "indigo",
  },
  {
    number: "03",
    icon: BookOpen,
    title: "Übergabe & Begleitung",
    duration: "laufend optional",
    description:
      "Vollständige Dokumentation, Training Ihres Teams und optionale monatliche Weiterentwicklung — damit die Lösung langfristig Wert schafft.",
    color: "cyan",
  },
]

const Process = () => {
  return (
    <section id="prozess" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="mb-3 text-sm font-mono text-blue-600 tracking-wider uppercase">
            So arbeite ich
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Vom Erstgespräch zur fertigen Lösung
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Drei klare Schritte — transparent, iterativ, ohne Überraschungen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step) => {
            const c = colorMap[step.color]
            const Icon = step.icon
            return (
              <div key={step.number} className="relative">
                <div className={`rounded-2xl border ${c.border} ${c.bg} p-8 h-full hover:shadow-md transition-shadow`}>
                  <div className="flex items-center gap-4 mb-2">
                    <div className={`w-12 h-12 rounded-xl ${c.icon} flex items-center justify-center flex-shrink-0`}>
                      <Icon size={22} />
                    </div>
                    <span className={`text-3xl font-display font-bold ${c.number} opacity-40`}>
                      {step.number}
                    </span>
                  </div>

                  <div className="mb-4">
                    <span className="text-xs font-mono text-slate-400 bg-white border border-slate-200 px-2 py-1 rounded-md">
                      {step.duration}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Process
