import Head from 'next/head'
import Topbar from '../src/Components/Topbar'
import Footer from '../src/Components/Footer'
import Modal from '../src/Components/Modal'
import Notice from '../src/Components/Notice'
import AboutEmp from '../src/Components/AboutEmp'
import CallUs from '../src/Components/CallUs'
import { useState } from 'react'
import CardSlice from '../src/Components/cardSlice/cardSlice'
import Style from "../styles/consignados.module.css"
import Link from "next/link"
import TagEmp from '../src/Components/TagEmp'

export default function auxilio() {
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
      <TagEmp img='./cash.png' title='Ganhamos o Prêmio Reclame Aqui 2020 e 2021' text='melhor empresa de empréstimo online' />
      </>
  ) 
}
