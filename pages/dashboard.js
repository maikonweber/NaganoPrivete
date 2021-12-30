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
import  {v1_teste} from '../src/services/services'


export default function Home() {
  const [modal, setModal] = useState(false)

  // Create table

  return (
    <>
      <Topbar />
        

      

      <Footer />
      </>
  ) 
}

export const getServerSideProps = async (ctx) => {
      // get token of browser
      const { 'nextauth.token': token } = parseCookies(ctx)
      // get token of server
      if (!token) {
       return {
         redirect: {
            destination: '/login',
            permanent: false,
       }
      }
      } else {
        console.log('token', token)
        const data = await v1_teste(token)
        console.log(data)
        if (data.status === true) {
          return {
            props: {
              token: token,
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
