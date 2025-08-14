import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { services } from '@/data/services';

interface RelatedServicesProps {
  currentServiceId: string;
  title?: string;
}

/**
 * Displays a sidebar with related services, excluding the current service
 */
export default function RelatedServices({ 
  currentServiceId, 
  title = "Weitere Leistungen" 
}: RelatedServicesProps) {
  // Filter out the current service and get the other services
  const relatedServices = services.filter(service => service.id !== currentServiceId);

  return (
    <aside className="bg-gray-50 rounded-lg p-6 shadow-sm border border-gray-100">
      <h3 className="text-xl font-semibold mb-6">{title}</h3>
      
      <div className="space-y-4">
        {relatedServices.map(service => (
          <Link 
            key={service.id}
            href={service.link}
            className="flex items-start p-3 bg-white rounded border border-gray-100 hover:border-indigo-200 hover:shadow-sm transition-all group"
          >
            <div className="mr-3 text-indigo-600 mt-1">
              <service.icon size={18} />
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-gray-900 group-hover:text-indigo-700 transition-colors">
                {service.title}
              </h4>
              <p className="text-sm text-gray-500 line-clamp-2 mt-1">
                {service.description}
              </p>
            </div>
            <div className="text-indigo-600 self-center transition-transform transform group-hover:translate-x-1">
              <ChevronRight size={16} />
            </div>
          </Link>
        ))}
        
        <Link 
          href="/leistungen"
          className="flex items-center justify-center w-full mt-4 py-2 px-4 text-indigo-600 hover:text-indigo-800 font-medium text-sm transition-colors"
        >
          Alle Leistungen anzeigen
        </Link>
      </div>
    </aside>
  );
}