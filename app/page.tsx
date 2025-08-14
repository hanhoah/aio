import React from "react"
import Hero from "@/components/sections/hero"
import Services from "@/components/sections/services"
import About from "@/components/sections/about"
import Contact from "@/components/sections/contact"

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Contact />
    </>
  )
}