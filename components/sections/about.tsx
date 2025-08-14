import React from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const About = () => {
  return (
    <section id="ueber-uns" className="py-20 bg-gradient-to-b from-gray-100 to-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Über uns</h2>
            <p className="text-lg text-gray-800 mb-6">
              Die AIO Consulting steht für kreative Lösungen und technische Exzellenz. 
              Als Full-Service-Digitalagentur unterstützen wir Unternehmen jeder Größe 
              dabei, im digitalen Zeitalter erfolgreich zu sein.
            </p>
            <p className="text-lg text-gray-800 mb-6">
              Unser Team aus erfahrenen Entwicklern, Designern und Marketing-Experten 
              arbeitet Hand in Hand, um maßgeschneiderte Konzepte zu entwickeln, die 
              perfekt zu Ihren Zielen und Anforderungen passen.
            </p>
            <p className="text-lg text-gray-800 mb-8">
              Wir glauben an langfristige Partnerschaften und setzen auf transparente 
              Kommunikation und agile Arbeitsmethoden, um Ihr Projekt zum Erfolg zu führen.
            </p>
            <Button asChild>
              <Link href="/#kontakt">
                Lernen Sie uns kennen
              </Link>
            </Button>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-xl">
            <Image 
              src="/images/aboutus.png"
              alt="AIO Consulting Team"
              width={1200}
              height={675}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About