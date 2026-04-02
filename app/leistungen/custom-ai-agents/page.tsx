import React from "react"
import { Metadata } from "next"
import Link from "next/link"
import { Bot, CheckCircle, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Custom AI Agents & Chatbots für Unternehmen",
  description:
    "Ich entwickle maßgeschneiderte KI-Assistenten, die Ihre eigenen Daten kennen: RAG-Chatbots, Wissensdatenbanken, interne Recherche-Agents. Vollständige Datenkontrolle.",
}

const useCases = [
  {
    title: "Kundenservice-Chatbot",
    description:
      "Ein KI-Assistent auf Ihrer Website beantwortet Kundenfragen auf Basis Ihrer FAQs, Produkte und Dokumente — rund um die Uhr, in Ihrer Markensprache.",
  },
  {
    title: "Interne Wissensdatenbank",
    description:
      "Ihr Team stellt Fragen zu internen Richtlinien, Prozessen oder Projekten — der Agent findet die Antwort sofort aus Ihren Dokumenten, statt stundenlang zu suchen.",
  },
  {
    title: "Recherche & Analyse-Agent",
    description:
      "Der Agent durchsucht automatisch Marktberichte, News oder Wettbewerbsdaten und liefert Ihnen täglich eine strukturierte Zusammenfassung.",
  },
]

const benefits = [
  "KI antwortet ausschließlich auf Basis Ihrer eigenen Dokumente & Daten",
  "Kundensupport-Volumen um bis zu 60 % reduzierbar",
  "Nahtlose Integration (Slack, Website, CRM, Intranet)",
  "Vollständige Kontrolle — Daten verlassen nicht Ihren Server",
  "Mehrsprachig — Deutsch, Englisch und weitere Sprachen",
  "Messbare Qualität durch Feedback-Loops und Monitoring",
]

const faqs = [
  {
    question: "Was ist der Unterschied zwischen ChatGPT und einem Custom AI Agent?",
    answer:
      "ChatGPT kennt nur öffentliche Informationen bis zu seinem Trainingsdatum. Ein Custom AI Agent kennt ausschließlich Ihre Daten: Ihre Dokumente, Ihre Produkte, Ihre internen Richtlinien. Er kann nichts erfinden, was nicht in Ihrer Wissensbasis steht.",
  },
  {
    question: "Wie sicher sind meine Unternehmensdaten?",
    answer:
      "Ihre Daten werden nicht an OpenAI oder andere KI-Anbieter weitergegeben. Ich baue Agents auf Basis der Claude API (Anthropic), bei der die Datenschutzrichtlinien klar geregelt sind — oder vollständig On-Premise, wenn gewünscht.",
  },
  {
    question: "Welche Dokumente kann der Agent verarbeiten?",
    answer:
      "PDFs, Word-Dokumente, Excel-Tabellen, Webseiten, Notion-Seiten, Confluence-Artikel, E-Mails und mehr. Die Dokumente werden indexiert und bleiben aktuell — neue Dokumente werden automatisch eingearbeitet.",
  },
  {
    question: "Wie lange dauert die Entwicklung eines Custom AI Agents?",
    answer:
      "Ein einfacher RAG-Chatbot ist in 2–3 Wochen fertig. Komplexere Agents mit mehreren Datenquellen und Aktionen (z. B. Ticket erstellen, E-Mail schreiben) dauern 4–8 Wochen.",
  },
  {
    question: "Was kostet ein Custom AI Agent?",
    answer:
      "Die Entwicklung liegt typischerweise bei 3.000–8.000 € einmalig, je nach Komplexität. Laufende Kosten entstehen durch API-Nutzung (meist 50–200 € / Monat), abhängig vom Nutzungsvolumen.",
  },
]

export default function CustomAiAgentsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#080d1a] pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 hero-dot-grid opacity-50" aria-hidden="true" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm">
              <Bot size={14} />
              Leistung
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Custom AI Agents & Chatbots
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed mb-8 max-w-2xl">
              Ich baue Ihnen einen KI-Assistenten, der{" "}
              <span className="text-slate-200">Ihre Daten kennt</span> — keine generischen Antworten,
              keine Datenlecks, kein Vendor Lock-in.
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
              Typische Anwendungsfälle
            </h2>
            <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
              Von Kundenservice bis internes Wissensmanagement — KI-Agents lassen sich für viele Bereiche einsetzen.
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
            Welches Wissen soll Ihr KI-Agent kennen?
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
            In einem kostenlosen Gespräch zeige ich Ihnen, wie ein Custom AI Agent Ihr Team konkret entlasten kann.
          </p>
          <Link
            href="/#kontakt"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-lg transition-colors cursor-pointer"
          >
            Jetzt Beratung anfragen
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}
