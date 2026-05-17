"use client"

import Link from "next/link"
import Image from "next/image"
import { MessageCircle, ArrowRight, MapPin, Leaf } from "lucide-react"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] min-h-screen pt-[78px] lg:pt-[114px] overflow-hidden bg-snow"
    >
      {/* ============ LEFT CONTENT ============ */}
      <div className="relative flex flex-col justify-center px-6 py-20 md:px-14 lg:px-24 lg:py-24 z-10">
        {/* Soft ambient background */}
        <div
          aria-hidden
          className="absolute -top-32 -left-20 w-[480px] h-[480px] rounded-full blur-3xl opacity-40 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(194,232,210,0.6) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-2xl">
          {/* Eyebrow with ornamental line */}
          <div className="flex items-center gap-4 mb-8">
            <span className="w-12 h-px bg-forest/40" />
            <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-forest">
              Consultoria Ambiental
            </span>
          </div>

          {/* Title */}
          <h1 className="font-serif text-[42px] md:text-[56px] lg:text-[68px] leading-[1.02] text-pine mb-7 font-semibold tracking-tight text-balance">
            Soluções ambientais que{" "}
            <em className="italic text-leaf font-medium">transformam</em>{" "}
            negócios.
          </h1>

          {/* Description */}
          <p className="text-[18px] md:text-[19px] text-charcoal/90 leading-[1.65] max-w-[540px] mb-10 font-light">
            Gestão ambiental estratégica para empresas e produtores rurais.
            Regularização de empreendimentos evitando multas, embargos e
            paralisações — em todo o Brasil.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mb-14">
            <Link
              href="#servicos"
              className="group inline-flex items-center gap-2.5 text-[15px] font-medium px-8 py-4 rounded-full bg-forest text-white transition-all hover:bg-pine hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(26,92,56,0.35)]"
            >
              Ver nossos serviços
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="https://wa.me/5534991893211"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-[15px] font-medium px-8 py-4 rounded-full bg-transparent text-pine border border-pine/20 transition-all hover:border-forest hover:bg-white hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 text-whatsapp" />
              Fale pelo WhatsApp
            </a>
          </div>

          {/* Trust stats — elegant horizontal */}
          <div className="flex flex-wrap items-center gap-x-10 gap-y-6 pt-10 border-t border-pine/10">
            <div>
              <div className="font-serif text-[32px] font-semibold text-pine leading-none">
                24
                <span className="text-leaf">+</span>
              </div>
              <div className="text-[12px] text-slate uppercase tracking-[0.14em] mt-2">
                Serviços ambientais
              </div>
            </div>

            <div className="w-px h-12 bg-pine/10" />

            <div>
              <div className="font-serif text-[32px] font-semibold text-pine leading-none">
                BR
              </div>
              <div className="text-[12px] text-slate uppercase tracking-[0.14em] mt-2">
                Atuação nacional
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============ RIGHT VISUAL ============ */}
      <div className="relative overflow-hidden min-h-[620px] lg:min-h-0 bg-gradient-to-br from-pine via-forest to-pine">
        {/* Layered gradients for depth */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(126,205,160,0.18) 0%, transparent 65%), radial-gradient(ellipse 60% 50% at 80% 90%, rgba(0,0,0,0.35) 0%, transparent 65%)",
          }}
        />

        {/* Refined dot grid */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Fine grid lines overlay */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "120px 120px",
          }}
        />

        {/* Elegant frame corners */}
        <div
          aria-hidden
          className="absolute top-8 left-8 w-16 h-16 border-t border-l border-white/20"
        />
        <div
          aria-hidden
          className="absolute top-8 right-8 w-16 h-16 border-t border-r border-white/20"
        />
        <div
          aria-hidden
          className="absolute bottom-8 left-8 w-16 h-16 border-b border-l border-white/20"
        />
        <div
          aria-hidden
          className="absolute bottom-8 right-8 w-16 h-16 border-b border-r border-white/20"
        />

        {/* Center content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-8 py-16">
          {/* Concentric glow rings */}
          <div
            aria-hidden
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div className="w-[560px] h-[560px] rounded-full border border-white/[0.06]" />
            <div className="absolute w-[420px] h-[420px] rounded-full border border-white/[0.08]" />
            <div
              className="absolute w-[520px] h-[520px] rounded-full blur-3xl opacity-30"
              style={{
                background:
                  "radial-gradient(circle, rgba(126,205,160,0.55) 0%, transparent 70%)",
              }}
            />
          </div>

          {/* Logo + Name composition */}
          <div className="relative flex flex-col sm:flex-row items-center gap-6 sm:gap-8 max-w-[560px]">
            {/* Logo with refined frame */}
            <div className="relative group shrink-0">
              {/* Outer glow */}
              <div
                aria-hidden
                className="absolute -inset-8 rounded-full blur-3xl opacity-40"
                style={{
                  background:
                    "radial-gradient(circle, rgba(255,255,255,0.35) 0%, transparent 70%)",
                }}
              />

              {/* Logo card */}
              <div className="relative bg-white rounded-[24px] p-5 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.55)] animate-float">
                <Image
                  src="/logo.jpeg"
                  alt="Campos Consultoria Ambiental & Sustentabilidade"
                  width={300}
                  height={300}
                  priority
                  className="relative w-[180px] sm:w-[200px] lg:w-[220px] h-auto"
                />
              </div>

              {/* Gold corner accent */}
              <div
                aria-hidden
                className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 rounded-full bg-gradient-to-br from-[#e8b95a] to-[#c8973a] shadow-lg"
              />
            </div>

            {/* Name beside logo */}
            <div className="relative text-center sm:text-left">
              {/* Ornamental top line */}
              <div className="hidden sm:flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-mint/60" />
                <Leaf className="w-3.5 h-3.5 text-mint" strokeWidth={1.5} />
              </div>

              <h2 className="font-serif text-white text-[30px] sm:text-[34px] lg:text-[40px] leading-[1.05] font-semibold tracking-tight">
                Campos
              </h2>
              <div className="mt-2.5 mb-3 flex items-center gap-3 justify-center sm:justify-start">
                <span className="h-px w-10 bg-mint/50" />
                <span className="text-[10px] font-semibold text-mint/90 uppercase tracking-[0.32em]">
                  Consultoria
                </span>
              </div>
              <p className="font-serif italic text-white/85 text-[15px] sm:text-[16px] lg:text-[17px] tracking-wide leading-tight">
                Ambiental &amp;
                <br className="hidden sm:block" />{" "}
                Sustentabilidade
              </p>
            </div>
          </div>

          {/* Floating pill — Atuação Nacional */}
          <div
            className="hidden lg:flex absolute bottom-[14%] left-[8%] items-center gap-2.5 bg-white/95 backdrop-blur-md rounded-full px-4 py-2.5 shadow-xl animate-bounce-slow"
            style={{ animationDelay: "1.4s" }}
          >
            <div className="w-7 h-7 rounded-full bg-mist flex items-center justify-center">
              <MapPin className="w-3.5 h-3.5 text-forest" />
            </div>
            <span className="text-[12px] font-semibold text-pine pr-1">
              Atuação Nacional
            </span>
          </div>
        </div>

        {/* Bottom signature bar */}
        <div className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-center gap-3 py-5 border-t border-white/10 bg-pine/40 backdrop-blur-sm">
          <span className="text-[10px] text-white/70 uppercase tracking-[0.32em] font-medium">
            Desde o primeiro passo
          </span>
          <span className="w-1 h-1 rounded-full bg-mint/70" />
          <span className="text-[10px] text-white/70 uppercase tracking-[0.32em] font-medium">
            Até a regularização completa
          </span>
        </div>
      </div>
    </section>
  )
}
