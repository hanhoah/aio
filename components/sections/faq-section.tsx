import React from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  questions: FAQItem[];
  title?: string;
}

export default function FAQSection({ 
  questions, 
  title = "Häufig gestellte Fragen"
}: FAQSectionProps) {
  return (
    <section className="py-12 bg-gradient-to-b from-blue-50/50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-10 text-center">{title}</h2>
        
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