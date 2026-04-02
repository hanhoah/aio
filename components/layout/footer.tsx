"use client"

import React from "react"
import Link from "next/link"
import getLegalData from "@/lib/legal"
import { services } from "@/data/services"

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
)

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
  </svg>
)

const Footer = () => {
  const legal = getLegalData()
  const { company, legal: legalInfo, socialMedia } = legal
  const currentYear = new Date().getFullYear()
  const copyrightYear = legalInfo.copyright.year
  const copyrightYearDisplay =
    copyrightYear === currentYear ? currentYear : `${copyrightYear}-${currentYear}`

  return (
    <footer className="bg-[#080d1a] text-white border-t border-white/5">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="font-display font-bold text-xl tracking-tight mb-4">
              aio<span className="text-cyan-400">-consulting</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              KI-Entwickler & Berater für mittelständische Unternehmen.
              Automatisierungen, Chatbots und KI-Web-Apps — direkt, ohne Agentur-Overhead.
            </p>

            <div className="flex items-center gap-3">
              {socialMedia.linkedin && (
                <a
                  href={socialMedia.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-blue-600/20 flex items-center justify-center text-slate-400 hover:text-blue-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon />
                </a>
              )}
              {socialMedia.whatsapp && (
                <a
                  href={socialMedia.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-green-600/20 flex items-center justify-center text-slate-400 hover:text-green-400 transition-colors"
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon />
                </a>
              )}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Leistungen</h3>
            <ul className="space-y-2.5">
              {services.map(service => (
                <li key={service.id}>
                  <Link
                    href={service.link}
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Kontakt</h3>
            <address className="text-slate-400 text-sm not-italic space-y-2">
              <p className="font-medium text-white">Han Hoa Huynh</p>
              <p>{company.street}</p>
              <p>{company.city}</p>
              <p>{company.country}</p>
              <a href={`mailto:${company.email}`} className="block mt-3 hover:text-white transition-colors">
                {company.email}
              </a>
              <p className="text-slate-500 text-xs mt-1">Antwort innerhalb von 24 Stunden</p>
            </address>
          </div>

          {/* Rechtliches + CTA */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Rechtliches</h3>
            <ul className="space-y-2.5 mb-8">
              <li>
                <Link href="/impressum" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Datenschutz
                </Link>
              </li>
            </ul>

            <Link
              href="/#kontakt"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-colors cursor-pointer"
            >
              Projekt anfragen →
            </Link>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {copyrightYearDisplay} Han Hoa Huynh — aio-consulting.de
          </p>
          <p className="text-slate-600 text-xs">
            AI Optimization · KMU · Deutschland
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
