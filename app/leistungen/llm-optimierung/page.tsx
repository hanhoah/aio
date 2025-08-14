import React from 'react';
import { Metadata } from 'next';
import JsonLd from '@/lib/jsonld';
import { generateServiceSchema, generateFAQSchema } from '@/lib/schema';

// Import service page components (these would need to be created separately)
// import HeroSection from '@/components/sections/service-hero';
// import ServiceDescription from '@/components/sections/service-description';
// import FAQSection from '@/components/sections/faq-section';

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
      
      {/* Page content would go here */}
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">LLM-Optimierung Website: Maximale Sichtbarkeit in KI-Assistenten</h1>
        
        {/* 
          Actual content components would be used here, such as:
          <HeroSection title="LLM-Optimierung Website" />
          <ServiceDescription />
          <FAQSection questions={faqQuestions} />
        */}
        
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Was ist LLM-Optimierung für Websites?</h2>
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <p className="font-medium">
              LLM-Optimierung für Websites ist der spezialisierte Prozess, Webinhalte für Large Language Models (LLMs) wie ChatGPT und Google Gemini zu optimieren. Im Gegensatz zur allgemeinen KI-Website-Optimierung fokussiert sich dieser Ansatz spezifisch auf die technischen Anforderungen von Sprachmodellen an Textstruktur, Informationsdichte und Extrahierbarkeit, um in KI-generierten Antworten bevorzugt zitiert zu werden.
            </p>
          </div>
          
          {/* Rest of the content would be added here */}
        </section>
        
        {/* FAQ Section Example */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Häufig gestellte Fragen zur LLM-Optimierung</h2>
          <div className="space-y-6">
            {faqQuestions.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <h3 className="text-xl font-medium mb-2">{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
        
        {/* CTA Section */}
        <section>
          <div className="bg-indigo-100 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Bereit, Ihre Website für KI-Assistenten zu optimieren?</h2>
            <p className="mb-6">Fordern Sie jetzt Ihr kostenloses LLM-Readiness-Audit an und erfahren Sie, wie gut Ihre Website bei ChatGPT & Co. performt.</p>
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors">
              Kostenloses Audit anfordern
            </button>
          </div>
        </section>
      </div>
    </>
  );
}