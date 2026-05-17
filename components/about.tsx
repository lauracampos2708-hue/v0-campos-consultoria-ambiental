"use client"

import { useRef, useEffect, useState } from "react"

const values = [
  {
    num: "01",
    name: "Ética e transparência",
    desc: "Integridade em cada etapa, com clareza nos processos, prazos e resultados.",
  },
  {
    num: "02",
    name: "Responsabilidade socioambiental",
    desc: "Projetos que preservam o meio ambiente e promovem o desenvolvimento responsável.",
  },
  {
    num: "03",
    name: "Inovação e excelência técnica",
    desc: "Soluções atualizadas com as exigências regulatórias e as melhores práticas.",
  },
  {
    num: "04",
    name: "Segurança jurídica para o negócio",
    desc: "Prevenimos multas, embargos e passivos ambientais — operação em plena conformidade.",
  },
]

export function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.08 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="sobre" ref={sectionRef} className="bg-mist py-16 md:py-24 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        {/* Intro */}
        <div
          className={`text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <span className="text-[10.5px] font-semibold tracking-widest uppercase text-leaf mb-3 block">
            Sobre nós
          </span>
          <h2 className="font-serif text-3xl md:text-4xl leading-tight text-pine mb-4 text-balance">
            Expertise técnica com responsabilidade ambiental
          </h2>
          <p className="text-[16.5px] text-charcoal max-w-[680px] mx-auto leading-relaxed font-light text-pretty">
            A Campos Consultoria Ambiental é especialista em gestão ambiental e sustentabilidade, com foco em soluções
            que visam a conformidade legal de empreendimentos — evitando multas, embargos e interrupções na atividade.
            Atendimento em todo o Brasil, com sede em Uberlândia–MG.
          </p>
        </div>

        {/* Mission Card */}
        <div
          className={`bg-white border border-foam border-l-[3px] border-l-leaf rounded-xl px-6 py-6 md:px-8 md:py-7 my-10 max-w-[720px] mx-auto transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="text-[10px] font-semibold tracking-widest uppercase text-leaf mb-2">Nossa missão</div>
          <p className="font-serif text-[16px] md:text-[17px] text-ink leading-relaxed italic text-pretty">
            &ldquo;Auxiliar empresas e produtores rurais na regularização e gestão ambiental de seus empreendimentos,
            garantindo conformidade com as exigências dos órgãos ambientais — com ética, técnica e compromisso com o
            desenvolvimento sustentável.&rdquo;
          </p>
        </div>

        {/* Values */}
        <div
          className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="text-center mb-8">
            <span className="text-[10px] font-semibold tracking-widest uppercase text-leaf block">Nossos valores</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {values.map((val, index) => (
              <div
                key={index}
                className="bg-white border border-foam rounded-xl p-5 md:p-6 flex gap-4 items-start transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="font-serif text-3xl text-foam leading-none flex-shrink-0 w-10">{val.num}</div>
                <div>
                  <div className="text-[14px] font-medium text-ink mb-1">{val.name}</div>
                  <div className="text-[13px] text-slate leading-relaxed">{val.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
