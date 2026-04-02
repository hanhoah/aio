import React from "react"

const stats = [
  {
    value: "17.000+",
    label: "Community-Nutzer",
    sub: "auf produktivem KI-System",
  },
  {
    value: "4 Jahre",
    label: "KI-Entwicklung",
    sub: "im echten Produktiveinsatz",
  },
  {
    value: "50%+",
    label: "Zeitersparnis",
    sub: "für automatisierte Prozesse",
  },
  {
    value: "4–8 Wo.",
    label: "Time-to-Value",
    sub: "statt 3–6 Monate Agentur",
  },
]

const Stats = () => {
  return (
    <section className="py-20 bg-[#080d1a] relative overflow-hidden">
      <div className="absolute inset-0 hero-dot-grid opacity-40" aria-hidden="true" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] rounded-full bg-blue-600/8 blur-[80px]" aria-hidden="true" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map(({ value, label, sub }) => (
            <div key={label} className="text-center">
              <div className="font-display text-4xl md:text-5xl font-bold hero-gradient-text mb-2 leading-none">
                {value}
              </div>
              <div className="text-white font-semibold text-sm mb-1">{label}</div>
              <div className="text-slate-500 text-xs leading-snug">{sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
