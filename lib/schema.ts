// Interface for the common Service schema properties
interface ServiceSchemaProps {
  id: string;
  name: string;
  url: string;
  description: string;
  serviceType: string;
  price?: string;
  priceCurrency?: string;
  // Optional additional properties
  areaServed?: string[];
  hasOfferCatalog?: any;
}

// Interface for the FAQ schema properties
interface FAQSchemaProps {
  id: string;
  questions: Array<{
    question: string;
    answer: string;
  }>;
}

/**
 * Generates a Service schema for a service page
 * @param props Service schema properties
 * @returns JSON-LD schema as a string
 */
export function generateServiceSchema({ 
  id, 
  name, 
  url, 
  description, 
  serviceType,
  price = "5000.00",
  priceCurrency = "EUR",
  areaServed = ["Deutschland", "Österreich", "Schweiz"],
  hasOfferCatalog
}: ServiceSchemaProps): string {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://www.aio-consulting.de${id}#service`,
    "name": name,
    "url": `https://www.aio-consulting.de${url}`,
    "description": description,
    "provider": {
      "@id": "https://www.aio-consulting.de/#organization"
    },
    "serviceType": serviceType,
    "category": "Digital Marketing",
    "areaServed": areaServed.map(country => ({
      "@type": "Country",
      "name": country
    })),
    "offers": {
      "@type": "Offer",
      "name": name,
      "description": description,
      "price": price,
      "priceCurrency": priceCurrency,
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": price,
        "priceCurrency": priceCurrency,
        "valueAddedTaxIncluded": false
      },
      "itemOffered": {
        "@type": "Service",
        "name": `${name} Basispaket`,
        "description": `Analyse, Strategie und Implementierung der wichtigsten ${name}-Maßnahmen für Ihre Website.`
      }
    },
    "hasOfferCatalog": hasOfferCatalog,
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://www.aio-consulting.de/kontakt",
      "providesService": {
        "@id": `https://www.aio-consulting.de${id}#service`
      },
      "serviceLocation": {
        "@type": "Place",
        "name": "AIO Consulting Büro",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Elisabeth-Selbert-Str. 17",
          "addressLocality": "Mülheim an der Ruhr",
          "postalCode": "45473",
          "addressCountry": "DE"
        }
      }
    }
  };

  return JSON.stringify(schemaData);
}

/**
 * Generates a FAQ schema for a page
 * @param props FAQ schema properties
 * @returns JSON-LD schema as a string
 */
export function generateFAQSchema({ id, questions }: FAQSchemaProps): string {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `https://www.aio-consulting.de${id}#faqpage`,
    "mainEntity": questions.map(({ question, answer }) => ({
      "@type": "Question",
      "name": question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": answer
      }
    }))
  };

  return JSON.stringify(schemaData);
}