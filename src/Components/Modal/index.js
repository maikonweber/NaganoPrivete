// next component
import Link from "next/link";
import Styles from "./styles.module.css";
import { useState } from "react";
import  { insertLead }  from "../../services/services";

function Modal({open, isOpen,title, message}) {
    console.log(message)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [lastname, setLastname] = useState('');
    const [msg, setMsg] = useState(message);
    // handlesonchange
    const handleName = (e) => {
        setName(e.target.value)
    }

    const last_name = (e) => {
        setLastname(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePhone = (e) => {
        setPhone(e.target.value)
    }

   

    const handleSubmit = async (e) => {
         e.preventDefault()

         if (name != '' && email != '')  {
             const data = {
                 name : name,
                 email : email,
                 last_name : lastname,
                 phone : phone,
                 message : message
             }
             console.log(data)
             const response = await insertLead(data)
             console.log(response)
         } else {
            alert('Email já Cadastrado')
         }
            
      
        }
  
    return (
      <>
    {open ?
 
    <div className={Styles.modal}>
        <div className={Styles.modal__content}>
            <div className={Styles.modal__content__title}>
                <h1>{title}</h1>
          </div>  
            <div className={Styles.modal__content__text}>
                <p> 
                    Preencha este formulário para que possamos verificar suas opções de crédito.
                </p>
                </div>
                <div className={Styles.input}>
                <form onSubmit={handleSubmit}>
                <label>Nome</label>
                <input className={Styles.placeInput} type="text" placeholder="Nome" onChange={handleName}/>
                <label>Sobrenome</label>
                <input className={Styles.placeInput} type="text" placeholder="Sobrenome" onChange={last_name}/>
                <label>Email</label>
                <input className={Styles.placeInput} type="text" placeholder="email" onChange={handleEmail}/>
                <label>Telefone</label>
                <input className={Styles.placeInput} type="text" placeholder="phone" onChange={handlePhone}/>
                <button className={Styles.sendButton} >Send</button>
                <button className={Styles.sendButton} onClick={() => isOpen(!true)} >Cancel</button> 
                </form>
               </div>
               

                    
                <Link href="/">
                    <a>
                        <button>
                        </button>
                    </a>
                </Link>
            </div>
    </div>
    : null}

        </>
    )
}

export default Modal;