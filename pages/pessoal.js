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
        <meta name="description" content="Esse crédito não está relacionado a finalidades específicas. Na verdade, ele é utilizado justamente para uso pessoal, sendo liberado pelas financeiras com juros que dependem de cada condição
                podendo ser debitado direto em conta pessoal, boleto ou conta de consumo de energia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={Style.header}>
        <div className={Style.container}>
          <div className={Style.left}>
            <h1> O crédito pessoal empréstimo destinada para Pessoa Física </h1>
            <span>Esse crédito não está relacionado a finalidades específicas. Na verdade, ele é utilizado justamente para uso pessoal, sendo liberado pelas financeiras com juros que dependem de cada condição
                podendo ser debitado direto em conta pessoal, boleto ou conta de consumo de energia</span>
          </div>
          <div className={Style.right}>
            <CardSlice openModal={handleModal} ></CardSlice>
          </div>
        </div>
      </div>

      <section className={Style.sectionCards}>
        <div className={Style.container}>
          <div className={Style.top}>
            <h1>Empréstimo pessoal</h1>
            <p>Essa é uma das modalidades de crédito mais conhecidas. uma das suas principais características é que ela não necessita de comprovação sobre o destino do dinheiro. Para a aprovação, geralmente, é realizada uma análise dos documentos e do histórico de pagamento do consumidor..</p>
             <p>Na categoria de crédito pessoal, a instituição financeira empresta um valor para o trabalhador, desde que ele tenha renda. O valor é liberado para pessoas físicas.
             As condições variam em cada instituição financeira, podendo ter parcelamentos diferenciados. O que importa é você entender o que melhor se encaixa no seu bolso. Não é preciso ter fiador e a liberação do dinheiro é rápida: tudo com o objetivo de descomplicar o empréstimo.
            </p>
          </div>
          <div className={Style.bottom}>
            <div className={Style.card}>
            <strong>Emprestimo Garantia FGTS</strong>
              <p>Faça agora simulação com as Você pode antecipar os próximos 7 anos do seu saque-aniversário</p>
              <Link href='/fgts'><strong>Simule</strong></Link>
            </div>

            <div className={Style.card}>
              <strong>Emprestimo Cred IPVA </strong>
              <p>Está com IPVA atrasado ? Parcele conosco em até 13 parcelas </p>
              <Link href='/detran'><strong>Simule</strong></Link>
            </div>

            <div className={Style.card}>
            <strong> Home Equity </strong>
              <p>Você pode pedir um empréstimo a partir de R$ 30 mil usando imóvel como garantia de pagamento sem você precisar vender ou sair dele, e tem parcelas que cabem no seu bolso</p>
              <Link href='/equity'><strong>Simule</strong></Link>
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
