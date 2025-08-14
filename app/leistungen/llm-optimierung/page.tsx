import React from 'react';
import { Metadata } from 'next';
import JsonLd from '@/lib/jsonld';
import { generateServiceSchema, generateFAQSchema } from '@/lib/schema';
import ServiceHero from '@/components/sections/service-hero';
import ServiceFeatures from '@/components/sections/service-features';
import FAQSection from '@/components/sections/faq-section';
import ServiceCTA from '@/components/sections/service-cta';
import RelatedServices from '@/components/sections/related-services';

// Define metadata for the page
export const metadata: Metadata = {
  title: 'LLM Optimierung Website: In ChatGPT & Co. sichtbar werden',
  description: 'Optimieren Sie Ihre Webinhalte für Large Language Models wie ChatGPT. Spezifische LLM-Optimierung für mehr Zitate und Traffic. Jetzt Analyse anfordern!',
};

// Define FAQ questions for this service
const faqQuestions = [
  {
    question: 'Wie unterscheidet sich LLM-Optimierung von klassischer SEO?',
    answer: 'LLM-Optimierung fokussiert sich auf die Anforderungen von KI-Sprachmodellen an Inhaltsstruktur und semantische Klarheit, während klassisches SEO primär auf Ranking-Faktoren für Suchmaschinen ausgerichtet ist. Der Hauptunterschied liegt in der Optimierung für direkte Antwortextraktion versus Optimierung für Suchergebnisplatzierungen.'
  },
  {
    question: 'Welche Inhalte sollten priorisiert für LLMs optimiert werden?',
    answer: 'Priorisieren Sie Inhalte, die direkte Antworten auf häufige Fragen Ihrer Zielgruppe bieten, komplexe Konzepte erklären oder Expertise in Ihrem Fachgebiet demonstrieren. Besonders wertvoll sind How-To-Anleitungen, Definitionen, Prozessbeschreibungen und Vergleiche, da diese häufig in KI-Antworten zitiert werden.'
  },
  {
    question: 'Beeinträchtigt die LLM-Optimierung die Nutzererfahrung oder das SEO?',
    answer: 'Bei professioneller Umsetzung verbessert LLM-Optimierung sowohl die Nutzererfahrung als auch das SEO, da sie auf klarer Struktur, präzisen Informationen und logischer Organisation basiert. Wir achten darauf, dass optimierte Inhalte natürlich und ansprechend für menschliche Leser bleiben, während sie gleichzeitig für KI-Systeme besser verständlich sind.'
  },
  {
    question: 'Wie lange dauert es, bis LLM-Optimierungsmaßnahmen Wirkung zeigen?',
    answer: 'Erste Verbesserungen in der Erfassung durch KI-Systeme sind oft innerhalb von 2-4 Wochen nach Implementierung sichtbar. Die vollständige Wirkung, insbesondere in Bezug auf Zitierfrequenz und thematische Autorität, entwickelt sich typischerweise über einen Zeitraum von 2-3 Monaten, abhängig von der Crawl-Frequenz der KI-Systeme.'
  },
  {
    question: 'Wie messen Sie den Erfolg von LLM-Optimierungsmaßnahmen?',
    answer: 'Wir verwenden spezialisierte Tools für das Monitoring von KI-Antworten, um die Zitierfrequenz und Antwortqualität zu tracken. Zusätzlich messen wir Traffic aus KI-Quellen, Veränderungen in Engagement-Metriken und letztendlich die Konversionsraten von Besuchern, die über KI-Assistenten auf Ihre Website gelangen.'
  }
];

// Define service schema properties
const serviceProps = {
  id: '/leistungen/llm-optimierung',
  name: 'LLM-Optimierung Website',
  url: '/leistungen/llm-optimierung',
  description: 'Spezialisierter Prozess zur Optimierung von Webinhalten für Large Language Models wie ChatGPT und Google Gemini, um in KI-generierten Antworten bevorzugt zitiert zu werden.',
  serviceType: 'Website-Optimierung',
  price: '4800.00',
  priceCurrency: 'EUR',
  areaServed: ['Deutschland', 'Österreich', 'Schweiz'],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    "name": "LLM-Optimierungsleistungen",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "LLM-Readiness-Audit",
          "description": "Umfassende Analyse Ihrer Website hinsichtlich LLM-Kompatibilität und Optimierungspotenzial."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Strukturelle Optimierung",
          "description": "Neustrukturierung von Inhalten in klar definierte, semantische Abschnitte für bessere Extrahierbarkeit."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Semantische Anreicherung",
          "description": "Integration relevanter Entitäten und Fachbegriffe für besseres KI-Verständnis."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Technische LLM-Optimierung",
          "description": "Implementierung von strukturierten Daten und semantischer HTML-Auszeichnung für verbesserte maschinelle Lesbarkeit."
        }
      }
    ]
  }
};

export default function LLMOptimizationPage() {
  // Generate the structured data
  const serviceSchema = generateServiceSchema(serviceProps);
  const faqSchema = generateFAQSchema({
    id: '/leistungen/llm-optimierung',
    questions: faqQuestions
  });

  return (
    <>
      {/* Add JSON-LD structured data */}
      <JsonLd jsonLd={serviceSchema} schemaId="service-schema-llm-optimierung" />
      <JsonLd jsonLd={faqSchema} schemaId="faq-schema-llm-optimierung" />
      
      {/* Hero Section */}
      <ServiceHero 
        title="LLM-Optimierung Website: Maximale Sichtbarkeit in KI-Assistenten"
        description="LLM-Optimierung für Websites ist der spezialisierte Prozess, Webinhalte für Large Language Models (LLMs) wie ChatGPT und Google Gemini zu optimieren, um in KI-generierten Antworten bevorzugt zitiert zu werden."
        ctaText="Kostenloses LLM-Audit anfordern"
        backgroundImage="/images/hero-llm-optimierung.png"
      />
      
      {/* Main Content with Sidebar */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content - Takes 2/3 of the space on large screens */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-semibold mb-6">Unsere LLM-Optimierungsmethodik</h2>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <p className="font-medium">
                  Unsere LLM-Optimierungsmethodik umfasst vier Hauptkomponenten: strukturelle Anpassung von Inhalten für bessere Extrahierbarkeit, semantische Anreicherung durch Entitäten und Kontext, Implementierung von dedizierten Antwortblöcken und kontinuierliches Testing mit führenden LLMs. Dieser technisch fundierte Ansatz maximiert die Wahrscheinlichkeit, dass Ihre Inhalte als Quellen für KI-generierte Antworten verwendet werden.
                </p>
              </div>
              
              <div className="space-y-8 mb-12">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Strukturelle Optimierung</h3>
                  <p className="text-gray-700">
                    Wir restrukturieren Ihre Inhalte in klar definierte, semantische Abschnitte, implementieren hierarchische Überschriftenstrukturen und optimieren strukturierte Elemente wie Listen und Tabellen. Die verbesserte Inhaltsgliederung erleichtert die Informationsextraktion durch KI-Systeme.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Semantische Anreicherung</h3>
                  <p className="text-gray-700">
                    Wir integrieren relevante Entitäten und Fachbegriffe, etablieren semantische Beziehungen zwischen Konzepten und bieten eindeutige Definitionen für eine optimale kontextuelle Einbettung von Informationen, die das Verständnis der KI verbessert.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Technische Implementierung</h3>
                  <p className="text-gray-700">
                    Unsere Umsetzung umfasst die Implementierung von Schema.org-Markup, semantischer HTML-Auszeichnung und speziellen Meta-Tags für KI-Crawler. Diese technischen Maßnahmen verbessern die maschinelle Lesbarkeit und ermöglichen eine präzisere Erfassung Ihrer Inhalte.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Sidebar - Takes 1/3 of the space on large screens */}
            <div className="lg:col-span-1">
              <RelatedServices currentServiceId="llm-optimierung" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <ServiceFeatures
        title="Vorteile der LLM-Optimierung"
        description="Messbare Vorteile für Ihre digitale Präsenz im KI-Zeitalter"
        features={[
          {
            title: "Erhöhte Zitierfrequenz",
            description: "Durchschnittlich 3-5x höhere Wahrscheinlichkeit, in KI-generierten Antworten zitiert zu werden, was zu direkter Sichtbarkeit und Traffic-Steigerung führt."
          },
          {
            title: "Verbesserte Informationsextraktion",
            description: "Ihre Inhalte werden präziser und vollständiger von KI-Systemen erfasst, was zu akkurateren Antworten führt und Ihre Expertise korrekt repräsentiert."
          },
          {
            title: "Erhöhte Themenautorität",
            description: "Durch systematische semantische Vernetzung wird Ihre Website als Autoritätsquelle für spezifische Themen erkannt und bevorzugt referenziert."
          },
          {
            title: "Wettbewerbsvorsprung",
            description: "Während viele Unternehmen noch auf traditionelles SEO fokussiert sind, sichert Ihnen die frühzeitige LLM-Optimierung einen signifikanten Vorsprung."
          }
        ]}
      />
      
      {/* FAQ Section */}
      <FAQSection 
        questions={faqQuestions}
        title="FAQs zur LLM-Optimierung"
        backgroundImage="/images/hero-llm-optimierung.png"
      />
      
      {/* CTA Section */}
      <ServiceCTA
        title="Bereit, Ihre Website für KI-Assistenten zu optimieren?"
        description="Fordern Sie jetzt Ihr kostenloses LLM-Readiness-Audit an und erfahren Sie, wie gut Ihre Website bei ChatGPT & Co. performt."
        buttonText="Kostenloses Audit anfordern"
        buttonLink="/kontakt"
      />
    </>
  );
}