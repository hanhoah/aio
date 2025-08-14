import React from "react"
import { 
  Globe, 
  SmartphoneIcon, 
  BarChart3, 
  Search, 
  BrainCircuit,
  ChevronRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

type ServiceProps = {
  icon: React.ReactNode
  title: string
  description: string
  link: string
  isHighlighted?: boolean
}

const ServiceCard = ({ icon, title, description, link, isHighlighted = false }: ServiceProps) => {
  return (
    <div className={`p-6 rounded-xl shadow-md border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group ${
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
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Button variant="link" className="p-0 text-primary font-medium" asChild>
        <Link href={link} className="flex items-center">
          Mehr erfahren <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </Button>
    </div>
  )
}

const Services = () => {
  const services = [
    {
      icon: <BrainCircuit size={28} />,
      title: "KI-Website-Optimierung",
      description: "Optimierung Ihrer Website für das KI-Zeitalter, mit dualer Sichtbarkeit in Suchmaschinen und KI-Assistenten.",
      link: "/leistungen/llm-optimierung",
      isHighlighted: true
    },
    {
      icon: <Search size={28} />,
      title: "KI-SEO",
      description: "KI-gestützte Suchmaschinenoptimierung mit präziserer Nutzerintentionsanalyse und verbesserten Rankings in modernen Suchmaschinen.",
      link: "/leistungen/ki-seo"
    },
    {
      icon: <Globe size={28} />,
      title: "LLM-Optimierung",
      description: "Spezialisierte Optimierung von Webinhalten für Large Language Models wie ChatGPT und Google Gemini.",
      link: "/leistungen/llm-optimierung"
    },
    {
      icon: <BarChart3 size={28} />,
      title: "KI-Content-Marketing",
      description: "Strategischer Einsatz von KI zur Entwicklung, Erstellung und Optimierung von B2B-Fachinhalten für maximale Effizienz.",
      link: "/leistungen/ki-content-marketing"
    },
    {
      icon: <SmartphoneIcon size={28} />,
      title: "Prompt Engineering",
      description: "Strategische Entwicklung von Prompts für KI-Systeme zur Erstellung hochwertiger, SEO-optimierter Webinhalte.",
      link: "/leistungen/prompt-engineering"
    }
  ]

  return (
    <section id="leistungen" className="py-20 bg-gradient-to-b from-blue-50 via-indigo-50/30 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Unsere Leistungen</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Von der Konzeption bis zur Umsetzung bieten wir Ihnen alle Dienstleistungen aus einer Hand.
            Spezialisiert auf <span className="text-primary font-medium">KI-basierte Lösungen</span> für die digitale Transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
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
            <Link href="/#kontakt">
              Unverbindliches Beratungsgespräch vereinbaren
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Services