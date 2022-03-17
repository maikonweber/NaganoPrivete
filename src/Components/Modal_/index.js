// Create modal with img and msg for only visible for  30 se
import Link from "next/link";
import Styles from "./model.module.css";
import { useState } from "react"


function ModalPromotion({open, isOpen,title, message, img}) {
    function closeModal() {
        isOpen(false)
    }


    return (
        <>
        {open ?
        <div className={Styles.modal}>
            <div className={Styles.modal__content}>
                <h1>{title}</h1>
                <div className={Styles.modal__content__title}>
                <img className={Styles.img} src={img}/>
            
                </div>
                <div className={Styles.modal__content__message}>
                    <Link className={Styles.Link} href='/consignados'>
                        <strong> Clique aqui e solicite uma simulação </strong>
                        </Link>
                </div>
                <div className={Styles.modal__content__button}>
                    <button  className={Styles.Button} onClick={closeModal}> Fechar </button>
                </div>
            </div>
        </div>
        :
        <></>
        }

        </>
    )
}

export default ModalPromotion