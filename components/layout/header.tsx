"use client"

import React, { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="font-bold text-2xl text-primary">
          AIO Consulting
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <NavLinks className="text-base font-medium" />
        </nav>

        {/* Mobile Navigation Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Menü schließen" : "Menü öffnen"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <NavLinks
              className="text-lg"
              onClick={() => setIsMenuOpen(false)}
              isMobile={true}
            />
          </nav>
        </div>
      )}
    </header>
  )
}

type NavLinksProps = {
  className?: string
  onClick?: () => void
  isMobile?: boolean
}

const NavLinks = ({ className, onClick, isMobile = false }: NavLinksProps) => {
  const [servicesOpen, setServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!isMobile) {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setServicesOpen(false)
        }
      }
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }
  }, [isMobile])

  // Services dropdown items
  const serviceItems = [
    { href: "/leistungen/ki-content-marketing", label: "KI-Content-Marketing" },
    { href: "/leistungen/ki-seo", label: "KI-SEO" },
    { href: "/leistungen/llm-optimierung", label: "LLM-Optimierung" },
    { href: "/leistungen/prompt-engineering", label: "Prompt Engineering" }
  ]

  // Toggle dropdown for mobile
  const handleServicesToggle = () => {
    setServicesOpen(!servicesOpen)
  }

  return (
    <>
      <Link
        href="/"
        className={cn("hover:text-primary transition-colors", className)}
        onClick={onClick}
      >
        Startseite
      </Link>
      
      {/* Services dropdown */}
      <div className="relative" ref={dropdownRef}>
        <button
          className={cn(
            "flex items-center hover:text-primary transition-colors", 
            className
          )}
          onClick={handleServicesToggle}
          onMouseEnter={() => !isMobile && setServicesOpen(true)}
        >
          Leistungen
          <ChevronDown className="ml-1 h-4 w-4" />
        </button>
        
        {servicesOpen && (
          <div 
            className={cn(
              "absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1 z-10",
              isMobile && "relative shadow-none w-full pl-4"
            )}
            onMouseLeave={() => !isMobile && setServicesOpen(false)}
          >
            <Link
              href="/leistungen"
              className="block px-4 py-2 text-sm text-indigo-700 font-medium border-b border-gray-100"
              onClick={() => {
                setServicesOpen(false)
                onClick && onClick()
              }}
            >
              Alle Leistungen
            </Link>
            {serviceItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => {
                  setServicesOpen(false)
                  onClick && onClick()
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
      
      <Link
        href="/#ueber-uns"
        className={cn("hover:text-primary transition-colors", className)}
        onClick={onClick}
      >
        Über uns
      </Link>
      <Link
        href="/#kontakt"
        className={cn("hover:text-primary transition-colors", className)}
        onClick={onClick}
      >
        Kontakt
      </Link>
    </>
  )
}

export default Header