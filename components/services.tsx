"use client"

import { useState, useRef, useEffect } from "react"
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
  { icon: "🛡️", name: "Plano de Controle Ambiental (PCA)", desc: "Medidas de controle e mitigação de impactos para a licença.", category: "lic" },
  { icon: "🧭", name: "Programas Ambientais", desc: "Elaboração e execução dos programas exigidos nas licenças.", category: "lic" },
  { icon: "🔍", name: "Auditoria Ambiental", desc: "Diagnóstico e verificação de conformidade com a legislação.", category: "lic" },
  { icon: "🌿", name: "Consultoria Ambiental", desc: "Assessoria estratégica de gestão ambiental para o seu negócio.", category: "lic" },
  { icon: "🏗️", name: "Plano de Gestão Ambiental", desc: "Elaboração e implementação de planos para empreendimentos.", category: "lic" },
  // Resíduos
  { icon: "♻️", name: "PGRS", desc: "Plano de Gerenciamento de Resíduos Sólidos.", category: "res", link: "/pgrs-uberlandia.html" },
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
  { icon: "👥", name: "Diagnóstico Socioambiental
