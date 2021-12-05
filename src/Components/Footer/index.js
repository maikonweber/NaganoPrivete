import Link from "next/link"
import Style from "./style.module.css"

function Footer({ img, title, text }) {
    return (
        <div className={Style.container}>
            <div className={Style.cont}>
                <div className={Style.left}>
                    <img className={Style.logo} src="/logo.svg" />
                    <ul className={Style.list}>
                        <li className={Style.itemList}>
                            <Link href="/">
                                <>
                                    <img src="/um.svg" />
                                    @naganocnsultoria02
                                </>
                            </Link>
                        </li>
                        <li className={Style.itemList}>
                            <Link href="/">
                                <>
                                    <img src="/tres.svg" />
                                    @naganocnsultoria02
                                </>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div  className={Style.midlle}>
                    <ul className={Style.list}>
                        <li className={Style.itemList}>
                            <Link href="/">
                                <>
                                    <img src="/dois.svg" />
                                    @naganocnsultoria02
                                </>
                            </Link>
                        </li>
                        <li className={Style.itemList}>
                            <Link href="/">
                                <>
                                    <img src="/quatro.svg" />
                                    @naganocnsultoria02
                                </>
                            </Link>
                        </li>
                        <li className={Style.itemList}>
                            <Link href="/">
                                <>
                                    <img src="/cinco.svg" />
                                    @naganocnsultoria02
                                </>
                            </Link>
                        </li>
                    </ul>
                </div >
                <div className={Style.right}>
                    <ul className={Style.list}>
                        <li className={Style.itemList}>
                            <Link href="/">
                                <>
                                    <img src="/um.svg" />
                                    @naganocnsultoria02
                                </>
                            </Link>
                        </li>
                        <li className={Style.itemList}>
                            <Link href="/">
                                <>
                                    <img src="/tres.svg" />
                                    @naganocnsultoria02
                                </>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <button className={Style.button}>©2021 por Nagano Soluções Financeiras</button>
        </div>
    )
}

export default Footer
