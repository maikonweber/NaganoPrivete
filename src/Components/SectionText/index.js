import Link from "next/link"
import Style from "./style.module.css"
function SectionText({id,title,text,image,order}) {
    return (
        <div id={id && id} className={Style.container}>
           <div className={`${Style.cont} ${order !== "normal" && Style.active}`}>
               <div className={`${Style.left}  ${order == "normal" && Style.active}`} >
                    <h2 className={Style.title}>{title}</h2>
                    <p className={Style.text}>{text}</p>
               </div>
               <div className={`${Style.Right} ${order == "normal" && Style.active}`} >
                    <div className={`${Style.contImage}  ${order == "normal" && Style.active}`} >
                        <img src={image}/>
                    </div>
               </div>
           </div>
        </div>
    )
}

export default SectionText
