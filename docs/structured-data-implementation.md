# Structured Data Implementation Guide

This guide explains how to implement structured data (JSON-LD) on the AIO Consulting website to enhance search engine visibility and provide better information to AI assistants like ChatGPT and Google Gemini.

## Overview

We use Schema.org structured data in JSON-LD format to provide search engines and AI assistants with detailed, structured information about our services, content, and FAQs. This implementation follows best practices for semantic web and helps improve visibility in both traditional search results and AI-generated answers.

## Implementation Components

1. **Utility Functions**: Located in `/lib/schema.ts` and `/lib/jsonld.tsx`
2. **Schema Templates**: Located in `/seo/schema-examples/`
3. **Page Integration**: Examples in service pages like `/app/leistungen/llm-optimierung/page.tsx`

## How to Implement JSON-LD on a Page

### Step 1: Import the Required Components

```tsx
import JsonLd from '@/lib/jsonld';
import { generateServiceSchema, generateFAQSchema } from '@/lib/schema';
```

### Step 2: Define Schema Properties

For services, define the service properties:

```tsx
const serviceProps = {
  id: '/leistungen/your-service',
  name: 'Your Service Name',
  url: '/leistungen/your-service',
  description: 'Detailed description of your service',
  serviceType: 'Service Category',
  price: '4800.00',
  priceCurrency: 'EUR',
  areaServed: ['Deutschland', 'Österreich', 'Schweiz'],
  hasOfferCatalog: {
    // Catalog details here
  }
};
```

For FAQs, define the questions and answers:

```tsx
const faqQuestions = [
  {
    question: 'Question 1?',
    answer: 'Answer to question 1.'
  },
  {
    question: 'Question 2?',
    answer: 'Answer to question 2.'
  }
  // Additional questions
];
```

### Step 3: Generate the Schema Data

```tsx
const serviceSchema = generateServiceSchema(serviceProps);
const faqSchema = generateFAQSchema({
  id: '/leistungen/your-service',
  questions: faqQuestions
});
```

### Step 4: Add the JSON-LD to your Page Component

```tsx
export default function YourServicePage() {
  // Generate schema data as in Step 3
  
  return (
    <>
      <JsonLd jsonLd={serviceSchema} schemaId="service-schema-your-service" />
      <JsonLd jsonLd={faqSchema} schemaId="faq-schema-your-service" />
      
      {/* Page content */}
    </>
  );
}
```

## Available Schema Types

1. **Service Schema**: For all service pages
2. **FAQ Schema**: For pages with frequently asked questions
3. **Organization Schema**: For the organization (already implemented)
4. **Website Schema**: For the website itself (already implemented)

## Tips for Creating Effective Structured Data

1. **Be Specific and Accurate**: Provide detailed, accurate information about your services.
2. **Use Clear Descriptions**: Write clear, concise descriptions that accurately represent the content.
3. **Include Pricing**: When applicable, include pricing information for services.
4. **Link Related Entities**: Use `@id` references to connect related entities (like services to the organization).
5. **Validate Your Schema**: Use the [Google Rich Results Test](https://search.google.com/test/rich-results) to validate your schema before deployment.

## FAQs for Structured Data Implementation

### How do I validate my JSON-LD implementation?

Use the [Google Rich Results Test](https://search.google.com/test/rich-results) or [Schema.org Validator](https://validator.schema.org/) to check your implementation.

### Should I implement schema on all pages?

Focus on the most important pages first:
- Home page (Website and Organization schema)
- Service pages (Service and FAQ schema)
- About page (Organization schema)
- Contact page (basic Organization schema)

### How often should I update the structured data?

Update your structured data whenever you make significant changes to your services, pricing, or FAQ content.

## Resources

- [Schema.org Documentation](https://schema.org/docs/schemas.html)
- [Google Search Central: Structured Data](https://developers.google.com/search/docs/advanced/structured-data/intro-structured-data)
- [JSON-LD Playground](https://json-ld.org/playground/)