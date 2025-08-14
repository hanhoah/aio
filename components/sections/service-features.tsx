import React from 'react';

interface Feature {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface ServiceFeaturesProps {
  title: string;
  description?: string;
  features: Feature[];
}

export default function ServiceFeatures({
  title,
  description,
  features
}: ServiceFeaturesProps) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-center">{title}</h2>
          {description && (
            <p className="text-lg text-gray-700 text-center">{description}</p>
          )}
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              {feature.icon && (
                <div className="mb-4 text-indigo-600">
                  {feature.icon}
                </div>
              )}
              <h3 className="text-xl font-medium mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}