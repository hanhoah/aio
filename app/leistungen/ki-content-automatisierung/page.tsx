import React from "react"
import { Metadata } from "next"
import Link from "next/link"
import { FileText, CheckCircle, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "KI-Content-Automatisierung: Skalierbar & Markenkonsistent",
  description:
    "Ich baue Ihnen ein automatisiertes Content-System: Von der Themenrecherche über KI-gestützte Erstellung bis zur automatischen Veröffentlichung. 3–5x mehr Output.",
}

const useCases = [
  {
    title: "Blog & Artikel-Automatisierung",
    description:
      "Das System recherchiert Themen, erstellt Artikel in Ihrer Markensprache und veröffentlicht sie automatisch — wöchentlich oder täglich.",
  },
  {
    title: "LinkedIn & Social Media",
    description:
      "Aus einem Blog-Artikel entstehen automatisch LinkedIn-Posts, Kurzversionen und Social-Media-Content — ohne zusätzlichen Aufwand.",
  },
  {
    title: "Newsletter & E-Mail-Sequenzen",
    description:
      "Regelmäßige Newsletter werden automatisch aus Ihrem Content generiert, personalisiert und über Ihr E-Mail-System versendet.",
  },
]

const benefits = [
  "Content-Produktion um Faktor 3–5x skalieren ohne Mehraufwand",
  "Konsistente Markensprache durch trainierte KI-Templates",
  "Automatische Veröffentlichung auf Website, LinkedIn & Co.",
  "Kosten pro Artikel um 60–70 % reduziert gegenüber Freelancern",
  "Themenrecherche KI-gestützt — keine redaktionellen Entscheidungen mehr nötig",
  "Vollständige Kontrolle: Sie genehmigen vor der Veröffentlichung",
]

const faqs = [
  {
    question: "Wie stellt das System sicher, dass der Content zur Marke passt?",
    answer:
      "Ich trainiere die KI-Vorlagen auf Ihre Tonalität, Ihre Zielgruppe und Ihre typischen Themen. Das System schreibt dann wie Sie — konsistent und markenkonfom. Sie können jederzeit eingreifen oder die Templates anpassen.",
  },
  {
    question: "Erkennt man, dass der Content von KI erstellt wurde?",
    answer:
      "Bei professionell aufgesetzten Systemen nicht. Der entscheidende Faktor ist die Qualität der Templates und das Training auf Ihre Marke. Ich setze das so auf, dass der Output redaktionell weiterverarbeitbar ist — nicht erkennbar als generischer KI-Text.",
  },
  {
    question: "Wie viel Kontrolle behalte ich über den veröffentlichten Content?",
    answer:
      "So viel wie Sie wollen. Das System kann jeden Artikel zur manuellen Freigabe vorlegen, bevor er veröffentlicht wird — oder vollautomatisch bei Themen, bei denen Sie sich sicher sind.",
  },
  {
    question: "Welche Plattformen werden unterstützt?",
    answer:
      "WordPress, Webflow, Next.js-Blogs, LinkedIn, E-Mail-Systeme (Mailchimp, Brevo, Resend), Notion, Slack und weitere. Wenn Ihre Plattform eine API hat, kann ich sie integrieren.",
  },
  {
    question: "Was kostet KI-Content-Automatisierung?",
    answer:
      "Die Einrichtung des Systems kostet einmalig 1.500–3.500 €. Laufend entstehen Kosten für APIs (meist 50–150 € / Monat) und optional ein Wartungspaket. Der monatliche Retainer für Content-Strategie und Optimierung liegt bei 500 € / Monat.",
  },
]

export default function KiContentAutomatisierungPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#080d1a] pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 hero-dot-grid opacity-50" aria-hidden="true" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm">
              <FileText size={14} />
              Leistung
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              KI-Content-Automatisierung
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed mb-8 max-w-2xl">
              Ich baue Ihnen ein automatisiertes Content-System — von der Themenrecherche bis zur Veröffentlichung.{" "}
              <span className="text-slate-200">3–5x mehr Output, 60–70 % weniger Kosten.</span>
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
              Was automatisiert wird
            </h2>
            <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
              Jeder Content-Kanal kann automatisiert werden — einzeln oder im Verbund.
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
            Wie viel Zeit verlieren Sie gerade für Content?
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
            Ich zeige Ihnen in einem kostenlosen Gespräch, welche Teile Ihrer Content-Produktion sich automatisieren lassen — und was das monatlich spart.
          </p>
          <Link
            href="/#kontakt"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-lg transition-colors cursor-pointer"
          >
            Content-Analyse anfragen
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}
