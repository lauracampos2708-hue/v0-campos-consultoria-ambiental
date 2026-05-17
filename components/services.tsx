"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const tabs = [
  { key: "todos", label: "Todos" },
  { key: "lic", label: "Licenciamento" },
  { key: "res", label: "Gestão de resíduos" },
  { key: "rur", label: "Rural" },
  { key: "lot", label: "Regularização de loteamentos" },
  { key: "esg", label: "ESG & Sustentabilidade" },
  { key: "est", label: "Estudos & Laudos" },
]

const services = [
  // Licenciamento
  { icon: "📋", name: "Licenciamento Ambiental", desc: "Condução completa junto aos órgãos ambientais competentes.", category: "lic" },
  { icon: "🔍", name: "Auditoria Ambiental", desc: "Diagnóstico e verificação de conformidade com a legislação.", category: "lic" },
  { icon: "🌿", name: "Consultoria Ambiental", desc: "Assessoria estratégica de gestão ambiental para o seu negócio.", category: "lic" },
  { icon: "🏗️", name: "Plano de Gestão Ambiental", desc: "Elaboração e implementação de planos para empreendimentos.", category: "lic" },
  // Resíduos
  { icon: "♻️", name: "PGRS", desc: "Plano de Gerenciamento de Resíduos Sólidos.", category: "res" },
  { icon: "🏚️", name: "PGRCC", desc: "Resíduos da Construção Civil para obras e reformas.", category: "res" },
  { icon: "🏥", name: "PGRSS", desc: "Plano de Gerenciamento de Resíduos de Serviços de Saúde.", category: "res" },
  // Rural
  { icon: "🌾", name: "Cadastro Ambiental Rural (CAR)", desc: "Registro e regularização de imóveis no sistema CAR.", category: "rur" },
  { icon: "💧", name: "Outorga", desc: "Outorga de direito de uso de recursos hídricos.", category: "rur" },
  { icon: "🏡", name: "Regularização de Imóvel Rural", desc: "Regularização ambiental completa de propriedades rurais.", category: "rur" },
  { icon: "🌲", name: "Regularização para Colheita", desc: "Conformidade legal para colheita florestal e agrícola.", category: "rur" },
  // Loteamentos
  { icon: "🗺️", name: "Regularização de Loteamentos", desc: "Regularização fundiária e ambiental de loteamentos urbanos e rurais.", category: "lot" },
  { icon: "🏘️", name: "REURB", desc: "Regularização fundiária urbana de interesse específico e social.", category: "lot" },
  { icon: "📐", name: "Parcelamento do Solo", desc: "Análise ambiental para parcelamento e loteamento de solo.", category: "lot" },
  { icon: "🏙️", name: "Estudo de Impacto de Vizinhança (EIV)", desc: "Análise dos impactos de empreendimentos sobre a vizinhança urbana.", category: "lot" },
  { icon: "🏛️", name: "Relatório Ambiental Municipal (RAM)", desc: "Relatório técnico sobre a situação ambiental do município.", category: "lot" },
  // ESG
  { icon: "📑", name: "Relatório de Sustentabilidade", desc: "Documento estratégico que comunica desempenho ambiental, social e de governança — fortalece reputação, atrai investidores e amplia acesso a capital e mercados exigentes.", category: "esg", featured: true },
  { icon: "🌍", name: "Consultoria em Sustentabilidade", desc: "Estratégias ESG alinhadas ao negócio e ao mercado.", category: "esg" },
  { icon: "🌡️", name: "Inventário de Gases de Efeito Estufa", desc: "Quantificação e gestão das emissões de GEE.", category: "esg" },
  { icon: "📚", name: "Programa de Educação Ambiental (PEA)", desc: "Capacitação ambiental para equipes e comunidades.", category: "esg" },
  // Estudos
  { icon: "📄", name: "Laudos Ambientais e Defesas", desc: "Laudos técnicos e defesas de autuações ambientais.", category: "est" },
  { icon: "🔬", name: "Estudo de Alternativa Técnica", desc: "Análise comparativa de alternativas para empreendimentos.", category: "est" },
  { icon: "📊", name: "RAPP", desc: "Relatório Ambiental de Atividade e Processo.", category: "est" },
  { icon: "🌳", name: "PRAD", desc: "Plano de Recuperação de Áreas Degradadas.", category: "est" },
  { icon: "📝", name: "Relatório de Condicionantes Ambientais", desc: "Monitoramento das condicionantes das licenças.", category: "est" },
]

export function Services() {
  const [activeTab, setActiveTab] = useState("todos")
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

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

  const filteredServices = activeTab === "todos"
    ? services
    : services.filter(s => s.category === activeTab)

  return (
    <section
      id="servicos"
      ref={sectionRef}
      className="bg-white py-16 md:py-24 px-6 md:px-20"
    >
      {/* Header */}
      <div className={`flex flex-col lg:flex-row justify-between items-start lg:items-end mb-9 gap-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <div>
          <span className="text-[10.5px] font-semibold tracking-widest uppercase text-leaf mb-3 block">
            Serviços
          </span>
          <h2 className="font-serif text-3xl md:text-4xl leading-tight text-pine mb-3">
            Tudo para seu empreendimento
            <br />
            operar em conformidade
          </h2>
        </div>
        <p className="text-[16.5px] text-charcoal max-w-[560px] leading-relaxed font-light">
          Cobertura completa de conformidade ambiental — evitando multas, embargos e paralisações.
        </p>
      </div>

      {/* Tabs */}
      <div className={`flex gap-2 flex-wrap mb-7 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`text-[12.5px] font-medium px-4 py-2 rounded-full border cursor-pointer transition-all ${
              activeTab === tab.key
                ? "bg-forest text-white border-forest"
                : "bg-transparent text-slate border-line2 hover:border-sage hover:text-forest"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        {filteredServices.map((service, index) => {
          const isFeatured = (service as { featured?: boolean }).featured
          return (
            <Link
              key={index}
              href="#contato"
              className={`group no-underline cursor-pointer flex flex-col gap-2 relative overflow-hidden rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-lg ${
                isFeatured
                  ? "sm:col-span-2 bg-gradient-to-br from-forest to-pine border border-forest text-white hover:shadow-xl"
                  : "bg-snow border border-line hover:border-foam hover:bg-white"
              }`}
            >
              {/* Top accent line */}
              <div
                className={`absolute top-0 left-0 right-0 h-[2.5px] origin-left transition-transform group-hover:scale-x-100 ${
                  isFeatured ? "bg-gradient-to-r from-mint to-sage scale-x-100" : "bg-gradient-to-r from-sage to-mint scale-x-0"
                }`}
              />

              {isFeatured && (
                <span className="inline-flex items-center gap-1.5 self-start text-[9.5px] font-semibold tracking-[0.22em] uppercase text-mint mb-1">
                  <span className="inline-block w-1 h-1 rounded-full bg-mint" />
                  Serviço em destaque
                </span>
              )}

              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg ${
                  isFeatured ? "bg-white/15 backdrop-blur-sm" : "bg-mist"
                }`}
              >
                {service.icon}
              </div>
              <div
                className={`font-medium leading-snug ${
                  isFeatured ? "text-[18px] text-white font-serif mt-1" : "text-[14px] text-ink"
                }`}
              >
                {service.name}
              </div>
              <div
                className={`leading-relaxed flex-1 ${
                  isFeatured ? "text-[13.5px] text-white/85 max-w-[640px]" : "text-[12.5px] text-slate"
                }`}
              >
                {service.desc}
              </div>
              <ArrowUpRight
                className={`w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 ${
                  isFeatured ? "text-mint" : "text-sage"
                }`}
              />
            </Link>
          )
        })}
      </div>
    </section>
  )
}
