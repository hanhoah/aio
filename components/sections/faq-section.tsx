import React from 'react';
import Image from 'next/image';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  questions: FAQItem[];
  title?: string;
  backgroundImage?: string;
}

export default function FAQSection({ 
  questions, 
  title = "Häufig gestellte Fragen",
  backgroundImage
}: FAQSectionProps) {
  return (
    <section className={`py-12 relative ${!backgroundImage ? 'bg-gradient-to-b from-blue-50/50 to-white' : ''}`}>
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image 
            src={backgroundImage} 
            alt=""
            fill
            sizes="100vw"
            priority={false}
            quality={85}
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
          {/* Minimale Überblendung für besseren Kontrast */}
          <div className="absolute inset-0 bg-blue-900/10 backdrop-blur-[1px]"></div>
        </div>
      )}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-center mb-10">
          <h2 className="text-3xl font-semibold relative inline-block px-6 py-2 bg-white/60 backdrop-blur-sm rounded-lg shadow-sm text-gray-900">{title}</h2>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {questions.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
            >
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer p-6">
                  <h3 className="text-xl font-medium text-gray-800">{faq.question}</h3>
                  <span className="transition-transform duration-300 group-open:rotate-180">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      strokeWidth={2} 
                      stroke="currentColor" 
                      className="w-6 h-6 text-indigo-600"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 pt-2 text-gray-600">
                  <p>{faq.answer}</p>
                </div>
              </details>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}