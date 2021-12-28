import Head from 'next/head'
import Topbar from '../src/Components/Topbar'
import Footer from '../src/Components/Footer'
import Modal from '../src/Components/Modal'
import { useState } from 'react'
import CardSlice from '../src/Components/cardSlice/cardSlice'
import Style from "../styles/consignados.module.css"
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'

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
      

      <Footer />
      </>
  ) 
}

export const getServerSideProps = async (ctx) => {
     const { ['next.auth.token']: token } = parseCookies(ctx)
      if (!token) {
        return {
          redirect: {
            destination: '/',
            permanent: false,
          }
        }
      }
      return {
        props: {}
      }
    }