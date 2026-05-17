const stats = [
  { value: "24+", label: "Serviços especializados" },
  { value: "100%", label: "Atendimento Brasil" },
  { value: "CREA", label: "Registro profissional" },
  { value: "ESG", label: "Estratégia & conformidade" },
]

export function StatsBand() {
  return (
    <div className="bg-pine flex flex-wrap">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="flex-1 min-w-[50%] md:min-w-0 py-6 md:py-8 px-4 text-center border-r border-white/[0.08] last:border-r-0"
        >
          <div className="font-serif text-[26px] md:text-[30px] text-mint leading-none mb-1">
            {stat.value}
          </div>
          <div className="text-[11px] font-normal text-white/50 uppercase tracking-wider">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  )
}
