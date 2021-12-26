import Head from 'next/head'
import Topbar from '../src/Components/Topbar'
import Header from '../src/Components/Header'
import Card from '../src/Components/Card'
import Style from '../styles/homeStyle.module.css'
import SectionText from '../src/Components/SectionText'
import Footer from '../src/Components/Footer'
import Team from '../src/Components/Team'
import Modal from '../src/Components/Modal'
import { useState } from 'react'

export default function Home() {
  const [modal, setModal] = useState(false)	
  const [title, setTitle] = useState('')
 
  function handleModal(title){ 
    setModal(!modal)
    setTitle(title)
  }

  return (

    <main className={Style.homeContainer}>
      <Modal open={modal} isOpen={setModal} title={title}/>
      <Head>
        <title>Nagano Consultoria</title>
        <meta name="description" content="Nagano Consultoria é um site especializado em credito consignado, empréstimos imobilário, emprestimos com fgts
        , consultamos qualquer tipo de credito para que você solucione a sua vida financeira de maneira prática" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Topbar/>
      <Header/>
      <div className={Style.boxCard} > 
          <Card openModal={handleModal}  img="/financa.png" title="Credito Consignado" text="Estudamos e pesquisamos as melhores opções de credito consigando, adequadas aos objetivos e momento de vida."/>
          <Card openModal={handleModal} img="/chart.png" title="Credito Imobilário" text="Realizamos o seu sonho credito e soluções financeiras fornecidas pela caixa, adequadas aos objetivos e momento de vida." />
          <Card openModal={handleModal}img="/money.png" title="Liberação do FGTS" text="Liberamos seu credito de FGTS, adequadas aos objetivos e momento de vida." />
      </div>

      <SectionText 
          title="Qual o nosso diferencal?"
          text="Preencha o formulário abaixo e receba um orçamento para a criação de um site profissional! Nós da Consultoria Digital, somos uma empresa especializada em WordPress!"
          image="/01-image.png"
          order="normal"
      />
      <SectionText 
        title="Qual o nosso diferencal?"
        text="Preencha o formulário abaixo e receba um orçamento para a criação de um site profissional! Nós da Consultoria Digital, somos uma empresa especializada em WordPress!"
        image="/01-image.png"
        order="reverse"
      />

      <Team img="/people.png"/>
  
      <Footer/>      
    </main>
  )
}
