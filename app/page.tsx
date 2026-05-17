import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { StatsBand } from "@/components/stats-band"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Process } from "@/components/process"
import { ESG } from "@/components/esg"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { WhatsAppFAB } from "@/components/whatsapp-fab"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <StatsBand />
      <Services />
      <About />
      <Process />
      <ESG />
      <Contact />
      <Footer />
      <WhatsAppFAB />
    </>
  )
}
