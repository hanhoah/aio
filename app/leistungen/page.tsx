import React from "react"
import { Metadata } from "next"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { services } from "@/data/services"

export const metadata: Metadata = {
  title: "Meine Leistungen — KI-Automatisierung, AI Agents & mehr",
  description:
    "KI-Prozessautomatisierung, Custom AI Agents, KI-Web-Apps, GEO & KI-SEO, Content-Automatisierung und KI-Beratung. Direkt vom Entwickler, ohne Agentur-Overhead.",
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#080d1a] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 hero-dot-grid opacity-50" aria-hidden="true" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Meine Leistungen
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Keine generischen KI-Demos — Lösungen, die in Ihrem Unternehmen wirklich laufen.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div
                  key={service.id}
                  className={`rounded-2xl border p-8 relative ${
                    service.isHighlighted
                      ? "border-blue-400/50 bg-gradient-to-br from-blue-950 to-slate-900 shadow-[0_0_40px_rgba(59,130,246,0.1)]"
                      : "border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow"
                  }`}
                >
                  {service.isHighlighted && (
                    <div className="absolute -top-3 left-6">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-600 text-white">
                        Empfohlen
                      </span>
                    </div>
                  )}

                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                    service.isHighlighted ? "bg-blue-500/20 text-cyan-400" : "bg-blue-50 text-blue-600"
                  }`}>
                    <Icon size={22} />
                  </div>

                  <h2 className={`font-display text-2xl font-bold mb-3 ${
                    service.isHighlighted ? "text-white" : "text-slate-900"
                  }`}>
                    {service.title}
                  </h2>

                  <p className={`mb-6 leading-relaxed ${
                    service.isHighlighted ? "text-slate-400" : "text-slate-600"
                  }`}>
                    {service.description}
                  </p>

                  <h3 className={`font-semibold text-sm mb-3 ${
                    service.isHighlighted ? "text-slate-300" : "text-slate-700"
                  }`}>
                    Was Sie gewinnen:
                  </h3>
                  <ul className="space-y-2 mb-6">
                    {service.benefits?.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <span className={`mt-0.5 flex-shrink-0 ${
                          service.isHighlighted ? "text-cyan-400" : "text-blue-500"
                        }`}>✓</span>
                        <span className={service.isHighlighted ? "text-slate-400" : "text-slate-600"}>
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={service.link}
                    className={`inline-flex items-center gap-2 font-medium text-sm transition-colors cursor-pointer ${
                      service.isHighlighted
                        ? "text-cyan-400 hover:text-cyan-300"
                        : "text-blue-600 hover:text-blue-500"
                    }`}
                  >
                    Details & Fragen
                    <ChevronRight size={16} />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold text-slate-900 mb-4">
              Nicht sicher, was zu Ihnen passt?
            </h2>
            <p className="text-slate-600 mb-8">
              Erzählen Sie mir von Ihrem Unternehmen und Ihren Herausforderungen — ich sage Ihnen ehrlich,
              welche Lösung den größten Hebel hat.
            </p>
            <Link
              href="/#kontakt"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-lg transition-colors cursor-pointer"
            >
              Kostenlose Erstberatung anfragen
              <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
