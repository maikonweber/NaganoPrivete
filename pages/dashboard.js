import Head from 'next/head'
import Topbar from '../src/Components/Topbar'
import Footer from '../src/Components/Footer'
import Modal from '../src/Components/Modal'
import { useEffect, useState } from 'react'
import CardSlice from '../src/Components/cardSlice/cardSlice'
import Style from "../styles/consignados.module.css"
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import Router from 'next/router'
import  {v1_teste, getAllLeads} from '../src/services/services'
import Table from '../src/Components/Table'


export default function Home(datax) {
  const [modal, setModal] = useState(false)
  
  useEffect(() => {


  }, [])


  const data = [
    {nome:"Jarvolino",sobrenome:"Maneiro",email:"email@gmail.com",telefone:"11997821547"},
    {nome:"Renata",sobrenome:"Almeida",email:"esse@gmail.com",telefone:"11997821547"},
    {nome:"Fabiana",sobrenome:"Souza",email:"email@gmail.com",telefone:"11997821547"},
    {nome:"Alessandra",sobrenome:"Ribeiro",email:"email@outlook.com",telefone:"11997821547"},
    {nome:"Mariana",sobrenome:"Martins",email:"email@live.com",telefone:"11997821547"},
    {nome:"Vitoria",sobrenome:"Monteiro",email:"email@hotmail.com",telefone:"11997821547"},
    {nome:"Vitoria",sobrenome:"Monteiro",email:"email@hotmail.com",telefone:"11997821547"},
    {nome:"Vitoria",sobrenome:"Monteiro",email:"email@hotmail.com",telefone:"11997821547"},
    {nome:"Vitoria",sobrenome:"Monteiro",email:"email@hotmail.com",telefone:"11997821547"},
    {nome:"Vitoria",sobrenome:"Monteiro",email:"email@hotmail.com",telefone:"11997821547"},
    {nome:"Vitoria",sobrenome:"Monteiro",email:"email@hotmail.com",telefone:"11997821547"},
    {nome:"Vitoria",sobrenome:"Monteiro",email:"email@hotmail.com",telefone:"11997821547"},
    {nome:"Vitoria",sobrenome:"Monteiro",email:"email@hotmail.com",telefone:"11997821547"},
    {nome:"Vitoria",sobrenome:"Monteiro",email:"email@hotmail.com",telefone:"11997821547"},
    {nome:"Vitoria",sobrenome:"Monteiro",email:"email@hotmail.com",telefone:"11997821547"},
  ]
  // Create table

  return (
    <>
      <Topbar />
      <Modal open={modal} isOpen={setModal} title={title}/>
      <Head>
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        <title>Nagano Consultoria</title>
        <meta name="description" content="Nagano Consultoria é um site especializado em credito consignado, empréstimos imobilário, emprestimos com fgts
        , consultamos qualquer tipo de credito para que você solucione a sua vida financeira de maneira prática" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Table data={datax}/>

      <Footer />
      </>
  ) 
}

export const getServerSideProps = async (ctx) => {
      // get token of browser
      const { 'nextauth.token': token } = parseCookies(ctx)
      const datax = await getAllLeads(token)
      // get token of server
      if (!token) {
       return {
         redirect: {
            destination: '/login',
            permanent: false,
       }
      }
    }
  }
