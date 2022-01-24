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
      <Modal open={modal} isOpen={setModal} title={'Home Equility'} message={`HomeEquality : ${msg}`} />
      <Head>
      <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        <title>Credito Consignados</title>
        <meta name="description" content="Nagano Consultoria é um site especializado em credito consignado, empréstimos imobilário, emprestimos com fgts
        , consultamos qualquer tipo de credito para que você solucione a sua vida financeira de maneira prática" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={Style.header}>
        <div className={Style.container}>
          <div className={Style.left}>
            <h1>Como é o Empréstimo com Garantia de Imóvel?</h1>
            <span>O Empréstimo com Garantia de Imóvel do Inter, também conhecido como Home Equity, funciona assim: você pode pedir um empréstimo a partir de R$ 30 mil e coloca seu imóvel como garantia de pagamento sem você precisar vender ou sair dele, e tem parcelas que cabem no seu bolso..</span>
          </div>
          <div className={Style.right}>
            <CardSlice openModal={handleModal} ></CardSlice>
          </div>
        </div>
      </div>

      <section className={Style.sectionCards}>
        <div className={Style.container}>
          <div className={Style.top}>
            <h1>Como é o Empréstimo com Garantia de Imóvel?</h1>
            <p>O Empréstimo com Garantia de Imóvel do Inter, também conhecido como Home Equity, funciona assim: você pode pedir um empréstimo a partir de R$ 30 mil e coloca seu imóvel como garantia de pagamento sem você precisar vender ou sair dele, e tem parcelas que cabem no seu bolso.</p>
             <p>As taxas e prazos dessa modalidade de empréstimo são as melhores do mercado. Além disso, você pode pedir seu empréstimo de até 50% do valor do seu imóvel sem precisar vender ou sair dele.</p>
          </div>
          <div className={Style.bottom}>
            <div className={Style.card}>
              <strong>Emprestimo Cred IPVA </strong>
              <p>Está com IPVA atrasado ? Parcele conosco em até 13 parcelas </p>
              <Link href='/detran'><strong>Simule</strong></Link>
            </div>

            <div className={Style.card}>
            <strong>Emprestimo Garantia FGTS</strong>
              <p>Faça agora simulação com as Você pode antecipar os próximos 7 anos do seu saque-aniversário</p>
              <Link href='/fgts'><strong>Simule</strong></Link>
            </div>

            <div className={Style.card}>
            <strong>Credito Pessoal</strong>
              <p>ma determinada quantia em dinheiro, concedida por uma instituição bancária ou financeira, que tem como maior diferencial a liberdade para o seu uso</p>
              <Link href='/pessoal'><strong>Simule</strong></Link>
            </div>
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
                verificando todas as possibilidade de emprestimos. Você terá aúxilio do início ao fim o melhor atendimento
                com nossos Consultores Auxiliando em sua aquisição de credito.</p>
            </div>
      </section>
      <Footer />
      </>
  ) 
}
