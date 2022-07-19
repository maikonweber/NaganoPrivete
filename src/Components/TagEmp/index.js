import Link from "next/link"
import Style from "./style.module.css"

function tagEmp({img,title,text, openModal, link}) {

    return (
        <div className={Style.container}>
            
           <div className={Style.cont1}>
                <img src={img} alt={title}/>
                <strong className={Style.title}>{title}
                </strong>
            
           </div>     
           </div>
    )
}

export default tagEmp
