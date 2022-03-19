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
      <Modal open={modal} isOpen={setModal} title={'Home Equility'} message={`Detran : ${msg}`} />
      <Head>
      <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        <title>Crédito Consignados</title>
        <meta name="description" content="Cred IPVA é uma linha especial de financiamento para pessoa física
        ,direcionado ao pagamento de encargos como IPVA (atrasado ou não), DPVAT (seguro obrigatório), multas de trânsito e taxa de licenciamento. O empréstimo está disponível somente para o pagamento de taxas de carrosa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={Style.header}>
        <div className={Style.container}>
          <div className={Style.left}>
            <h1>Faça agora mesmo a simulação do seu Cred IPVA</h1>
            <span>O Cred IPVA é uma linha especial de financiamento para correntistas, pessoas físicas, direcionado ao pagamento de encargos como IPVA (atrasado ou não), DPVAT (seguro obrigatório), multas de trânsito e taxa de licenciamento. O empréstimo está disponível somente para o pagamento de taxas de carros.</span>
          </div>
          <div className={Style.right}>
            <CardSlice openModal={handleModal} ></CardSlice>
          </div>
        </div>
      </div>

      <section className={Style.sectionCards}>
        <div className={Style.container}>
          <div className={Style.top}>
            <h1>Como funciona o processo de empréstimo</h1>
            <p> A liberação do empréstimo é ágil e sem burocracia. O cliente tem duas opções de prazo e taxas. De 2 a 12 meses, a taxa de juros é de 4,10% ao mês, e de 13 a 24 meses, 4,80% ao mês. O pagamento é feito por meio de débito direto em conta-corrente..</p>
          </div>
          <div className={Style.bottom}>
            <div className={Style.card}>
            <strong>Empréstimo Garantia FGTS</strong>
              <p>Faça agora simulação com as Você pode antecipar os próximos 7 anos do seu saque-aniversário</p>
              <Link href='/fgts'><strong>Simule</strong></Link>
            </div>

            {/* <div className={Style.card}>
                <strong> Home Equity </strong>
              <p>Você pode pedir um empréstimo a partir de R$ 30 mil usando imóvel como garantia de pagamento sem você precisar vender ou sair dele, e tem parcelas que cabem no seu bolso.</p>
              <Link href='/equity'><strong>Simule</strong></Link>
            </div> */}

            {/* <div className={Style.card}>
            <strong>Credito Pessoal</strong>
              <p>Uma determinada quantia em dinheiro, concedida por uma instituição bancária ou financeira, que tem como maior diferencial a liberdade para o seu uso</p>
              <Link href='/pessoal'><strong>Simule</strong></Link>
            </div> */}
          </div>
        </div>
      </section>

      <section className={Style.desc}>
            <div className={Style.leftCont}>
              <img src="/pc.jpg" alt="image"/>
            </div>
            <div className={Style.rightCont}>
              <h1>Atendimento Personalizado.</h1>
              <p>Na Nagano Consultoria temos um atendimento personalizado e humanizado, entremos em contato sempre com nosso clientes,
                verificando todas as possibilidade de empréstimos. Você terá aúxilio do início ao fim o melhor atendimento
                com nossos Consultores Auxiliando em sua aquisição de credito.</p>
            </div>
      </section>
      <Footer />
      </>
  ) 
}