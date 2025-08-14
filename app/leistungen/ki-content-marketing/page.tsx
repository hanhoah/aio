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
  title: 'KI Content Marketing B2B: Effiziente Inhaltsstrategien',
  description: 'KI-Texte für Ihre Unternehmenswebsite: Hochwertige B2B-Inhalte effizienter erstellen und Conversion-Raten steigern. Content-Strategie anfragen!',
};

// Define FAQ questions for this service
const faqQuestions = [
  {
    question: 'Wie wird die fachliche Richtigkeit von KI-generierten B2B-Inhalten sichergestellt?',
    answer: 'Die fachliche Richtigkeit wird durch einen mehrstufigen Prozess gewährleistet: Zunächst werden spezialisierte Prompt-Templates mit Branchenwissen und Fachterminologie entwickelt. Die KI-generierten Inhalte durchlaufen anschließend eine Qualitätskontrolle durch Fachexperten, die inhaltliche Genauigkeit prüfen und bei Bedarf Korrekturen vornehmen. Zusätzlich werden Quellenangaben und Referenzen integriert, um Glaubwürdigkeit und Nachprüfbarkeit zu gewährleisten.'
  },
  {
    question: 'Wie unterscheiden sich KI-erstellte B2B-Inhalte von generischen KI-Texten?',
    answer: 'Hochwertige KI-erstellte B2B-Inhalte basieren auf spezifischen, fachlich fundierten Prompt-Templates, integrieren Unternehmenswissen und Branchenexpertise und werden durch professionelle Redakteure verfeinert. Im Gegensatz zu generischen KI-Texten zeichnen sie sich durch Fachtiefe, präzise Terminologie, korrekte Einordnung in den Branchenkontext und strategische Ausrichtung an konkreten Business-Zielen aus. Sie vermeiden Allgemeinplätze zugunsten spezifischer, wertvoller Insights.'
  },
  {
    question: 'Welcher Zeitaufwand ist für die Implementierung einer KI-Content-Strategie nötig?',
    answer: 'Die initiale Implementierung einer KI-Content-Strategie erfordert typischerweise 4-8 Wochen, abhängig von der Komplexität der Branche und des bestehenden Content-Ökosystems. Diese Zeitspanne umfasst die Entwicklung von Prompt-Templates, die Integration in bestehende Workflows und die Schulung der beteiligten Teams. Nach dieser Initialphase reduziert sich der Zeitaufwand für die Content-Erstellung erheblich, während die kontinuierliche Optimierung in den regulären Marketing-Rhythmus integriert wird.'
  },
  {
    question: 'Wie werden KI-erstellte Inhalte von der Zielgruppe wahrgenommen?',
    answer: 'Studien zeigen, dass professionell erstellte und redigierte KI-Inhalte von B2B-Zielgruppen nicht von menschlich erstellten Inhalten unterschieden werden können. Entscheidend für die positive Wahrnehmung sind Relevanz, Informationstiefe und praktischer Nutzen – Faktoren, die durch unseren strategischen KI-Content-Ansatz sichergestellt werden. Die Akzeptanz steigt zusätzlich, wenn die Inhalte authentische Unternehmensexpertise transportieren und in eine kohärente Kommunikationsstrategie eingebettet sind.'
  },
  {
    question: 'Wie wird der ROI von KI-Content-Marketing gemessen?',
    answer: 'Der ROI wird anhand mehrerer Faktoren berechnet: Zeitersparnis bei der Content-Erstellung (typischerweise 50-70% gegenüber traditionellen Methoden), Steigerung der Content-Produktionskapazität, verbesserte Performance-Metriken (Traffic, Engagement, Conversions) sowie direkte Kosteneinsparungen bei der Content-Produktion. Ein umfassendes Tracking-System ermöglicht die präzise Quantifizierung dieser Vorteile und deren Verknüpfung mit übergeordneten Geschäftszielen wie Lead-Generierung und Umsatzsteigerung.'
  }
];

// Define service features
const serviceFeatures = [
  {
    title: "Datenbasierte Strategieentwicklung",
    description: "KI-gestützte Markt- und Wettbewerbsanalyse, präzise Zielgruppenidentifikation und datengetriebene Themenrecherche für maximale Relevanz."
  },
  {
    title: "KI-gestützte Content-Produktion",
    description: "Optimierte Prompt-Templates für verschiedene Content-Typen, semi-automatisierte Erstellung von Fachartikeln und Qualitätssicherung durch Experten."
  },
  {
    title: "Intelligente Content-Distribution",
    description: "Kanalspezifische Formatoptimierung, personalisierte Content-Sequenzen und automatisierte Content-Syndication für maximale Reichweite."
  },
  {
    title: "Performance-Monitoring und Optimierung",
    description: "Echtzeit-Tracking mit KI-Anomalieerkennung, A/B-Testing mit statistischer Signifikanzanalyse und kontinuierliche Strategie-Anpassung."
  }
];

// Define service schema properties
const serviceProps = {
  id: '/leistungen/ki-content-marketing',
  name: 'KI-Content-Marketing',
  url: '/leistungen/ki-content-marketing',
  description: 'Strategischer Ansatz zur Entwicklung, Erstellung und Optimierung von B2B-Fachinhalten mithilfe künstlicher Intelligenz für maximale Effizienz und Wirksamkeit.',
  serviceType: 'Content-Marketing',
  price: '4500.00',
  priceCurrency: 'EUR',
  areaServed: ['Deutschland', 'Österreich', 'Schweiz'],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    "name": "KI-Content-Marketing-Leistungen",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Datenbasierte Content-Strategieentwicklung",
          "description": "KI-gestützte Marktanalyse und Entwicklung einer maßgeschneiderten Content-Roadmap."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "KI-gestützte Content-Produktion",
          "description": "Entwicklung von Prompt-Templates und semi-automatisierte Erstellung von Fachinhalten."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Content-Distribution und -Optimierung",
          "description": "Intelligente Verteilung und kontinuierliche Leistungsoptimierung Ihrer Inhalte."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "B2B-Content-Spezialformate",
          "description": "Erstellung von Whitepapers, Case Studies und technischen Leitfäden mit KI-Unterstützung."
        }
      }
    ]
  }
};

export default function KIContentMarketingPage() {
  // Generate the structured data
  const serviceSchema = generateServiceSchema(serviceProps);
  const faqSchema = generateFAQSchema({
    id: '/leistungen/ki-content-marketing',
    questions: faqQuestions
  });

  return (
    <>
      {/* Add JSON-LD structured data */}
      <JsonLd jsonLd={serviceSchema} schemaId="service-schema-ki-content-marketing" />
      <JsonLd jsonLd={faqSchema} schemaId="faq-schema-ki-content-marketing" />
      
      {/* Hero Section */}
      <ServiceHero 
        title="KI-Content-Marketing B2B: Intelligente Inhaltsstrategien für Unternehmen"
        description="KI-Content-Marketing für B2B-Unternehmen ist ein strategischer Ansatz, der künstliche Intelligenz zur Entwicklung, Erstellung und Optimierung von Fachinhalten nutzt. Dieser Ansatz kombiniert datengetriebene Insights mit KI-gestützter Contenterstellung, um hochrelevante, zielgruppenspezifische Inhalte effizienter zu produzieren."
        ctaText="Content-Strategie anfragen"
        backgroundImage="/images/hero-ki-content-marketing.png"
      />
      
      {/* Service Features */}
      <ServiceFeatures
        title="Unsere KI-Content-Marketing-Strategie"
        description="Ein vierstufiger Prozess für effiziente und wirksame B2B-Kommunikation."
        features={serviceFeatures}
      />
      
      {/* Main Content Section with Sidebar */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content - Takes 2/3 of the space on large screens */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-semibold mb-6">KI-Texte für Unternehmenswebsites erstellen</h2>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <p className="font-medium">
                  KI-Texte für Unternehmenswebsites werden durch einen kontrollierten Prozess erstellt, der KI-Technologie mit menschlicher Expertise kombiniert. Dieser Prozess umfasst die Entwicklung präziser Prompt-Templates basierend auf Markenrichtlinien, die KI-gestützte Texterstellung mit integrierten SEO-Parametern, eine professionelle Redaktion zur Qualitätssicherung und die technische Optimierung für verschiedene digitale Kanäle.
                </p>
              </div>
              
              <div className="space-y-8 mb-12">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Website-Content-Strategie mit KI entwickeln</h3>
                  <p className="text-gray-700">
                    Wir analysieren datengetrieben Content-Gaps und die Wettbewerbslandschaft, identifizieren High-Potential-Themen mit KI-Unterstützung und entwickeln eine thematische Inhaltsarchitektur. Dabei priorisieren wir Inhalte basierend auf Business Impact und SEO-Potenzial.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Fachlich präzise B2B-Inhalte mit KI erstellen</h3>
                  <p className="text-gray-700">
                    Für jedes Projekt entwickeln wir branchenspezifische Prompt-Templates, integrieren Unternehmenswissen und Fachterminologie und achten auf die richtige Balance zwischen Fachtiefe und Verständlichkeit. Quellenintegration und Faktenchecks stellen die Glaubwürdigkeit sicher.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Content für die duale Sichtbarkeit optimieren</h3>
                  <p className="text-gray-700">
                    Unsere Inhalte werden sowohl für klassische Suchmaschinen als auch für KI-Assistenten strukturiert. Wir implementieren &quot;Answer Boxes&quot; für extrahierbare Antworten, nutzen Schema.org-Markup für verbesserte semantische Erfassung und optimieren Meta-Daten für beide Suchökosysteme.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Sidebar - Takes 1/3 of the space on large screens */}
            <div className="lg:col-span-1">
              <RelatedServices currentServiceId="ki-content-marketing" />
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <FAQSection 
        questions={faqQuestions}
        title="FAQs zum KI-Content-Marketing im B2B"
      />
      
      {/* CTA Section */}
      <ServiceCTA
        title="Bereit für effizientere B2B-Inhalte?"
        description="Entdecken Sie das KI-Potenzial Ihrer B2B-Inhalte und steigern Sie Ihre Content-Effizienz um bis zu 70%."
        buttonText="Content-Audit anfordern"
        buttonLink="/kontakt"
      />
    </>
  );
}