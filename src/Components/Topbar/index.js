import react from 'react';
import Link from "next/link"
import {Container,Nav,Cont,ContLink,Text,Button} from "./styled"


function Topbar() {
    return (
        <Container  id="navbar">
            <Nav>
                <Link href="/"><img src="/logo.svg" alt="Logo Nagano consultoria." /></Link>
                <Cont >
                    <ContLink >
                        <Link href="/"><Text>Home</Text></Link>
                        <Link href="/"><Text>About us</Text></Link>
                        <Link href="/"><Text>Contact</Text></Link>
                        <Button>Simule</Button>
                    </ContLink>
                </Cont>
            </Nav>
        </Container>
    )
}

export default Topbar
