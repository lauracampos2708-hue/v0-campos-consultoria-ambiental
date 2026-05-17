import Link from "next/link"
import Image from "next/image"
import { Instagram, MessageCircle, Phone } from "lucide-react"

const serviceLinks = [
  { href: "#servicos", label: "Licenciamento Ambiental" },
  { href: "#servicos", label: "Auditoria Ambiental" },
  { href: "#servicos", label: "Regularização de Loteamentos" },
  { href: "#servicos", label: "Gestão de Resíduos" },
  { href: "#servicos", label: "CAR & Rural" },
  { href: "#servicos", label: "ESG & Sustentabilidade" },
]

const companyLinks = [
  { href: "#sobre", label: "Sobre nós" },
  { href: "#processo", label: "Como trabalhamos" },
  { href: "#esg", label: "ESG" },
  { href: "#contato", label: "Contato" },
  { href: "https://wa.me/5534991893211", label: "WhatsApp", external: true },
  { href: "https://www.instagram.com/camposconsultoriambiental", label: "Instagram", external: true },
]

export function Footer() {
  return (
    <footer className="bg-pine px-6 md:px-20 pt-12 md:pt-13 pb-7 text-white/55">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-13 mb-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2.5 mb-3.5">
            <Image
              src="/logo.jpeg"
              alt="Campos Consultoria"
              width={38}
              height={38}
              className="object-contain rounded-md bg-white p-1"
            />
            <span className="font-serif text-[17px] text-white">
              Campos Consultoria
            </span>
          </div>
          <p className="text-[13px] leading-relaxed max-w-[290px] mb-4">
            Soluções ambientais estratégicas para empresas e produtores rurais. Conformidade legal, inovação e responsabilidade ambiental em todo o Brasil.
          </p>
          <div className="flex gap-2">
            <a
              href="https://www.instagram.com/camposconsultoriambiental"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[34px] h-[34px] rounded-lg bg-white/[0.07] border border-white/[0.12] flex items-center justify-center transition-all hover:bg-white/[0.16] hover:-translate-y-0.5"
            >
              <Instagram className="w-3.5 h-3.5 text-white/70" />
            </a>
            <a
              href="https://wa.me/5534991893211"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[34px] h-[34px] rounded-lg bg-white/[0.07] border border-white/[0.12] flex items-center justify-center transition-all hover:bg-white/[0.16] hover:-translate-y-0.5"
            >
              <MessageCircle className="w-3.5 h-3.5 text-white/70" />
            </a>
            <a
              href="tel:+5534991893211"
              className="w-[34px] h-[34px] rounded-lg bg-white/[0.07] border border-white/[0.12] flex items-center justify-center transition-all hover:bg-white/[0.16] hover:-translate-y-0.5"
            >
              <Phone className="w-3.5 h-3.5 text-white/70" />
            </a>
          </div>
        </div>

        {/* Services Links */}
        <div>
          <h4 className="text-[10.5px] font-semibold tracking-widest uppercase text-white/35 mb-3.5">
            Serviços
          </h4>
          <ul className="list-none flex flex-col gap-2">
            {serviceLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="text-[13.5px] text-white/55 no-underline transition-colors hover:text-mint"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="text-[10.5px] font-semibold tracking-widest uppercase text-white/35 mb-3.5">
            Empresa
          </h4>
          <ul className="list-none flex flex-col gap-2">
            {companyLinks.map((link, index) => (
              <li key={index}>
                {link.external ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13.5px] text-white/55 no-underline transition-colors hover:text-mint"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    className="text-[13.5px] text-white/55 no-underline transition-colors hover:text-mint"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-2.5 pt-5 border-t border-white/[0.08] text-[11.5px]">
        <div>
          © 2025 Campos Consultoria Ambiental &amp; Sustentabilidade. Todos os direitos reservados.
        </div>
        <div className="flex items-center gap-2">
          <span className="bg-mint/15 border border-mint/30 rounded-md px-2.5 py-1 text-[11px] font-medium text-mint">
            CREA nº 468259MG
          </span>
        </div>
      </div>
    </footer>
  )
}
