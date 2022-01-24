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
import { useRouter } from 'next/router'
import Link from "next/link"


export default function Home() {
  const [modal, setModal] = useState(false)	
  const [title, setTitle] = useState('')

  return (

    <main className={Style.homeContainer}>
      <Modal open={modal} isOpen={setModal} title={title}/>
      <Head>
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        <title>Nagano Consultoria</title>
        <meta name="description" content="Nagano Consultoria é um site especializado em credito consignado, empréstimos imobilário, emprestimos com fgts
        , consultamos qualquer tipo de credito para que você solucione a sua vida financeira de maneira prática" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Topbar/>
      <Header/>
      <div className={Style.boxCard} > 
          <Card link="/consignados" img="/financa.png" title="Credito Consignado" text="Estudamos e pesquisamos as melhores opções de credito consigando, adequadas aos objetivos"/>
          <Card link="/equality" img="/chart.png" title="Home Equality" text="Realizamos o seu sonho com a solução financeiras Home Equality, adequadas aos objetivos e momento de vida." />
          <Card link="/fgts" img="/money.png" title="Liberação do FGTS" text="Liberamos seu credito de FGTS, adequadas aos objetivos e momento de vida." />
          <Card link="/detran" img="/car.png" title="Credito para Veiculos" text="Credito para aquisição de carros, caminhões, credito para pagamento de IPVA e Documentação" />
          <Card link="/pessoal" img="/cash.png" title="Credito Pessoal" text="Credito Pessoal vinculado a conta corrente, boleto ou pela fatura de conta de consumo"/>
      </div>

      <SectionText 
          id="about"
          title="Qual o nosso diferencal?"
          text="A Nagano Consultoria oferece atendimento personalizado e humanizado, analisando todas possibilidade de credito e condições de aquisição de credito.
          prestando um atendimento rápido e eficiente, sempre com foco na satisfação do cliente."
          image="/05-image.jpg"
          order="normal"
      />
      <SectionText 
        title="Bancos Parceiros"
        text="Parceria com diversos bancos para que encaixe melhor condições de financiamento
        do cliente, localizando taxas e condições melhores no mercado,
        sempre com foco na satisfação do cliente."
        
        image="/03-image.jpg"
        order="reverse"
      />
      <SectionText 
        title="Atendimento presencial e virtual"
        text="Atendimento presencial e virtual, conheça nossas instalações
        nosso ambiente, visite e adquira aqui o seu sonhos, lhe trazendo maior segurança e tranquilidade."
        image="/04-image.jpg"
        order="normal"
      />
      {/* <Team img="/people.png"/>   */}
      <Footer id="contact"/>      
    </main>
  )
}
