import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Unsere Leistungen | AIO Consulting',
  description: 'Entdecken Sie unsere spezialisierten Dienstleistungen für KI-Website-Optimierung, LLM-Optimierung, KI-SEO und Prompt Engineering.',
};

const services = [
  {
    id: 'ki-content-marketing',
    title: 'KI-Content-Marketing B2B',
    description: 'Strategischer Ansatz zur Entwicklung, Erstellung und Optimierung von B2B-Fachinhalten mithilfe künstlicher Intelligenz für maximale Effizienz und Wirksamkeit.',
    benefits: [
      'Reduzierung der Content-Erstellungszeit um 50-70%',
      'Konsistente Markensprache über alle Inhalte hinweg',
      'Datenbasierte Themenauswahl statt subjektiver Einschätzungen',
      'Bewältigung größerer Content-Volumina ohne Personalaufstockung'
    ]
  },
  {
    id: 'ki-seo',
    title: 'KI-gestützte Suchmaschinenoptimierung',
    description: 'Strategische Integration von KI-Technologien in SEO-Prozesse für präzisere Nutzerintentionsanalyse, semantische Content-Optimierung und verbesserte Rankings in modernen Suchmaschinen.',
    benefits: [
      'Präzisere Datenanalyse und Entscheidungsfindung',
      'Effizientere Prozesse durch Automatisierung',
      'Höhere Wettbewerbsfähigkeit durch prädiktive Strategien',
      'Bessere Anpassungsfähigkeit an Algorithmus-Updates'
    ]
  },
  {
    id: 'llm-optimierung',
    title: 'LLM-Optimierung Website',
    description: 'Spezialisierter Prozess zur Optimierung von Webinhalten für Large Language Models wie ChatGPT und Google Gemini, um in KI-generierten Antworten bevorzugt zitiert zu werden.',
    benefits: [
      'Erhöhte Zitierfrequenz in KI-Antworten',
      'Verbesserte Informationsextraktion durch KI-Systeme',
      'Erhöhte Themenautorität',
      'Wettbewerbsvorsprung im wachsenden Markt der KI-gestützten Informationssuche'
    ]
  },
  {
    id: 'prompt-engineering',
    title: 'Prompt Engineering für Webinhalte',
    description: 'Strategische Entwicklung und Optimierung von Anweisungen (Prompts) für KI-Systeme zur Erstellung hochwertiger, SEO-optimierter und zielgruppenrelevanter Webinhalte.',
    benefits: [
      'Signifikante Zeit- und Kostenersparnis bei der Content-Erstellung',
      'Konsistentere Markensprache über alle Inhalte hinweg',
      'Verbesserte SEO-Performance durch systematisch optimierte Texte',
      'Höhere Skalierbarkeit der Content-Produktion'
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Unsere Leistungen</h1>
          <p className="text-xl text-gray-700">
            Spezialisierte Dienstleistungen für das KI-Zeitalter: Optimieren Sie Ihre digitale Präsenz für Suchmaschinen und KI-Assistenten.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3 text-indigo-700">{service.title}</h2>
                <p className="text-gray-700 mb-6">{service.description}</p>
                
                <h3 className="font-semibold text-lg mb-3">Vorteile:</h3>
                <ul className="space-y-2 mb-6">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-indigo-500 mr-2">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href={`/leistungen/${service.id}`}
                  className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-md transition-colors duration-300 mt-2"
                >
                  Mehr erfahren
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Individuelle Beratung</h2>
          <p className="text-lg text-gray-700 mb-8">
            Sie sind sich nicht sicher, welche Leistung am besten zu Ihren Anforderungen passt? Kontaktieren Sie uns für eine individuelle Beratung.
          </p>
          <Link 
            href="/kontakt"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-8 py-4 rounded-md transition-colors duration-300"
          >
            Kostenloses Erstgespräch vereinbaren
          </Link>
        </div>
      </div>
    </div>
  );
}