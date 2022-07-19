import Link from "next/link"
import Style from "./style.module.css"

function AboutEmp({img,title,text, openModal, link}) {



    return (
        <div className={Style.container}>
            <strong className={Style.title}>{title}</strong>
           <div className={Style.cont}>
                <img src={img} alt={title}/>
           </div>
           <div className={Style.cont}>
                <span className={Style.text}>{text}</span>
           </div>
        
        </div>
    )
}

export default AboutEmp
