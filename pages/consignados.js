import Head from 'next/head'
import Topbar from '../src/Components/Topbar'
import Header from '../src/Components/Header'
import Card from '../src/Components/Card'
import { HomeContainer,BoxCard } from '../styles/homeStyle'
import SectionText from '../src/Components/SectionText'
import Footer from '../src/Components/Footer'
import Team from '../src/Components/Team'
import Modal from '../src/Components/Modal'
import { useState } from 'react'
import CardSlice from '../src/Components/cardSlice/cardSlice'

export default function Home() {
  const [modal, setModal] = useState(false)	
  const [title, setTitle] = useState('')
 
  function handleModal(title){ 
    setModal(!modal)
    setTitle(title)
  }

  return (

    <HomeContainer >
      <Modal open={modal} isOpen={setModal} title={title}/>
      <Head>
        <title>Credito Consignados</title>
        <meta name="description" content="Nagano Consultoria é um site especializado em credito consignado, empréstimos imobilário, emprestimos com fgts
        , consultamos qualquer tipo de credito para que você solucione a sua vida financeira de maneira prática" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Topbar/>
    
      <CardSlice ></CardSlice>

      <Footer/>      
    </HomeContainer>
  )
}
