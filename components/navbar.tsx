"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Phone, Menu, X, MessageCircle, ArrowRight } from "lucide-react"

const navLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#processo", label: "Processo" },
  { href: "#esg", label: "ESG" },
  { href: "#contato", label: "Contato" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const closeMobile = () => setMobileOpen(false)

  return (
    <>
      {/* Top announcement bar */}
      <div className="hidden lg:flex fixed top-0 left-0 right-0 z-50 h-9 items-center justify-center bg-pine text-white/90 text-[11.5px] tracking-wide px-6">
        <span className="flex items-center gap-6">
          <span className="flex items-center gap-2">
            <span className="inline-block w-1 h-1 rounded-full bg-mint animate-pulse" />
            Atuação nacional em todo o território brasileiro
          </span>
          <span className="h-3 w-px bg-white/20" />
          <span>Atendimento de segunda a sexta, 8h às 18h</span>
        </span>
      </div>

      <nav
        className={`fixed left-0 right-0 z-50 h-[78px] flex items-center bg-snow/92 backdrop-blur-xl border-b border-line/80 transition-all duration-300 ${
          scrolled ? "shadow-[0_8px_30px_rgba(15,42,29,0.06)] top-0" : "lg:top-9 top-0"
        }`}
      >
        <div className="w-full max-w-[1320px] mx-auto px-5 md:px-10 flex items-center justify-between gap-8">
          {/* Brand */}
          <Link
            href="#inicio"
            className="flex items-center gap-3 no-underline shrink-0 group"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-xl bg-mint/0 group-hover:bg-mint/40 transition-colors duration-500 blur-md" />
              <Image
                src="/logo.jpeg"
                alt="Campos Consultoria"
                width={48}
                height={48}
                className="relative rounded-xl object-contain ring-1 ring-line/70"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-serif text-[18px] text-pine font-semibold tracking-tight whitespace-nowrap">
                Campos Consultoria
              </span>
              <span className="text-[9px] font-semibold tracking-[0.24em] text-slate uppercase mt-1.5 whitespace-nowrap">
                Ambiental &amp; Sustentabilidade
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-1 list-none">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative text-[13px] font-medium text-charcoal/80 no-underline px-4 py-2 rounded-full transition-all duration-300 hover:text-pine hover:bg-mint/30 whitespace-nowrap"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Right */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Link
              href="tel:+5534991893211"
              className="group flex items-center gap-2.5 text-[12.5px] font-medium text-charcoal transition-all"
            >
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-mist border border-line2/80 group-hover:bg-forest group-hover:border-forest transition-all">
                <Phone className="w-3.5 h-3.5 text-forest group-hover:text-white transition-colors" strokeWidth={2.2} />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-[9.5px] uppercase tracking-[0.2em] text-slate font-semibold">
                  Fale agora
                </span>
                <span className="text-[13px] font-semibold text-pine">
                  (34) 99189-3211
                </span>
              </span>
            </Link>

            <span className="h-10 w-px bg-line/80" />

            <Link
              href="#contato"
              className="group relative inline-flex items-center gap-2 text-[13px] font-semibold px-5 py-3 rounded-full bg-pine text-white transition-all duration-300 hover:bg-forest hover:shadow-[0_10px_30px_-8px_rgba(15,42,29,0.5)] overflow-hidden"
            >
              <span className="relative z-10">Falar com especialista</span>
              <ArrowRight className="relative z-10 w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={2.5} />
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="flex lg:hidden items-center justify-center w-10 h-10 rounded-full border border-line2 bg-white cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-5 h-5 text-ink" />
            ) : (
              <Menu className="w-5 h-5 text-ink" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-[70px] left-0 right-0 z-40 bg-snow/98 backdrop-blur-xl px-6 py-5 pb-8 border-b border-line flex flex-col transition-all duration-300 ${
          mobileOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={closeMobile}
            className="flex items-center justify-between text-[16px] font-medium text-ink no-underline py-3.5 border-b border-line last:border-none"
          >
            {link.label}
            <ArrowRight className="w-4 h-4 text-slate" />
          </Link>
        ))}
        <a
          href="https://wa.me/5534991893211"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full mt-4 bg-whatsapp text-white border-none rounded-full text-[14px] font-semibold py-3.5 text-center flex items-center justify-center gap-2"
        >
          <MessageCircle className="w-4 h-4" />
          WhatsApp — (34) 99189-3211
        </a>
        <Link
          href="#contato"
          onClick={closeMobile}
          className="w-full mt-2.5 bg-pine text-white rounded-full text-[14px] font-semibold py-3.5 text-center flex items-center justify-center gap-2"
        >
          Falar com especialista
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </>
  )
}
