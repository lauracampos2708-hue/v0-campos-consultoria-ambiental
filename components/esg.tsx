"use client"

import { useRef, useEffect, useState } from "react"

const esgCards = [
  {
    letter: "E",
    tag: "Environmental",
    title: "Gestão Ambiental",
    desc: "Conformidade, redução de impactos e preservação dos recursos naturais.",
    items: [
      "Inventário de emissões GEE",
      "Planos de gestão ambiental",
      "Licenciamento e auditoria",
      "Recuperação de áreas degradadas",
    ],
    variant: "e",
  },
  {
    letter: "S",
    tag: "Social",
    title: "Impacto Social",
    desc: "Programas que engajam comunidades e colaboradores no compromisso ambiental.",
    items: [
      "Educação ambiental (PEA)",
      "Estudo de impacto de vizinhança",
      "Regularização fundiária",
      "Engajamento comunitário",
    ],
    variant: "s",
  },
  {
    letter: "G",
    tag: "Governance",
    title: "Governança",
    desc: "Conformidade e transparência que fortalecem a credibilidade do negócio.",
    items: [
      "Relatórios de condicionantes",
      "Laudos técnicos e defesas",
      "Consultoria em sustentabilidade",
      "Relatório de Sustentabilidade",
    ],
    variant: "g",
  },
]

const variantStyles = {
  e: {
    bg: "bg-gradient-to-br from-mist to-snow",
    bigColor: "text-forest",
    tagBg: "bg-foam",
    tagColor: "text-forest",
  },
  s: {
    bg: "bg-gradient-to-br from-[#f3f0e6] to-[#fdfbf4]",
    bigColor: "text-[#7a6030]",
    tagBg: "bg-[#e8dfc0]",
    tagColor: "text-[#5a4218]",
  },
  g: {
    bg: "bg-gradient-to-br from-[#eef0f9] to-[#f6f7fc]",
    bigColor: "text-[#3a4fa0]",
    tagBg: "bg-[#c8ccee]",
    tagColor: "text-[#2c3880]",
  },
}

export function ESG() {
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
      id="esg"
      ref={sectionRef}
      className="bg-white py-16 md:py-24 px-6 md:px-20"
    >
      {/* Header */}
      <div className={`text-center max-w-[640px] mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <span className="text-[10.5px] font-semibold tracking-widest uppercase text-leaf mb-3 block">
          ESG
        </span>
        <h2 className="font-serif text-3xl md:text-4xl leading-tight text-pine mb-3">
          Sustentabilidade que gera valor
        </h2>
        <p className="text-[16.5px] text-charcoal max-w-[560px] mx-auto leading-relaxed font-light">
          Integramos as dimensões ambiental, social e de governança para posicionar sua empresa no mercado.
        </p>
      </div>

      {/* Cards */}
      <div className={`grid grid-cols-1 lg:grid-cols-3 gap-5 mt-13 transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        {esgCards.map((card, index) => {
          const styles = variantStyles[card.variant as keyof typeof variantStyles]
          return (
            <div
              key={index}
              className={`${styles.bg} rounded-3xl px-7 py-9 relative overflow-hidden`}
            >
              {/* Big Letter */}
              <div className={`font-serif text-[72px] italic absolute top-3 right-4 opacity-[0.08] leading-none ${styles.bigColor}`}>
                {card.letter}
              </div>
              
              {/* Tag */}
              <span className={`text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full inline-block mb-2.5 ${styles.tagBg} ${styles.tagColor}`}>
                {card.tag}
              </span>
              
              <div className="text-[17px] font-medium mb-2 text-ink">
                {card.title}
              </div>
              <div className="text-[13.5px] text-charcoal leading-relaxed mb-4">
                {card.desc}
              </div>
              
              <ul className="list-none flex flex-col gap-1.5">
                {card.items.map((item, i) => (
                  <li key={i} className="text-[13px] text-charcoal flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-sage flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </section>
  )
}
