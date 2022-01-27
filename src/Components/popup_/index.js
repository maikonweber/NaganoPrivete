import Link from "next/link"
import Style from "./styles.module.css"
import { useState } from "react"

export default function Popup({}){
    const [modal, setModal] = useState(false)


    return (
        <>
        {modal ? '' : 
        <div className={Style.container} onClick={() => setModal(!false) } >
            <strong className={Style.title} onClick={ () => setModal(!false) }>{`Não solicitamos qualquer valor antecipado para liberação de credito`}</strong>
        </div>
    }
        </>
    )
}


