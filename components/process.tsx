"use client"

import { useRef, useEffect, useState } from "react"

const steps = [
  {
    num: 1,
    title: "Diagnóstico inicial",
    desc: "Análise da situação atual e dos requisitos legais aplicáveis.",
  },
  {
    num: 2,
    title: "Planejamento estratégico",
    desc: "Plano de ação com prazos, custos e etapas para regularização.",
  },
  {
    num: 3,
    title: "Execução e documentação",
    desc: "Elaboração de estudos e documentos técnicos com rigor e qualidade.",
  },
  {
    num: 4,
    title: "Acompanhamento e entrega",
    desc: "Monitoramento junto ao órgão até a obtenção da licença ou aprovação.",
  },
]

export function Process() {
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

  return (
    <section
      id="processo"
      ref={sectionRef}
      className="bg-pine py-16 md:py-24 px-6 md:px-20"
    >
      {/* Header */}
      <div className={`text-center max-w-[600px] mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <span className="text-[10.5px] font-semibold tracking-widest uppercase text-mint mb-3 block">
          Como trabalhamos
        </span>
        <h2 className="font-serif text-3xl md:text-4xl leading-tight text-white mb-3">
          Do diagnóstico à regularização
        </h2>
        <p className="text-[16.5px] text-white/55 max-w-[560px] mx-auto leading-relaxed">
          Um processo estruturado que garante eficiência, conformidade e resultados concretos.
        </p>
      </div>

      {/* Steps */}
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-13 relative transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        {/* Connecting line - only visible on desktop */}
        <div className="hidden lg:block absolute top-[27px] left-20 right-20 h-px bg-gradient-to-r from-transparent via-mint/30 to-transparent" />
        
        {steps.map((step, index) => (
          <div key={index} className="px-5 text-center">
            <div className="w-[54px] h-[54px] rounded-full bg-forest border border-leaf flex items-center justify-center mx-auto mb-4 relative z-10">
              <span className="font-serif text-xl text-mint">{step.num}</span>
            </div>
            <div className="text-[14px] font-medium text-white mb-1.5 leading-snug">
              {step.title}
            </div>
            <div className="text-[13px] text-white/50 leading-relaxed">
              {step.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
