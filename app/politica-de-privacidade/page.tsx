import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Privacidade | Campos Consultoria Ambiental",
  description:
    "Saiba como a Campos Consultoria Ambiental coleta, utiliza e protege seus dados pessoais, conforme a LGPD (Lei nº 13.709/2018).",
}

const EMAIL_CONTATO = "contato@camposconsultoriaambiental.com.br"
const TELEFONE_CONTATO = "(34) 99189-3211"

export default function PoliticaDePrivacidade() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 text-gray-800">
      <h1 className="mb-2 text-3xl font-bold">Política de Privacidade</h1>
      <p className="mb-10 text-sm text-gray-500">Última atualização: 26 de outubro de 2026</p>

      <section className="space-y-4">
        <p>
          A <strong>Campos Consultoria Ambiental &amp; Sustentabilidade LTDA</strong>, inscrita no CNPJ
          66.518.484/0001-73, com sede na Avenida Landscape, 3.125, Bairro Gávea, Uberlândia/MG
          (&quot;Campos Consultoria&quot;, &quot;nós&quot;), respeita a sua privacidade. Esta Política explica
          como coletamos, usamos, armazenamos e protegemos seus dados pessoais, em conformidade com a
          Lei Geral de Proteção de Dados Pessoais (LGPD – Lei nº 13.709/2018).
        </p>
      </section>

      <h2 className="mb-3 mt-10 text-xl font-semibold">1. Quais dados coletamos</h2>
      <p className="mb-3">
        Coletamos apenas os dados que você nos fornece voluntariamente ao preencher formulários em
        nosso site, em formulários de anúncios do Google (Google Ads) ou ao entrar em contato conosco
        por e-mail, telefone ou WhatsApp:
      </p>
      <ul className="list-disc space-y-1 pl-6">
        <li>Nome completo;</li>
        <li>E-mail;</li>
        <li>Número de telefone;</li>
        <li>Cidade;</li>
        <li>Nome da empresa;</li>
        <li>Informações sobre o serviço de interesse e a mensagem que você nos enviar.</li>
      </ul>
      <p className="mt-3">
        Também podem ser coletados automaticamente dados de navegação (como endereço IP, tipo de
        navegador, páginas visitadas e cookies), conforme o item 6.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold">2. Para que usamos seus dados</h2>
      <ul className="list-disc space-y-1 pl-6">
        <li>Responder à sua solicitação de contato ou orçamento;</li>
        <li>Entender a necessidade da sua empresa e elaborar propostas comerciais;</li>
        <li>Prestar os serviços contratados e manter comunicação sobre eles;</li>
        <li>Medir e melhorar o desempenho do nosso site e dos nossos anúncios;</li>
        <li>Cumprir obrigações legais e regulatórias.</li>
      </ul>
      <p className="mt-3">
        Não utilizamos seus dados para finalidades diferentes das informadas aqui e{" "}
        <strong>não vendemos nem alugamos seus dados pessoais</strong> a terceiros.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold">3. Base legal</h2>
      <p>
        Tratamos seus dados com base no seu consentimento, ao preencher e enviar um formulário (art.
        7º, I, da LGPD), na execução de procedimentos preliminares relacionados a contrato a seu
        pedido, como a elaboração de orçamentos (art. 7º, V), no cumprimento de obrigação legal (art.
        7º, II) e no nosso legítimo interesse em medir e aprimorar nossos serviços e comunicações
        (art. 7º, IX).
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold">4. Com quem compartilhamos</h2>
      <p className="mb-3">
        Seus dados podem ser compartilhados apenas com prestadores de serviço necessários à nossa
        operação, que também devem protegê-los:
      </p>
      <ul className="list-disc space-y-1 pl-6">
        <li>Google (Google Ads e formulários de lead, Google Tag Manager e ferramentas de medição);</li>
        <li>Provedores de hospedagem do site e de e-mail;</li>
        <li>Ferramentas de gestão de contatos e organização interna (CRM);</li>
        <li>Autoridades públicas, quando exigido por lei ou ordem judicial.</li>
      </ul>
      <p className="mt-3">
        Alguns desses fornecedores podem armazenar dados fora do Brasil, sempre com salvaguardas
        adequadas, conforme a LGPD.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold">5. Por quanto tempo guardamos</h2>
      <p>
        Mantemos seus dados pelo tempo necessário para atender sua solicitação e manter o
        relacionamento comercial. Contatos que não resultarem em contratação são mantidos por até 24
        meses e depois excluídos. Dados de clientes são mantidos pelo prazo exigido por obrigações
        legais, fiscais e profissionais.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold">6. Cookies e tecnologias de medição</h2>
      <p>
        Nosso site utiliza cookies e tags (como Google Ads e Google Tag Manager) para medir visitas,
        entender como o site é usado e avaliar o resultado de nossos anúncios. Você pode desativar ou
        excluir cookies nas configurações do seu navegador e gerenciar a personalização de anúncios
        do Google em{" "}
        <a
          href="https://myadcenter.google.com/"
          className="text-blue-700 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          myadcenter.google.com
        </a>
        .
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold">7. Seus direitos</h2>
      <p className="mb-3">Conforme o art. 18 da LGPD, você pode, a qualquer momento:</p>
      <ul className="list-disc space-y-1 pl-6">
        <li>Confirmar se tratamos seus dados e acessá-los;</li>
        <li>Corrigir dados incompletos, inexatos ou desatualizados;</li>
        <li>Solicitar anonimização, bloqueio ou eliminação de dados;</li>
        <li>Revogar seu consentimento;</li>
        <li>Solicitar informações sobre com quem compartilhamos seus dados;</li>
        <li>Solicitar a portabilidade dos dados;</li>
        <li>Apresentar reclamação à Autoridade Nacional de Proteção de Dados (ANPD).</li>
      </ul>
      <p className="mt-3">
        Para exercer seus direitos, entre em contato pelos canais do item 9. Responderemos em até 15
        dias.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold">8. Segurança</h2>
      <p>
        Adotamos medidas técnicas e administrativas razoáveis para proteger seus dados contra acesso
        não autorizado, perda, alteração ou divulgação indevida. Apesar disso, nenhum sistema é
        totalmente imune a riscos.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold">9. Contato e encarregado (DPO)</h2>
      <p>
        Responsável pelo tratamento de dados: <strong>Laura Campos Naves Mundim</strong>
        <br />
        E-mail:{" "}
        <a href={`mailto:${EMAIL_CONTATO}`} className="text-blue-700 underline">
          {EMAIL_CONTATO}
        </a>
        <br />
        Telefone: {TELEFONE_CONTATO}
        <br />
        Endereço: Avenida Landscape, 3.125, Bairro Gávea, Uberlândia/MG
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold">10. Alterações desta Política</h2>
      <p>
        Esta Política pode ser atualizada periodicamente. A versão vigente estará sempre disponível
        nesta página, com a data da última atualização.
      </p>
    </main>
  )
}
