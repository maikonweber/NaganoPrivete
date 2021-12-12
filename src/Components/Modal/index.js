// next component
import Link from "next/link"
import Styles from "./styles.module.css"

function Modal({open, isOpen,title}) {
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
                <input className={Styles.placeInput} type="text" placeholder="email"/>
                <input className={Styles.placeInput} type="text" placeholder="email"/>
                <input className={Styles.placeInput} type="text" placeholder="email"/>
                <input className={Styles.placeInput} type="text" placeholder="phone"/>
                <input className={Styles.placeInput} type="text" placeholder="message"/>
                <button className={Styles.sendButton} >Send</button>
                <button className={Styles.sendButton} onClick={() => isOpen(!true)} >Cancel</button> 
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