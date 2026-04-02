import React from "react"
import { Metadata } from "next"
import Link from "next/link"
import { Zap, CheckCircle, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "KI-Prozessautomatisierung für KMU",
  description:
    "Ich automatisiere Ihre manuellen Geschäftsprozesse mit n8n und Claude API. Rechnungsverarbeitung, E-Mail-Routing, Datenpflege — 50–80 % Zeitersparnis in 2–6 Wochen.",
}

const useCases = [
  {
    title: "Rechnungsverarbeitung",
    description:
      "Eingehende Rechnungen per E-Mail werden automatisch erkannt, Daten extrahiert, ins ERP übertragen und zur Freigabe weitergeleitet. Ohne manuelle Dateneingabe.",
  },
  {
    title: "E-Mail-Routing & Klassifizierung",
    description:
      "KI liest eingehende E-Mails, klassifiziert sie nach Thema und leitet sie automatisch ans richtige Team weiter — mit vorbereiteter Antwort oder direkter Aktion.",
  },
  {
    title: "Reporting & Datenpflege",
    description:
      "Wöchentliche Reports aus verschiedenen Systemen werden automatisch zusammengestellt, aufbereitet und als PDF oder Dashboard ausgespielt.",
  },
]

const benefits = [
  "50–80 % weniger Zeitaufwand bei Routinetätigkeiten",
  "Fehlerquote sinkt auf nahezu null (kein manuelles Kopieren)",
  "Automatisierungen laufen 24/7 ohne Ihr Zutun",
  "ROI typischerweise nach 2–3 Monaten erreicht",
  "Kein Vendor Lock-in — n8n ist Open Source",
  "Vollständige Dokumentation für Ihr Team",
]

const faqs = [
  {
    question: "Welche Prozesse eignen sich für KI-Automatisierung?",
    answer:
      "Ideal sind wiederkehrende, regelbasierte Aufgaben: Dateneingabe, E-Mail-Bearbeitung, Reporterstellung, Formularverarbeitung oder Datensynchronisation zwischen Systemen. Wenn Sie eine Aufgabe mehrmals pro Woche auf die gleiche Art erledigen, ist sie ein Kandidat.",
  },
  {
    question: "Wie lange dauert die Entwicklung einer Automatisierung?",
    answer:
      "Einfache Automatisierungen (z. B. E-Mail → CRM) sind in 1–2 Wochen fertig. Komplexere Workflows mit KI-Verarbeitung und mehreren Systemintegrationen dauern 3–6 Wochen. Ich liefere nach einem fixen Zeitplan — keine offenen Projektenden.",
  },
  {
    question: "Was kostet eine KI-Prozessautomatisierung?",
    answer:
      "Die Entwicklung ist einmalig: typischerweise 2.500–6.000 € je nach Komplexität. Laufende Kosten entstehen nur durch die genutzten APIs (meist 20–100 € / Monat). Der ROI ist in der Regel nach wenigen Monaten erreicht.",
  },
  {
    question: "Was passiert, wenn die Automatisierung nicht funktioniert?",
    answer:
      "Ich liefere mit Dokumentation und einem definierten Übergabeprozess. Fehler innerhalb der ersten 4 Wochen behebe ich kostenfrei. Optional biete ich einen monatlichen Wartungsvertrag an.",
  },
  {
    question: "Brauche ich technisches Wissen, um die Automatisierung zu nutzen?",
    answer:
      "Nein. Ich baue die Automatisierung so, dass Ihr Team sie ohne technisches Wissen nutzen kann. Bei der Übergabe erkläre ich alles — und es gibt eine schriftliche Dokumentation.",
  },
]

export default function KiProzessautomatisierungPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#080d1a] pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 hero-dot-grid opacity-50" aria-hidden="true" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm">
              <Zap size={14} />
              Leistung
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              KI-Prozess&shy;automatisierung
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed mb-8 max-w-2xl">
              Ich automatisiere Ihre manuellen Routineprozesse mit n8n und KI —
              Rechnungen, E-Mails, Reports, Datenpflege.{" "}
              <span className="text-slate-200">50–80 % Zeitersparnis</span>, einmalig gebaut, dauerhaft wirksam.
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
              Diese Prozesse habe ich bereits für Unternehmen automatisiert. Ihr Prozess ist anders? Kein Problem — ich analysiere jeden individuell.
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
            Welcher Prozess kostet Ihr Team am meisten Zeit?
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
            Ich analysiere Ihre Prozesse und zeige Ihnen in einem kostenlosen Gespräch, wo KI den größten Hebel hat.
          </p>
          <Link
            href="/#kontakt"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-lg transition-colors cursor-pointer"
          >
            Kostenlose Analyse anfragen
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}
