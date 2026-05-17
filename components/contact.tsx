"use client"

import { useRef, useEffect, useState } from "react"
import { MessageCircle, MapPin, Phone, Instagram } from "lucide-react"

const serviceOptions = [
  "Licenciamento Ambiental",
  "Auditoria Ambiental",
  "Regularização de Loteamentos / REURB",
  "CAR — Cadastro Ambiental Rural",
  "PGRS / PGRCC / PGRSS",
  "ESG & Sustentabilidade",
  "Inventário de GEE",
  "Estudos e Laudos Ambientais",
  "Outro serviço",
]

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const [form, setForm] = useState({
    nome: "",
    empresa: "",
    telefone: "",
    email: "",
    servico: "",
    mensagem: "",
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.08 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const texto = `
Olá! Vim pelo site e gostaria de solicitar uma proposta.

👤 *Nome:* ${form.nome}
🏢 *Empresa:* ${form.empresa}
📱 *Telefone:* ${form.telefone}
📧 *E-mail:* ${form.email}
🌿 *Serviço de interesse:* ${form.servico}
💬 *Mensagem:* ${form.mensagem}
    `.trim()

    const url = `https://wa.me/5534991893211?text=${encodeURIComponent(texto)}`
    window.open(url, "_blank")
    setIsSubmitted(true)
  }

  return (
    <section
      id="contato"
      ref={sectionRef}
      className="bg-snow py-16 md:py-24 px-6 md:px-20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-9 lg:gap-18 items-start">
        {/* Contact Info */}
        <div className={`flex flex-col gap-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div>
            <span className="text-[10.5px] font-semibold tracking-widest uppercase text-leaf mb-3 block">
              Contato
            </span>
            <h2 className="font-serif text-3xl md:text-4xl leading-tight text-pine mb-3">
              Fale com um especialista
            </h2>
            <p className="text-[16.5px] text-charcoal max-w-[560px] leading-relaxed font-light">
              Atendemos empresas e produtores rurais em todo o Brasil. Entre em contato para um diagnóstico inicial.
            </p>
          </div>

          <div className="flex gap-3.5 items-start">
            <div className="w-[42px] h-[42px] rounded-xl bg-mist border border-foam flex items-center justify-center flex-shrink-0">
              <Phone className="w-4 h-4 text-forest" />
            </div>
            <div>
              <div className="text-[10px] font-semibold tracking-wider uppercase text-slate mb-0.5">WhatsApp &amp; Telefone</div>
              <div className="text-[14.5px] font-medium text-ink">(34) 99189-3211</div>
              <div className="text-[12.5px] text-slate mt-0.5">Atendimento em horário comercial</div>
            </div>
          </div>

          <div className="flex gap-3.5 items-start">
            <div className="w-[42px] h-[42px] rounded-xl bg-mist border border-foam flex items-center justify-center flex-shrink-0">
              <MapPin className="w-4 h-4 text-forest" />
            </div>
            <div>
              <div className="text-[10px] font-semibold tracking-wider uppercase text-slate mb-0.5">Sede</div>
              <div className="text-[14.5px] font-medium text-ink">Uberlândia — MG</div>
              <div className="text-[12.5px] text-slate mt-0.5">Atendimento remoto para todo o Brasil</div>
            </div>
          </div>

          <div className="flex gap-3.5 items-start">
            <div className="w-[42px] h-[42px] rounded-xl bg-mist border border-foam flex items-center justify-center flex-shrink-0">
              <Instagram className="w-4 h-4 text-forest" />
            </div>
            <div>
              <div className="text-[10px] font-semibold tracking-wider uppercase text-slate mb-0.5">Instagram</div>
              <div className="text-[14.5px] font-medium text-ink">@camposconsultoriaambiental</div>
            </div>
          </div>

          <a
            href="https://wa.me/5534991893211"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 text-[15px] font-medium py-3.5 rounded-xl bg-whatsapp text-white transition-all hover:bg-[#1db954] hover:-translate-y-0.5 hover:shadow-[0_4px_18px_rgba(37,211,102,0.35)]">
            <MessageCircle className="w-4 h-4" />
            Enviar mensagem no WhatsApp
          </a>
        </div>

        {/* Form */}
        <div className={`bg-white border border-line rounded-3xl p-6 md:p-9 shadow-sm transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h3 className="font-serif text-[22px] text-pine mb-5">Solicite uma proposta</h3>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-medium text-charcoal tracking-wide">Nome completo</label>
                <input
                  name="nome"
                  type="text"
                  required
                  placeholder="Seu nome"
                  value={form.nome}
                  onChange={handleChange}
                  className="text-[14px] border border-line2 rounded-xl px-3.5 py-2.5 bg-snow text-ink outline-none transition-all focus:border-sage focus:shadow-[0_0_0_3px_rgba(74,170,114,0.12)]"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-medium text-charcoal tracking-wide">Empresa</label>
                <input
                  name="empresa"
                  type="text"
                  placeholder="Razão social ou nome"
                  value={form.empresa}
                  onChange={handleChange}
                  className="text-[14px] border border-line2 rounded-xl px-3.5 py-2.5 bg-snow text-ink outline-none transition-all focus:border-sage focus:shadow-[0_0_0_3px_rgba(74,170,114,0.12)]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-medium text-charcoal tracking-wide">Telefone / WhatsApp</label>
                <input
                  name="telefone"
                  type="tel"
                  required
                  placeholder="(00) 00000-0000"
                  value={form.telefone}
                  onChange={handleChange}
                  className="text-[14px] border border-line2 rounded-xl px-3.5 py-2.5 bg-snow text-ink outline-none transition-all focus:border-sage focus:shadow-[0_0_0_3px_rgba(74,170,114,0.12)]"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-medium text-charcoal tracking-wide">E-mail</label>
                <input
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={form.email}
                  onChange={handleChange}
                  className="text-[14px] border border-line2 rounded-xl px-3.5 py-2.5 bg-snow text-ink outline-none transition-all focus:border-sage focus:shadow-[0_0_0_3px_rgba(74,170,114,0.12)]"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5 mb-3">
              <label className="text-[11px] font-medium text-charcoal tracking-wide">Serviço de interesse</label>
              <select
                name="servico"
                required
                value={form.servico}
                onChange={handleChange}
                className="text-[14px] border border-line2 rounded-xl px-3.5 py-2.5 bg-snow text-ink outline-none transition-all focus:border-sage focus:shadow-[0_0_0_3px_rgba(74,170,114,0.12)]"
              >
                <option value="">Selecione um serviço</option>
                {serviceOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1.5 mb-3">
              <label className="text-[11px] font-medium text-charcoal tracking-wide">Mensagem</label>
              <textarea
                name="mensagem"
                placeholder="Descreva brevemente sua necessidade..."
                value={form.mensagem}
                onChange={handleChange}
                className="text-[14px] border border-line2 rounded-xl px-3.5 py-2.5 bg-snow text-ink outline-none transition-all focus:border-sage focus:shadow-[0_0_0_3px_rgba(74,170,114,0.12)] resize-y min-h-[92px]"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitted}
              className={`w-full text-[14px] font-medium py-3.5 rounded-xl border-none cursor-pointer transition-all ${isSubmitted
                ? "bg-leaf text-white"
                : "bg-forest text-white hover:bg-pine hover:-translate-y-0.5 hover:shadow-lg"
                } disabled:cursor-not-allowed`}
            >
              {isSubmitted
                ? "✓ WhatsApp aberto com seus dados!"
                : "Enviar solicitação →"}
            </button>
          </form>
        </div>
      </div>
    </section >
  )
}