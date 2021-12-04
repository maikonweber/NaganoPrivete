import Link from "next/link"
import { Container, Cont, List, ItemList, Title, Left, Right, Midlle, Bottom } from "./styled"
function Footer({ img, title, text }) {
    return (
        <Container >
            <Cont>
                <Left>
                    <img className="logo" src="/logo.svg" />
                    <List>
                        <ItemList>
                            <Link href="/">
                                <>
                                    <img src="/um.svg" />
                                    @naganocnsultoria02
                                </>
                            </Link>
                        </ItemList>
                        <ItemList>
                            <Link href="/">
                                <>
                                    <img src="/tres.svg" />
                                    @naganocnsultoria02
                                </>
                            </Link>
                        </ItemList>
                    </List>
                </Left>
                <Midlle>
                    <List>
                        <ItemList>
                            <Link href="/">
                                <>
                                    <img src="/dois.svg" />
                                    @naganocnsultoria02
                                </>
                            </Link>
                        </ItemList>
                        <ItemList>
                            <Link href="/">
                                <>
                                    <img src="/quatro.svg" />
                                    @naganocnsultoria02
                                </>
                            </Link>
                        </ItemList>
                        <ItemList>
                            <Link href="/">
                                <>
                                    <img src="/cinco.svg" />
                                    @naganocnsultoria02
                                </>
                            </Link>
                        </ItemList>
                    </List>
                </Midlle>
                <Right>
                    <List>
                        <ItemList>
                            <Link href="/">
                                <>
                                    <img src="/um.svg" />
                                    @naganocnsultoria02
                                </>
                            </Link>
                        </ItemList>
                        <ItemList>
                            <Link href="/">
                                <>
                                    <img src="/tres.svg" />
                                    @naganocnsultoria02
                                </>
                            </Link>
                        </ItemList>
                    </List>
                </Right>
            </Cont>
            <Bottom>©2021 por Nagano Soluções Financeiras</Bottom>
        </Container>
    )
}

export default Footer
