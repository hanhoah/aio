"use client"

import React, { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { services } from "@/data/services"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-slate-100"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          href="/"
          className={cn(
            "font-display font-bold text-xl tracking-tight transition-colors",
            isScrolled ? "text-slate-900" : "text-white"
          )}
        >
          aio<span className={isScrolled ? "text-blue-600" : "text-cyan-400"}>-consulting</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <NavLinks isScrolled={isScrolled} />
          <Link
            href="/#kontakt"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all duration-200 cursor-pointer"
          >
            Erstberatung — kostenlos
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "md:hidden p-2 rounded-lg transition-colors",
            isScrolled ? "text-slate-700 hover:bg-slate-100" : "text-white hover:bg-white/10"
          )}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Menü schließen" : "Menü öffnen"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-lg">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-1">
            <MobileNavLinks onClick={() => setIsMenuOpen(false)} />
            <div className="pt-4 border-t border-slate-100 mt-2">
              <Link
                href="/#kontakt"
                className="block w-full text-center px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-colors cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Erstberatung — kostenlos
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

type NavLinksProps = {
  isScrolled: boolean
}

const NavLinks = ({ isScrolled }: NavLinksProps) => {
  const [servicesOpen, setServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const linkClass = cn(
    "text-sm font-medium transition-colors cursor-pointer",
    isScrolled ? "text-slate-700 hover:text-blue-600" : "text-slate-300 hover:text-white"
  )

  return (
    <>
      <Link href="/#leistungen" className={linkClass}>
        Leistungen
      </Link>

      <div className="relative" ref={dropdownRef}>
        <button
          className={cn("flex items-center gap-1", linkClass)}
          onMouseEnter={() => setServicesOpen(true)}
          onClick={() => setServicesOpen(!servicesOpen)}
        >
          Einzelne Services
          <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", servicesOpen && "rotate-180")} />
        </button>

        {servicesOpen && (
          <div
            className="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-20"
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              href="/leistungen"
              className="block px-4 py-2.5 text-sm text-blue-600 font-semibold border-b border-slate-100 hover:bg-blue-50 transition-colors"
              onClick={() => setServicesOpen(false)}
            >
              Alle Leistungen →
            </Link>
            {services.map((service) => (
              <Link
                key={service.id}
                href={service.link}
                className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors"
                onClick={() => setServicesOpen(false)}
              >
                {service.title}
              </Link>
            ))}
          </div>
        )}
      </div>

      <Link href="/#ueber-mich" className={linkClass}>
        Über mich
      </Link>
    </>
  )
}

type MobileNavLinksProps = {
  onClick: () => void
}

const MobileNavLinks = ({ onClick }: MobileNavLinksProps) => {
  const [servicesOpen, setServicesOpen] = useState(false)

  const linkClass = "block px-3 py-2.5 rounded-lg text-slate-700 hover:bg-slate-50 hover:text-blue-600 font-medium text-sm transition-colors cursor-pointer"

  return (
    <>
      <Link href="/" className={linkClass} onClick={onClick}>
        Startseite
      </Link>
      <Link href="/#leistungen" className={linkClass} onClick={onClick}>
        Leistungen
      </Link>

      <div>
        <button
          className={cn(linkClass, "w-full flex items-center justify-between")}
          onClick={() => setServicesOpen(!servicesOpen)}
        >
          Einzelne Services
          <ChevronDown className={cn("h-4 w-4 transition-transform", servicesOpen && "rotate-180")} />
        </button>
        {servicesOpen && (
          <div className="pl-4 mt-1 space-y-1">
            {services.map((service) => (
              <Link
                key={service.id}
                href={service.link}
                className="block px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-blue-600 text-sm transition-colors cursor-pointer"
                onClick={onClick}
              >
                {service.title}
              </Link>
            ))}
          </div>
        )}
      </div>

      <Link href="/#ueber-mich" className={linkClass} onClick={onClick}>
        Über mich
      </Link>
    </>
  )
}

export default Header
