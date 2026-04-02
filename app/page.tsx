import React from "react"
import Hero from "@/components/sections/hero"
import Services from "@/components/sections/services"
import Stats from "@/components/sections/stats"
import Process from "@/components/sections/process"
import About from "@/components/sections/about"
import Contact from "@/components/sections/contact"

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Stats />
      <Process />
      <About />
      <Contact />
    </>
  )
}
