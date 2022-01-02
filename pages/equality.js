import Head from 'next/head'
import Topbar from '../src/Components/Topbar'
import Footer from '../src/Components/Footer'
import Modal from '../src/Components/Modal'
import { useState } from 'react'
import CardSlice from '../src/Components/cardSlice/cardSlice'
import Style from "../styles/consignados.module.css"

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
            <h1>Faça a gora mesmo a simulação do seu emprestimo</h1>
            <span>Com seu carro como garantia do empréstimo, você tem juros a partir de 0,99% ao mês e as melhores condições.</span>
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
            <p>Com seu carro como garantia do empréstimo, você tem juros a partir de 0,99% ao mês e as melhores condições.</p>
          </div>
          <div className={Style.bottom}>
            <div className={Style.card}>
              <strong>Credito com garantia</strong>
              <p>Faça agora simulação com as menores taxas do mercado</p>
              <strong>Simule</strong>
            </div>

            <div className={Style.card}>
              <strong>Credito com garantia</strong>
              <p>Faça agora simulação com as menores taxas do mercado</p>
              <strong>Simule</strong>
            </div>

            <div className={Style.card}>
              <strong>Credito com garantia</strong>
              <p>Faça agora simulação com as menores taxas do mercado</p>
              <strong>Simule</strong>
            </div>
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
