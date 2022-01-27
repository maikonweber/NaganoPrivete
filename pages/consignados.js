import Head from 'next/head'
import Topbar from '../src/Components/Topbar'
import Footer from '../src/Components/Footer'
import Modal from '../src/Components/Modal'
import { useState } from 'react'
import CardSlice from '../src/Components/cardSlice/cardSlice'
import Style from "../styles/consignados.module.css"
import Link from "next/link"

export default function Home() {
  const [modal, setModal] = useState(false)
  const [title, setTitle] = useState('')
  const [msg, setMsg] = useState('')

  function handleModal(title, msg) {
    setModal(!modal)
    setTitle(title)
    setMsg(msg)
  }

  return (
    <>
      <Topbar />
      <Modal open={modal} isOpen={setModal} title={'Home Equility'} message={`Consignados : ${msg}`} />
      <Head>
      <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        <title>Credito Consignados</title>
        <meta name="description" content="Crédito Consignado
        Disponível para você usar quando e como quiser. Aproveite para realizar seus planos: reforma da casa, viagem dos sonhos, organizar sua vida financeira,
        sempre garantindo para você os melhores valores taxas e valores liberados" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={Style.header}>
        <div className={Style.container}>
          <div className={Style.left}>
            <h1>Faça a gora mesmo a simulação do seu emprestimo consignado</h1>
            <span>Analisamos as todas possibilidades de credito consignado, verificamos em todos os bancos parceiros
              oferecemos atendimento especializado com consultores a pronta disposição para ajudar na melhor opção de credito.</span>
          </div>
          <div className={Style.right}>
            <CardSlice openModal={handleModal} ></CardSlice>
          </div>
        </div>
      </div>

      <section className={Style.sectionCards}>
        <div className={Style.container}>
          <div className={Style.top}>
            <h1>Como funciona o processo de emprestimo</h1>
            <p>O significado de consignado está atrelado à particularidade desse crédito. Ele é descontado diretamente no contracheque, holerite ou benefício do INSS. Ele é mais comum para funcionários públicos, aposentados e pensionistas. Esqueça a burocracia. Com a gente, você não precisa de avalista e seu crédito fica disponível rapidinho.</p>
            <p>Verificamos em todos os bancos parceiros as possibilidades de emprestimos consignados, sempre garantindo para você os melhores valores taxas e valores liberados.</p>
          </div>
          <div className={Style.bottom}>
            <div className={Style.card}>
              <strong>Emprestimo Cred IPVA </strong>
              <p>Está com IPVA atrasado ? Parcele conosco em até 13 parcelas </p>
              <Link href='/detran'><strong>Simule</strong></Link>
            </div>

            <div className={Style.card}>
            <strong> Home Equity </strong>
              <p>Você pode pedir um empréstimo a partir de R$ 30 mil usando imóvel como garantia de pagamento sem você precisar vender ou sair dele, e tem parcelas que cabem no seu bolso.</p>
              <Link href='/equity'><strong>Simule</strong></Link>
            </div>

            <div className={Style.card}>
            <strong>Emprestimo Garantia FGTS</strong>
              <p>Faça agora simulação com as Você pode antecipar os próximos 7 anos do seu saque-aniversário</p>
              <Link href='/fgts'><strong>Simule</strong></Link>
            </div>
          </div>
        </div>
      </section>

      <section className={Style.desc}>
            <div className={Style.leftCont}>
              <img src="/pc.jpg" alt="image"/>
            </div>
            <div className={Style.rightCont}>
              <h1>Atendimento Personalizado</h1>
              <p> Nós da Nagano Consultoria temos um atendimento personalizado e humanizado, entremos em contato sempre com nosso clientes,
                verificando todas as possibilidade de emprestimos. Você terá aúxilio do início ao fim o melhor atendimento
                com nossos Consultores Auxiliando em sua aquisição de credito.</p>
            </div>
      </section>
      <Footer />
      </>
  ) 
}
