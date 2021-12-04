import {Container,Overlay,BoxTitle,Title} from "./style"
import Link from "next/link"
function Header() {
    return (
        <Container>
            <Overlay></Overlay>
            <BoxTitle>
                <Title>Qual o preço da felicidade?</Title>
            </BoxTitle>
        </Container>
    )
}

export default Header
