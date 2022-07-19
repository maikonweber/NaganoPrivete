import Link from "next/link"
import Style from "./style.module.css"
function Header() {
    return (
        <div className={Style.container}>
            <div className={Style.overlay}></div>
            <div className={Style.boxTitle}>
                <h1 className={Style.title}></h1>
            </div>
        </div >
    )
}

export default Header
