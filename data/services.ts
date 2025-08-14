import { 
  Globe, 
  Search, 
  BrainCircuit,
  PenSquare
} from "lucide-react";

export interface ServiceData {
  id: string;
  icon: any; // Using any for the Lucide icon component
  title: string;
  description: string;
  link: string;
  isHighlighted?: boolean;
  benefits?: string[]; // Optional benefits for the service overview page
}

/**
 * Central data source for all services offered by AIO Consulting
 * This data is used across the website including:
 * - Homepage service section
 * - Services overview page
 * - Navigation menus
 */
export const services: ServiceData[] = [
  {
    id: "llm-optimierung",
    icon: BrainCircuit,
    title: "KI-Website-Optimierung",
    description: "Optimierung Ihrer Website für das KI-Zeitalter, mit dualer Sichtbarkeit in Suchmaschinen und KI-Assistenten.",
    link: "/leistungen/llm-optimierung",
    isHighlighted: true,
    benefits: [
      "Erhöhte Zitierfrequenz in KI-Antworten",
      "Verbesserte Informationsextraktion durch KI-Systeme",
      "Erhöhte Themenautorität",
      "Wettbewerbsvorsprung im wachsenden Markt der KI-gestützten Informationssuche"
    ]
  },
  {
    id: "ki-seo",
    icon: Search,
    title: "KI-SEO",
    description: "KI-gestützte Suchmaschinenoptimierung mit präziserer Nutzerintentionsanalyse und verbesserten Rankings in modernen Suchmaschinen.",
    link: "/leistungen/ki-seo",
    benefits: [
      "Präzisere Datenanalyse und Entscheidungsfindung",
      "Effizientere Prozesse durch Automatisierung",
      "Höhere Wettbewerbsfähigkeit durch prädiktive Strategien",
      "Bessere Anpassungsfähigkeit an Algorithmus-Updates"
    ]
  },
  {
    id: "ki-content-marketing",
    icon: Globe,
    title: "KI-Content-Marketing",
    description: "Strategischer Einsatz von KI zur Entwicklung, Erstellung und Optimierung von B2B-Fachinhalten für maximale Effizienz.",
    link: "/leistungen/ki-content-marketing",
    benefits: [
      "Reduzierung der Content-Erstellungszeit um 50-70%",
      "Konsistente Markensprache über alle Inhalte hinweg",
      "Datenbasierte Themenauswahl statt subjektiver Einschätzungen",
      "Bewältigung größerer Content-Volumina ohne Personalaufstockung"
    ]
  },
  {
    id: "prompt-engineering",
    icon: PenSquare,
    title: "Prompt Engineering",
    description: "Strategische Entwicklung von Prompts für KI-Systeme zur Erstellung hochwertiger, SEO-optimierter Webinhalte.",
    link: "/leistungen/prompt-engineering",
    benefits: [
      "Signifikante Zeit- und Kostenersparnis bei der Content-Erstellung",
      "Konsistentere Markensprache über alle Inhalte hinweg",
      "Verbesserte SEO-Performance durch systematisch optimierte Texte",
      "Höhere Skalierbarkeit der Content-Produktion"
    ]
  }
];

/**
 * Helper function to get a specific service by ID
 */
export function getServiceById(id: string): ServiceData | undefined {
  return services.find(service => service.id === id);
}

/**
 * Helper function to get all service IDs
 */
export function getAllServiceIds(): string[] {
  return services.map(service => service.id);
}