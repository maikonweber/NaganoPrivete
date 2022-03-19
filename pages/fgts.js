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
      <Modal open={modal} isOpen={setModal} title={'Crédito com FGTS'} message={`Fgts : ${msg}`} />
      <Head>
        <title>Credito Consignados</title>
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        <meta name="description" content=">O empréstimo com uso do Fundo de Garantia do Tempo de Serviço do trabalhador (FGTS) surgiu como alternativa para quem precisa de crédito com juros baixos e 
              nem sempre consegue colocar algum bem, como uma casa ou carro, como garantia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={Style.header}>
        <div className={Style.container}>
          <div className={Style.left}>
            <h1> Emprestimo com FGTS</h1>
            <span>Se você tem saldo no FGTS e quer antecipar o saque-aniversário, já pode solicitar um empréstimo com garantia do 
             Nessa modalidade, você aumenta suas chances de aprovação e tem acesso a juros mais baixos. E o melhor: a contratação é 100% online. Faça uma simulação gratuita informando o valor de seu saldo!</span>
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
            <p>O empréstimo com uso do Fundo de Garantia do Tempo de Serviço do trabalhador (FGTS) surgiu como alternativa para quem precisa de crédito com juros baixos e 
              nem sempre consegue colocar algum bem, como uma casa ou carro, como garantia.O FGTS funciona como uma precaução, caso o trabalhador não consiga honrar com o 
              pagamento do empréstimo, o dinheiro existente no fundo de garantia poderá cobrir o saldo devedor. Por conta disso, o empréstimo com uso do FGTS possui um baixo risco para os bancos e possibilita que as taxas de juros sejam mais baixas, em comparação com as taxas dos empréstimos comuns..</p>
          </div>
          <div className={Style.bottom}>
            {/* <div className={Style.card}>
              <strong> Home Equity </strong>
              <p>Você pode pedir um empréstimo a partir de R$ 30 mil usando imóvel como garantia de pagamento sem você precisar vender ou sair dele, e tem parcelas que cabem no seu bolso.</p>
              <Link href='/equity'><strong>Simule</strong></Link>
            </div> */}

            {/* <div className={Style.card}>
              <strong>Emprestimo Cred IPVA </strong>
              <p>Está com IPVA ou documento atrasado ? Parcele conosco em até 12 parcelas. </p>
              <Link href='/detran'><strong>Simule</strong></Link>
            </div> */}

            {/* <div className={Style.card}>
              <strong>Credito Pessoal </strong>
              <p>Uma determinada quantia em dinheiro, concedida por uma instituição bancária ou financeira, que tem como maior diferencial a liberdade para o seu uso, Pode ser vinculado a conta corrente, conta de consumo de energia e boleto</p>
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
              <h1>Credito com garantia</h1>
              <p>Faça agora simulação com as menores taxas do mercadoCom seu carro como garantia do empréstimo, você tem juros a partir de 0,99% ao mês e as melhores condições.
              Com seu carro como garantia do empréstimo, você tem juros a partir de 0,99% ao mês e as melhores condições.</p>
            </div>
      </section>
      <Footer />
      </>
  ) 
}
