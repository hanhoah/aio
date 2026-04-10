import React from "react"
import { Metadata } from "next"
import Link from "next/link"
import { Search, CheckCircle, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "GEO – Generative Engine Optimization: Sichtbarkeit in ChatGPT, Perplexity & Google AI",
  description:
    "GEO (Generative Engine Optimization) optimiert Ihre Website für KI-Suchmaschinen: ChatGPT, Perplexity und Google AI Overviews. So zitieren KI-Systeme Ihr Unternehmen — nicht Ihre Wettbewerber.",
}

const useCases = [
  {
    title: "GEO – Generative Engine Optimization",
    description:
      "Ich optimiere Ihren Content so, dass KI-Systeme wie ChatGPT, Perplexity und Google AI ihn als autoritativ einstufen und zitieren — nicht nur klassische Suchmaschinen.",
  },
  {
    title: "Technisches SEO & Strukturierte Daten",
    description:
      "Schema.org-Markup, FAQ-Schemas, Person/Organization-Daten und technische Optimierungen für maximale Crawlbarkeit durch KI und Suchmaschinen.",
  },
  {
    title: "Content-Tiefe & Autorität",
    description:
      "Ich erstelle oder überarbeite Ihren Content so, dass er die Tiefe und Struktur hat, die KI-Suchmaschinen als Antwortquelle bevorzugen.",
  },
]

const benefits = [
  "Sichtbarkeit in KI-Suchmaschinen (ChatGPT, Perplexity, Gemini, Google AI Overviews)",
  "Strukturierte Daten & FAQ-Schema für maximale KI-Zitierrate",
  "Content-Tiefe, die KI-Systeme als autoritativ einstufen",
  "Klassisches Google-Ranking und KI-Sichtbarkeit gleichzeitig verbessert",
  "Monatliches Reporting mit messbaren Sichtbarkeits-KPIs",
  "Nachhaltiger Ansatz — keine Black-Hat-Tricks",
]

const faqs = [
  {
    question: "Was ist GEO (Generative Engine Optimization)?",
    answer:
      "GEO ist die Optimierung Ihrer digitalen Präsenz für KI-Suchmaschinen wie ChatGPT, Perplexity und Google AI Overviews. Wenn Nutzer dort nach Lösungen suchen, die Sie anbieten, soll Ihr Unternehmen zitiert werden — nicht Ihre Wettbewerber. Der Begriff wurde von SEO-Forschern geprägt und beschreibt einen neuen Optimierungsbereich neben klassischem Google-SEO.",
  },
  {
    question: "Wie unterscheidet sich GEO von klassischem SEO?",
    answer:
      "Klassisches SEO optimiert für Keyword-Rankings bei Google — das Ziel ist der Klick auf Ihre Website. GEO optimiert dafür, dass KI-Systeme Ihren Content als verlässliche Quelle für ihre Antworten verwenden — das Ziel ist die Erwähnung/Zitierung. Beides ist wichtig, und ich mache beides.",
  },
  {
    question: "Warum taucht mein Unternehmen in KI-Suchen nicht auf?",
    answer:
      "KI-Suchmaschinen bevorzugen Content mit klarer Struktur, Autorität und Tiefe. Fehlende strukturierte Daten, oberflächlicher Content und schlechte technische SEO-Grundlage sind die häufigsten Ursachen.",
  },
  {
    question: "Wann sehe ich erste Ergebnisse?",
    answer:
      "Technische Verbesserungen (strukturierte Daten, Schema-Markup) wirken innerhalb von 2–4 Wochen. Content-Tiefe und Autorität bauen sich über 3–6 Monate auf. GEO ist eine Investition — keine kurzfristige Maßnahme.",
  },
  {
    question: "Was kostet GEO?",
    answer:
      "Ich biete einen monatlichen Retainer ab 800 € an, der technisches SEO, Content-Optimierung und monatliches Reporting umfasst. Für einmalige Audits und Strukturierungen gibt es separate Pakete.",
  },
]

export default function GeoKiSeoPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#080d1a] pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 hero-dot-grid opacity-50" aria-hidden="true" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm">
              <Search size={14} />
              Leistung
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              GEO
            </h1>
            <p className="text-cyan-400 text-lg font-medium mb-6">
              Generative Engine Optimization — Sichtbarkeit in KI-Suchmaschinen
            </p>
            <p className="text-xl text-slate-400 leading-relaxed mb-4 max-w-2xl">
              Klassisches SEO bringt Sie in Google-Rankings. GEO sorgt dafür, dass{" "}
              <span className="text-slate-200">ChatGPT, Perplexity und Google AI</span> Ihr
              Unternehmen zitieren — der neue Suchkanal, den Ihre Wettbewerber noch ignorieren.
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
              Was ich konkret tue
            </h2>
            <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
              GEO ist kein einzelnes Tool — sondern ein ganzheitlicher Ansatz aus Technik, Content und Struktur.
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
            Taucht Ihr Unternehmen in KI-Suchantworten auf?
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
            Ich analysiere Ihre aktuelle Sichtbarkeit in KI-Suchmaschinen und zeige Ihnen, was zu tun ist.
          </p>
          <Link
            href="/#kontakt"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-lg transition-colors cursor-pointer"
          >
            Sichtbarkeits-Analyse anfragen
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}
