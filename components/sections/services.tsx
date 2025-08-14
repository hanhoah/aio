import React from "react"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { services as servicesData } from "@/data/services"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  link: string
  isHighlighted?: boolean
}

const ServiceCard = ({ icon, title, description, link, isHighlighted = false }: ServiceCardProps) => {
  return (
    <Link href={link} className="block group">
      <div className={`p-6 rounded-xl shadow-md border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-primary/30 ${
        isHighlighted 
          ? 'border-primary/50 bg-gradient-to-br from-white to-primary/10' 
          : 'border-blue-100/80 bg-gradient-to-br from-white to-blue-50/30'
      }`}>
        <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-5 transition-all duration-300 ${
          isHighlighted
            ? 'bg-primary text-white'
            : 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white'
        }`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center text-primary font-medium">
          Mehr erfahren <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  )
}

const Services = () => {
  // Prepare the services data with the icon components
  const services = servicesData.map(service => ({
    ...service,
    icon: <service.icon size={28} />
  }))

  return (
    <section id="leistungen" className="py-20 bg-gradient-to-b from-blue-50 via-indigo-50/30 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Unsere Leistungen</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Spezialisierte <span className="text-primary font-medium">KI-basierte Lösungen</span> für Ihre Website und Content-Strategie.
            Optimieren Sie Ihre digitale Präsenz für Suchmaschinen und KI-Assistenten.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard 
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
              isHighlighted={service.isHighlighted}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button asChild size="lg">
            <Link href="/leistungen">
              Alle Leistungen entdecken
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Services