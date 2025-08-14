"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
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
          AIO Agentur
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
}

const NavLinks = ({ className, onClick }: NavLinksProps) => {
  return (
    <>
      <Link
        href="/"
        className={cn("hover:text-primary transition-colors", className)}
        onClick={onClick}
      >
        Startseite
      </Link>
      <Link
        href="/#leistungen"
        className={cn("hover:text-primary transition-colors", className)}
        onClick={onClick}
      >
        Leistungen
      </Link>
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