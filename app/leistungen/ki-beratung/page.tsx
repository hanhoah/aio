import React from "react"
import { Metadata } from "next"
import Link from "next/link"
import { Lightbulb, CheckCircle, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "KI-Beratung & Strategie: Ihre persönliche KI-Roadmap",
  description:
    "In 2 Stunden erstelle ich Ihre persönliche KI-Roadmap: Wo lohnt sich KI in Ihrem Unternehmen? Was kostet es? Wo fangen Sie an? Festpreis 300 €.",
}

const included = [
  "Analyse Ihrer aktuellen Prozesse auf KI-Potenzial",
  "Priorisierte Quick-Wins: Was bringt am schnellsten ROI",
  "Realistische Aufwands- und Kostenschätzung",
  "Konkrete nächste Schritte — keine Theorie, sondern Aktionsplan",
  "Ehrliche Einschätzung: Was lohnt sich, was nicht",
  "Schriftliche Zusammenfassung nach dem Gespräch",
]

const faqs = [
  {
    question: "Für wen ist die KI-Beratung geeignet?",
    answer:
      "Für Geschäftsführer und Entscheider in KMUs (10–200 Mitarbeiter), die wissen, dass KI ihrem Unternehmen helfen kann — aber nicht wissen, wo sie anfangen sollen. Und für alle, die konkrete Zahlen und Prioritäten statt generischer KI-Visionen brauchen.",
  },
  {
    question: "Was genau passiert in den 2 Stunden?",
    answer:
      "Erste 45 Minuten: Ich verstehe Ihr Business — Prozesse, Team, aktuelle Herausforderungen. Nächste 45 Minuten: Gemeinsame Analyse der KI-Potenziale. Letzte 30 Minuten: Roadmap und nächste Schritte. Sie verlassen das Gespräch mit einem klaren Plan.",
  },
  {
    question: "Warum Festpreis 300 €?",
    answer:
      "Weil ein klarer Preis klare Erwartungen schafft. Kein stundenlanger Beratungsmarathon, keine versteckten Kosten. Wenn ich Ihnen nach dem Gespräch nicht weiterhelfen konnte, erstatten Sie ich den Betrag.",
  },
  {
    question: "Was passiert nach der Beratung?",
    answer:
      "Sie bekommen eine schriftliche Zusammenfassung mit Roadmap. Wenn Sie möchten, kann ich einzelne Punkte umsetzen — das ist aber kein Pflicht. Die Beratung ist ein eigenständiges Produkt.",
  },
  {
    question: "Kann ich auch online teilnehmen?",
    answer:
      "Ja, das Gespräch findet per Video-Call statt (Google Meet oder Zoom). Ein Screensharing-Anteil ist hilfreich, um Ihre aktuellen Prozesse direkt zu besprechen.",
  },
  {
    question: "Muss ich technisches Wissen mitbringen?",
    answer:
      "Nein. Ich erkläre alles in verständlichem Deutsch ohne Buzzwords. Sie müssen nicht wissen, was ein LLM ist — Sie müssen nur wissen, welche Prozesse in Ihrem Unternehmen Zeit und Geld kosten.",
  },
]

export default function KiBeratungPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#080d1a] pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 hero-dot-grid opacity-50" aria-hidden="true" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm">
              <Lightbulb size={14} />
              Leistung · Einstiegsprodukt
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              KI-Beratung & Strategie
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed mb-6 max-w-2xl">
              In 2 Stunden erstelle ich Ihre persönliche KI-Roadmap:{" "}
              <span className="text-slate-200">Was lohnt sich? Was kostet es? Wo fangen Sie an?</span>
            </p>
            <div className="inline-flex items-center gap-3 mb-8 px-5 py-3 rounded-xl bg-blue-600/15 border border-blue-500/30">
              <span className="text-3xl font-display font-bold text-white">300 €</span>
              <div>
                <p className="text-blue-300 text-sm font-medium">Festpreis · 2 Stunden</p>
                <p className="text-slate-500 text-xs">inkl. schriftlicher Zusammenfassung</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#kontakt"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors cursor-pointer"
              >
                Termin anfragen
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

      {/* What's included */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-slate-900 mb-10 text-center">
              Was enthalten ist
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {included.map((item) => (
                <div key={item} className="flex items-start gap-3 p-4 rounded-xl bg-blue-50 border border-blue-100">
                  <CheckCircle size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* For whom */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold text-slate-900 mb-6">
              Das richtige Einstiegsprodukt für Sie?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-3 text-green-600">Perfekt, wenn Sie...</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2"><CheckCircle size={15} className="text-green-500 mt-0.5 flex-shrink-0" /> wissen möchten, ob KI für Ihr Unternehmen relevant ist</li>
                  <li className="flex items-start gap-2"><CheckCircle size={15} className="text-green-500 mt-0.5 flex-shrink-0" /> konkrete Zahlen und Prioritäten brauchen, keine KI-Visionen</li>
                  <li className="flex items-start gap-2"><CheckCircle size={15} className="text-green-500 mt-0.5 flex-shrink-0" /> einen unabhängigen zweiten Blick auf geplante KI-Projekte wollen</li>
                  <li className="flex items-start gap-2"><CheckCircle size={15} className="text-green-500 mt-0.5 flex-shrink-0" /> Entscheidungsgrundlagen für interne Diskussionen brauchen</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-3 text-slate-500">Weniger geeignet, wenn...</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2"><span className="text-slate-400 mt-0.5 flex-shrink-0 font-bold">—</span> Sie bereits einen klaren Plan haben und direkt umsetzen möchten</li>
                  <li className="flex items-start gap-2"><span className="text-slate-400 mt-0.5 flex-shrink-0 font-bold">—</span> Sie eine sofortige technische Implementierung erwarten</li>
                </ul>
              </div>
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
            Starten Sie mit Klarheit.
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
            300 € für 2 Stunden, in denen Sie genau wissen, wo KI Ihrem Unternehmen hilft — und wo nicht.
          </p>
          <Link
            href="/#kontakt"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-lg transition-colors cursor-pointer"
          >
            Beratungstermin anfragen
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}
