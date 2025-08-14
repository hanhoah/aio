import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const Hero = () => {
  return (
    <section className="relative text-white py-20 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/images/hero-background.png"
          alt="Digital background"
          fill
          priority
          className="object-cover object-center"
          style={{ opacity: 0.9 }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-30" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)' }}>
            Digitale Lösungen für die Zukunft Ihres Unternehmens
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8" style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)' }}>
            Wir entwickeln moderne Webpräsenzen und digitale Strategien, 
            die Ihr Unternehmen voranbringen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="font-medium text-base">
              <Link href="/#kontakt">
                Jetzt Kontakt aufnehmen
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-medium text-base border-white text-white bg-transparent hover:bg-white hover:text-black">
              <Link href="/#leistungen">
                Unsere Leistungen
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-primary opacity-20 blur-3xl z-0" />
    </section>
  )
}

export default Hero