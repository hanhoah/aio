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
  title: 'Prompt Engineering für Webinhalte: ChatGPT optimal nutzen',
  description: 'Steigern Sie Effizienz und Qualität Ihrer Webinhalte durch professionelles Prompt Engineering. Workshops und Beratung für Teams. Termin vereinbaren!',
};

// Define FAQ questions for this service
const faqQuestions = [
  {
    question: 'Wie unterscheidet sich professionelles Prompt Engineering von einfachen ChatGPT-Anfragen?',
    answer: 'Professionelles Prompt Engineering verwendet systematisch strukturierte Anweisungen mit präzisen Parametern, Kontextinformationen, Zielgruppenspezifikationen und Formatvorgaben. Im Gegensatz zu einfachen ChatGPT-Anfragen basiert es auf umfassendem Verständnis der KI-Modelle, integriert SEO-Prinzipien und Markenrichtlinien und wird kontinuierlich durch Testing und Feedback optimiert, um konsistent hochwertige Ergebnisse zu liefern.'
  },
  {
    question: 'Wie lange dauert es, bis ein Team Prompt Engineering effektiv einsetzen kann?',
    answer: 'Nach einer grundlegenden Schulung (1-2 Tage) kann ein Team bereits einfache Prompt-Templates anwenden und erste Verbesserungen erzielen. Die volle Expertise entwickelt sich typischerweise über 4-6 Wochen aktiver Anwendung mit begleitendem Coaching. Die kontinuierliche Verfeinerung der Fähigkeiten und Anpassung an neue KI-Modelle ist ein fortlaufender Prozess, der langfristig weitergeführt werden sollte.'
  },
  {
    question: 'Welche Arten von Website-Inhalten eignen sich am besten für KI-generierte Texte?',
    answer: 'Besonders gut geeignet sind informative Blogartikel, Produktbeschreibungen, FAQ-Sektionen, Kategoriebeschreibungen und standardisierte Landingpages. Weniger geeignet sind hochkreative Inhalte mit sehr spezifischem Ton, komplexe technische Erklärungen mit hohem Fachwissen und stark emotionale oder narrative Texte, bei denen die authentische menschliche Stimme im Vordergrund steht.'
  },
  {
    question: 'Werden KI-generierte Inhalte von Google negativ bewertet?',
    answer: 'Google bewertet Inhalte nach ihrer Qualität, Relevanz und ihrem Nutzen für den Suchenden, nicht nach der Erstellungsmethode. Professionell mit Prompt Engineering erstellte KI-Inhalte, die hochwertig, informativ und nutzerorientiert sind, werden positiv bewertet. Entscheidend ist, dass die Inhalte Mehrwert bieten, korrekt sind und nicht generisch wirken – Eigenschaften, die durch gezieltes Prompt Engineering sichergestellt werden.'
  },
  {
    question: 'Wie wird der ROI von Prompt-Engineering-Schulungen gemessen?',
    answer: 'Der ROI wird anhand mehrerer Faktoren gemessen: Zeitersparnis bei der Content-Erstellung (typischerweise 50-70%), Reduzierung von Überarbeitungszyklen, erhöhte Content-Produktionskapazität sowie verbesserte Content-Performance (Traffic, Conversions, Rankings). Ein umfassendes Tracking vor und nach der Implementierung ermöglicht die präzise Quantifizierung dieser Vorteile und die Berechnung des konkreten finanziellen Nutzens.'
  }
];

// Define service features
const serviceFeatures = [
  {
    title: "Bedarfsanalyse und Zielsetzung",
    description: "Identifikation der Content-Kategorien und -Typen, Definition von Ton, Stil und Markensprache sowie Festlegung von SEO-Anforderungen und Keyword-Strategien."
  },
  {
    title: "Strategische Prompt-Entwicklung",
    description: "Erstellung strukturierter Prompt-Templates für verschiedene Content-Typen, Integration von Markensprache und Implementierung von SEO-Parametern."
  },
  {
    title: "Testing und Optimierung",
    description: "Systematisches A/B-Testing verschiedener Prompt-Varianten, Qualitätsbewertung und iterative Verbesserung basierend auf Ergebnisanalysen."
  },
  {
    title: "Workflow-Integration und Skalierung",
    description: "Integration der optimierten Prompts in bestehende Content-Prozesse, Schulung von Teams und Entwicklung von Qualitätssicherungsprozessen."
  }
];

// Define service schema properties
const serviceProps = {
  id: '/leistungen/prompt-engineering',
  name: 'Prompt Engineering für Webinhalte',
  url: '/leistungen/prompt-engineering',
  description: 'Strategische Entwicklung und Optimierung von Anweisungen (Prompts) für KI-Systeme zur Erstellung hochwertiger, SEO-optimierter und zielgruppenrelevanter Webinhalte.',
  serviceType: 'Content-Optimierung',
  price: '3500.00',
  priceCurrency: 'EUR',
  areaServed: ['Deutschland', 'Österreich', 'Schweiz'],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    "name": "Prompt Engineering Leistungen",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Inhouse-Workshops und Schulungen",
          "description": "Praxisorientierte Schulungen zu Grundlagen und fortgeschrittenen Techniken des Prompt Engineerings."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Maßgeschneiderte Prompt-Entwicklung",
          "description": "Entwicklung optimierter Prompts für Ihre spezifischen Content-Anforderungen."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "SEO-optimierte Blogartikel-Erstellung",
          "description": "Entwicklung von Prompt-Templates für verschiedene Blogformate mit integrierter SEO-Optimierung."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Kontinuierliche Beratung und Optimierung",
          "description": "Langfristige Begleitung mit regelmäßigen Reviews und Anpassungen an neue KI-Modellversionen."
        }
      }
    ]
  }
};

export default function PromptEngineeringPage() {
  // Generate the structured data
  const serviceSchema = generateServiceSchema(serviceProps);
  const faqSchema = generateFAQSchema({
    id: '/leistungen/prompt-engineering',
    questions: faqQuestions
  });

  return (
    <>
      {/* Add JSON-LD structured data */}
      <JsonLd jsonLd={serviceSchema} schemaId="service-schema-prompt-engineering" />
      <JsonLd jsonLd={faqSchema} schemaId="faq-schema-prompt-engineering" />
      
      {/* Hero Section */}
      <ServiceHero 
        title="Prompt Engineering für Webinhalte: KI-optimierte Textstrategien"
        description="Prompt Engineering für Webinhalte ist die strategische Entwicklung und Optimierung von Anweisungen (Prompts) für KI-Systeme wie ChatGPT oder Google Gemini, um hochwertige, SEO-optimierte und zielgruppenrelevante Webinhalte zu erstellen. Diese Spezialdisziplin kombiniert linguistisches Verständnis mit technischem Know-how, um KI-Tools präzise zu steuern und konsistente, markengerechte Inhalte zu generieren."
        ctaText="Workshop-Angebot anfordern"
        backgroundImage="/images/hero-prompt-engineering.png"
      />
      
      {/* Service Features */}
      <ServiceFeatures
        title="Unsere Prompt-Engineering-Methodik"
        description="Ein vierstufiger Prozess für hochwertige, konsistente und zielgerichtete KI-generierte Inhalte."
        features={serviceFeatures}
      />
      
      {/* Main Content Section with Sidebar */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content - Takes 2/3 of the space on large screens */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-semibold mb-6">ChatGPT und Google Gemini für Website-Inhalte nutzen</h2>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <p className="font-medium">
                  ChatGPT und Google Gemini können für verschiedene Website-Inhalte strategisch eingesetzt werden: für die Erstellung von SEO-optimierten Blogartikeln, die Generierung konsistenter Produktbeschreibungen, die Entwicklung überzeugender Landingpages und die Produktion von FAQ-Inhalten. Durch spezialisiertes Prompt Engineering lassen sich die Stärken dieser KI-Modelle gezielt nutzen, um hochwertige, zielgruppenrelevante und suchmaschinenoptimierte Inhalte effizient zu erstellen.
                </p>
              </div>
              
              <div className="space-y-8 mb-12">
                <div>
                  <h3 className="text-xl font-semibold mb-3">SEO-optimierte Blogartikel erstellen</h3>
                  <p className="text-gray-700">
                    Wir entwickeln Prompt-Templates für verschiedene Blogformate, integrieren Keyword-Recherche und SEO-Best-Practices, erstellen Strategien für überzeugende Überschriften und Meta-Beschreibungen und implementieren strukturierten Content mit klarer Hierarchie.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Konsistente Produktbeschreibungen generieren</h3>
                  <p className="text-gray-700">
                    Unsere Methodik umfasst skalierbare Prompts für große Produktkataloge, die Einbindung von USPs, Zielgruppen-Benefits und Markenwerten, Techniken für einzigartige Beschreibungen statt generischer Texte und Qualitätssicherung durch Prompt-Parameter.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Überzeugende Landingpages entwickeln</h3>
                  <p className="text-gray-700">
                    Wir setzen auf Prompt-Strategien für konversionsorientierte Inhalte, A/B-Testing verschiedener Wertversprechen und CTAs, Integration von psychologischen Prinzipien für höhere Conversion und einen Balanced-Content-Approach für SEO und Nutzererfahrung.
                  </p>
                </div>
              </div>
              
              <h2 className="text-3xl font-semibold mb-6">Unser Schulungs- und Beratungsangebot</h2>
              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <p className="font-medium">
                  Unser Prompt-Engineering-Angebot umfasst drei Kernleistungen: individuelle Inhouse-Workshops zur Schulung Ihrer Teams, maßgeschneiderte Prompt-Entwicklung für Ihre spezifischen Content-Anforderungen und kontinuierliche Beratung zur Optimierung Ihrer KI-Content-Strategie. Diese Leistungen können flexibel kombiniert werden, um sowohl kurzfristige Effizienzgewinne als auch langfristigen Kompetenzaufbau in Ihrem Unternehmen zu ermöglichen.
                </p>
              </div>
            </div>
            
            {/* Sidebar - Takes 1/3 of the space on large screens */}
            <div className="lg:col-span-1">
              <RelatedServices currentServiceId="prompt-engineering" />
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <FAQSection 
        questions={faqQuestions}
        title="FAQs zum Prompt Engineering"
      />
      
      {/* CTA Section */}
      <ServiceCTA
        title="Bereit für effizientere Content-Erstellung?"
        description="Steigern Sie die Effizienz Ihrer Content-Erstellung um bis zu 70% durch professionelles Prompt Engineering."
        buttonText="Kostenlose Erstberatung vereinbaren"
        buttonLink="/kontakt"
      />
    </>
  );
}