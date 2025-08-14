import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ServiceHeroProps {
  title: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
}

export default function ServiceHero({
  title,
  description,
  ctaText = "Kostenfreies Audit anfordern",
  ctaLink = "/kontakt",
  backgroundImage
}: ServiceHeroProps) {
  return (
    <section className={`py-24 relative overflow-hidden ${!backgroundImage ? 'bg-gradient-to-br from-indigo-100 via-blue-50 to-white' : ''}`}>
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image 
            src={backgroundImage} 
            alt=""
            fill
            sizes="100vw"
            priority
            quality={90}
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-indigo-900/60 mix-blend-multiply backdrop-blur-[2px]"></div>
        </div>
      )}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className={`text-4xl md:text-5xl font-bold mb-8 ${backgroundImage ? 'text-white' : 'text-gray-900'}`}>
            {title}
          </h1>
          
          <div className="bg-white p-6 rounded-lg shadow-md mb-8 border-l-4 border-indigo-600">
            <p className="text-lg text-gray-700 font-medium">{description}</p>
          </div>
          
          <Link 
            href={ctaLink}
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-8 py-4 rounded-md transition-colors duration-300"
          >
            {ctaText}
          </Link>
        </div>
      </div>
    </section>
  );
}