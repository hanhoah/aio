import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AIO Consulting | Moderne Webentwicklung & Digitale Lösungen",
  description: "Ihre Full-Service-Agentur für digitale Lösungen, Webentwicklung und kreatives Marketing.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  )
}