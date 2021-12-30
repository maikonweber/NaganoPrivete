import Head from 'next/head'
import Topbar from '../src/Components/Topbar'
import Footer from '../src/Components/Footer'
import Modal from '../src/Components/Modal'
import { useState } from 'react'
import CardSlice from '../src/Components/cardSlice/cardSlice'
import Style from "../styles/consignados.module.css"
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import Router from 'next/router'
import  {v1_teste, getAllLeads} from '../src/services/services'
import Table from '../src/Components/Table'


export default function Home(datax) {
  const [modal, setModal] = useState(false)
  console.log(datax)
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
      } else {
        const data = await v1_teste(token)
    
        if (data.status === true) {
          return {
            props: {
              token: datax,
            }
          }
        } else {
          return {
            redirect: {
              destination: '/',
              permanent: false,
            }
          } 
        }
      }
      return {
        props: {
          token
        }
      }
    }
