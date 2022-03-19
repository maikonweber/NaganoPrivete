// Create modal with img and msg for only visible for  30 se
import Link from "next/link";
import Styles from "./model.module.css";
import { useState } from "react"
import Router from "next/router";


function ModalPromotion({open, isOpen,title, message, img}) {
    function closeModal() {
        isOpen(false)
    }

    function useRouteToConsignados () {
        Router.push("/consignados")
    }


    return (
        <>
        {open ?
        <div className={Styles.modal}>
            <div className={Styles.modal__content}>
                <div className={Styles.modal__content__title}>
                <h1>{title}</h1>
                </div>
                <div className={Styles.modal__content__message}>
                <img className={Styles.img} src={img}/>
                <div className={Styles.modal__content__button}>
                <button className={Styles.Button} onClick={() => useRouteToConsignados()} >
                       Clique aqui e solicite uma simulação 
                 </button>
                </div>
                <div className={Styles.modal__content__button}>
                    <button className={Styles.Button} onClick={closeModal} >
                          Fechar
                    </button>
            </div>
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