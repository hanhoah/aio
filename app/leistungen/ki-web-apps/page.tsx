import React from "react"
import { Metadata } from "next"
import Link from "next/link"
import { Code2, CheckCircle, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "KI-Web-Apps: Maßgeschneiderte Anwendungen mit KI",
  description:
    "Ich entwickle KI-Web-Apps mit Next.js und TypeScript: Dashboards, interne Tools, SaaS-Produkte — fertig in 4–8 Wochen mit direkter KI-Integration.",
}

const useCases = [
  {
    title: "Internes KI-Tool",
    description:
      "Ein maßgeschneidertes Dashboard, mit dem Ihr Team KI-Funktionen direkt nutzen kann — Texte generieren, Daten analysieren, Reports erstellen.",
  },
  {
    title: "KI-gestütztes SaaS-Produkt",
    description:
      "Sie haben eine Produktidee, die KI nutzen soll? Ich baue den MVP — von der Authentifizierung über die Datenbank bis zur KI-Integration.",
  },
  {
    title: "Web-App mit KI-Erweiterung",
    description:
      "Ihre bestehende Web-App bekommt neue KI-Features: intelligente Suche, automatische Zusammenfassungen, personalisierte Empfehlungen.",
  },
]

const benefits = [
  "Fertige Web-App in 4–8 Wochen statt 3–6 Monaten",
  "KI-Funktionen direkt eingebaut (kein nachträgliches Flickwerk)",
  "Moderner Stack: Next.js 14, TypeScript, Tailwind, shadcn/ui",
  "Skalierbare Architektur auf Vercel + PostgreSQL/pgvector",
  "Vollständige Übergabe mit Code, Dokumentation und Training",
  "Kein Vendor Lock-in — Sie bekommen den vollständigen Sourcecode",
]

const faqs = [
  {
    question: "Welche KI-Funktionen können in eine Web-App integriert werden?",
    answer:
      "Nahezu unbegrenzt: Chatbots, intelligente Suche (Semantic Search), automatische Zusammenfassungen, Textgenerierung, Bildanalyse, Datenextraktion aus Dokumenten, personalisierte Empfehlungen und vieles mehr.",
  },
  {
    question: "Was ist der Vorteil gegenüber einer Agentur?",
    answer:
      "Sie sprechen direkt mit dem Entwickler, der Ihre App baut. Kein Account-Manager, der Informationen filtert. Kein Overhead durch interne Abstimmungen. Das spart Zeit, Kosten und Missverständnisse.",
  },
  {
    question: "Wie lange dauert die Entwicklung einer KI-Web-App?",
    answer:
      "Ein MVP mit den Kernfunktionen ist in 4–8 Wochen fertig. Komplexere Produkte mit vielen Features dauern 2–3 Monate. Ich arbeite iterativ: Nach 2 Wochen sehen Sie bereits einen funktionierenden Prototypen.",
  },
  {
    question: "Was kostet eine KI-Web-App?",
    answer:
      "Typischerweise 3.500–9.000 € für den MVP, abhängig von Komplexität und Funktionsumfang. Wir definieren vorab einen klaren Scope — keine offenen Projektenden und keine Überraschungen.",
  },
  {
    question: "Kann ich die App nach der Übergabe selbst weiterentwickeln?",
    answer:
      "Ja. Sie erhalten den vollständigen Sourcecode mit Dokumentation. Ich erkläre die Architektur so, dass Ihr eigenes Entwickler-Team problemlos weiterarbeiten kann — oder ich stehe für laufende Weiterentwicklung zur Verfügung.",
  },
]

export default function KiWebAppsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#080d1a] pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 hero-dot-grid opacity-50" aria-hidden="true" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm">
              <Code2 size={14} />
              Leistung
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              KI-Web-Apps
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed mb-8 max-w-2xl">
              Maßgeschneiderte Web-Applikationen mit eingebetteten KI-Features —{" "}
              <span className="text-slate-200">fertig in 4–8 Wochen</span>, mit vollständiger Übergabe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#kontakt"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors cursor-pointer"
              >
                Kostenlose Erstberatung
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/leistungen"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-semibold transition-colors cursor-pointer"
              >
                Alle Leistungen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-slate-900 mb-10 text-center">
              Was Sie konkret gewinnen
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3 p-4 rounded-xl bg-blue-50 border border-blue-100">
                  <CheckCircle size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-slate-900 mb-4 text-center">
              Was ich baue
            </h2>
            <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
              Von internen Tools bis zu vollwertigen SaaS-Produkten — jede App wird auf Ihre Anforderungen zugeschnitten.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {useCases.map((useCase) => (
                <div key={useCase.title} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-slate-900 mb-3">{useCase.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-slate-900 mb-10 text-center">
              Häufige Fragen
            </h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question} className="border-b border-slate-100 pb-6">
                  <h3 className="font-semibold text-slate-900 mb-3">{faq.question}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#080d1a] relative overflow-hidden">
        <div className="absolute inset-0 hero-dot-grid opacity-30" aria-hidden="true" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Was soll Ihre App können?
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
            Erzählen Sie mir von Ihrer Idee — ich sage Ihnen ehrlich, was machbar ist und was es kosten würde.
          </p>
          <Link
            href="/#kontakt"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-lg transition-colors cursor-pointer"
          >
            Idee besprechen
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}
