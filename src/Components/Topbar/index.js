import react from 'react';
import Link from "next/link"
import Style from "./style.module.css"
import { FaBars } from "react-icons/fa"
function Topbar({ image }) {
    return (
        <div className={Style.container} id="navbar">
            <nav className={Style.nav}>
                <Link href="/"><img src="/logo.svg" alt="Logo Nagano consultoria." /></Link>
                <div className={Style.cont}>
                    <div className={Style.contLink} >
                        <Link href="/"><span className={Style.text}>Home</span></Link>
                        <Link href="/"><span className={Style.text}>About us</span></Link>
                        <Link href="/"><span className={Style.text}>Contact</span></Link>
                        <button className={Style.button}>Simule</button>
                    </div>
                </div>
                <div className={Style.navMobile}>
                    <FaBars />
                </div>
            </nav>

        </div>
    )
}

export default Topbar
