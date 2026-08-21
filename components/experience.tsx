"use client"

import { useRef, useEffect, useState } from "react"

const diferenciais = [
  {
    titulo: "Experiência técnica multidisciplinar",
    texto: "Atuação em licenciamento, resíduos, recursos hídricos, regularização fundiária e ESG sob um mesmo time.",
  },
  {
    titulo: "Conhecimento da legislação aplicável",
    texto: "Acompanhamento próximo das normas federais, estaduais e municipais que afetam o seu empreendimento.",
  },
  {
    titulo: "Atuação preventiva",
    texto: "Identificação antecipada de riscos ambientais, antes que se tornem multas, embargos ou paralisações.",
  },
  {
    titulo: "Suporte técnico especializado",
    texto: "Apoio à tomada de decisão, não apenas entrega de documentos — acompanhamos a operação junto com você.",
  },
  {
    titulo: "Do planejamento à operação",
    texto: "Capacidade de atender a demanda ambiental em qualquer fase do empreendimento, do projeto à rotina operacional.",
  },
  {
    titulo: "Compromisso técnico",
    texto: "Qualidade técnica, conformidade ambiental e segurança operacional em cada entrega.",
  },
]

const segmentosObras = [
  "Acompanhamento de atividades construtivas",
  "Verificação do atendimento às condicionantes ambientais",
  "Controle de aspectos ambientais em campo",
  "Identificação preventiva de desvios ambientais",
  "Elaboração de relatórios técnicos",
  "Interface entre engenharia, operação e meio ambiente",
  "Suporte para atendimento às exigências dos órgãos ambientais",
]

const segmentosIndustria = [
  "Gestão de requisitos legais ambientais",
  "Regularização ambiental",
  "Gerenciamento de resíduos",
  "Suporte técnico especializado",
  "Adequação às normas ambientais aplicáveis",
]

const empresasAtendidas = ["Consigaz", "Lactalis", "EPR"]

export function Experience() {
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
      id="experiencia"
      ref={sectionRef}
      className="bg-mist py-16 md:py-24 px-6 md:px-20"
    >
      {/* Bloco 1 — Por que contratar */}
      <div
        className={`max-w-[720px] transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <span className="text-[10.5px] font-semibold tracking-widest uppercase text-leaf mb-3 block">
          Por que a Campos
        </span>
        <h2 className="font-serif text-3xl md:text-4xl leading-tight text-pine mb-3">
          Por que contratar a Campos Consultoria Ambiental?
        </h2>
        <p className="text-[16.5px] text-charcoal leading-relaxed font-light">
          A Campos atua como uma consultoria ambiental estratégica, auxiliando empresas na
          prevenção de riscos ambientais, no atendimento às exigências legais e na manutenção da
          conformidade ambiental dos empreendimentos. Não nos limitamos à elaboração de documentos
          e estudos ambientais — oferecemos suporte técnico para a tomada de decisão,
          acompanhamento das demandas ambientais e solução de problemas relacionados à legislação
          vigente.
        </p>
      </div>

      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 transition-all duration-700 delay-150 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {diferenciais.map((item, i) => (
          <div key={i} className="bg-white rounded-3xl px-6 py-7">
            <div className="w-9 h-9 rounded-xl bg-foam text-forest flex items-center justify-center text-[13px] font-semibold mb-4">
              {String(i + 1).padStart(2, "0")}
            </div>
            <div className="text-[15px] font-medium mb-2 text-ink">{item.titulo}</div>
            <div className="text-[13px] text-charcoal leading-relaxed">{item.texto}</div>
          </div>
        ))}
      </div>

      {/* Bloco 2 — Experiência e Projetos Desenvolvidos */}
      <div
        className={`max-w-[720px] mt-16 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <span className="text-[10.5px] font-semibold tracking-widest uppercase text-leaf mb-3 block">
          Experiência
        </span>
        <h2 className="font-serif text-3xl md:text-4xl leading-tight text-pine mb-3">
          Experiência e Projetos Desenvolvidos
        </h2>
        <p className="text-[16.5px] text-charcoal leading-relaxed font-light">
          A Campos Consultoria Ambiental possui experiência no desenvolvimento de soluções
          ambientais para empresas de diferentes setores, contribuindo para a regularização
          ambiental, a gestão de requisitos legais, o acompanhamento técnico e a melhoria dos
          processos ambientais.
        </p>
      </div>

      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10 transition-all duration-700 delay-150 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="bg-white rounded-3xl px-7 py-9">
          <div className="text-[17px] font-medium mb-1 text-ink">
            Supervisão Ambiental de Obras e Infraestrutura
          </div>
          <div className="text-[13.5px] text-charcoal leading-relaxed mb-4">
            Gestão ambiental integrada ao cronograma e à execução das obras.
          </div>
          <ul className="list-none flex flex-col gap-1.5">
            {segmentosObras.map((s, i) => (
              <li key={i} className="text-[13px] text-charcoal flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-sage flex-shrink-0" />
                {s}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-3xl px-7 py-9">
          <div className="text-[17px] font-medium mb-1 text-ink">
            Indústria e Empresas Corporativas
          </div>
          <div className="text-[13.5px] text-charcoal leading-relaxed mb-4">
            Conformidade ambiental para operações industriais e corporativas.
          </div>
          <ul className="list-none flex flex-col gap-1.5">
            {segmentosIndustria.map((s, i) => (
              <li key={i} className="text-[13px] text-charcoal flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-sage flex-shrink-0" />
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Empresas atendidas */}
      <div
        className={`bg-white rounded-3xl px-7 py-7 mt-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4 transition-all duration-700 delay-150 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div>
          <span className="text-[10px] font-semibold tracking-widest uppercase text-leaf mb-2 block">
            Empresas atendidas
          </span>
          <p className="text-[13.5px] text-charcoal max-w-[480px]">
            Experiência desenvolvida junto a empresas dos segmentos de infraestrutura, indústria e
            serviços.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {empresasAtendidas.map((nome, i) => (
            <span
              key={i}
              className="text-[13px] font-medium px-3.5 py-1.5 rounded-full bg-foam text-forest"
            >
              {nome}
            </span>
          ))}
        </div>
      </div>

      {/* Chamada final */}
      <div
        className={`text-center mt-14 transition-all duration-700 delay-150 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <p className="font-serif italic text-lg md:text-xl text-pine max-w-[620px] mx-auto">
          Conte com uma equipe técnica especializada para avaliar as necessidades ambientais do seu
          empreendimento e desenvolver soluções adequadas à sua realidade.
        </p>
      </div>
    </section>
  )
}
