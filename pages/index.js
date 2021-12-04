import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Topbar from '../src/Components/Topbar'
import Header from '../src/Components/Header'
import Card from '../src/Components/Card'
import { HomeContainer,BoxCard } from '../styles/homeStyle'
import SectionText from '../src/Components/SectionText'
import Footer from '../src/Components/Footer'
import Team from '../src/Components/Team'
export default function Home() {
  return (
    <HomeContainer >
      <Head>
        <title>Nagano Consultoria</title>
        <meta name="description" content="Nagano Consultoria é um site especializado em credito consignado, empréstimos imobilário, emprestimos com fgts
        , consultamos qualquer tipo de credito para que você solucione a sua vida financeira de maneira prática" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Topbar/>
      <Header/>
      <BoxCard > 
          <Card img="/financa.png" title="Credito Consignado" text="Estudamos e pesquisamos as melhores opções de credito consigando, adequadas aos objetivos e momento de vida."/>
          <Card img="/chart.png" title="Credito Imobilário" text="Realizamos o seu sonho credito e soluções financeiras fornecidas pela caixa, adequadas aos objetivos e momento de vida." />
          <Card img="/money.png" title="Liberação do FGTS" text="Liberamos seu credito de FGTS, adequadas aos objetivos e momento de vida." />
      </BoxCard>

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
    </HomeContainer>
  )
}
