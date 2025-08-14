"use client"

import React from "react"
import Link from "next/link"
import getLegalData from "@/lib/legal"
import { services } from "@/data/services"

const Footer = () => {
  const legal = getLegalData();
  const { company, legal: legalInfo, socialMedia } = legal;
  const currentYear = new Date().getFullYear();
  const copyrightYear = legalInfo.copyright.year;
  
  // Zeige das aktuelle Jahr oder eine Spanne, wenn das Copyright-Jahr in der Vergangenheit liegt
  const copyrightYearDisplay = 
    copyrightYear === currentYear 
      ? currentYear 
      : `${copyrightYear}-${currentYear}`;

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{company.name}</h3>
            <p className="text-gray-300 mb-4">
              Ihre Full-Service-Agentur für digitale Lösungen und kreatives
              Marketing.
            </p>
            
            {/* Social Media Links */}
            {Object.keys(socialMedia).length > 0 && (
              <div className="flex space-x-4 mt-4">
                {socialMedia.facebook && (
                  <a 
                    href={socialMedia.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors"
                    aria-label="Facebook"
                  >
                    FB
                  </a>
                )}
                {socialMedia.instagram && (
                  <a 
                    href={socialMedia.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors"
                    aria-label="Instagram"
                  >
                    IG
                  </a>
                )}
                {socialMedia.linkedin && (
                  <a 
                    href={socialMedia.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    LI
                  </a>
                )}
                {socialMedia.twitter && (
                  <a 
                    href={socialMedia.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors"
                    aria-label="Twitter"
                  >
                    TW
                  </a>
                )}
              </div>
            )}
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Leistungen</h3>
            <ul className="space-y-2">
              {services.map(service => (
                <li key={service.id}>
                  <Link 
                    href={service.link} 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  href="/leistungen" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Alle Leistungen
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Kontakt</h3>
            <address className="text-gray-300 not-italic">
              <p>{company.street}</p>
              <p>{company.zipCode} {company.city}</p>
              <p className="mt-2">{company.email}</p>
              <p>{company.phone}</p>
            </address>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/impressum" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link 
                  href="/datenschutz" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {copyrightYearDisplay} {legalInfo.copyright.holder}. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
