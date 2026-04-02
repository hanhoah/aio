import {
  Zap,
  Bot,
  Code2,
  Search,
  FileText,
  Lightbulb,
} from "lucide-react";

export interface ServiceData {
  id: string;
  icon: any;
  title: string;
  description: string;
  link: string;
  isHighlighted?: boolean;
  benefits?: string[];
}

/**
 * SSOT: Alle Service-Daten für aio-consulting.de
 * Genutzt auf: Homepage, /leistungen, Navigation, Footer
 */
export const services: ServiceData[] = [
  {
    id: "ki-prozessautomatisierung",
    icon: Zap,
    title: "KI-Prozessautomatisierung",
    description:
      "Ich automatisiere Ihre manuellen Prozesse mit n8n und Claude API — von der Rechnungsverarbeitung bis zum E-Mail-Routing. Einmalig gebaut, dauerhaft Kosten gespart.",
    link: "/leistungen/ki-prozessautomatisierung",
    isHighlighted: true,
    benefits: [
      "50–80 % weniger Zeitaufwand bei Routinetätigkeiten",
      "Fehlerquote sinkt auf nahezu null (kein manuelles Kopieren)",
      "Automatisierungen laufen 24/7 ohne Ihr Zutun",
      "ROI typischerweise nach 2–3 Monaten erreicht",
    ],
  },
  {
    id: "custom-ai-agents",
    icon: Bot,
    title: "Custom AI Agents & Chatbots",
    description:
      "Ich baue Ihnen einen eigenen KI-Assistenten, der Ihre internen Daten kennt — Wissensdatenbank, Kundenservice-Bot oder interner Recherche-Agent.",
    link: "/leistungen/custom-ai-agents",
    isHighlighted: true,
    benefits: [
      "KI antwortet auf Basis Ihrer eigenen Dokumente & Daten",
      "Kundensupport-Volumen um bis zu 60 % reduzierbar",
      "Nahtlose Integration in bestehende Systeme (Slack, Website, CRM)",
      "Vollständige Kontrolle über Daten — kein Datenleck zu OpenAI",
    ],
  },
  {
    id: "ki-web-apps",
    icon: Code2,
    title: "KI-Web-Apps",
    description:
      "Maßgeschneiderte Web-Applikationen mit KI-Features: Dashboards, interne Tools, SaaS-Produkte — gebaut mit Next.js, TypeScript und direkter KI-Integration.",
    link: "/leistungen/ki-web-apps",
    benefits: [
      "Fertige Web-App in 4–8 Wochen statt 3–6 Monaten",
      "KI-Funktionen direkt eingebaut (kein nachträgliches Flickwerk)",
      "Skalierbare Architektur, die mit Ihrem Unternehmen wächst",
      "Vollständige Übergabe mit Code, Dokumentation und Training",
    ],
  },
  {
    id: "geo-ki-seo",
    icon: Search,
    title: "GEO & KI-SEO",
    description:
      "Ihre Website soll nicht nur bei Google ranken — sondern auch in ChatGPT, Perplexity und Google AI Overviews erscheinen. Ich optimiere für das KI-Zeitalter.",
    link: "/leistungen/geo-ki-seo",
    benefits: [
      "Sichtbarkeit in KI-Suchmaschinen (ChatGPT, Perplexity, Gemini)",
      "Strukturierte Daten & FAQ-Schema für maximale KI-Zitierrate",
      "Content-Tiefe, die KI-Systeme als autoritativ einstufen",
      "Monatliches Reporting mit messbaren Sichtbarkeits-KPIs",
    ],
  },
  {
    id: "ki-content-automatisierung",
    icon: FileText,
    title: "KI-Content-Automatisierung",
    description:
      "Ich baue Ihnen ein automatisiertes Content-System: Von der Themenrecherche über die KI-gestützte Erstellung bis zur automatischen Veröffentlichung.",
    link: "/leistungen/ki-content-automatisierung",
    benefits: [
      "Content-Produktion um Faktor 3–5x skalieren ohne Mehraufwand",
      "Konsistente Markensprache durch trainierte KI-Templates",
      "Automatische Veröffentlichung auf Website, LinkedIn & Co.",
      "Kosten pro Artikel um 60–70 % reduziert",
    ],
  },
  {
    id: "ki-beratung",
    icon: Lightbulb,
    title: "KI-Beratung & Strategie",
    description:
      "Sie wissen, dass KI Ihrem Unternehmen helfen kann — aber nicht wo anfangen? In 2 Stunden erstelle ich Ihre persönliche KI-Roadmap mit konkreten nächsten Schritten.",
    link: "/leistungen/ki-beratung",
    benefits: [
      "Konkrete KI-Roadmap: was lohnt sich, was nicht",
      "Priorisierte Quick-Wins mit sofort umsetzbaren Maßnahmen",
      "Ehrliche Einschätzung ohne Vendor-Lock-in oder Upsell-Druck",
      "Festpreis 300€ — kein stundenlanger Beratungsmarathon",
    ],
  },
];

export function getServiceById(id: string): ServiceData | undefined {
  return services.find((service) => service.id === id);
}

export function getAllServiceIds(): string[] {
  return services.map((service) => service.id);
}
