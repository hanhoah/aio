import React from "react"
import { ChevronRight } from "lucide-react"
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
    <Link href={link} className="block group cursor-pointer">
      <div className={`relative p-6 rounded-xl border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full ${
        isHighlighted
          ? "border-blue-400/50 bg-gradient-to-br from-blue-950 to-slate-900 shadow-[0_0_40px_rgba(59,130,246,0.12)]"
          : "border-slate-200 bg-white hover:border-blue-300/60 shadow-sm"
      }`}>
        {isHighlighted && (
          <div className="absolute -top-3 left-6">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-600 text-white shadow-sm">
              Empfohlen
            </span>
          </div>
        )}

        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 ${
          isHighlighted
            ? "bg-blue-500/20 text-cyan-400 group-hover:bg-blue-500/30"
            : "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white"
        }`}>
          {icon}
        </div>

        <h3 className={`text-lg font-bold mb-3 transition-colors leading-snug ${
          isHighlighted
            ? "text-white group-hover:text-cyan-300"
            : "text-slate-900 group-hover:text-blue-600"
        }`}>
          {title}
        </h3>

        <p className={`text-sm leading-relaxed mb-5 ${
          isHighlighted ? "text-slate-400" : "text-slate-600"
        }`}>
          {description}
        </p>

        <div className={`flex items-center text-sm font-medium transition-colors ${
          isHighlighted
            ? "text-cyan-400 group-hover:text-cyan-300"
            : "text-blue-600 group-hover:text-blue-500"
        }`}>
          Mehr erfahren
          <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  )
}

const Services = () => {
  const services = servicesData.map(service => ({
    ...service,
    icon: <service.icon size={24} />,
  }))

  return (
    <section id="leistungen" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="mb-3 text-sm font-mono text-blue-600 tracking-wider uppercase">
            Was ich baue
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Meine Leistungen
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Keine generischen KI-Demos — sondern{" "}
            <span className="text-blue-600 font-semibold">Lösungen, die in Ihrem Unternehmen wirklich laufen.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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

        <div className="text-center">
          <Link
            href="/leistungen"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-600 font-medium text-sm transition-all duration-200 hover:bg-blue-50 cursor-pointer"
          >
            Alle Leistungen im Detail
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Services
