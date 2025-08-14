import React from 'react';

interface JsonLdProps {
  jsonLd: string;
  schemaId: string;
}

export default function JsonLd({ jsonLd, schemaId }: JsonLdProps) {
  return (
    <script
      id={schemaId}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLd }}
    />
  );
}