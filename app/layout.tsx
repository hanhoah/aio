import type { Metadata } from "next"
import { Inter, Syne } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import Chatbot from "@/components/ui/chatbot"
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "600", "700", "800"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://aio-consulting.de"),
  title: {
    default: "KI-Prozessautomatisierung & Custom AI Agents | aio-consulting.de",
    template: "%s | aio-consulting.de",
  },
  description:
    "Han Hoa Huynh baut Custom AI Agents, Chatbots und KI-Automatisierungen für mittelständische Unternehmen. ROI in 4–8 Wochen messbar. Kein Agentur-Overhead.",
  keywords: [
    "KI Beratung Mittelstand",
    "Custom AI Agent entwickeln",
    "n8n Automatisierung beauftragen",
    "RAG Chatbot für Unternehmen",
    "KI-gestützte Webentwicklung",
    "KI-Prozessautomatisierung",
    "Generative Engine Optimization",
    "KI-Berater Deutschland",
    "Han Hoa Huynh",
    "aio-consulting",
  ],
  authors: [{ name: "Han Hoa Huynh", url: "https://aio-consulting.de" }],
  creator: "Han Hoa Huynh",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://aio-consulting.de",
    title: "KI-Prozessautomatisierung & Custom AI Agents | Han Hoa Huynh",
    description:
      "Ich baue Custom AI Agents, Chatbots und KI-Automatisierungen für mittelständische Unternehmen. ROI in 4–8 Wochen messbar.",
    siteName: "aio-consulting.de",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Han Hoa Huynh — KI-Entwickler & Berater für Mittelstand",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KI-Automatisierung & Custom AI Agents | Han Hoa Huynh",
    description: "Custom AI Agents, Chatbots und KI-Prozessautomatisierungen für KMUs — ROI in 4–8 Wochen.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://aio-consulting.de",
  },
}

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Han Hoa Huynh",
  jobTitle: "KI-Berater & Entwickler",
  url: "https://aio-consulting.de",
  email: "info@aio-consulting.de",
  sameAs: ["https://www.linkedin.com/in/han-hoa-huynh-8738aa39/"],
  knowsAbout: [
    "Artificial Intelligence",
    "Process Automation",
    "RAG Systems",
    "Large Language Models",
    "n8n Automation",
    "Next.js",
    "TypeScript",
    "KI-Beratung",
    "Generative Engine Optimization",
  ],
  worksFor: {
    "@type": "Organization",
    name: "aio-consulting.de",
    url: "https://aio-consulting.de",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "152/65 đường Nguyễn Văn Thương, Phường 25",
    addressLocality: "Bình Thạnh, Ho Chi Minh City",
    addressCountry: "VN",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className={`${inter.variable} ${syne.variable} font-sans`}>
        <Header />
        <main className="min-h-screen pt-0">{children}</main>
        <Footer />
        <Chatbot />
        <Analytics />
      </body>
    </html>
  )
}
