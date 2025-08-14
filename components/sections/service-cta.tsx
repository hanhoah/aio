import React from 'react';
import Link from 'next/link';

interface ServiceCTAProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export default function ServiceCTA({
  title,
  description,
  buttonText = "Beratungsgespräch vereinbaren",
  buttonLink = "/kontakt"
}: ServiceCTAProps) {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-100 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">{title}</h2>
            <p className="text-lg text-gray-600 mb-8">{description}</p>
            <Link
              href={buttonLink}
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-8 py-3 rounded-md transition-colors duration-300"
            >
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}